import React from "react";
import Notification from ".";
import Loading from "../Loading";
import Spacer from "../Spacer";
import Flex from "../Flex";

export default {
  title: "Units/Notification",
  parameters: {
    component: Notification
  }
};

export const defaultNotification = () => (
  <Notification icon={["fas", "share-square"]}>
    Default notification message for messages that are not super important, e.g.
    Link shared.
  </Notification>
);
defaultNotification.story = {
  name: "Default"
};

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
colourNotification.story = {
  name: "Colour"
};

export const textOnlyNotification = () => (
  <Notification>Text-only notification</Notification>
);
textOnlyNotification.story = {
  name: "Text-only"
};

export const closeDisabledNotification = () => (
  <Notification closable={false}>
    Closing this notification is disabled, this should be used for persistant
    notifications e.g. Stage 1 is now locked and is read-only.
  </Notification>
);
closeDisabledNotification.story = {
  name: "Close disabled"
};

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
inProgressNotification.story = {
  name: "In progress"
};

export const floatingNotification = () => (
  <Notification floating bottom="20px" right="20px" icon={["fas", "bell"]}>
    Floating notification.
  </Notification>
);
floatingNotification.story = {
  name: "Floating"
};
