import React from "react";
import Tooltip from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "DESIGN SYSTEM|Tooltip",
  decorators: [
    storyFn => (
      <Layout paddingDouble childVerticalSpacing inlineBlock>
        {storyFn()}
      </Layout>
    )
  ],
  parameters: {
    component: Tooltip
  }
};
export const direction = () => (
  <>
    <Tooltip direction="top">Top tooltip example description</Tooltip>
    <Tooltip direction="right">Right tooltip example description</Tooltip>
    <Tooltip direction="left">Left tooltip example description</Tooltip>
    <Tooltip direction="bottom">Bottom tooltip example description</Tooltip>
  </>
);
direction.story = {
  name: "Direction"
};
export const inverted = () => (
  <>
    {" "}
    <Flex full center>
      <Layout key="inverted" padding backgroundDark width="500px">
        <Tooltip inverted>Inverted example description</Tooltip>
      </Layout>
    </Flex>
  </>
);
inverted.story = {
  name: "Inverted"
};
