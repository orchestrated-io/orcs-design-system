import React from 'react';
import Notification from '.';
import Layout from '../Layout';

export default {
  title: 'DESIGN SYSTEM|Notification',
  decorators: [storyFn => <Layout padding childVerticalSpacing>{storyFn()}</Layout>]
};

export const colours = ()  => [
  <Notification icon={["fas", "share-square"]}>Default notification</Notification>,
  <Notification colour="success" icon={["fas", "check-circle"]}>Green notification</Notification>,
  <Notification colour="warning" icon={["fas", "exclamation-triangle"]}>Yellow notification</Notification>,
  <Notification colour="danger" icon={["fas", "exclamation-circle"]}>Red notification</Notification>
  ];
  colours.story = {
  name: "Colours"
}