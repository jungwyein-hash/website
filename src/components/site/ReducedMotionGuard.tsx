"use client";

import { useEffect } from "react";

/**
 * prefers-reduced-motion 사용자를 위해 자동재생 배경 비디오를 정지한다.
 * 서버 컴포넌트 페이지의 인라인 <video autoplay>까지 커버 —
 * 클라이언트 내비게이션으로 새로 생기는 비디오는 MutationObserver로 잡는다.
 */
export default function ReducedMotionGuard() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const stop = (v: HTMLVideoElement) => {
      v.removeAttribute("autoplay");
      v.pause();
    };
    const stopAll = () => {
      document.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach(stop);
    };

    let observer: MutationObserver | null = null;
    const apply = () => {
      if (mq.matches) {
        stopAll();
        observer ??= new MutationObserver(stopAll);
        observer.observe(document.body, { childList: true, subtree: true });
      } else {
        observer?.disconnect();
        observer = null;
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      observer?.disconnect();
    };
  }, []);

  return null;
}
