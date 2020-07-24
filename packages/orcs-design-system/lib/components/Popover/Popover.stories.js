import React from "react";
import Button from "../Button";
import Popover from ".";
import Box from "../Box";
import Flex from "../Flex";
import mdx from "./Popover.mdx";

export default {
  title: "Components/Popover",
  decorators: [
    storyFn => (
      <Box p="5">
        <Flex justifyContent="space-around">{storyFn()}</Flex>
      </Box>
    )
  ],
  parameters: {
    docs: { page: mdx }
  },
  component: Popover
};

export const defaultPopover = () => (
  <Popover text="Text description of what this button does">
    <Button>Hover Me!</Button>
  </Popover>
);
defaultPopover.storyName = "Default";

export const direction = () => (
  <>
    <Popover direction="right" text="Text description of what this button does">
      <Button>Right Hover</Button>
    </Popover>
    <Popover direction="left" text="Text description of what this button does">
      <Button>Left Hover</Button>
    </Popover>
    <Popover
      direction="bottom"
      text="Centered description of what this button does"
    >
      <Button>Bottom Hover</Button>
    </Popover>
    <Popover direction="top" text="Text description of what this button does">
      <Button>Top Hover</Button>
    </Popover>
  </>
);
direction.storyName = "Direction";

export const specifiedWidth = () => (
  <Popover text="Text description of what this button does" width="100px">
    <Button>Hover Me</Button>
  </Popover>
);

export const textAlignment = () => (
  <Popover textAlign="center" text="Text description of what this button does">
    <Button>Hover Me</Button>
  </Popover>
);

export const inline = () => (
  <>
    <Popover text="Text description of what this button does" inlineBlock>
      <Button>Inline Block Set</Button>
    </Popover>
    <Popover text="Text description of what this button does" inlineBlock>
      <Button>Inline Block Set</Button>
    </Popover>
    <Popover text="Centered description of what this button does">
      <Button>Not Inline</Button>
    </Popover>
    <Popover direction="top" text="Text description of what this button does">
      <Button>Not Inline</Button>
    </Popover>
  </>
);
