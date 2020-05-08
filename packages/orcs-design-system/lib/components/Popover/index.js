import React from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { space, layout } from "styled-system";
import { rgba } from "polished";
import systemtheme from "../../systemtheme";

const Container = styled.div`
${space}
${layout}
  display: ${props =>
    props.inlineBlock ? "inline-block !important" : "block !important"};
  position: relative;
  &:hover {
    > div {
      opacity: 1;
      z-index: 100;
      visibility: visible;
    }
  }
`;

const Text = styled.div`
  z-index: 2;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  word-break: break-word;
  left: 100%;
  top: 50%;
  color: ${colours.greyDarkest};
  outline: 0;
  padding: 8px 10px;
  border-radius: ${variables.borderRadiusSmall};
  transform: translateX(10px) translateY(-50%);
  transition: ${variables.defaultTransition};
  box-shadow: -3px 0px 12px 0 ${rgba(colours.greyDarkest, 0.15)};
  width: ${props => (props.width ? props.width : "200px")};
  background: ${colours.white};
  transition: all 300ms ease-in-out;
  opacity: 0;
  z-index: -100;
  visibility: hidden;

  &:before {
    content: "";
    z-index: 2;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent;
    border-right-color: ${colours.white};
    left: -6px;
    top: 50%;
    margin-top: -6px;
    position: absolute;
  }

  &:after {
    content: "";
    left: -10px;
    display: block;
    height: 100%;
    top: 0;
    position: absolute;
    width: calc(100% + 10px);
  }

  ${({ direction }) =>
    direction === "top"
      ? css`
          left: 50%;
          top: auto;
          bottom: 100%;
          transform: translateX(-50%) translateY(-10px);
          box-shadow: 0 4px 14px 0 ${rgba(colours.greyDarkest, 0.15)};
          &:before {
            left: 50%;
            top: auto;
            margin-top: 0;
            bottom: -9px;
            margin-left: -3px;
            transform: rotate(-90deg);
          }
          &:after {
            left: 0;
            top: 0;
            width: 100%;
            height: calc(100% + 10px);
          }
        `
      : direction === "right"
      ? css`
          /* No changes as same as default */
        `
      : direction === "bottom"
      ? css`
          left: 50%;
          top: 100%;
          transform: translateX(-50%) translateY(10px);
          box-shadow: 0 -3px 12px 0 ${rgba(colours.greyDarkest, 0.15)};
          &:before {
            left: 50%;
            top: -9px;
            margin-top: 0;
            margin-left: -3px;
            transform: rotate(90deg);
          }
          &:after {
            left: 0;
            top: auto;
            bottom: 0;
            width: 100%;
            height: calc(100% + 10px);
          }
        `
      : direction === "left"
      ? css`
          left: auto;
          right: 100%;
          transform: translateX(-10px) translateY(-50%);
          box-shadow: 3px 0 12px 0 ${rgba(colours.greyDarkest, 0.15)};
          &:before {
            left: auto;
            right: -6px;
            transform: rotate(180deg);
          }
          &:after {
            left: auto;
            right: -10px;
          }
        `
      : css``};
`;

/**
 * This popover component is intended to be used to supplement buttons (or other elements) that require some helper text. It supports customisation of direction and width. This is so that you can ensure that the popover doesn't run off the screen, and that the width suits the amount of text in the popover.
 *
 * If you don't specify a width, 200px is the default, but as a general guide try and keep widths somewhere between 150-250 if you are modifying. Make sure if setting width you include the unit you want it to use, e.g. pixels, %.
 */

export default function Popover({
  children,
  direction,
  width,
  textAlign,
  text,
  inlineBlock,
  theme,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container inlineBlock={inlineBlock} {...props}>
        <Text textAlign={textAlign} direction={direction} width={width}>
          {text}
        </Text>
        {children}
      </Container>
    </ThemeProvider>
  );
}

Popover.propTypes = {
  /** The element that requires the popover helper text. */
  children: PropTypes.element,
  /** Specifies the direction of the popover. Defaults to right if not specified */
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** The text contained in the popover element */
  text: PropTypes.node,
  /** Specifies the alignment of the text inside the popover */
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  /** Specifies the width of the popover (you need to specify units, e.g. pixels, %). If you use % it will be a percentage of the width of the Popover container */
  width: PropTypes.string,
  /** Sets display property of popover tooltip to inline-block */
  inlineBlock: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Popover.defaultProps = {
  theme: systemtheme
};
