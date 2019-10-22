import styled from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import { rgba } from "polished";

const Divider = styled.div`
  display: block;
  width: 100%;
  background: ${props =>
    props.light
      ? colours.greyLightest
      : props.inverted
      ? rgba(colours.greyDark, 0.6)
      : colours.greyLighter};
  height: ${props => (props.thick ? "3px" : "1px")};
  grid-column: ${props => (props.spanGrid ? "1 / -1" : "auto")};
`;

Divider.propTypes = {
  /** Divider will use a lighter grey colour */
  light: PropTypes.bool,
  /** Divider will be 3px instead of 1px */
  thick: PropTypes.bool,
  /** Divider will be a darker colour more suited for dark backgrounds */
  inverted: PropTypes.bool,
  /** Divider will span all columns when in a grid so it can be used as a row divider */
  spanGrid: PropTypes.bool
};

/** @component */
export default Divider;
