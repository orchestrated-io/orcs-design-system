import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, variant } from "styled-system";
import Avatar from "../Avatar";
import Box from "../Box";
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
    bg: "transparent"
  }),
  variant({
    variants: {
      default: {
        width: "5px",
        height: "5px",
        backgroundColor: "#fff",
        transition: "all 200ms ease-in-out"
      },
      search: {
        display: ["flex", "flex", "grid"],
        gridGap: ["0", "0", "r"],
        gridTemplateColumns: [
          "1fr 2fr",
          "1fr 2fr",
          "1fr 2fr",
          "1fr 1.5fr 1.5fr 1fr",
          "1fr 1fr 1fr 1fr",
          "1.5fr 1fr 1fr 1.5fr"
        ]
      }
    }
  }),
  space
);

const AppName = styled("div")(
  (props) =>
    css({
      background: themeGet("colors.white")(props),
      display: "flex",
      alignItems: "center",
      p: "s",
      height: "42px",
      borderRadius: "21px",
      boxShadow: themeGet("shadows.boxDefault")(props),
      fontSize: themeGet("fontSizes.2")(props),
      color: themeGet("colors.greyDarkest")(props)
    }),
  variant({
    variants: {
      default: {
        width: "5px",
        height: "5px",
        backgroundColor: "#fff",
        transition: "all 200ms ease-in-out"
      },
      search: {
        display: ["none", "none", "flex"],
        border: "none"
      }
    }
  }),
  space
);

const SearchContainer = styled("div")(
  css({
    width: "100%",
    gridColumn: "2 / 4",
    "a[class^='StyledLink'], a[class*=' StyledLink']": {
      display: "inline-block"
    }
  }),
  space,
  layout
);

/**
 * Header component for top of app.
 **/
const Header = ({
  appName,
  userName,
  avatarSource,
  avatarAlt,
  searchComponent,
  dataTestId,
  variant,
  currentWorkspace,
  logo
}) => {
  return (
    <Bar dataTestId={dataTestId} variant={variant}>
      <Flex alignItems="center">
        {logo && <FlexItem>{logo}</FlexItem>}
        <Flex flexDirection="column" justifyContent="center">
          <AppName variant={variant}>{appName}</AppName>
          {currentWorkspace && (
            <Small
              color="white"
              fontSize="0"
              display={["none", "none", "none", "block"]}
            >
              {currentWorkspace}
            </Small>
          )}
        </Flex>
      </Flex>
      {searchComponent && <SearchContainer>{searchComponent}</SearchContainer>}
      <Box
        ml="auto"
        p="xxs"
        pr="r"
        bg="white"
        borderRadius="21px"
        shadow="default"
        display={searchComponent ? ["none", "none", "none", "flex"] : "flex"}
      >
        <Avatar
          sizing="small"
          image={avatarSource}
          imageAlt={avatarAlt}
          title={userName}
        />
      </Box>
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
  /** Can specify a component to be used for searching */
  searchComponent: PropTypes.node,
  /** Applies the chosen theme to the entire header. */
  theme: PropTypes.object,
  /** Specifies alternate versions of the header */
  variant: PropTypes.oneOf(["search"]),
  /** Allows for use of the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string
};

/** @component */
export default Header;
