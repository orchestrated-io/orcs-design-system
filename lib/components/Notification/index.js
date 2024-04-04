import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Icon from "../Icon";
import Loading from "../Loading";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, layout, position, variant, compose } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const NotificationStyles = compose(space, layout, position);

const NotificationWrapper = styled("div")
  .withConfig({
    shouldForwardProp
  })
  .attrs((props) => ({
    className: props.notifClass
  }))(
  (props) =>
    css({
      position: "relative",
      color: themeGet("colors.white")(props),
      fontSize: themeGet("fontSizes.1")(props),
      fontWeight: themeGet("fontWeights.2")(props),
      px: "s",
      py: "s",
      cursor: "default",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      borderRadius: themeGet("radii.1")(props),
      bg: themeGet("colors.primaryDark")(props),
      "&.floating": {
        zIndex: "13",
        position: "fixed"
      },
      "&.centered": {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto"
      }
    }),
  (props) =>
    variant({
      prop: "colour",
      variants: {
        success: {
          bg: themeGet("colors.successDark")(props)
        },
        danger: {
          bg: themeGet("colors.dangerDark")(props)
        },
        warning: {
          bg: themeGet("colors.warningLight")(props),
          color: themeGet("colors.black80")(props)
        },
        default: {}
      }
    }),
  variant({
    variants: {
      success: {
        bg: themeGet("colors.successDark")
      },
      danger: {
        bg: themeGet("colors.dangerDark")
      },
      warning: {
        bg: themeGet("colors.warningLight"),
        color: themeGet("colors.black80")
      },
      default: {
        bg: themeGet("colors.primaryDark")
      }
    }
  }),
  NotificationStyles
);

const NotificationContent = styled("p")((props) =>
  css({
    lineHeight: themeGet("fontSizes.3")(props),
    pr: props.closable === false ? "0" : "s"
  })
);

const CloseButton = styled("button")((props) =>
  css({
    appearance: "none",
    bg: "transparent",
    p: "0",
    paddingLeft: "1",
    paddingRight: "1",
    border: "none",
    ml: "auto",
    cursor: "pointer",
    opacity: "0.7",
    transition: themeGet("transition.transitionDefault")(props),
    color: themeGet("colors.white")(props),
    "&:hover, &:focus": {
      outline: "0",
      opacity: "1"
    }
  })
);

const NotificationIcon = styled(Icon)((props) =>
  css({
    color:
      props.colour === "warning"
        ? themeGet("colors.black80")(props)
        : themeGet("colors.white")(props),
    fontSize: themeGet("fontSizes.2")(props),
    mr: "s"
  })
);
export default function Notification({
  icon,
  colour,
  floating,
  children,
  top,
  right,
  bottom,
  left,
  centered,
  closable,
  onDismiss,
  theme,
  iconProps,
  loading,
  ...props
}) {
  const [dismissed, handleDismiss] = useState(false);

  const onToggle = () => {
    if (!dismissed) {
      handleDismiss(true);
      if (onDismiss) {
        onDismiss(true);
      }
    } else {
      handleDismiss(false);
    }
  };

  let notifClass;
  if (floating) {
    if (centered) {
      notifClass = "floating centered";
    } else {
      notifClass = "floating";
    }
  } else {
    notifClass = "";
  }

  if (dismissed) {
    return null;
  }

  const component = (
    <NotificationWrapper
      colour={colour}
      floating={floating}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      centered={centered}
      iconProps={iconProps}
      notifClass={notifClass}
      role="alert"
      {...props}
    >
      {icon && <NotificationIcon colour={colour} icon={icon} {...iconProps} />}
      {loading && <Loading small inverted={colour != "warning"} mr="s" />}
      <NotificationContent closable={closable}>{children}</NotificationContent>
      {closable && (
        <CloseButton
          className="close-button"
          tabIndex="0"
          onClick={onToggle}
          aria-label="Close Notification"
        >
          <Icon
            icon={["fas", "times"]}
            size="lg"
            color={colour === "warning" ? "black80" : "white"}
          />
        </CloseButton>
      )}
    </NotificationWrapper>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Applies an icon to notification with specified name. */
  icon: PropTypes.array,
  /** Specifies the props of the icon -- see `Icon` component for accepted props */
  iconProps: PropTypes.object,
  /** Specifies notification colour */
  colour: PropTypes.oneOf(["success", "warning", "danger", "primary"]),
  /** Specifies if the `Icon` should show the loading style. */
  loading: PropTypes.bool,
  /** Positions notification floating over content, instead of inline. Must be combined with top, right, bottom, left or centered props to correctly position in your desired location */
  floating: PropTypes.bool,
  /** Specifies the position of a floating notification from top of browser window (units must be specified) */
  top: PropTypes.string,
  /** Specifies the position of a floating notification from right of browser window (units must be specified) */
  right: PropTypes.string,
  /** Specifies the position of a floating notification from bottom of browser window (units must be specified) */
  bottom: PropTypes.string,
  /** Specifies the position of a floating notification from left of browser window (units must be specified) */
  left: PropTypes.string,
  /** Horizontally centers a floating notification. If you use this, you don't need to specify left or right props, only top or bottom depending on if you want the notification to sit at the top or bottom of the screen */
  centered: PropTypes.bool,
  /** A callback function for the dismiss operation.*/
  onDismiss: PropTypes.func,
  /** Showing the close button, default to true.*/
  closable: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Notification.defaultProps = {
  closable: true
};
