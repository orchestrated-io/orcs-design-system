import React from "react";
import { DatePicker } from "orcs-design-system";

export default {
  title: "DatePicker",
  component: DatePicker
};

export const Basic = {
  render: () => (
    <DatePicker
      single
      date={date}
      placeholder="Date"
      focused={focused}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      numberOfMonths={1}
      displayFormat="DD/MM/YYYY"
    />
  )
};
