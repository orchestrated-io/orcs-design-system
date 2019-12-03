import React from "react";
import Layout from "../Layout";
import Loading from ".";

export default {
  title: "Design System|Loading",
  decorators: [storyFn => <Layout padding>{storyFn()}</Layout>],
  parameters: {
    component: Loading
  }
};

export const basicLoading = () => <Loading />;
basicLoading.story = {
  name: "Basic"
};

export const largeLoading = () => <Loading large />;
largeLoading.story = {
  name: "Large"
};

export const centeredLoading = () => <Loading large centered />;
centeredLoading.story = {
  name: "Centered"
};

export const invertedLoading = () => (
  <>
    <Layout backgroundDark paddingDouble childVerticalSpacing>
      <Loading inverted />
      <Loading large inverted />
    </Layout>
  </>
);
invertedLoading.story = {
  name: "Inverted"
};
