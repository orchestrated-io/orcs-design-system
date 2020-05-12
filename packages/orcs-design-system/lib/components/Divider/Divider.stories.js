import React from "react";
import Divider from ".";

export default {
  title: "Components/Divider",
  includeStories: []
};

export const basicDivider = () => (
  <>
    <Divider />
    <Divider light />
    <Divider thick />
    <Divider light thick />
  </>
);

export const invertedDivider = () => (
  <>
    <Divider inverted />
    <Divider inverted thick />
  </>
);

export const spanGrid = () => <Divider spanGrid />;
