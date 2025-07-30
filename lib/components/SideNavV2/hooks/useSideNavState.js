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

  // Global mouse move handler to track hover state
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!wrapperRef.current || isLocked) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (isInside && !isHoveringRef.current) {
        isHoveringRef.current = true;
        // Only expand if not in unlock timeout
        if (!unlockTimeoutRef.current) {
          setIsExpanded(true);
        }
      } else if (!isInside && isHoveringRef.current) {
        isHoveringRef.current = false;
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLocked, setIsExpanded]);

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
