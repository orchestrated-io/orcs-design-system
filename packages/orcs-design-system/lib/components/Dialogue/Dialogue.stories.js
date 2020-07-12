import React from "react";
import Dialogue from ".";
import { P } from "../Typography";
import mdx from "./Dialogue.mdx";

export default {
  title: "Components/Dialogue",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Dialogue
};

export const Basic = () => (
  <Dialogue
    width="320px"
    buttonText="Delete data"
    variant="danger"
    icon={["fas", "trash"]}
    confirmAction={() => {
      /* eslint-disable no-console */
      console.log("You clicked OK");
      // Must return a truthy value or a promise that resolves to a truthy value in order to close the dialogue
      //return true;
      console.log("action starting...");
      return Promise.resolve().then(() => {
        console.log("action done");
        return true;
        /* eslint-enable no-console */
      });
    }}
    confirmText="OK"
    cancelAction={() => {
      /* eslint-disable no-console */
      console.log("You clicked Cancel");
      /* eslint-enable no-console */
    }}
    cancelText="Cancel"
    iconConfirm={["fas", "check"]}
    iconCancel={["fas", "times"]}
  >
    <>
      <P weight="bold" marginBottom="sm">
        This will remove all data from the application.
      </P>
      <P>Do you wish to continue?</P>
    </>
  </Dialogue>
);
