import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Tab = styled.button`
  display: block;
  appearance: none;
  font-size: 1.4rem;
  font-weight: 400;
  height: 40px;
  text-transform: uppercase;
  width: 100%;
  transition: ${variables.defaultTransition};
  border: 0;
  border-top: solid ${theme.primary} ${props => (props.active ? "2px" : "0")};
  background: ${props => (props.active ? theme.white : theme.greyLightest)};
  color: ${props => (props.active ? theme.primary : theme.greyDark)};
  cursor: ${props => (props.active ? "default" : "pointer")};

  + button {
    margin-left: 4px;
  }

  &:hover {
    background: ${props => (props.active ? theme.white : theme.greyLighter)};
  }

  &:focus {
    outline: 0;
    background: ${props => (props.active ? theme.white : theme.greyLighter)};
  }
`;

const Content = styled.div`
  position: relative;
  display: ${props => (props.active ? "block" : "none")};
`;

/** @component */
export default {
  Container,
  Tab,
  Content
};
