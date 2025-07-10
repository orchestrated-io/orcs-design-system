/* eslint-disable react/prop-types */
import React from "react";
import SideNavV2 from "./index";
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

library.add(far);

export default {
  title: "Components/SideNavV2",
  decorators: [
    (storyFn) => (
      <Box minHeight="768px" bg="greyLightest" boxBorder="default">
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

const Teams = () => {
  const params = useParams();
  return <div>Team {params.teamId} route</div>;
};

const PageCard = ({ children }) => {
  return (
    <Spacer px="r">
      <Card>{children}</Card>
    </Spacer>
  );
};

const viewing = {
  teamName: "Nebula UI",
  teamType: "Squad",
  badgeVariant: "success",
  subNav: [
    { name: "Overview", link: "/teams/nebula-ui/overview" },
    { name: "Org chart", link: "/teams/nebula-ui/org-chart" },
    { name: "Strategy", link: "/teams/nebula-ui/strategy" },
    { name: "Allocations", link: "/teams/nebula-ui/allocations" },
    { name: "Planning", link: "/teams/nebula-ui/planning" },
    { name: "Forecast", link: "/teams/nebula-ui/forecast" },
    { name: "Team interactions", link: "/teams/nebula-ui/interactions" },
    { name: "History", link: "/teams/nebula-ui/history" }
  ]
};

const yourTeams = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Blackhole",
    link: "/teams/blackhole"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Stargazers",
    link: "/teams/stargazers"
  }
];

const pinnedItems = [
  {
    avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
    name: "Engineering",
    link: "/pinned/engineering"
  },
  {
    avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "New Account Creation",
    link: "/pinned/new-account"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "James Merrit",
    link: "/pinned/james-merrit"
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
          {["Team 1", "Team 2", "Team 3"].map((team) => (
            <Link to={`/teams/${team}`} key={team}>
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
    <Flex>
      <SideNavV2
        items={items}
        sideNavHeight="768px"
        viewing={viewing}
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
        <Redirect from="/iframe.html" to="/" />
      </Switch>
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
