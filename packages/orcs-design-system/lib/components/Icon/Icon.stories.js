import React from "react";
import Flex from "../Flex";
import Icon from ".";
import Layout from "../Layout";
import colours from "../../colours";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(far, fas);

export default {
  title: "Design System|Icon",
  decorators: [
    storyFn => (
      <Layout padding>
        <Flex alignCenter justifyAround>
          {storyFn()}
        </Flex>
      </Layout>
    )
  ],
  parameters: {
    component: Icon
  }
};

export const basicIcon = () => (
  <>
    <Icon icon={["fas", "angle-down"]} />
    <Icon icon={["fas", "plus"]} />
    <Icon icon={["far", "user"]} />
  </>
);
basicIcon.story = {
  name: "Basic"
};

export const colouredIcon = () => (
  <>
    <Icon icon={["fas", "angle-down"]} color={colours.primaryDark} />
    <Icon icon={["fas", "plus"]} color={colours.successDark} />
    <Icon icon={["far", "user"]} color={colours.dangerDark} />
  </>
);
colouredIcon.story = {
  name: "Colours"
};

export const sizedIcon = () => (
  <>
    <Icon icon={["fas", "plus"]} size="sm" />
    <Icon icon={["fas", "plus"]} size="rg" />
    <Icon icon={["fas", "plus"]} size="lg" />
    <Icon icon={["fas", "plus"]} size="2x" />
  </>
);
sizedIcon.story = {
  name: "Size"
};

export const invertedIcon = () => (
  <>
    <Layout backgroundDark padding childChildHorizontalSpacing width="100%">
      <Flex justifyBetween alignCenter>
        <Icon icon={["fas", "angle-down"]} inverse />
        <Icon icon={["fas", "plus"]} inverse />
        <Icon icon={["far", "user"]} inverse />
      </Flex>
    </Layout>
  </>
);
invertedIcon.story = {
  name: "Inverted"
};

export const animatedIcon = () => (
  <>
    <Icon icon={["fas", "angle-down"]} spin />
    <Icon icon={["fas", "plus"]} pulse />
  </>
);
animatedIcon.story = {
  name: "Animated"
};

export const transformIcon = () => (
  <>
    <Icon icon={["fas", "coffee"]} rotation="270" />
    <Icon icon={["fas", "user"]} flip="vertical" />
    <Icon icon={["fas", "certificate"]} transform="grow-8 up-10" />
  </>
);
transformIcon.story = {
  name: "Transforms and Rotations"
};
