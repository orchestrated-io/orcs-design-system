import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout } from "styled-system";
import Avatar from "../Avatar";
import Box from "../Box";
import Icon from "../Icon";
import Divider from "../Divider";
import Flex, { FlexItem } from "../Flex";
import { Small } from "../Typography";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const Bar = styled("header").attrs((props) => ({
  "data-testid": props.dataTestId
}))(
  (props) => ({ height: themeGet("appScale.navBarSize")(props) }),
  css({
    width: "100%",
    zIndex: 12,
    position: "sticky",
    top: "0",
    display: "flex",
    alignItems: "center",
    bg: "transparent",
    gap: "r",
    p: "r"
  }),
  space
);

const AppName = styled("div")(
  (props) =>
    css({
      background: themeGet("colors.white")(props),
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "s",
      px: "s",
      height: "38px",
      borderRadius: themeGet("radii.2")(props),
      border: `1px solid ${themeGet("colors.greyLight")(props)}`,
      boxShadow: themeGet("shadows.boxDefault")(props),
      fontSize: themeGet("fontSizes.1")(props),
      fontWeight: themeGet("fontWeights.2")(props),
      color: themeGet("colors.greyDarkest")(props),
      img: {
        height: "22px",
        width: "auto"
      },
      svg: {
        height: "22px",
        width: "auto"
      },
      a: {
        fontSize: themeGet("fontSizes.1")(props),
        fontWeight: themeGet("fontWeights.2")(props),
        color: themeGet("colors.greyDarkest")(props)
      }
    }),
  space
);

const SearchContainer = styled("div")(
  (props) =>
    css({
      maxWidth: "600px",
      flex: "1 1 auto",
      borderRadius: themeGet("radii.2")(props),
      boxShadow: themeGet("shadows.boxDefault")(props)
    }),
  space,
  layout
);

const UserMenuToggle = styled("button")((props) =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xs",
    padding: "0",
    cursor: "pointer",
    border: "none",
    appearance: "none",
    bg: "transparent",
    color: themeGet("colors.greyDark")(props),
    fontSize: themeGet("fontSizes.1")(props),
    fontWeight: themeGet("fontWeights.2")(props),
    "&:focus, &:hover": {
      outline: "none",
      "svg path": {
        transition: "fill 300ms ease",
        fill: themeGet("colors.primary")(props)
      }
    }
  })
);

const AvatarBorder = styled(Box)(
  css({
    background:
      "linear-gradient(0deg, rgba(155,81,224,1) 0%, rgba(0,145,234,1) 100%)"
  })
);

const UserMenuContainer = styled(Box)((props) =>
  css({
    borderRadius: `19px ${themeGet("radii.2")(props)} ${themeGet("radii.2")(
      props
    )} 19px`,
    position: "relative"
  })
);

const UserMenu = styled(Box)((props) =>
  css({
    position: "absolute",
    gap: "s",
    top: "calc(100% + 8px)",
    right: "0",
    zIndex: themeGet("zIndices.2")(props),
    opacity: props.isOpen ? 1 : 0,
    transform: props.isOpen ? "translateY(0)" : "translateY(-10px)",
    pointerEvents: props.isOpen ? "all" : "none",
    transition: "opacity 0.3s ease, transform 0.3s ease"
  })
);

/**
 * Header component for top of app.
 **/
const Header = ({
  appName,
  userName,
  avatarSource,
  avatarAlt,
  avatarInitials,
  searchComponent,
  dataTestId,
  variant,
  currentWorkspace,
  logo,
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
    <Bar dataTestId={dataTestId} variant={variant}>
      <AppName variant={variant}>
        {logo && (
          <Flex alignItems="center" justifyContent="center">
            {logo}
          </Flex>
        )}
        <FlexItem flex="0 0 auto">{appName}</FlexItem>
        {currentWorkspace && (
          <FlexItem flex="0 0 auto">
            <Small
              color="greyDark"
              fontSize="0"
              display={["none", "none", "none", "block"]}
            >
              {currentWorkspace}
            </Small>
          </FlexItem>
        )}
      </AppName>
      {searchComponent && <SearchContainer>{searchComponent}</SearchContainer>}
      {userName && (
        <UserMenuContainer
          ref={menuRef}
          p="2px"
          pr="s"
          bg="white"
          width="auto"
          height="38px"
          border="solid 1px"
          borderColor="greyLight"
          shadow="default"
          display="flex"
        >
          <UserMenuToggle onClick={toggleMenu}>
            <AvatarBorder borderRadius="50%" p="2px">
              <Avatar
                customSize="28px"
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
          <UserMenu
            p="s"
            bg="white"
            width="fit-content"
            maxWidth="260px"
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
          </UserMenu>
        </UserMenuContainer>
      )}
    </Bar>
  );
};

Header.propTypes = {
  /** Logo for app. Preferably an svg logo */
  logo: PropTypes.node,
  /** Text for app name. Can be a plain text string or an svg logo */
  appName: PropTypes.node,
  /** Current active workspace name. Can be a plain text string or a component */
  currentWorkspace: PropTypes.node,
  /** Text for username. */
  userName: PropTypes.node,
  /** Source path for avatar image. */
  avatarSource: PropTypes.node,
  /** Alt text for avatar image. */
  avatarAlt: PropTypes.string,
  /** Initials for avatar as fallback if there is no image */
  avatarInitials: PropTypes.string,
  /** Can specify a component to be used for searching */
  searchComponent: PropTypes.node,
  /** Applies the chosen theme to the entire header. */
  theme: PropTypes.object,
  /** Specifies alternate versions of the header */
  variant: PropTypes.oneOf(["search"]),
  /** Allows for use of the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string,
  /** Allows you to pass in child components to user dropdown menu */
  userMenuContent: PropTypes.node
};

/** @component */
export default Header;
