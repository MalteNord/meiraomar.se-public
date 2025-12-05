import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { connection } from "next/server";
import { metadata as studioMetadata } from "next-sanity/studio";
import { Suspense } from "react";
import StudioClient from "./StudioClient";

// Make metadata generation dynamic
export async function generateMetadata(): Promise<Metadata> {
  "use cache: private";
  cacheLife("seconds");

  return {
    ...studioMetadata,
    title: "Studio",
  };
}

// DynamicMarker tells Next.js this route is intentionally dynamic
async function DynamicMarker() {
  const Connection = async () => {
    await connection();
    return null;
  };

  return (
    <Suspense>
      <Connection />
    </Suspense>
  );
}

export default function StudioPage() {
  return (
    <>
      <StudioClient />
      {/* Rendering DynamicMarker tells Next.js this page has dynamic content */}
      <DynamicMarker />
    </>
  );
}
