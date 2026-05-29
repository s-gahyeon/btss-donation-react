/* Pill track, brand-colour fill, width animates 0.4s ease-out. */
export default function ProgressBar({ value, color = "var(--btss-sky)" }) {
  return (
    <div style={{ position: "relative", width: "100%", height: 9, borderRadius: 999, background: "var(--btss-fill)", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: value + "%", borderRadius: 999, background: color, transition: "width .4s ease-out" }} />
    </div>
  );
}
