import { useCallback, useEffect, useState } from "react";

export const useIntroGate = () => {
  const [visible, setVisible] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleEnter = useCallback(() => {
    if (!visible || animatingOut) return;
    setAnimatingOut(true);
    setTimeout(() => {
      setVisible(false);
      setAnimatingOut(false);
    }, 650);
  }, [visible, animatingOut]);

  useEffect(() => {
    if (!visible || animatingOut) return;

    const handleKey = () => {
      handleEnter();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [visible, animatingOut, handleEnter]);

  return {
    introVisible: visible,
    introAnimatingOut: animatingOut,
    handleIntroEnter: handleEnter,
    introReady: !visible,
  } as const;
};
