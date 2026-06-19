import type { Metadata } from "next";
import "./globals.css";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import { gowunBatang, notoSansJP } from "@/lib/fonts";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ReducedMotionGuard from "@/components/site/ReducedMotionGuard";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saemigroup.com";
const LOGO_URL = `${SITE_URL}/saemi-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "새미그룹 | 프리미엄 종합농자재",
    template: "%s | 새미그룹",
  },
  description:
    "새미그룹은 PO필름, 하우스 부자재, 농약·비료, 기계 부품을 농가와 대리점에 공급합니다.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "새미그룹",
    title: "새미그룹 | 프리미엄 종합농자재",
    description:
      "PO필름, 하우스 부자재, 농약·비료, 기계 부품을 공급하는 농업 자재 회사입니다.",
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "새미그룹" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "새미그룹",
  alternateName: "Saemi Group",
  url: SITE_URL,
  logo: LOGO_URL,
  slogan: "아그리컬처 새미",
  foundingDate: "2004",
  address: {
    "@type": "PostalAddress",
    streetAddress: "산막공단남10길 10",
    addressLocality: "양산시",
    addressRegion: "경상남도",
    addressCountry: "KR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+82-55-781-1250",
      email: "sae-mi@saemigroup.com",
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean", "English"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/saemigroup_official",
    "https://blog.naver.com/saemigroup",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${gowunBatang.variable} ${notoSansJP.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink-invert">
        <Header />
        <ReducedMotionGuard />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
