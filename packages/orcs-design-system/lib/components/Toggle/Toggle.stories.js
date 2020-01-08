import React from "react";
import Toggle from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "Toggle",
  component: Toggle,
  decorators: [
    storyFn => (
      <Layout>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basic = () => <Toggle id="autosave" label="Auto save" />;

export const small = () => <Toggle id="autosave" label="Auto save" small />;

export const onDarkBackground = () => (
  <>
    <Layout padding childVerticalSpacing backgroundDark width="100%">
      <Toggle id="autosave4" label="Auto save" inverted small />

      <Toggle id="autosave2" label="Auto save" inverted />
    </Layout>
  </>
);
