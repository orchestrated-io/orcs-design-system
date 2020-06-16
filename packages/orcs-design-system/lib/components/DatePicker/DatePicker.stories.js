import React from "react";
import DatePicker from ".";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default {
  title: "Units/DatePicker"
};

export const singleDate = () => (
  <DatePicker single numberOfMonths={1} displayFormat="DD/MM/YY" />
);
export const dateRange = () => <DatePicker range displayFormat="DD/MM/YY" />;
