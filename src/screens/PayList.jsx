import AppHeader from "../components/AppHeader.jsx";

const ROWS = [
  { logo: "K", bg: "#FFDF00", fg: "#3a1d1d", nm: "KakaoPay", amt: "₩ 12,000" },
  { logo: "T", bg: "#0050FF", fg: "#fff", nm: "Toss money", amt: "₩ 12,000" },
  { logo: "N", bg: "#00D037", fg: "#fff", nm: "Naver pay", amt: "₩ 12,000" },
];

/* Pay list (페이 리스트) — linked-pay rows + dashed "+ 페이 추가" → Pay sync. */
export default function PayList({ go }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <AppHeader title="페이 리스트" onBack={() => go("home")} />
      <div style={{ padding: "10px 24px", display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" }}>
        {ROWS.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: "1px solid var(--btss-line)", borderRadius: 20, padding: "14px 18px", boxShadow: "var(--shadow-soft)" }}>
            <span style={{ width: 42, height: 42, borderRadius: 12, background: r.bg, color: r.fg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18 }}>{r.logo}</span>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16, color: "var(--btss-ink)" }}>{r.nm}</span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--btss-forest)" }}>{r.amt}</span>
          </div>
        ))}
        <button onClick={() => go("paysync")} style={{ marginTop: 6, background: "none", border: "1.5px dashed var(--btss-sage)", color: "var(--btss-sage)", borderRadius: 20, padding: "14px", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 15, cursor: "pointer" }}>+ 페이 추가</button>
      </div>
    </div>
  );
}
