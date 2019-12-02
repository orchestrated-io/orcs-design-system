import React from "react";
import Notification from ".";
import Layout from "../Layout";

export default {
  title: "DESIGN SYSTEM|Notification",
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
  <Notification icon={["fas", "share-square"]} closable={true}>
    Default notification
  </Notification>
);
basicNotification.story = {
  name: "Basic"
};

export const colourNotification = () => (
  <>
    <Notification colour="success" icon={["fas", "check-circle"]}>
      Green notification for good/successful notifications, e.g. Details updated
      successfully!
    </Notification>

    <Notification colour="warning" icon={["fas", "exclamation-triangle"]}>
      Warning notification e.g. This may take a few minutes to update.
    </Notification>

    <Notification colour="danger" icon={["fas", "exclamation-circle"]}>
      Error notification e.g. Update failed! Please try again.
    </Notification>
  </>
);
colourNotification.story = {
  name: "Colours"
};
