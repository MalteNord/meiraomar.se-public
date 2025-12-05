export function Spinner({ className = "" }: { className?: string }) {
  return (
    <output
      aria-label="Loading"
      className={`
        w-5 h-5
        box-border
        flex-shrink-0
        rounded-full
        border-4 border-solid
        border-white/20
        border-t-white
        animate-spin
        ${className}
      `}
    />
  );
}
