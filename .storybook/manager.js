import { addons } from "@storybook/addons";
import orcsTheme from "./orcsTheme";
import "./titleAddon";

addons.setConfig({
  sidebarAnimations: true,
  theme: orcsTheme,
  showPanel: true,
  panelPosition: "bottom"
});
