import React from "react";
import RadioButton from ".";
import Layout from "../Layout";

export default {
  title: "DESIGN SYSTEM|RadioButton",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: RadioButton
  }
};

export const defaultRadioButton = () => (
  <>
    <RadioButton name="RadioButtons01" label="Default radio" />
    <RadioButton name="RadioButtons01" label="Default radio 02" />
  </>
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
  <>
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
  </>
);
disabledRadioButton.story = {
  name: "Disabled"
};

export const colourRadioButton = () => (
  <>
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
  </>
);
colourRadioButton.story = {
  name: "Colour"
};

export const invertedRadioButton = () => (
  <>
    <Layout padding backgroundDark>
      <RadioButton
        name="RadioButtons04"
        label="Inverted radio"
        colour="white"
      />
    </Layout>
  </>
);
invertedRadioButton.story = {
  name: "Inverted"
};
