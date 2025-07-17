import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Popover from "../Popover";
import Divider from "../Divider";
import NavItem from "./NavItem";
import SideNavViewingSection from "./SideNavViewingSection";
import SideNavTeamsSection from "./SideNavTeamsSection";
import SideNavPinnedSection from "./SideNavPinnedSection";

const SMALL_SCREEN_BREAKPOINT = 900;

// Default widths for different panel sizes
const DEFAULT_WIDTHS = {
  normal: 300,
  large: 500,
  min: 200,
  max: 700
};

const SideNavWrapper = styled("div")((props) =>
  css({
    bg: themeGet("colors.white")(props),
    color: themeGet("colors.greyDarkest")(props),
    minHeight: props.sideNavHeight,
    height: props.sideNavHeight,
    maxWidth: "max-content",
    fontFamily: themeGet("fonts.main")(props),
    borderRight: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    display: "flex",
    alignItems: "stretch",
    alignContent: "stretch",
    [`@media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
      borderRight: "none",
      borderTop: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
      width: "100%",
      height: "auto",
      minWidth: "auto",
      maxWidth: "initial",
      minHeight: "initial",
      maxHeight: themeGet("appScale.sidebarMobileHeight")(props),
      position: "fixed",
      bottom: "0",
      left: "0",
      zIndex: "6",
      flexDirection: "column-reverse"
    }
  })
);

const SideNavItems = styled("div")((props) =>
  css({
    width: props.isExpanded ? "200px" : themeGet("appScale.sideNavSize")(props),
    minHeight: "inherit",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    flexShrink: "0",
    padding: "10px",
    gap: "s",
    alignItems: props.isExpanded ? "stretch" : "center",
    justifyContent: "flex-start",
    textAlign: props.isExpanded ? "left" : "center",
    position: "relative",

    [`@media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
      height: "auto",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "auto"
    }
  })
);

const PanelControlTooltip = styled(Popover)`
  width: fit-content;
  margin: 2px 0 4px 0;
  ${(props) =>
    props.position === "absolute" &&
    css({
      position: "absolute",
      right: themeGet("space.r")(props),
      top: themeGet("space.r")(props)
    })}
`;

const PanelControl = styled("button")((props) =>
  css({
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    background: themeGet("colors.greyLighter")(props),
    color: themeGet("colors.greyDarker")(props),
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none"
  })
);

const ResizeHandle = styled("div")((props) =>
  css({
    position: "absolute",
    right: "0",
    top: "0",
    bottom: "0",
    width: "6px",
    height: "100%",
    cursor: "col-resize",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    zIndex: "1000",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    },
    "&::before": {
      content: '""',
      position: "absolute",
      right: "1px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "3px",
      height: "40px",
      backgroundColor: themeGet("colors.grey")(props),
      borderRadius: "3px"
    },
    [`@media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
      right: "auto",
      top: "0",
      left: "0",
      bottom: "0",
      width: "100%",
      height: "6px",
      cursor: "row-resize",
      "&::before": {
        right: "auto",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "40px",
        height: "3px"
      }
    }
  })
);

const SideNavExpanded = styled("div")((props) =>
  css({
    position: "relative",
    display: props.active ? "block" : "none",
    width: props.width ? `${props.width}px` : "auto",
    minWidth: `${DEFAULT_WIDTHS.min}px`,
    maxWidth: `${DEFAULT_WIDTHS.max}px`,
    height: "inherit",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "16px",
    borderLeft: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    "&:focus": {
      outline: "0"
    },
    [`@media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
      width: "100%",
      minWidth: "initial",
      maxWidth: "initial",
      borderLeft: "none",
      borderBottom: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
      height:
        "calc(" +
        themeGet("appScale.sidebarMobileHeight")(props) +
        " - " +
        themeGet("appScale.newNavBarSize")(props) +
        ")"
    }
  })
);

const SideNavV2 = ({
  items,
  sideNavHeight,
  viewing,
  yourTeams,
  pinnedItems
}) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedWidth, setExpandedWidth] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartY, setResizeStartY] = useState(0);
  const [resizeStartHeight, setResizeStartHeight] = useState(0);

  // Initialize a ref for SideNavExpanded
  const expandedRef = useRef(null);
  const navItemRefs = useRef({});

  const firstExpandedItemByDefault = items.findIndex(
    (item) => item.isExpandedByDefault && !item.hide
  );

  useEffect(() => {
    if (firstExpandedItemByDefault >= 0) {
      setExpandedItem(firstExpandedItemByDefault);
    }
  }, [firstExpandedItemByDefault]);

  // Set initial width when an item is expanded
  useEffect(() => {
    if (expandedItem !== null) {
      const currentItem = items[expandedItem];
      const isLarge = currentItem?.large;
      const initialWidth = isLarge
        ? DEFAULT_WIDTHS.large
        : DEFAULT_WIDTHS.normal;
      setExpandedWidth(initialWidth);
    }
  }, [expandedItem, items]);

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

  // Resize handlers
  const handleResizeStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
    document.body.style.cursor = isSmallScreen ? "row-resize" : "col-resize";
    document.body.style.userSelect = "none";

    if (isSmallScreen && expandedRef.current) {
      setResizeStartY(e.clientY);
      setResizeStartHeight(expandedRef.current.offsetHeight);
    }
  };

  const handleResizeMove = (e) => {
    if (!isResizing || !expandedRef.current) return;

    if (isSmallScreen) {
      // Vertical resizing for small screens
      const deltaY = e.clientY - resizeStartY;
      const newHeight = resizeStartHeight - deltaY; // Reversed direction

      // Set minimum and maximum heights for mobile
      const minHeight = 200; // Minimum height in pixels
      const maxHeight = window.innerHeight * 0.8; // Maximum 80% of viewport height

      const clampedHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

      // Update the height of the expanded panel
      expandedRef.current.style.height = `${clampedHeight}px`;
    } else {
      // Horizontal resizing for large screens
      const parentContainer = expandedRef.current.parentElement;
      const sideNavItems = parentContainer.querySelector(
        '[data-testid="side-nav-items"]'
      );

      if (!sideNavItems) return;

      const sideNavRect = sideNavItems.getBoundingClientRect();

      // Calculate width from the right edge of SideNavItems to the mouse position
      const newWidth = e.clientX - sideNavRect.right;

      const minWidth = DEFAULT_WIDTHS.min;
      const maxWidth = DEFAULT_WIDTHS.max;

      const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setExpandedWidth(clampedWidth);
    }
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  // Add global event listeners for resize
  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleResizeMove);
      document.addEventListener("mouseup", handleResizeEnd);

      return () => {
        document.removeEventListener("mousemove", handleResizeMove);
        document.removeEventListener("mouseup", handleResizeEnd);
      };
    }
  }, [isResizing, expandedItem]);

  // Split items into three arrays based on the bottomAligned and pageSpecific props
  const allItems = items.map((item, index) => ({ ...item, index }));

  const topAlignedItems = allItems.filter(
    (item) => !item.bottomAligned && !item.pageSpecific
  );
  const pageSpecificItems = allItems.filter(
    (item) => !item.bottomAligned && item.pageSpecific
  );
  const bottomAlignedItems = allItems.filter((item) => item.bottomAligned);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = windowWidth < SMALL_SCREEN_BREAKPOINT;

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Use a useEffect to focus on the expanded item
  useEffect(() => {
    if (expandedItem !== null && expandedRef.current) {
      expandedRef.current.focus();
    }
  }, [expandedItem]);

  const handleBlur = (item) => {
    handleItemClick(item);
  };

  const renderItem = (item) => {
    if (item.hide) {
      return null;
    }
    const Component = item.component;
    const Item = (
      <NavItem
        key={item.index}
        item={item}
        isSmallScreen={isSmallScreen}
        Component={Component}
        isActive={
          item.actionType === "link"
            ? item.isActive
            : expandedItem == item.index
        }
        handleItemClick={handleItemClick}
        navItemRefs={navItemRefs}
        isExpanded={isExpanded}
      />
    );

    return Item;
  };

  return (
    <SideNavWrapper sideNavHeight={sideNavHeight}>
      <SideNavItems isExpanded={isExpanded} data-testid="side-nav-items">
        <PanelControlTooltip
          display={["none", "none", "none", "inline-block"]}
          width="fit-content"
          direction="right"
          tabIndex="-1"
          text={
            isExpanded ? "Collapse side navigation" : "Expand side navigation"
          }
        >
          <PanelControl
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="toggle side navigation"
          >
            <Icon
              icon={["fas", isExpanded ? "chevron-left" : "chevron-right"]}
            />
          </PanelControl>
        </PanelControlTooltip>
        {topAlignedItems.map(renderItem)}
        {pageSpecificItems.length > 0 && !isSmallScreen && (
          <Divider light display={["none", "none", "none", "block"]} />
        )}
        {pageSpecificItems.map(renderItem)}
        {viewing && (
          <>
            <Divider light display={["none", "none", "none", "block"]} />
            <SideNavViewingSection
              {...viewing}
              isExpanded={isExpanded}
              isSmallScreen={isSmallScreen}
            />
          </>
        )}
        {yourTeams && yourTeams.length > 0 && (
          <>
            <Divider light display={["none", "none", "none", "block"]} />
            <SideNavTeamsSection teams={yourTeams} isExpanded={isExpanded} />
          </>
        )}
        {pinnedItems && pinnedItems.length > 0 && (
          <>
            <Divider light display={["none", "none", "none", "block"]} />
            <SideNavPinnedSection
              items={pinnedItems}
              isExpanded={isExpanded}
              onUnpin={(itemName) => {
                const item = pinnedItems.find((item) => item.name === itemName);
                if (item && item.onUnpin) {
                  item.onUnpin(itemName);
                }
              }}
            />
          </>
        )}
        {bottomAlignedItems.length > 0 && (
          <>
            <Divider light display={["none", "none", "none", "block"]} />
            {bottomAlignedItems.map(renderItem)}
          </>
        )}
      </SideNavItems>
      {allItems.map((item, index) => {
        if (item.actionType !== "component") return null;
        if (index !== expandedItem || item.hide) return null;
        return (
          <SideNavExpanded
            key={item.name}
            ref={expandedRef}
            tabIndex="0"
            sideNavHeight={sideNavHeight}
            active={expandedItem}
            large={item.large}
            isExpanded={isExpanded}
            width={expandedWidth}
          >
            <ResizeHandle onMouseDown={handleResizeStart} />
            <PanelControlTooltip
              width="fit-content"
              direction="left"
              position="absolute"
              text="Hide panel"
              tabIndex="-1"
            >
              <PanelControl
                onClick={() => handleItemClick(item)}
                aria-label="toggle panel"
                onBlur={() => handleBlur(item)}
              >
                <Icon
                  icon={[
                    "fas",
                    isSmallScreen ? "chevron-down" : "chevron-left"
                  ]}
                />
              </PanelControl>
            </PanelControlTooltip>
            {item.component()}
          </SideNavExpanded>
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
