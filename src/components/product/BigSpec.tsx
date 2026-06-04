import type { BigSpec as BigSpecType } from "@/lib/types";

export default function BigSpec({ specs }: { specs: BigSpecType[] }) {
  return (
    <div className="grid border-y border-line md:grid-cols-3">
      {specs.slice(0, 3).map((s, i) => (
        <div
          key={s.label}
          className={`px-6 py-10 md:px-10 md:py-14 ${
            i > 0 ? "border-line md:border-l" : ""
          }`}
        >
          <p className="mb-4 text-[12px] font-semibold text-soil-brown-mute">
            {s.label}
          </p>
          <p className="font-tech text-[36px] md:text-[48px] lg:text-[64px] font-semibold leading-none text-ink-invert">
            {s.value}
            {s.unit && (
              <span className="ml-2 align-middle text-[16px] text-soil-brown-soft">
                {s.unit}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
