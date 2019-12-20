import React from "react";
import ProgressBar from ".";
import Layout from "../Layout";

export default {
  title: "DESIGN SYSTEM|ProgressBar",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: ProgressBar
  }
};

export const basicProgress = () => (
  <>
    <ProgressBar containerWidth={100} fillWidth={40} />
    <ProgressBar containerWidth={50} fillWidth={70} />
  </>
);
basicProgress.story = {
  name: "Basic"
};

export const gradientProgress = () => (
  <ProgressBar containerWidth={100} fillWidth={40} />
);
gradientProgress.story = {
  name: "Gradient"
};

export const invertedProgress = () => (
  <>
    <Layout paddingDouble childVerticalSpacing backgroundDark>
      <ProgressBar containerWidth={100} fillWidth={40} inverted />
      <ProgressBar containerWidth={100} fillWidth={70} gradient inverted />
    </Layout>
  </>
);
invertedProgress.story = {
  name: "Inverted"
};
