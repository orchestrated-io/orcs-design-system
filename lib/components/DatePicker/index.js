import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import omit from "lodash/omit";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

import { DateRangePicker, SingleDatePicker } from "react-dates";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import DateRangePickerShape from "react-dates/lib/shapes/DateRangePickerShape";
import { DateRangePickerPhrases } from "react-dates/lib/defaultPhrases";
import {
  START_DATE,
  END_DATE,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
  NAV_POSITION_TOP
} from "react-dates/lib/constants";

const defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: "Start Date",
  endDateId: END_DATE,
  endDatePlaceholderText: "End Date",
  disabled: false,
  required: false,
  screenReaderInputMessage: "",
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  block: false,
  small: false,
  regular: false,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,

  // navigation related props
  navPosition: NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: () => false,
  isDayHighlighted: () => false,
  displayFormat: "DD/MM/YYYY",
  monthFormat: "MMMM YYYY",
  phrases: DateRangePickerPhrases,

  stateDateWrapper: (date) => date
};

const DatePickerContainer = styled.div`
  .SingleDatePickerInput,
  .DateRangePickerInput {
    display: block;
    cursor: text;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: none;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: 0;
    border-radius: 0;
    background: transparent;
  }
  .SingleDatePickerInput__withBorder,
  .DateRangePickerInput__withBorder {
    border: none;
    border-radius: 0;
  }
  .SingleDatePicker {
    width: ${(props) => (props.width ? props.width : "110px")};
  }
  .DateInput {
    width: ${(props) => (props.width ? props.width : "110px")};
    background: none;
  }
  .DateRangePickerInput_arrow_svg path {
    fill: ${(props) => themeGet("colors.greyLight")(props)};
  }
  .SingleDatePicker_picker,
  .DateRangePicker_picker {
    background: none;
    z-index: ${(props) => (props.zIndex ? props.zIndex : "1")};
  }
  .DateInput_input {
    display: block;
    cursor: text;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: none;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: ${(props) => themeGet("fontSizes.2")(props)};
    font-weight: ${(props) => themeGet("fontWeights.1")(props)};
    z-index: 1;
    transition: ${(props) => themeGet("transition.transitionDefault")(props)};
    background: ${(props) => themeGet("colors.white")(props)};
    color: ${(props) => themeGet("colors.greyDarkest")(props)};
    height: ${(props) => (props.height ? props.height : "40px")};
    width: ${(props) => (props.width ? props.width : "110px")};
    padding: 5px 12px 6px 12px;
    border-radius: ${(props) => themeGet("radii.2")(props)};
    border: 1px solid ${(props) => themeGet("colors.black30")(props)};
    &:hover {
      border: 1px solid ${(props) => themeGet("colors.primary")(props)};
    }
    &:focus {
      outline: 0;
      box-shadow: ${(props) => themeGet("shadows.thinOutline")(props)}
        ${(props) => themeGet("colors.primary30")(props)};
      border: 1px solid ${(props) => themeGet("colors.primary")(props)};
    }
    &::placeholder {
      color: ${(props) => themeGet("colors.grey")(props)};
    }
  }
  .DateInput_input__focused {
    outline: 0;
    box-shadow: ${(props) => themeGet("shadows.thinOutline")(props)}
      ${(props) => themeGet("colors.primary30")(props)};
    border: 1px solid ${(props) => themeGet("colors.primary")(props)};
  }
  .DayPickerKeyboardShortcuts_panel {
    color: ${(props) => themeGet("colors.greyDarkest")(props)};
  }
  .CalendarDay__default {
    transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${(props) => themeGet("colors.primary")(props)};
    border: 1px solid ${(props) => themeGet("colors.primary")(props)};
  }
  .DayPickerKeyboardShortcuts_show__bottomRight {
    border-radius: 0 0 3px 0;
    overflow: hidden;
  }
  .DayPickerKeyboardShortcuts_show__topRight {
    border-radius: 0 3px 0 0;
    overflow: hidden;
  }
  .DayPickerKeyboardShortcuts_show__bottomRight:before,
  .DayPickerKeyboardShortcuts_show__topRight:before {
    border-right: 33px solid ${(props) => themeGet("colors.primary")(props)};
    transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  }
  .DayPickerKeyboardShortcuts_show__bottomRight:hover:before,
  .DayPickerKeyboardShortcuts_show__topRight:hover:before {
    border-right: 33px solid ${(props) => themeGet("colors.primaryDark")(props)};
  }

  .CalendarDay__selected_span,
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:active {
    background: ${(props) => themeGet("colors.primaryLight")(props)};
    border: 1px solid ${(props) => themeGet("colors.primaryLight")(props)};
    color: ${(props) => themeGet("colors.white")(props)};
  }
  /*  .CalendarDay__hovered_span, */
  .CalendarDay__hovered_span:hover,
  .CalendarDay__default:hover {
    background: ${(props) => themeGet("colors.primary")(props)};
    border: 1px double ${(props) => themeGet("colors.primary")(props)};
    color: ${(props) => themeGet("colors.white")(props)};
  }

  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${(props) => themeGet("colors.primaryDarker")(props)};
    border: 1px solid ${(props) => themeGet("colors.primaryDarker")(props)};
  }
  .DateInput_fang {
    margin-top: 1px;
    z-index: ${(props) => (props.zIndex ? props.zIndex + 1 : "2")};
  }
`;

/**
 *
 * Datepicker uses airbnb's react datepicker under the hood. This is just a wrapper to override styles, the only props you need to specify is either single or range. For all functionality and additional required props refer to documentation here: <https://github.com/airbnb/react-dates>
 */

class DatePicker extends React.Component {
  render() {
    const { single, range, width, height, zIndex, ...pickerProps } = this.props;

    return (
      <DatePickerContainer width={width} height={height} zIndex={zIndex}>
        {single ? (
          <SingleDatePicker {...pickerProps} />
        ) : range ? (
          <DateRangePicker {...pickerProps} />
        ) : null}
      </DatePickerContainer>
    );
  }
}

DatePicker.defaultProps = defaultProps;

DatePicker.propTypes = {
  /** Specifies a single date picker */
  single: PropTypes.bool,
  /** Specifies a range date picker */
  range: PropTypes.bool,
  /** For Single DatePicker Date */
  date: momentPropTypes.momentObj,
  /** For Single DatePicker date change */
  onDateChange: PropTypes.func,
  /** For Single DatePicker input placeholder */
  placeholder: PropTypes.string,
  /** For Range DatePicker Start Date */
  startDate: momentPropTypes.momentObj,
  /** For Range DatePicker End Date */
  endDate: momentPropTypes.momentObj,
  /** For Range DatePicker dates change */
  onDatesChange: PropTypes.func,
  /** For focus state change */
  onFocusChange: PropTypes.func,
  /** Input focused state */
  focusedInput: PropTypes.bool,
  /** Date format */
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** For specifying width of input (specify units) */
  width: PropTypes.string,
  /** For specifying height of input (specify units) */
  height: PropTypes.string,

  /**
   * Should not be visible
   * @ignore
   */
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,

  ...omit(DateRangePickerShape, [
    "startDate",
    "endDate",
    "onDatesChange",
    "focusedInput",
    "onFocusChange"
  ])
};

/**
 * Test description
 */
export default DatePicker;
