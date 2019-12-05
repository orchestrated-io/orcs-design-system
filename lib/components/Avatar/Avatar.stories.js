import React from "react";
import Avatar from ".";
import Layout from "../Layout";
import StyledLink from "../StyledLink";

export default {
  title: "Design System|Avatar",
  parameters: {
    component: Avatar
  }
};

export const withInitial = () => (
  <Avatar
    title="Ayden Lundgre"
    subtitle="Senior Business Analyst"
    initials="AL"
  />
);

export const withImage = () => (
  <Avatar
    title="Ayden Lundgre"
    subtitle="Senior Business Analyst"
    initials="AL"
    image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
  />
);

export const withTitleAsLink = () => (
  <Avatar
    title={<StyledLink href="#">Ayden Lundgre</StyledLink>}
    subtitle="Senior Business Analyst"
    initials="AL"
    image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
  />
);

export const inverted = () => (
  <>
    <Layout backgroundDark paddingHalf>
      <Avatar
        inverted
        title="Ayden Lundgre"
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
      />
    </Layout>
    <Layout backgroundDark paddingHalf>
      <Avatar
        inverted
        small
        title="Ayden Lundgre"
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
      />
    </Layout>

    <Layout backgroundDark paddingHalf>
      <Avatar
        inverted
        small
        title={
          <StyledLink href="#">Ayden Lundgre</StyledLink>
        }
        subtitle="Senior Business Analyst"
        initials="AL"
        image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
      />
    </Layout>
  </>
);

export const small = () => (
  <>
    <Avatar small title="Ayden Lundgre" subtitle="Senior Business Analyst" />

    <Avatar
      small
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
    />

    <Avatar
      small
      title="Ayden Lundgre"
      subtitle="Senior Business Analyst"
      initials="AL"
      image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
    />

    <Avatar
      small
      title={
        <StyledLink href="#">Ayden Lundgre</StyledLink>
      }
      subtitle="Senior Business Analyst"
      initials="AL"
      image="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
    />
  </>
);
