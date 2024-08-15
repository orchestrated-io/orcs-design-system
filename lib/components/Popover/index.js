import React, { cloneElement, useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  safePolygon,
  FloatingFocusManager
} from "@floating-ui/react";
import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import Icon from "../Icon";
import { PropTypes } from "prop-types";
import Box from "../Box";
import {
  getFloatingUiRootElement,
  getFloatingUiZIndex
} from "../../utils/floatingUiHelpers";

const DIRECTIONS_MAP = {
  topLeft: "top-start",
  top: "top",
  topRight: "top-end",
  left: "left",
  right: "right",
  bottomLeft: "bottom-start",
  bottom: "bottom",
  bottomRight: "bottom-end"
};

const TooltipControl = styled.div`
  border: none;
  background: none;
  padding: 0;
  cursor: help;
  font-size: 1em;
  color: ${(props) =>
    props.active
      ? themeGet("colors.primary")(props)
      : themeGet("colors.black")(props)};
  transition: ${themeGet("transition.transitionDefault")};
  &:hover,
  &:focus {
    outline: 0;
    color: ${themeGet("colors.primary")};
  }
`;

const StyledPopover = styled.div`
  font-size: ${themeGet("fontSizes.0")};
  line-height: ${themeGet("fontSizes.1")};
  font-weight: ${themeGet("fontWeights.1")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  word-break: break-word;
  color: ${themeGet("colors.greyDarkest")};
  outline: 0;
  padding: ${themeGet("space.3")};
  border-radius: ${themeGet("radii.1")};
  width: ${(props) => (props.width ? props.width : "200px")};
  background: ${themeGet("colors.white")};
  border: 1px solid ${themeGet("colors.greyLight")};
  box-shadow: ${themeGet("shadows.boxDefault")};
  user-select: ${(props) => (props.enableSelectAll ? "all" : "auto")};

  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  &.visible {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }

  & a {
    font-size: ${themeGet("fontSizes.0")};
  }

  &:before {
    content: "";
    z-index: 2;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent;
    border-right-color: ${themeGet("colors.white")};
    left: -5px;
    top: 50%;
    margin-top: -6px;
    position: absolute;
  }

  &:after {
    content: "";
    z-index: 1;
    position: absolute;
    border-color: transparent;
    border-right-color: ${themeGet("colors.grey")};
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    left: -6px;
    top: 50%;
    margin-top: -6px;
  }

  &.top {
    &:before {
      left: 50%;
      top: auto;
      margin-top: 0;
      bottom: -8px;
      margin-left: -3px;
      transform: rotate(-90deg);
    }
    &:after {
      left: 50%;
      top: auto;
      margin-top: 0;
      bottom: -9px;
      margin-left: -3px;
      transform: rotate(-90deg);
    }
  }

  &.topRight,
  &.top-end {
    &:before {
      left: 1px;
      top: auto;
      margin-top: 0;
      bottom: -4px;
      margin-left: -5px;
      transform: rotate(-45deg);
      border-width: 5px 10px 5px 0;
    }
    &:after {
      left: 1px;
      top: auto;
      margin-top: 0;
      bottom: -5px;
      margin-left: -6px;
      transform: rotate(-45deg);
      border-width: 5px 10px 5px 0;
    }
  }

  &.bottomRight,
  &.bottom-end {
    &:before {
      left: 1px;
      bottom: auto;
      margin-top: 0;
      top: -4px;
      margin-left: -5px;
      transform: rotate(45deg);
      border-width: 5px 10px 5px 0;
    }
    &:after {
      left: 1px;
      bottom: auto;
      margin-top: 0;
      top: -5px;
      margin-left: -6px;
      transform: rotate(45deg);
      border-width: 5px 10px 5px 0;
    }
  }

  &.bottom {
    &:before {
      left: 50%;
      top: -8px;
      margin-top: 0;
      margin-left: -3px;
      transform: rotate(90deg);
    }
    &:after {
      left: 50%;
      top: -9px;
      margin-top: 0;
      margin-left: -3px;
      transform: rotate(90deg);
    }
  }

  &.bottomLeft,
  &.bottom-start {
    &:before {
      right: 1px;
      left: auto;
      bottom: auto;
      margin-top: 0;
      top: -4px;
      margin-right: -5px;
      transform: rotate(135deg);
      border-width: 5px 10px 5px 0;
    }
    &:after {
      right: 1px;
      left: auto;
      bottom: auto;
      margin-top: 0;
      top: -5px;
      margin-right: -6px;
      transform: rotate(135deg);
      border-width: 5px 10px 5px 0;
    }
  }

  &.left {
    &:before {
      left: auto;
      right: -5px;
      transform: rotate(180deg);
    }
    &:after {
      left: auto;
      right: -6px;
      transform: rotate(180deg);
      top: 50%;
      margin-top: -6px;
    }
  }

  &.topLeft,
  &.top-start {
    &:before {
      right: 1px;
      left: auto;
      top: auto;
      margin-top: 0;
      bottom: -4px;
      margin-right: -5px;
      transform: rotate(225deg);
      border-width: 5px 10px 5px 0;
    }
    &:after {
      right: 1px;
      left: auto;
      top: auto;
      margin-top: 0;
      bottom: -5px;
      margin-right: -6px;
      transform: rotate(225deg);
      border-width: 5px 10px 5px 0;
    }
  }
`;

export default function Popover({
  children,
  direction = "right",
  text,
  textAlign,
  width,
  enableSelectAll,
  variant,
  ariaLabel,
  ...props
}) {
  const [visible, setVisible] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: visible,
    onOpenChange: setVisible,
    placement: DIRECTIONS_MAP[direction] || direction || "right",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(({ rects }) => ({
        mainAxis: 10,
        alignmentAxis: -rects.floating.width
      })),
      flip({ fallbackAxisSideDirection: "start" }),
      shift()
    ]
  });

  const hover = useHover(context, {
    move: false,
    handleClose: safePolygon(),
    delay: { open: 400, close: 0 }
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role
  ]);

  const triggerProps = {
    ...getReferenceProps({
      ref: refs.setReference,
      ...(children?.props || {})
    }),
    tabIndex: "0"
  };

  let triggerComponent = null;

  if (variant === "tooltip") {
    triggerComponent = (
      <TooltipControl {...triggerProps} active={visible} tabIndex="0">
        <Icon
          transform="grow-4"
          icon={["fas", "question-circle"]}
          fontSize="2"
        />
      </TooltipControl>
    );
  } else if (children?.type?.$$typeof === Symbol.for("react.forward_ref")) {
    triggerComponent = cloneElement(children, triggerProps);
  } else {
    triggerComponent = (
      <div
        {...triggerProps}
        style={{ display: "inline-block" }}
        data-testid={`${children?.props?.["data-testid"] || "popover"}-trigger`}
      >
        {children}
      </div>
    );
  }

  const directionClass =
    context.placement === DIRECTIONS_MAP[direction]
      ? direction
      : context.placement;

  const Popover = (
    <StyledPopover
      textAlign={textAlign}
      width={width}
      enableSelectAll={enableSelectAll}
      className={`Tooltip popover ${
        visible ? "visible" : ""
      } ${directionClass}`}
      ref={refs.setFloating}
      style={{
        ...floatingStyles,
        zIndex: getFloatingUiZIndex(context.refs.reference)
      }}
      {...getFloatingProps()}
      ariaLabel={ariaLabel}
    >
      {text}
    </StyledPopover>
  );

  return (
    <Box {...props} aria-describedby={context.floatingId}>
      {text &&
        (visible ? (
          <FloatingPortal
            root={getFloatingUiRootElement(context.refs.reference)}
            preserveTabOrder={true}
          >
            <FloatingFocusManager context={context} modal={false}>
              {Popover}
            </FloatingFocusManager>
          </FloatingPortal>
        ) : (
          Popover
          /*
           * HACK: Fixing all the broken tests in teamform-app-ui is too time consuming
           * right this moment with a lot of the tests asserting against Popover items.
           * Rendering the markup even when closed but in a hidden state ensures that tests pass.
           * Ideally, we would update all the tests in teamform-app-ui to open the Popover
           * before assertion.
           **/
        ))}

      {triggerComponent}
    </Box>
  );
}

Popover.propTypes = {
  /** The element that requires the popover helper text. */
  children: PropTypes.element,
  /** Specifies the direction of the popover. Defaults to right if not specified */
  direction: PropTypes.oneOf([
    ...Object.keys(DIRECTIONS_MAP),
    ...Object.values(DIRECTIONS_MAP)
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
  theme: PropTypes.object,
  /** Specifies whether enable select all behaviour */
  enableSelectAll: PropTypes.bool,
  /** Provide an aria-label if text is not a string */
  ariaLabel: PropTypes.string,
  /** Provide a tab index for accessibilty, defaults to 0 */
  tabIndex: PropTypes.number
};
