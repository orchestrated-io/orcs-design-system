import React from "react";
import Box from "../Box";
import Spacer from "../Spacer";
import Badge from ".";

export default {
  title: "Components/Badge",
  parameters: {
    component: Badge
  }
};

export const defaultBadge = () => <Badge>Default</Badge>;
defaultBadge.story = {
  name: "Default"
};

export const colouredBadge = () => (
  <>
    <Box p="4">
      <Spacer m="1">
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="primaryLight">Low priority</Badge>
        <Badge variant="primary">Medium priority</Badge>
        <Badge variant="primaryDark">High priority</Badge>
      </Spacer>
    </Box>
    <Box p="4" bg="greyDarkest">
      <Spacer m="1">
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="primaryLight">Low priority</Badge>
        <Badge variant="primary">Medium priority</Badge>
        <Badge variant="primaryDark">High priority</Badge>
      </Spacer>
    </Box>
  </>
);
colouredBadge.story = {
  name: "Coloured Badges"
};
