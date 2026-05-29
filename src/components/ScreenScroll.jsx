/* Scrollable screen body with optional bottom padding (clears the nav). */
export default function ScreenScroll({ children, bottomPad = 0 }) {
  return <div style={{ flex: 1, overflowY: "auto", paddingBottom: bottomPad }}>{children}</div>;
}
