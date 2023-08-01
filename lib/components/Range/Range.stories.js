import React from "react";
import Range from ".";
import Box from "../Box";
import mdx from "./Range.mdx";

export default {
  title: "Components/Range",
  parameters: {
    docs: { page: mdx }
  },
  component: Range
};

export const defaultRange = () => (
  <Range min={0} max={20} defaultValue={10} ariaLabel="Default" />
);
defaultRange.storyName = "Default";

export const inverted = () => (
  <>
    <Box bg="greyDarker" p="r">
      <Range min={0} max={20} defaultValue={10} ariaLabel="Inverted" inverted />
    </Box>
  </>
);
