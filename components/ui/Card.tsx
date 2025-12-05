import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-[color:rgba(255,255,255,.03)] border border-[color:rgba(255,255,255,.08)] p-4 backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(255,255,255,.09)_inset]",
        className
      )}
    >
      {children}
    </div>
  );
}
