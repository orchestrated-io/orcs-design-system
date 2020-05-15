import React from "react";
import Range from ".";
import Box from "../Box";

export default {
  title: "Components/Range",
  parameters: {
    component: Range
  }
};

export const defaultRange = () => <Range min={0} max={20} defaultValue={10} />;
defaultRange.story = {
  name: "Default"
};

export const invertedRange = () => (
  <>
    <Box bg="greyDarker" p="r">
      <Range min={0} max={20} defaultValue={10} inverted />
    </Box>
  </>
);
invertedRange.story = {
  name: "Inverted"
};
