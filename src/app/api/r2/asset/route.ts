import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2 } from "@/lib/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 카탈로그 PDF 등 비공개 자산을 잠시(5분) 유효한 signed URL로 리다이렉트.
 * 카탈로그는 `saemi-original` 버킷에 있다. 키만 쿼리로 받는다.
 *   /api/r2/asset?key=company/catalog/coating-plus.pdf
 */
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  const bucket = req.nextUrl.searchParams.get("bucket") ?? "saemi-original";
  if (!key) {
    return NextResponse.json({ error: "key required" }, { status: 400 });
  }
  try {
    const url = await getSignedUrl(
      r2,
      new GetObjectCommand({ Bucket: bucket, Key: key }),
      { expiresIn: 300 }
    );
    return NextResponse.redirect(url, 302);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
