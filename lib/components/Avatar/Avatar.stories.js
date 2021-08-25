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
    image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
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

export const imageOnly = () => (
  <Spacer my={4}>
    <Avatar image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" />
    <Avatar initials="AL" />
    <Avatar initials="Fun" uppercase={false} shape="hexagon" />
  </Spacer>
);
imageOnly.storyName = "Image only";

export const iconOnly = () => (
  <Avatar title="Ayden Lundgre" subtitle="Senior Business Analyst" />
);
iconOnly.storyName = "Icon only";

export const nameLink = () => (
  <Avatar
    title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
    subtitle="Senior Business Analyst"
    initials="AL"
    image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
  />
);
nameLink.storyName = "Name as link";

export const small = () => (
  <Spacer my={4}>
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
      image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
    />
    <Avatar
      sizing="small"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      initials="AL"
      image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
    />
  </Spacer>
);
small.storyName = "Small";

export const inverted = () => (
  <Box bg="greyDarkest" p="r">
    <Spacer my={4}>
      <Avatar
        type="inverted"
        title="Ayden Lundgre"
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
      />
      <Avatar
        type="inverted"
        title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
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
        image="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
      />
    </Spacer>
  </Box>
);
inverted.storyName = "Inverted";

export const alternateShape = () => (
  <Spacer my={4}>
    <Avatar
      shape="hexagon"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      image="https://images.unsplash.com/photo-1592609931095-54a2168ae893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjAxODB8MHwxfHNlYXJjaHwyNnx8Y29kZXxlbnwwfDB8fHwxNjI5MjczNjA3&ixlib=rb-1.2.1&q=80&w=1080"
    />
    <Avatar
      shape="hexagon"
      sizing="small"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      initials="IL"
    />
    <Avatar
      shape="hexagon"
      sizing="small"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
    />
  </Spacer>
);
alternateShape.storyName = "Alternate Shape";
