import React from "react";
import Button from "../Button";
import Popover from ".";
import Layout from "../Layout";
import Flex from "../Flex";

export default {
  title: "Components/Popover",
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

export const basic = () => (
  <>
    <Popover text="Text description of what this button does">
      <Button>Hover Me!</Button>
    </Popover>
  </>
);

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

export const specifiedWidth = () => (
  <>
    <Popover text="Text description of what this button does" width="100px">
      <Button>Hover Me</Button>
    </Popover>
  </>
);

export const textAlignment = () => (
  <Popover textAlign="center" text="Text description of what this button does">
    <Button>Hover Me</Button>
  </Popover>
);

export const inline = () => (
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
);
