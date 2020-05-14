import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color } from "styled-system";
import systemtheme from "../../systemtheme";

const Item = styled.div`
  ${space}
  ${layout}
  ${color}
  display: block;
  width: 100%;
  height: ${props => (props.thick ? "3px" : "1px")};
  grid-column: ${props => (props.spanGrid ? "1 / -1" : "auto")};
`;

export default function Divider({
  light,
  thick,
  inverted,
  spanGrid,
  theme,
  ...props
}) {
  const dividerColour = light ? "black10" : inverted ? "white30" : "black20";

  return (
    <ThemeProvider theme={theme}>
      <Item
        backgroundColor={dividerColour}
        light={light}
        thick={thick}
        inverted={inverted}
        spanGrid={spanGrid}
        {...props}
      />
    </ThemeProvider>
  );
}

Divider.propTypes = {
  /** Divider will use a lighter grey colour */
  light: PropTypes.bool,
  /** Divider will be 3px instead of 1px */
  thick: PropTypes.bool,
  /** Divider will be a darker colour more suited for dark backgrounds */
  inverted: PropTypes.bool,
  /** Divider will span all columns when in a grid so it can be used as a row divider */
  spanGrid: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Divider.defaultProps = {
  theme: systemtheme
};
