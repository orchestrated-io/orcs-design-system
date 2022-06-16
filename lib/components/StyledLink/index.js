import React from "react";
import PropTypes from "prop-types";
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { space, layout, variant } from "styled-system";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";

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
        fontWeight: props.bold ? 2 : "inherit",
        color: props.active
          ? "primaryLight"
          : props.white
          ? "white"
          : "primary",
        position: "relative",
        textDecoration: "none",
        cursor: "pointer",
        transition: "transitionDefault",
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
        bg: "primary",
        color: "white",
        borderColor: "primary",
        borderWidth: "1px",
        width: props.fullWidth ? "100%" : "auto",
        textAlign: "center",
        borderStyle: "solid",
        textDecoration: "none",
        fontFamily: "main",
        display: "inline-block",
        fontWeight: "2",
        borderRadius: "2",
        transition: "transitionDefault",
        cursor: props.disabled
          ? "not-allowed"
          : props.isLoading
          ? "progress"
          : "pointer",
        height: "auto",
        fontSize: props.small
          ? "1"
          : props.large && props.iconOnly
          ? "5"
          : props.large
          ? "3"
          : "2",
        py: props.large ? "s" : props.small ? "xxs" : "xs",
        px: props.large ? "r" : props.small ? "s" : "between",
        svg: {
          marginRight: !props.iconLeft ? "" : props.small ? "xs" : "s",
          marginLeft: !props.iconRight ? "" : props.small ? "xs" : "s"
        },
        "&:hover": {
          bg: "primaryDark",
          borderColor: "primaryDark"
        }
      }),
    variant({
      variants: {
        default: {},
        success: {
          bg: "success",
          color: "white",
          borderColor: "success",
          "&:hover": {
            bg: "successDark",
            borderColor: "successDark"
          }
        },
        danger: {
          bg: "danger",
          color: "white",
          borderColor: "danger",
          "&:hover": {
            bg: "dangerDark",
            borderColor: "dangerDark"
          }
        },
        disabled: {
          bg: "greyLighter",
          color: "grey",
          borderColor: "greyLighter",
          "&:hover": {
            bg: "greyLighter",
            color: "grey",
            borderColor: "greyLighter"
          }
        },
        ghost: {
          bg: "primaryLightest",
          color: "primary",
          borderColor: "primaryLightest",
          "&:hover": {
            bg: "primaryLighter",
            borderColor: "primaryLighter",
            color: "primaryDark"
          }
        }
      }
    }),
    (props) =>
      props.disabled
        ? css({
            bg: "greyLighter",
            color: "grey",
            borderColor: "greyLighter",
            "&:hover": {
              bg: "greyLighter",
              color: "grey",
              borderColor: "greyLighter"
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

StyledLink.defaultProps = {
  theme: systemtheme
};

export { styleLink };
/** @component */
export default StyledLink;
