import React from "react";
import ProgressBar from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "Components/ProgressBar",
  decorators: [(storyFn) => <Box p="r">{storyFn()}</Box>],
  component: ProgressBar
};

export const defaultProgressBar = () => (
  <Spacer m="r">
    <ProgressBar
      ariaLabel="Percent Completed"
      containerWidth={100}
      fillWidth={40}
    />
    <ProgressBar
      ariaLabel="Percent Completed"
      containerWidth={50}
      fillWidth={70}
    />
  </Spacer>
);
defaultProgressBar.storyName = "Default";

export const gradient = () => (
  <ProgressBar
    ariaLabel="Percent Completed"
    containerWidth={100}
    fillWidth={40}
    gradient
  />
);

export const onDarkBackground = () => (
  <Box bg="greyDarkest" p="r">
    <Spacer m="r">
      <ProgressBar
        ariaLabel="Percent Completed"
        containerWidth={100}
        fillWidth={40}
        inverted
      />
      <ProgressBar
        ariaLabel="Percent Completed"
        containerWidth={100}
        fillWidth={70}
        gradient
        inverted
      />
    </Spacer>
  </Box>
);
