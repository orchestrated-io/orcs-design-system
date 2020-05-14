import React from "react";
import { space, layout, compose } from "styled-system";
import { css } from "@styled-system/css";
import styled, { ThemeProvider } from "styled-components";
import propTypes from "@styled-system/prop-types";
import systemtheme from "../../systemtheme";

const spaceStyles = compose(space, layout);

const Item = styled("div")(
  css({
    display: "inherit",
    alignItems: "inherit",
    flexDirection: "inherit",
    flexWrap: "inherit",
    justifyContent: "inherit"
  }),
  spaceStyles
);

const Spacer = ({ children, theme, ...props }) => {
  const clones = React.Children.toArray(children).map(child =>
    React.cloneElement(child, { ...props })
  );

  return (
    <ThemeProvider theme={theme}>
      <Item>{clones}</Item>
    </ThemeProvider>
  );
};

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout
};

Spacer.defaultProps = {
  theme: systemtheme
};

export default Spacer;
