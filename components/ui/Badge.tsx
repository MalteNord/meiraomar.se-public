import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-red-900/80 rounded-full border border-[color:rgba(255,255,255,.18)] bg-[color:rgba(255,255,255,.06)] px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--rose-200)]",
        className
      )}
    >
      {children}
    </span>
  );
}
