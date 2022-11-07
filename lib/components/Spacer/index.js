import React from "react";
import { space, layout, compose } from "styled-system";
import styled, { ThemeProvider } from "styled-components";
import propTypes from "@styled-system/prop-types";

const SpacerBox = styled.div`
  ${space}
  ${layout}
  line-height: 0;
`;

const Spacer = ({ children, theme, ...props }) => {
  const clones = React.Children.toArray(children).map((child, index) => (
    <SpacerBox key={index} {...props}>
      {React.cloneElement(child)}
    </SpacerBox>
  ));

  return theme ? <ThemeProvider theme={theme}>{clones}</ThemeProvider> : clones;
};

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout
};

export default Spacer;
