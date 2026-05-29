import AppHeader from "../components/AppHeader.jsx";
import Button from "../components/Button.jsx";
import ScreenScroll from "../components/ScreenScroll.jsx";
import { asset } from "../asset.js";

/* Cause detail (기부목록 추가) — full-width photo, copy, tonal CTA → Donation list. */
export default function Detail({ go }) {
  return (
    <ScreenScroll bottomPad={110}>
      <AppHeader title="기부목록 추가" onBack={() => go("home")} />
      <img src={asset("photos/ph-koala.png")} alt="" style={{ width: "100%", height: 230, objectFit: "cover" }} />
      <div style={{ padding: "22px 30px 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--btss-ink)" }}>Protect All Animals</div>
        <a href="https://www.hsi.org/about-us/" target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-display)", fontSize: 11, color: "var(--btss-forest)" }}>https://www.hsi.org/about-us/</a>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 14, lineHeight: 1.6, color: "var(--btss-ink)", letterSpacing: "-0.3px", margin: "6px 0 0" }}>
          With the support of donors and advocates, we are endeavoring to create a humane and sustainable world for all animals — including people — through education, advocacy and the promotion of respect and caring.
        </p>
        <Button variant="tonal" style={{ marginTop: 16, width: "100%" }} onClick={() => go("list")}>기부목록 추가하기</Button>
      </div>
    </ScreenScroll>
  );
}
