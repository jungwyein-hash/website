import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

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

const bucket = process.argv[2] ?? "saemi-original";
const prefix = process.argv[3] ?? "";

let token;
let total = 0;
do {
  const out = await client.send(
    new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
      ContinuationToken: token,
      MaxKeys: 1000,
    })
  );
  for (const obj of out.Contents ?? []) {
    console.log(`${obj.Size}\t${obj.Key}`);
    total++;
  }
  token = out.IsTruncated ? out.NextContinuationToken : undefined;
} while (token);

console.error(`\n[${bucket}] prefix="${prefix}" total=${total}`);
