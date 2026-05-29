import Icon from "./Icon.jsx";

/* 56px header — back chevron (left), centred 20px title, circular "more" dot (right). */
export default function AppHeader({ title, onBack }) {
  return (
    <div style={{ position: "relative", height: 56, flex: "0 0 56px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
      <button
        onClick={onBack}
        aria-label="back"
        style={{ position: "absolute", left: 24, top: 18, width: 12, height: 20, background: "none", border: 0, padding: 0, cursor: "pointer", color: "#000" }}
      >
        <Icon name="back" size={20} />
      </button>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 20, letterSpacing: "-0.01em", color: "var(--btss-ink)" }}>{title}</span>
      <div style={{ position: "absolute", right: 24, top: 18, width: 22, height: 22, borderRadius: "50%", border: "2.4px solid var(--btss-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--btss-ink)" }} />
      </div>
    </div>
  );
}
