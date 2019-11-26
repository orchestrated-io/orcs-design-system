import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button";
import Flex from "../Flex";
import Icon from "../Icon";
import Layout from "../Layout";
import Typography from "../Typography";
import Card from ".";
import colours from "../../colours";
import variables from "../../variables";

export default {
  title: "Design System|Card",
  parameters: {
    component: Card
  }
};

const Item = styled.div`
  word-wrap: break-word;
  width: ${props =>
    props.width ? props.width : props.fluid ? "100%" : "auto"};
  height: ${props => (props.fluid ? "100%" : "auto")};
  background: ${colours.white};
  border-radius: ${variables.borderRadius};
  padding: ${variables.defaultSpacing};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  ${({ colour }) =>
    colour === "primary"
      ? css`
          border-radius: 0 0 ${variables.borderRadius} ${variables.borderRadius};
          border-top: solid 3px ${colours.primary};
        `
      : colour === "success"
      ? css`
          border-radius: 0 0 ${variables.borderRadius} ${variables.borderRadius};
          border-top: solid 3px ${colours.success};
        `
      : colour === "warning"
      ? css`
          border-radius: 0 0 ${variables.borderRadius} ${variables.borderRadius};
          border-top: solid 3px ${colours.warning};
        `
      : colour === "danger"
      ? css`
          border-radius: 0 0 ${variables.borderRadius} ${variables.borderRadius};
          border-top: solid 3px ${colours.danger};
        `
      : colour === "greyDark"
      ? css`
          border-radius: 0 0 ${variables.borderRadius} ${variables.borderRadius};
          border-top: solid 3px ${colours.greyDark};
        `
      : css`
          border-top: 0;
        `};

  ${props =>
    props.center
      ? css`
          ,
          > *,
          > div > * {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `
      : css``};

  ${props =>
    props.alternate
      ? css`
          > div:first-of-type {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          h4 {
            margin-left: auto;
          }
        `
      : css``};
`;

const Header = styled.div`
  margin-bottom: ${variables.defaultSpacing};
  svg {
    margin-right: 10px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
`;

const Subtitle = styled.h4``;

const Content = styled.div``;

const ChangeIcon = styled.div`
  display: inline-block;
  width: 14px;
  height: 2px;
  background-size: 14px 14px;
  background-color: ${colours.grey};
  margin: 0 0 0 ${variables.defaultSpacingHalf};
  ${props =>
    props.changeIcon === "arrowUp"
      ? css`
          background-color: transparent;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' version='1.1'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1173.000000, -214.000000)' fill='%2378797D'%3E%3Cg transform='translate(1173.000000, 210.000000)'%3E%3Cpath d='M0.1 12.1L0.8 12.8C1 13 1.3 13 1.4 12.8L6.9 7.3 6.9 19.4C6.9 19.6 7.1 19.8 7.3 19.8L8.3 19.8C8.6 19.8 8.8 19.6 8.8 19.4L8.8 7.3 14.3 12.8C14.4 13 14.7 13 14.9 12.8L15.6 12.1C15.7 11.9 15.7 11.7 15.6 11.5L8.1 4.1C8 4 7.7 4 7.5 4.1L0.1 11.5C0 11.7 0 11.9 0.1 12.1Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          height: 14px;
        `
      : props.changeIcon === "arrowDown"
      ? css`
          background-color: transparent;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' version='1.1'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-1173.000000, -214.000000)' fill='%2378797D'%3E%3Cg transform='translate(1173.000000, 210.000000)'%3E%3Cpath d='M0.1 12.1L0.8 12.8C1 13 1.3 13 1.4 12.8L6.9 7.3 6.9 19.4C6.9 19.6 7.1 19.8 7.3 19.8L8.3 19.8C8.6 19.8 8.8 19.6 8.8 19.4L8.8 7.3 14.3 12.8C14.4 13 14.7 13 14.9 12.8L15.6 12.1C15.7 11.9 15.7 11.7 15.6 11.5L8.1 4.1C8 4 7.7 4 7.5 4.1L0.1 11.5C0 11.7 0 11.9 0.1 12.1Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          height: 14px;
          transform: rotate(180deg);
        `
      : css``}
`;

const ChangeValue = styled.small`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${colours.grey};
  margin: 0 0 0 ${variables.defaultSpacingHalf};
`;

export const basic = () => (
  <Card title="Card title" subtitle="Subtitle here">
    <Typography.P>This is the basic card layout.</Typography.P>
  </Card>
);
basic.story = {
  name: "Basic"
};

export const alternate = () => (
  <Card alternate title="Card title" subtitle="18">
    <Typography.P>
      This is an alternate style card that moves the subtitle to the right of
      the title, rather than underneath it.
    </Typography.P>
  </Card>
);
alternate.story = {
  name: "Alternate"
};

export const centered = () => (
  <Card center title="Card heading" subtitle="Subtitle">
    <Typography.P>This is an example of a centered card.</Typography.P>
  </Card>
);
centered.story = {
  name: "Centered"
};

export const colour = () => (
  <>
    <Layout childVerticalSpacing>
      <Card alternate title="Card title" subtitle="18" colour="primary">
        <Typography.P>
          This is an alternate style card that has a coloured border. Colours
          are taken from the defined system colours (eg &quot;primary&quot;).
        </Typography.P>
      </Card>
      <Card alternate title="Card title" subtitle="18" colour="warning">
        <Typography.P>
          This is an alternate style card that has a coloured border using the
          &quot;warning&quot; colour. Colours are taken from the defined system
          colours (eg &quot;primary&quot;).
        </Typography.P>
      </Card>
      <Card alternate title="Card title" subtitle="18" colour="danger">
        <Typography.P>
          This is an alternate style card that has a coloured border using the
          &quot;danger&quot; colour. Colours are taken from the defined system
          colours (eg &quot;primary&quot;).
        </Typography.P>
      </Card>
    </Layout>
  </>
);
colour.story = {
  name: "Coloured Border"
};

export const fluid = () => (
  <Card fluid title="Full-width card heading" subtitle="Sub-heading">
    <Typography.P>
      This is an example of a fluid card. It will stretch to 100% width and
      height of its parent container.
    </Typography.P>
  </Card>
);
fluid.story = {
  name: "Fluid"
};

export const icon = () => (
  <Card
    alternate
    icon={["fas", "map-marker-alt"]}
    title="Heading with Icon"
    subtitle="Sub-heading"
  >
    <Typography.P>
      This is an alternate style card that supports a Font Awesome icon in the
      heading.
    </Typography.P>
  </Card>
);
icon.story = {
  name: "Icon"
};

export const specifyWidth = () => (
  <>
    <Flex justifyBetween>
      <Card width="100px" title="Small Card" subtitle="Subtitle">
        <Typography.P>Small card with 100px width.</Typography.P>
      </Card>
      <Card width="20%" title="20% Card" subtitle="Subtitle">
        <Typography.P>Card with percentage width.</Typography.P>
      </Card>
      <Card
        width="calc(70% - 100px)"
        title="Calculated width"
        subtitle="Subtitle"
      >
        <Typography.P>Card with calculated width.</Typography.P>
      </Card>
    </Flex>
    <Layout padding>
      <Flex justifyBetween>
        <Card width="calc(50% - 30px)" center>
          <Layout childVerticalSpacing>
            <Icon icon={["fas", "file"]} size="3x" color={colours.greyLight} />
            <Typography.H1 center>Create new</Typography.H1>
            <Typography.P center>
              Start with a blank slate and add your own data
            </Typography.P>
            <Button>Start fresh</Button>
          </Layout>
        </Card>
        <Card width="calc(50% - 30px)" center>
          <Layout childVerticalSpacing>
            <Icon icon={["fas", "eye"]} size="3x" color={colours.greyLight} />
            <Typography.H1 center>Explore app</Typography.H1>
            <Typography.P center>
              Look at pre-populated data to see app in action
            </Typography.P>
            <Button>View example</Button>
          </Layout>
        </Card>
      </Flex>
    </Layout>
  </>
);
specifyWidth.story = {
  name: "Width"
};

export const changeInValue = () => (
  <Card
    alternate
    title="31416 Units"
    changeValue="9 (+2 pies)"
    changeIcon="arrowUp"
  >
    <Typography.P>Lorem ipsum</Typography.P>
  </Card>
);
changeInValue.story = {
  name: "Change in Value"
};
