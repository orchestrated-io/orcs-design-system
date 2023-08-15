import React from "react";
import Box from "../Box";
import { TabsContainer, Tab } from ".";
import Popover from "../Popover";

export default {
  title: "Components/Tabs/Tab",
  decorators: [
    (storyFn) => (
      <Box bg="greyLightest" p="xl">
        {storyFn()}
      </Box>
    )
  ],
  component: Tab
};

export const activeTab = () => (
  <TabsContainer>
    <Tab>
      <a href="#">Details</a>
    </Tab>
    <Tab active>
      <a href="#">Planning</a>
    </Tab>
  </TabsContainer>
);

activeTab.story = {
  name: "Active Tab"
};

export const withNotificationsTab = () => (
  <TabsContainer>
    <Tab notification="1">
      <a href="#">Details</a>
    </Tab>
    <Tab notification="7">
      <a href="#">Planning</a>
    </Tab>
  </TabsContainer>
);

activeTab.story = {
  name: "With Notifications Tab"
};

export const withPopoverTab = () => (
  <TabsContainer>
    <Popover
      direction="right"
      text="Example with tooltip explaining tab"
      width="218px"
    >
      <Tab>
        <a href="#">Details</a>
      </Tab>
    </Popover>
    <Popover
      direction="top"
      text="Example with tooltip explaining tab"
      width="218px"
    >
      <Tab>
        <a href="#" tabIndex="-1">
          Additional information
        </a>
      </Tab>
    </Popover>
  </TabsContainer>
);

withPopoverTab.story = {
  name: "With Popover Tab"
};
