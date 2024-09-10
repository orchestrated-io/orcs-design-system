import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Popover from "../Popover";
import Divider from "../Divider";
import NavItem from "./NavItem";

const SMALL_SCREEN_BREAKPOINT = 900;

const SideNavWrapper = styled("div")((props) =>
  css({
    bg: themeGet("colors.white")(props),
    color: themeGet("colors.greyDarkest")(props),
    minHeight: props.sideNavHeight,
    height: props.sideNavHeight,
    maxWidth: "max-content",
    fontFamily: themeGet("fonts.main")(props),
    borderRadius: themeGet("radii.2")(props),
    border: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    boxShadow: themeGet("shadows.boxDefault")(props),
    display: "flex",
    alignItems: "stretch",
    alignContent: "stretch",
    [`@media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
      borderRadius: "0",
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
    minWidth: themeGet("appScale.navBarSize")(props),
    minHeight: "inherit",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "r",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    position: "relative",

    [`@media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
      height: `calc(${themeGet("space.r")(props)} * 2 + 30px)`,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    }
  })
);

const PanelControlTooltip = styled(Popover)`
  position: absolute;
  right: ${themeGet("space.r")};
  top: ${themeGet("space.r")};
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

const SideNavExpanded = styled("div")((props) =>
  css({
    position: "relative",
    display: props.active ? "block" : "none",
    minWidth: props.large
      ? "calc(" +
        themeGet("appScale.sidebarMaxWidthLarge")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")"
      : "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")",
    maxWidth: props.large
      ? "calc(" +
        themeGet("appScale.sidebarMaxWidthLarge")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")"
      : "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")",
    height: "inherit",
    overflowY: "auto",
    padding: "r",
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
        themeGet("appScale.navBarSize")(props) +
        ")"
    }
  })
);

const SideNav = ({ items, sideNavHeight }) => {
  const [expandedItem, setExpandedItem] = useState(null);

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

  // Split items into two arrays based on the bottomAligned prop
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

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const debounceResize = () => setTimeout(handleResize, 300); // Wrap in a function

  useEffect(() => {
    return () => clearTimeout(handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  });

  // Use a useEffect to focus on the expanded item
  useEffect(() => {
    if (expandedItem !== null && expandedRef.current) {
      expandedRef.current.focus();
    }
  }, [expandedItem]);

  const handleBlur = (item) => {
    handleItemClick(item);
  };

  const orderedItems = [
    ...topAlignedItems,
    ...pageSpecificItems,
    ...bottomAlignedItems
  ];

  const renderItem = (item, index) => {
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
      />
    );

    if (
      item.pageSpecific &&
      !orderedItems[index - 1].pageSpecific &&
      !isSmallScreen
    ) {
      return (
        <>
          <Divider
            light
            mt="s"
            mb="r"
            display={["none", "none", "none", "block"]}
          />
          {Item}
        </>
      );
    }

    return Item;
  };

  return (
    <SideNavWrapper sideNavHeight={sideNavHeight}>
      <SideNavItems>{orderedItems.map(renderItem)}</SideNavItems>
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
          >
            {item.component()}
            <PanelControlTooltip
              width="80px"
              textAlign="center"
              direction="left"
              text="Hide panel"
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
          </SideNavExpanded>
        );
      })}
    </SideNavWrapper>
  );
};

SideNav.propTypes = {
  sideNavHeight: PropTypes.string.isRequired, // Used to specify the height of the sideNav
  initiallyExpandedItemIndex: PropTypes.number, // Used to specify the index of the item that should be expanded by default
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
  LinkComponent: PropTypes.elementType
};

export default SideNav;
