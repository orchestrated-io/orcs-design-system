import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { spacepx, radiuspx } from "../../systemtheme";
import colours from "../../colours";
import { default as ReactSelect } from "react-select";
import { rgba } from "polished";

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

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
const Select = forwardRef((props, ref, inverted) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderColor: state.isSelected
        ? colours.warning
        : state.isFocused
        ? colours.primary
        : null,
      backgroundColor: props.inverted ? colours.greyDarker : colours.white,
      color: props.inverted ? colours.white : colours.greyDarkest
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: !state.isFocused
        ? 0
        : props.inverted
        ? `0 0 0 ${radiuspx.px1} ${rgba(colours.primaryLightest, 0.8)}`
        : `0 0 0 ${radiuspx.px1} ${rgba(colours.primary, 0.4)}`,
      "&:hover": {
        borderColor: colours.primary
      },
      borderColor: state.isFocused ? colours.primary : colours.grey,
      outline: state.isFocused ? colours.primary : colours.grey,
      backgroundColor: props.inverted ? colours.greyDarker : colours.white,
      color: props.inverted ? colours.white : colours.greyDarkest,
      borderRadius: radiuspx.px2
    }),
    clearIndicator: (provided, state) => ({
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
      borderRadius: radiuspx.px2
    }),
    multiValueLabel: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: radiuspx.px2,
      padding: spacepx.px2
    }),
    multiValueRemove: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: radiuspx.px2,
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
    <>
      <Wrapper inverted={inverted}>
        <ReactSelect ref={ref} {...props} styles={customStyles} />
      </Wrapper>
    </>
  );
});

Select.propTypes = {
  /** Points to options object, see example code above */
  options: PropTypes.array,
  /** Styling for dark backgrounds. */
  inverted: PropTypes.bool
};

/** @component */
export default withTheme(Select);
