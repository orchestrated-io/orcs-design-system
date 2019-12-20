import React from "react";
import Toggle from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "DESIGN SYSTEM|Toggle",
  component: Toggle,
  decorators: [
    storyFn => (
      <Layout>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basicToggle = () => <Toggle id="autosave" label="Auto save" />;
basicToggle.story = {
  name: "Basic"
};

export const smallToggle = () => (
  <Toggle id="autosave" label="Auto save" small />
);
smallToggle.story = {
  name: "Small"
};

export const invertedToggle = () => (
  <>
    <Layout padding childVerticalSpacing backgroundDark width="100%">
      <Toggle id="autosave4" label="Auto save" inverted small />

      <Toggle id="autosave2" label="Auto save" inverted />
    </Layout>
  </>
);
invertedToggle.story = {
  name: "Inverted"
};
