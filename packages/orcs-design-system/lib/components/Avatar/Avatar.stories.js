import React from "react";
import Box from "../Box";
import Spacer from "../Spacer";
import StyledLink from "../StyledLink";
import Avatar from ".";
import mdx from "./Avatar.mdx";

export default {
  title: "Components/Avatar",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Avatar
};

export const defaultAvatar = () => (
  <Avatar
    title="Ayden Lundgre"
    initials="AL"
    subtitle="Senior Business Analyst"
    image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
  />
);
defaultAvatar.storyName = "Default";

export const noImage = () => (
  <Spacer my="r">
    <Avatar
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
      whiteInitials
    />
  </Spacer>
);
noImage.storyName = "No image";

export const iconOnly = () => (
  <Avatar title="Ayden Lundgre" subtitle="Senior Business Analyst" />
);
iconOnly.storyName = "Icon only";

export const nameLink = () => (
  <Avatar
    title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
    subtitle="Senior Business Analyst"
    initials="AL"
    image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
  />
);
nameLink.storyName = "Name as link";

export const small = () => (
  <Spacer my={3}>
    <Avatar
      sizing="small"
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      sizing="small"
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
      image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
    />
    <Avatar
      sizing="small"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      initials="AL"
      image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
    />
  </Spacer>
);
small.storyName = "Small";

export const inverted = () => (
  <Box bg="greyDarkest" p="r">
    <Spacer my={3}>
      <Avatar
        type="inverted"
        title="Ayden Lundgre"
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
      />
      <Avatar
        type="inverted"
        title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
      />
      <Avatar
        type="inverted"
        sizing="small"
        title="Ayden Lundgre"
        subtitle="Senior Business Analyst"
        initials={<StyledLink href="#">AL</StyledLink>}
      />
      <Avatar
        type="inverted"
        sizing="small"
        title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
      />
    </Spacer>
  </Box>
);
inverted.storyName = "Inverted";
