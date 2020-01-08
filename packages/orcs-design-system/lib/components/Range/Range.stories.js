import React from "react";
import Range from ".";
import Layout from "../Layout";

export default {
  title: "Range",
  decorators: [storyFn => <Layout padding>{storyFn()}</Layout>],
  parameters: {
    component: Range
  }
};

export const basic = () => <Range min={0} max={20} defaultValue={10} />;

export const onDarkBackground = () => (
  <>
    <Layout backgroundDark paddingDouble>
      <Range min={0} max={20} defaultValue={10} inverted />
    </Layout>
  </>
);
