import { NextResponse } from "next/server";
import { HeadBucketCommand } from "@aws-sdk/client-s3";
import { r2, R2_BUCKET } from "@/lib/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * R2 연결 헬스체크 — 연결 가능 여부만 반환.
 * 보안: 버킷명·공개 URL·객체 목록 등 내부 정보는 노출하지 않는다.
 */
export async function GET() {
  try {
    await r2.send(new HeadBucketCommand({ Bucket: R2_BUCKET }));
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[/api/r2/health]", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
