import React from "react";
import Notification from ".";
import Layout from "../Layout";

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
    Default notification
  </Notification>
);
basicNotification.story = {
  name: "Basic"
};

export const colours = () => (
  <>
    <Notification colour="success" icon={["fas", "check-circle"]}>
      Green notification
    </Notification>

    <Notification colour="warning" icon={["fas", "exclamation-triangle"]}>
      Yellow notification
    </Notification>

    <Notification colour="danger" icon={["fas", "exclamation-circle"]}>
      Red notification
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
    Closing this notification is disabled, eg Processing or Loading data . . .
  </Notification>
);
closeDisabled.story = {
  name: "Close Disabled"
};

export const floatingNotification = () => (
  <Notification floating bottom="20px" right="20px" icon={["fas", "bell"]}>
    Floating notification.
  </Notification>
);
floatingNotification.story = {
  name: "Floating Notification"
};
