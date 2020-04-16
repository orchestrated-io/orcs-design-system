import React from "react";
import Dialogue from ".";
import { P } from "../Typography";

export default {
  title: "Components/Dialogue",
  component: Dialogue,
  includeStories: []
};

export const Basic = () => (
  <Dialogue
    width="320px"
    buttonText="Delete data"
    colour="danger"
    icon={["fas", "trash"]}
    confirmAction={() => {
      // Must return a truthy value or a promise that resolves to a truthy value in order to close the dialogue
      //return true;
      return Promise.resolve(true);
    }}
    confirmText="OK"
    cancelText="Cancel"
  >
    <>
      <P weight="bold" marginBottom="sm">
        This will remove all data from the application.
      </P>
      <P>Do you wish to continue?</P>
    </>
  </Dialogue>
);

Basic.story = {
  name: "Basic"
};
