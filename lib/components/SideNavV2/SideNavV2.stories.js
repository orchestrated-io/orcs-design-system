/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import { action } from "@storybook/addon-actions";
import SideNavV2, { SideNavStateProvider } from "./index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  matchPath,
  Switch,
  Redirect,
  useParams
} from "react-router-dom";
import { H5, P } from "../Typography";
import Box from "../Box";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Flex from "../Flex";
import Spacer from "../Spacer/index";
import Card from "../Card/index";
import Badge from "../Badge/index";
import RenderCurrentViewSection from "./components/RenderCurrentViewSection";

library.add(far);

export default {
  title: "Components/SideNavV2",
  decorators: [
    (storyFn) => (
      <Box minHeight="100vh" bg="greyLightest" boxBorder="default">
        {storyFn()}
      </Box>
    )
  ],
  component: SideNavV2
};

const makeLinkComponent =
  (path) =>
  ({ children, item }) => {
    return (
      <Link to={path} aria-label={item.name}>
        {children}
      </Link>
    );
  };

const makePanelComponent = (name, children) => () => {
  return (
    <>
      <H5 fontWeight="bold" mb="r">
        {name}
      </H5>
      <P>{name} content</P>
      {children}
    </>
  );
};

const teams = {
  "nebula-ui": {
    name: "Nebula UI",
    avatar:
      "https://images.unsplash.com/photo-1688413399498-e35ed74b554f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2VzaGlwJTIwZGlnaXRhbCUyMHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D",
    shape: "square",
    type: "Team"
  },
  design: {
    name: "Design",
    avatar:
      "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    shape: "square",
    type: "Team"
  },
  blackhole: {
    name: "Blackhole",
    avatar:
      "https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2tob2xlfGVufDB8fDB8fHww",
    shape: "square",
    type: "Team"
  },
  engineering: {
    name: "Engineering",
    avatar:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    shape: "square",
    type: "Team"
  }
};

const getViewingState = (teamId) => {
  return {
    name: teams[teamId].name,
    avatar: teams[teamId].avatar,
    shape: teams[teamId].shape,
    // badge: teams[teamId].type && (
    //   <Badge variant="success">{teams[teamId].type}</Badge>
    // ),
    subNav: [
      { name: "Overview", link: `/teams/${teamId}/overview` },
      { name: "Org chart", link: `/teams/${teamId}/org-chart` },
      { name: "Strategy", link: `/teams/${teamId}/strategy` },
      { name: "Allocations", link: `/teams/${teamId}/allocations` },
      { name: "Planning", link: `/teams/${teamId}/planning` },
      { name: "Forecast", link: `/teams/${teamId}/forecast` },
      { name: "Team interactions", link: `/teams/${teamId}/interactions` },
      { name: "History", link: `/teams/${teamId}/history` }
    ]
  };
};

const getPeopleState = (personId) => {
  return {
    name: "James Merrit",
    badge: <Badge variant="success">Engineer</Badge>,
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    shape: "circle",
    subNav: [
      { name: "Details", link: `/people/${personId}/details` },
      { name: "Allocations", link: `/people/${personId}/allocations` },
      { name: "History", link: `/people/${personId}/history` }
    ]
  };
};

const Teams = () => {
  const params = useParams();

  const viewing = useMemo(
    () => getViewingState(params.teamId),
    [params.teamId]
  );

  return (
    <div>
      Team {params.teamId} route
      <RenderCurrentViewSection viewingState={viewing} />
      <Switch>
        <Route
          path="/teams/:teamId/:subRoute"
          render={(routeProps) => (
            <div>SUB ROUTE {routeProps.match.params.subRoute} route</div>
          )}
        />
      </Switch>
    </div>
  );
};

const People = () => {
  const params = useParams();

  const viewing = useMemo(
    () => getPeopleState(params.personId),
    [params.personId]
  );

  return (
    <div>
      People {params.personId} route
      <RenderCurrentViewSection viewingState={viewing} />
      <Switch>
        <Route
          path="/people/:personId/:subRoute"
          render={(routeProps) => (
            <div>
              SUB ROUTE {routeProps.match.params.subRoute} route
              <Switch>
                <Route
                  path="/details"
                  render={() => <div>Details route</div>}
                />
              </Switch>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

const PinnedItem = () => {
  const params = useParams();
  return <div>Pinned Item: {params.itemId} route</div>;
};

const PageCard = ({ children }) => {
  return (
    <Spacer px="r">
      <Card>{children}</Card>
    </Spacer>
  );
};

const yourTeams = [
  {
    avatar:
      "https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2tob2xlfGVufDB8fDB8fHww",
    name: "Blackhole",
    link: "/teams/blackhole/overview"
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    name: "Design",
    link: "/teams/design/overview"
  }
];

const pinnedItems = [
  {
    avatar:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Engineering",
    link: "/teams/engineering/overview",
    shape: "square",
    onUnpin: action("unpin-engineering")
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1556741533-e228ee50f8b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y3VzdG9tZXJ8ZW58MHx8MHx8fDA%3D",
    name: "Customer Journey",
    link: "/pinned/new-account",
    shape: "hexagon",
    onUnpin: action("unpin-customer-journey")
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "James Merrit",
    link: "/people/james-merrit/details",
    onUnpin: action("unpin-james-merrit"),
    shape: "circle"
  }
];

const SideBarWithConfig = () => {
  const location = useLocation();

  const items = [
    {
      iconName: "building",
      name: "Home",
      component: makeLinkComponent("/"),
      actionType: "link",
      isActive: matchPath(location.pathname, { path: "/", exact: true })
    },
    {
      iconName: "user",
      name: "My profile",
      component: makeLinkComponent("/profile"),
      actionType: "link",
      isActive: matchPath(location.pathname, { path: "/profile" })
    },
    {
      iconName: "id-card",
      name: "Search Page",
      component: makeLinkComponent("/search"),
      actionType: "link",
      isActive: matchPath(location.pathname, { path: "/search" })
    },
    {
      iconName: "snowflake",
      name: "Filter",
      hide: !matchPath(location.pathname, { path: "/search" }), // Specify hide if you want to hide this item
      component: makePanelComponent("Filter"),
      actionType: "component", // Use 'component' for a component
      pageSpecific: matchPath(location.pathname, { path: "/search" }),
      isExpandedByDefault: true
    },
    {
      iconName: "sun",
      name: "People",
      hide: !matchPath(location.pathname, { path: "/profile" }), // Specify hide if you want to hide this item
      component: makePanelComponent("People"),
      actionType: "component", // Use 'component' for a component
      pageSpecific: matchPath(location.pathname, { path: "/profile" }),
      isExpandedByDefault: true
    },
    {
      iconName: "bell",
      name: "Notifications",
      badgeNumber: "3", // Specify a badgeNumber if you want to have a count on this item
      component: makePanelComponent("Notifications"),
      actionType: "component" // Use 'component' for a component
    },
    {
      iconName: "chart-bar",
      name: "Browse teams",
      large: true, // Specify large if you want the expanded sidebar to be wider
      component: makePanelComponent(
        "BrowseTeams",
        <Flex flexDirection="column">
          {Object.keys(teams).map((team) => (
            <Link to={`/teams/${team}/overview`} key={team}>
              {team}
            </Link>
          ))}
        </Flex>
      ),
      actionType: "component" // Use 'component' for a component
    },
    {
      iconName: "cog",
      name: "Settings",
      hide: true, // Specify hide if you want to hide this item
      bottomAligned: true,
      component: makePanelComponent("Settings"),
      actionType: "component" // Use 'component' for a component
    },

    {
      iconName: "calendar-alt",
      name: "Calendar",
      pageSpecific: true, // Specify pageSpecific if you want this item to appear below a divider line separating common nav items from page/route specific items
      component: makePanelComponent("Calendar"),
      actionType: "component" // Use 'component' for a component
    },
    {
      iconName: "star",
      name: "Announcements",
      badgeDot: true, // Specify if you want to have a blue notification dot on this item
      bottomAligned: true, // Specify bottomAligned if this item should appear at bottom of SideNav
      component: makePanelComponent("Announcements"),
      actionType: "component" // Use 'component' for a component
    },
    {
      iconName: "times-circle",
      name: "Logout",
      bottomAligned: true, // Specify bottomAligned if this item should appear at bottom of SideNav
      onClick: () => alert("Logout function"), // Specify the onClick function for the button
      actionType: "button" // Use 'button' for a button with onClick event
    }
    // Add more items as needed...
  ];

  return (
    <Flex height="100vh">
      <SideNavStateProvider>
        <SideNavV2
          items={items}
          yourTeams={yourTeams}
          pinnedItems={pinnedItems}
        />
        <Switch>
          <Route exact path="/">
            <PageCard>
              <div>Home</div>
            </PageCard>
          </Route>
          <Route path="/profile">
            <PageCard>
              <div>Profile route</div>
            </PageCard>
          </Route>
          <Route path="/teams/:teamId">
            <PageCard>
              <Teams />
            </PageCard>
          </Route>
          <Route path="/pinned/:itemId">
            <PageCard>
              <PinnedItem />
            </PageCard>
          </Route>
          <Route path="/people/:personId">
            <PageCard>
              <People />
            </PageCard>
          </Route>
          <Redirect from="/iframe.html" to="/" />
        </Switch>
      </SideNavStateProvider>
    </Flex>
  );
};

export const SidebarNavigationV2 = () => {
  return (
    <Router>
      <SideBarWithConfig />
    </Router>
  );
};

SidebarNavigationV2.storyName = "Sidebar Navigation";
