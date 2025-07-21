/**
 * Categorizes navigation items into different sections based on their properties
 * @param {Array} items - Array of navigation items
 * @returns {Object} Object containing categorized items
 */
export const categorizeItems = (items) => {
  const allItems = items.map((item, index) => ({ ...item, index }));

  const topAlignedItems = allItems.filter(
    (item) => !item.bottomAligned && !item.pageSpecific
  );

  const pageSpecificItems = allItems.filter(
    (item) => !item.bottomAligned && item.pageSpecific
  );

  const bottomAlignedItems = allItems.filter((item) => item.bottomAligned);

  return {
    topAlignedItems,
    pageSpecificItems,
    bottomAlignedItems,
    allItems
  };
};

/**
 * Filters out hidden items from a list
 * @param {Array} items - Array of navigation items
 * @returns {Array} Filtered items without hidden ones
 */
export const filterVisibleItems = (items) => {
  return items.filter((item) => !item.hide);
};

/**
 * Finds the first item that should be expanded by default
 * @param {Array} items - Array of navigation items
 * @returns {number} Index of the first item to expand by default, or -1 if none
 */
export const findFirstExpandedByDefault = (items) => {
  return items.findIndex((item) => item.isExpandedByDefault && !item.hide);
};

/**
 * Determines if an item should be active based on its type and state
 * @param {Object} item - Navigation item
 * @param {number} expandedItem - Currently expanded item index
 * @returns {boolean} Whether the item should be active
 */
export const isItemActive = (item, expandedItem) => {
  if (item.actionType === "link") {
    return item.isActive;
  }
  return expandedItem === item.index;
};
