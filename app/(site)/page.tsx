import HeartLinksImage from "@/components/hero/HeartLinksImage";
import Hero from "@/components/hero/Hero";

export default async function Home() {
  return (
    <div className="container-page pt-10 pb-16 flex flex-col items-center">
      <Hero />
      {/* Heart-shaped navigation links */}
      <HeartLinksImage />
    </div>
  );
}
