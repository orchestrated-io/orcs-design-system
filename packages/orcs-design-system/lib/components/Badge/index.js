import React from "react";
import styled from "styled-components";
import { get } from "lodash";
import PropTypes from "prop-types";
import { space, layout, color } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const Item = styled.div`
  ${space}
  ${layout}
  ${color}
  font-size: ${themeGet("fontSizes.0")}px;
  font-weight: ${themeGet("fontWeights.2")};
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  position: relative;
  padding: 5px 10px;
  cursor: default;
  border-radius: ${themeGet("radii.1")}px;
`;

const colourMap = {
  default: { textColour: "greyDarker", badgeColour: "greyLighter" },
  success: { textColour: "successDarker", badgeColour: "successLighter" },
  warning: { textColour: "warningDarker", badgeColour: "warningLighter" },
  danger: { textColour: "dangerDarker", badgeColour: "dangerLighter" },
  primaryLight: {
    textColour: "primaryDarker",
    badgeColour: "primaryLightest"
  },
  primary: { textColour: "primaryDarker", badgeColour: "primaryLighter" },
  primaryDark: { textColour: "primaryDarkest", badgeColour: "primary" }
};

export default function Badge({ variant = "default", children, ...props }) {
  const { textColour, badgeColour } = get(colourMap, variant, {
    textColour: "greyDarker",
    badgeColour: "greyLighter"
  });
  return (
    <Item color={textColour} bg={badgeColour} {...props}>
      {children}
    </Item>
  );
}

Badge.propTypes = {
  /** Specifies badge colour. Colours are taken from the standard design system colours. */
  variant: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "primaryLight",
    "primary",
    "primaryDark"
  ]),
  /** The label text on the badge is passed as a child element. */
  children: PropTypes.node
};
