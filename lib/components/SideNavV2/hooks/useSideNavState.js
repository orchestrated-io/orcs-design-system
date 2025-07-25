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
    setExpandedWidth
  } = useSideNavStateContext();

  const expandedRef = useRef(null);
  const navItemRefs = useRef({});

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

    // Handlers
    handleItemClick,
    handleBlur,
    handleExpandToggle,
    handleWidthChange
  };
};

export default useSideNavState;
