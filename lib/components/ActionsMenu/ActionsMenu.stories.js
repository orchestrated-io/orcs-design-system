import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import useOnclickOutside from "react-cool-onclickoutside";
import { BrowserRouter } from "react-router-dom";
import ActionsMenu, { ActionsMenuHeading, ActionsMenuItem } from ".";
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
    <ActionsMenuItem href="https://orchestrated.io/">
      Open details page
    </ActionsMenuItem>
    <BrowserRouter>
      <ActionsMenuItem as={Link} to="/">Edit</ActionsMenuItem>
    </BrowserRouter>
    <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>
  </ActionsMenu>
);
defaultActionsMenu.storyName = "Default";

export const leftOffsetActionsMenu = () => (
  <Flex justifyContent="flex-end">
    <ActionsMenu direction="left">
      <ActionsMenuItem href="https://orchestrated.io/">
        Open details page
      </ActionsMenuItem>
      <BrowserRouter>
        <ActionsMenuItem as={Link} to="/">Edit</ActionsMenuItem>
      </BrowserRouter>
      <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>
    </ActionsMenu>
  </Flex>
);
leftOffsetActionsMenu.storyName = "Left offset";

const Reasons = [
  {
    id: "tooMany",
    label: "Too many people"
  },
  {
    id: "notEnough",
    label: "Not enough people"
  },
  {
    id: "noPeopleWithSkills",
    label: "No people with the desired skills"
  },
  {
    id: "other",
    label: "Other"
  }
];

const MenuItems = ({ closeMenu }) => {
  const [showOther, setShowOther] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);
  const [otherReason, setOtherReason] = useState("");

  const reset = () => {
    setShowOther(false);
  };

  const resetAndCloseMenu = () => {
    reset();
    closeMenu();
  };

  const menuRef = useOnclickOutside(resetAndCloseMenu);

  const clickOther = () => {
    setSelectedReason("other");
    setShowOther(true);
  };

  const setReason = (id) => () => {
    // TODO: Make the call to back end
    setSelectedReason(id);
    setOtherReason("");
    reset();
    closeMenu();
  };

  const onOtherReasonChange = (e) => {
    setOtherReason(e.target.value);
  };

  return (
    <div ref={menuRef}>
      <ActionsMenuHeading onClick={reset}>
        {showOther && <Icon icon={["fas", "angle-left"]} />} Select reason
      </ActionsMenuHeading>
      {!showOther && (
        <>
          {Reasons.map(({ id, label }) => {
            if (id === "other") {
              return (
                <ActionsMenuItem
                  key={id}
                  type="button"
                  selected={selectedReason === id}
                  onClick={clickOther}
                >
                  <Flex alignItems="center" justifyContent="space-between">
                    {label}
                    <Icon icon={["fas", "pen"]} />
                  </Flex>
                </ActionsMenuItem>
              );
            }
            return (
              <ActionsMenuItem
                key={id}
                type="button"
                selected={selectedReason === id}
                onClick={setReason(id)}
              >
                {label}
              </ActionsMenuItem>
            );
          })}
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
            defaultValue={otherReason}
            onChange={onOtherReasonChange}
          />
          <Button onClick={resetAndCloseMenu} small variant="danger" mt="s">
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
        className="ignore-onclickoutside"
        customTriggerComponent={
          <Button variant="danger" iconOnly type="button">
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
