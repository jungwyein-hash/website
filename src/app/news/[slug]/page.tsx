import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { NEWS } from "@/content/news";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news/${slug}` },
    openGraph: {
      title: `${item.title} | 새미그룹`,
      description: item.excerpt,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

const CATEGORY_LABEL: Record<string, string> = {
  release: "신제품",
  press: "보도자료",
  event: "행사",
};

export default async function NewsItemPage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32">
      <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
        {CATEGORY_LABEL[item.category]} · {item.date}
      </p>
      <h1 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.15] max-w-[24ch]">
        {item.title}
      </h1>
      <div className="mt-12 max-w-[60ch] space-y-7 text-[16px] leading-[1.95] text-soil-brown">
        {item.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-16">
        <Link href="/news" className="link-underline text-[16px]">
          ← 뉴스 목록으로
        </Link>
      </div>
    </article>
  );
}
