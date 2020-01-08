import React from "react";
import Badge from ".";
import Layout from "../Layout";

export default {
  title: "Badge",
  parameters: {
    component: Badge
  }
};

export const basic = () => <Badge>Default</Badge>;

export const colour = () => (
  <>
    <Badge colour="success">Success</Badge>
    <Badge colour="warning">Warning</Badge>
    <Badge colour="danger">Danger</Badge>
    <Badge colour="primaryLight">Low priority</Badge>
    <Badge colour="primaryDark">Medium priority</Badge>
    <Badge colour="primaryDarkest">High priority</Badge>
  </>
);

export const onDarkBackground = () => (
  <Layout padding backgroundDark>
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
