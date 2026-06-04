const steps = [
  {
    title: "조건을 확인합니다",
    body: "작물, 지역, 하우스 구조, 사용 기간을 먼저 확인합니다.",
  },
  {
    title: "제품을 고릅니다",
    body: "필요한 기능과 예산에 맞춰 제품군을 좁혀드립니다.",
  },
  {
    title: "가까운 곳에서 받습니다",
    body: "대리점과 공급망을 통해 상담과 구매를 이어갑니다.",
  },
];

export default function SelectProcess() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-4">
          <p className="font-tech text-[12px] font-semibold text-spring-blue">
            SIMPLE PROCESS
          </p>
          <h2 className="mt-4 text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.08] tracking-display text-ink-invert">
            쉽게 제품을 선택하세요
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ol className="divide-y divide-line border-y border-line">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-1 gap-5 py-7 md:grid-cols-[80px_1fr]"
              >
                <span className="font-tech text-[20px] font-semibold text-spring-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[24px] font-semibold leading-tight text-ink-invert">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-soil-brown-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
