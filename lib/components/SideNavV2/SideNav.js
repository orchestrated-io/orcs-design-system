import React from "react";
import PropTypes from "prop-types";
import SideNavTeamsSection from "./sections/SideNavTeamsSection";
import SideNavPinnedSection from "./sections/SideNavPinnedSection";

// Hooks
import useSideNavState from "./hooks/useSideNavState";
import useResponsive from "./hooks/useResponsive";
import useResize from "./hooks/useResize";

// Utilities
import { categorizeItems } from "./utils/itemUtils";

// Styled Components
import { SideNavWrapper, SideNavItems } from "./styles/SideNavV2.styles";

// Components
import PanelControlComponent from "./components/PanelControl";
import ExpandedPanel from "./components/ExpandedPanel";
import ItemSection from "./components/ItemSection";
import CurrentViewSectionPortalTarget from "./components/CurrentViewSectionPortalTarget";

const SideNavV2 = ({ items, sideNavHeight, yourTeams, pinnedItems }) => {
  const {
    expandedItem,
    isExpanded,
    expandedWidth,
    expandedRef,
    navItemRefs,
    handleItemClick,
    handleBlur,
    handleExpandToggle,
    handleWidthChange
  } = useSideNavState(items);

  const { isSmallScreen } = useResponsive();

  const { handleResizeStart } = useResize(
    expandedRef,
    isSmallScreen,
    expandedItem,
    handleWidthChange
  );

  // Categorize items
  const { topAlignedItems, pageSpecificItems, bottomAlignedItems, allItems } =
    categorizeItems(items);

  return (
    <SideNavWrapper sideNavHeight={sideNavHeight}>
      <SideNavItems isExpanded={isExpanded} data-testid="side-nav-items">
        <PanelControlComponent
          isExpanded={isExpanded}
          onClick={handleExpandToggle}
          ariaLabel="toggle side navigation"
          tooltipText={
            isExpanded ? "Collapse side navigation" : "Expand side navigation"
          }
        />

        <ItemSection
          items={topAlignedItems}
          isExpanded={isExpanded}
          isSmallScreen={isSmallScreen}
          expandedItem={expandedItem}
          handleItemClick={handleItemClick}
          navItemRefs={navItemRefs}
        />

        <ItemSection
          items={pageSpecificItems}
          isExpanded={isExpanded}
          isSmallScreen={isSmallScreen}
          expandedItem={expandedItem}
          handleItemClick={handleItemClick}
          navItemRefs={navItemRefs}
          showDivider={true}
        />

        <CurrentViewSectionPortalTarget />

        {yourTeams && yourTeams.length > 0 && (
          <SideNavTeamsSection teams={yourTeams} isExpanded={isExpanded} />
        )}

        {pinnedItems && pinnedItems.length > 0 && (
          <SideNavPinnedSection items={pinnedItems} isExpanded={isExpanded} />
        )}

        <ItemSection
          items={bottomAlignedItems}
          isExpanded={isExpanded}
          isSmallScreen={isSmallScreen}
          expandedItem={expandedItem}
          handleItemClick={handleItemClick}
          navItemRefs={navItemRefs}
          showDivider={true}
        />
      </SideNavItems>

      {allItems.map((item, index) => {
        if (item.actionType !== "component") return null;
        if (index !== expandedItem || item.hide) return null;

        return (
          <ExpandedPanel
            key={item.name}
            item={item}
            expandedItem={expandedItem}
            isExpanded={isExpanded}
            expandedWidth={expandedWidth}
            sideNavHeight={sideNavHeight}
            isSmallScreen={isSmallScreen}
            expandedRef={expandedRef}
            onResizeStart={handleResizeStart}
            onItemClick={handleItemClick}
            onBlur={handleBlur}
          />
        );
      })}
    </SideNavWrapper>
  );
};

SideNavV2.propTypes = {
  sideNavHeight: PropTypes.string.isRequired,
  initiallyExpandedItemIndex: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      badgeNumber: PropTypes.string,
      badgeDot: PropTypes.bool,
      hide: PropTypes.bool,
      large: PropTypes.bool,
      bottomAligned: PropTypes.bool,
      actionType: PropTypes.oneOf(["component", "link", "button"]).isRequired,
      component: PropTypes.elementType,
      link: PropTypes.string,
      onClick: PropTypes.func
    })
  ).isRequired,
  LinkComponent: PropTypes.elementType,
  // viewing prop is now optional since it can come from context

  yourTeams: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  pinnedItems: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      shape: PropTypes.string,
      onUnpin: PropTypes.func
    })
  )
};

export default SideNavV2;
