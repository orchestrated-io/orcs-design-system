import React from "react";
import StatusDot from ".";
import Box from "../Box";
import Flex from "../Flex";
import Popover from "../Popover";

export default {
  title: "Components/StatusDot",
  component: StatusDot,
  decorators: [
    storyFn => (
      <Box padding={4}>
        <Flex alignItems="center" justifyContent="center">
          {storyFn()}
        </Flex>
      </Box>
    )
  ]
};

export const basic = () => <StatusDot />;

export const complexExamples = () => (
  <>
    <Popover
      direction="top"
      text="Team has a dedicated Product Owner. STATUS: Met"
      textAlign="left"
      width="250px"
    >
      <StatusDot on />
    </Popover>

    <Popover
      direction="top"
      text="Team has a dedicated Engineering Lead. STATUS: Not met"
      textAlign="left"
      width="250px"
    >
      <StatusDot />
    </Popover>

    <Popover
      direction="top"
      text="Team members should share no more than 4 line managers. STATUS: Met"
      textAlign="left"
      width="250px"
    >
      <StatusDot on />
    </Popover>

    <Popover
      direction="top"
      text="Team members are in less than 3 locations. STATUS: Not enough data"
      textAlign="left"
      width="250px"
    >
      <StatusDot warning />
    </Popover>
  </>
);
