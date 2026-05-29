import Icon from "./Icon.jsx";

/* The 기부목록 (donation-list) tab glyph — three bulleted rows. */
const ListGlyph = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="var(--btss-sage)">
    <g>
      <circle cx="2.4" cy="3" r="2.4" />
      <circle cx="2.4" cy="11" r="2.4" />
      <circle cx="2.4" cy="19" r="2.4" />
      <rect x="8" y="1.6" width="16" height="2.8" rx="1.4" />
      <rect x="8" y="9.6" width="16" height="2.8" rx="1.4" />
      <rect x="8" y="17.6" width="16" height="2.8" rx="1.4" />
    </g>
  </svg>
);

/* Floating white sheet, top corners radius 30, upward shadow, 4 tabs,
   sage icons; active tab sits on a translucent sage halo. */
export default function BottomNav({ active, onNav }) {
  const items = [
    { key: "home", icon: "home" },
    { key: "pay", icon: "search" },
    { key: "piggy", icon: "heart" },
    { key: "list", icon: "list" },
  ];
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 85,
        background: "#fff",
        borderRadius: "30px 30px 0 0",
        boxShadow: "var(--shadow-nav)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 30px",
        zIndex: 10,
      }}
    >
      {items.map((it) => (
        <button
          key={it.key}
          onClick={() => onNav && onNav(it.key)}
          style={{ background: "none", border: 0, padding: 0, cursor: "pointer", position: "relative", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--btss-sage)" }}
        >
          {active === it.key && <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--btss-sage-ghost)" }} />}
          <span style={{ position: "relative", display: "inline-flex" }}>
            {it.key === "list" ? <ListGlyph /> : <Icon name={it.icon} size={it.key === "piggy" ? 26 : 28} />}
          </span>
        </button>
      ))}
    </div>
  );
}
