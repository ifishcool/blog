import { useRef } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import ProjectsStrip from "./sections/ProjectsStrip";
import IntroGate from "./components/layout/IntroGate";
import TopNav from "./components/layout/TopNav";
import { useIntroGate } from "./hooks/useIntroGate";
import { useTopNavMenu } from "./hooks/useTopNavMenu";

function App() {
  const headerRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { introVisible, introAnimatingOut, handleIntroEnter, introReady } =
    useIntroGate();

  const { menuOpen, menuAnimatingOut, handleToggleMenu } = useTopNavMenu(
    headerRef,
    dropdownRef
  );

  return (
    <div className="app-root">
      <IntroGate
        visible={introVisible}
        animatingOut={introAnimatingOut}
        onEnter={handleIntroEnter}
      />

      <TopNav
        ref={headerRef}
        menuOpen={menuOpen}
        menuAnimatingOut={menuAnimatingOut}
        onToggleMenu={handleToggleMenu}
        dropdownRef={dropdownRef}
      />

      {/* Only start Hero animations after intro gate is fully gone */}
      <Hero introReady={introReady} />
      <ProjectsStrip />
    </div>
  );
}

export default App;
