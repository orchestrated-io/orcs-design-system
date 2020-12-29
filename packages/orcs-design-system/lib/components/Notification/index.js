import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Icon from "../Icon";
import systemtheme from "../../systemtheme";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, layout, position, variant, compose } from "styled-system";

const NotificationStyles = compose(space, layout, position);

const NotificationWrapper = styled("div")
  .withConfig({
    shouldForwardProp
  })
  .attrs((props) => ({
    className: props.notifClass
  }))(
  css({
    position: "relative",
    color: "white",
    fontSize: "1",
    fontWeight: "2",
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
        bg: "dangerDark"
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
        bg: "dangerDark"
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

const NotificationContent = styled("p")(
  css({
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
    transition: "transitionDefault",
    color: "white",
    "&:hover, &:focus": {
      outline: "0",
      opacity: "1"
    }
  })
);

const NotificationIcon = styled(Icon)(
  css({
    color: "white",
    fontSize: "2",
    mr: "s"
  })
);

const LoadingIcon = () => {
  return (
    <Icon
      icon={["fas", "circle-notch"]}
      color="white"
      marginRight="s"
      fontSize="2"
      spin
    />
  );
};

const CloseIcon = () => {
  return <Icon icon={["fas", "times"]} size="lg" color="white" />;
};

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
    if (!dismissed) handleDismiss(true);
    else handleDismiss(false);
  };
  var notifClass;
  if (floating) {
    if (centered) {
      notifClass = "floating centered";
    } else notifClass = "floating";
  } else notifClass = "";
  return (
    !dismissed && (
      <ThemeProvider theme={theme}>
        <NotificationWrapper
          colour={colour}
          floating={floating}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          centered={centered}
          onDismiss={onDismiss}
          iconProps={iconProps}
          loading={loading}
          notifClass={notifClass}
          {...props}
        >
          {icon && (
            <NotificationIcon colour={colour} icon={icon} {...iconProps} />
          )}
          {loading && <LoadingIcon />}
          <NotificationContent>{children}</NotificationContent>
          {closable && (
            <Close className="close-button" tabIndex="0" onClick={onToggle}>
              <CloseIcon />
            </Close>
          )}
        </NotificationWrapper>
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
  closable: true,
  theme: systemtheme
};
