import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import variables from "../../variables";
import colours from "../../colours";
import { Link } from "react-router-dom";

const styleLink = LinkComponent => styled(LinkComponent)`
  display: ${props => (props.block ? "block" : "inline-block")};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: ${variables.defaultTransition};
  font-weight: ${props => (props.bold ? 600 : 300)};

  color: ${props =>
    props.active
      ? colours.primary
      : props.white
      ? colours.white
      : colours.primary};

  margin-bottom: ${props =>
    props.marginBottomDouble
      ? variables.defaultSpacingDouble
      : props.marginBottomHalf
      ? variables.defaultSpacingHalf
      : props.marginBottom
      ? variables.defaultSpacing
      : 0};

  &:hover,
  &:focus {
    outline: 0;
    text-decoration: underline;
  }

  svg {
    margin-right: ${variables.defaultSpacingQuarter};
  }
`;

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
export function StyledLink({
  children,
  active,
  white,
  bold,
  marginBottomDouble,
  marginBottomHalf,
  marginBottom,
  ...props
}) {
  return (
    <Hyperlink
      active={active}
      white={white}
      bold={bold}
      marginBottomDouble={marginBottomDouble}
      marginBottomHalf={marginBottomHalf}
      marginBottom={marginBottom}
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
  /** Renders the link's bottom margin with double default spacing */
  marginBottomDouble: PropTypes.bool,
  /** Renders the link's bottom margin with half default spacing */
  marginBottomHalf: PropTypes.bool,
  /** Renders the link's bottom margin with default spacing */
  marginBottom: PropTypes.bool
};

export { styleLink, HeaderLink };
/** @component */
export default StyledLink;
