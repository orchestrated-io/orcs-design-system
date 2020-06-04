import React from "react";
import Box from "../Box";
import Spacer from "../Spacer";
import Flex from "../Flex";
import Badge from ".";

export default {
  title: "Components/Badge",
  parameters: {
    component: Badge
  }
};

export const defaultBadge = () => <Badge>Default</Badge>;
defaultBadge.story = {
  name: "Default badge"
};

export const colourVariants = () => (
  <>
    <Box p="r">
      <Flex flexWrap="wrap">
        <Spacer m="1">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="primaryLight">Low priority</Badge>
          <Badge variant="primary">Medium priority</Badge>
          <Badge variant="primaryDark">High priority</Badge>
          <Badge variant="secondary">Secondary</Badge>
        </Spacer>
      </Flex>
    </Box>
    <Box p="r" bg="greyDarkest">
      <Flex flexWrap="wrap">
        <Spacer m="1">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="primaryLight">Low priority</Badge>
          <Badge variant="primary">Medium priority</Badge>
          <Badge variant="primaryDark">High priority</Badge>
          <Badge variant="secondary">Secondary</Badge>
        </Spacer>
      </Flex>
    </Box>
  </>
);
colourVariants.story = {
  name: "Colour variants"
};
