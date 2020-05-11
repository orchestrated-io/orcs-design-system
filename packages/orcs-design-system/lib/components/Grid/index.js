import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { grid, space, layout, color } from "styled-system";
import PropTypes from "prop-types";
import systemtheme from "../../systemtheme";

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

export default function Grid({ children, theme, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <GridWrapper {...props}>{children}</GridWrapper>
    </ThemeProvider>
  );
}

Grid.propTypes = {
  /** Children of `Grid` are taken as node elements */
  children: PropTypes.node,
  /** Auto flow direction and rules */
  gridAutoFlow: PropTypes.oneOf(["row", "column", "row dense", "column dense"]),
  /** Defines the spacings between columns and rows. Takes the nth value from [Orcs design system spacing](./?path=/docs/spacing--page).  */
  gridGap: PropTypes.number,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Grid.defaultProps = {
  gridAutoFlow: "column",
  gridGap: 4,
  theme: systemtheme
};

GridItem.defaultProps = {
  padding: 4
};

export { GridItem };
