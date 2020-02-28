import React from "react";
import Checkbox from ".";
import Layout from "../Layout";

export default {
  title: "Components/Checkbox",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: Checkbox
  }
};

export const defaultCheckbox = () => <Checkbox label="Default checkbox" />;
defaultCheckbox.story = {
  name: "Default"
};

export const colours = () => (
  <>
    <Checkbox label="Primary colour checkbox" colour="primary" />
    <Checkbox label="Success colour checkbox" colour="success" />
    <Checkbox label="Warning colour checkbox" colour="warning" />
    <Checkbox label="Danger colour checkbox" colour="danger" />
  </>
);

export const disabled = () => (
  <>
    <Checkbox disabled label="Disabled checkbox" />
    <Checkbox checked disabled label="Disabled ticked checkbox" />
  </>
);
export const checked = () => <Checkbox checked label="Ticked checkbox" />;

export const onDarkBackground = () => (
  <Layout padding backgroundDark>
    <Checkbox colour="white" label="Inverted checkbox" />
  </Layout>
);
