import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { grid, space, layout, color, compose } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import PropTypes from "prop-types";
import systemtheme from "../../systemtheme";

const GridStyles = compose(space, layout, grid, color);

const GridWrapper = styled("div")
  .withConfig({ shouldForwardProp })
  .attrs(props => ({
    "data-testid": props.dataTestId
  }))(
  css({
    boxSizing: "border-box",
    display: "grid"
  }),
  GridStyles
);

const GridItem = styled("div")
  .withConfig({ shouldForwardProp })
  .attrs(props => ({
    "data-testid": props.dataTestId
  }))(
  css({
    boxSizing: "border-box",
    minWidth: "0"
  }),
  GridStyles
);

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
  gridAutoFlow: PropTypes.oneOf([
    "row",
    "column",
    "row dense",
    "column dense",
    "inherit",
    "initial",
    "unset"
  ]),
  /** Defines the spacings between columns and rows. Takes the nth value, or a specific alias, from the design system spacing scale (specified in theme).  */
  gridGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Grid.defaultProps = {
  gridAutoFlow: "column",
  gridGap: "0",
  theme: systemtheme
};

GridItem.defaultProps = {
  padding: "0"
};

export { GridItem };
