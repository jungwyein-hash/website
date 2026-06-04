import { S3Client } from "@aws-sdk/client-s3";

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

export const R2_BUCKET = process.env.R2_BUCKET ?? "";
export const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL ?? "";

if (!accountId || !accessKeyId || !secretAccessKey || !R2_BUCKET) {
  throw new Error(
    "R2 환경변수가 설정되지 않았습니다. .env.local에 R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET을 입력하세요."
  );
}

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId, secretAccessKey },
});

export function publicUrl(key: string): string {
  if (!R2_PUBLIC_URL) return "";
  const base = R2_PUBLIC_URL.replace(/\/$/, "");
  const path = key.replace(/^\//, "");
  return `${base}/${path}`;
}
