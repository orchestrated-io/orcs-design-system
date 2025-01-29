import React from "react";
import TabsAlt from ".";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Box from "../Box";

export default {
  title: "Components/TabsAlt",
  decorators: [
    (storyFn) => (
      <Box boxBorder="default" shadow="default" pb="200px">
        {storyFn()}
      </Box>
    )
  ],
  component: TabsAlt
};

const tabsList = [
  {
    label: "Details",
    path: "/details"
  },
  {
    label: "Strategy",
    path: "/strategy"
  },
  {
    label: "Associations",
    path: "/associations"
  },
  {
    label: "Visualisation",
    path: "/visualisation"
  },
  {
    label: "Principles",
    path: "/principles"
  },
  {
    label: "Planner",
    path: "/planner"
  },
  {
    label: "Forecast",
    path: "/forecast"
  },
  {
    label: "Team Builder",
    path: "/teambuilder"
  },
  {
    label: "History",
    path: "/history",
    isVisible: false
  }
];

export const defaultTabs = () => (
  <BrowserRouter>
    <TabsAlt tabsList={tabsList} />
    <Switch>
      {tabsList.map((tab) => (
        <Route key={tab.path} path={tab.path}>
          <Box p="l" mt="l">
            ROUTE RENDERED: {tab.label}
          </Box>
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);
defaultTabs.storyName = "Default";
