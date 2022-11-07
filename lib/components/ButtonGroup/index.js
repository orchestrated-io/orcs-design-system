import PropTypes from "prop-types";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Flex from "../Flex/";
import { css } from "@styled-system/css";

const ButtonGroupControlLabel = styled("div")((props) =>
  css({
    color: themeGet("colors.white")(props),
    fontSize: themeGet("fontSizes.1")(props),
    fontWeight: themeGet("fontWeights.1")(props),
    marginRight: themeGet("space.3")(props)
  })
);

const ButtonGroupWrapper = styled("div")((props) =>
  css({
    display: "flex",
    alignItems: "center",
    background: themeGet("colors.greyDarker")(props),
    borderRadius: themeGet("radii.2")(props),
    padding: "2px"
  })
);

const ButtonGroupRadio = styled.input.attrs({
  type: "radio"
})((props) =>
  css({
    opacity: "0",
    position: "absolute",
    margin: "0",
    zIndex: "-1",
    width: "0",
    height: "0",
    overflow: "hidden",
    pointerEvents: "none",
    "&:checked + label": {
      cursor: "default",
      color: themeGet("colors.greyDarker")(props),
      backgroundColor: themeGet("colors.white")(props),
      "&:hover": {
        backgroundColor: themeGet("colors.white")(props)
      }
    }
  })
);

const ButtonGroupLabel = styled("label")((props) =>
  css({
    height: "100%",
    borderRadius: themeGet("radii.2")(props),
    margin: "2px",
    display: "flex",
    alignItems: "center",
    padding: `${themeGet("space.1")(props)} ${themeGet("space.3")(props)}`,
    transition: themeGet("transition.transitionDefault")(props),
    fontSize: themeGet("fontSizes.1")(props),
    fontWeight: themeGet("fontWeights.2")(props),
    cursor: props.checked ? "default" : "pointer",
    color: props.checked
      ? themeGet("colors.greyDarker")(props)
      : themeGet("colors.white")(props),
    backgroundColor: props.checked
      ? themeGet("colors.white")(props)
      : "#5e686d",
    "&:hover": {
      backgroundColor: props.checked
        ? themeGet("colors.white")(props)
        : themeGet("colors.primary")(props)
    }
  })
);

/** To do: look at renaming this to ButtonGroup, add a container component that can accept space and layout props */

export const ButtonGroupContainer = ({
  children,
  theme,
  controlLabel,
  ...props
}) => {
  const component = (
    <Flex alignItems="center" {...props}>
      {controlLabel && (
        <ButtonGroupControlLabel>{controlLabel}</ButtonGroupControlLabel>
      )}
      <ButtonGroupWrapper>{children}</ButtonGroupWrapper>
    </Flex>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

export const ButtonGroupItem = ({
  label,
  name,
  value,
  checked,
  onChange,
  theme
}) => {
  const component = (
    <>
      <ButtonGroupRadio
        id={label}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <ButtonGroupLabel checked={checked} htmlFor={label}>
        {label}
      </ButtonGroupLabel>
    </>
  );
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

ButtonGroupContainer.propTypes = {
  children: PropTypes.node,
  controlLabel: PropTypes.string,
  theme: PropTypes.object
};

ButtonGroupItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.object
};
