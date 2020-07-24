import React from "react";
import DatePicker from ".";
import Box from "../Box";
import mdx from "./DatePicker.mdx";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default {
  title: "Units/DatePicker",
  decorators: [
    storyFn => (
      <Box bg="greyLightest" p="r">
        {storyFn()}
      </Box>
    )
  ],
  parameters: { docs: { page: mdx } },
  component: DatePicker
};

export const singleDate = () => (
  <DatePicker single numberOfMonths={1} displayFormat="DD/MM/YY" />
);
singleDate.parameters = {
  storyshots: { disable: true }
};

export const dateRange = () => <DatePicker range displayFormat="DD/MM/YY" />;

dateRange.parameters = {
  storyshots: { disable: true }
};
