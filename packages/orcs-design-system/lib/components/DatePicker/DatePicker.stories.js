import React from "react";
import DatePicker from ".";
import Layout from "../Layout";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default {
  title: "DatePicker",
  decorators: [storyFn => <Layout height="400px">{storyFn()}</Layout>],
  component: DatePicker
};

export const singleDate = () => <DatePicker single />;
export const dateRange = () => <DatePicker range />;
export const withDarkBackground = () => (
  <Layout paddingDouble height="100%" backgroundDark childVerticalSpacing>
    <DatePicker single inverted />
    <DatePicker range inverted />
  </Layout>
);
