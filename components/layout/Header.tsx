"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/shows", label: "Shows" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <header className={`sticky top-0 z-40 ${open ? "backdrop-blur-sm" : ""}`}>
      <div className="container-page flex items-center justify-between h-16 sm:h-18">
        <button
          type="button"
          className="px-3 py-2 transition hover:bg-[color:rgba(255,255,255,.08)] rounded-full"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Menu</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-b border-[color:rgba(255,255,255,.06)] backdrop-blur-sm">
          <nav className="container-page py-2 flex flex-col gap-1">
            {menuItems.map(({ href, label }, index) => {
              const isCurrent = isCurrentPage(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 text-lg sm:text-xl rounded transition-all duration-200 ${
                    isCurrent
                      ? "bg-[color:rgba(255,255,255,.10)] opacity-50 cursor-not-allowed pointer-events-none"
                      : "hover:bg-[color:rgba(255,255,255,.08)] hover:translate-x-1"
                  } ${open ? "animate-slide-in" : ""}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => !isCurrent && setOpen(false)}
                  aria-disabled={isCurrent}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
