import React from "react";
import ProgressBar from ".";
import Box from "../Box";
import Spacer from "../Spacer";
import mdx from "./ProgressBar.mdx";

export default {
  title: "Components/ProgressBar",
  parameters: {
    docs: { page: mdx }
  },
  decorators: [storyFn => <Box p="r">{storyFn()}</Box>],
  component: ProgressBar
};

export const defaultProgressBar = () => (
  <Spacer m="r">
    <ProgressBar containerWidth={100} fillWidth={40} />
    <ProgressBar containerWidth={50} fillWidth={70} />
  </Spacer>
);
defaultProgressBar.storyName = "Default";

export const gradient = () => (
  <ProgressBar containerWidth={100} fillWidth={40} gradient />
);

export const onDarkBackground = () => (
  <Box bg="greyDarkest" p="r">
    <Spacer m="r">
      <ProgressBar containerWidth={100} fillWidth={40} inverted />
      <ProgressBar containerWidth={100} fillWidth={70} gradient inverted />
    </Spacer>
  </Box>
);
