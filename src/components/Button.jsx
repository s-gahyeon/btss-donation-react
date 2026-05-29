/* 3 variants — primary (blue CTA), sky, tonal (sage). Press = scale(.97). */
const VARIANTS = {
  primary: { background: "var(--btss-blue)", color: "#fff", borderRadius: 20, padding: "13px 30px", fontSize: 16 },
  sky: { background: "var(--btss-sky)", color: "#fff", borderRadius: 20, padding: "13px 26px", fontSize: 16 },
  tonal: { background: "var(--btss-sage-tint)", color: "var(--btss-sage)", borderRadius: 13, padding: "11px 22px", fontSize: 18 },
};

export default function Button({ children, variant = "primary", onClick, style }) {
  const base = {
    border: 0,
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    transition: "filter .15s, transform .1s",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <button
      onClick={onClick}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      style={{ ...base, ...VARIANTS[variant], ...style }}
    >
      {children}
    </button>
  );
}
