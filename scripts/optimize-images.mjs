import { mkdir, readdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const IMAGES_DIR = "./public/images";
const QUALITY = 80;

async function optimizeImages() {
  console.log("Starting image optimization...\n");

  const files = await readdir(IMAGES_DIR);
  let totalSaved = 0;

  for (const file of files) {
    const filePath = join(IMAGES_DIR, file);
    const { name, ext } = parse(file);

    // Skip non-image files
    if (![".png", ".jpg", ".jpeg"].includes(ext.toLowerCase())) {
      continue;
    }

    const originalStats = await stat(filePath);
    const originalSize = originalStats.size;

    // Create WebP version
    const webpPath = join(IMAGES_DIR, `${name}.webp`);

    try {
      await sharp(filePath).webp({ quality: QUALITY }).toFile(webpPath);

      const webpStats = await stat(webpPath);
      const saved = originalSize - webpStats.size;
      const percent = ((saved / originalSize) * 100).toFixed(1);

      totalSaved += saved;

      console.log(
        `${file} (${(originalSize / 1024).toFixed(0)}KB) -> ${name}.webp (${(webpStats.size / 1024).toFixed(0)}KB) - saved ${percent}%`
      );
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err.message);
    }
  }

  console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  console.log("\nDone! WebP images created. Update your code to use .webp extensions.");
}

optimizeImages();
