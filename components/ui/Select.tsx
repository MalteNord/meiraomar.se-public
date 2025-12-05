import clsx from "clsx";
import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
};

export function Select({ className, ...props }: SelectProps) {
  return (
    <select
      className={clsx(
        "rounded-lg border border-[color:rgba(255,255,255,.15)] bg-[color:rgba(255,255,255,.04)] px-2 py-2 text-sm text-[var(--foreground)] transition hover:border-[color:rgba(255,255,255,.3)] focus:border-[color:rgba(255,255,255,.4)] focus:outline-none",
        "[&>option]:bg-[color:rgba(0,0,0,.95)] [&>option]:text-[var(--foreground)] [&>option]:py-2 [&>option]:px-4",
        className
      )}
      {...props}
    />
  );
}
