import Icon from "./Icon.jsx";

/* 58px circle, sky bg (active → blue), white 30px glyph. */
export default function CategoryCircle({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "none", border: 0, padding: 0, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}
    >
      <span
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: active ? "var(--btss-blue)" : "var(--btss-sky)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          transition: "background .15s",
        }}
      >
        <Icon name={icon} size={30} />
      </span>
      {label && <span style={{ fontFamily: "var(--font-display)", fontSize: 11, color: "var(--btss-ink-2)" }}>{label}</span>}
    </button>
  );
}
