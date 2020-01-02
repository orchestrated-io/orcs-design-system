import React from "react";
import Layout from "../Layout";
import Loading from ".";

export default {
  title: "Design System|Loading",
  parameters: {
    component: Loading
  }
};

export const basicLoading = () => <Loading />;
basicLoading.story = {
  name: "Default"
};

export const largeLoading = () => <Loading large />;
largeLoading.story = {
  name: "Large"
};

export const centeredLoading = () => (
  <Layout childVerticalSpacing>
    <Loading centered />
    <Loading large centered />
  </Layout>
);
centeredLoading.story = {
  name: "Centered"
};

export const invertedLoading = () => (
  <Layout backgroundDark padding childVerticalSpacing>
    <Loading inverted />
    <Loading large inverted />
  </Layout>
);
invertedLoading.story = {
  name: "Inverted"
};
