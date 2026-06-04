import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { readFileSync, mkdirSync, createWriteStream } from "node:fs";
import { resolve, dirname } from "node:path";
import { pipeline } from "node:stream/promises";

const env = Object.fromEntries(
  readFileSync(resolve(process.cwd(), ".env.local"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const client = new S3Client({
  region: "auto",
  endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  },
});

const bucket = process.argv[2];
const key = process.argv[3];
const out = process.argv[4] ?? `tmp/r2/${key}`;

if (!bucket || !key) {
  console.error("usage: node download-r2.mjs <bucket> <key> [outPath]");
  process.exit(1);
}

mkdirSync(dirname(resolve(out)), { recursive: true });
const res = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
await pipeline(res.Body, createWriteStream(resolve(out)));
console.log(`Saved ${out}`);
