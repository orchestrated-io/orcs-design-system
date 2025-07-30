import { useEffect, useRef, useMemo } from "react";
import { findFirstExpandedByDefault } from "../utils/itemUtils";
import { getInitialWidth as getInitialWidthUtil } from "../utils/resizeUtils";
import useResponsive from "./useResponsive";
import { useSideNavStateContext } from "../context/SideNavStateProvider";

/**
 * Custom hook to manage SideNavV2 state
 * @param {Array} items - Navigation items
 * @returns {Object} Object containing all state and handlers
 */
const useSideNavState = (items) => {
  const {
    expandedItem,
    setExpandedItem,
    isExpanded,
    setIsExpanded,
    expandedWidth,
    setExpandedWidth,
    isLocked,
    setIsLocked
  } = useSideNavStateContext();

  const expandedRef = useRef(null);
  const navItemRefs = useRef({});
  const wrapperRef = useRef(null);
  const isHoveringRef = useRef(false);
  const unlockTimeoutRef = useRef(null);

  const firstExpandedItemByDefault = findFirstExpandedByDefault(items);

  // Initialize expanded item by default
  useEffect(() => {
    if (firstExpandedItemByDefault >= 0) {
      setExpandedItem(firstExpandedItemByDefault);
    }
  }, [firstExpandedItemByDefault, setExpandedItem]);

  // Set initial width when an item is expanded
  useEffect(() => {
    if (expandedItem !== null) {
      const currentItem = items[expandedItem];
      const initialWidth = getInitialWidthUtil(currentItem);
      setExpandedWidth(initialWidth);
    }
  }, [expandedItem, items, setExpandedWidth]);

  // Focus on expanded item when it changes
  useEffect(() => {
    if (expandedItem !== null && expandedRef.current) {
      expandedRef.current.focus();
    }
  }, [expandedItem]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (unlockTimeoutRef.current) {
        clearTimeout(unlockTimeoutRef.current);
      }
    };
  }, []);

  // Mouse event handlers for hover state
  useEffect(() => {
    if (!wrapperRef.current || isLocked) return;

    const wrapper = wrapperRef.current;
    const sideNavItems = wrapper.querySelector(
      '[data-testid="side-nav-items"]'
    );

    const handleWrapperMouseEnter = () => {
      if (isLocked) return;
      isHoveringRef.current = true;
      // Keep expanded when hovering over the wrapper (includes ExpandedPanel)
      if (!unlockTimeoutRef.current && isExpanded) {
        setIsExpanded(true);
      }
    };

    const handleWrapperMouseLeave = () => {
      if (isLocked) return;
      isHoveringRef.current = false;
      setIsExpanded(false);
    };

    const handleSideNavItemsMouseEnter = () => {
      if (isLocked) return;
      isHoveringRef.current = true;
      // Always expand when hovering over SideNavItems
      if (!unlockTimeoutRef.current) {
        setIsExpanded(true);
      }
    };

    const handleSideNavItemsMouseLeave = () => {
      if (isLocked) return;
      // Don't collapse immediately, let the wrapper handle it
      // This allows hovering over ExpandedPanel to keep it expanded
    };

    // Add event listeners
    wrapper.addEventListener("mouseenter", handleWrapperMouseEnter);
    wrapper.addEventListener("mouseleave", handleWrapperMouseLeave);

    if (sideNavItems) {
      sideNavItems.addEventListener("mouseenter", handleSideNavItemsMouseEnter);
      sideNavItems.addEventListener("mouseleave", handleSideNavItemsMouseLeave);
    }

    return () => {
      wrapper.removeEventListener("mouseenter", handleWrapperMouseEnter);
      wrapper.removeEventListener("mouseleave", handleWrapperMouseLeave);
      if (sideNavItems) {
        sideNavItems.removeEventListener(
          "mouseenter",
          handleSideNavItemsMouseEnter
        );
        sideNavItems.removeEventListener(
          "mouseleave",
          handleSideNavItemsMouseLeave
        );
      }
    };
  }, [isLocked, setIsExpanded, isExpanded]);

  const handleItemClick = (item) => {
    const { index: itemIndex, actionType, onClick: onButtonClick } = item;

    if (actionType === "link" || actionType === "button") {
      setExpandedItem(null);
      onButtonClick && onButtonClick(item);
    } else {
      setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
      onButtonClick && onButtonClick(item);
    }
  };

  const handleBlur = (item) => {
    handleItemClick(item);
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleWidthChange = (newWidth) => {
    setExpandedWidth(newWidth);
  };

  // Lock/unlock handlers
  const handleLockToggle = () => {
    if (isLocked) {
      // If currently locked, unlock and collapse
      setIsLocked(false);
      setIsExpanded(false);
      isHoveringRef.current = false;

      // Set a timeout to prevent immediate re-expansion on hover
      unlockTimeoutRef.current = setTimeout(() => {
        unlockTimeoutRef.current = null;
      }, 300);
    } else {
      // If not locked, lock and expand
      setIsLocked(true);
      setIsExpanded(true);

      // Clear any existing timeout
      if (unlockTimeoutRef.current) {
        clearTimeout(unlockTimeoutRef.current);
        unlockTimeoutRef.current = null;
      }
    }
  };

  const { isSmallScreen } = useResponsive();

  const isExpandedOnBigScreen = useMemo(
    () => isExpanded && !isSmallScreen,
    [isExpanded, isSmallScreen]
  );

  return {
    // State
    expandedItem,
    isExpanded: isExpandedOnBigScreen,
    expandedWidth,
    expandedRef,
    navItemRefs,
    wrapperRef,
    isLocked,

    // Handlers
    handleItemClick,
    handleBlur,
    handleExpandToggle,
    handleWidthChange,
    handleLockToggle
  };
};

export default useSideNavState;
