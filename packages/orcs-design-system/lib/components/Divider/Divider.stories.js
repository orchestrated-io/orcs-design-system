import React from "react";
import Divider from ".";
import Layout from "../Layout";

export default {
  title: "Design System|Divider",
  decorators: [storyFn => <Layout padding>{storyFn()}</Layout>],
  parameters: {
    component: Divider
  }
};

export const defaultDivider = () => <Divider />;
defaultDivider.story = {
  name: "Default"
};

export const lightDivider = () => <Divider light />;
lightDivider.story = {
  name: "Light"
};

export const thickDivider = () => <Divider thick />;
thickDivider.story = {
  name: "Thick"
};

export const lightThickDivider = () => <Divider light thick />;
lightThickDivider.story = {
  name: "Light and Thick"
};

export const invertedDivider = () => (
  <>
    <Layout backgroundDark padding childVerticalSpacing>
      <Divider inverted />
      <Divider inverted thick />
    </Layout>
  </>
);
invertedDivider.story = {
  name: "Inverted"
};

export const spanGridDivider = () => <Divider spanGrid />;
spanGridDivider.story = {
  name: "Span grid columns"
};
