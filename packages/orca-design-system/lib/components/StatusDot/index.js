import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../colours";

const StatusDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props =>
    props.on
      ? colours.success
      : props.warning
      ? colours.warning
      : colours.danger};
`;

StatusDot.propTypes = {
  /** Specifies that this has an on/met/true (green) state */
  on: PropTypes.bool,
  /** Specifies that this has a warning (yellow) state */
  warning: PropTypes.bool
};

/** @component */
export default StatusDot;
