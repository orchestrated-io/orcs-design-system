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
  .DateInput {
    width: auto;
    background: none;
  }
  .DateRangePickerInput_arrow_svg path {
    fill: ${themeGet("colors.greyLight")};
  }
  .SingleDatePicker_picker,
  .DateRangePicker_picker {
    background: none;
  }
  .DateInput_input {
    display: block;
    cursor: text;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: none;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    z-index: 1;
    transition: ${themeGet("transition.transitionDefault")};
    background: ${themeGet("colors.white")};
    color: ${themeGet("colors.greyDarkest")};
    height: 40px;
    width: 110px;
    padding: 5px 12px 6px 12px;
    border-radius: ${themeGet("radii.2")};
    border: 1px solid ${themeGet("colors.black30")};
    &:hover {
      border: 1px solid ${themeGet("colors.primary")};
    }
    &:focus {
      outline: 0;
      box-shadow: ${themeGet("shadows.thinOutline")}
        ${themeGet("colors.primary30")};
      border: 1px solid ${themeGet("colors.primary")};
    }
  }
  .DateInput_input__focused {
    outline: 0;
    box-shadow: ${themeGet("shadows.thinOutline")}
      ${themeGet("colors.primary30")};
    border: 1px solid ${themeGet("colors.primary")};
  }
  .DayPickerKeyboardShortcuts_panel {
    color: ${themeGet("colors.greyDarkest")};
  }
  .CalendarDay__default {
    transition: ${themeGet("transition.transitionDefault")};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${themeGet("colors.primary")};
    border: 1px solid ${themeGet("colors.primary")};
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
    border-right: 33px solid ${themeGet("colors.primary")};
    transition: ${themeGet("transition.transitionDefault")};
  }
  .DayPickerKeyboardShortcuts_show__bottomRight:hover:before,
  .DayPickerKeyboardShortcuts_show__topRight:hover:before {
    border-right: 33px solid ${themeGet("colors.primaryDark")};
  }

  .CalendarDay__selected_span,
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:active {
    background: ${themeGet("colors.primaryLight")};
    border: 1px solid ${themeGet("colors.primaryLight")};
    color: ${themeGet("colors.white")};
  }
  /*  .CalendarDay__hovered_span, */
  .CalendarDay__hovered_span:hover,
  .CalendarDay__default:hover {
    background: ${themeGet("colors.primary")};
    border: 1px double ${themeGet("colors.primary")};
    color: ${themeGet("colors.white")};
  }

  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${themeGet("colors.primaryDarker")};
    border: 1px solid ${themeGet("colors.primaryDarker")};
  }
  .DateInput_fang {
    margin-top: 1px;
  }
`;

/**
 *
 * Datepicker uses airbnb's react datepicker under the hood. This is just a wrapper to override styles, the only props you need to specify is either single or range. For all functionality and additional required props refer to documentation here: <https://github.com/airbnb/react-dates>
 */

class DatePicker extends React.Component {
  render() {
    const { single, range, ...pickerProps } = this.props;

    return (
      <DatePickerContainer>
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
