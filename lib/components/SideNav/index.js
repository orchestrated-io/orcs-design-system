import React, { useState } from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const SideNavWrapper = styled("div")((props) =>
  css({
    bg: themeGet("colors.white")(props),
    color: themeGet("colors.greyDarkest")(props),
    minHeight: "calc(100vh - " + themeGet("appScale.navBarSize")(props) + ")",
    height: "100%",
    maxWidth: "max-content",
    fontFamily: themeGet("fonts.main")(props),
    borderRadius: themeGet("radii.2")(props),
    border: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    boxShadow: themeGet("shadows.boxDefault")(props),
    display: "flex",
    alignItems: "stretch",
    alignContent: "stretch",
    "@media screen and (max-width: 900px)": {
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
    minHeight: "calc(100vh - " + themeGet("appScale.navBarSize")(props) + ")",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "r",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    "&:hover": {
      "& .sideNavItemName": {
        display: "block"
      }
    },
    "@media screen and (max-width: 900px)": {
      height: themeGet("appScale.navBarSize")(props),
      flexDirection: "row",
      minHeight: "initial",
      minWidth: "initial",
      justifyContent: "space-around",
      "&:hover": {
        "& .sideNavItemName": {
          display: "none"
        }
      }
    }
  })
);

const SideNavItem = styled("button").attrs((props) => ({
  className: props.badge ? "Sidebar__Badge" : "",
  marginTop: props.bottomAligned ? "auto" : "0",
  "aria-label": props.ariaLabel,
  "aria-expanded": props.active ? "true" : "false"
}))(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      borderRadius: themeGet("radii.2")(props),
      transition: themeGet("transition.transitionDefault")(props),
      bg: "transparent",
      cursor: "pointer",
      border: "none",
      padding: "s",
      marginBottom: "s",
      fontSize: "1.4rem",
      fontWeight: themeGet("fontWeights.1")(props),
      color: themeGet("colors.greyDarker")(props),
      path: {
        transition: themeGet("transition.transitionDefault")(props),
        fill: themeGet("colors.greyDarker")(props)
      },
      "&:hover": {
        color: themeGet("colors.primary")(props),
        path: {
          fill: themeGet("colors.primary")(props)
        }
      },
      "@media screen and (max-width: 900px)": {
        width: "auto"
      }
    }),
  (props) =>
    props.active &&
    css({
      bg: themeGet("colors.primary")(props),
      color: themeGet("colors.white")(props),
      path: {
        fill: themeGet("colors.white")(props)
      },
      "&:hover": {
        color: themeGet("colors.white")(props),
        path: {
          fill: themeGet("colors.white")(props)
        }
      }
    })
);

const BadgeNumber = styled("div")((props) =>
  css({
    position: "absolute",
    height: "16px",
    width: "16px",
    bg: themeGet("colors.danger")(props),
    fontSize: "1rem",
    fontWeight: themeGet("fontWeights.2")(props),
    color: themeGet("colors.white")(props),
    borderRadius: "50%",
    top: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
);

const SideNavItemName = styled("div")((props) =>
  css({
    display: "none",
    lineHeight: "0",
    marginLeft: themeGet("space.r")(props),
    fontSize: themeGet("fontSizes.1")(props),
    whiteSpace: "nowrap"
  })
);

const SideNavExpanded = styled("div")((props) =>
  css({
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
    height: "calc(100vh - ( " + themeGet("appScale.navBarSize")(props) + "))",
    overflowY: "auto",
    padding: "r",
    borderLeft: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    "@media screen and (max-width: 900px)": {
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

const SideNav = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemIndex, itemComponent) => {
    if (typeof itemComponent === "function" && itemComponent === Link) {
      // If the item component is a React Router link, do not expand the SideNavExpanded
      setExpandedItem(null);
    } else {
      setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
    }
    setActiveItem(itemIndex === activeItem ? null : itemIndex);
  };

  return (
    <SideNavWrapper>
      <SideNavItems>
        {items.map((item, index) => (
          <SideNavItem
            key={index}
            active={index === activeItem}
            onClick={() => handleItemClick(index)}
          >
            {item.badgeNumber && <BadgeNumber>{item.badgeNumber}</BadgeNumber>}
            <Icon icon={["far", item.iconName]} />
            <SideNavItemName className="sideNavItemName">
              {item.name}
            </SideNavItemName>
          </SideNavItem>
        ))}
      </SideNavItems>
      {expandedItem !== null &&
      typeof items[expandedItem].component === "object" ? (
        <SideNavExpanded
          active={expandedItem === activeItem}
          large={items[expandedItem] && items[expandedItem].large}
        >
          {items[expandedItem].component}
        </SideNavExpanded>
      ) : null}
    </SideNavWrapper>
  );
};

SideNav.propTypes = {
  /** Sidenav supports passing in an items array, which has to contain an icon and a name for the nav item and then one of either a component (if the nav item is expanding the side nav) or a react router link (if the nav item is just linking to another page/route) */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
      badgeNumber: PropTypes.string, // Optional badgeNumber prop
      large: PropTypes.bool // Optional large prop
    })
  ).isRequired
};

/** @component */
export default SideNav;
