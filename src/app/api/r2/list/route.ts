import { NextRequest, NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 개발용 — 버킷 안의 키를 prefix로 나열한다.
 *   /api/r2/list?prefix=products/po-film/premium/diastar/hero/&bucket=saemi-web
 */
export async function GET(req: NextRequest) {
  const prefix = req.nextUrl.searchParams.get("prefix") ?? "";
  const bucket = req.nextUrl.searchParams.get("bucket") ?? "saemi-web";
  try {
    const out = await r2.send(
      new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix, MaxKeys: 200 })
    );
    return NextResponse.json({
      ok: true,
      bucket,
      prefix,
      count: out.KeyCount ?? 0,
      keys: (out.Contents ?? []).map((o) => o.Key),
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
