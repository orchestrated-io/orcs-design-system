import React from "react";
import Badge from ".";
import Layout from "../Layout";

export default {
  title: "DESIGN SYSTEM|Badge",
  decorators: [
    storyFn => (
      <Layout padding childVerticalSpacing>
        {storyFn()}
      </Layout>
    )
  ],
  parameters: {
    component: Badge
  }
};

export const defaultBadge = () => <Badge>Default</Badge>;
defaultBadge.story = {
  name: "Default"
};

export const colour = () => (
  <Layout paddingDouble>
    <Badge colour="success">Success</Badge>
    <Badge colour="warning">Warning</Badge>
    <Badge colour="danger">Danger</Badge>
    <Badge colour="primaryLight">Low priority</Badge>
    <Badge colour="primaryDark">Medium priority</Badge>
    <Badge colour="primaryDarkest">High priority</Badge>
  </Layout>
);
colour.story = {
  name: "Colour"
};

export const inverted = () => (
  <Layout paddingDouble backgroundDark>
    <Badge inverted>Default</Badge>
    <Badge inverted colour="success">
      Success
    </Badge>
    <Badge inverted colour="warning">
      Warning
    </Badge>
    <Badge inverted colour="danger">
      Danger
    </Badge>
    <Badge inverted colour="primaryLight">
      Low priority
    </Badge>
    <Badge inverted colour="primaryDark">
      Medium priority
    </Badge>
    <Badge inverted colour="primaryDarkest">
      High priority
    </Badge>
  </Layout>
);
inverted.story = {
  name: "Inverted"
};
