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

export async function POST(req: NextRequest) {
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

  const resend = new Resend(apiKey);
  const subject = `[견적 문의] ${body.productGroup} — ${body.name}`;
  const lines = [
    `이름: ${body.name}`,
    `연락처: ${body.phone}`,
    body.email && `이메일: ${body.email}`,
    `제품 분류: ${body.productGroup}`,
    body.productDetail && `제품·사양: ${body.productDetail}`,
    body.quantity && `수량/면적: ${body.quantity}`,
    body.cropRegion && `작목/지역: ${body.cropRegion}`,
    body.message && `\n메시지:\n${body.message}`,
    `\n---\n새미그룹 웹사이트 견적 문의 폼에서 접수`,
  ].filter(Boolean) as string[];

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: body.email,
      subject,
      text: lines.join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[/api/quote] resend error:", e);
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
