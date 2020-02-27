import React from "react";
import ProgressBar from ".";
import Layout from "../Layout";

export default {
  title: "Components/ProgressBar",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: ProgressBar
  }
};

export const basic = () => (
  <>
    <ProgressBar containerWidth={100} fillWidth={40} />
    <ProgressBar containerWidth={50} fillWidth={70} />
  </>
);

export const gradient = () => (
  <ProgressBar containerWidth={100} fillWidth={40} />
);

export const onDarkBackground = () => (
  <>
    <Layout paddingDouble childVerticalSpacing backgroundDark>
      <ProgressBar containerWidth={100} fillWidth={40} inverted />
      <ProgressBar containerWidth={100} fillWidth={70} gradient inverted />
    </Layout>
  </>
);
