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

export const defaultBadge = () => [<Badge key="default">Default</Badge>];
defaultBadge.story = {
  name: "Default"
};

export const colour = () => [
  <Layout key="colourVariants" paddingDouble>
    <Badge key="success" colour="success">
      Success
    </Badge>
    <Badge key="warning" colour="warning">
      Warning
    </Badge>
    <Badge key="danger" colour="danger">
      Danger
    </Badge>
    <Badge key="primaryLight" colour="primaryLight">
      Low priority
    </Badge>
    <Badge key="primaryDark" colour="primaryDark">
      Medium priority
    </Badge>
    <Badge key="primaryDarkest" colour="primaryDarkest">
      High priority
    </Badge>
  </Layout>
];
colour.story = {
  name: "Colour"
};

export const inverted = () => [
  <Layout key="inverted" paddingDouble backgroundDark>
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
];
inverted.story = {
  name: "Inverted"
};
