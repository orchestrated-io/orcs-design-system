import React from "react";
import Badge from "../Badge";
import Flex from "../Flex";
import Box from "../Box";
import Spacer from "../Spacer";
import StyledLink from "../StyledLink";
import Avatar from ".";

export default {
  title: "Components/Avatar",
  component: Avatar
};

export const defaultAvatar = () => (
  <Avatar
    title="Ayden Lundgre"
    initials="AL"
    subtitle="Senior Business Analyst"
    image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
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
    <Avatar
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
      imageAlt="Ayden Lundgre"
    />
  </Spacer>
);
imageOnly.storyName = "Image only";

export const iconOnly = () => (
  <Spacer my={4}>
    <Avatar title="Ayden Lundgre" subtitle="Senior Business Analyst" />
  </Spacer>
);
iconOnly.storyName = "Icon only";

export const nameLink = () => (
  <Avatar
    title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
    subtitle="Senior Business Analyst"
    initials="AL"
    image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
    imageAlt="Ayden Lundgre"
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
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
    />
    <Avatar
      sizing="small"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      imageAlt="Avatar for Ayden Lundgre"
      initials="AL"
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
    />
  </Spacer>
);
small.storyName = "Small";

export const large = () => (
  <Spacer my={4}>
    <Avatar
      sizing="large"
      title="Ayden Lundgre"
      titleLevel="H1"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
    <Avatar
      sizing="large"
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
    />
    <Avatar
      sizing="large"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      subtitle="Senior Business Analyst"
      imageAlt="Avatar for Ayden Lundgre"
      initials="AL"
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
    />
  </Spacer>
);
large.storyName = "Large";

export const titleLevel = () => (
  <Spacer my={4}>
    <Avatar
      sizing="large"
      title="Ayden Lundgre"
      titleLevel="H1"
      subtitle="Senior Business Analyst"
      initials="AL"
    />
  </Spacer>
);
titleLevel.storyName = "Title Level";

export const subtitleContent = () => (
  <Spacer my={4}>
    <Avatar
      sizing="large"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      imageAlt="Avatar for Ayden Lundgre"
      initials="AL"
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
      subtitleContent={<Badge mt="xs">Senior Business Analyst</Badge>}
    />
    <Avatar
      sizing="large"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      initials="AL"
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
      imageAlt="Avatar for Ayden Lundgre"
      subtitleContent={
        <Flex flexWrap="wrap">
          <Spacer mr="xs" mt="xs">
            <Badge>Senior Business Analyst</Badge>
            <Badge variant="warning">Scrum Master</Badge>
          </Spacer>
        </Flex>
      }
    />
  </Spacer>
);
subtitleContent.storyName = "Custom subtitle content";

export const localTime = () => (
  <Spacer my={4}>
    <Avatar
      sizing="large"
      title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
      initials="AL"
      image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
      imageAlt="Avatar for Ayden Lundgre"
      subtitleContent={<Badge mt="xs">Senior Business Analyst</Badge>}
      localTime="12:03pm local time"
    />
  </Spacer>
);
localTime.storyName = "With local time";

export const inverted = () => (
  <Box bg="greyDarkest" p="r">
    <Spacer my={4}>
      <Avatar
        type="inverted"
        title="Ayden Lundgre"
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
      />
      <Avatar
        type="inverted"
        title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
        imageAlt="Avatar for Ayden Lundgre"
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
        image="https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85f6932722401c73ad_ethan.png"
        imageAlt="Avatar for Ayden Lundgre"
      />
    </Spacer>
  </Box>
);
inverted.storyName = "Inverted";

export const alternateShapes = () => (
  <Spacer my={4}>
    <Avatar
      shape="square"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      imageAlt="Avatar for Innovation Lab"
      sizing="large"
    />
    <Avatar
      shape="square"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      imageAlt="Avatar for Innovation Lab"
    />
    <Avatar
      shape="square"
      sizing="small"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      initials="IL"
      imageAlt="Avatar for Innovation Lab"
    />
    <Avatar
      shape="square"
      sizing="small"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      imageAlt="Avatar for Innovation Lab"
    />
    <Avatar
      shape="hexagon"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      imageAlt="Avatar for Innovation Lab"
      sizing="large"
    />
    <Avatar
      shape="hexagon"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      imageAlt="Avatar for Innovation Lab"
    />
    <Avatar
      shape="hexagon"
      sizing="small"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      initials="IL"
      imageAlt="Avatar for Innovation Lab"
    />
    <Avatar
      shape="hexagon"
      sizing="small"
      title={<StyledLink href="#">Innovation Lab</StyledLink>}
      subtitle="15 team members"
      imageAlt="Avatar for Innovation Lab"
    />
    <Avatar
      shape="tag"
      title={<StyledLink href="#">Javascript</StyledLink>}
      subtitle="Tagged 123 times"
      image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
      imageAlt="Avatar for Javascript"
      sizing="large"
    />
    <Avatar
      shape="tag"
      title={<StyledLink href="#">Javascript</StyledLink>}
      subtitle="Tagged 123 times"
      image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
      imageAlt="Avatar for Javascript"
    />
    <Avatar
      shape="tag"
      sizing="small"
      title={<StyledLink href="#">Javascript</StyledLink>}
      subtitle="Tagged 123 times"
      initials="JS"
      imageAlt="Avatar for Javascript"
    />
    <Avatar
      shape="tag"
      sizing="small"
      title={<StyledLink href="#">Javascript</StyledLink>}
      subtitle="Tagged 123 times"
      imageAlt="Avatar for Javascript"
    />
  </Spacer>
);
alternateShapes.storyName = "Alternate Shapes";
