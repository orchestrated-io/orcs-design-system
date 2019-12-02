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
basicDivider.stories = {
  name: "Basic"
};

export const thickDivider = () => <Divider thick />;
thickDivider.stories = {
  name: "Thick"
};

export const lightDivider = () => <Divider light />;
lightDivider.stories = {
  name: "Light"
};

export const invertedDivider = () => (
  <>
    <Layout backgroundDark paddingDouble childVerticalSpacing>
      <Divider inverted />
    </Layout>
  </>
);
invertedDivider.stories = {
  name: "Inverted"
};

export const fullWidthDivider = () => <Divider spanGrid />;
fullWidthDivider.stories = {
  name: "Full-width"
};
