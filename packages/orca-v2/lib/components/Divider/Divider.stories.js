import React from "react";
import Divider from ".";
import Layout from "../Layout";

export default {
  title: "Design System|Divider",
  decorators: [storyFn => <Layout paddingDouble>{storyFn()}</Layout>],
  parameters: {
    component: Divider
  }
};

export const basicDivider = () => <Divider />;
basicDivider.story = {
  name: "Basic"
};

export const thickDivider = () => <Divider thick />;
thickDivider.story = {
  name: "Thick"
};

export const lightDivider = () => <Divider light />;
lightDivider.story = {
  name: "Light"
};

export const invertedDivider = () => (
  <>
    <Layout backgroundDark paddingDouble childVerticalSpacing>
      <Divider inverted />
    </Layout>
  </>
);
invertedDivider.story = {
  name: "Inverted"
};

export const fullWidthDivider = () => <Divider spanGrid />;
fullWidthDivider.story = {
  name: "Full-width"
};
