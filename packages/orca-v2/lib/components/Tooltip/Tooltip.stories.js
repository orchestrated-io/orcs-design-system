import React from "react";
import Tooltip from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "DESIGN SYSTEM|Tooltip",
  component: Tooltip,
  decorators: [
    storyFn => (
      <Layout paddingDouble childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basicTooltip = () => (
  <Tooltip>Basic tooltip example description</Tooltip>
);
basicTooltip.story = {
  name: "Basic"
};

export const directionTooltip = () => (
  <>
    <Tooltip direction="top">Top tooltip example description</Tooltip>
    <Tooltip direction="right">Right tooltip example description</Tooltip>
    <Tooltip direction="left">Left tooltip example description</Tooltip>
    <Tooltip direction="bottom">Bottom tooltip example description</Tooltip>
  </>
);
directionTooltip.story = {
  name: "Direction"
};
export const inverted = () => (
  <>
    <Layout paddingDouble backgroundDark width="100%">
      <Tooltip inverted>Inverted example description</Tooltip>
    </Layout>
  </>
);
inverted.story = {
  name: "Inverted"
};
