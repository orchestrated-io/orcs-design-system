import React from "react";
import DatePicker from ".";
import Box from "../Box";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default {
  title: "Components/DatePicker",
  decorators: [storyFn => <Box height="400px">{storyFn()}</Box>],
  component: DatePicker
};

export const singleDate = () => <DatePicker single numberOfMonths={1} />;
export const dateRange = () => <DatePicker range />;
