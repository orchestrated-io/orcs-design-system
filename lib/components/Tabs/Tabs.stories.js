import React from "react";
import Box from "../Box";
import Popover from "../Popover";
import { TabsContainer, Tab } from ".";

export default {
  title: "Components/Tabs",
  decorators: [
    (storyFn) => (
      <Box bg="greyLightest" p="xl">
        {storyFn()}
      </Box>
    )
  ],
  parameters: {
    component: TabsContainer
  }
};

export const defaultTabs = () => (
  <TabsContainer>
    <Tab>
      <a href="#">Details</a>
    </Tab>
    <Popover
      direction="top"
      text="Example with tooltip explaining tab"
      width="218px"
    >
      <Tab active>
        <a href="#" tabIndex="-1">
          Additional information
        </a>
      </Tab>
    </Popover>
    <Tab notification="97">
      <a href="#">Planning</a>
    </Tab>
  </TabsContainer>
);
defaultTabs.story = {
  name: "Default Tabs"
};
