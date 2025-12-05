import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";

// Only the year is dynamic - isolate it
async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[color:rgba(255,255,255,.06)] relative z-10">
      <div className="container-page py-6 text-base sm:text-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          ©{" "}
          <Suspense fallback="2025">
            <CurrentYear />
          </Suspense>{" "}
          Meira Omar
        </p>
        <nav className="flex items-center gap-4">
          <Link href="/shows" className="hover:underline">
            Shows
          </Link>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
