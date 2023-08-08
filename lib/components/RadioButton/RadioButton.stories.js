import React from "react";
import RadioButton from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "Components/RadioButton",
  component: RadioButton
};

export const defaultRadioButton = () => (
  <Spacer m="r">
    <RadioButton name="RadioButtons01" label="Default radio" />
    <RadioButton name="RadioButtons01" label="Default radio 02" />
  </Spacer>
);
defaultRadioButton.storyName = "Default";

export const checked = () => (
  <RadioButton name="RadioButtons02" label="Default checked radio" checked />
);

export const disabled = () => (
  <Spacer m="r">
    <RadioButton
      name="RadioButtons03"
      label="Disabled unchecked radio"
      disabled
    />

    <RadioButton
      name="RadioButtons03"
      label="Disabled checked radio"
      disabled
      checked
    />
  </Spacer>
);

export const colour = () => (
  <Spacer m="r">
    <RadioButton
      name="RadioButtons"
      label="Primary colour radio"
      variant="primary"
    />

    <RadioButton
      name="RadioButtons"
      label="Success colour radio"
      variant="success"
    />

    <RadioButton
      name="RadioButtons"
      label="Warning colour radio"
      variant="warning"
    />

    <RadioButton
      name="RadioButtons"
      label="Danger colour radio"
      variant="danger"
    />
  </Spacer>
);

export const inverted = () => (
  <Box p="r" bg="greyDarker">
    <RadioButton name="RadioButtons04" label="Inverted radio" variant="white" />
  </Box>
);
