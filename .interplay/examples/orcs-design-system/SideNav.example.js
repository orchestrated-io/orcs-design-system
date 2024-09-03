import React from "react";
import { SideNav } from "orcs-design-system";

export default {
  title: "SideNav",
  component: SideNav
};

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

export const Basic = {
  render: () => <SideNav items={items} sideNavHeight="500px" />
};
