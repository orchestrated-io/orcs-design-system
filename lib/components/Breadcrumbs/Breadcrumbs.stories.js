import React from "react";
import Box from "../Box";
import Breadcrumbs from ".";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import Icon from "../Icon";

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
  {
    id: "SI001",
    label: "Space Industries",
    to: "/space-industries"
  },
  {
    id: "SI002",
    label: "Software & Systems",
    to: "/software-systems"
  },
  { id: "SI003", label: "Platform", to: "/platform" },
  {
    id: "SI004",
    label: "In-Flight Software",
    to: "/in-flight-software"
  },
  {
    id: "SI005",
    label: "Mission Interface Systems",
    to: "/mission-interface-systems"
  },
  { id: "SI006", label: "Nebula UI" }
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

export const IconTooltip = () => (
  <Box p="l">
    <Breadcrumbs
      config={config}
      showAsIconTooltip={
        <Icon
          icon={["fas", "layer-group"]}
          color="greyDarker"
          title="Show breadcrumbs"
        />
      }
    />
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
IconTooltip.storyName = "Icon Tooltip (popover) variant";
