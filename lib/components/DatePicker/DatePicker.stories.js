import React, { useState } from "react";
import DatePicker from ".";
import Box from "../Box";
import mdx from "./DatePicker.mdx";

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
  parameters: { docs: { page: mdx } },
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

export const singleDate = () => <SingleDate />;
singleDate.parameters = {
  docs: {
    source: {
      code: `const SingleDate = () => {
      const [date, setDate] = useState(null);
      const [focused, setFocused] = useState(false);

      const onDateChange = selectedDate => {
        setDate(selectedDate);
      };

      const onFocusChange = el => {
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
        `
    }
  }
};

export const dateRange = () => <DateRange />;
dateRange.parameters = {
  docs: {
    source: {
      code: `const DateRange = () => {
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
      };`
    }
  }
};
