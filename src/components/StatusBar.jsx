/* iOS status bar — 44px, 9:41 + signal/wifi/battery, black glyphs. */
const Bars = ({ c }) => (
  <svg width="17" height="11" viewBox="0 0 17 11">
    <g fill={c}>{[0, 1, 2, 3].map((i) => (
      <rect key={i} x={i * 4.5} y={11 - (i + 1) * 2.6 - 0.5} width="3" height={(i + 1) * 2.6 + 0.5} rx="1" />
    ))}</g>
  </svg>
);
const Wifi = ({ c }) => (
  <svg width="16" height="11" viewBox="0 0 16 11" fill={c}>
    <path d="M8 2.4c2.3 0 4.5.9 6.1 2.4l1.2-1.3A11 11 0 0 0 8 .5 11 11 0 0 0 .7 3.5l1.2 1.3A8.6 8.6 0 0 1 8 2.4Zm0 3.5c1.4 0 2.6.5 3.6 1.4l1.2-1.3A7.3 7.3 0 0 0 8 4 7.3 7.3 0 0 0 3.2 6l1.2 1.3A5.3 5.3 0 0 1 8 5.9Zm0 3.4 2-2.1A3 3 0 0 0 8 7.3a3 3 0 0 0-2 .9l2 2.1Z" />
  </svg>
);
const Batt = ({ c }) => (
  <svg width="25" height="12" viewBox="0 0 25 12">
    <rect x="0.5" y="0.5" width="21" height="11" rx="2.7" fill="none" stroke={c} strokeOpacity="0.35" />
    <rect x="2" y="2" width="18" height="8" rx="1.3" fill={c} />
    <path d="M23 4v4c.8-.3 1.3-1.1 1.3-2S23.8 4.3 23 4Z" fill={c} fillOpacity="0.4" />
  </svg>
);

export default function StatusBar({ dark = true }) {
  const c = dark ? "#000" : "#fff";
  return (
    <div style={{ height: 44, flex: "0 0 44px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 21px", color: c }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.3px" }}>9:41</span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <Bars c={c} /><Wifi c={c} /><Batt c={c} />
      </div>
    </div>
  );
}
