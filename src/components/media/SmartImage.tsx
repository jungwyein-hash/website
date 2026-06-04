import Image, { type ImageProps } from "next/image";
import { r2Url } from "@/lib/r2-image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  /** R2 키 (예: "design-assets/web/web-hero-image.png") 또는 절대 URL/로컬 경로 */
  src: string;
  alt: string;
};

/**
 * R2 키를 받아 공개 URL로 풀어주는 next/image 래퍼.
 * `R2_PUBLIC_URL` 미설정 시 회색 플레이스홀더(div)로 폴백.
 */
export default function SmartImage({ src, alt, className, ...rest }: Props) {
  const isAbsolute =
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/");
  const resolved = isAbsolute ? src : r2Url(src);

  if (!resolved) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`block bg-line text-soil-brown-mute text-xs flex items-center justify-center ${className ?? ""}`}
        style={{
          width: rest.width as number | undefined,
          height: rest.height as number | undefined,
        }}
      >
        {alt}
      </div>
    );
  }

  return <Image src={resolved} alt={alt} className={className} {...rest} />;
}
