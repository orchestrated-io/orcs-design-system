import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
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
  border: 0;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: ${variables.defaultSpacingHalf} ${variables.defaultSpacingDouble};
  border-radius: ${variables.borderRadius};
  transition: ${variables.defaultTransition};
  cursor: ${props => (props.active ? "default" : "pointer")};;
  background: ${props => (props.active ? theme.white : theme.greyLighter.fade(0.5))};
  color: ${props => (props.active ? theme.primary : theme.grey)};
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
      color: ${theme.greyDark};
      background: ${theme.greyLighter};
    }
  `}
`;

/** @component */
export default {
  Container,
  Tab
};
