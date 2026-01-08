import React, { forwardRef } from "react";

export type TopNavProps = {
  menuOpen: boolean;
  menuAnimatingOut: boolean;
  onToggleMenu: () => void;
  dropdownRef: React.Ref<HTMLDivElement>;
};

const TopNav = forwardRef<HTMLElement, TopNavProps>(
  ({ menuOpen, menuAnimatingOut, onToggleMenu, dropdownRef }, headerRef) => {
    return (
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
              onClick={onToggleMenu}
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
    );
  }
);

TopNav.displayName = "TopNav";

export default TopNav;
