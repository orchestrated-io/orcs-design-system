import React from "react";
import PropTypes from "prop-types";
import Divider from "../../Divider";
import NavItem from "../NavItem";
import { filterVisibleItems, isItemActive } from "../utils/itemUtils";

const ItemSection = ({
  items,
  isExpanded,
  isSmallScreen,
  expandedItem,
  handleItemClick,
  navItemRefs,
  showDivider = false,
  dividerDisplay = ["none", "none", "none", "block"]
}) => {
  const visibleItems = filterVisibleItems(items);

  if (visibleItems.length === 0) {
    return null;
  }

  const renderItem = (item) => {
    if (item.hide) {
      return null;
    }

    const Component = item.component;
    return (
      <NavItem
        key={item.index}
        item={item}
        isSmallScreen={isSmallScreen}
        Component={Component}
        isActive={isItemActive(item, expandedItem)}
        handleItemClick={handleItemClick}
        navItemRefs={navItemRefs}
        isExpanded={isExpanded}
      />
    );
  };

  return (
    <>
      {showDivider && !isSmallScreen && (
        <Divider light display={dividerDisplay} />
      )}
      {visibleItems.map(renderItem)}
    </>
  );
};

ItemSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      hide: PropTypes.bool,
      component: PropTypes.elementType,
      actionType: PropTypes.string,
      isActive: PropTypes.bool
    })
  ).isRequired,
  isExpanded: PropTypes.bool,
  isSmallScreen: PropTypes.bool,
  expandedItem: PropTypes.number,
  handleItemClick: PropTypes.func.isRequired,
  navItemRefs: PropTypes.object,
  showDivider: PropTypes.bool,
  dividerDisplay: PropTypes.array
};

export default ItemSection;
