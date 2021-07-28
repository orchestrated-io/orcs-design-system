import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { compose, space, layout } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";
import PropTypes from "prop-types";

const SidebarStyles = compose(space, layout);

const SidebarWrapper = styled("div")(
  (props) =>
    css({
      bg: "greyDarkest",
      color: "white",
      minHeight: "calc(100vh - " + themeGet("appScale.navBarSize")(props) + ")",
      height: "100%",
      maxWidth: themeGet("appScale.sidebarMaxWidth")(props),
      fontFamily: "main",
      display: "flex",
      alignItems: "stretch",
      alignContent: "stretch",
      "@media screen and (max-width: 900px)": {
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
    }),
  SidebarStyles
);

export const SidebarTabs = styled("div")(
  (props) =>
    css({
      minWidth: themeGet("appScale.navBarSize")(props),
      minHeight: "calc(100vh - " + themeGet("appScale.navBarSize")(props) + ")",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",
      "@media screen and (max-width: 900px)": {
        height: themeGet("appScale.navBarSize")(props),
        flexDirection: "row",
        minHeight: "initial",
        minWidth: "initial"
      }
    }),
  SidebarStyles
);

export const SidebarTab = styled("label").attrs((props) => ({
  className: props.badge ? "Sidebar__Badge" : "",
  marginTop: props.bottomAligned ? "auto" : "0"
}))(
  (props) =>
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
      path: {
        fill: themeGet("colors.greyLightest")(props)
      },
      "&:hover": {
        bg: props.active ? "greyDarker" : "black20",
        color: props.active ? "primary" : "warning",
        path: {
          fill: themeGet("colors.warning")(props)
        }
      },
      "&.Sidebar__Badge": {
        "&::before": {
          content: `"${props.badge}"`,
          position: "absolute",
          top: 3,
          right: "calc(50% - 19px)",
          display: "flex",
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

const SidebarPanelStyle = styled("div")(
  (props) =>
    css({
      display: props.active ? "block" : "none",
      minWidth:
        "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")",
      maxWidth:
        "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")",
      height: "calc(100vh - ( " + themeGet("appScale.navBarSize")(props) + "))",
      overflowY: "auto",
      bg: "greyDarker",
      "@media screen and (max-width: 900px)": {
        width: "100%",
        minWidth: "initial",
        maxWidth: "initial",
        height:
          "calc(" +
          themeGet("appScale.sidebarMobileHeight")(props) +
          " - " +
          themeGet("appScale.navBarSize")(props) +
          ")"
      }
    }),
  SidebarStyles
);

export const SidebarPanel = ({ SidebarStyles, children, ...props }) => {
  return (
    <SidebarPanelStyle {...SidebarStyles} {...props}>
      {children}
    </SidebarPanelStyle>
  );
};

export const SidebarClose = styled("label")(
  (props) =>
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
      bg: "greyDarker",
      "@media screen and (max-width: 900px)": {
        top: "-10px",
        left: "calc(50% - 12px)",
        right: "auto",
        transform: "rotate(-90deg)",
        cursor: "s-resize"
      }
    }),
  SidebarStyles
);

const Sidebar = ({ children, theme, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <SidebarWrapper {...props}>{children}</SidebarWrapper>
    </ThemeProvider>
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

SidebarPanel.propTypes = {
  /** SidebarPanel children, ie `SidebarPanels` components, are rendered as node elements */
  children: PropTypes.node,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object
};

SidebarPanels.propTypes = {
  /** Content of the SidebarPanels are rendered as node elements */
  children: PropTypes.node,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object
};

SidebarTabs.propTypes = {
  /** SidebarTabs children, ie `SidebarTab` components, are rendered as node elements */
  children: PropTypes.node,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object
};

SidebarTab.propTypes = {
  /** SidebarTab children are rendered as node elements */
  children: PropTypes.node,
  /** Sets last sidebar tab position to bottom of sidebar */
  bottomAligned: PropTypes.bool,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object
};
