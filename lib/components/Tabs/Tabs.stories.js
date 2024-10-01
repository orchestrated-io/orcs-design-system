import React from "react";
import Tabs from ".";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Box from "../Box";

export default {
  title: "Components/Tabs",
  decorators: [
    (storyFn) => (
      <Box bg="greyLightest" p="xl" pb="300px">
        {storyFn()}
      </Box>
    )
  ],
  component: Tabs
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
    <Tabs tabsList={tabsList} />
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
defaultTabs.storyName = "Default";
