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

const SideNavWrapper = styled("div")((props) =>
  css({
    bg: themeGet("colors.white")(props),
    color: themeGet("colors.greyDarkest")(props),
    minHeight: props.sideNavHeight,
    height: props.sideNavHeight,
    overflowY: "auto",
    maxWidth: "max-content",
    fontFamily: themeGet("fonts.main")(props),
    borderRight: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
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
    width: props.isExpanded ? "200px" : themeGet("appScale.sideNavSize")(props),
    minHeight: "inherit",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "s",
    gap: "xs",
    alignItems: props.isExpanded ? "stretch" : "center",
    justifyContent: "flex-start",
    textAlign: props.isExpanded ? "left" : "center",
    position: "relative",

    [`@media screen and (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
      height: `calc(${themeGet("space.s")(props)} * 2 + 30px)`,
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

const SideNavExpanded = styled("div")((props) =>
  css({
    position: "relative",
    display: props.active ? "block" : "none",
    minWidth: props.large
      ? "calc(" +
        themeGet("appScale.sidebarMaxWidthLarge")(props) +
        " - " +
        (props.isExpanded
          ? "200px"
          : themeGet("appScale.newNavBarSize")(props)) +
        ")"
      : "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        (props.isExpanded
          ? "200px"
          : themeGet("appScale.newNavBarSize")(props)) +
        ")",
    maxWidth: props.large
      ? "calc(" +
        themeGet("appScale.sidebarMaxWidthLarge")(props) +
        " - " +
        (props.isExpanded
          ? "200px"
          : themeGet("appScale.newNavBarSize")(props)) +
        ")"
      : "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        (props.isExpanded
          ? "200px"
          : themeGet("appScale.newNavBarSize")(props)) +
        ")",
    height: "inherit",
    overflowY: "auto",
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
        (props.isExpanded
          ? "200px"
          : themeGet("appScale.newNavBarSize")(props)) +
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
      <SideNavItems isExpanded={isExpanded}>
        <PanelControlTooltip
          width="fit-content"
          display="inline-block"
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
        {viewing && isExpanded && (
          <>
            <Divider light display={["none", "none", "none", "block"]} />
            <SideNavViewingSection {...viewing} isExpanded={isExpanded} />
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
            <SideNavPinnedSection items={pinnedItems} isExpanded={isExpanded} />
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
          >
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
      link: PropTypes.string.isRequired
    })
  )
};

export default SideNavV2;
