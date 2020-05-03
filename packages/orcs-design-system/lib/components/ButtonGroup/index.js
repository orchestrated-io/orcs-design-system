import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Flex from "../Flex/";

const ButtonGroupControlLabel = styled.div`
  color: ${themeGet("colors.white")};
  font-size: ${themeGet("fontSizes.1")};
  font-weight: ${themeGet("fontWeights.1")};
  margin-right: ${themeGet("space.2")};
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${themeGet("colors.greyDarker")};
  border-radius: ${themeGet("radii.2")};
  height: 33px;
  padding: 3px 1px;
`;

const ButtonGroupRadio = styled.input.attrs({
  type: "radio"
})`
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
`;

const ButtonGroupLabel = styled.label`
  height: 100%;
  border-radius: ${themeGet("radii.2")};
  margin: ${themeGet("space.1")};
  display: flex;
  align-items: center;
  padding: 0 ${themeGet("space.3")};
  transition: ${themeGet("transition.transitionDefault")};
  font-size: ${themeGet("fontSizes.1")};
  font-weight: ${themeGet("fontWeights.2")};
  cursor: ${props => (props.checked ? "default" : "pointer")};
  color: ${props =>
    props.checked ? themeGet("colors.greyDarker") : themeGet("colors.white")};
  background-color: ${props =>
    props.checked ? themeGet("colors.white") : "#5e686d"};
  &:hover {
    background-color: ${props =>
      props.checked ? themeGet("colors.white") : themeGet("colors.primary")};
  }
`;

export const ButtonGroupContainer = ({ children, controlLabel }) => {
  return (
    <Flex alignItems="center">
      <ButtonGroupControlLabel>{controlLabel}</ButtonGroupControlLabel>
      <ButtonGroupWrapper>{children}</ButtonGroupWrapper>
    </Flex>
  );
};

export const ButtonGroupItem = ({ label, name, value, checked, onChange }) => {
  return (
    <>
      <ButtonGroupRadio
        id={label}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <ButtonGroupLabel checked={checked} for={label}>
        {label}
      </ButtonGroupLabel>
    </>
  );
};

ButtonGroupContainer.propTypes = {
  children: PropTypes.node,
  controlLabel: PropTypes.string
};
ButtonGroupItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};
