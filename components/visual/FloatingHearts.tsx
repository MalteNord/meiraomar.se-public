"use client";
import { useEffect, useRef } from "react";

const MAX_HEARTS = 8;

export default function FloatingHearts() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let activeCount = 0;

    const spawn = () => {
      // Limit active hearts and skip when tab not visible
      if (activeCount >= MAX_HEARTS || document.hidden) return;

      activeCount++;
      const d = document.createElement("div");
      const size = 12 + Math.random() * 10;
      const vy = 30 + Math.random() * 60;
      const dur = 2500 + Math.random() * 2000;

      d.style.cssText = `position:absolute;left:${innerWidth * Math.random()}px;bottom:-${size}px;width:${size}px;height:${size}px;opacity:.9;will-change:transform,opacity;`;
      d.innerHTML = `
        <svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" style="display:block;transform: rotate(${(Math.random() * 20 - 10).toFixed(1)}deg)">
          <path fill="rgba(255, 120, 120, .9)" d="M12 21s-6.716-4.344-9.193-7.29C.15 10.847 1.076 6.9 4.33 5.55 6.28 4.72 8.43 5.27 9.87 6.71L12 8.83l2.13-2.12c1.44-1.44 3.59-1.99 5.54-.16 3.25 1.35 4.18 5.3 1.52 8.16C18.716 16.656 12 21 12 21z"/>
        </svg>
      `;
      el.appendChild(d);

      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        d.style.transform = `translate3d(0,${-vy * p}px,0)`;
        d.style.opacity = String(1 - p);
        if (p < 1) requestAnimationFrame(tick);
        else {
          d.remove();
          activeCount--;
        }
      };
      requestAnimationFrame(tick);
    };

    // Spawn every 2s instead of 1.4s
    const id = setInterval(spawn, 2000);
    return () => clearInterval(id);
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-[2]" aria-hidden />;
}
