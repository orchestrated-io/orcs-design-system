import React from "react";
import Box from "../Box";
import Breadcrumbs from ".";
import { MemoryRouter, Route, Switch } from "react-router-dom";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  decorators: [
    (storyFn) => (
      <MemoryRouter initialEntries={["/nebula-ui"]}>{storyFn()}</MemoryRouter>
    )
  ]
};

const config = [
  { label: "Space Industries", to: "/space-industries" },
  { label: "Software & Systems", to: "/software-systems" },
  { label: "Platform", to: "/platform" },
  { label: "In-Flight Software", to: "/in-flight-software" },
  { label: "Mission Interface Systems", to: "/mission-interface-systems" },
  { label: "Nebula UI" }
];

const routes = [
  { path: "/space-industries", label: "Space Industries" },
  { path: "/software-systems", label: "Software & Systems" },
  { path: "/platform", label: "Platform" },
  { path: "/in-flight-software", label: "In-Flight Software" },
  { path: "/mission-interface-systems", label: "Mission Interface Systems" },
  { path: "/nebula-ui", label: "Nebula UI" }
];

export const Default = () => (
  <Box p="l">
    <Breadcrumbs config={config} />
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact>
          <Box mt="l" p="l" bg="greyLighter">
            ROUTE RENDERED: {route.label}
          </Box>
        </Route>
      ))}
      <Route path="/">
        <Box mt="xl" p="l" bg="greyLighter">
          ROUTE RENDERED: Nebula UI
        </Box>
      </Route>
    </Switch>
  </Box>
);
Default.storyName = "Default (grey text)";

export const WhiteVariant = () => (
  <Box bg="greyDarkest" p="l">
    <Breadcrumbs config={config} variant="white" />
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact>
          <Box mt="l" p="l" bg="white" color="greyDarker">
            ROUTE RENDERED: {route.label}
          </Box>
        </Route>
      ))}
      <Route path="/">
        <Box mt="l" p="l" bg="white" color="greyDarker">
          ROUTE RENDERED: Nebula UI
        </Box>
      </Route>
    </Switch>
  </Box>
);
WhiteVariant.storyName = "White variant (on colored background)";
