import { useEffect, useRef, useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimatingOut, setMenuAnimatingOut] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [introAnimatingOut, setIntroAnimatingOut] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    setMenuAnimatingOut(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    if (!menuOpen) return;
    setMenuAnimatingOut(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuAnimatingOut(false);
    }, 450);
  };

  const handleToggleMenu = () => {
    if (menuOpen && !menuAnimatingOut) {
      closeMenu();
    } else if (!menuOpen && !menuAnimatingOut) {
      openMenu();
    }
  };

  const handleIntroEnter = () => {
    if (!introVisible || introAnimatingOut) return;
    setIntroAnimatingOut(true);
    setTimeout(() => {
      setIntroVisible(false);
      setIntroAnimatingOut(false);
    }, 650);
  };

  useEffect(() => {
    if (!introVisible || introAnimatingOut) return;

    const handleKey = () => {
      handleIntroEnter();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [introVisible, introAnimatingOut]);

  useEffect(() => {
    if (!menuOpen && !menuAnimatingOut) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (headerRef.current && headerRef.current.contains(target)) return;
      if (dropdownRef.current && dropdownRef.current.contains(target)) return;

      closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, menuAnimatingOut]);

  return (
    <div className="app-root">
      {(introVisible || introAnimatingOut) && (
        <div
          className={`intro-gate ${
            introAnimatingOut ? "intro-gate--closing" : "intro-gate--open"
          }`}
          onClick={handleIntroEnter}
        >
          <div className="intro-gate-inner">
            <p className="intro-gate-label">PORTFOLIO / OMAUKOL</p>
            <h1 className="intro-gate-title">
              <span className="intro-gate-title-part intro-gate-title-part--left">
                OMA
              </span>
              <span className="intro-gate-title-part intro-gate-title-part--right">
                UKOL
              </span>
            </h1>
            <p className="intro-gate-sub">DEV · AI PRODUCT · DESIGN</p>
            <div className="intro-gate-button-row">
              <button
                type="button"
                className="intro-gate-button intro-gate-button--primary"
                onClick={handleIntroEnter}
              >
                Enter
              </button>
              <button
                type="button"
                className="intro-gate-button intro-gate-button--secondary"
                onClick={handleIntroEnter}
              >
                Just browse
              </button>
            </div>
          </div>
        </div>
      )}

      <header
        ref={headerRef}
        className={`top-nav ${
          menuOpen || menuAnimatingOut ? "top-nav--open" : ""
        }`}
      >
        <div className="top-nav-inner">
          <div className="top-nav-left">
            <button
              type="button"
              className="top-nav-menu-toggle"
              onClick={handleToggleMenu}
            >
              <span className="top-nav-menu-icon">≡</span>
              <span className="top-nav-menu-label">菜单</span>
            </button>
          </div>

          <div className="top-nav-center">
            <span className="top-nav-logo">冷鱼闲风</span>
          </div>

          <div className="top-nav-right">
            <div className="top-nav-actions">
              {/* <button type="button" className="top-nav-pill top-nav-pill-muted">
                登录
              </button> */}
              <button
                type="button"
                className="top-nav-pill top-nav-pill-accent"
              >
                加入
              </button>
            </div>
          </div>

          <div className="top-nav-ticker">
            <div className="top-nav-ticker-track">
              冷鱼闲风 · Developer × AI Product × Design · 个人实验场
              &nbsp;&nbsp; · &nbsp;&nbsp; 冷鱼闲风 · Developer × AI Product ×
              Design · 个人实验场 &nbsp;&nbsp; · &nbsp;&nbsp;
            </div>
          </div>
        </div>
        {(menuOpen || menuAnimatingOut) && (
          <div
            ref={dropdownRef}
            className={`top-nav-dropdown ${
              menuAnimatingOut
                ? "top-nav-dropdown--closing"
                : "top-nav-dropdown--open"
            }`}
          >
            <button type="button" className="top-nav-dropdown-item">
              作品集 · Projects
            </button>
            <button type="button" className="top-nav-dropdown-item">
              关于我 · About
            </button>
            <button type="button" className="top-nav-dropdown-item">
              博客 / 记录 · Notes
            </button>
            <button type="button" className="top-nav-dropdown-item">
              联系方式 · Contact
            </button>
          </div>
        )}
      </header>

      <Hero />
    </div>
  );
}

export default App;
