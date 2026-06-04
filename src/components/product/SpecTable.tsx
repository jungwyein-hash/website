import type { SpecGroup } from "@/lib/types";

export default function SpecTable({ groups }: { groups: SpecGroup[] }) {
  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <div key={g.group}>
          <p className="mb-4 text-[16px] font-semibold text-ink-invert">
            {g.group}
          </p>
          <dl className="border-t border-line">
            {g.rows.map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 border-b border-line py-4 md:grid-cols-[200px_1fr]"
              >
                <dt className="text-[16px] text-soil-brown-mute">{k}</dt>
                <dd className="text-[16px] leading-relaxed text-soil-brown">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
