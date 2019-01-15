import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";
import variables from "../../variables";

const Badge = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 3px;
  white-space: nowrap;
  position: relative;
  padding: 5px 10px;
  cursor: default;
  color: ${props =>
    props.colour && theme[props.colour]
      ? theme[props.colour].darken(0.2)
      : theme.grey.darken(0.2)};
  background: ${props =>
    props.colour && theme[props.colour]
      ? theme[props.colour].fade(0.7)
      : theme.grey.fade(0.7)};
  border-radius: 2px;
  ${props =>
    props.inverted
      ? css`
          color: #fff;
          background: ${props =>
            props.colour === "success"
              ? theme.success.fade(0.1)
              : props.colour === "warning"
              ? theme.warning.fade(0.1)
              : props.colour === "danger"
              ? theme.danger.fade(0.1)
              : props.colour === "primaryLight"
              ? theme.primaryLight.fade(0.1)
              : props.colour === "primaryDark"
              ? theme.primaryDark.fade(0.1)
              : props.colour === "primaryDarkest"
              ? theme.primaryDarkest.fade(0.1)
              : theme.grey.fade(0.1)};
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
  inverted: PropTypes.bool
};

/** @component */
export default Badge;
