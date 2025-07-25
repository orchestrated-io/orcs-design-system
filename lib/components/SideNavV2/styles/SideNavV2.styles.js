import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import { space } from "styled-system";
import Popover from "../../Popover";
import {
  BREAKPOINTS,
  DEFAULT_WIDTHS,
  SIDE_NAV_EXPANDED_WIDTH
} from "../constants/sideNav";

export const AnimatedContent = styled.div`
  display: ${(props) => (props.isExpanded ? "inline-block" : "none")};
  overflow: hidden;
  white-space: nowrap;
  max-width: ${(props) => (props.isExpanded ? "400px" : "0")};
  transition: ${(props) => (props.isExpanded ? "opacity 0.5s ease" : "none")};
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  will-change: max-width, opacity;
  height: ${(props) => (props.isExpanded ? "auto" : "0")};
  ${space}
`;

export const SideNavWrapper = styled("div")((props) =>
  css({
    bg: themeGet("colors.white")(props),
    color: themeGet("colors.greyDarkest")(props),
    minHeight: props.sideNavHeight || "100%",
    height: props.sideNavHeight || "100%",
    maxWidth: "max-content",
    fontFamily: themeGet("fonts.main")(props),
    borderRight: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    display: "flex",
    alignItems: "stretch",
    alignContent: "stretch",
    [`@media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}px)`]: {
      borderRight: "none",
      borderTop: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
      width: "100%",
      height: "auto",
      minWidth: "auto",
      maxWidth: "initial",
      minHeight: "initial",
      maxHeight: themeGet("appScale.sidebarMobileHeight", "100vh")(props),
      position: "fixed",
      bottom: "0",
      left: "0",
      zIndex: "6",
      flexDirection: "column-reverse"
    }
  })
);

export const SideNavItems = styled("div")((props) =>
  css({
    width: props.isExpanded
      ? SIDE_NAV_EXPANDED_WIDTH
      : themeGet("appScale.sideNavSize")(props),
    transition: props.isExpanded ? "width 0.6s ease" : "width 0.35s ease",
    minHeight: "inherit",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    flexShrink: "0",
    padding: "0 10px 10px 10px",
    // gap: "s",
    alignItems: props.isExpanded ? "stretch" : "center",
    justifyContent: "flex-start",
    textAlign: props.isExpanded ? "left" : "center",
    position: "relative",

    [`@media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}px)`]: {
      padding: "10px",
      height: "auto",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "auto"
    }
  })
);

export const PanelControlTooltip = styled(Popover)`
  width: fit-content;
  ${(props) =>
    props.position === "absolute" &&
    css({
      position: "absolute",
      right: themeGet("space.r")(props),
      top: "10px"
    })}
`;

export const PanelControl = styled("button")((props) =>
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

export const ResizeHandle = styled("div")((props) =>
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
    [`@media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}px)`]: {
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

export const SideNavExpanded = styled("div")((props) =>
  css({
    position: "relative",
    display: props.active ? "block" : "none",
    width: props.width ? `${props.width}px` : "auto",
    minWidth: props.large
      ? `${DEFAULT_WIDTHS.largeMin}px`
      : `${DEFAULT_WIDTHS.normalMin}px`,
    maxWidth: props.large
      ? `${DEFAULT_WIDTHS.largeMax}px`
      : `${DEFAULT_WIDTHS.normalMax}px`,
    height: "inherit",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "16px",
    borderLeft: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    "&:focus": {
      outline: "0"
    },
    [`@media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}px)`]: {
      width: "100%",
      minWidth: "initial",
      maxWidth: "initial",
      borderLeft: "none",
      borderBottom: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
      height:
        "calc(" +
        themeGet("appScale.sidebarMobileHeight", "100vh")(props) +
        " - " +
        themeGet("appScale.newNavBarSize")(props) +
        ")"
    }
  })
);
