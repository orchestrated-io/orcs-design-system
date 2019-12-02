import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import { rgba } from "polished";

/**
 * The divider component should be used as a horizontal rule to break up content into meaningful sections.
 *
 * As a general rule, the default divider with no props set should be used in most cases, however a thicker one can be used to emphasize a greater separation between content sections, and a light divider can be used to separate similar repeating items within a section, like a list of people/teams etc.
 */

const Item = styled.div`
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

class Divider extends React.Component {
  render() {
    const { light, thick, inverted, spanGrid } = this.props;
    return (
      <Item
        light={light}
        thick={thick}
        inverted={inverted}
        spanGrid={spanGrid}
      />
    );
  }
}
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
