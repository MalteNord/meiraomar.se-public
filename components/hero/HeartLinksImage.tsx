"use client";

import HeartLinkImage from "./HeartLinkImage";

export default function HeartLinksImage() {
  return (
    <div className="relative w-full h-[600px] sm:h-[680px] md:h-[750px] lg:h-[850px] flex items-center justify-center">
      {/* Shows - Top Left */}
      <div className="absolute left-[5%] sm:left-[12%] md:left-[18%] lg:left-[20%] top-[3%] sm:top-[6%] md:top-[8%]">
        <HeartLinkImage href="/shows" label="Shows" delay={0} />
      </div>

      {/* Shop - Middle Right */}
      <div className="absolute right-[5%] sm:right-[12%] md:right-[18%] lg:right-[20%] top-[50%] -translate-y-1/2">
        <HeartLinkImage href="/shop" label="Shop" delay={300} />
      </div>

      {/* Contact - Bottom Left (slightly more centered) */}
      <div className="absolute left-[12%] sm:left-[18%] md:left-[24%] lg:left-[28%] bottom-[3%] sm:bottom-[6%] md:bottom-[8%]">
        <HeartLinkImage href="/contact" label="Contact" delay={600} />
      </div>
    </div>
  );
}
