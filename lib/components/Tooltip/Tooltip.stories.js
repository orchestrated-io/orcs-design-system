import React from "react";
import { action } from "@storybook/addon-actions";
import Tooltip from ".";
import Layout from "../Layout";
import Flex from "../Flex";

const styles = {
  textAlign: "center"
};
const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "DESIGN SYSTEM|Tooltip",
  decorators: [
    storyFn => (
      <Center>
        <Layout paddingDouble childVerticalSpacing inlineBlock>
          {storyFn()}
        </Layout>
      </Center>
    )
  ],
  parameters: {
    component: Tooltip
  }
};
export const direction = () => [
  <Tooltip key="tooltip-1" direction="top">
    Top tooltip example description
  </Tooltip>,
  <Tooltip key="tooltip-2" direction="right">
    Right tooltip example description
  </Tooltip>,
  <Tooltip key="tooltip-3" direction="left">
    Left tooltip example description
  </Tooltip>,
  <Tooltip key="tooltip-4" direction="bottom">
    Bottom tooltip example description
  </Tooltip>
];
direction.story = {
  name: "Direction"
};
export const inverted = () => [
  <Flex full center>
    <Layout key="inverted" padding backgroundDark width="400px">
      <Tooltip inverted>Inverted example description</Tooltip>
    </Layout>
  </Flex>
];
inverted.story = {
  name: "Inverted"
};
