"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setInView(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView } as const;
}
