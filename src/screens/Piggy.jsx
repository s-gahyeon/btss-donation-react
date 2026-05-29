import AppHeader from "../components/AppHeader.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

/* Piggy bank (저금통) — random-donation savings; 기부하기 → Payment statement. */
export default function Piggy({ go }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <AppHeader title="저금통" onBack={() => go("home")} />
      <div style={{ flex: 1, padding: "12px 30px 110px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 26 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--btss-sand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <Icon name="heart" size={44} />
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--btss-ink-2)", marginTop: 10 }}>랜덤 기부</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 48, color: "var(--btss-forest)", letterSpacing: "-0.02em" }}>₩ 36,000</span>
        </div>
        <div style={{ display: "flex", gap: 16, width: "100%", maxWidth: 288 }}>
          <Button variant="sky" style={{ flex: 1, padding: "14px 0" }}>모으기</Button>
          <Button variant="sky" style={{ flex: 1, padding: "14px 0" }} onClick={() => go("statement")}>기부하기</Button>
        </div>
      </div>
    </div>
  );
}
