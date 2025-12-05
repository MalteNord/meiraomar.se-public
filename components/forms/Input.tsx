import clsx from "clsx";
import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  name: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, name, className, ...props }, ref) => {
    return (
      <label className="block">
        <div className="text-xs mb-1">{label}</div>
        <input
          {...props}
          ref={ref}
          name={name}
          className={clsx(
            "w-full rounded-xl bg-[color:rgba(255,255,255,.03)] border border-[color:rgba(255,255,255,.12)] px-3 py-2 outline-none focus:border-[color:rgba(255,255,255,.3)]",
            error && "border-red-300",
            className
          )}
        />
        {error && <div className="mt-1 text-[14px] font-medium text-red-400">{error}</div>}
      </label>
    );
  }
);

Input.displayName = "Input";
