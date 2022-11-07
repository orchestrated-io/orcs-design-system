import React from "react";
import PropTypes from "prop-types";
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { space, layout, variant } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const styleLink = (LinkComponent) =>
  styled(LinkComponent)
    .withConfig({
      shouldForwardProp
    })
    .attrs((props) => ({
      className: "StyledLink",
      to: props.to,
      target: props.target,
      "data-testid": props.dataTestId
        ? props.dataTestId
        : props["data-testid"]
        ? props["data-testid"]
        : null
    }))(
    (props) =>
      css({
        display: props.block ? "block" : "inline-block",
        fontSize: props.small
          ? themeGet("fontSizes.1")(props)
          : props.large && props.iconOnly
          ? themeGet("fontSizes.5")(props)
          : props.large
          ? themeGet("fontSizes.3")(props)
          : themeGet("fontSizes.2")(props),
        fontWeight: props.bold ? themeGet("fontWeights.2")(props) : "inherit",
        color: props.active
          ? themeGet("colors.primaryLight")(props)
          : props.white
          ? themeGet("colors.white")(props)
          : themeGet("colors.primary")(props),
        position: "relative",
        textDecoration: "none",
        cursor: "pointer",
        transition: themeGet("transition.transitionDefault")(props),
        "&:hover": {
          outline: "0",
          textDecoration: "underline"
        },
        "&:focus": {
          outline: "0",
          textDecoration: "underline"
        }
      }),
    space,
    layout
  );

const styleButtonLink = (LinkComponent) =>
  styled(LinkComponent)
    .withConfig({
      shouldForwardProp
    })
    .attrs((props) => ({
      className: "StyledLink",
      to: props.to,
      target: props.target,
      "data-testid": props.dataTestId
        ? props.dataTestId
        : props["data-testid"]
        ? props["data-testid"]
        : null,
      disabled: props.disabled
        ? true
        : props.variant == "disabled"
        ? true
        : false
    }))(
    (props) =>
      css({
        bg: themeGet("colors.primary")(props),
        color: themeGet("colors.white")(props),
        borderColor: themeGet("colors.primary")(props),
        borderWidth: themeGet("borderWidths.1")(props),
        width: props.fullWidth ? "100%" : "auto",
        textAlign: "center",
        borderStyle: "solid",
        textDecoration: "none",
        fontFamily: themeGet("fonts.main")(props),
        display: "inline-block",
        fontWeight: themeGet("fontWeights.2")(props),
        borderRadius: themeGet("radii.2")(props),
        transition: themeGet("transition.transitionDefault")(props),
        cursor: props.disabled
          ? "not-allowed"
          : props.isLoading
          ? "progress"
          : "pointer",
        height: "auto",
        fontSize: props.small
          ? themeGet("fontSizes.1")(props)
          : props.large && props.iconOnly
          ? themeGet("fontSizes.5")(props)
          : props.large
          ? themeGet("fontSizes.3")(props)
          : themeGet("fontSizes.2")(props),
        py: props.large ? "s" : props.small ? "xxs" : "xs",
        px: props.large ? "r" : props.small ? "s" : "between",
        svg: {
          marginRight: !props.iconLeft ? "" : props.small ? "xs" : "s",
          marginLeft: !props.iconRight ? "" : props.small ? "xs" : "s"
        },
        "&:hover": {
          bg: themeGet("colors.primaryDark")(props),
          borderColor: themeGet("colors.primaryDark")(props)
        }
      }),
    (props) =>
      variant({
        variants: {
          default: {},
          success: {
            bg: themeGet("colors.success")(props),
            color: themeGet("colors.white")(props),
            borderColor: themeGet("colors.success")(props),
            "&:hover": {
              bg: themeGet("colors.successDark")(props),
              borderColor: themeGet("colors.successDark")(props)
            }
          },
          danger: {
            bg: themeGet("colors.danger")(props),
            color: themeGet("colors.white")(props),
            borderColor: themeGet("colors.danger")(props),
            "&:hover": {
              bg: themeGet("colors.dangerDark")(props),
              borderColor: themeGet("colors.dangerDark")(props)
            }
          },
          disabled: {
            bg: themeGet("colors.greyLighter")(props),
            color: themeGet("colors.grey")(props),
            borderColor: themeGet("colors.greyLighter")(props),
            "&:hover": {
              bg: themeGet("colors.greyLighter")(props),
              color: themeGet("colors.grey")(props),
              borderColor: themeGet("colors.greyLighter")(props)
            }
          },
          ghost: {
            bg: themeGet("colors.primaryLightest")(props),
            color: themeGet("colors.primary")(props),
            borderColor: themeGet("colors.primaryLightest")(props),
            "&:hover": {
              bg: themeGet("colors.primaryLighter")(props),
              borderColor: themeGet("colors.primaryLighter")(props),
              color: themeGet("colors.primaryDark")(props)
            }
          }
        }
      }),
    (props) =>
      props.disabled
        ? css({
            bg: themeGet("colors.greyLighter")(props),
            color: themeGet("colors.grey")(props),
            borderColor: themeGet("colors.greyLighter")(props),
            "&:hover": {
              bg: themeGet("colors.greyLighter")(props),
              color: themeGet("colors.grey")(props),
              borderColor: themeGet("colors.greyLighter")(props)
            }
          })
        : css(),
    space,
    layout
  );

const Hyperlink = styleLink(styled.a``);
const ReactLink = styleLink(Link);
const ButtonLink = styleButtonLink(styled.a``);
const ReactButtonLink = styleButtonLink(Link);

/**
 * This `StyledLink` component supports both standard html hyperlinks and react Link components (if using react router for example).
 *
 * The way to use this as a hyperlink is shown below in the examples and is quite straightforward.
 *
 * To wrap a react router Link component in these styles, you need to do the following:
 *
 * Ensure you have imported both the react router link, and the design system link, like so:
 *
 *      import { Link } from 'react-router-dom';
 *      import { StyledLink } from 'orchestrated-design-system';
 *
 * At the top of your file give a name to the link, for example, lets say we are putting these links in a header component, so we'll call it HeaderLink:
 *
 * ```const HeaderLink = styleLink(Link);```
 *
 * Then you can use in your code like so:
 *
 *      <HeaderLink to={PATHS.DASHBOARD}>
 *        Dashboard
 *      </HeaderLink>
 */
const StyledLink = ({
  children,
  active,
  white,
  bold,
  theme,
  to,
  target,
  button,
  ...props
}) => {
  if (button) {
    return to ? (
      <ReactButtonLink
        theme={theme}
        active={active}
        white={white}
        bold={bold}
        to={to}
        target={target}
        {...props}
      >
        {children}
      </ReactButtonLink>
    ) : (
      <ButtonLink
        theme={theme}
        active={active}
        white={white}
        bold={bold}
        to={to}
        target={target}
        {...props}
      >
        {children}
      </ButtonLink>
    );
  }
  return to ? (
    <ReactLink
      theme={theme}
      active={active}
      white={white}
      bold={bold}
      to={to}
      target={target}
      {...props}
    >
      {children}
    </ReactLink>
  ) : (
    <Hyperlink
      theme={theme}
      active={active}
      white={white}
      bold={bold}
      to={to}
      target={target}
      {...props}
    >
      {children}
    </Hyperlink>
  );
};

StyledLink.propTypes = {
  /** The content wrapped by the link component */
  children: PropTypes.node,
  /** Designates the active link, eg if in a navigation menu, it is the current screen */
  active: PropTypes.bool,
  /** Renders a white link (useful for dark backgrounds) */
  white: PropTypes.bool,
  /** Styles the link text in bold */
  bold: PropTypes.bool,
  /** Specifies the destination of react-router `Link` */
  to: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]),
  /** Specifies the link target */
  target: PropTypes.string,
  /** Specifies if the `StyledLink` should be visually styled to resemble a button */
  button: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

export { styleLink };
/** @component */
export default StyledLink;
