import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

const styles = cva(
  "inline-flex items-center justify-center rounded-full px-18 py-3 text-sm font-medium transition will-change-transform hover:shadow-[0_0_20px_var(--glow)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--red-600)]/75 text-[var(--foreground)] hover:bg-[var(--red-500)]/25 shadow-[0_0_20px_var(--glow)]",
        ghost:
          "bg-transparent text-[var(--foreground)] border border-[color:rgba(255,255,255,.15)] hover:border-[color:rgba(255,255,255,.3)]",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-5 py-3 text-sm",
        lg: "px-6 py-3.5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof styles>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={clsx(styles({ variant, size }), className)} {...props} />;
}
