import React from "react";
import DatePicker from ".";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default {
  title: "Components/DatePicker",
  includeStories: []
};

export const singleDate = () => <DatePicker single numberOfMonths={1} />;
export const dateRange = () => <DatePicker range />;
