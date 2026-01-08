import React from "react";

export type IntroGateProps = {
  visible: boolean;
  animatingOut: boolean;
  onEnter: () => void;
};

const IntroGate: React.FC<IntroGateProps> = ({
  visible,
  animatingOut,
  onEnter,
}) => {
  if (!visible && !animatingOut) return null;

  return (
    <div
      className={`intro-gate ${
        animatingOut ? "intro-gate--closing" : "intro-gate--open"
      }`}
    >
      <div className="intro-gate-inner">
        <p className="intro-gate-label">PORTFOLIO / OMAUKOL</p>
        <h1 className="intro-gate-title">
          <span className="intro-gate-title-part intro-gate-title-part--left">
            OMA
          </span>
          <span className="intro-gate-title-part intro-gate-title-part--right">
            KOL
          </span>
        </h1>
        <p className="intro-gate-sub">DEV · AI PRODUCT · DESIGN</p>
        <div className="intro-gate-button-row">
          <button
            type="button"
            className="intro-gate-button intro-gate-button--primary"
            onClick={onEnter}
          >
            Enter
          </button>
          <button
            type="button"
            className="intro-gate-button intro-gate-button--secondary"
            onClick={onEnter}
          >
            Just browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroGate;
