import React from "react";
import StyledLink from ".";
import Box from "../Box";
import Flex from "../Flex";
import Spacer from "../Spacer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default {
  title: "Components/StyledLink",
  component: StyledLink,
  decorators: [(storyFn) => <Box p="r">{storyFn()}</Box>]
};

export const defaultStyledLink = () => (
  <StyledLink href="#">Styled Link</StyledLink>
);
defaultStyledLink.storyName = "Default";

export const targetStyledLink = () => (
  <StyledLink href="#" target="_blank">
    Targeted Link
  </StyledLink>
);
targetStyledLink.storyName = "Targeted";

export const boldStyledLink = () => (
  <StyledLink href="#" bold>
    Bold Link
  </StyledLink>
);
boldStyledLink.storyName = "Bold";

export const invertedStyledLink = () => (
  <Box bg="greyDarkest" p="r">
    <Flex justifyContent="center">
      <Spacer mx="r">
        <StyledLink href="#" white>
          White navigation link on dark background
        </StyledLink>

        <StyledLink href="#" white active bold>
          Active/selected bold navigation link
        </StyledLink>

        <StyledLink href="#" white bold>
          Bold inverted link
        </StyledLink>
      </Spacer>
    </Flex>
  </Box>
);
invertedStyledLink.storyName = "Inverted";

const routes = [
  { path: "/", label: "React link to home", exact: true },
  { path: "/about", label: "React link to about" },
  { path: "/cats", label: "React link to cats" }
];

export const reactLink = () => (
  <BrowserRouter>
    {routes.map((route) => (
      <StyledLink key={route.path} to={route.path}>
        {route.label}
      </StyledLink>
    ))}
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          <div style={{ padding: "100px" }}>ROUTE RENDERED: {route.label}</div>
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);
reactLink.storyName = "Using react-router-dom";

export const buttonLink = () => (
  <StyledLink href="https://teamform.co" target="_blank" button>
    Click me
  </StyledLink>
);
buttonLink.storyName = "Button";
