import React from "react";
import Checkbox from ".";
import Box from "../Box";
import Spacer from "../Spacer";

export default {
  title: "Components/Checkbox",
  parameters: {
    component: Checkbox
  }
};

export const basicCheckbox = () => <Checkbox label="Default checkbox" />;

export const colourVariants = () => (
  <Spacer m="3">
    <Checkbox label="Primary colour checkbox" colour="primary" />
    <Checkbox label="Success colour checkbox" colour="success" />
    <Checkbox label="Warning colour checkbox" colour="warning" />
    <Checkbox label="Danger colour checkbox" colour="danger" />
  </Spacer>
);

export const disabled = () => (
  <Spacer m="3">
    <Checkbox disabled label="Disabled checkbox" />
    <Checkbox checked disabled label="Disabled ticked checkbox" />
  </Spacer>
);
export const checked = () => <Checkbox checked label="Ticked checkbox" />;

export const inverted = () => (
  <Box bg="greyDarker" p="r">
    <Checkbox colour="white" label="Inverted checkbox" />
  </Box>
);
