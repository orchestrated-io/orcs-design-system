import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, flexbox, compose } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import systemtheme from "../../systemtheme";
import styledPropTypes from "@styled-system/prop-types";

const FlexStyles = compose(space, layout, flexbox);

const FlexWrapper = styled("div")
  .withConfig({
    shouldForwardProp
  })
  .attrs((props) => ({
    "data-testid": props.dataTestId
      ? props.dataTestId
      : props["data-testid"]
      ? props["data-testid"]
      : null
  }))(css({ boxSizing: "border-box" }), FlexStyles);

const FlexItem = styled("div")(
  css({
    boxSizing: "border-box"
  }),
  FlexStyles
);

export default function Flex({ children, theme, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <FlexWrapper {...props}>{children}</FlexWrapper>
    </ThemeProvider>
  );
}

Flex.propTypes = {
  /** Children of `Flex` are taken as node elements */
  children: PropTypes.node,
  theme: PropTypes.object,
  ...styledPropTypes.space,
  ...styledPropTypes.layout,
  ...styledPropTypes.flexbox
};

Flex.defaultProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  theme: systemtheme
};

export { FlexItem };
