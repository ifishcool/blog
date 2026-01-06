import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <div className="app-root">
      <header className={`top-nav ${menuOpen ? "top-nav--open" : ""}`}>
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
      </header>

      {menuOpen && (
        <div className="top-nav-dropdown">
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

      <Hero />
    </div>
  );
}

export default App;
