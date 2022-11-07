import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { default as ReactSelect } from "react-select";
import { default as ReactCreateableSelect } from "react-select/creatable";
import { space, layout, compose } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { themeGet } from "@styled-system/theme-get";

const SelectStyles = compose(space, layout);

const Wrapper = styled("div")
  .withConfig({ shouldForwardProp })
  .attrs((props) => ({
    "data-testid": props["data-testid"] ? props["data-testid"] : null
  }))(
  css({
    display: "inline-block",
    width: "100%"
  }),
  SelectStyles
);

const Label = styled("label")
  .withConfig({ shouldForwardProp })
  .attrs((props) => ({
    for: props.id
  }))((props) =>
  css({
    display: "block",
    color: props.inverted
      ? themeGet("colors.white")(props)
      : themeGet("colors.greyDarkest")(props),
    fontSize: themeGet("fontSizes.1")(props),
    fontWeight: props.bold
      ? themeGet("fontWeights.2")(props)
      : themeGet("fontWeights.1")(props),
    mb: "xs"
  })
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
  const theme = useTheme();
  const { updateStyles = (s) => s } = props;

  const customStyles = updateStyles({
    menu: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      backgroundColor: props.inverted
        ? themeGet("colors.greyDarker")({ theme })
        : themeGet("colors.white")({ theme }),
      color: props.inverted
        ? themeGet("colors.greyLighter")
        : themeGet("colors.greyDarkest")({ theme }),
      fontSize: themeGet("fontSizes.1")({ theme }),
      border: props.inverted
        ? themeGet("borderWidths.1")({ theme }) +
          " solid " +
          themeGet("colors.primaryLight")({ theme })
        : themeGet("borderWidths.1")({ theme }) +
          " solid " +
          themeGet("colors.primary")({ theme }),
      borderRadius: themeGet("radii.2")({ theme }),
      marginBottom: "0",
      marginTop: themeGet("space.xs")({ theme }),
      overflow: "hidden",
      zIndex: 12
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: "0",
      overflow: "auto",
      color: props.inverted
        ? themeGet("colors.greyLightest")({ theme })
        : themeGet("colors.greyDarkest")({ theme })
    }),
    control: (provided, state) => ({
      ...provided,
      minHeight: props.height ? props.height : "38px",
      boxShadow: "none",
      opacity: state.isDisabled ? 0.7 : 1,
      "&:hover": {
        borderColor: themeGet("colors.primary")({ theme })
      },
      borderColor: state.isFocused
        ? themeGet("colors.primary")({ theme })
        : props.inverted
        ? themeGet("colors.white30")({ theme })
        : themeGet("colors.black30")({ theme }),
      backgroundColor: props.inverted
        ? themeGet("colors.greyDarker")({ theme })
        : themeGet("colors.white")({ theme }),
      color: props.inverted
        ? themeGet("colors.greyLighter")({ theme })
        : themeGet("colors.greyDarkest")({ theme }),
      borderRadius: themeGet("radii.2")({ theme }),
      fontSize: themeGet("fontSizes.2")({ theme })
    }),
    container: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      color: props.inverted
        ? themeGet("colors.greyLighter")({ theme })
        : themeGet("colors.grey")({ theme }),
      fontSize: themeGet("fontSizes.1")({ theme })
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: props.padding ? props.padding : "2px 4px"
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      padding: themeGet("space.xxs")({ theme }),
      color:
        !state.isFocused && !props.inverted
          ? themeGet("colors.greyDark")({ theme })
          : state.isFocused && !props.inverted
          ? themeGet("colors.primary")({ theme })
          : !state.isFocused && props.inverted
          ? themeGet("colors.white")({ theme })
          : themeGet("colors.primaryLight")({ theme }),
      "&:hover": {
        color: themeGet("colors.danger")({ theme })
      }
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      padding: themeGet("space.xxs")({ theme }),
      color:
        !state.isFocused && !props.inverted
          ? themeGet("colors.greyDark")({ theme })
          : state.isFocused && !props.inverted
          ? themeGet("colors.primary")({ theme })
          : !state.isFocused && props.inverted
          ? themeGet("colors.white")({ theme })
          : themeGet("colors.primaryLight")({ theme }),
      "&:hover": {
        color:
          !state.isFocused && !props.inverted
            ? themeGet("colors.primary")({ theme })
            : state.isFocused && !props.inverted
            ? themeGet("colors.primaryDarkest")({ theme })
            : !state.isFocused && props.inverted
            ? themeGet("colors.primary")({ theme })
            : themeGet("colors.white")({ theme })
      }
    }),
    groupHeading: (provided) => ({
      ...provided,
      textTransform: "none",
      fontSize: themeGet("fontSizes.0")({ theme }),
      color: themeGet("colors.grey")({ theme })
    }),
    multiValue: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      backgroundColor: "transparent",
      color: themeGet("colors.white")({ theme }),
      alignItems: "center",
      padding: "0 !important",
      fontSize: themeGet("fontSizes.1")({ theme }),
      wordWrap: "break-word"
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      backgroundColor: themeGet("colors.primary")({ theme }),
      color: themeGet("colors.white")({ theme }),
      padding: state.data.isFixed
        ? "4px 10px 5px 10px !important"
        : "4px 8px 5px 10px !important",
      fontSize: "1.3rem",
      fontWeight: themeGet("fontWeights.2")({ theme }),
      wordWrap: "break-word",
      whiteSpace: "break-spaces",
      borderRadius: state.data.isFixed ? "15px" : "15px 0 0 15px"
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      backgroundColor: themeGet("colors.primary")({ theme }),
      color: themeGet("colors.white")({ theme }),
      borderLeft: `solid 1px ${themeGet("colors.primaryDark")({ theme })}`,
      padding: "6.5px 6px 6.5px 5px",
      display: state.data.isFixed ? "none" : provided.display,
      cursor: "pointer",
      borderRadius: "0 15px 15px 0",
      transition: themeGet("transition.transitionDefault")({ theme }),
      "&:hover": {
        backgroundColor: themeGet("colors.primaryDark")({ theme }),
        color: themeGet("colors.white")({ theme })
      }
    }),
    option: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      backgroundColor:
        !state.isFocused && !props.inverted
          ? themeGet("colors.white")({ theme })
          : state.isFocused && !props.inverted
          ? themeGet("colors.primaryLightest")({ theme })
          : !state.isFocused && props.inverted
          ? themeGet("colors.greyDarker")({ theme })
          : themeGet("colors.primaryDark")({ theme }),
      fontSize: themeGet("fontSizes.1")({ theme }),
      whiteSpace: "break-spaces"
    }),
    placeholder: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
      color: props.inverted
        ? themeGet("colors.greyLightest")({ theme })
        : themeGet("colors.greyDarkest")({ theme }),
      fontSize: themeGet("fontSizes.1")({ theme })
    })
  });

  const component = (
    <Wrapper
      inverted={props.inverted}
      data-testid={props["data-testid"]}
      {...SelectStyles}
    >
      {props.label && (
        <Label
          inverted={props.inverted}
          bold={props.bold}
          htmlFor={props.inputId}
        >
          {props.label}
        </Label>
      )}
      {props.selectType === "createable" ? (
        <ReactCreateableSelect
          ref={ref}
          styles={customStyles}
          theme={theme}
          inputId={props.inputId}
          inverted={props.inverted}
          isMulti={props.isMulti}
          classNamePrefix={props.classNamePrefix}
          onChange={props.onChange}
          {...props}
        />
      ) : (
        <ReactSelect
          ref={ref}
          styles={customStyles}
          theme={theme}
          inputId={props.inputId}
          inverted={props.inverted}
          isMulti={props.isMulti}
          classNamePrefix={props.classNamePrefix}
          onChange={props.onChange}
          {...props}
        />
      )}
    </Wrapper>
  );

  return props.theme ? (
    <ThemeProvider theme={props.theme}>{component}</ThemeProvider>
  ) : (
    component
  );
});

Select.propTypes = {
  /** Points to options object, see example code above */
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /** Specifies the label for the `Select` */
  label: PropTypes.string,
  /** Makes label bold */
  bold: PropTypes.bool,
  /** Specifies the ID for the rendered Select box. If you use the label prop label will automatically point to this ID. */
  inputId: PropTypes.string,
  /** Specifies the height of the select box control, make sure to include the unit, e.g. px */
  height: PropTypes.string,
  /** Specifies the padding of the value showed in the select box control, make sure to include the unit, e.g. px */
  padding: PropTypes.string,
  /** Specifies if the `Select` component is multi-select. */
  isMulti: PropTypes.bool,
  /** Styling for dark backgrounds. */
  inverted: PropTypes.bool,
  /** Specifies the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string,
  /** Specifies prefix for the `#class` applied to the `Select` structures */
  classNamePrefix: PropTypes.string,
  /** Specifies `data-testid` for testing */
  "data-testid": PropTypes.string,
  /** Specifies `onChange` function for the input */
  onChange: PropTypes.func,
  /** Specifies the system design theme object */
  theme: PropTypes.object,
  /** Specify if you want react-select createable option */
  selectType: PropTypes.oneOf(["default", "createable"]),
  /** Specify if you want to overwrite existing customStyles */
  updateStyles: PropTypes.func
};

Select.defaultProps = {
  selectType: "default"
};

/** @component */
export default Select;
