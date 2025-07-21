import { DEFAULT_WIDTHS, RESIZE_CONFIG } from "../constants/sideNav";

/**
 * Calculates the clamped width for desktop resize
 * @param {number} clientX - Mouse X position
 * @param {Element} sideNavItems - SideNavItems element
 * @returns {number} Clamped width value
 */
export const calculateDesktopWidth = (clientX, sideNavItems) => {
  if (!sideNavItems) return DEFAULT_WIDTHS.normal;

  const sideNavRect = sideNavItems.getBoundingClientRect();
  const newWidth = clientX - sideNavRect.right;

  return Math.max(DEFAULT_WIDTHS.min, Math.min(DEFAULT_WIDTHS.max, newWidth));
};

/**
 * Calculates the clamped height for mobile resize
 * @param {number} clientY - Mouse Y position
 * @param {number} resizeStartY - Starting Y position
 * @param {number} resizeStartHeight - Starting height
 * @returns {number} Clamped height value
 */
export const calculateMobileHeight = (
  clientY,
  resizeStartY,
  resizeStartHeight
) => {
  const deltaY = clientY - resizeStartY;
  const newHeight = resizeStartHeight - deltaY; // Reversed direction

  const minHeight = RESIZE_CONFIG.MOBILE_MIN_HEIGHT;
  const maxHeight = window.innerHeight * RESIZE_CONFIG.MOBILE_MAX_HEIGHT_RATIO;

  return Math.max(minHeight, Math.min(maxHeight, newHeight));
};

/**
 * Gets the initial width for an expanded item
 * @param {Object} item - Navigation item
 * @returns {number} Initial width
 */
export const getInitialWidth = (item) => {
  const isLarge = item?.large;
  return isLarge ? DEFAULT_WIDTHS.large : DEFAULT_WIDTHS.normal;
};

/**
 * Applies resize cursor styles to document body
 * @param {boolean} isSmallScreen - Whether we're on a small screen
 */
export const applyResizeCursor = (isSmallScreen) => {
  document.body.style.cursor = isSmallScreen ? "row-resize" : "col-resize";
  document.body.style.userSelect = "none";
};

/**
 * Removes resize cursor styles from document body
 */
export const removeResizeCursor = () => {
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
};
