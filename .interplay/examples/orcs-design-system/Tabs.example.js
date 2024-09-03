import React from "react";
import { TabsContainer, Tab } from "orcs-design-system";

export default {
  title: "Tabs",
  component: Tabs
};

export const Basic = {
  render: () => (
    <TabsContainer>
      <Tab>
        <a href="#">Details</a>
      </Tab>
      <Tab active>
        <a href="#" tabIndex="-1">
          Additional information
        </a>
      </Tab>
      <Tab>
        <a href="#">Planning</a>
      </Tab>
    </TabsContainer>
  )
};
