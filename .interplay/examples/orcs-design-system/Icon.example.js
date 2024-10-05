import React from "react";
import { Icon } from "orcs-design-system";

export default {
  title: "Icon",
  component: Icon
};

export const Basic = {
  render: () => <Icon icon={["fas", "angle-down"]} title="Down" />
};
