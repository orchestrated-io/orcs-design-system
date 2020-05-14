import React from "react";
import Loading from ".";
import Spacer from "../Spacer";
import Box from "../Box";

export default {
  title: "Components/Loading",
  parameters: {
    component: Loading
  }
};

export const defaultLoading = () => <Loading />;
defaultLoading.story = {
  name: "Default Loading"
};

export const largeLoading = () => <Loading large />;
largeLoading.story = {
  name: "Large"
};

export const centeredLoading = () => (
  <Spacer p="r">
    <Loading centered />
    <Loading large centered />
  </Spacer>
);
centeredLoading.story = {
  name: "Centered"
};

export const invertedLoading = () => (
  <Box bg="greyDarkest" p="r">
    <Spacer p="r">
      <Loading inverted />
      <Loading large inverted />
    </Spacer>
  </Box>
);
invertedLoading.story = {
  name: "Inverted"
};
