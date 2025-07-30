import { useState, useEffect, useCallback } from "react";
import {
  calculateDesktopWidth,
  calculateMobileHeight,
  applyResizeCursor,
  removeResizeCursor
} from "../utils/resizeUtils";

/**
 * Custom hook to handle resize functionality
 * @param {React.RefObject} expandedRef - Ref to the expanded panel
 * @param {boolean} isSmallScreen - Whether we're on a small screen
 * @param {number} expandedItem - Currently expanded item index
 * @param {Function} onWidthChange - Callback to update width state
 * @param {Object} currentItem - Current expanded item
 * @returns {Object} Object containing resize state and handlers
 */
const useResize = (
  expandedRef,
  isSmallScreen,
  expandedItem,
  onWidthChange,
  currentItem
) => {
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartY, setResizeStartY] = useState(0);
  const [resizeStartHeight, setResizeStartHeight] = useState(0);

  const handleResizeStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
    applyResizeCursor(isSmallScreen);

    if (isSmallScreen && expandedRef.current) {
      setResizeStartY(e.clientY);
      setResizeStartHeight(expandedRef.current.offsetHeight);
    }
  };

  const handleResizeMove = useCallback(
    (e) => {
      if (!isResizing || !expandedRef.current) return;

      if (isSmallScreen) {
        // Vertical resizing for small screens
        const newHeight = calculateMobileHeight(
          e.clientY,
          resizeStartY,
          resizeStartHeight
        );
        expandedRef.current.style.height = `${newHeight}px`;
      } else {
        // Horizontal resizing for large screens
        const parentContainer = expandedRef.current.parentElement;
        const sideNavItems = parentContainer.querySelector(
          '[data-testid="side-nav-items"]'
        );

        if (!sideNavItems) return;

        const newWidth = calculateDesktopWidth(
          e.clientX,
          sideNavItems,
          currentItem
        );

        // Update the width state through the callback
        if (onWidthChange) {
          onWidthChange(newWidth);
        }
      }
    },
    [
      isResizing,
      expandedRef,
      isSmallScreen,
      resizeStartY,
      resizeStartHeight,
      onWidthChange,
      currentItem
    ]
  );

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    removeResizeCursor();
  }, []);

  // Add global event listeners for resize
  useEffect(() => {
    if (isResizing) {
      const handleMouseMove = (e) => {
        handleResizeMove(e);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleResizeEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleResizeEnd);
      };
    }
  }, [
    isResizing,
    expandedItem,
    isSmallScreen,
    resizeStartY,
    resizeStartHeight,
    onWidthChange,
    handleResizeMove,
    handleResizeEnd
  ]);

  return {
    isResizing,
    handleResizeStart,
    handleResizeMove,
    handleResizeEnd
  };
};

export default useResize;
