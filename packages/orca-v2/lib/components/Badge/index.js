import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import { darken, rgba } from "polished";

const Item = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 3px;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  position: relative;
  padding: 5px 10px;
  cursor: default;
  color: ${props =>
    props.colour && colours[props.colour]
      ? darken(0.15, colours[props.colour])
      : darken(0.15, colours.grey)};
  background: ${props =>
    props.colour && colours[props.colour]
      ? rgba(colours[props.colour], 0.3)
      : rgba(colours.grey, 0.3)};
  border-radius: ${variables.borderRadiusSmall};
  ${props =>
    props.inverted
      ? css`
          color: #fff;
          background: ${props =>
            props.colour === "success"
              ? darken(0.1, colours.success)
              : props.colour === "warning"
              ? darken(0.1, colours.warning)
              : props.colour === "danger"
              ? darken(0.1, colours.danger)
              : props.colour === "primaryLight"
              ? darken(0.1, colours.primaryLight)
              : props.colour === "primaryDark"
              ? darken(0.1, colours.primaryDark)
              : props.colour === "primaryDarkest"
              ? darken(0.1, colours.primaryDarkest)
              : darken(0.1, colours.grey)};
        `
      : css``}
`;
/**
 * Badges should be used for things like status, indicators, or other additional information that you want to highlight but not make interactive/clickable.
 */
class Badge extends React.Component {
  render() {
    const { colour, inverted, children } = this.props;
    return (
      <Item inverted={inverted} colour={colour}>
        {children}
      </Item>
    );
  }
}

Badge.propTypes = {
  /** Specifies badge colour. Colours are taken from the standard design system colours. */
  colour: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "primaryLight",
    "primaryDark",
    "primaryDarkest"
  ]),
  /** Changes colours to suit a dark background */
  inverted: PropTypes.bool,
  /** The label text on the badge is passed as a child element. */
  children: PropTypes.node
};

/** @component */
export default Badge;
