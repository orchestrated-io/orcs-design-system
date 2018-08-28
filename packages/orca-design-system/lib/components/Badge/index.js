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
  ])
};

/** @component */
export default Badge;
