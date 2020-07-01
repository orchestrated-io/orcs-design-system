import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Icon from "../Icon";
import systemtheme from "../../systemtheme";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, layout, position, variant, compose } from "styled-system";

const NotificationStyles = compose(space, layout, position);

const Wrapper = styled("div")
  .withConfig({ shouldForwardProp })
  .attrs(props => ({
    className:
      !props.floating && !props.centered
        ? ""
        : props.floating && props.centered
        ? "floating centered"
        : !props.floating && props.centered
        ? "centered"
        : props.floating && !props.centered
        ? "floating"
        : ""
  }))(
  css({
    position: "relative",
    color: "white",
    fontSize: "1",
    fontWeight: "1",
    px: "s",
    py: "s",
    cursor: "default",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "1",
    bg: "primaryDark",
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
  variant({
    prop: "colour",
    variants: {
      success: {
        bg: "successDark"
      },
      danger: {
        bg: "warningDark"
      },
      warning: {
        bg: "warningDark"
      },
      default: {}
    }
  }),
  variant({
    variants: {
      success: {
        bg: "successDark"
      },
      danger: {
        bg: "warningDark"
      },
      warning: {
        bg: "warningDark"
      },
      default: {
        bg: "primaryDark"
      }
    }
  }),
  NotificationStyles
);

const NotificationContent = styled("p")(props =>
  css({
    marginLeft: props.icon ? "s" : "0",
    pr: "s"
  })
);

const Close = styled("button")(
  css({
    appearance: "none",
    bg: "transparent",
    p: "0",
    border: "none",
    ml: "auto",
    cursor: "pointer",
    opacity: "0.6",
    transition: "defaultTransition",
    color: "white",
    "&:hover, &:focus": {
      outline: "0",
      opacity: "1"
    }
  })
);

const CloseIcon = styled(Icon).withConfig({ shouldForwardProp })({
  color: "white"
});

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
  ...props
}) {
  const [dismissed, handleDismiss] = useState(false);
  const onToggle = () => {
    if (!dismissed) handleDismiss(true);
    else handleDismiss(false);
  };

  return (
    !dismissed && (
      <ThemeProvider theme={theme}>
        <Wrapper
          colour={colour}
          floating={floating}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          centered={centered}
          onDismiss={onDismiss}
          {...props}
        >
          {icon && <Icon icon={icon} color="white" fontSize="2" />}
          <NotificationContent icon={icon}>{children}</NotificationContent>
          {closable && (
            <Close className="close-button" tabIndex="0" onClick={onToggle}>
              <CloseIcon icon={["fas", "times"]} size="lg" />
            </Close>
          )}
        </Wrapper>
      </ThemeProvider>
    )
  );
}

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Applies an icon to notification with specified name. */
  icon: PropTypes.array,
  /** Specifies notification colour */
  colour: PropTypes.oneOf(["success", "warning", "danger", "primary"]),
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
  closable: true,
  theme: systemtheme
};
