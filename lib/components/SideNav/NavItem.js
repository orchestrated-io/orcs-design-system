import React from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Popover from "../Popover";

const SideNavItemLink = styled("div")(
  (props) =>
    css({
      "& > a": {
        cursor: "pointer",
        padding: "s",
        textDecoration: "none",
        borderRadius: themeGet("radii.2")(props),
        width: "100%",
        path: {
          transition: themeGet("transition.transitionDefault")(props),
          fill: themeGet("colors.greyDarker")(props)
        },
        fontFamily: themeGet("fonts.main")(props),
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: "100%",
        transition: themeGet("transition.transitionDefault")(props),
        bg: "transparent",
        fontSize: "1.4rem",
        fontWeight: themeGet("fontWeights.1")(props),
        "&:hover, &:focus": {
          path: {
            fill: themeGet("colors.primary")(props)
          }
        },
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
      "& > a": {
        bg: themeGet("colors.primary")(props),
        path: {
          fill: themeGet("colors.white")(props)
        },
        "&:hover, &:focus": {
          path: {
            fill: themeGet("colors.white")(props)
          }
        },
        "&:focus": {
          path: {
            fill: themeGet("colors.white")(props)
          }
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

const BadgeDot = styled("div")((props) =>
  css({
    position: "absolute",
    height: "8px",
    width: "8px",
    bg: themeGet("colors.primary")(props),
    borderRadius: "50%",
    top: "2px",
    right: "0"
  })
);

const SideNavItemPopover = styled(Popover)((props) =>
  css({
    width: "100%",
    marginBottom: props.bottomAligned ? "0" : "s",
    marginTop: props.bottomAligned ? "s" : "0",
    "&:hover,&:focus-within": {
      "& .popoverText": {
        opacity: "1",
        zIndex: "100",
        visibility: "visible",
        pointerEvents: "auto",
        display: "initial"
      }
    },
    "&:focus-within": {
      "& .popoverText": {
        opacity: props.active ? "0" : "1",
        zIndex: props.active ? "-100" : "100",
        visibility: props.active ? "hidden" : "visible",
        pointerEvents: props.active ? "none" : "auto",
        display: props.active ? "none" : "initial"
      }
    },
    "@media screen and (max-width: 900px)": {
      width: "auto",
      marginBottom: "0",
      marginTop: "0",
      "&:hover,&:focus-within": {
        "& .popoverText": {
          opacity: "0",
          zIndex: "-100",
          visibility: "hidden",
          pointerEvents: "none",
          justifyContent: "space-around",
          display: "none"
        }
      }
    }
  })
);

const SideNavItem = styled("button")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: themeGet("radii.2")(props),
      transition: themeGet("transition.transitionDefault")(props),
      bg: "transparent",
      cursor: "pointer",
      border: "none",
      padding: "s",
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
      path: {
        fill: themeGet("colors.white")(props)
      },

      "&:hover, &:focus": {
        path: {
          fill: themeGet("colors.white")(props)
        }
      }
    })
);

const NavItem = ({
  item,
  Component,
  activeItem,
  handleItemClick,
  navItemRefs
}) => {
  // Use the ternary operator to render the appropriate component based on actionType
  const accessibilityProps = {
    ...(item.actionType === "component" && {
      "aria-expanded": item.index === activeItem ? "true" : "false"
    }),
    "aria-label": item.name
  };

  return item.actionType === "link" ? (
    <SideNavItemPopover
      text={item.name}
      textAlign="center"
      width="124px"
      active={item.index === activeItem}
      bottomAligned={item.bottomAligned}
    >
      <SideNavItemLink
        key={item.index}
        active={item.index === activeItem}
        bottomAligned={item.bottomAligned}
        onClick={() => handleItemClick(item)}
        ref={(el) => (navItemRefs.current[item.index] = el)}
      >
        <Component item={item}>
          <Icon icon={["far", item.iconName]} />
        </Component>
      </SideNavItemLink>
    </SideNavItemPopover>
  ) : (
    <SideNavItemPopover
      text={item.name}
      textAlign="center"
      width="124px"
      active={item.index === activeItem}
      bottomAligned={item.bottomAligned}
    >
      <SideNavItem
        key={item.index}
        active={item.index === activeItem}
        onClick={() => handleItemClick(item)}
        bottomAligned={item.bottomAligned}
        {...accessibilityProps}
        ref={(el) => (navItemRefs.current[item.index] = el)}
      >
        {item.badgeNumber && <BadgeNumber>{item.badgeNumber}</BadgeNumber>}
        {item.badgeDot && <BadgeDot />}
        <Icon icon={["far", item.iconName]} />
      </SideNavItem>
    </SideNavItemPopover>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.elementType,
  activeItem: PropTypes.string,
  handleItemClick: PropTypes.func,
  navItemRefs: PropTypes.object
};

export default NavItem;
