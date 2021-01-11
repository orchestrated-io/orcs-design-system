import React, { useState } from "react";
import PropTypes from "prop-types";
import useOnclickOutside from "react-cool-onclickoutside";
import ActionsMenu, { ActionsMenuHeading } from ".";
import Flex from "../Flex";
import Icon from "../Icon";
import Box from "../Box";
import Button from "../Button";
import TextArea from "../TextArea";
import mdx from "./ActionsMenu.mdx";

export default {
  title: "Components/ActionsMenu",
  decorators: [(storyFn) => <Box pb="150px">{storyFn()}</Box>],
  parameters: {
    docs: { page: mdx }
  },
  component: ActionsMenu
};

export const defaultActionsMenu = () => (
  <ActionsMenu>
    <a href="https://orchestrated.io/">Open details page</a>
    <button type="button">Edit</button>
    <button type="button">Remove</button>
  </ActionsMenu>
);
defaultActionsMenu.storyName = "Default";

export const leftOffsetActionsMenu = () => (
  <Flex justifyContent="flex-end">
    <ActionsMenu direction="left">
      <a href="https://orchestrated.io/">Open details page</a>
      <button type="button">Edit</button>
      <button type="button">Remove</button>
    </ActionsMenu>
  </Flex>
);
leftOffsetActionsMenu.storyName = "Left offset";

const MenuItems = ({ closeMenu }) => {
  const [showOther, setShowOther] = useState(false);
  const reset = () => {
    setShowOther(false);
  };
  const menuRef = useOnclickOutside(() => {
    reset();
    closeMenu();
  });

  const clickOther = () => {
    setShowOther(true);
  };

  const setReason = () => {
    reset();
    closeMenu();
  };

  return (
    <div ref={menuRef}>
      <ActionsMenuHeading onClick={reset}>
        {showOther && <Icon icon={["fas", "angle-left"]} />} Select reason
      </ActionsMenuHeading>
      {!showOther && (
        <>
          <button onClick={setReason} type="button">
            Too many people
          </button>
          <button onClick={setReason} type="button">
            Not enough people
          </button>
          <button onClick={setReason} type="button">
            No people with the desired skills
          </button>
          <button type="button" onClick={clickOther}>
            <Flex alignItems="center" justifyContent="space-between">
              Other
              <Icon icon={["fas", "pen"]} />
            </Flex>
          </button>
        </>
      )}
      {showOther && (
        <Box id="editableContent" p="s">
          <TextArea
            inverted
            id="TextArea01"
            label="Reason for rejection"
            cols="35"
            rows="3"
          />
          <Button onClick={setReason} small variant="danger" mt="s">
            Reject request
          </Button>
        </Box>
      )}
    </div>
  );
};

export const advancedActionsMenu = () => {
  const ref = React.createRef(null);
  const closeMenu = () => {
    if (ref.current) {
      ref.current.closeMenu();
    }
  };

  return (
    <Flex justifyContent="flex-end">
      <ActionsMenu
        ref={ref}
        direction="left"
        customTriggerComponent={
          <Button variant="danger" iconOnly>
            <Icon icon={["fas", "times"]} />
          </Button>
        }
        closeOnClick={false}
      >
        <MenuItems closeMenu={closeMenu} />
      </ActionsMenu>
    </Flex>
  );
};
advancedActionsMenu.storyName = "Advanced Actions Menu";

MenuItems.propTypes = {
  closeMenu: PropTypes.bool
};
