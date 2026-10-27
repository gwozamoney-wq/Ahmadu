import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

/**
 * Generates the optimised WebP files served by the website from the original
 * photography in assets/source-images. Run with: npm run images
 */

const SRC = "assets/source-images";
const OUT = "public/images/opt";

await fs.mkdir(OUT, { recursive: true });
const files = (await fs.readdir(SRC)).filter((file) => /\.(jpe?g|png)$/i.test(file));

for (const file of files) {
  const base = path.parse(file).name;
  const input = path.join(SRC, file);
  const meta = await sharp(input).metadata();

  const targets = [
    { suffix: "wide", width: Math.min(1600, meta.width) },
  ];

  // The homepage hero benefits from a wider render on large screens.
  if (base.startsWith("hero")) {
    targets.push({ suffix: "1920", width: 1920 });
  }

  for (const target of targets) {
    const output = path.join(OUT, `${base}-${target.suffix}.webp`);
    await sharp(input)
      .resize({ width: target.width, kernel: "lanczos3", withoutEnlargement: !base.startsWith("hero") })
      .sharpen(target.suffix === "1920" ? { sigma: 0.7 } : { sigma: 0.4 })
      .webp({ quality: 84, effort: 5 })
      .toFile(output);
    const size = (await fs.stat(output)).size;
    console.log(`${output.padEnd(52)} ${Math.round(size / 1024)}KB`);
  }
}
