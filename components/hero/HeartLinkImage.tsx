"use client";

import Image from "next/image";
import Link from "next/link";

type HeartLinkImageProps = {
  href: string;
  label: string;
  delay?: number;
};

export default function HeartLinkImage({ href, label, delay = 0 }: HeartLinkImageProps) {
  return (
    <Link
      href={href}
      className="relative block w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group @container"
    >
      {/* Heart image with gentle floating animation */}
      <div
        className="relative w-full h-full animate-pulse transition-transform duration-300 ease-out group-hover:scale-110"
        style={{ animationDelay: `${delay}ms` }}
      >
        <Image src="/images/heart_cropped.webp" alt="" fill className="object-contain" />

        {/* Link text centered inside the heart */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[7.5cqi] text-center px-4 mt-4 drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-2xl">
            {label}
          </span>
        </div>
      </div>
    </Link>
  );
}
