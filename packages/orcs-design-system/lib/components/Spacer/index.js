import React from "react";
import { space, layout, compose } from "styled-system";
import styled, { ThemeProvider } from "styled-components";
import propTypes from "@styled-system/prop-types";
import systemtheme from "../../systemtheme";

const spaceStyles = compose(space, layout);

const SpacerBox = styled("div")(spaceStyles);

const Spacer = ({ children, theme, ...props }) => {
  const clones = React.Children.toArray(children).map(child => (
    <SpacerBox key={child.id} {...props}>
      {React.cloneElement(child)}
    </SpacerBox>
  ));

  return <ThemeProvider theme={theme}>{clones}</ThemeProvider>;
};

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout
};

Spacer.defaultProps = {
  theme: systemtheme
};

export default Spacer;
