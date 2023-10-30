import Select from ".";
import React, { useState } from "react";
import Box from "../Box";
import Spacer from "../Spacer";
import { getOptionByValue } from "../../utils/selectUtil";

export default {
  title: "Components/Select",
  component: Select,
  decorators: [(storyFn) => <Box height="350px">{storyFn()}</Box>]
};

const options = [
  { value: "caramel", label: "Caramel" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const groupedOptions = [
  {
    label: "Fruit",
    options: [
      { value: "apple", label: "Apple" },
      { value: "pear", label: "Pear" },
      { value: "orange", label: "Orange" }
    ]
  },
  {
    label: "Veg",
    options: [
      { value: "carrot", label: "Carrot" },
      { value: "zucchini", label: "Zucchini" },
      { value: "celery", label: "Celery" }
    ]
  }
];

export const defaultSelect = () => (
  <Select options={options} label="Select label" inputId="defaultSelect" />
);
defaultSelect.story = {
  name: "Default"
};

export const invalidSelect = () => (
  <Select
    options={options}
    invalid
    label="Select label"
    inputId="invalidSelect"
  />
);
invalidSelect.story = {
  name: "Invalid"
};

export const mandatotrySelect = () => (
  <Select
    options={options}
    mandatory
    label="Select label"
    inputId="mandatorySelect"
  />
);
mandatotrySelect.story = {
  name: "Mandatory"
};

export const disabledSelect = () => (
  <Select
    options={options}
    label="Select label"
    inputId="defaultSelect"
    isDisabled
  />
);
defaultSelect.story = {
  name: "Disabled"
};

export const SpecificHeightSelect = () => (
  <>
    <Spacer mb="l">
      <Select height="30px" padding="0 8px" options={options} />
      <Select height="56px" padding="4px 12px" options={options} />
    </Spacer>
  </>
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
    { value: "caramel", label: "Caramel", isFixed: true },
    { value: "chocolate", label: "Chocolate", isFixed: true },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla", isDisabled: true }
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
  <Box bg="greyDarkest" width="100%" height="270px" p="r">
    <Spacer mb="l">
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

export const withCreatableSelect = () => (
  <Select options={options} selectType={"creatable"} isMulti />
);
withCreatableSelect.storyName = "With Creatable";

export const withAsyncSelect = () => (
  <Select defaultOptions={options} selectType={"async"} isMulti />
);
withAsyncSelect.storyName = "With Async";

export const withGroupedOptions = () => (
  <Select options={groupedOptions} isMulti menuIsOpen={true} />
);
withGroupedOptions.storyName = "With Grouped Options";
