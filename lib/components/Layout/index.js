import React from "react";
import styled from "styled-components";
import { space, layout, color, border } from "styled-system";
import PropTypes from "prop-types";

const LayoutWrapper = styled.div`
  ${space}
  ${layout}
${color}
${border}
  box-sizing: border-box;
`;

export default function Layout({ children, ...props }) {
  return <LayoutWrapper {...props}>{children}</LayoutWrapper>;
}

Layout.propTypes = {
  /** Children of `Layout` are taken as node elements */
  children: PropTypes.node,
  /** Sets `Layout` display mode */
  display: PropTypes.oneOf([
    "inline",
    "block",
    "contents",
    "inline-block",
    "none",
    "initial",
    "inherit"
  ]),
  /** Sets behaviour of elements in `Layout` that are larger than their container. */
  overflow: PropTypes.oneOf(["visible", "hidden", "scroll", "auto"]),
  /** Sets the border in one declaration: `border-width` `border-style` `border-color` */
  border: PropTypes.string
};

Layout.defaultProps = {
  display: "block",
  overflow: "hidden",
  border: "none"
};
