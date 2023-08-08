import React from "react";
import Divider from ".";
import Spacer from "../Spacer";
import Box from "../Box";

export default {
  title: "Components/Divider",
  component: Divider
};

export const defaultDivider = () => (
  <Spacer my="4">
    <Divider />
    <Divider light />
    <Divider thick />
    <Divider light thick />
  </Spacer>
);

export const invertedDivider = () => (
  <Box bg="greyDarkest" p="5">
    <Divider inverted />
    <Divider inverted thick />
  </Box>
);

export const spanGrid = () => <Divider spanGrid />;
