import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../theme";
import variables from "../../variables";
import 'react-dates/lib/css/_datepicker.css';
import "react-dates/initialize";
import { DateRangePicker, SingleDatePicker } from "react-dates";

const DatePickerContainer = styled.div`
  .SingleDatePickerInput__withBorder,
  .DateRangePickerInput__withBorder {
    border: 1px solid ${theme.greyDarker};
    border-radius: 0;
  }
  .DateInput_input__focused {
    border-bottom: 2px solid ${theme.primary};
  }
  .CalendarDay__default {
    transition: ${variables.defaultTransition};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${theme.primary};
    border: 1px solid ${theme.primary};
  }
  .DayPickerKeyboardShortcuts_show__bottomRight:before,
  .DayPickerKeyboardShortcuts_show__topRight:before {
    border-right: 33px solid ${theme.primary};
    transition: ${variables.defaultTransition};
  }
  .DayPickerKeyboardShortcuts_show__bottomRight:hover:before,
  .DayPickerKeyboardShortcuts_show__topRight:hover:before {
    border-right: 33px solid ${theme.primaryDark};
    cursor: help;
  }
  .CalendarDay__selected_span,
  .CalendarDay__hovered_span {
    background: ${theme.primaryLightest};
    border: 1px solid ${theme.primaryLightest};
    color: #fff;
  }
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${theme.primaryLight};
    border: 1px solid ${theme.primaryLight};
  }
`;

const PickDate = styled(SingleDatePicker)``;

const PickRange = styled(DateRangePicker)``;

class DatePicker extends React.Component {
  render() {
    const { single, range, id, label, inverted } = this.props;
    return (
      <DatePickerContainer>
        {label ? (
          <Label inverted={inverted} htmlFor={id}>
            {label}
          </Label>
        ) : null}
        {single ? (
          <PickDate {...this.props} />
        ) : range ? (
          <PickRange {...this.props} />
        ) : null}
      </DatePickerContainer>
    );
  }
}

DatePicker.propTypes = {
  /** Specifies a single date picker */
  single: PropTypes.bool,
  /** Specifies a range date picker */
  range: PropTypes.bool
};

/** @component */
export default DatePicker;
