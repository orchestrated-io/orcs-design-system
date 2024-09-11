/* eslint-disable react/prop-types */
import React from "react";
import SideNav from "./index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
  useMatch,
  Navigate
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
  title: "Components/SideNav",
  decorators: [(storyFn) => <Box minHeight="450px">{storyFn()}</Box>],
  component: SideNav
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

const SideBarWithConfig = () => {
  const isHome = useMatch("/");
  const isProfile = useMatch("/profile");
  const isSearch = useMatch("/search");

  const items = [
    {
      iconName: "building",
      name: "Home",
      component: makeLinkComponent("/"),
      actionType: "link",
      isActive: !!isHome
    },
    {
      iconName: "user",
      name: "My profile",
      component: makeLinkComponent("/profile"),
      actionType: "link",
      isActive: !!isProfile
    },
    {
      iconName: "id-card",
      name: "Search Page",
      component: makeLinkComponent("/search"),
      actionType: "link",
      isActive: isSearch
    },
    {
      iconName: "snowflake",
      name: "Filter",
      hide: !isSearch, // Specify hide if you want to hide this item
      component: makePanelComponent("Filter"),
      actionType: "component", // Use 'component' for a component
      pageSpecific: isSearch,
      isExpandedByDefault: true
    },
    {
      iconName: "sun",
      name: "People",
      hide: !isProfile, // Specify hide if you want to hide this item
      component: makePanelComponent("People"),
      actionType: "component", // Use 'component' for a component
      pageSpecific: isProfile,
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
      <SideNav items={items} sideNavHeight="500px" />
      <Routes>
        <Route
          path="/"
          element={
            <PageCard>
              <div>Home</div>
            </PageCard>
          }
        />
        <Route
          path="/profile"
          element={
            <PageCard>
              <div>Profile route</div>
            </PageCard>
          }
        />
        <Route
          path="/teams/:teamId"
          element={
            <PageCard>
              <Teams />
            </PageCard>
          }
        />

        <Route path="/iframe.html" element={<Navigate to="/" replace />} />
      </Routes>
    </Flex>
  );
};

export const SidebarNavigation = () => {
  return (
    <Router>
      <SideBarWithConfig />
    </Router>
  );
};

SidebarNavigation.storyName = "Sidebar Navigation";
