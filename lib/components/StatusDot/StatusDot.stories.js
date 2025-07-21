import React from "react";
import StatusDot from ".";
import Box from "../Box";
import Flex from "../Flex";
import Spacer from "../Spacer";
import Icon from "../Icon";
import Popover from "../Popover";

export default {
  title: "Components/StatusDot",
  component: StatusDot
};

export const defaultStatusDot = () => (
  <Box p="l">
    <Flex justifyContent="center" alignItems="center">
      <Popover
        direction="top"
        text="New approvals received"
        textAlign="center"
        width="fit-content"
      >
        <StatusDot />
      </Popover>
    </Flex>
  </Box>
);
defaultStatusDot.storyName = "Default";

export const colour = () => (
  <Box p="l">
    <Flex justifyContent="center" alignItems="center">
      <Spacer m="xxs">
        <Popover
          direction="top"
          text="Team has a Product Owner. STATUS: Met"
          textAlign="left"
          width="fit-content"
        >
          <StatusDot variant="success" />
        </Popover>

        <Popover
          direction="top"
          text="Team members are in less than 3 locations. STATUS: Not enough data"
          textAlign="left"
          width="fit-content"
        >
          <StatusDot variant="warning" />
        </Popover>

        <Popover
          direction="top"
          text="Team has a Team Lead. STATUS: Not met"
          textAlign="left"
          width="fit-content"
        >
          <StatusDot variant="danger" />
        </Popover>

        <Popover
          direction="top"
          text="Team has an Engineering Lead. STATUS: Not applicable"
          textAlign="left"
          width="fit-content"
        >
          <StatusDot variant="disabled" />
        </Popover>
      </Spacer>
    </Flex>
  </Box>
);

export const withIcon = () => (
  <Flex p="l" justifyContent="center" alignItems="center" gap="s">
    <Popover
      direction="top"
      text="On track"
      textAlign="center"
      width="fit-content"
    >
      <StatusDot variant="success" icon>
        <Icon icon={["fas", "check"]} color="white" size="xs" />
      </StatusDot>
    </Popover>

    <Popover
      direction="top"
      text="Blocked"
      textAlign="center"
      width="fit-content"
    >
      <StatusDot variant="warning" icon>
        <Icon icon={["fas", "ban"]} color="white" size="xs" />
      </StatusDot>
    </Popover>

    <Popover
      direction="top"
      text="At risk"
      textAlign="center"
      width="fit-content"
    >
      <StatusDot variant="danger" icon>
        <Icon icon={["fas", "exclamation"]} color="white" size="xs" />
      </StatusDot>
    </Popover>
  </Flex>
);
