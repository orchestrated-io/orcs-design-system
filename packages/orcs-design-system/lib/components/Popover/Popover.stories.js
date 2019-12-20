import React from "react";
import Button from "../Button";
import Popover from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "DESIGN SYSTEM|Popover",
  decorators: [
    storyFn => (
      <Layout padding childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ],
  parameters: {
    component: Popover
  }
};

export const standardPopover = () => (
  <>
    <Popover text="Text description of what this button does">
      <Button>Hover Me!</Button>
    </Popover>
  </>
);
standardPopover.story = {
  name: "Basic"
};

export const directionPopover = () => (
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
directionPopover.story = {
  name: "Direction"
};

export const widthPopover = () => (
  <>
    <Popover text="Text description of what this button does" width="400px">
      <Button>Hover Me</Button>
    </Popover>
  </>
);
widthPopover.story = {
  name: "Width"
};

export const alignPopover = () => (
  <Popover textAlign="right" text="Text description of what this button does">
    <Button>Hover Me</Button>
  </Popover>
);
alignPopover.story = {
  name: "Text Alignment"
};

export const inlinePopover = () => (
  <>
    <Layout childVerticalSpacing childHorizontalSpacing>
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
    </Layout>
  </>
);
inlinePopover.story = {
  name: "Inline"
};
