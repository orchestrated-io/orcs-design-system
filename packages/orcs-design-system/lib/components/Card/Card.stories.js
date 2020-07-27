import React from "react";
import Box from "../Box";
import StyledLink from "../StyledLink";
import { H3, P } from "../Typography";
import Spacer from "../Spacer";
import Icon from "../Icon";
import Flex from "../Flex";
import Button from "../Button";
import mdx from "./Card.mdx";
import Card from ".";

export default {
  title: "Components/Card",
  parameters: {
    docs: { page: mdx }
  },
  decorators: [
    storyFn => (
      <Box bg="greyLightest" p="r">
        {storyFn()}
      </Box>
    )
  ],
  component: Card
};

export const basicCard = () => (
  <Card title="Card title" subtitle="Subtitle">
    <P marginBottom={4}>
      Card content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </P>
    <StyledLink href="#" bold>
      Learn more
    </StyledLink>
  </Card>
);
basicCard.story = {
  name: "Basic card"
};

export const alternateCard = () => (
  <Card alternate icon={["fas", "building"]} title="Works for" subtitle="18">
    <P>
      This is an alternate style card that supports an icon and moves the
      subtitle to the right of the title, rather than underneath it.
    </P>
  </Card>
);
alternateCard.story = {
  name: "Alternate card"
};

export const colouredCards = () => (
  <Spacer my={4}>
    <Card
      alternate
      icon={["fas", "map-marker-alt"]}
      title="Locations"
      subtitle="57"
      colour="primary"
    >
      <P>
        This is an alternate style card that supports a coloured border, an icon
        and moves the subtitle to the right of the title, rather than underneath
        it.
      </P>
    </Card>
    <Card
      alternate
      icon={["fas", "address-card"]}
      title="Roles"
      subtitle="Here is a subtitle"
      colour="success"
    >
      <P>
        This is an alternate style card that supports a coloured border, an icon
        and moves the subtitle to the right of the title, rather than underneath
        it.
      </P>
    </Card>
    <Card
      alternate
      icon={["fas", "user"]}
      title="4,539 People"
      changeValue="No change"
      colour="warning"
    >
      <P>
        This is an alternate style card that supports a coloured border, an icon
        and shows a delta change.
      </P>
    </Card>
    <Card
      alternate
      icon={["fas", "chart-pie"]}
      title="12 Divisions"
      changeValue="2 (-1%)"
      changeIcon="arrowDown"
      colour="danger"
    >
      <P>
        This is an alternate style card that supports a coloured border, an icon
        and shows a delta change.
      </P>
    </Card>
    <Card
      alternate
      icon={["fas", "users"]}
      title="289 Teams"
      changeValue="9 (+2%)"
      changeIcon="arrowUp"
      colour="greyDark"
    >
      <P>
        This is an alternate style card that supports a coloured border, an icon
        and shows a delta change.
      </P>
    </Card>
  </Spacer>
);
colouredCards.story = {
  name: "Coloured cards"
};

export const complexCard = () => (
  <Flex justifyContent="center">
    <Spacer mx={4}>
      <Card center>
        <Icon icon={["fas", "file"]} size="3x" color="greyLight" />
        <H3>Create new</H3>
        <P>Start with a blank slate and add your own data</P>
        <Button>Start fresh</Button>
      </Card>
      <Card center>
        <Icon icon={["fas", "eye"]} size="3x" color="greyLight" />
        <H3>Explore app</H3>
        <P>Look at pre-populated data to see app in action</P>
        <Button>View example</Button>
      </Card>
    </Spacer>
  </Flex>
);
complexCard.story = {
  name: "Complex card"
};
