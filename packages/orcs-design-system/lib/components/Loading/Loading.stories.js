import React from "react";
import Layout from "../Layout";
import Loading from ".";

export default {
  title: "Components/Loading",
  parameters: {
    component: Loading
  }
};

export const basicLoading = () => <Loading />;
basicLoading.story = {
  name: "Default"
};

export const large = () => <Loading large />;

export const centered = () => (
  <Layout childVerticalSpacing>
    <Loading centered />
    <Loading large centered />
  </Layout>
);

export const onDarkBackground = () => (
  <Layout backgroundDark padding childVerticalSpacing>
    <Loading inverted />
    <Loading large inverted />
  </Layout>
);
