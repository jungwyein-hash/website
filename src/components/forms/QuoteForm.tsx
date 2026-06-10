"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

const PRODUCT_GROUPS = [
  "PO필름 (프리미엄)",
  "PO필름 (스탠다드)",
  "차광·차열 필름",
  "스크린·네트",
  "방충망·방초시트",
  "보수테이프·기타",
  "농약·비료",
  "정밀기계 부품",
  "YASKAWA 로봇",
  "기타",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "전송 실패");
      }
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-line p-10 max-w-[60ch]">
        <p className="text-[12px] tracking-normal uppercase text-spring-blue mb-3">
          접수 완료
        </p>
        <h2 className="text-[24px] tracking-normal mb-3">
          문의가 정상 접수되었습니다.
        </h2>
        <p className="text-[16px] leading-[1.85] text-soil-brown-soft">
          영업 담당자가 영업일 기준 1–2일 안에 연락드리겠습니다. 급한 문의는
          본사(055-781-1250)로 직접 전화 주셔도 좋습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10 max-w-[680px]">
      {/* Honeypot */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <Field label="제품 분류" name="productGroup" required>
        <select
          id="productGroup"
          name="productGroup"
          required
          className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue"
        >
          <option value="">선택해 주세요</option>
          {PRODUCT_GROUPS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </Field>

      <Field label="제품명·사양 (선택)" name="productDetail">
        <input
          type="text"
          id="productDetail"
          name="productDetail"
          maxLength={200}
          placeholder="예: 코팅플러스 0.10mm"
          className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue"
        />
      </Field>

      <Field label="수량 / 면적 (선택)" name="quantity">
        <input
          type="text"
          id="quantity"
          name="quantity"
          maxLength={100}
          placeholder="예: 200평 / 5롤"
          className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue"
        />
      </Field>

      <div className="grid md:grid-cols-2 gap-10">
        <Field label="이름" name="name" required>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue"
          />
        </Field>
        <Field label="연락처" name="phone" required>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            maxLength={50}
            placeholder="010-0000-0000"
            className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue"
          />
        </Field>
      </div>

      <Field label="이메일 (선택)" name="email">
        <input
          type="email"
          id="email"
          name="email"
          maxLength={200}
          className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue"
        />
      </Field>

      <Field label="작목 / 지역 (선택)" name="cropRegion">
        <input
          type="text"
          id="cropRegion"
          name="cropRegion"
          maxLength={200}
          placeholder="예: 토마토 / 경남 진주"
          className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue"
        />
      </Field>

      <Field label="메시지" name="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={5000}
          placeholder="문의 내용을 자유롭게 적어주세요."
          className="w-full bg-transparent border-b border-line py-3 text-[16px] focus:outline-none focus:border-spring-blue resize-none"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-6 py-3 bg-spring-blue text-white text-[16px] tracking-normal disabled:opacity-50 hover:opacity-90 transition-opacity"
        >
          {status === "submitting" ? "전송 중…" : "견적 문의 보내기"}
        </button>
        <a
          href="mailto:sae-mi@saemigroup.com"
          className="link-underline text-[16px] text-soil-brown-soft"
        >
          또는 직접 이메일로
        </a>
      </div>

      {status === "error" && (
        <p className="text-[12px] text-spring-blue/90">
          전송이 어려웠습니다 — {error}. 잠시 후 다시 시도하시거나 본사
          (055-781-1250)로 연락 주세요.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="text-[12px] tracking-normal uppercase text-soil-brown-mute">
        {label}
        {required && <span className="text-spring-blue ml-1">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
