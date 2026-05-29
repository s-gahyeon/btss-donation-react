import { useEffect } from "react";
import AppHeader from "../components/AppHeader.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import Icon from "../components/Icon.jsx";

const ROWS = [
  { logo: "K", bg: "#FFDF00", fg: "#3a1d1d", nm: "KakaoPay", pct: 100, color: "var(--btss-success)" },
  { logo: "T", bg: "#0050FF", fg: "#fff", nm: "Toss money", pct: 80, color: "var(--btss-sky)" },
  { logo: "N", bg: "#00D037", fg: "#fff", nm: "Naver pay", pct: 64, color: "var(--btss-sand)" },
];

const SyncGlyph = () => (
  <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
    <path d="M2 11h34l-7-8M44 19H10l7 8" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Pay sync (페이연동) — loading screen; auto-advances back to Pay list after ~2.6s. */
export default function PaySync({ go }) {
  useEffect(() => {
    const t = setTimeout(() => go("pay"), 2600);
    return () => clearTimeout(t);
  }, [go]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <AppHeader title="페이연동" onBack={() => go("pay")} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 34px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 8 }}>
          {ROWS.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ width: 52, height: 52, borderRadius: 14, background: r.bg, color: r.fg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, flex: "0 0 52px" }}>{r.logo}</span>
              <div style={{ flex: 1 }}>
                <ProgressBar value={r.pct} color={r.color} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--btss-ink-2)", width: 40, textAlign: "right" }}>{r.pct}%</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 64 }}>
          <span style={{ width: 50, height: 50, borderRadius: 14, background: "#0050FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800 }}>BTSS</span>
          <span style={{ display: "inline-flex", color: "var(--btss-sky)" }}><SyncGlyph /></span>
          <span style={{ width: 50, height: 50, borderRadius: 14, background: "var(--btss-sage)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><Icon name="heart" size={26} /></span>
        </div>
        <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--btss-ink)", marginTop: 26 }}>
          BTSS 와 pay를 연동 중입니다<br />잠시만 기다려 주세요 :)
        </p>
      </div>
    </div>
  );
}
