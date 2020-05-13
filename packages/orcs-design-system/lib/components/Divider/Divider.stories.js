import React from "react";
import Divider from ".";
import Spacer from "../Spacer";

export default {
  title: "Components/Divider",
  includeStories: []
};

export const basicDivider = () => (
  <Spacer my="4">
    <Divider />
    <Divider light />
    <Divider thick />
    <Divider light thick />
  </Spacer>
);

export const invertedDivider = () => (
  <>
    <Divider inverted />
    <Divider inverted thick />
  </>
);

export const spanGrid = () => <Divider spanGrid />;
