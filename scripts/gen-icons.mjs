/* One-off: rasterise the BTSS earth-blob mark onto a white square to make
   app icons (apple-touch-icon + PWA manifest). Run with:
     npm install --no-save @resvg/resvg-js && node scripts/gen-icons.mjs
   Replace the source mark with the real Figma export when available. */
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

// The earth-blob mark (from assets/logo-mark.svg), centred and scaled on a
// white square. Original art is a 230×200 viewBox; we scale it to ~72% and
// centre it inside the icon canvas.
const markBody = `
  <defs><clipPath id="bClip"><circle cx="138" cy="100" r="76"/></clipPath></defs>
  <g clip-path="url(#bClip)">
    <rect x="62" y="24" width="152" height="152" fill="#F2CC8F"/>
    <ellipse cx="150" cy="70" rx="120" ry="44" fill="#F2A678" transform="rotate(-34 150 70)"/>
    <ellipse cx="132" cy="96" rx="128" ry="60" fill="#99A468" transform="rotate(-34 132 96)"/>
    <ellipse cx="112" cy="116" rx="120" ry="62" fill="#8AB5AC" transform="rotate(-34 112 116)"/>
    <ellipse cx="96" cy="150" rx="86" ry="46" fill="#85A9D9" transform="rotate(-30 96 150)"/>
  </g>
  <g fill="#8AB5AC">
    <rect x="36" y="92" width="34" height="9" rx="4.5"/>
    <rect x="22" y="104" width="34" height="8" rx="4"/>
    <rect x="44" y="80" width="24" height="8" rx="4"/>
    <circle cx="16" cy="88" r="4.4"/><circle cx="30" cy="120" r="4"/>
  </g>
  <circle cx="10" cy="100" r="3.4" fill="#85A9D9"/>
  <circle cx="60" cy="66" r="4.4" fill="#99A468"/>
  <circle cx="120" cy="86" r="6" fill="#6f9a90"/>
  <circle cx="178" cy="74" r="6" fill="#8AB5AC"/>
  <circle cx="150" cy="132" r="6.5" fill="#85A9D9"/>
  <circle cx="104" cy="128" r="8" fill="#F2A678" stroke="#fff" stroke-width="2"/>
`;

// Canvas is 512×512 design units. Scale the 230×200 art to ~72% width and
// centre on the main blob (circle at 138,100 in art coords) rather than the
// full bounding box — the left-side "drip" dots would otherwise shift it right.
const S = 512;
const scale = (S * 0.72) / 230;
const tx = S / 2 - 138 * scale;
const ty = S / 2 - 100 * scale;

const icon = (bg) => `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <rect width="${S}" height="${S}" fill="${bg}"/>
  <g transform="translate(${tx} ${ty}) scale(${scale})">${markBody}</g>
</svg>`;

const render = (svg, size) =>
  new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();

const targets = [
  { file: "public/apple-touch-icon-180.png", size: 180, bg: "#ffffff" },
  { file: "public/icon-192.png", size: 192, bg: "#ffffff" },
  { file: "public/icon-512.png", size: 512, bg: "#ffffff" },
  // Maskable (Android adaptive) — same art, full-bleed white so OS masking is safe.
  { file: "public/icon-512-maskable.png", size: 512, bg: "#ffffff" },
];

for (const t of targets) {
  writeFileSync(t.file, render(icon(t.bg), t.size));
  console.log("wrote", t.file, `(${t.size}px)`);
}
