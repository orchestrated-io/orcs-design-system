import React, { useState, useEffect } from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout } from "styled-system";
import systemtheme from "../../systemtheme";

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
  background-color: ${systemtheme.colors.greyLighter};
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
  border-radius: ${systemtheme.radii[2]};
  transition: ${systemtheme.transition.transitionDefault};
  cursor: pointer;
  width: 30px;
  height: 30px;
  &:hover,
  &:focus {
    outline: 0;
    background-color: ${systemtheme.colors.greyLight};
  }
`;

const Icon = styled.div`
  border-radius: 2px;
  height: 4px;
  width: 4px;
  background-color: ${systemtheme.colors.greyDarker};
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 2px;
    height: 4px;
    width: 4px;
    background-color: ${systemtheme.colors.greyDarker};
    transition: ${systemtheme.transition.transitionDefault};
    transform-origin: 50% 50%;
  }
  &:before {
    transform: translate(0, -6px) scaleX(1);
  }
  &:after {
    transform: translate(0, 6px) scaleX(1);
  }
  ${props =>
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
  display: inline-block;
  position: absolute;
  left: ${props => (props.direction == "left" ? "auto" : "34px")};
  right: ${props => (props.direction == "left" ? "34px" : "auto")};
  top: 0;
  width: auto;
  z-index: 5;
  background-color: ${systemtheme.colors.greyDarker};
  border-radius: ${systemtheme.radii[2]};
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  transform-origin: ${props =>
    props.direction == "left" ? "top right" : "top left"};
  transition: all 300ms;
  transition-timing-function: cubic-bezier(0, 1.4, 1, 1);
  ${props =>
    props.isOpen
      ? css`
          transform: scale(1);
          opacity: 1;
          pointer-events: auto;
        `
      : css``};
  a,
  button {
    white-space: nowrap;
    display: block;
    width: 100%;
    text-align: left;
    cursor: pointer;
    padding: ${systemtheme.space[3]};
    appearance: none;
    background-color: transparent;
    border: none;
    color: ${systemtheme.colors.white};
    font-size: ${systemtheme.fontSizes[1]};
    line-height: ${systemtheme.fontSizes[1]};
    font-family: ${systemtheme.fonts.main};
    font-weight: ${systemtheme.fontWeights[2]};
    text-decoration: none;
    border-bottom: solid 1px ${systemtheme.colors.greyDarkest};
    transition: ${systemtheme.transition.transitionDefault};
    &:hover,
    &:focus {
      outline: 0;
      background-color: ${systemtheme.colors.primaryDark};
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ActionsMenu = ({
  children,
  direction,
  isOpen = false,
  theme,
  ...props
}) => {
  const [toggleState, setToggle] = useState(isOpen);

  useEffect(() => {
    if (!toggleState) {
      return;
    }

    const handleClicked = () => {
      setToggle(false);
    };

    // handle click to hide menu
    document.addEventListener("click", handleClicked);

    return () => {
      // If menu closed, unregister event listener to prevent memory leaks
      document.removeEventListener("click", handleClicked);
    };
  }, [toggleState]);

  const onToggle = e => {
    e.stopPropagation();
    setToggle(!toggleState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper {...props}>
        <Control onClick={onToggle}>
          <Icon isOpen={toggleState} />
        </Control>
        <Menu isOpen={toggleState} direction={direction}>
          {children}
        </Menu>
      </Wrapper>
    </ThemeProvider>
  );
};

ActionsMenu.propTypes = {
  isOpen: PropTypes.bool,
  direction: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Specifies the colour theme */
  theme: PropTypes.object
};

ActionsMenu.defaultProps = {
  theme: systemtheme
};

export default ActionsMenu;
