import React from "react";
import StatusDot from ".";
import Layout from "../Layout";
import Flex from "../Flex";
import Popover from "../Popover";

export default {
  title: "DESIGN SYSTEM|StatusDot",
  component: StatusDot,
  decorators: [
    storyFn => (
      <Layout padding childChildHorizontalSpacing>
        <Flex center>{storyFn()}</Flex>
      </Layout>
    )
  ]
};

export const basicDot = () => <StatusDot />;
basicDot.story = {
  name: "Basic"
};

export const complexDots = () => (
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
      text="Team has less than 13 members. STATUS: Not met"
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
complexDots.story = {
  name: "Complex"
};
