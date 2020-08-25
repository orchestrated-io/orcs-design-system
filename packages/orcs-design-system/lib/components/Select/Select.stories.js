import Select from ".";
import React from "react";
import Box from "../Box";
import Spacer from "../Spacer";
import { getOptionByValue } from "../../utils/selectUtil";
import mdx from "./Select.mdx";

export default {
  title: "Components/Select",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Select,
  decorators: [
    storyFn => (
      <Box p="r" height="250px">
        {storyFn()}
      </Box>
    )
  ]
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "hazelnut", label: "Hazelnut" },
  { value: "rocky road", label: "Rocky Road" }
];

export const defaultSelect = () => <Select options={options} />;
defaultSelect.story = {
  name: "Default"
};

export const multiSelect = () => <Select options={options} isMulti />;
multiSelect.story = {
  name: "Multi-select"
};

export const invertedSelect = () => (
  <Box bg="greyDarkest" width="100%" height="800px" p="r">
    <Spacer my="r">
      <Select options={options} inverted />
      <Select options={options} inverted isMulti menuIsOpen />
    </Spacer>
  </Box>
);
invertedSelect.story = {
  name: "Inverted"
};

export const withDataIdSelect = () => (
  <Select options={options} data-testid="test-this-component" />
);
withDataIdSelect.story = {
  name: "With Data ID"
};

export const withSelectedValueSelect = () => (
  <Select
    options={options}
    defaultValue={getOptionByValue(options, "chocolate")}
  />
);
withSelectedValueSelect.storyName = "With Selected Value";
