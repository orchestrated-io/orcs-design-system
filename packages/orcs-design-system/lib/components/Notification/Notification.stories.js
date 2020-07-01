import React from "react";
import Notification from ".";
import Loading from "../Loading";
import Spacer from "../Spacer";
import Flex from "../Flex";
import Box from "../Box";
import mdx from "./Notification.mdx";

export default {
  title: "Components/Notification",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Notification,
  decorators: [
    storyFn => (
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
    Closing this notification is disabled, this should be used for persistant
    notifications e.g. Stage 1 is now locked and is read-only.
  </Notification>
);
closeDisabledNotification.storyName = "Close Disabled";

export const inProgressNotification = () => (
  <Notification closable={false}>
    <Flex>
      <Loading inverted mr="s" />
      <span>
        In progress notification with disabled close. E.g. Importing data...
      </span>
    </Flex>
  </Notification>
);
inProgressNotification.storyName = "In Progress/Loading";

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
