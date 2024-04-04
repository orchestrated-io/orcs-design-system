import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { css } from "@styled-system/css";
import { space, color } from "styled-system";

export const TabsContainerItem = styled("div")(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    bg: "transparent"
  }),
  space
);

export const TabItem = styled("div")(
  (props) =>
    css({
      marginRight: 3,
      a: {
        borderRadius: themeGet("radii.2")(props),
        bg: themeGet("colors.greyLighter")(props),
        transition: themeGet("transition.transitionDefault")(props),
        px: 4,
        py: 3,
        fontSize: themeGet("fontSizes.1")(props),
        fontWeight: themeGet("fontWeights.2")(props),
        color: themeGet("colors.greyDarker")(props),
        display: "flex",
        alignItems: "center",
        position: "relative",
        whiteSpace: "nowrap",
        textDecoration: "none",
        textAlign: "center",
        textTransform: "uppercase",
        cursor: "pointer",
        "&:hover": {
          bg: themeGet("colors.greyLight")(props),
          color: themeGet("colors.greyDarker")(props),
          outline: "0"
        },
        "&:focus": {
          color: themeGet("colors.greyDarker")(props),
          outline: "0",
          boxShadow:
            themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors.grey")(props)
        },
        button: {
          marginLeft: 2
        }
      },
      "&.active": {
        a: {
          color: themeGet("colors.primary")(props),
          bg: themeGet("colors.white")(props),
          "&:hover": {
            cursor: "default"
          }
        }
      },
      "&.notification": {
        a: {
          "&::after": {
            position: "absolute",
            top: "calc(8px * -1)",
            right: "calc(4px * -2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            fontSize: themeGet("fontSizes.0")(props),
            fontWeight: themeGet("fontWeights.2")(props),
            content: `"${props.notification}"`,
            bg: themeGet("colors.danger")(props),
            color: themeGet("colors.white")(props),
            zIndex: 4
          }
        }
      }
    }),
  space,
  color
);

export const Tab = ({ theme, children, active, notification, ...props }) => {
  const component = (
    <TabItem
      active={active}
      notification={notification}
      role="presentation"
      className={`${active ? "active" : ""} ${
        notification ? "notification notification-" + notification : ""
      }`}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { role: "tab", "aria-selected": `${active}` })
      )}
    </TabItem>
  );
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

Tab.propTypes = {
  /** Specifies whether the tab is the active tab */
  active: PropTypes.bool,
  /** Specifies any notifications attached to the Tab */
  notification: PropTypes.string,
  /** Specifies the colour theme */
  theme: PropTypes.object,
  /** The content of the Tab is passed as a child. */
  children: PropTypes.node
};

export const TabsContainer = ({ theme, children, ...props }) => {
  const component = (
    <TabsContainerItem role="tablist" {...props}>
      {children}
    </TabsContainerItem>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

TabsContainer.propTypes = {
  /** The contents of the TabsContainer are passed as a child. */
  children: PropTypes.node,
  /** Specifies the colour theme of the container */
  theme: PropTypes.object
};
