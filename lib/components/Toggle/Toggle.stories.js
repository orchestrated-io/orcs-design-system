import React from "react";
import Toggle from ".";
import Box from "../Box";
import Spacer from "../Spacer";
import mdx from "./Toggle.mdx";

export default {
  title: "Components/Toggle",
  parameters: { docs: { page: mdx } },
  component: Toggle
};

export const defaultToggle = () => <Toggle id="autosave" label="Auto save" />;
defaultToggle.storyName = "Default";

export const small = () => <Toggle id="autosave2" label="Auto save" small />;

export const inverted = () => (
  <Box p="r" bg="greyDarkest">
    <Spacer my="r">
      <Toggle id="autosave3" label="Auto save" inverted small />
      <Toggle id="autosave4" label="Auto save" inverted />
    </Spacer>
  </Box>
);

export const disabled = () => (
  <>
    <Box p="r">
      <Spacer my="r">
        <Toggle id="autosave5" label="Auto save" small disabled />
        <Toggle id="autosave6" label="Auto save" checked disabled />
      </Spacer>
    </Box>
    <Box p="r" bg="greyDarkest">
      <Spacer my="r">
        <Toggle id="autosave7" label="Auto save" inverted small disabled />
        <Toggle id="autosave8" label="Auto save" checked inverted disabled />
      </Spacer>
    </Box>
  </>
);
