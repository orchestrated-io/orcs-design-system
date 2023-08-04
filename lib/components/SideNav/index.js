import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
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
    "&:hover, &:focus": {
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
      "&:hover, &:focus": {
        "& .sideNavItemName": {
          display: "none"
        }
      }
    }
  })
);

const SideNavItem = styled("button").attrs((props) => ({
  className: props.badge ? "Sidebar__Badge" : "",
  marginTop: props.bottomAligned ? "auto" : "0"
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
      marginBottom: props.bottomAligned ? "0" : "s",
      marginTop: props.bottomAligned ? "s" : "0",
      fontSize: "1.4rem",
      fontWeight: themeGet("fontWeights.1")(props),
      color: themeGet("colors.greyDarker")(props),
      path: {
        transition: themeGet("transition.transitionDefault")(props),
        fill: themeGet("colors.greyDarker")(props)
      },
      "&:hover, &:focus": {
        outline: "0",
        color: themeGet("colors.primary")(props),
        path: {
          fill: themeGet("colors.primary")(props)
        },
        "& .sideNavItemName": {
          color: themeGet("colors.primary")(props)
        }
      },
      "@media screen and (max-width: 900px)": {
        width: "auto",
        marginBottom: "0",
        marginTop: "0"
      }
    }),
  (props) =>
    props.active &&
    css({
      bg: themeGet("colors.primary")(props),
      path: {
        fill: themeGet("colors.white")(props)
      },
      "& .sideNavItemName": {
        color: themeGet("colors.white")(props)
      },
      "&:hover, &:focus": {
        path: {
          fill: themeGet("colors.white")(props)
        },
        "& .sideNavItemName": {
          color: themeGet("colors.white")(props)
        }
      }
    })
);

const SideNavItemLink = styled("div").attrs((props) => ({
  className: props.badge ? "Sidebar__Badge" : "",
  marginTop: props.bottomAligned ? "auto" : "0",
  "aria-label": props.ariaLabel,
  "aria-expanded": props.active ? "true" : "false"
}))(
  (props) =>
    css({
      cursor: "pointer",
      padding: "s",
      textDecoration: "none",
      marginBottom: props.bottomAligned ? "0" : "s",
      marginTop: props.bottomAligned ? "s" : "0",
      borderRadius: themeGet("radii.2")(props),
      width: "100%",
      path: {
        transition: themeGet("transition.transitionDefault")(props),
        fill: themeGet("colors.greyDarker")(props)
      },
      "&:hover, &:focus": {
        "& .sideNavItemName": {
          color: themeGet("colors.primary")(props)
        },
        path: {
          fill: themeGet("colors.primary")(props)
        }
      },
      "@media screen and (max-width: 900px)": {
        width: "auto",
        marginBottom: "0",
        marginTop: "0"
      },
      "& > a": {
        fontFamily: themeGet("fonts.main")(props),
        textDecoration: "none",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        transition: themeGet("transition.transitionDefault")(props),
        bg: "transparent",
        fontSize: "1.4rem",
        fontWeight: themeGet("fontWeights.1")(props),
        "@media screen and (max-width: 900px)": {
          width: "auto"
        },
        "&:focus": {
          outline: "0",
          color: themeGet("colors.primary")(props),
          path: {
            fill: themeGet("colors.primary")(props)
          }
        }
      }
    }),
  (props) =>
    props.active &&
    css({
      bg: themeGet("colors.primary")(props),
      path: {
        fill: themeGet("colors.white")(props)
      },
      "& .sideNavItemName": {
        color: themeGet("colors.white")(props)
      },
      "&:hover, &:focus": {
        path: {
          fill: themeGet("colors.white")(props)
        },
        "& .sideNavItemName": {
          color: themeGet("colors.white")(props)
        }
      }
    })
);

const BottomAlignedNavItems = styled("div")(() =>
  css({
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    "@media screen and (max-width: 900px)": {
      width: "auto"
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
    whiteSpace: "nowrap",
    textDecoration: "none",
    color: themeGet("colors.greyDarker")(props),
    "&:hover, &:focus": {
      color: themeGet("colors.primary")(props)
    }
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

const NavItem = ({ item, Component, activeItem, handleItemClick }) => {
  // Use the ternary operator to render the appropriate component based on actionType
  const accessibilityProps = {
    ...(item.actionType === "component" && {
      "aria-expanded": item.index === activeItem ? "true" : "false"
    })
  };
  return item.actionType === "link" ? (
    <SideNavItemLink
      key={item.index}
      active={item.index === activeItem}
      bottomAligned={item.bottomAligned}
    >
      <Component item={item}>
        <Icon icon={["far", item.iconName]} />
        <SideNavItemName className="sideNavItemName">
          {item.name}
        </SideNavItemName>
      </Component>
    </SideNavItemLink>
  ) : (
    <SideNavItem
      key={item.index}
      active={item.index === activeItem}
      onClick={() => handleItemClick(item.index, item.actionType, item.onClick)}
      bottomAligned={item.bottomAligned}
      aria-label={item.name}
      {...accessibilityProps}
    >
      {item.badgeNumber && <BadgeNumber>{item.badgeNumber}</BadgeNumber>}
      <Icon icon={["far", item.iconName]} />
      <SideNavItemName className="sideNavItemName">{item.name}</SideNavItemName>
    </SideNavItem>
  );
};

const SideNav = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemIndex, actionType, buttonClick) => {
    if (actionType === "link" || actionType === "button") {
      setExpandedItem(null);
      buttonClick && buttonClick();
    } else {
      setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
    }

    setActiveItem(itemIndex === activeItem ? null : itemIndex);
  };

  // Split items into two arrays based on the bottomAligned prop
  const allItems = items.map((item, index) => ({ ...item, index }));
  const topAlignedItems = allItems.filter((item) => !item.bottomAligned);
  const bottomAlignedItems = allItems.filter((item) => item.bottomAligned);

  const [isGreaterThan900, setIsGreaterThan900] = useState(
    window.innerWidth > 900
  );

  const handleResize = () => {
    setIsGreaterThan900(window.innerWidth > 900);
  };

  const debounceResize = () => setTimeout(handleResize, 300); // Wrap in a function

  useEffect(() => {
    return () => clearTimeout(handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  });

  return (
    <SideNavWrapper>
      <SideNavItems>
        {topAlignedItems.map((item) => {
          const Component = item.component;
          return (
            <NavItem
              key={item.index}
              item={item}
              Component={Component}
              activeItem={activeItem}
              handleItemClick={handleItemClick}
            />
          );
        })}
        {bottomAlignedItems.length > 0 && // Render the special-container only if there are bottom-aligned items
          (isGreaterThan900 ? (
            <BottomAlignedNavItems>
              {bottomAlignedItems.map((item) => {
                const Component = item.component;
                return (
                  <NavItem
                    key={item.index}
                    item={item}
                    Component={Component}
                    activeItem={activeItem}
                    handleItemClick={handleItemClick}
                  />
                );
              })}
            </BottomAlignedNavItems>
          ) : (
            bottomAlignedItems.map((item) => {
              const Component = item.component;
              return (
                <NavItem
                  key={item.index}
                  item={item}
                  Component={Component}
                  activeItem={activeItem}
                  handleItemClick={handleItemClick}
                />
              );
            })
          ))}
      </SideNavItems>
      {expandedItem !== null && allItems[expandedItem].component ? (
        <SideNavExpanded
          active={expandedItem === activeItem}
          large={allItems[expandedItem] && allItems[expandedItem].large}
        >
          {allItems[expandedItem].component()}
        </SideNavExpanded>
      ) : null}
    </SideNavWrapper>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.elementType,
  activeItem: PropTypes.string,
  handleItemClick: PropTypes.func
};

SideNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      badgeNumber: PropTypes.string,
      large: PropTypes.bool,
      bottomAligned: PropTypes.bool,
      actionType: PropTypes.oneOf(["component", "link", "button"]).isRequired,
      component: PropTypes.elementType,
      link: PropTypes.string,
      onClick: PropTypes.func
    })
  ).isRequired,
  LinkComponent: PropTypes.elementType // React Router Link component
};

/** @component */
export default SideNav;
