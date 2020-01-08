import React from "react";
import Layout from ".";

export default {
  title: "Layout",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: Layout
  }
};

export const basic = () => (
  <>
    <Layout>
      <p>This is an example of the basic layout box.</p>
    </Layout>
  </>
);

export const border = () => (
  <>
    <Layout padding margin border>
      <p>This is an example of a layout with padding, margin, and border.</p>
    </Layout>
  </>
);

export const background = () => (
  <>
    <Layout padding margin background>
      This is an example of a layout box that has a background.
    </Layout>
  </>
);

export const miscellaneousExamples = () => (
  <>
    <Layout padding margin border background>
      This is an example of a layout box that has both border and background.
    </Layout>

    <Layout padding margin backgroundDark>
      <p style={{ color: "white" }}>
        This is an example of a layout box that has a dark background.
      </p>
    </Layout>

    <Layout paddingHalf marginHalf>
      This is an example of a layout without visible box that has padding and
      margin equal to the half the default spacing.
    </Layout>

    <Layout padding margin>
      This is an example of a layout without visible box that has padding and
      margin equal to the default spacing.
    </Layout>

    <Layout paddingDouble marginDouble>
      This is an example of a layout without visible box that has padding and
      margin equal to double the default spacing.
    </Layout>
  </>
);
