import React from "react";
import { Icon, StatusDot } from "orcs-design-system";

export default {
  title: "StatusDot",
  component: StatusDot
};

export const Basic = {
  render: () => <StatusDot />
};
export const WithIcon = {
  render: () => (
    <StatusDot variant="success" icon>
      <Icon icon={["fas", "check"]} color="white" size="xs" transform="up-2" />
    </StatusDot>
  )
};
