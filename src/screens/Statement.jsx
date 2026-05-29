import AppHeader from "../components/AppHeader.jsx";
import Button from "../components/Button.jsx";

const ROWS = [
  ["2020-10-11", "₩3,000"],
  ["2020-09-11", "₩13,000"],
  ["2020-08-11", "₩23,000"],
  ["2020-07-11", "₩60,000"],
  ["2020-06-11", "₩3,000"],
];

/* Payment statement (납입내역) — summary + table; 납부내역 저장 → Thank you. */
export default function Statement({ go }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <AppHeader title="납입내역" onBack={() => go("list")} />
      <div style={{ flex: 1, overflowY: "auto", padding: "8px 30px 100px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", background: "var(--btss-bg-soft)", borderRadius: 20, padding: "18px 22px", marginBottom: 18 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--btss-ink-2)" }}>총 기부금액 <span style={{ color: "var(--btss-ink)" }}>· 6회</span></span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--btss-forest)" }}>₩275,000</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 4px 10px", borderBottom: "1px solid var(--btss-line)" }}>
          <span className="btss-label" style={{ fontSize: 12, color: "var(--btss-ink-2)" }}>날짜</span>
          <span className="btss-label" style={{ fontSize: 12, color: "var(--btss-ink-2)" }}>납입금액</span>
        </div>
        {ROWS.map((r, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "15px 4px", borderBottom: "1px solid var(--btss-line)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--btss-ink)" }}>{r[0]}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--btss-ink)" }}>{r[1]}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <Button variant="primary" onClick={() => go("thanks")}>납부내역 저장</Button>
        </div>
      </div>
    </div>
  );
}
