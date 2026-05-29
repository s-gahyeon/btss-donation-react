import { useEffect } from "react";
import { asset } from "../asset.js";

/* White splash — earth-blob mark, 4-colour BTSS wordmark, tagline.
   Auto-advances to Home after ~2.2s (or tap). */
export default function Splash({ go }) {
  useEffect(() => {
    const t = setTimeout(() => go("home"), 2200);
    return () => clearTimeout(t);
  }, [go]);

  return (
    <div
      onClick={() => go("home")}
      style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 26, cursor: "pointer", background: "#fff" }}
    >
      <img src={asset("logo-mark.svg")} alt="BTSS" style={{ width: 210, height: 182 }} />
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 56, letterSpacing: "-0.02em", lineHeight: 1 }}>
        <span style={{ color: "var(--btss-logo-b)" }}>B</span>
        <span style={{ color: "var(--btss-logo-t)" }}>T</span>
        <span style={{ color: "var(--btss-logo-s1)" }}>S</span>
        <span style={{ color: "var(--btss-logo-s2)" }}>S</span>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, color: "var(--btss-ink)", letterSpacing: "-0.3px" }}>
        Better To Society Support
      </div>
    </div>
  );
}
