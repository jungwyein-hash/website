import { NextRequest, NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { r2, R2_BUCKET } from "@/lib/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 개발용 — 공개 버킷(saemi-web)의 키를 prefix로 나열한다.
 * 보안: 프로덕션에서는 비활성. 버킷은 공개 버킷으로 고정 — 외부 입력 안 받음.
 *   /api/r2/list?prefix=products/po-film/premium/diastar/hero/
 */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const prefix = req.nextUrl.searchParams.get("prefix") ?? "";
  try {
    const out = await r2.send(
      new ListObjectsV2Command({ Bucket: R2_BUCKET, Prefix: prefix, MaxKeys: 200 })
    );
    return NextResponse.json({
      ok: true,
      prefix,
      count: out.KeyCount ?? 0,
      keys: (out.Contents ?? []).map((o) => o.Key),
    });
  } catch (e) {
    console.error("[/api/r2/list]", e);
    return NextResponse.json({ ok: false, error: "internal error" }, { status: 500 });
  }
}
