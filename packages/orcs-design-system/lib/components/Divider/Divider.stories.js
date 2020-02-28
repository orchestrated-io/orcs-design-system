import React from "react";
import Divider from ".";
import Layout from "../Layout";

export default {
  title: "Components/Divider",
  decorators: [storyFn => <Layout padding>{storyFn()}</Layout>],
  parameters: {
    component: Divider
  }
};

export const defaultDivider = () => <Divider />;
defaultDivider.story = {
  name: "Default"
};

export const light = () => <Divider light />;

export const thick = () => <Divider thick />;

export const lightAndThick = () => <Divider light thick />;

export const onDarkBackground = () => (
  <>
    <Layout backgroundDark padding childVerticalSpacing>
      <Divider inverted />
      <Divider inverted thick />
    </Layout>
  </>
);

export const spanGridColumns = () => <Divider spanGrid />;
