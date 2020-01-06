import React from "react";
import DatePicker from ".";
import Layout from "../Layout";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default {
  title: "DatePicker",
  decorators: [storyFn => <Layout height="300px">{storyFn()}</Layout>],
  component: DatePicker
};

export const singleDatePicker = () => <DatePicker single />;
export const rangeDatePicker = () => <DatePicker range />;
