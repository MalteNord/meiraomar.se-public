import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { getHeroSettings } from "@/lib/cms.client";

export default async function HeroTitle() {
  const heroSettings = await getHeroSettings();

  // Fallback values if CMS data isn't available
  const title = heroSettings?.title;
  const description = heroSettings?.description;

  return (
    <div className="text-center">
      <h1 className="text-8xl drop-shadow-[0_2px_20px_var(--glow)]">{title}</h1>
      <p className="mt-6 flex justify-center text-xl sm:text-2xl">{description}</p>

      <div className="flex gap-8 mt-6 justify-center">
        <a
          href="https://www.instagram.com/meiraomar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:animate-pulse transition-all"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@meiraomar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:animate-pulse transition-all"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/@Meiraomar1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:animate-pulse transition-all"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
