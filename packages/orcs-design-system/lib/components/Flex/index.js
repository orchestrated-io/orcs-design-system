import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, flexbox } from "styled-system";

const FlexWrapper = styled.div`
${space}
${layout}
${flexbox}
box-sizing: border-box
`;

const FlexItem = styled.div`
${space}
${layout}
${flexbox}
box-sizing: border-box
`;

export default function Flex({ children, ...props }) {
  return <FlexWrapper {...props}>{children}</FlexWrapper>;
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
  ])
};

Flex.defaultProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  alignItems: "center"
};

export { FlexItem };
