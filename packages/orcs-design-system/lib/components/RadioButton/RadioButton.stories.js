import React from "react";
import RadioButton from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "Components/RadioButton",
  parameters: {
    component: RadioButton
  }
};

export const defaultRadioButton = () => (
  <Spacer m="r">
    <RadioButton name="RadioButtons01" label="Default radio" />
    <RadioButton name="RadioButtons01" label="Default radio 02" />
  </Spacer>
);
defaultRadioButton.story = {
  name: "Default"
};

export const checkedRadioButton = () => (
  <RadioButton name="RadioButtons02" label="Default checked radio" checked />
);
checkedRadioButton.story = {
  name: "Checked"
};

export const disabledRadioButton = () => (
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
disabledRadioButton.story = {
  name: "Disabled"
};

export const colouredRadioButton = () => (
  <Spacer m="r">
    <RadioButton
      name="RadioButtons"
      label="Primary colour radio"
      colour="primary"
    />

    <RadioButton
      name="RadioButtons"
      label="Success colour radio"
      colour="success"
    />

    <RadioButton
      name="RadioButtons"
      label="Warning colour radio"
      colour="warning"
    />

    <RadioButton
      name="RadioButtons"
      label="Danger colour radio"
      colour="danger"
    />
  </Spacer>
);
colouredRadioButton.story = {
  name: "Colour"
};

export const invertedRadioButton = () => (
  <Box p="r" bg="greyDarker">
    <RadioButton name="RadioButtons04" label="Inverted radio" colour="white" />
  </Box>
);
invertedRadioButton.story = {
  name: "Inverted"
};
