import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import {
  space,
  layout,
  flexbox,
  color,
  border,
  position,
  compose
} from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import styledPropTypes from "@styled-system/prop-types";

const FlexStyles = compose(space, layout, flexbox, color, border, position);

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
  }))((props) => css({ boxSizing: "border-box", gap: props.gap }), FlexStyles);

const FlexItem = styled("div")(
  css({
    boxSizing: "border-box"
  }),
  FlexStyles
);

export default function Flex({ children, gap, theme, ...props }) {
  const component = (
    <FlexWrapper gap={gap} {...props}>
      {children}
    </FlexWrapper>
  );

  if (theme) {
    return (
      <ThemeProvider theme={theme}>
        <FlexWrapper {...props}>{children}</FlexWrapper>
      </ThemeProvider>
    );
  }
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Flex.propTypes = {
  /** Children of `Flex` are taken as node elements */
  children: PropTypes.node,
  gap: PropTypes.string,
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
  alignItems: "stretch"
};

export { FlexItem };
