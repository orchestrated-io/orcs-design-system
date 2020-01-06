import React from "react";
import Notification from ".";
import Layout from "../Layout";
import Loading from "../Loading";
import Flex from "../Flex";

export default {
  title: "Notification",
  decorators: [
    storyFn => (
      <Layout padding childVerticalSpacing>
        {storyFn()}
      </Layout>
    )
  ],
  parameters: {
    component: Notification
  }
};

export const basicNotification = () => (
  <Notification icon={["fas", "share-square"]}>
    Default notification message for messages that aren't super important, e.g.
    Link shared.
  </Notification>
);
basicNotification.story = {
  name: "Basic"
};

export const colours = () => (
  <>
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
  </>
);
colours.story = {
  name: "Colours"
};

export const textNotification = () => (
  <Notification>Text-only notification</Notification>
);
textNotification.story = {
  name: "Text Only"
};

export const closeDisabled = () => (
  <Notification closable={false}>
    Closing this notification is disabled, this should be used for persistant notifications e.g. Stage 1 is now locked and is read-only.
  </Notification>
);
closeDisabled.story = {
  name: "Close Disabled"
};

export const inProgress = () => (
  <Notification closable={false}>
    <Layout childChildHorizontalSpacingHalf>
      <Flex>
        <Loading inverted />
        <span>
          In progress notification with disabled close. E.g. Importing data...
        </span>
      </Flex>
    </Layout>
  </Notification>
);
inProgress.story = {
  name: "In Progress"
};

export const floatingNotification = () => (
  <Notification floating bottom="20px" right="20px" icon={["fas", "bell"]}>
    Floating notification.
  </Notification>
);
floatingNotification.story = {
  name: "Floating Notification"
};
