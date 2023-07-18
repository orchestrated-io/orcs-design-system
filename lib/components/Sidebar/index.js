import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { compose, space, layout } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";

const SidebarStyles = compose(space, layout);

const SidebarWrapper = styled("div")(
  (props) =>
    css({
      bg: themeGet("colors.greyDarkest")(props),
      color: themeGet("colors.white")(props),
      minHeight: "calc(100vh - " + themeGet("appScale.navBarSize")(props) + ")",
      height: "100%",
      maxWidth: "max-content",
      fontFamily: themeGet("fonts.main")(props),
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

SidebarTabs.propTypes = {
  /** SidebarTabs children, ie `SidebarTab` components, are rendered as node elements */
  children: PropTypes.node,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object
};

export const SidebarTab = styled("button").attrs((props) => ({
  className: props.badge ? "Sidebar__Badge" : "",
  marginTop: props.bottomAligned ? "auto" : "0",
  "aria-label": props.ariaLabel,
  "aria-expanded": props.active ? "true" : "false"
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
      transition: themeGet("transition.transitionDefault")(props),
      color: themeGet("colors.greyLightest")(props),
      bg: props.active ? themeGet("colors.greyDarker")(props) : "transparent",
      cursor: props.active ? "default" : "pointer",
      border: "none",
      padding: 0,
      fontSize: "1em",
      path: {
        transition: themeGet("transition.transitionDefault")(props),
        fill: themeGet("colors.greyLightest")(props)
      },
      "&:hover": {
        color: props.active
          ? themeGet("colors.greyLightest")(props)
          : themeGet("colors.primary")(props),
        path: {
          fill: props.active
            ? themeGet("colors.greyLightest")(props)
            : themeGet("colors.primary")(props)
        }
      },
      "&.Sidebar__Badge": {
        "&::before": {
          content: `"${props.badge}"`,
          position: "absolute",
          top: "8px",
          right: "calc(50% - 19px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          fontSize: themeGet("fontSizes.0")(props),
          fontWeight: themeGet("fontWeights.2")(props),
          color: themeGet("colors.white")(props),
          bg: themeGet("colors.danger")(props)
        }
      }
    }),
  SidebarStyles
);

SidebarTab.propTypes = {
  /** SidebarTab children are rendered as node elements */
  children: PropTypes.node,
  /** Specifies the open/active tab */
  active: PropTypes.bool,
  /** Sets last sidebar tab position to bottom of sidebar */
  bottomAligned: PropTypes.bool,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object,
  /** Set the ariaLabel */
  ariaLabel: PropTypes.string
};

export const SidebarPanels = styled("div")(
  css({
    position: "relative"
  }),
  SidebarStyles
);

SidebarPanels.propTypes = {
  /** Content of the SidebarPanels are rendered as node elements */
  children: PropTypes.node,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object
};

const SidebarPanelStyle = styled("div")(
  (props) =>
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
      bg: themeGet("colors.greyDarker")(props),
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

SidebarPanel.propTypes = {
  /** SidebarPanel children, ie `SidebarPanels` components, are rendered as node elements */
  children: PropTypes.node,
  /** Set the styles for this subcomponent if needed, using the `space` and `layout` styled-system categories */
  SidebarStyles: PropTypes.object
};

export const SidebarClose = styled("label")(
  (props) =>
    css({
      position: "absolute",
      right: "calc(-1 * 8px)",
      top: "14px",
      width: "24px",
      height: "24px",
      textAlign: "center",
      paddingTop: 1,
      borderRadius: "0 50% 50% 0",
      zIndex: 2,
      cursor: "w-resize",
      bg: themeGet("colors.greyDarker")(props),
      "@media screen and (max-width: 900px)": {
        top: "-10px",
        left: "calc(50% - 12px)",
        right: "auto",
        borderRadius: "50%",
        transform: "rotate(-90deg)",
        cursor: "s-resize"
      }
    }),
  SidebarStyles
);

const Sidebar = ({ children, theme, ...props }) => {
  const component = <SidebarWrapper {...props}>{children}</SidebarWrapper>;
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

Sidebar.propTypes = {
  /** Sidebar children are rendered as node elements */
  children: PropTypes.node,
  /** Specifies the colour theme */
  theme: PropTypes.object
};

/** @component */
export default Sidebar;
