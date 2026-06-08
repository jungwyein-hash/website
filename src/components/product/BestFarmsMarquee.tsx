"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CropIcon from "@/components/product/CropIcon";

export type MarqueeFarm = {
  name: string;
  crop: string;
  /** "지역 작물 · 제품 사용 농가" */
  caption: string;
  /** 한 문장 한줄평 */
  quote: string;
  round: number;
  /** 사진 회전(도) */
  rotate?: number;
  url: string;
};

const EDGE_MASK =
  "linear-gradient(to right, transparent, rgba(0,0,0,0.25) 4%, black 10%, black 90%, rgba(0,0,0,0.25) 96%, transparent)";

export default function BestFarmsMarquee({ farms }: { farms: MarqueeFarm[] }) {
  // 랜덤 재생: SSR/CSR 불일치 방지를 위해 마운트 후 셔플
  const [order, setOrder] = useState<MarqueeFarm[]>(farms);
  useEffect(() => {
    const a = [...farms];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    // 마운트 후 1회 셔플(랜덤 재생). SSR 순서와 분리해 하이드레이션 불일치 방지.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder(a);
  }, [farms]);

  if (order.length === 0) return null;
  // 무한 루프용 한 벌 복제
  const loop = [...order, ...order];

  return (
    <div
      className="farm-marquee relative overflow-hidden"
      style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
    >
      <div className="farm-marquee-track flex w-max gap-4 py-2 lg:gap-5">
        {loop.map((f, i) => (
          <article
            key={i}
            aria-hidden={i >= order.length}
            className="surface-panel flex w-[240px] flex-shrink-0 flex-col overflow-hidden bg-white p-3 lg:w-[260px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-paper-soft">
              {f.url ? (
                <Image
                  src={f.url}
                  alt={`${f.name} 새미우수농가`}
                  fill
                  sizes="260px"
                  className="object-cover"
                  style={
                    f.rotate
                      ? { transform: `rotate(${f.rotate}deg) scale(1.34)` }
                      : undefined
                  }
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-soil-brown-mute">
                  {f.name}
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
              <div className="flex items-center justify-center gap-1.5">
                <h3 className="font-farm-quote text-[20px] font-bold text-soil-brown">
                  {f.name}
                </h3>
                <CropIcon crop={f.crop} />
              </div>
              <p className="mt-1.5 text-center text-[11px] leading-snug text-soil-brown-mute">
                {f.caption}
              </p>
              <p className="font-farm-quote mt-3 text-center text-[13px] leading-relaxed text-soil-brown-soft">
                “{f.quote}”
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
