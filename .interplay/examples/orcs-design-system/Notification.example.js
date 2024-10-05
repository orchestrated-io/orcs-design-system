import React from "react";
import { Notification } from "orcs-design-system";

export default {
  title: "Notification",
  component: Notification
};

export const Basic = {
  render: () => (
    <Notification icon={["fas", "share-square"]}>
      Notification message.
    </Notification>
  )
};
