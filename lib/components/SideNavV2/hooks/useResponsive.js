import { useState, useEffect } from "react";
import { BREAKPOINTS, RESIZE_CONFIG } from "../constants/sideNav";

/**
 * Custom hook to handle responsive behavior
 * @param {number} breakpoint - Breakpoint for small screen detection
 * @returns {Object} Object containing responsive state
 */
const useResponsive = (breakpoint = BREAKPOINTS.SMALL_SCREEN) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = windowWidth < breakpoint;

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, RESIZE_CONFIG.RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    windowWidth,
    isSmallScreen
  };
};

export default useResponsive;
