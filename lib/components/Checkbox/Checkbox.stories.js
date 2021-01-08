import React from "react";
import Checkbox from ".";
import Box from "../Box";
import Spacer from "../Spacer";
import mdx from "./Checkbox.mdx";

export default {
  title: "Components/Checkbox",
  parameters: { docs: { page: mdx } },
  component: Checkbox
};

export const basicCheckbox = () => (
  <Checkbox onChange={() => {}} label="Default checkbox" />
);
basicCheckbox.storyName = "Default";

export const colourVariants = () => (
  <Spacer m="3">
    <Checkbox
      onChange={() => {}}
      label="Primary colour checkbox"
      colour="primary"
    />
    <Checkbox
      onChange={() => {}}
      label="Success colour checkbox"
      colour="success"
    />
    <Checkbox
      onChange={() => {}}
      label="Warning colour checkbox"
      colour="warning"
    />
    <Checkbox
      onChange={() => {}}
      label="Danger colour checkbox"
      colour="danger"
    />
  </Spacer>
);

export const disabled = () => (
  <Spacer m="3">
    <Checkbox onChange={() => {}} disabled label="Disabled checkbox" />
    <Checkbox
      onChange={() => {}}
      checked
      disabled
      label="Disabled ticked checkbox"
    />
  </Spacer>
);
export const checked = () => (
  <Checkbox onChange={() => {}} checked label="Ticked checkbox" />
);

export const inverted = () => (
  <Box bg="greyDarker" p="r">
    <Checkbox onChange={() => {}} colour="white" label="Inverted checkbox" />
  </Box>
);
