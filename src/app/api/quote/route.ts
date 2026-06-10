import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface QuoteBody {
  productGroup: string;
  productDetail?: string;
  quantity?: string;
  name: string;
  phone: string;
  email?: string;
  cropRegion?: string;
  message?: string;
  /** Honeypot — 봇이 채우면 그대로 무시 */
  company_url?: string;
}

const TO = process.env.QUOTE_TO ?? "sae-mi@saemigroup.com";
const FROM = process.env.QUOTE_FROM ?? "Saemi Group <onboarding@resend.dev>";

/** 필드별 최대 길이 — 초과 시 400 */
const MAX_LEN: Record<string, number> = {
  productGroup: 100,
  productDetail: 200,
  quantity: 100,
  name: 100,
  phone: 50,
  email: 200,
  cropRegion: 200,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * IP당 슬라이딩 윈도우 rate limit (인메모리).
 * 서버리스 인스턴스별로 독립이지만, 단일 IP의 연속 폭주는 충분히 막는다.
 */
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 10_000) hits.clear();
  return false;
}

/** 한 줄 필드에서 개행·제어문자 제거 (헤더 인젝션 방지) */
function sanitizeLine(v: string | undefined): string | undefined {
  return v?.replace(/[\u0000-\u001f\u007f]/g, " ").trim();
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 잦습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 }
    );
  }

  let body: QuoteBody;
  try {
    body = (await req.json()) as QuoteBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  // Honeypot
  if (body.company_url && body.company_url.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.phone || !body.productGroup) {
    return NextResponse.json(
      { ok: false, error: "필수 항목이 누락되었습니다." },
      { status: 400 }
    );
  }

  for (const [field, max] of Object.entries(MAX_LEN)) {
    const v = body[field as keyof QuoteBody];
    if (typeof v === "string" && v.length > max) {
      return NextResponse.json(
        { ok: false, error: "입력이 너무 깁니다." },
        { status: 400 }
      );
    }
  }

  const email = sanitizeLine(body.email);
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "이메일 형식이 올바르지 않습니다." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // 키 미설정 시: 수신자에게는 발송하지 못하지만, 사용자에게는 폴백 안내
    console.warn("[/api/quote] RESEND_API_KEY 미설정. 메일 미발송.", body);
    return NextResponse.json(
      {
        ok: false,
        error:
          "이메일 서비스 점검 중입니다. 본사(055-781-1250) 또는 sae-mi@saemigroup.com으로 연락 주세요.",
      },
      { status: 503 }
    );
  }

  const name = sanitizeLine(body.name)!;
  const productGroup = sanitizeLine(body.productGroup)!;
  const resend = new Resend(apiKey);
  const subject = `[견적 문의] ${productGroup} — ${name}`;
  const lines = [
    `이름: ${name}`,
    `연락처: ${sanitizeLine(body.phone)}`,
    email && `이메일: ${email}`,
    `제품 분류: ${productGroup}`,
    body.productDetail && `제품·사양: ${sanitizeLine(body.productDetail)}`,
    body.quantity && `수량/면적: ${sanitizeLine(body.quantity)}`,
    body.cropRegion && `작목/지역: ${sanitizeLine(body.cropRegion)}`,
    body.message && `\n메시지:\n${body.message}`,
    `\n---\n새미그룹 웹사이트 견적 문의 폼에서 접수`,
  ].filter(Boolean) as string[];

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text: lines.join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[/api/quote] resend error:", e);
    return NextResponse.json(
      {
        ok: false,
        error:
          "전송에 실패했습니다. 본사(055-781-1250)로 연락 주시면 빠르게 도와드리겠습니다.",
      },
      { status: 500 }
    );
  }
}
