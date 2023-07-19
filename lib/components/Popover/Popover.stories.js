import React from "react";
import Button from "../Button";
import Popover from ".";
import Box from "../Box";
import Grid from "../Grid";
import Flex from "../Flex";
import mdx from "./Popover.mdx";
import StyledLink from "../StyledLink";

export default {
  title: "Components/Popover",
  decorators: [
    (storyFn) => (
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
  <Popover text="Description that explains child element">
    <Button>Hover Me!</Button>
  </Popover>
);
defaultPopover.storyName = "Default";

export const direction = () => (
  <Grid
    gridTemplateColumns="1fr 1fr 1fr"
    gridAutoFlow="row"
    gridGap="r"
    alignItems="center"
    justifyContent="center"
  >
    <Popover direction="topLeft" text="Description that explains child element">
      <Button width="125px">Top left</Button>
    </Popover>
    <Popover direction="top" text="Description that explains child element">
      <Button width="125px">Top</Button>
    </Popover>
    <Popover
      direction="topRight"
      text="Description that explains child element"
    >
      <Button width="125px">Top right</Button>
    </Popover>
    <Popover direction="left" text="Description that explains child element">
      <Button width="125px">Left</Button>
    </Popover>
    <Box width="125px" bg="greyLighter" m="auto" />
    <Popover direction="right" text="Description that explains child element">
      <Button width="125px">Right</Button>
    </Popover>
    <Popover
      direction="bottomLeft"
      text="Description that explains child element"
    >
      <Button width="125px">Bottom left</Button>
    </Popover>
    <Popover direction="bottom" text="Description that explains child element">
      <Button width="125px">Bottom</Button>
    </Popover>
    <Popover
      direction="bottomRight"
      text="Description that explains child element"
    >
      <Button width="125px">Bottom right</Button>
    </Popover>
  </Grid>
);
direction.storyName = "Direction";

export const specifiedWidth = () => (
  <Popover text="Description that explains child element" width="240px">
    <Button>Hover Me</Button>
  </Popover>
);

export const textAlignment = () => (
  <Popover
    textAlign="center"
    text="Centered description that explains child element"
  >
    <Button>Hover Me</Button>
  </Popover>
);

export const DisplayInlineBlock = () => (
  <>
    <Popover text="Description that explains child element" inlineBlock>
      <Button>Inline Block Set</Button>
    </Popover>
    <Popover text="Description that explains child element" inlineBlock>
      <Button>Inline Block Set</Button>
    </Popover>
    <Popover text="Description that explains child element">
      <Button>Not Inline</Button>
    </Popover>
    <Popover direction="top" text="Description that explains child element">
      <Button>Not Inline</Button>
    </Popover>
  </>
);

export const tooltipExample = () => (
  <Popover
    text="This tooltip helps explain stuff"
    direction="top"
    variant="tooltip"
  />
);
tooltipExample.storyName = "Tooltip Example";

export const tooltipWithLinkExample = () => (
  <Popover
    text={
      <span>
        Test tooltip with{" "}
        <StyledLink href="https://www.teamform.co" small target="_blank">
          link to TeamForm
        </StyledLink>
      </span>
    }
    arialLabel="Link to TeamForm"
    direction="right"
    variant="tooltip"
    enableSelectAll={false}
  />
);
tooltipWithLinkExample.storyName = "Tooltip with link Example";

export const keepInViewExample = () => (
  <Flex justifyContent="flex-end" width="100%">
    <Popover text="Description that explains child element">
      <Button>Hover Me!</Button>
    </Popover>
  </Flex>
);
keepInViewExample.storyName = "Keep In View Example";
