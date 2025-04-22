import React, { useRef, useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import useOnclickOutside from "react-cool-onclickoutside";
import { BrowserRouter } from "react-router-dom";
import ActionsMenu, {
  ActionsMenuBody,
  ActionsMenuHeading,
  ActionsMenuItem
} from ".";
import Flex from "../Flex";
import Icon from "../Icon";
import Box from "../Box";
import Button from "../Button";
import TextArea from "../TextArea";
import {
  faAngleLeft,
  faPen,
  faTimes,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/ActionsMenu",
  decorators: [(storyFn) => <Box pb="150px">{storyFn()}</Box>],
  component: ActionsMenu
};

export const defaultActionsMenu = () => (
  <ActionsMenu>
    <ActionsMenuItem href="https://orchestrated.io/">
      Open details page
    </ActionsMenuItem>
    <BrowserRouter>
      <ActionsMenuItem as={Link} to="/">
        Edit
      </ActionsMenuItem>
    </BrowserRouter>
    <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>
  </ActionsMenu>
);
defaultActionsMenu.storyName = "Default";

export const leftOffsetActionsMenu = () => (
  <Flex justifyContent="flex-end">
    <ActionsMenu ariaLabel="Options Menu" direction="left-start">
      <ActionsMenuItem href="https://orchestrated.io/">
        Open details page
      </ActionsMenuItem>
      <BrowserRouter>
        <ActionsMenuItem as={Link} to="/">
          Edit
        </ActionsMenuItem>
      </BrowserRouter>
      <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>
    </ActionsMenu>
  </Flex>
);

leftOffsetActionsMenu.storyName = "Left offset";

const MenuItems = React.forwardRef(({ closeMenu, reasons }, ref) => {
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

  useImperativeHandle(ref, () => ({
    reset
  }));

  const clickOther = () => {
    setSelectedReason("other");
    setShowOther(true);
  };

  const setReason = (id) => () => {
    // TODO: Make the call to back end
    setSelectedReason(id);
    setOtherReason("");
    resetAndCloseMenu();
  };

  const onOtherReasonChange = (e) => {
    setOtherReason(e.target.value);
  };

  return (
    <>
      <ActionsMenuHeading onClick={reset} canClick={showOther}>
        {showOther && <Icon icon={faAngleLeft} mr="xs" />} Select reason
      </ActionsMenuHeading>
      {!showOther && (
        <>
          {reasons.map(({ id, label }) => {
            if (id === "other") {
              return (
                <ActionsMenuItem
                  key={id}
                  type="button"
                  id="other"
                  selected={selectedReason === id}
                  onClick={clickOther}
                >
                  <Flex alignItems="center" justifyContent="space-between">
                    {label}
                    <Icon icon={faPen} size="sm" />
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
    </>
  );
});

MenuItems.propTypes = {
  closeMenu: PropTypes.bool,
  reasons: PropTypes.array
};

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
        direction="left-start"
        className="ignore-onclickoutside"
        customTriggerComponent={
          <Button
            variant="default"
            iconOnly
            type="button"
            width="30px"
            height="30px"
          >
            <Icon icon={faPen} size="sm" />
          </Button>
        }
        closeOnClick={false}
      >
        <MenuItems closeMenu={closeMenu} reasons={Reasons} />
      </ActionsMenu>
    </Flex>
  );
};

advancedActionsMenu.storyName = "Advanced Actions Menu";

export const customActionsMenu = () => {
  const AdvancedActionsMenu = () => {
    const [toggleState, setToggle] = useState(false);
    const menuItemsRef = useRef(null);

    const closeMenu = () => {
      setToggle(false);
    };

    const onToggle = (e) => {
      e.stopPropagation();
      setToggle(!toggleState);
    };

    return (
      <div>
        <Flex justifyContent="flex-end">
          <ActionsMenuBody
            toggleState={toggleState}
            onToggle={onToggle}
            direction="left-start"
            customTriggerComponent={
              <Button
                variant="danger"
                iconOnly
                type="button"
                width="30px"
                height="30px"
              >
                <Icon icon={faTimes} />
              </Button>
            }
          >
            <MenuItems
              ref={menuItemsRef}
              closeMenu={closeMenu}
              reasons={Reasons}
            />
          </ActionsMenuBody>
        </Flex>
      </div>
    );
  };

  return <AdvancedActionsMenu />;
};

customActionsMenu.storyName = "Custom Actions Menu";

export const textButtonActionsMenu = () => {
  const TextButtonActionsMenu = () => {
    const [toggleState, setToggle] = useState(false);
    const menuItemsRef = useRef(null);

    const closeMenu = () => {
      setToggle(false);
    };

    const resetAndCloseMenu = () => {
      if (menuItemsRef.current) {
        menuItemsRef.current.reset();
      }
      closeMenu();
    };

    const menuRef = useOnclickOutside(resetAndCloseMenu, {
      disabled: !toggleState
    });

    const onToggle = (e) => {
      e.stopPropagation();
      setToggle(!toggleState);
    };

    return (
      <div ref={menuRef}>
        <ActionsMenuBody
          toggleState={toggleState}
          onToggle={onToggle}
          menuWidth="120px"
          direction="bottom-start"
          customTriggerComponent={
            <Button variant="ghost" type="button" iconRight small>
              Contact via...
              <Icon icon={faChevronDown} />
            </Button>
          }
        >
          <ActionsMenuItem href="#">Email</ActionsMenuItem>
          <ActionsMenuItem href="#">Phone</ActionsMenuItem>
          <ActionsMenuItem href="#">MS Teams</ActionsMenuItem>
          <ActionsMenuItem href="#">Slack</ActionsMenuItem>
        </ActionsMenuBody>
      </div>
    );
  };

  return <TextButtonActionsMenu />;
};

textButtonActionsMenu.storyName = "Text Button Actions Menu";

export const keepInViewExample = () => (
  <Flex alignItems="flex-end" width="100%" flexDirection="column">
    <ActionsMenu mb="r">
      <ActionsMenuItem href="https://orchestrated.io/">
        Open details page
      </ActionsMenuItem>
      <BrowserRouter>
        <ActionsMenuItem as={Link} to="/">
          Edit
        </ActionsMenuItem>
      </BrowserRouter>
      <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>
    </ActionsMenu>
    <ActionsMenu
      direction="bottom-start"
      menuWidth="200px"
      customTriggerComponent={
        <Button variant="ghost" type="button" iconRight small>
          Contact via...
          <Icon icon={faChevronDown} />
        </Button>
      }
    >
      <ActionsMenuItem href="#">Email</ActionsMenuItem>
      <ActionsMenuItem href="#">Phone</ActionsMenuItem>
      <ActionsMenuItem href="#">MS Teams</ActionsMenuItem>
      <ActionsMenuItem href="#">Slack</ActionsMenuItem>
    </ActionsMenu>
  </Flex>
);
keepInViewExample.storyName = "Keep In View Example";
