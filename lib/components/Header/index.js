import React from "react";
import PropTypes from "prop-types";
import Flex, { FlexItem } from "../Flex";
import { Small } from "../Typography";
import { Bar, AppName, SearchContainer } from "./Header.styles";
import UserMenu from "./UserMenu";
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
  currentWorkspace,
  logo,
  userMenuContent
}) => {
  return (
    <Bar dataTestId={dataTestId}>
      <AppName>
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
        <UserMenu
          userName={userName}
          avatarSource={avatarSource}
          avatarAlt={avatarAlt}
          avatarInitials={avatarInitials}
          userMenuContent={userMenuContent}
        />
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
  /** Text for logged in user name and email. */
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
  /** Allows for use of the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string,
  /** Allows you to pass in child components to user dropdown menu */
  userMenuContent: PropTypes.node
};

/** @component */
export default Header;
