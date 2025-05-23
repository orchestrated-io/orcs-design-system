import React from "react";
import Notification from ".";
import Spacer from "../Spacer";
import Box from "../Box";

export default {
  title: "Components/Notification",
  component: Notification,
  decorators: [
    (storyFn) => (
      <Box p="r" height="250px">
        {storyFn()}
      </Box>
    )
  ]
};

export const basicNotification = () => (
  <Notification icon={["fas", "share-square"]}>
    Default notification message for messages that are not super important, e.g.
    Link shared.
  </Notification>
);
basicNotification.storyName = "Basic";

export const colourNotification = () => (
  <Spacer m="r">
    <Notification colour="success" icon={["fas", "check-circle"]}>
      Green notification for good/successful notifications, e.g. Details updated
      successfully!
    </Notification>

    <Notification colour="warning" icon={["fas", "exclamation-triangle"]}>
      Yellow warning notification e.g. This may take a few minutes to update.
    </Notification>

    <Notification colour="danger" icon={["fas", "exclamation-circle"]}>
      Red error notification e.g. Update failed! Please try again.
    </Notification>
  </Spacer>
);
colourNotification.storyName = "Alternate Colours";

export const textOnlyNotification = () => (
  <Notification>Text-only notification</Notification>
);
textOnlyNotification.storyName = "Text-only";

export const closeDisabledNotification = () => (
  <Notification closable={false}>
    Closing this notification is disabled, this should be used for persistent
    notifications e.g. Stage 1 is now locked and is read-only.
  </Notification>
);
closeDisabledNotification.storyName = "Close Disabled";

export const loadingNotification = () => (
  <Spacer m="r">
    <Notification loading>
      In progress notification E.g. Importing data...
    </Notification>
    <Notification loading colour="success">
      In progress notification E.g. Importing data...
    </Notification>
    <Notification loading colour="warning">
      In progress notification E.g. Importing data...
    </Notification>
    <Notification loading colour="danger">
      In progress notification E.g. Importing data...
    </Notification>
  </Spacer>
);
loadingNotification.storyName = "Loading";

export const floatingNotification = () => (
  <Notification floating bottom="20px" right="20px" icon={["fas", "bell"]}>
    Floating notification.
  </Notification>
);
floatingNotification.storyName = "Floating";

export const centeredNotification = () => (
  <Notification centered floating bottom="20px">
    Centered notification
  </Notification>
);
centeredNotification.storyName = "Floating and Centered";

export const altStyleNotification = () => (
  <Spacer m="r">
    <Notification altStyle closable={false}>
      Default notification message for standard messages that are not super
      important.
    </Notification>

    <Notification altStyle colour="success" closable={false}>
      Green notification for good/successful notifications, e.g. Details updated
      successfully!
    </Notification>

    <Notification altStyle colour="warning" closable={false}>
      Yellow warning notification e.g. This may take a few minutes to update.
    </Notification>

    <Notification altStyle colour="danger" closable={false}>
      Red error notification e.g. Update failed! Please try again.
    </Notification>

    <Notification altStyle icon={["fas", "bell"]}>
      Notification with icon
    </Notification>

    <Notification altStyle loading>
      Loading notification with alternate style
    </Notification>

    <Notification altStyle icon={["fas", "bell"]} loading>
      Loading notification with icon and alternate style
    </Notification>

    <Notification altStyle icon={["fas", "bell"]} loading colour="success">
      Success notification with all variations
    </Notification>

    <Notification altStyle icon={["fas", "bell"]} loading colour="warning">
      Warning notification with all variations
    </Notification>

    <Notification altStyle icon={["fas", "bell"]} loading colour="danger">
      Danger notification with all variations
    </Notification>
  </Spacer>
);
altStyleNotification.storyName = "Alternate Style";
