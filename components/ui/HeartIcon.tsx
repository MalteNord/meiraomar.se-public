import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
};

export function HeartIcon({ size = 16, className }: Props) {
  return (
    <Image
      src="/images/heart_glossy.webp"
      width={size}
      height={size}
      alt=""
      aria-hidden
      className={className}
    />
  );
}
