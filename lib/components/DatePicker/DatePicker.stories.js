import React, { useState } from "react";
import DatePicker from ".";
import Box from "../Box";
import Spacer from "../Spacer";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default {
  title: "Components/DatePicker",
  decorators: [
    (storyFn) => (
      <Box bg="greyLightest" height="400px" p="r">
        {storyFn()}
      </Box>
    )
  ],
  component: DatePicker
};

const SingleDate = () => {
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(false);

  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const onFocusChange = (el) => {
    setFocused(el.focused);
  };

  return (
    <DatePicker
      single
      date={date}
      placeholder="Date"
      focused={focused}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      numberOfMonths={1}
      displayFormat="DD/MM/YY"
    />
  );
};

const InvalidRequiredDate = () => {
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(false);

  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const onFocusChange = (el) => {
    setFocused(el.focused);
  };

  return (
    <>
      <DatePicker
        id="invalid date"
        single
        label="Project start date - date required"
        required
        date={date}
        invalid
        placeholder="Date"
        focused={focused}
        onDateChange={onDateChange}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        displayFormat="DD/MM/YY"
      />
    </>
  );
};

const DateRange = () => {
  const [dates, setDates] = useState({});
  const [focused, setFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setDates({
      startDate,
      endDate
    });
  };

  return (
    <DatePicker
      range
      startDate={dates.startDate}
      endDate={dates.endDate}
      onDatesChange={onDatesChange}
      focusedInput={focused}
      onFocusChange={setFocused}
      displayFormat="DD/MM/YY"
    />
  );
};

const ShowClearDates = () => {
  const [date, setDate] = useState(null);
  const [dates, setDates] = useState({});
  const [focused1, setFocused1] = useState(null);
  const [focused2, setFocused2] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setDates({
      startDate,
      endDate
    });
  };

  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const onFocusChange = (el) => {
    setFocused1(el.focused);
    setFocused2(el.focused);
  };

  return (
    <Spacer mb="l">
      <DatePicker
        single
        showClearDate
        date={date}
        placeholder="Date"
        focused={focused1}
        onDateChange={onDateChange}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        displayFormat="DD/MM/YY"
      />
      <DatePicker
        range
        showClearDates
        startDate={dates.startDate}
        endDate={dates.endDate}
        onDatesChange={onDatesChange}
        focusedInput={focused2}
        onFocusChange={setFocused2}
        displayFormat="DD/MM/YY"
      />
    </Spacer>
  );
};

export const singleDate = () => <SingleDate />;

export const invalidRequiredDate = () => <InvalidRequiredDate />;

export const dateRange = () => <DateRange />;

export const showClearDates = () => <ShowClearDates />;
