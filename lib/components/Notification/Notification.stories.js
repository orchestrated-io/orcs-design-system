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
  ]
};

export const colours = () => [
  <Notification key="notification-1" icon={["fas", "share-square"]}>
    Default notification
  </Notification>,
  <Notification
    key="notification-2"
    colour="success"
    icon={["fas", "check-circle"]}
  >
    Green notification
  </Notification>,
  <Notification
    key="notification-3"
    colour="warning"
    icon={["fas", "exclamation-triangle"]}
  >
    Yellow notification
  </Notification>,
  <Notification
    key="notification-4"
    colour="danger"
    icon={["fas", "exclamation-circle"]}
  >
    Red notification
  </Notification>
];
colours.story = {
  name: "Colours"
};
