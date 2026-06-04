import { NextResponse } from "next/server";
import { HeadBucketCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { r2, R2_BUCKET, R2_PUBLIC_URL } from "@/lib/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await r2.send(new HeadBucketCommand({ Bucket: R2_BUCKET }));

    const list = await r2.send(
      new ListObjectsV2Command({ Bucket: R2_BUCKET, MaxKeys: 5 })
    );

    return NextResponse.json({
      ok: true,
      bucket: R2_BUCKET,
      publicUrl: R2_PUBLIC_URL || null,
      objectCount: list.KeyCount ?? 0,
      sample: (list.Contents ?? []).map((o) => ({
        key: o.Key,
        size: o.Size,
        lastModified: o.LastModified,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
