import React from "react";
import Tooltip from ".";
import Spacer from "../Spacer";
import Flex from "../Flex";
import Box from "../Box";

export default {
  title: "Units/Tooltip",
  component: Tooltip
};

export const defaultTooltip = () => (
  <Box my="5">
    <Flex justifyContent="center">
      <Tooltip>This tooltip helps explain stuff.</Tooltip>
    </Flex>
  </Box>
);
defaultTooltip.story = {
  name: "Default tooltip"
};

export const direction = () => (
  <Flex justifyContent="center">
    <Spacer m="7">
      <Tooltip direction="top">Top tooltip example description</Tooltip>
      {/* <Tooltip direction="topRight">
        Top right tooltip example description
      </Tooltip> */}
      <Tooltip direction="right">Right tooltip example description</Tooltip>
      <Tooltip direction="bottom">Bottom tooltip example description</Tooltip>
      <Tooltip direction="left">Left tooltip example description</Tooltip>
    </Spacer>
  </Flex>
);
direction.story = {
  name: "Direction"
};

export const size = () => (
  <Flex justifyContent="center">
    <Spacer m="r">
      <Tooltip width="90px">Short tooltip</Tooltip>
      <Tooltip width="250px">Long tooltip to accommodate more text.</Tooltip>
    </Spacer>
  </Flex>
);
size.story = {
  name: "Size"
};

export const onDarkBackground = () => (
  <Box bg="greyDarkest" width="100%" p="7">
    <Flex justifyContent="center">
      <Tooltip inverted>Inverted example description</Tooltip>
    </Flex>
  </Box>
);
onDarkBackground.story = {
  name: "On dark background"
};
