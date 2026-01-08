import type React from "react";
import { useCallback, useEffect, useState } from "react";

export const useTopNavMenu = (
  headerRef: React.RefObject<HTMLElement | null>,
  dropdownRef: React.RefObject<HTMLDivElement | null>
) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimatingOut, setMenuAnimatingOut] = useState(false);

  const openMenu = useCallback(() => {
    setMenuAnimatingOut(false);
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    if (!menuOpen) return;
    setMenuAnimatingOut(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuAnimatingOut(false);
    }, 450);
  }, [menuOpen]);

  const handleToggleMenu = useCallback(() => {
    if (menuOpen && !menuAnimatingOut) {
      closeMenu();
    } else if (!menuOpen && !menuAnimatingOut) {
      openMenu();
    }
  }, [menuOpen, menuAnimatingOut, closeMenu, openMenu]);

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
  }, [menuOpen, menuAnimatingOut, headerRef, dropdownRef, closeMenu]);

  return {
    menuOpen,
    menuAnimatingOut,
    handleToggleMenu,
  } as const;
};
