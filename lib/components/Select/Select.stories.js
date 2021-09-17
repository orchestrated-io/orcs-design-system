import Select from ".";
import React, { useState } from "react";
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
    (storyFn) => (
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

export const defaultSelect = () => (
  <Select options={options} label="Select label" inputId="defaultSelect" />
);
defaultSelect.story = {
  name: "Default"
};

export const SpecificHeightSelect = () => (
  <Select height="58px" options={options} />
);
defaultSelect.story = {
  name: "SpecificHeightSelect"
};

export const multiSelect = () => <Select options={options} isMulti />;
multiSelect.story = {
  name: "Multi-select"
};

export const multiSelectWithFixedOptions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate", isFixed: true },
    { value: "strawberry", label: "Strawberry", isFixed: true },
    { value: "vanilla", label: "Vanilla" },
    { value: "hazelnut", label: "Hazelnut" },
    { value: "rocky road", label: "Rocky Road", isDisabled: true }
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected, setSelected] = useState([options[0], options[1]]);

  const onChange = (value, { action, removedValue }) => {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
    }

    setSelected(value);
  };

  return (
    <Select
      options={options}
      value={selected}
      isMulti
      isClearable={false}
      onChange={onChange}
    />
  );
};
multiSelectWithFixedOptions.story = {
  name: "Multi-select-with-fixed-options"
};

export const invertedSelect = () => (
  <Box bg="greyDarkest" width="100%" height="600px" p="r">
    <Spacer my="r">
      <Select options={options} inverted />
      <Select options={options} inverted isMulti />
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
