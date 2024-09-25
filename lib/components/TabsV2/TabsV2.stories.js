import React from "react";
import TabsV2 from ".";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Box from "../Box";

export default {
  title: "Components/TabsV2",
  decorators: [
    (storyFn) => (
      <Box bg="greyLightest" p="xl" pb="300px">
        {storyFn()}
      </Box>
    )
  ],
  component: TabsV2
};

const tabsList = [
  {
    label: "Details",
    path: "/details",
    isVisible: true
  },
  {
    label: "Strategy",
    path: "/strategy",
    isVisible: true
  },
  {
    label: "Associations",
    path: "/associations",
    isVisible: true
  },
  {
    label: "Visualisation",
    path: "/visualisation",
    isVisible: true
  },
  {
    label: "Principles",
    path: "/principles",
    isVisible: true
  },
  {
    label: "Planner",
    path: "/planner",
    isVisible: true
  },
  {
    label: "Forecast",
    path: "/forecast",
    isVisible: true
  },
  {
    label: "Team Builder",
    path: "/teambuilder",
    isVisible: false
  },
  {
    label: "History",
    path: "/history",
    isVisible: true
  }
];

export const defaultTabsV2 = () => (
  <BrowserRouter>
    <TabsV2 tabsList={tabsList} />
    <Switch>
      {tabsList.map((tab) => (
        <Route key={tab.path} path={tab.path}>
          <Box bg="white" borderRadius={2} boxBorder="default" p="l" mt="l">
            ROUTE RENDERED: {tab.label}
          </Box>
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);
defaultTabsV2.storyName = "Default";
