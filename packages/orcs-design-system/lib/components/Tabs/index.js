import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { css } from "@styled-system/css";
import { space, color } from "styled-system";
import systemtheme from "../../systemtheme";

export const TabsContainerItem = styled("div")(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    bg: "transparent",
    pb: 4
  }),
  space
);

export const TabItem = styled("div")(
  props =>
    css({
      marginRight: 3,
      a: {
        borderRadius: 2,
        bg: "greyLighter",
        transition: "transitionDefault",
        px: 4,
        py: 3,
        fontSize: 1,
        fontWeight: 2,
        color: "greyDark",
        display: "block",
        position: "relative",
        cursor: "default",
        whiteSpace: "nowrap",
        textDecoration: "none",
        textAlign: "center",
        textTransform: "uppercase"
      },
      "&:hover": {
        a: {
          cursor: "pointer",
          bg: "greyLight",
          color: "greyDarker",
          outline: "0"
        }
      },
      "&:focus": {
        a: {
          cursor: "pointer",
          bg: "greyLight",
          color: "greyDarker",
          outline: "0"
        }
      },
      "&.active": {
        a: {
          color: "primary",
          bg: "greyLightest"
        }
      },
      "&.notification": {
        a: {
          "&::after": {
            position: "absolute",
            top: "calc(" + themeGet("space.3")(props) + " * (-1))",
            right: "calc(" + themeGet("space.2")(props) + " * (-1))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 5,
            height: 5,
            borderRadius: "50%",
            fontSize: 1,
            fontWeight: 2,
            content: `"${props.notification}"`,
            bg: "danger",
            color: "white",
            zIndex: 4
          }
        }
      }
    }),
  space,
  color
);

export const Tab = ({ theme, children, active, notification, ...props }) => {
  return (
    <TabItem
      theme={theme}
      active={active}
      notification={notification}
      className={`${active ? "active" : ""} ${
        notification ? "notification notification-" + notification : ""
      }`}
      {...props}
    >
      {children}
    </TabItem>
  );
};

export const TabsContainer = ({ theme, children, ...props }) => {
  return (
    <TabsContainerItem theme={theme} {...props}>
      {children}
    </TabsContainerItem>
  );
};

Tab.defaultProps = {
  theme: systemtheme
};

TabsContainer.defaultProps = {
  theme: systemtheme
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

TabsContainer.propTypes = {
  /** The contents of the TabsContainer are passed as a child. */
  children: PropTypes.node,
  /** Specifies the colour theme of the container */
  theme: PropTypes.object
};
