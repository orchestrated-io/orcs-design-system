import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import 'react-dates/lib/css/_datepicker.css';
import "react-dates/initialize";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import { rgba, darken } from "polished";

const DatePickerContainer = styled.div`
  .SingleDatePickerInput,
  .DateRangePickerInput {
    display: block;
    cursor: text;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: none;
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
    fill: ${colours.greyLight};
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
    font-size: 1.4rem;
    z-index: 1;
    transition: ${variables.defaultTransition};
    background: ${colours.white};
    color: ${colours.greyDarkest};
    height: 40px;
    width: 110px;
    padding: 5px 12px 6px 12px;
    border-radius: ${variables.borderRadius};
    border: 1px solid ${rgba(colours.black, 0.2)};
    &:hover {
      border: 1px solid ${colours.primary};
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 3px ${rgba(colours.primary, 0.4)};
      border: 1px solid ${colours.primary};
    }
  }
  .DateInput_input__focused {
    outline: 0;
    box-shadow: 0 0 0 3px ${rgba(colours.primary, 0.4)};
    border: 1px solid ${colours.primary};
  }
  .DayPickerKeyboardShortcuts_panel {
    color: ${colours.greyDarkest};
  }
  .CalendarDay__default {
    transition: ${variables.defaultTransition};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${colours.primary};
    border: 1px solid ${colours.primary};
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
    border-right: 33px solid ${colours.primary};
    transition: ${variables.defaultTransition};
  }
  .DayPickerKeyboardShortcuts_show__bottomRight:hover:before,
  .DayPickerKeyboardShortcuts_show__topRight:hover:before {
    border-right: 33px solid ${colours.primaryDark};
  }
  .CalendarDay__selected_span,
  .CalendarDay__hovered_span {
    background: ${colours.primaryLightest};
    border: 1px solid ${colours.primaryLightest};
    color: #fff;
  }
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${colours.primaryLight};
    border: 1px solid ${colours.primaryLight};
  }
  .DateInput_fang {
    margin-top: 1px;
  }
`;

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

DatePicker.propTypes = {
  /** Specifies a single date picker */
  single: PropTypes.bool,
  /** Specifies a range date picker */
  range: PropTypes.bool,
  /** Specifies that datepicker is on a dark background */
  inverted: PropTypes.bool
};

/** @component */
export default DatePicker;
