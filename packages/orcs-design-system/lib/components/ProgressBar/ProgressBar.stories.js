import React from "react";
import ProgressBar from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "Components/ProgressBar",
  parameters: {
    component: ProgressBar
  }
};

export const defaultProgressBar = () => (
  <Spacer m="r">
    <ProgressBar containerWidth={100} fillWidth={40} />
    <ProgressBar containerWidth={50} fillWidth={70} />
  </Spacer>
);
defaultProgressBar.story = {
  name: "Default"
};

export const gradientProgressBar = () => (
  <ProgressBar containerWidth={100} fillWidth={40} />
);
gradientProgressBar.story = {
  name: "Gradient"
};

export const invertedProgressBar = () => (
  <Box bg="greyDarker" p="r">
    <Spacer m="r">
      <ProgressBar containerWidth={100} fillWidth={40} inverted />
      <ProgressBar containerWidth={100} fillWidth={70} gradient inverted />
    </Spacer>
  </Box>
);
invertedProgressBar.story = {
  name: "Inverted"
};
