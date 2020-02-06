import React from "react";
import styled from "styled-components";
import { grid, space, layout, color } from "styled-system";
import PropTypes from "prop-types";

const GridWrapper = styled.div`
${space}
${layout}
${grid}
${color}
  box-sizing: border-box;
  display: grid
`;

const GridItem = styled.div`
${space}
${layout}
${color}
  box-sizing: border-box;
  min-width: 0;
`;

/**
 * Grid component using the built-in Styled System Grid Layout through its `grid` function.
 *
 * Note that to use `Grid` you also need to import the subcomponent `GridItem`. You can pass `space`, `layout`, and `color` props to `GridItem`. You can pass `space`, `layout`, and `grid` props to `Grid`.
 *
 */

export default function Grid({ children, ...props }) {
  return <GridWrapper {...props}>{children}</GridWrapper>;
}

Grid.propTypes = {
  /** Children of `Grid` are taken as node elements */
  children: PropTypes.node,
  /** Auto flow direction and rules */
  gridAutoFlow: PropTypes.oneOf(["row", "column", "row dense", "column dense"]),
  /** Defines the spacings between columns and rows. Takes the nth value from [Orcs design system spacing](./?path=/docs/spacing--page).  */
  gridGap: PropTypes.number,
  /** **`GridItem` property**. Takes the nth value from [Orcs design system spacing](./?path=/docs/spacing--page). */
  padding: PropTypes.number
};

Grid.defaultProps = {
  gridAutoFlow: "column",
  gridGap: 4,
  padding: 4
};

GridItem.defaultProps = {
  padding: 4
};

export { GridItem };
