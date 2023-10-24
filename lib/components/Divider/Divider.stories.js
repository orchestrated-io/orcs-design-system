import React from "react";
import Divider from ".";
import Spacer from "../Spacer";
import Box from "../Box";

export default {
  title: "Components/Divider",
  component: Divider
};

export const defaultDivider = () => (
  <Spacer my="r">
    <Divider />
    <Divider light />
    <Divider thick />
    <Divider light thick />
  </Spacer>
);

export const dashDivider = () => (
  <Spacer my="r">
    <Divider dash />
    <Divider light dash />
    <Divider thick dash />
    <Divider light thick dash />
  </Spacer>
);

export const invertedDivider = () => (
  <Box bg="greyDarkest" p="5">
    <Spacer my="r">
      <Divider inverted />
      <Divider inverted thick />
      <Divider inverted dash />
      <Divider inverted thick dash />
    </Spacer>
  </Box>
);

export const spanGrid = () => <Divider spanGrid />;
