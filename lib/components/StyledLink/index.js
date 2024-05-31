import React from "react";
import PropTypes from "prop-types";
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { space, layout, typography } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import { ButtonLink } from "../Button";

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
    layout,
    typography
  );

const Hyperlink = styleLink(styled.a``);
const ReactLink = styleLink(Link);

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
const StyledLink = ({ children, to, button, ...props }) => {
  if (button) {
    return <ButtonLink {...props}>{children}</ButtonLink>;
  }

  const LinkComponent = to ? ReactLink : Hyperlink;

  return (
    <LinkComponent {...props} to={to}>
      {children}
    </LinkComponent>
  );
};

StyledLink.propTypes = {
  /** The content wrapped by the link component */
  children: PropTypes.node,
  /** Designates the active link, eg if in a navigation menu, it is the current screen */
  active: PropTypes.bool,
  /** Specifies if link is rendered as display:block */
  block: PropTypes.bool,
  /** Renders a white link (useful for dark backgrounds) */
  white: PropTypes.bool,
  /** Styles the link text in bold */
  bold: PropTypes.bool,
  /** Specifies the destination of react-router-dom `Link` */
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
