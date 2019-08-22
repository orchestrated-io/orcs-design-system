import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import { darken, rgba } from "polished";

const Badge = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 3px;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  max-width: ${props => props.maxWidth ? props.maxWidth : "none"};
  overflow: hidden;
  text-overflow: ellipsis;
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

Badge.propTypes = {
  /** Specifies badge colour */
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
  /** Sets maxWidth at which you would want text to cut off */
  maxWidth: PropTypes.string
};

/** @component */
export default Badge;
