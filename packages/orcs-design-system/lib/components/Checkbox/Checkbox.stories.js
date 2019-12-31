import React from "react";
import Checkbox from ".";
import Layout from "../Layout";

export default {
  title: "Design System|Checkbox",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: Checkbox
  }
};

export const defaultCheckbox = () => <Checkbox label="Default checkbox" />;
defaultCheckbox.story = {
  name: "Default"
};

export const colouredVariants = () => (
  <>
    <Checkbox label="Primary colour checkbox" colour="primary" />
    <Checkbox label="Success colour checkbox" colour="success" />
    <Checkbox label="Warning colour checkbox" colour="warning" />
    <Checkbox label="Danger colour checkbox" colour="danger" />
  </>
);
colouredVariants.story = {
  name: "Colours"
};

export const disabledCheckbox = () => (
  <>
    <Checkbox disabled label="Disabled checkbox" />
    <Checkbox checked disabled label="Disabled ticked checkbox" />
  </>
);
disabledCheckbox.story = {
  name: "Disabled"
};

export const checkedBox = () => <Checkbox checked label="Ticked checkbox" />;
checkedBox.story = {
  name: "Ticked"
};

export const invertedCheckbox = () => (
  <Layout padding backgroundDark>
    <Checkbox colour="white" label="Inverted checkbox" />
  </Layout>
);
invertedCheckbox.story = {
  name: "Inverted"
};
