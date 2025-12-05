import Image from "next/image";

export default function CloudyBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base layer - only this one is priority */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/images/red-space.webp"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,.6)] opacity-95" />
    </div>
  );
}
