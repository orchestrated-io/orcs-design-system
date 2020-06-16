import React from "react";
import Box from "../Box";
import Spacer from "../Spacer";
import StyledLink from "../StyledLink";
import Avatar from ".";

export default {
  title: "Units/Avatar",
  parameters: {
    component: Avatar
  }
};

export const defaultAvatar = () => (
  <Avatar
    title="Ayden Lundgre"
    initials="AL"
    subtitle="Senior Business Analyst"
    image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
  />
);
defaultAvatar.story = {
  name: "Default avatar"
};

export const noImage = () => (
  <Avatar
    title="Ayden Lundgre"
    subtitle="Senior Business Analyst"
    initials="AL"
  />
);
noImage.story = {
  name: "No image"
};

export const iconOnly = () => (
  <Avatar title="Ayden Lundgre" subtitle="Senior Business Analyst" />
);
iconOnly.story = {
  name: "Icon only"
};

export const nameLink = () => (
  <Avatar
    title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
    subtitle="Senior Business Analyst"
    initials="AL"
    image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
  />
);
nameLink.story = {
  name: "Name as link"
};

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
small.story = {
  name: "Small"
};

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
        initials="AL"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
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
inverted.story = {
  name: "On dark background"
};
