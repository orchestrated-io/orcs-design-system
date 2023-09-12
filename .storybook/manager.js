import { addons } from "@storybook/manager-api";
import orcsTheme from "./orcsTheme";
import { STORY_RENDERED } from "@storybook/core-events";

addons.register("TitleAddon", (api) => {
  const customTitle = "ORCS Design System by Orchestrated"; // Define your customTitle title
  let interval = null;
  const setTitle = () => {
    clearTimeout(interval);
    let storyData = null;
    try {
      storyData = api.getCurrentStoryData(); // Some time get error
    } catch (e) {}
    let title;
    if (!storyData) {
      title = customTitle;
    } else {
      title = `${storyData.kind} - ${storyData.name} ⋅ ${customTitle}`;
    }
    if (document.title !== title) {
      // As few dom operations as possible
      document.title = title;
    }
    interval = setTimeout(setTitle, 100);
  };
  setTitle();
  api.on(STORY_RENDERED, (story) => {
    setTitle();
  });
});

addons.setConfig({
  sidebarAnimations: true,
  theme: orcsTheme,
  showPanel: true,
  panelPosition: "bottom"
});
