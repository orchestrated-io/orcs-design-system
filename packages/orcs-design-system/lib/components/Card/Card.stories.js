import React from "react";
import Button from "../Button";
import Flex from "../Flex";
import Icon from "../Icon";
import Layout from "../Layout";
import Typography from "../Typography";
import Card from ".";
import StyledLink from "../StyledLink";
import colours from "../../colours";

export default {
  title: "Card",
  decorators: [
    storyFn => (
      <Layout background paddingDouble childVerticalSpacing>
        {storyFn()}
      </Layout>
    )
  ],
  parameters: {
    component: Card
  }
};

export const basic = () => (
  <Card title="Card title" subtitle="Subtitle">
    <Typography.P marginBottom>
      Card content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </Typography.P>
    <StyledLink href="#" bold>
      Learn more
    </StyledLink>
  </Card>
);

export const alternate = () => (
  <Card alternate title="Card title" subtitle="18">
    <Typography.P>
      This is an alternate style card that moves the subtitle to the right of
      the title, rather than underneath it.
    </Typography.P>
  </Card>
);

export const centered = () => (
  <Card center title="Card heading" subtitle="Subtitle">
    <Typography.P>This is an example of a centered card.</Typography.P>
  </Card>
);

export const colouredBorder = () => (
  <>
    <Card title="Blue border card" colour="primary">
      <Typography.P>
        This is an alternate style card that has a coloured border. Colours are
        taken from the defined system colours (eg &quot;primary&quot;).
      </Typography.P>
    </Card>
    <Card title="Yellow border card" colour="warning">
      <Typography.P>
        This is an alternate style card that has a coloured border using the
        &quot;warning&quot; colour.
      </Typography.P>
    </Card>
    <Card title="Red border card" colour="danger">
      <Typography.P>
        This is an alternate style card that has a coloured border using the
        &quot;danger&quot; colour.
      </Typography.P>
    </Card>
    <Card title="Green border card" colour="success">
      <Typography.P>
        This is an alternate style card that has a coloured border using the
        &quot;success&quot; colour.
      </Typography.P>
    </Card>
    <Card title="Grey border card" colour="greyDark">
      <Typography.P>
        This is an alternate style card that has a coloured border using the
        &quot;greyDark&quot; colour.
      </Typography.P>
    </Card>
  </>
);

export const iconInHeading = () => (
  <Card alternate icon={["fas", "map-marker-alt"]} title="Heading with Icon">
    <Typography.P>
      This is an alternate style card that supports a Font Awesome icon in the
      heading.
    </Typography.P>
  </Card>
);

export const fluidWidth = () => (
  <Card fluid title="Full-width card">
    <Typography.P>
      This is an example of a fluid card. It will stretch to 100% width and
      height of its parent container.
    </Typography.P>
  </Card>
);

export const specifiedWidth = () => (
  <Layout childVerticalSpacing childChildHorizontalSpacing>
    <Flex center>
      <Card width="300px" title="300px Card">
        <Typography.P>Card with static width.</Typography.P>
      </Card>
    </Flex>
    <Flex center>
      <Card width="60%" title="60% Card">
        <Typography.P>Card with percentage width.</Typography.P>
      </Card>
    </Flex>
  </Layout>
);

export const changeInValue = () => (
  <>
    <Card
      alternate
      title="3,147 Units"
      changeValue="47 (+1.5%)"
      changeIcon="arrowUp"
    >
      <Typography.P>Card content lorem ipsum dolor sit amet</Typography.P>
    </Card>
    <Card
      alternate
      title="3,147 Units"
      changeValue="47 (-1.5%)"
      changeIcon="arrowDown"
    >
      <Typography.P>Card content lorem ipsum dolor sit amet</Typography.P>
    </Card>
  </>
);

export const complexExample1 = () => (
  <>
    <Card
      alternate
      icon={["fas", "map-marker-alt"]}
      title="Locations"
      subtitle="57"
      colour="primary"
    >
      <Typography.P>
        This is complex example that includes colour, icons and counts.
      </Typography.P>
    </Card>

    <Card
      alternate
      icon={["fas", "address-card"]}
      title="Roles"
      subtitle="31"
      colour="success"
    >
      <Typography.P>
        This is complex example that includes colour, icons and counts.
      </Typography.P>
    </Card>

    <Card
      alternate
      icon={["fas", "user"]}
      title="4,539 People"
      changeValue="No change"
      colour="warning"
    >
      <Typography.P>
        This is complex example that includes colour, icons and counts.
      </Typography.P>
    </Card>

    <Card
      alternate
      icon={["fas", "chart-pie"]}
      title="12 Divisions"
      changeValue="2 (-1%)"
      changeIcon="arrowDown"
      colour="danger"
    >
      <Typography.P>
        This is complex example that includes colour, icons and counts.
      </Typography.P>
    </Card>

    <Card
      alternate
      icon={["fas", "users"]}
      title="289 Teams"
      changeValue="9 (+2%)"
      changeIcon="arrowUp"
      colour="greyDark"
    >
      <Typography.P>
        This is complex example that includes colour, icons and counts.
      </Typography.P>
    </Card>
  </>
);

export const complexExample2 = () => (
  <Layout childVerticalSpacing childChildHorizontalSpacing>
    <Flex justifyAround>
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
);
