import React from "react";
import Button from "../Button";
import Flex from "../Flex";
import Icon from "../Icon";
import Layout from "../Layout";
import Typography from "../Typography";
import Card from ".";
import colours from "../../colours";

export default {
  title: "Design System|Card",
  parameters: {
    component: Card
  }
};

export const basic = () => (
  <Card title="Card title" subtitle="Subtitle here">
    <Typography.P>This is the basic card layout.</Typography.P>
  </Card>
);
basic.story = {
  name: "Basic"
};

export const alternate = () => (
  <Card alternate title="Card title" subtitle="18">
    <Typography.P>
      This is an alternate style card that moves the subtitle to the right of
      the title, rather than underneath it.
    </Typography.P>
  </Card>
);
alternate.story = {
  name: "Alternate"
};

export const centered = () => (
  <Card center title="Card heading" subtitle="Subtitle">
    <Typography.P>This is an example of a centered card.</Typography.P>
  </Card>
);
centered.story = {
  name: "Centered"
};

export const colour = () => (
  <>
    <Layout childVerticalSpacing>
      <Card alternate title="Card title" subtitle="18" colour="primary">
        <Typography.P>
          This is an alternate style card that has a coloured border. Colours
          are taken from the defined system colours (eg &quot;primary&quot;).
        </Typography.P>
      </Card>
      <Card alternate title="Card title" subtitle="18" colour="warning">
        <Typography.P>
          This is an alternate style card that has a coloured border using the
          &quot;warning&quot; colour. Colours are taken from the defined system
          colours (eg &quot;primary&quot;).
        </Typography.P>
      </Card>
      <Card alternate title="Card title" subtitle="18" colour="danger">
        <Typography.P>
          This is an alternate style card that has a coloured border using the
          &quot;danger&quot; colour. Colours are taken from the defined system
          colours (eg &quot;primary&quot;).
        </Typography.P>
      </Card>
    </Layout>
  </>
);
colour.story = {
  name: "Coloured Border"
};

export const fluid = () => (
  <Card fluid title="Full-width card heading" subtitle="Sub-heading">
    <Typography.P>
      This is an example of a fluid card. It will stretch to 100% width and
      height of its parent container.
    </Typography.P>
  </Card>
);
fluid.story = {
  name: "Fluid"
};

export const icon = () => (
  <Card
    alternate
    icon={["fas", "map-marker-alt"]}
    title="Heading with Icon"
    subtitle="Sub-heading"
  >
    <Typography.P>
      This is an alternate style card that supports a Font Awesome icon in the
      heading.
    </Typography.P>
  </Card>
);
icon.story = {
  name: "Icon"
};

export const specifyWidth = () => (
  <>
    <Flex justifyBetween>
      <Card width="100px" title="Small Card" subtitle="Subtitle">
        <Typography.P>Small card with 100px width.</Typography.P>
      </Card>
      <Card width="20%" title="20% Card" subtitle="Subtitle">
        <Typography.P>Card with percentage width.</Typography.P>
      </Card>
      <Card
        width="calc(70% - 100px)"
        title="Calculated width"
        subtitle="Subtitle"
      >
        <Typography.P>Card with calculated width.</Typography.P>
      </Card>
    </Flex>
    <Layout padding>
      <Flex justifyBetween>
        <Card width="calc(50% - 30px)" center>
          <Layout childVerticalSpacing>
            <Icon icon={["fas", "file"]} size="3x" color={colours.greyLight} />
            <Typography.H1 center>Create new</Typography.H1>
            <Typography.P center>
              Start with a blank slate and add your own data
            </Typography.P>
            <Button>Start fresh</Button>
          </Layout>
        </Card>
        <Card width="calc(50% - 30px)" center>
          <Layout childVerticalSpacing>
            <Icon icon={["fas", "eye"]} size="3x" color={colours.greyLight} />
            <Typography.H1 center>Explore app</Typography.H1>
            <Typography.P center>
              Look at pre-populated data to see app in action
            </Typography.P>
            <Button>View example</Button>
          </Layout>
        </Card>
      </Flex>
    </Layout>
  </>
);
specifyWidth.story = {
  name: "Width"
};

export const changeInValue = () => (
  <Card
    alternate
    title="31416 Units"
    changeValue="9 (+2 pies)"
    changeIcon="arrowUp"
  >
    <Typography.P>Lorem ipsum</Typography.P>
  </Card>
);
changeInValue.story = {
  name: "Change in Value"
};
