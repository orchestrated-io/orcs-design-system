import React from "react";
import PropTypes from "prop-types";
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { space, layout } from "styled-system";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";

const LinkStyles = css({
  color: "primary",
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
  },
  svg: {
    marginRight: 2
  }
});

const styleLink = LinkComponent =>
  styled(LinkComponent)
    .withConfig({
      shouldForwardProp
    })
    .attrs(props => ({
      className: "StyledLink",
      theme: props.theme
    }))(
    LinkStyles,
    props =>
      css({
        display: props.block ? "block" : "inline-block",
        fontWeight: props.bold ? 2 : "inherit",
        color: props.active ? "primary" : props.white ? "white" : "primary"
      }),
    space,
    layout
  );

const Hyperlink = styleLink(styled.a``);
const HeaderLink = styleLink(Link);

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
export function StyledLink({ children, active, white, bold, theme, ...props }) {
  return (
    <Hyperlink
      theme={theme}
      active={active}
      white={white}
      bold={bold}
      {...props}
    >
      {children}
    </Hyperlink>
  );
}

StyledLink.propTypes = {
  /** The content wrapped by the link component */
  children: PropTypes.node,
  /** Designates the active link, eg if in a navigation menu, it is the current screen */
  active: PropTypes.bool,
  /** Renders a white link (useful for dark backgrounds) */
  white: PropTypes.bool,
  /** Styles the link text in bold */
  bold: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

StyledLink.defaultProps = {
  theme: systemtheme
};

export { styleLink, HeaderLink };
/** @component */
export default StyledLink;
