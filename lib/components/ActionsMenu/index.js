import React, {
  useState,
  useEffect,
  useImperativeHandle,
  useCallback
} from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { useKeepInView } from "../../hooks/keepInView";

const crossTransform1 = keyframes`
  0% {
    transform: translate(0, -6px);
    border-radius: 2px;
  }
  50% {
    transform: translate(0, 0);
    border-radius: 2px;
  }
  75% {
    transform: rotate(-45deg) translate(0, 0);
    border-radius: 2px;
  }
  100% {
    transform: rotate(-45deg) translate(0, 0) scaleX(4);
    border-radius: 0;
  }
`;

const crossTransform2 = keyframes`

  0% {
    transform: translate(0, 6px);
    border-radius: 2px;
  }
  50% {
    transform: translate(0, 0);
    border-radius: 2px;
  }
  75% {
    transform: rotate(45deg) translate(0, 0);
    border-radius: 2px;
  }
  100% {
    transform: rotate(45deg) translate(0, 0) scaleX(4);
    border-radius: 0;
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
  background-color: ${(props) => themeGet("colors.greyLighter")(props)};
  border: none;
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
    background-color: ${(props) => themeGet("colors.greyLight")(props)};
  }
`;

const Icon = styled.div`
  border-radius: 2px;
  height: 4px;
  width: 4px;
  background-color: ${(props) => themeGet("colors.greyDarker")(props)};
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 2px;
    height: 4px;
    width: 4px;
    background-color: ${(props) => themeGet("colors.greyDarker")(props)};
    transition: ${(props) => themeGet("transition.transitionDefault")(props)};
    transform-origin: 50% 50%;
  }
  &:before {
    transform: translate(0, -6px) scaleX(1);
  }
  &:after {
    transform: translate(0, 6px) scaleX(1);
  }
  ${(props) =>
    props.isOpen
      ? css`
          &:before {
            animation: 400ms ${crossTransform1} ease-in-out forwards;
          }
          &:after {
            animation: 400ms ${crossTransform2} ease-in-out forwards;
          }
        `
      : css``};
`;

const Menu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  left: ${(props) =>
    props.menuLeftPosition
      ? props.menuLeftPosition
      : props.direction == "left"
      ? "auto"
      : "34px"};
  right: ${(props) =>
    props.menuRightPosition
      ? props.menuRightPosition
      : props.direction == "left"
      ? "34px"
      : "auto"};
  top: ${(props) => (props.menuTopPosition ? props.menuTopPosition : "0")};
  width: ${(props) => (props.menuWidth ? props.menuWidth : "auto")};
  z-index: 5;
  background-color: ${(props) => themeGet("colors.greyDarker")(props)};
  border-radius: ${(props) => themeGet("radii.2")(props)};
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  transform-origin: ${(props) =>
    props.direction == "left" ? "top right" : "top left"};
  transition: all 300ms;
  transition-timing-function: cubic-bezier(0, 1.4, 1, 1);
  ${(props) =>
    props.isOpen
      ? css`
          transform: scale(1);
          opacity: 1;
          pointer-events: auto;
        `
      : css``};
`;

export const ActionsMenuHeading = styled.div`
  color: ${(props) => themeGet("colors.white")(props)};
  padding: 8px;
  width: 100%;
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
  font-weight: ${(props) => themeGet("fontWeights.1")(props)};
  border-bottom: solid 1px ${(props) => themeGet("colors.greyDarkest")(props)};
  white-space: nowrap;
  cursor: ${(props) => (props.canClick ? "pointer" : "default")};
`;

export const ActionsMenuItem = styled((props) => {
  const { as, ...others } = props;
  const Component = as ? as : others.href ? "a" : "button";

  let newProps = others;
  if (Component === "button") {
    newProps = {
      ...others,
      type: "button"
    };
  }

  return <Component {...newProps} />;
}).attrs({ role: "listitem" })`
  white-space: nowrap;
  display: block;
  width: 100%;
  text-align: left;
  cursor: pointer;
  margin: 0;
  padding: 8px;
  appearance: none;
  background-color: ${(props) =>
    props.selected ? themeGet("colors.successDark")(props) : "transparent"};
  border: none;
  border-bottom: solid 1px ${(props) => themeGet("colors.greyDarkest")(props)};
  border-radius: 0;
  color: ${(props) => themeGet("colors.white")(props)};
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
  line-height: ${(props) => themeGet("fontSizes.1")(props)};
  font-family: ${(props) => themeGet("fonts.main")(props)};
  font-weight: ${(props) => themeGet("fontWeights.2")(props)};
  text-decoration: none;
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  &:hover,
  &:focus {
    outline: 0;
    background-color: ${(props) => themeGet("colors.primaryDark")(props)};
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
`;

export const ActionsMenuBody = ({
  theme,
  onToggle,
  toggleState,
  direction,
  menuTopPosition,
  menuLeftPosition,
  menuRightPosition,
  menuWidth,
  customTriggerComponent,
  children,
  ariaLabel = "Options Menu",
  ...props
}) => {
  const [menuPosition] = useState({
    menuLeftPosition,
    menuRightPosition,
    menuTopPosition
  });
  const [inViewDirection, setInViewDirection] = useState(direction);

  const setMenuPosition = useCallback(
    (newDirection) => {
      if (
        typeof menuLeftPosition !== "undefined" ||
        typeof menuRightPosition !== "undefined"
      ) {
        if (menuPosition.menuLeftPosition) {
          menuPosition.menuRightPosition = menuPosition.menuLeftPosition;
          menuPosition.menuLeftPosition = null;
        } else if (menuPosition.menuRightPosition) {
          menuPosition.menuLeftPosition = menuPosition.menuRightPosition;
          menuPosition.menuRightPosition = null;
        }
      }
      setInViewDirection(newDirection);
    },
    [menuLeftPosition, menuRightPosition, menuPosition, setInViewDirection]
  );
  const [ref, setIsShown] = useKeepInView({
    direction,
    callback: setMenuPosition
  });
  const onToggleInView = (e) => {
    setIsShown(!toggleState);
    onToggle(e);
  };

  let triggerBtn = null;
  if (customTriggerComponent) {
    triggerBtn = React.cloneElement(customTriggerComponent, {
      onClick: onToggleInView,
      "aria-label": ariaLabel,
      "aria-expanded": `${toggleState}`
    });
  } else {
    triggerBtn = (
      <Control
        aria-label={ariaLabel}
        aria-expanded={`${toggleState}`}
        onClick={onToggleInView}
      >
        <Icon isOpen={toggleState} />
      </Control>
    );
  }

  const component = (
    <Wrapper {...props}>
      {triggerBtn}
      <Menu
        isOpen={toggleState}
        direction={inViewDirection}
        menuTopPosition={menuPosition.menuTopPosition}
        menuLeftPosition={menuPosition.menuLeftPosition}
        menuRightPosition={menuPosition.menuRightPosition}
        menuWidth={menuWidth}
        ref={ref}
        role="list"
      >
        {children}
      </Menu>
    </Wrapper>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

ActionsMenuBody.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggleState: PropTypes.bool.isRequired,
  direction: PropTypes.string,
  menuTopPosition: PropTypes.string,
  menuLeftPosition: PropTypes.string,
  menuRightPosition: PropTypes.string,
  menuWidth: PropTypes.string,
  customTriggerComponent: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  theme: PropTypes.object,
  ariaLabel: PropTypes.string
};

const ActionsMenu = React.forwardRef(
  (
    {
      children,
      customTriggerComponent,
      direction,
      isOpen = false,
      theme,
      closeOnClick = true,
      ariaLabel = "Options Menu",
      ...props
    },
    ref
  ) => {
    const [toggleState, setToggle] = useState(isOpen);

    useImperativeHandle(ref, () => ({
      closeMenu: () => {
        setToggle(false);
      }
    }));

    useEffect(() => {
      if (!closeOnClick || !toggleState) {
        return;
      }

      const handleClicked = () => {
        // As the event listener is attached in capture phase, need to do this make sure the sate change are after react event cycle.
        setTimeout(() => setToggle(false), 0);
      };

      // handle click to hide menu
      // If any of the actions are using stopPropagation(), the event will stop in the react mounting root.
      // So use capture phase to detect anything clicked.
      document.addEventListener("click", handleClicked, true);

      return () => {
        // If menu closed, unregister event listener to prevent memory leaks
        document.removeEventListener("click", handleClicked, true);
      };
    }, [closeOnClick, toggleState]);

    const onToggle = (e) => {
      e.stopPropagation();
      setToggle(!toggleState);
    };

    return (
      <ActionsMenuBody
        onToggle={onToggle}
        toggleState={toggleState}
        customTriggerComponent={customTriggerComponent}
        direction={direction}
        theme={theme}
        ariaLabel={ariaLabel}
        {...props}
      >
        {children}
      </ActionsMenuBody>
    );
  }
);

ActionsMenu.propTypes = {
  isOpen: PropTypes.bool,
  direction: PropTypes.string,
  customTriggerComponent: PropTypes.node,
  closeOnClick: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Specifies the colour theme */
  theme: PropTypes.object,
  /** Specifies the aria-label for the button */
  ariaLabel: PropTypes.object
};

export default ActionsMenu;
