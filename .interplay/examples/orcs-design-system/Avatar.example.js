import React from "react";
import { Avatar } from "orcs-design-system";

export default {
  title: "Avatar",
  component: Avatar
};

export const Basic = {
  render: () => (
    <Avatar
      title="Ayden Lundgre"
      initials="AL"
      subtitle="Senior Business Analyst"
      image="https://api.dicebear.com/7.x/personas/svg?seed=aydos"
    />
  )
};
