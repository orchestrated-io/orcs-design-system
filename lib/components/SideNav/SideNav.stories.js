import React from "react";
import PropTypes from "prop-types";
import SideNav from ".";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { H5, P } from "../Typography";
import Box from "../Box";
import Button from "../Button";

export default {
  title: "Components/SideNav",
  decorators: [(storyFn) => <Box minHeight="450px">{storyFn()}</Box>],
  component: SideNav
};

const LinkComponent = ({ children, item }) => (
  <Link to="/" aria-label={item.name}>
    {children}
  </Link>
);
LinkComponent.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node
};

const Notifications = () => (
  <>
    <H5 fontWeight="bold" mb="r">
      Notifications
    </H5>
    <P>Notifications content</P>
  </>
);
const BrowseTeams = () => (
  <>
    <H5 fontWeight="bold" mb="r">
      Browse teams
    </H5>
    <P>Browse teams content</P>
  </>
);
const Calendar = () => (
  <>
    <H5 fontWeight="bold" mb="r">
      Calendar
    </H5>
    <P>Calendar content</P>
  </>
);
const Settings = () => (
  <>
    <H5 fontWeight="bold" mb="r">
      Settings
    </H5>
    <P>Settings content</P>
  </>
);
const Announcements = () => (
  <>
    <H5 fontWeight="bold" mb="r">
      Announcements
    </H5>
    <P mb="r">Announcements content</P>
    <Button small variant="ghost">
      Read more
    </Button>
  </>
);

const items = [
  {
    iconName: "user",
    name: "My profile",
    component: LinkComponent,
    actionType: "link" // Use 'link' for a React Router link
  },
  {
    iconName: "bell",
    name: "Notifications",
    badgeNumber: "3", // Specify a badgeNumber if you want to have a count on this item
    component: Notifications,
    actionType: "component" // Use 'component' for a component
  },
  {
    iconName: "chart-bar",
    name: "Browse teams",
    large: true, // Specify large if you want the expanded sidebar to be wider
    component: BrowseTeams,
    actionType: "component" // Use 'component' for a component
  },
  {
    iconName: "cog",
    name: "Settings",
    hide: true, // Specify hide if you want to hide this item
    bottomAligned: true,
    component: Settings,
    actionType: "component" // Use 'component' for a component
  },
  {
    iconName: "calendar-alt",
    name: "Calendar",
    pageSpecific: true, // Specify pageSpecific if you want this item to appear below a divider line separating common nav items from page/route specific items
    component: Calendar,
    actionType: "component" // Use 'component' for a component
  },
  {
    iconName: "star",
    name: "Announcements",
    badgeDot: true, // Specify if you want to have a blue notification dot on this item
    bottomAligned: true, // Specify bottomAligned if this item should appear at bottom of SideNav
    component: Announcements,
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

export const sidebarNavigation = () => {
  return (
    <Router>
      <Route exact path="/" />
      <SideNav items={items} sideNavHeight="500px" />
    </Router>
  );
};
sidebarNavigation.storyName = "Sidebar Navigation";
