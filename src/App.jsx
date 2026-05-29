import { useState } from "react";
import StatusBar from "./components/StatusBar.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Splash from "./screens/Splash.jsx";
import Home from "./screens/Home.jsx";
import PayList from "./screens/PayList.jsx";
import PaySync from "./screens/PaySync.jsx";
import Piggy from "./screens/Piggy.jsx";
import Detail from "./screens/Detail.jsx";
import DonationList from "./screens/DonationList.jsx";
import Statement from "./screens/Statement.jsx";
import Thanks from "./screens/Thanks.jsx";

/* Single `screen` state drives routing. Splash & Pay-sync auto-advance via
   their own timeouts. Tab screens carry the bottom nav; pushed screens
   (paysync/detail/statement/thanks) and splash do not. */
const SCREENS = {
  splash: Splash,
  home: Home,
  pay: PayList,
  paysync: PaySync,
  piggy: Piggy,
  detail: Detail,
  list: DonationList,
  statement: Statement,
  thanks: Thanks,
};

const SHOW_NAV = new Set(["home", "pay", "piggy", "list"]);
const NO_STATUS_BAR = new Set(["splash", "thanks"]);

export default function App() {
  const [screen, setScreen] = useState("splash");
  const go = (s) => setScreen(s);

  const Current = SCREENS[screen] || Home;

  return (
    <div className="btss-device">
      {/* notch — desktop mockup only (hidden on real phones) */}
      <div className="btss-notch" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 164, height: 30, background: "#11201c", borderRadius: "0 0 20px 20px", zIndex: 30 }} />

      <div className="btss-shell">
        {!NO_STATUS_BAR.has(screen) && (
          <div className="btss-statusbar">
            <StatusBar dark={true} />
          </div>
        )}
        <div key={screen} style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0, position: "relative", animation: "btss-fade .18s ease-out" }}>
          <Current go={go} />
        </div>
        {SHOW_NAV.has(screen) && <BottomNav active={screen} onNav={go} />}
      </div>
    </div>
  );
}
