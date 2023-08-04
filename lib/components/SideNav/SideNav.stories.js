import React from "react";
import PropTypes from "prop-types";
import SideNav from ".";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mdx from "./SideNav.mdx";
import { H5, P } from "../Typography";

export default {
  title: "Components/SideNav",
  parameters: {
    docs: {
      page: mdx
    }
  },
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
      <SideNav items={items} />
    </Router>
  );
};
sidebarNavigation.storyName = "Sidebar Navigation";
