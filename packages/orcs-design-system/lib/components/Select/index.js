import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../colours";
import { default as ReactSelect } from "react-select";
import systemtheme from "../../systemtheme";
import { space, layout, compose } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const SelectStyles = compose(space, layout);

const Wrapper = styled("div")(
  css({
    display: "inline-block",
    width: "100%"
  }),
  SelectStyles
);

/**
 *
 * This component uses React Select: <https://react-select.com/home>
 *
 * Usage of this component has changed since we have upgraded to the latest version of `react-select`. For example, field values are now defined as separate objects. for example:
 *
 *       const options = [
 *       { value: 'chocolate', label: 'Chocolate' },
 *       { value: 'strawberry', label: 'Strawberry' },
 *       { value: 'vanilla', label: 'Vanilla' },
 *      { value: 'hazelnut', label: 'Hazelnut' },
 *      { value: 'rocky road', label: 'Rocky Road' }
 *     ]
 * For a full list of the changes, see <https://react-select.com/upgrade-guide>.
 *
 */
const Select = forwardRef((props, ref, theme) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderColor: state.isSelected
        ? colours.warning
        : state.isFocused
        ? colours.primary
        : null,
      backgroundColor: props.inverted
        ? themeGet("colors.greyDarker")(props)
        : themeGet("colors.white")(props),
      color: props.inverted
        ? themeGet("colors.white")(props)
        : themeGet("colors.greyDarkest")(props)
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: !state.isFocused
        ? 0
        : props.inverted
        ? "0 0 0 " +
          themeGet("radii.1")(props) +
          " " +
          themeGet("colors.primaryLight")(props)
        : "0 0 0 " +
          themeGet("radii.1")(props) +
          " " +
          themeGet("colors.primary")(props),
      "&:hover": {
        borderColor: themeGet("colors.primary")(props)
      },
      borderColor: state.isFocused
        ? themeGet("colors.primary")(props)
        : themeGet("colors.grey")(props),
      outline: state.isFocused
        ? themeGet("colors.primary")(props)
        : themeGet("colors.grey")(props),
      backgroundColor: props.inverted
        ? themeGet("colors.greyDarker")(props)
        : themeGet("colors.white")(props),
      color: props.inverted
        ? themeGet("colors.white")(props)
        : themeGet("colors.greyDarkest")(props),
      borderRadius: themeGet("radii.2")(props)
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color:
        !state.isFocused && !props.inverted
          ? themeGet("colors.greyDark")(props)
          : state.isFocused && !props.inverted
          ? themeGet("colors.primary")(props)
          : !state.isFocused && props.inverted
          ? themeGet("colors.white")(props)
          : themeGet("colors.primaryLight")(props),
      "&:hover": {
        color:
          !state.isFocused && !props.inverted
            ? themeGet("colors.primary")(props)
            : state.isFocused && !props.inverted
            ? themeGet("colors.primaryDarkest")(props)
            : !state.isFocused && props.inverted
            ? themeGet("colors.primary")(props)
            : themeGet("colors.white")(props)
      }
    }),
    container: provided => ({
      ...provided,
      color: props.inverted ? colours.white : colours.grey,
      backgroundColor: props.inverted ? colours.greyDarker : colours.white
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color:
        !state.isFocused && !props.inverted
          ? colours.greyDark
          : state.isFocused && !props.inverted
          ? colours.primary
          : !state.isFocused && props.inverted
          ? colours.white
          : colours.primaryLight,
      "&:hover": {
        color:
          !state.isFocused && !props.inverted
            ? colours.primary
            : state.isFocused && !props.inverted
            ? colours.primaryDarkest
            : !state.isFocused && props.inverted
            ? colours.primary
            : colours.white
      }
    }),
    multiValue: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: `${systemtheme.radii[2]}`
    }),
    multiValueLabel: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: `${systemtheme.radii[2]}`,
      padding: `${systemtheme.space[2]}`
    }),
    multiValueRemove: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: `${systemtheme.radii[2]}`,
      "&:hover": {
        backgroundColor: colours.primaryDarkest,
        color: colours.white
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor:
        !state.isFocused && !props.inverted
          ? colours.white
          : state.isFocused && !props.inverted
          ? colours.primaryLightest
          : !state.isFocused && props.inverted
          ? colours.greyDarker
          : colours.primaryDark
    }),
    placeholder: provided => ({
      ...provided,
      color: props.inverted ? colours.white : colours.greyDarkest
    })
  };
  return (
    <Wrapper inverted={props.inverted}>
      <ReactSelect ref={ref} styles={customStyles} theme={theme} {...props} />
    </Wrapper>
  );
});

Select.propTypes = {
  /** Points to options object, see example code above */
  options: PropTypes.array,
  /** Styling for dark backgrounds. */
  inverted: PropTypes.bool,
  /** Specifies the system design theme object */
  theme: PropTypes.object
};

Select.defaultProps = {
  theme: systemtheme
};

/** @component */
export default Select;
