import React from "react";
import SideNav from ".";
import mdx from "./SideNav.mdx";
import { H5, P } from "../Typography";
import { Link } from "react-router-dom";

export default {
  title: "Components/SideNav",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: SideNav
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
    component: () => <Link to="/">My profile link</Link>
  },
  {
    iconName: "bell",
    name: "Notifications",
    component: <Notifications />,
    badgeNumber: "3"
  },
  {
    iconName: "chart-bar",
    name: "Browse teams",
    component: <BrowseTeams />,
    large: true
  }
  // Add more items as needed...
];

export const sidebarNavigation = () => <SideNav items={items} />;
sidebarNavigation.storyName = "Sidebar Navigation";
