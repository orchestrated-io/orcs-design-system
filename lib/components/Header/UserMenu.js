import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import Icon from "../Icon";
import Divider from "../Divider";
import { Small } from "../Typography";
import {
  UserMenuToggle,
  AvatarBorder,
  UserMenuContainer,
  UserMenuContent
} from "./Header.styles";

const UserMenu = ({
  avatarSource,
  avatarAlt,
  avatarInitials,
  userName,
  userMenuContent
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <UserMenuContainer
      ref={menuRef}
      p="2px"
      pr="s"
      bg="white"
      width="auto"
      border="solid 1px"
      borderColor="greyLight"
      display="flex"
    >
      <UserMenuToggle onClick={toggleMenu}>
        <AvatarBorder borderRadius="50%" p="2px">
          <Avatar
            customSize="navBarAvatarSize"
            image={avatarSource}
            imageAlt={avatarAlt}
            initials={avatarInitials}
          />
        </AvatarBorder>
        <Icon
          icon={["fas", "chevron-down"]}
          rotation={isOpen ? 180 : 0}
          color="greyDark"
          ml="s"
        />
      </UserMenuToggle>
      <UserMenuContent
        p="s"
        bg="white"
        width="fit-content"
        maxWidth="260px"
        minWidth="200px"
        maxHeight="430px"
        border="solid 1px"
        borderRadius="2"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        borderColor="greyLight"
        shadow="default"
        isOpen={isOpen}
      >
        <Small color="greyDarker" fontSize="0">
          {userName}
        </Small>
        <Divider light />
        {userMenuContent}
      </UserMenuContent>
    </UserMenuContainer>
  );
};

UserMenu.propTypes = {
  /** Text for logged in user name and email. */
  userName: PropTypes.node,
  /** Source path for avatar image. */
  avatarSource: PropTypes.node,
  /** Alt text for avatar image. */
  avatarAlt: PropTypes.string,
  /** Initials for avatar as fallback if there is no image */
  avatarInitials: PropTypes.string,
  /** Allows you to pass in child components to user dropdown menu */
  userMenuContent: PropTypes.node
};

export default UserMenu;
