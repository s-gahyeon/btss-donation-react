import Icon from "../components/Icon.jsx";

/* Thank you (감사합니다) — no status bar/nav; tap → Home. */
export default function Thanks({ go }) {
  return (
    <div
      onClick={() => go("home")}
      style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, cursor: "pointer", padding: 30 }}
    >
      <div style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--btss-sage-ghost)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--btss-sage)", marginBottom: 8 }}>
        <Icon name="heart" size={42} />
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 30, color: "var(--btss-ink)" }}>감사합니다</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--btss-sky)" }}>Thank you</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--btss-ink-2)", marginTop: 4 }}>탭하여 홈으로 돌아가기</div>
    </div>
  );
}
