import React from "react";
import styled from "styled-components";
import { compose, space, layout } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";
import PropTypes from "prop-types";

const SidebarStyles = compose(space, layout);

const SidebarWrapper = styled("div")(
  props =>
    css({
      bg: "greyDarkest",
      color: "white",
      minHeight: "calc(100vh - " + themeGet("appScale.navBarSize")(props) + ")",
      height: "100%",
      maxWidth: themeGet("appScale.sidebarMaxWidth")(props),
      fontFamily: "main",
      display: "flex",
      alignItems: "stretch",
      alignContent: "stretch"
    }),
  SidebarStyles
);

export const SidebarTabs = styled("div")(
  props =>
    css({
      minWidth: themeGet("appScale.navBarSize")(props),
      minHeight: "calc(100vh - " + themeGet("appScale.navBarSize")(props) + ")",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center"
    }),
  SidebarStyles
);

export const SidebarTab = styled("label").attrs(props => ({
  className: props.badge ? "Sidebar__Badge" : ""
}))(
  props =>
    css({
      minWidth: themeGet("appScale.navBarSize")(props),
      minHeight: themeGet("appScale.navBarSize")(props),
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      transition: "transitionDefault",
      color: props.active ? "primary" : "greyLightest",
      bg: props.active ? "greyDarker" : "transparent",
      cursor: props.active ? "default" : "pointer",
      "&:hover": {
        bg: props.active ? "greyDarker" : "black20"
      },
      "&.Sidebar__Badge": {
        "&::before": {
          content: `"${props.badge}"`,
          position: "absolute",
          top: 3,
          right: 3,
          display: "flex",
          lineHeight: themeGet("sizes.4")(props),
          alignItems: "center",
          justifyContent: "center",
          width: 4,
          height: 4,
          borderRadius: "50%",
          fontSize: 0,
          fontWeight: 2,
          color: "white",
          bg: "danger"
        }
      }
    }),
  SidebarStyles
);

export const SidebarPanels = styled("div")(
  css({
    position: "relative"
  }),
  SidebarStyles
);

export const SidebarPanel = styled("div")(
  props =>
    css({
      display: props.active ? "block" : "none",
      minWidth:
        "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")",
      height:
        "calc(100vh - ( " +
        themeGet("appScale.navBarSize")(props) +
        " + " +
        themeGet("appScale.sidebarFooter")(props) +
        "))",
      overflowY: "auto",
      bg: "greyDarker"
    }),
  SidebarStyles
);

export const SidebarClose = styled("label")(
  props =>
    css({
      position: "absolute",
      right: "calc(-1 * " + themeGet("space.3")(props) + ")",
      top: "50%",
      width: 5,
      height: 5,
      textAlign: "center",
      paddingTop: 1,
      borderRadius: "50%",
      zIndex: 3,
      cursor: "w-resize",
      bg: "greyDarker"
    }),
  SidebarStyles
);

export const SidebarFooter = styled("footer")(
  css({
    zIndex: 6,
    px: 3,
    py: 4,
    position: "relative",
    bottom: 0,
    left: 0,
    width: "100%",
    bg: "greyDarker",
    boxShadow: "0 -1px 0 0 rgba(0, 0, 0, 0.3)",
    svg: {
      display: "block",
      mb: 3
    },
    small: {
      display: "block",
      fontSize: 0
    },
    a: {
      color: "white"
    }
  }),
  SidebarStyles
);

const Sidebar = ({ children, theme, ...props }) => {
  return (
    <SidebarWrapper theme={theme} {...props}>
      {children}
    </SidebarWrapper>
  );
};

/** @component */
export default Sidebar;

Sidebar.propTypes = {
  /** Sidebar children are rendered as node elements */
  children: PropTypes.node,
  /** Specifies the colour theme */
  theme: PropTypes.object
};

Sidebar.defaultProps = {
  theme: systemtheme
};
