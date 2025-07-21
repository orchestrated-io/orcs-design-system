import React from "react";
import PropTypes from "prop-types";
import { SideNavProvider } from "./context/SideNavContext";
import SideNav from "./SideNav";

/**
 * Wrapper component that provides the SideNav context
 * This is the main component that should be used in applications
 */
const SideNavWithContext = ({ children, initialViewing, ...sideNavProps }) => {
  return (
    <SideNavProvider initialViewing={initialViewing}>
      <SideNav {...sideNavProps} />
      {children}
    </SideNavProvider>
  );
};

SideNavWithContext.propTypes = {
  children: PropTypes.node,
  initialViewing: PropTypes.any,
  // SideNavV2 props
  sideNavHeight: PropTypes.string.isRequired,
  initiallyExpandedItemIndex: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      badgeNumber: PropTypes.string,
      badgeDot: PropTypes.bool,
      hide: PropTypes.bool,
      large: PropTypes.bool,
      bottomAligned: PropTypes.bool,
      actionType: PropTypes.oneOf(["component", "link", "button"]).isRequired,
      component: PropTypes.elementType,
      link: PropTypes.string,
      onClick: PropTypes.func
    })
  ).isRequired,
  LinkComponent: PropTypes.elementType,
  viewing: PropTypes.shape({
    teamName: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    shape: PropTypes.string,
    teamLink: PropTypes.string.isRequired,
    teamType: PropTypes.string,
    badgeVariant: PropTypes.oneOf([
      "success",
      "warning",
      "danger",
      "primaryLight",
      "primary",
      "primaryDark",
      "secondary"
    ]),
    subNav: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      })
    )
  }),
  yourTeams: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  pinnedItems: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      shape: PropTypes.string,
      onUnpin: PropTypes.func
    })
  )
};

export { default as useCurrentSideNavViewing } from "./hooks/useCurrentSideNavViewing";
export { SideNavProvider, useSideNavContext } from "./context/SideNavContext";

export default SideNavWithContext;
