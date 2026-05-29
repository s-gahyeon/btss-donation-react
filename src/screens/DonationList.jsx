import AppHeader from "../components/AppHeader.jsx";
import Icon from "../components/Icon.jsx";
import ScreenScroll from "../components/ScreenScroll.jsx";

const ITEMS = [
  { nm: "UNICEF", date: "2019-05", c: "var(--btss-sky)" },
  { nm: "Humane Society", date: "2019-04", c: "var(--btss-sage)" },
  { nm: "Good Neighbors", date: "2018-03", c: "var(--btss-sand)" },
  { nm: "Medecins Sans Frontieres", date: "2017-03", c: "var(--btss-olive)" },
];

/* Donation list (기부목록) — org rows; row → Payment statement. */
export default function DonationList({ go }) {
  return (
    <ScreenScroll bottomPad={124}>
      <AppHeader title="기부목록" onBack={() => go("home")} />
      <div style={{ padding: "8px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
        {ITEMS.map((it, i) => (
          <button key={i} onClick={() => go("statement")} style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: "1px solid var(--btss-line)", borderRadius: 20, padding: "16px 18px", cursor: "pointer", textAlign: "left", boxShadow: "var(--shadow-soft)" }}>
            <span style={{ width: 46, height: 46, borderRadius: 14, background: it.c, flex: "0 0 46px" }} />
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--btss-forest)" }}>{it.nm}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--btss-ink-2)", marginTop: 2 }}>{it.date}</span>
            </span>
            <Icon name="back" size={16} style={{ marginLeft: "auto", transform: "rotate(180deg)", color: "var(--btss-fill)" }} />
          </button>
        ))}
      </div>
    </ScreenScroll>
  );
}
