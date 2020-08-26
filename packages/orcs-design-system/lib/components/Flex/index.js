import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, flexbox, compose } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import systemtheme from "../../systemtheme";

const FlexStyles = compose(space, layout, flexbox);

const FlexWrapper = styled("div")
  .withConfig({
    shouldForwardProp
  })
  .attrs(props => ({
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
  /** Sets the display properties of the main `Flex` container (block vs inline)  */
  display: PropTypes.oneOf(["flex", "inline-flex"]),
  /** Sets the direction for the `Flex` container's main axis */
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  /** Controls whether the `Flex` container is single-line or multi-line */
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  /** Sets how the items in the `Flex` container are arranged along the main axis */
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  /** Sets how the items in the `Flex` container are arranged along the cross axis */
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Flex.defaultProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "normal",
  theme: systemtheme
};

export { FlexItem };
