import React, { useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import { keys } from "lodash";
import Icon from "../Icon";
import { themeGet } from "@styled-system/theme-get";
import { useKeepInView, directions } from "../../hooks/keepInView";
import { commonKeys } from "../../hooks/keypress";

const Container = styled.div`
  ${space}
  ${layout}
  display: ${(props) =>
    props.inlineBlock ? "inline-block !important" : "block !important"};
  position: relative;
  &:hover,
  &:focus-within {
    .popoverText {
      opacity: 1;
      z-index: 100;
      visibility: visible;
      pointer-events: auto;
    }
  }
`;

const TooltipControl = styled.div`
  border: none;
  background: none;
  padding: 0;
  cursor: help;
  font-size: 1em;
  color: ${(props) => themeGet("colors.black")(props)};
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  &:hover,
  &:focus {
    outline: 0;
    color: ${(props) => themeGet("colors.primary")(props)};
  }
`;

const Text = styled.div`
  position: absolute;
  font-size: ${(props) => themeGet("fontSizes.0")(props)};
  line-height: ${(props) => themeGet("fontSizes.1")(props)};
  font-weight: ${(props) => themeGet("fontWeights.1")(props)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  word-break: break-word;
  left: 100%;
  top: 50%;
  color: ${(props) => themeGet("colors.greyDarkest")(props)};
  outline: 0;
  padding: ${(props) => themeGet("space.3")(props)}
    ${(props) => themeGet("space.3")(props)};
  border-radius: ${(props) => themeGet("radii.1")(props)};
  transform: translateX(10px) translateY(-50%);
  width: ${(props) => (props.width ? props.width : "200px")};
  background: ${(props) => themeGet("colors.white")(props)};
  border: 1px solid ${(props) => themeGet("colors.greyLight")(props)};
  box-shadow: ${(props) => themeGet("shadows.boxDefault")(props)};
  transition: all 300ms ease-in-out;
  transition-delay: 300ms;
  opacity: 0;
  z-index: -100;
  visibility: hidden;
  pointer-events: none;
  user-select: ${(props) => (props.enableSelectAll ? "all" : "auto")};

  & a {
    font-size: ${(props) => themeGet("fontSizes.0")(props)};
  }

  &:before {
    content: "";
    z-index: 2;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent;
    border-right-color: ${(props) => themeGet("colors.white")(props)};
    left: -6px;
    top: 50%;
    margin-top: -6px;
    position: absolute;
  }

  &:after {
    content: "";
    z-index: 1;
    position: absolute;
    border-color: transparent;
    border-right-color: ${(props) => themeGet("colors.grey")(props)};
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    left: -7px;
    top: 50%;
    margin-top: -6px;
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
            left: 50%;
            top: auto;
            margin-top: 0;
            bottom: -10px;
            margin-left: -3px;
            transform: rotate(-90deg);
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
            left: 0;
            top: auto;
            margin-top: 0;
            bottom: -6px;
            margin-left: -6px;
            transform: rotate(-45deg);
            border-width: 5px 10px 5px 0;
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
            left: 0;
            bottom: auto;
            margin-top: 0;
            top: -6px;
            margin-left: -6px;
            transform: rotate(45deg);
            border-width: 5px 10px 5px 0;
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
            left: 50%;
            top: -10px;
            margin-top: 0;
            margin-left: -3px;
            transform: rotate(90deg);
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
            right: 0;
            left: auto;
            bottom: auto;
            margin-top: 0;
            top: -6px;
            margin-right: -6px;
            transform: rotate(135deg);
            border-width: 5px 10px 5px 0;
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
            right: -7px;
            transform: rotate(180deg);
            top: 50%;
            margin-top: -6px;
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
            right: 0;
            left: auto;
            top: auto;
            margin-top: 0;
            bottom: -6px;
            margin-right: -6px;
            transform: rotate(225deg);
            border-width: 5px 10px 5px 0;
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
  enableSelectAll = true,
  tabIndex = 0,
  ...props
}) {
  const containerRef = useRef();
  const [inViewDirection, setInViewDirection] = useState(direction);
  const [dismissed, setDismissed] = useState(false);
  const toolTipId = useId();
  const [ref, setIsShown] = useKeepInView({
    direction,
    callback: setInViewDirection
  });

  const component = (
    <Container
      ref={containerRef}
      inlineBlock={inlineBlock}
      {...props}
      onMouseEnter={() => {
        setIsShown(true);
        setDismissed(false);
      }}
      onKeyDownCapture={(e) => {
        if ([commonKeys.ESCAPE, commonKeys.ESC].includes(e.key)) {
          setDismissed(true);

          if (containerRef?.current.contains(document.activeElement)) {
            document.activeElement.blur();
          }
        }
      }}
      onBlur={() => {
        setDismissed(false);
      }}
      onMouseLeave={() => {
        setIsShown(false);
        setDismissed(false);
      }}
      aria-describedby={toolTipId}
    >
      {variant === "tooltip" && (
        <TooltipControl tabIndex={tabIndex}>
          <Icon
            transform="grow-4"
            icon={["fas", "question-circle"]}
            fontSize="2"
          />
        </TooltipControl>
      )}
      {!!text && !dismissed && (
        <Text
          ref={ref}
          role="tooltip"
          className="popoverText"
          textAlign={textAlign}
          direction={inViewDirection}
          width={width}
          enableSelectAll={enableSelectAll}
          id={toolTipId}
        >
          {text}
        </Text>
      )}
      {children}
    </Container>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Popover.propTypes = {
  /** The element that requires the popover helper text. */
  children: PropTypes.element,
  /** Specifies the direction of the popover. Defaults to right if not specified */
  direction: PropTypes.oneOf(keys(directions)),
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
  theme: PropTypes.object,
  /** Specifies whether enable select all behaviour */
  enableSelectAll: PropTypes.bool,
  /** Provide an aria-label if text is not a string */
  ariaLabel: PropTypes.string,
  /** Provide a tab index for accessibilty, defaults to 0 */
  tabIndex: PropTypes.number
};
