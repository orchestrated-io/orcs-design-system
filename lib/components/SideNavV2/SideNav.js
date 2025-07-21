import React from "react";
import PropTypes from "prop-types";
import Divider from "../Divider";
import SideNavCurrentViewSection from "./sections/SideNavCurrentViewSection";
import SideNavTeamsSection from "./sections/SideNavTeamsSection";
import SideNavPinnedSection from "./sections/SideNavPinnedSection";

// Hooks
import useSideNavState from "./hooks/useSideNavState";
import useResponsive from "./hooks/useResponsive";
import useResize from "./hooks/useResize";
import { useSideNavContext } from "./context/SideNavContext";

// Utilities
import { categorizeItems } from "./utils/itemUtils";

// Styled Components
import { SideNavWrapper, SideNavItems } from "./styles/SideNavV2.styles";

// Components
import PanelControlComponent from "./components/PanelControl";
import ExpandedPanel from "./components/ExpandedPanel";
import ItemSection from "./components/ItemSection";

const SideNavV2 = ({
  items,
  sideNavHeight,
  yourTeams,
  pinnedItems,
  // viewing prop is now optional since it comes from context
  viewing: propViewing
}) => {
  // Get viewing from context, fallback to prop for backward compatibility
  const { currentViewState: contextCurrentViewState } = useSideNavContext();
  const currentViewState = contextCurrentViewState || propViewing;
  // Custom hooks for state management
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

        {currentViewState && (
          <>
            <Divider light display={["none", "none", "none", "block"]} />
            <SideNavCurrentViewSection
              {...currentViewState}
              isExpanded={isExpanded}
              isSmallScreen={isSmallScreen}
            />
          </>
        )}

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
  viewing: PropTypes.shape({
    teamName: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    shape: PropTypes.string,
    teamLink: PropTypes.string.isRequired,
    teamType: PropTypes.string,
    badgeVariant: PropTypes.oneOf([
      "success",
      "warning",
      "danger",
      "primaryLight",
      "primary",
      "primaryDark",
      "secondary"
    ]),
    subNav: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      })
    )
  }),
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
