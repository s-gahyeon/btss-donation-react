import { BTSS_ICONS } from "../icons.js";

/* Inline SVG from the icon registry, tinted via CSS color. */
export default function Icon({ name, size = 24, color, style }) {
  const svg = BTSS_ICONS[name] || "";
  return (
    <span
      style={{ display: "inline-flex", width: size, height: size, color: color || "currentColor", ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
