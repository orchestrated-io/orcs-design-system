import Select from ".";
import React from "react";
import Box from "../Box";

export default {
  title: "Components/Select",
  decorators: [storyFn => <Box height="250px">{storyFn()}</Box>],
  parameters: {
    component: Select
  }
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "hazelnut", label: "Hazelnut" },
  { value: "rocky road", label: "Rocky Road" }
];

export const simpleSelect = () => <Select options={options} />;

export const multiSelect = () => <Select options={options} isMulti />;

export const invertedMultiSelect = () => (
  <>
    <Box bg="greyDarkest" width="100%" height="100%" padding={4}>
      <Select options={options} inverted isMulti />
    </Box>
  </>
);
