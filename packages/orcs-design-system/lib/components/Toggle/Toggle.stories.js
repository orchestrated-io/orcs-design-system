import React from "react";
import Toggle from ".";
import Box from "../Box";
import Flex from "../Flex";

export default {
  title: "Components/Toggle",
  component: Toggle,
  decorators: [storyFn => <Flex center>{storyFn()}</Flex>]
};

export const basic = () => <Toggle id="autosave" label="Auto save" />;

export const small = () => <Toggle id="autosave2" label="Auto save" small />;

export const onDarkBackground = () => (
  <Box padding={4} bg="greyDarkest" width="100%">
    <Toggle id="autosave3" label="Auto save" inverted small />
    <Toggle id="autosave4" label="Auto save" inverted />
  </Box>
);
