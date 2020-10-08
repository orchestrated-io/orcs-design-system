import React from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import Icon from "../Icon";
import systemtheme from "../../systemtheme";
import { themeGet } from "@styled-system/theme-get";

const Container = styled.div`
${space}
${layout}
  display: ${props =>
    props.inlineBlock ? "inline-block !important" : "block !important"};
  position: relative;
  &:hover,
  &:focus-within {
    .tooltip {
      opacity: 1;
      z-index: 100;
      visibility: visible;
      pointer-events: auto;
    }
  }
`;

const TooltipControl = styled.div`
  cursor: help;
  transition: ${themeGet("transition.transitionDefault")};
  &:hover,
  &:focus {
    outline: 0;
    color: ${themeGet("colors.primary")};
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
  color: ${themeGet("colors.white")};
  outline: 0;
  padding: 8px 10px;
  border-radius: ${themeGet("radii.1")};
  transform: translateX(10px) translateY(-50%);
  width: ${props => (props.width ? props.width : "200px")};
  background: ${themeGet("colors.greyDarkest")};
  transition: all 300ms ease-in-out;
  opacity: 0;
  z-index: -100;
  visibility: hidden;
  pointer-events: none;
  user-select: all;

  &:before {
    content: "";
    z-index: 2;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent;
    border-right-color: ${themeGet("colors.greyDarkest")};
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
      : direction === "topRight"
      ? css`
          left: 100%;
          top: auto;
          bottom: 100%;
          transform: translateX(5px) translateY(-5px);
          &:before {
            left: 0;
            top: auto;
            margin-top: 0;
            bottom: -5px;
            margin-left: -5px;
            transform: rotate(-45deg);
            border-width: 5px 10px 5px 0;
          }
          &:after {
            left: -10px;
            top: 0;
            width: 40px;
            height: calc(100% + 10px);
          }
        `
      : direction === "right"
      ? css`
          /* No changes as same as default */
        `
      : direction === "bottomRight"
      ? css`
          left: 100%;
          top: 100%;
          bottom: auto;
          transform: translateX(5px) translateY(5px);
          &:before {
            left: 0;
            bottom: auto;
            margin-top: 0;
            top: -5px;
            margin-left: -5px;
            transform: rotate(45deg);
            border-width: 5px 10px 5px 0;
          }
          &:after {
            left: -10px;
            top: -10px;
            width: 40px;
            height: calc(100% + 10px);
          }
        `
      : direction === "bottom"
      ? css`
          left: 50%;
          top: 100%;
          transform: translateX(-50%) translateY(10px);
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
      : direction === "bottomLeft"
      ? css`
          right: 100%;
          left: auto;
          top: 100%;
          bottom: auto;
          transform: translateX(-5px) translateY(5px);
          &:before {
            right: 0;
            left: auto;
            bottom: auto;
            margin-top: 0;
            top: -5px;
            margin-right: -5px;
            transform: rotate(135deg);
            border-width: 5px 10px 5px 0;
          }
          &:after {
            left: auto;
            right: -10px;
            top: -10px;
            width: 40px;
            height: calc(100% + 10px);
          }
        `
      : direction === "left"
      ? css`
          left: auto;
          right: 100%;
          transform: translateX(-10px) translateY(-50%);
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
      : direction === "topLeft"
      ? css`
          right: 100%;
          left: auto;
          top: auto;
          bottom: 100%;
          transform: translateX(-5px) translateY(-5px);
          &:before {
            right: 0;
            left: auto;
            top: auto;
            margin-top: 0;
            bottom: -5px;
            margin-right: -5px;
            transform: rotate(225deg);
            border-width: 5px 10px 5px 0;
          }
          &:after {
            left: auto;
            right: -10px;
            top: 0;
            width: 40px;
            height: calc(100% + 10px);
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
  variant,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container inlineBlock={inlineBlock} {...props}>
        <Text
          className="tooltip"
          textAlign={textAlign}
          direction={direction}
          width={width}
        >
          {text}
        </Text>
        {variant === "tooltip" && (
          <TooltipControl tabIndex="0">
            <Icon transform="grow-4" icon={["fas", "question-circle"]} />
          </TooltipControl>
        )}
        {children}
      </Container>
    </ThemeProvider>
  );
}

Popover.propTypes = {
  /** The element that requires the popover helper text. */
  children: PropTypes.element,
  /** Specifies the direction of the popover. Defaults to right if not specified */
  direction: PropTypes.oneOf([
    "top",
    "topRight",
    "right",
    "bottomRight",
    "bottom",
    "bottomLeft",
    "left",
    "topLeft"
  ]),
  /** The text contained in the popover element */
  text: PropTypes.node,
  /** Specifies the alignment of the text inside the popover */
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  /** Specifies the width of the popover (you need to specify units, e.g. pixels, %). If you use % it will be a percentage of the width of the Popover container */
  width: PropTypes.string,
  /** Sets display property of popover tooltip to inline-block */
  inlineBlock: PropTypes.bool,
  /** Specifies the variant of the popover. */
  variant: PropTypes.oneOf(["tooltip"]),
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Popover.defaultProps = {
  theme: systemtheme
};
