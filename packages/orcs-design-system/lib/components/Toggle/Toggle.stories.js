import React from "react";
import Toggle from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "Components/Toggle",
  component: Toggle
};

export const defaultToggle = () => <Toggle id="autosave" label="Auto save" />;

export const smallToggle = () => (
  <Toggle id="autosave2" label="Auto save" small />
);

export const invertedToggle = () => (
  <Box p="r" bg="greyDarkest">
    <Spacer my="r">
      <Toggle id="autosave3" label="Auto save" inverted small />
      <Toggle id="autosave4" label="Auto save" inverted />
    </Spacer>
  </Box>
);
