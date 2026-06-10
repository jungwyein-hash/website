import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2 } from "@/lib/r2";
import { CATALOGS } from "@/content/catalogs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 카탈로그 PDF를 잠시(5분) 유효한 signed URL로 리다이렉트.
 * 보안: CATALOGS에 등록된 키만 허용 — 버킷·키를 외부 입력으로 받지 않는다.
 *   /api/r2/asset?key=company/catalog/coating-plus.pdf
 */
const CATALOG_BUCKET = "saemi-original";
const ALLOWED_KEYS = new Set(CATALOGS.map((c) => c.key));

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (!key || !ALLOWED_KEYS.has(key)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  try {
    const url = await getSignedUrl(
      r2,
      new GetObjectCommand({ Bucket: CATALOG_BUCKET, Key: key }),
      { expiresIn: 300 }
    );
    const res = NextResponse.redirect(url, 302);
    // signed URL 수명(5분) 안에서만 재사용 — 반복 클릭 시 R2 재서명 방지
    res.headers.set("Cache-Control", "private, max-age=240");
    return res;
  } catch (e) {
    console.error("[/api/r2/asset]", e);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
