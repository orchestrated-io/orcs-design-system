import React from "react";
import Tooltip from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    storyFn => (
      <Layout paddingDouble childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basic = () => <Tooltip>Basic tooltip example description</Tooltip>;

export const direction = () => (
  <>
    <Tooltip direction="top">Top tooltip example description</Tooltip>
    <Tooltip direction="right">Right tooltip example description</Tooltip>
    <Tooltip direction="left">Left tooltip example description</Tooltip>
    <Tooltip direction="bottom">Bottom tooltip example description</Tooltip>
  </>
);

export const onDarkBackground = () => (
  <>
    <Layout paddingDouble backgroundDark width="100%">
      <Tooltip inverted>Inverted example description</Tooltip>
    </Layout>
  </>
);
