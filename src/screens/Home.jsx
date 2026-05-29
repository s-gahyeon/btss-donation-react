import Avatar from "../components/Avatar.jsx";
import CategoryCircle from "../components/CategoryCircle.jsx";
import CauseCard from "../components/CauseCard.jsx";
import ScreenScroll from "../components/ScreenScroll.jsx";

const CATEGORIES = [
  { icon: "water", label: "Nature" },
  { icon: "stethoscope", label: "Medical" },
  { icon: "people", label: "People" },
  { icon: "paw", label: "Animal" },
];

const CAUSES = [
  { bg: "var(--btss-sage)", photo: "ph-ferret.png", title: "Animal Welfare\nAssociation", photoH: 130 },
  { bg: "var(--btss-sky)", photo: "ph-leopard.png", title: "GREENPEACE", italic: true, photoH: 130 },
  { bg: "var(--btss-sand)", photo: "ph-child-2.png", title: "Good\nNeighbors", photoH: 150 },
  { bg: "var(--btss-olive)", photo: "ph-child-1.png", title: "UNICEF", photoH: 132 },
];

export default function Home({ go }) {
  return (
    <ScreenScroll bottomPad={124}>
      <div style={{ padding: "4px 30px 0" }}>
        {/* Greeting + avatar */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 20, letterSpacing: "-0.01em", color: "var(--btss-ink)", paddingTop: 6 }}>
            <strong style={{ fontWeight: 700 }}>장가현님</strong> 어서오세요
          </div>
          <Avatar size={60} />
        </div>

        {/* Headline + sky-blue echo */}
        <div className="btss-display" style={{ marginTop: 26, fontWeight: 500 }}>
          당신의 후원이<br />세상을 빛나게 합니다
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--btss-sky)", marginTop: 8, letterSpacing: "-0.3px" }}>
          Your support makes the world shine
        </div>

        {/* Categories */}
        <div className="btss-label" style={{ marginTop: 34, marginBottom: 16 }}>CATEGORIES</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {CATEGORIES.map((c, i) => (
            // The reference Home shows icons only (no labels); label kept in data for a11y/future use.
            <CategoryCircle key={i} icon={c.icon} onClick={() => go("detail")} />
          ))}
        </div>

        {/* Cause cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "44px 18px", marginTop: 64 }}>
          {CAUSES.map((c, i) => (
            <CauseCard key={i} {...c} onClick={() => go("detail")} />
          ))}
        </div>
      </div>
    </ScreenScroll>
  );
}
