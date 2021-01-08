import React from "react";
import Loading from ".";
import Spacer from "../Spacer";
import Box from "../Box";
import mdx from "./Loading.mdx";

export default {
  title: "Components/Loading",
  parameters: {
    docs: { page: mdx }
  },
  decorators: [(storyFn) => <Box p="r">{storyFn()}</Box>],
  component: Loading
};

export const defaultLoading = () => <Loading />;
defaultLoading.storyName = "Default";

export const largeLoading = () => <Loading large />;
largeLoading.storyName = "Large";

export const centeredLoading = () => (
  <Spacer p="r">
    <Loading centered />
    <Loading large centered />
  </Spacer>
);
centeredLoading.storyName = "Centered";

export const invertedLoading = () => (
  <Box bg="greyDarkest" p="r">
    <Spacer p="r">
      <Loading inverted />
      <Loading large inverted />
    </Spacer>
  </Box>
);
invertedLoading.storyName = "Inverted";
