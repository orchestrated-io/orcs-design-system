import Spacer from ".";
import Avatar from "../Avatar";
import StyledLink from "../StyledLink";
import React from "react";

export default {
  title: "Components/Spacer",
  component: Spacer
};

export const marginSpacer = () => (
  <Spacer my={3}>
    <Avatar
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      sizing="small"
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      sizing="small"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      initials="AL"
    />
  </Spacer>
);

marginSpacer.storyName = "Margin Spacer";

export const paddingSpacer = () => (
  <Spacer padding={3}>
    <Avatar
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      sizing="small"
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      sizing="small"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      initials="AL"
    />
  </Spacer>
);

paddingSpacer.storyName = "Padding Spacer";
