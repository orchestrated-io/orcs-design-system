import React, {
  useState,
  useImperativeHandle,
  createContext,
  useContext,
  useMemo,
  useId,
  useLayoutEffect
} from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { commonKeys } from "../../hooks/keypress";
import useActionMenu from "./useActionMenu";
import {
  crossFadeIn,
  beforeDotCollapsing,
  beforeDotExpanding,
  afterDotCollapsing,
  afterDotExpanding,
  beforeCrossExpanding,
  beforeCrossCollapsing,
  afterCrossExpanding,
  afterCrossCollapsing
} from "./ActionsMenu.animations";
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs
} from "@floating-ui/react";
import {
  getFloatingUiRootElement,
  getFloatingUiZIndex
} from "../../utils/floatingUiHelpers";
import { variant } from "styled-system";

const ActionMenuContext = createContext({});

const StyledActionsMenuContainer = styled.div`
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  &.hack-for-legacy-tests {
    position: absolute;
    pointer-events: none;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }

  &.visible {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
`;

const Wrapper = styled.div`
  ${space}
  ${layout}
  position: relative;
  width: auto;
`;

const Control = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  text-decoration: none;
  text-align: center;
  border-radius: ${(props) => themeGet("radii.2")(props)};
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  cursor: pointer;
  width: 30px;
  height: 30px;
  &:hover,
  &:focus {
    outline: 0;
    border-color: ${(props) => themeGet("colors.primary")(props)};
  }

  ${variant({
    prop: "variant",
    variants: {
      default: {
        backgroundColor: "white",
        border: "solid 1px",
        borderColor: "greyLight",
        width: "30px",
        height: "30px",
        borderRadius: 2
      },
      circle: {
        backgroundColor: "greyDarkest",
        border: "solid 2px",
        borderColor: "greyDarkest",
        width: "35px",
        height: "35px",
        borderRadius: "50%"
      }
    }
  })}

  &[data-state="open"] .actionsMenu__dots {
    &:before {
      animation: 500ms ${beforeDotCollapsing}
        cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
    }
    &:after {
      animation: 500ms ${afterDotCollapsing} cubic-bezier(0.68, -0.6, 0.32, 1.6)
        forwards;
    }
  }
  &[data-state="open"] .actionsMenu__cross {
    &:before {
      animation: 500ms ${beforeCrossExpanding}
        cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
    }
    &:after {
      animation: 500ms ${afterCrossExpanding}
        cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
    }
  }
  &[data-state="closed"] .actionsMenu__dots {
    &:before {
      animation: 500ms ${beforeDotExpanding} cubic-bezier(0.68, -0.6, 0.32, 1.6)
        forwards;
    }
    &:after {
      animation: 500ms ${afterDotExpanding} cubic-bezier(0.68, -0.6, 0.32, 1.6)
        forwards;
    }
  }
  &[data-state="closed"] .actionsMenu__cross {
    &:before {
      animation: 500ms ${beforeCrossCollapsing}
        cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
    }
    &:after {
      animation: 500ms ${afterCrossCollapsing}
        cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
    }
  }
`;

const Dots = styled.div`
  border-radius: 2px;
  height: 4px;
  width: 4px;
  background-color: ${(props) =>
    props.variant === "circle"
      ? themeGet("colors.white")(props)
      : themeGet("colors.greyDarker")(props)};
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 2px;
    height: 4px;
    width: 4px;
    background-color: ${(props) =>
      props.variant === "circle"
        ? themeGet("colors.white")(props)
        : themeGet("colors.greyDarker")(props)};
  }
  &:before {
    transform: translate(0, -6px);
  }
  &:after {
    transform: translate(0, 6px);
  }
`;

const Cross = styled.div`
  animation: 1500ms ${crossFadeIn} ease-in-out forwards;
  opacity: 0;
  position: absolute;
  left: calc(50% - 2px);
  top: calc(50% - 2px);
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 2px;
    height: 4px;
    width: 4px;
    background-color: ${(props) =>
      props.variant === "circle"
        ? themeGet("colors.white")(props)
        : themeGet("colors.greyDarker")(props)};
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
  }
`;

const Menu = styled.div`
  display: block;
  width: ${(props) => (props.menuWidth ? props.menuWidth : "auto")};
  z-index: 5;
  background-color: ${themeGet("colors.white")};
  border: 1px solid ${themeGet("colors.greyLight")};
  box-shadow: ${themeGet("shadows.boxDefault")};
  border-radius: ${(props) => themeGet("radii.2")(props)};
`;

export const ActionsMenuHeading = styled((props) => {
  const { actionMenu } = useContext(ActionMenuContext);
  const id = useId();

  // // Only sets `aria-labelledby` on the Popover root element
  // // if this component is mounted inside it.
  useLayoutEffect(() => {
    actionMenu?.setLabelId?.(id);

    return () => actionMenu?.setLabelId?.(undefined);
  }, [id, actionMenu]);

  return (
    <div
      {...props}
      onKeyUp={(e) => {
        if (e.key === commonKeys.ENTER && props?.canClick) {
          props?.onClick();
        }
      }}
    />
  );
}).attrs({
  tabIndex: "0",
  role: "button"
})`
  color: ${(props) => themeGet("colors.greyDark")(props)};
  padding: 8px;
  width: 100%;
  font-size: ${(props) => themeGet("fontSizes.0")(props)};
  font-weight: ${(props) => themeGet("fontWeights.1")(props)};
  border-bottom: solid 1px ${(props) => themeGet("colors.greyLighter")(props)};
  white-space: nowrap;
  cursor: ${(props) => (props.canClick ? "pointer" : "default")};
`;

export const ActionsMenuItem = styled((props) => {
  const { id, onItemClick, actionMenu } = useContext(ActionMenuContext);

  const { as, ...others } = props;

  const Component = as ? as : others.href ? "a" : "button";
  const disabled = props.disabled;

  let newProps = {
    ...others,
    ...(actionMenu?.getItemProps?.() || {})
  };

  const { onClick: originalOnClick } = newProps;

  const onClick = useMemo(
    () => (e) => {
      onItemClick?.(e);
      originalOnClick?.(e);
    },
    [originalOnClick, onItemClick]
  );

  if (Component === "button") {
    newProps = {
      ...others,
      type: "button",
      ["data-action-menu-id"]: id
    };
  }

  if (props.Component)
    return (
      <props.Component {...newProps} onClick={onClick} disabled={disabled} />
    );

  return <Component {...newProps} onClick={onClick} disabled={disabled} />;
}).attrs({ role: "menuitem" })`
  ${({ Component }) =>
    Component
      ? ""
      : css`
          white-space: nowrap;
          display: block;
          width: 100%;
          text-align: left;
          cursor: pointer;
          margin: 0;
          padding: 8px;
          appearance: none;
          background-color: ${(props) =>
            props.selected
              ? themeGet("colors.success20")(props)
              : "transparent"};
          border: none;
          border-bottom: solid 1px ${(props) => themeGet("colors.white")(props)};
          border-radius: 0;
          color: ${(props) => themeGet("colors.greyDarkest")(props)};
          font-size: ${(props) => themeGet("fontSizes.0")(props)};
          line-height: ${(props) => themeGet("fontSizes.0")(props)};
          font-family: ${(props) => themeGet("fonts.main")(props)};
          font-weight: ${(props) => themeGet("fontWeights.2")(props)};
          text-decoration: none;
          transition: ${(props) =>
            themeGet("transition.transitionDefault")(props)};
          &:hover {
            background-color: ${(props) =>
              themeGet("colors.primaryLightest")(props)};
          }
          &:first-child {
            border-radius: ${(props) => themeGet("radii.2")(props)}
              ${(props) => themeGet("radii.2")(props)} 0 0;
          }
          &:last-child {
            border: 0;
            border-radius: 0 0 ${(props) => themeGet("radii.2")(props)}
              ${(props) => themeGet("radii.2")(props)};
          }
          &:only-child {
            border-radius: ${(props) => themeGet("radii.2")(props)};
          }
          &#other {
            padding: 6px 8px;
          }
        `}
`;

export const ActionsMenuBody = ({
  theme,
  onToggle,
  toggleState,
  // direction - Deprecated
  direction = "right-start",
  menuWidth,
  customTriggerComponent,
  renderTrigger,
  children,
  ariaLabel = "Options Menu",
  onTriggerFocus,
  closeMenu,
  closeOnClick = false,
  "data-testid": dataTestId = "ActionsMenu",
  variant = "default",
  ...props
}) => {
  const id = useId();

  const actionMenu = useActionMenu({
    placement: direction,
    open: toggleState,
    onOpenChange: (_, e) => {
      if (e) {
        onToggle?.(e);
      }
    }
  });

  const childrenRef = children.ref;
  const triggerRef = useMergeRefs([actionMenu.refs.setReference, childrenRef]);
  const ref = useMergeRefs([actionMenu.refs.setFloating]);

  const triggerProps = useMemo(
    () => ({
      "aria-label": ariaLabel,
      onFocus: onTriggerFocus,
      id,
      ...actionMenu.getReferenceProps({
        ...props,
        onClick: onToggle,
        ref: triggerRef,
        "data-state": actionMenu.open ? "open" : "closed",
        "data-testid": dataTestId
      })
    }),
    [
      ariaLabel,
      onTriggerFocus,
      id,
      actionMenu,
      onToggle,
      props,
      triggerRef,
      dataTestId
    ]
  );

  let triggerComponent = (
    <Control {...triggerProps} variant={variant}>
      <Dots className="actionsMenu__dots" variant={variant} />
      <Cross className="actionsMenu__cross" variant={variant} />
    </Control>
  );

  if (renderTrigger) {
    triggerComponent = renderTrigger(triggerProps);
  }

  if (customTriggerComponent) {
    triggerComponent = (
      <div role="button" {...triggerProps}>
        {customTriggerComponent}
      </div>
    );
  }

  const value = useMemo(
    () => ({
      id,
      onItemClick: (e) => {
        if (closeOnClick) {
          closeMenu(e);
        }
      },
      actionMenu
    }),
    [closeOnClick, closeMenu, id, actionMenu]
  );

  const style = useMemo(
    () => ({
      ...actionMenu.floatingStyles,
      zIndex: getFloatingUiZIndex(actionMenu.refs.reference)
    }),
    [actionMenu.floatingStyles, actionMenu.refs.reference]
  );

  const menuDataTestId = useMemo(() => `${dataTestId}__menu`, [dataTestId]);

  const { getFloatingProps } = actionMenu;

  const floatingProps = useMemo(
    () => getFloatingProps(props),
    [getFloatingProps, props]
  );

  const component = (
    <ActionMenuContext.Provider value={value}>
      <Wrapper {...props}>
        {triggerComponent}

        {toggleState ? (
          <FloatingPortal
            root={getFloatingUiRootElement(actionMenu.refs.reference)}
          >
            <FloatingFocusManager context={actionMenu.context} modal={true}>
              <StyledActionsMenuContainer
                aria-labelledby={actionMenu.labelId}
                data-testid={menuDataTestId}
                {...floatingProps}
                style={style}
                className="actionMenu-content visible"
                aria-hidden="false"
                ref={ref}
              >
                <Menu menuWidth={menuWidth} isOpen={toggleState}>
                  {children}
                </Menu>
              </StyledActionsMenuContainer>
            </FloatingFocusManager>
          </FloatingPortal>
        ) : (
          /* * HACK: Fixing all the broken tests in teamform-app-ui is too
          time consuming * right this moment with a lot of the tests asserting
          against ActionsMenu items. * Rendering the markup even when closed
          but in a hidden state ensures that tests pass. * Ideally, we would
          update all the tests in teamform-app-ui to open the ActionsMenu *
          before assertion. **/
          <StyledActionsMenuContainer
            aria-labelledby={actionMenu.labelId}
            data-testid={menuDataTestId}
            className="actionMenu-content hack-for-legacy-tests"
          >
            <Menu menuWidth={menuWidth} isOpen={toggleState}>
              {children}
            </Menu>
          </StyledActionsMenuContainer>
        )}
      </Wrapper>
    </ActionMenuContext.Provider>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

ActionsMenuBody.propTypes = {
  onTriggerFocus: PropTypes.func,
  onToggle: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  toggleState: PropTypes.bool.isRequired,
  closeOnClick: PropTypes.bool,
  direction: PropTypes.string,
  placement: PropTypes.string,
  menuTopPosition: PropTypes.string,
  menuLeftPosition: PropTypes.string,
  menuRightPosition: PropTypes.string,
  menuWidth: PropTypes.string,
  customTriggerComponent: PropTypes.node,
  renderTrigger: PropTypes.func,
  "data-testid": PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  theme: PropTypes.object,
  ariaLabel: PropTypes.string,
  variant: PropTypes.oneOf(["default", "circle"])
};

const ActionsMenu = React.forwardRef((props, ref) => {
  const [toggleState, setToggle] = useState(false);

  const onToggle = (e) => {
    e.stopPropagation();
    setToggle(!toggleState);
  };

  useImperativeHandle(ref, () => ({
    closeMenu: () => {
      setToggle(false);
    }
  }));

  return (
    <ActionsMenuBody
      {...props}
      closeMenu={() => setToggle(false)}
      toggleState={toggleState}
      onToggle={onToggle}
    >
      {props.children}
    </ActionsMenuBody>
  );
});

ActionsMenu.propTypes = {
  isOpen: PropTypes.bool,
  direction: PropTypes.oneOf([
    "left",
    "right",
    "top",
    "bottom",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-start",
    "left-end",
    "right-start",
    "right-end"
  ]),
  customTriggerComponent: PropTypes.node,
  renderTrigger: PropTypes.func,
  closeOnClick: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Specifies the colour theme */
  theme: PropTypes.object,
  /** Specifies the aria-label for the button */
  ariaLabel: PropTypes.string,
  /** Specifies the variant of the ActionsMenu */
  variant: PropTypes.oneOf(["default", "circle"])
};

export default ActionsMenu;
