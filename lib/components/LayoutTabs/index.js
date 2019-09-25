import styled, { css } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: visible;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
`;

const Tab = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border: 0;
  position: relative;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: ${variables.defaultSpacingHalf} ${variables.defaultSpacing};
  border-radius: ${variables.borderRadius};
  transition: ${variables.defaultTransition};
  cursor: ${props => (props.active ? "default" : "pointer")};;
  background: ${props => (props.active ? colours.white : rgba(colours.greyLighter, 0.5))};
  color: ${props => (props.active ? colours.primary : colours.grey)};
  + button {
    margin-left: ${variables.defaultSpacingHalf};
  }
  &:focus {
    outline: 0;
  }
  ${props => props.active ? css``
  : css`
    &:hover,
    &:focus {
      color: ${colours.greyDark};
      background: ${colours.greyLighter};
    }
  `}
  ${props => props.notification ? css`
    :after {
      content: "${props.notification}";
      position: absolute;
      top: 0;
      right: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      font-size: 1.1rem;
      font-weight: 600;
      color: ${colours.white};
      background-color: ${colours.danger};
    }
  `
  : css``}
`;

/** @component */
export default {
  Container,
  Tab
};
