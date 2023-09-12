import React from "react";
import Sidebar, {
  SidebarTabs,
  SidebarTab,
  SidebarPanels,
  SidebarPanel,
  SidebarClose
} from ".";
import Icon from "../Icon";
import Box from "../Box";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  subcomponents: {
    SidebarTabs: SidebarTabs,
    SidebarTab: SidebarTab,
    SidebarPanels: SidebarPanels,
    SidebarPanel: SidebarPanel
  }
};

export const defaultSidebar = () => (
  <Sidebar>
    <SidebarTabs>
      <SidebarTab active badge="3" ariaLabel="Messages">
        <Icon icon={["fas", "filter"]} size="lg" />
      </SidebarTab>
      <SidebarTab ariaLabel="Preferences">
        <Icon icon={["fas", "cog"]} size="lg" />
      </SidebarTab>
      <SidebarTab bottomAligned ariaLabel="Info">
        <Icon icon={["fas", "info-circle"]} size="lg" />
      </SidebarTab>
    </SidebarTabs>
    <SidebarPanels>
      <SidebarClose title="Close Sidebar">
        <Icon icon={["fas", "angle-left"]} />
      </SidebarClose>
      <SidebarPanel active>
        <Box p="r">
          Sidebar content tab one blah blah lorem ipsum dolor sit amet.
        </Box>
      </SidebarPanel>
      <SidebarPanel>
        <Box p="r">
          Sidebar content tab two blah blah lorem ipsum dolor sit amet.
        </Box>
      </SidebarPanel>
      <SidebarPanel>
        <Box p="r">
          Information about company and app (app version etc.) goes here.
        </Box>
      </SidebarPanel>
    </SidebarPanels>
  </Sidebar>
);

defaultSidebar.storyName = "Default";
