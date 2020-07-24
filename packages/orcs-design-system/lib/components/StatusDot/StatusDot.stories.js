import React from "react";
import StatusDot from ".";
import Box from "../Box";
import Flex from "../Flex";
import Spacer from "../Spacer";
import Icon from "../Icon";
import Popover from "../Popover";
import mdx from "./StatusDot.mdx";

export default {
  title: "Components/StatusDot",
  component: StatusDot,
  parameters: { docs: { page: mdx } }
};

export const defaultStatusDot = () => (
  <Box p="l">
    <Flex justifyContent="center" alignItems="center">
      <Popover
        direction="top"
        text="New approvals received"
        textAlign="center"
        width="170px"
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
          text="Team has a dedicated Product Owner. STATUS: Met"
          textAlign="left"
          width="250px"
        >
          <StatusDot variant="success" />
        </Popover>

        <Popover
          direction="top"
          text="Team members are in less than 3 locations. STATUS: Not enough data"
          textAlign="left"
          width="250px"
        >
          <StatusDot variant="warning" />
        </Popover>

        <Popover
          direction="top"
          text="Team has a dedicated Engineering Lead. STATUS: Not met"
          textAlign="left"
          width="250px"
        >
          <StatusDot variant="danger" />
        </Popover>
      </Spacer>
    </Flex>
  </Box>
);

export const withIcon = () => (
  <Box p="l">
    <Flex justifyContent="center" alignItems="center">
      <Spacer m="xxs">
        <Popover
          direction="top"
          text="Target met"
          textAlign="center"
          width="110px"
        >
          <StatusDot variant="success" icon>
            <Icon
              icon={["fas", "check"]}
              color="white"
              size="xs"
              transform="up-1 right-1"
            />
          </StatusDot>
        </Popover>

        <Popover
          direction="top"
          text="Under allocated"
          textAlign="center"
          width="110px"
        >
          <StatusDot variant="warning" icon>
            <Icon
              icon={["fas", "exclamation"]}
              color="white"
              size="xs"
              transform="up-1 right-1"
            />
          </StatusDot>
        </Popover>

        <Popover
          direction="top"
          text="Over allocated"
          textAlign="center"
          width="110px"
        >
          <StatusDot variant="danger" icon>
            <Icon
              icon={["fas", "bell"]}
              color="white"
              size="xs"
              transform="up-1 right-1"
            />
          </StatusDot>
        </Popover>
      </Spacer>
    </Flex>
  </Box>
);
