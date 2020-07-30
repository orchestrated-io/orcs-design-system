import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { default as ReactSelect } from "react-select";
import systemtheme from "../../systemtheme";
import { space, layout, compose } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const SelectStyles = compose(space, layout);

const Wrapper = styled("div").attrs(props => ({
  "data-testid": props["data-testid"] ? props["data-testid"] : props.dataTestId
}))(
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
const Select = forwardRef((props, ref) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      borderColor: state.isSelected
        ? themeGet("colors.warning")(props)
        : state.isFocused
        ? themeGet("colors.primary")(props)
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
      opacity: state.isDisabled ? 0.7 : 1,
      boxShadow: !state.isFocused
        ? 0
        : props.inverted
        ? "0 0 0 " +
          themeGet("borderWidths.1")(props) +
          " " +
          themeGet("colors.primaryLight")(props)
        : "0 0 0 " +
          themeGet("borderWidths.1")(props) +
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
      opacity: state.isDisabled ? 0.7 : 1,
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
    container: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      color: props.inverted
        ? themeGet("colors.white")
        : themeGet("colors.grey")(props),
      backgroundColor: props.inverted
        ? themeGet("colors.greyDarker")(props)
        : themeGet("colors.white")(props)
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
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
            ? themeGet("colors.primaryDarkest")
            : !state.isFocused && props.inverted
            ? themeGet("colors.primary")(props)
            : themeGet("colors.white")(props)
      }
    }),
    multiValue: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      backgroundColor: props.inverted
        ? themeGet("colors.primaryDark")(props)
        : themeGet("colors.primary")(props),
      color: themeGet("colors.white")(props),
      borderRadius: themeGet("radii.2")(props)
    }),
    multiValueLabel: provided => ({
      ...provided,
      backgroundColor: props.inverted
        ? themeGet("colors.primaryDark")(props)
        : themeGet("colors.primary")(props),
      color: themeGet("colors.white"),
      borderRadius: themeGet("radii.2")(props),
      padding: themeGet("space.2")(props)
    }),
    multiValueRemove: provided => ({
      ...provided,
      backgroundColor: props.inverted
        ? themeGet("colors.primaryDark")(props)
        : themeGet("colors.primary")(props),
      color: themeGet("colors.white")(props),
      borderRadius: themeGet("radii.2")(props),
      "&:hover": {
        backgroundColor: themeGet("colors.primaryDarkest")(props),
        color: themeGet("colors.white")(props)
      }
    }),
    option: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      backgroundColor:
        !state.isFocused && !props.inverted
          ? themeGet("colors.white")(props)
          : state.isFocused && !props.inverted
          ? themeGet("colors.primaryLightest")(props)
          : !state.isFocused && props.inverted
          ? themeGet("colors.greyDarker")(props)
          : themeGet("colors.primaryDark")(props)
    }),
    placeholder: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      color: props.inverted
        ? themeGet("colors.white")(props)
        : themeGet("colors.greyDarkest")(props)
    })
  };
  return (
    <Wrapper inverted={props.inverted} {...props}>
      <ReactSelect
        ref={ref}
        styles={customStyles}
        theme={props.theme}
        data-testid={props.dataTestId}
        {...props}
      />
    </Wrapper>
  );
});

Select.propTypes = {
  /** Points to options object, see example code above */
  options: PropTypes.array,
  /** Styling for dark backgrounds. */
  inverted: PropTypes.bool,
  /** Specifies the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string,
  /** Specifies the system design theme object */
  theme: PropTypes.object
};

Select.defaultProps = {
  theme: systemtheme
};

/** @component */
export default Select;
