"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);
  const initialPathname = useRef(pathname);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Skip animation on initial page load (preserves LCP)
  // Only animate on client-side navigation after hydration
  const shouldAnimate = isHydrated && pathname !== initialPathname.current;

  if (!shouldAnimate) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
