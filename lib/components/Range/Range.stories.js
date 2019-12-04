import React from "react";
import Range from ".";
import Layout from "../Layout";

export default {
  title: "DESIGN SYSTEM|Range",
  decorators: [storyFn => <Layout padding>{storyFn()}</Layout>],
  parameters: {
    component: Range
  }
};

export const basicRange = () => <Range min={0} max={20} defaultValue={10} />;
basicRange.story = {
  name: "Basic"
};

export const invertedRange = () => (
  <>
    <Layout backgroundDark paddingDouble>
      <Range min={0} max={20} defaultValue={10} inverted />
    </Layout>
  </>
);
invertedRange.story = {
  name: "Inverted"
};
