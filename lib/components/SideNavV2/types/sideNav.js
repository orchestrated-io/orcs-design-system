import PropTypes from "prop-types";
import { BADGE_VARIANTS, ITEM_TYPES } from "../constants/sideNav";

export const NavigationItemShape = {
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  badgeNumber: PropTypes.string,
  badgeDot: PropTypes.bool,
  hide: PropTypes.bool,
  large: PropTypes.bool,
  bottomAligned: PropTypes.bool,
  actionType: PropTypes.oneOf(Object.values(ITEM_TYPES)).isRequired,
  component: PropTypes.elementType,
  link: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  pageSpecific: PropTypes.bool,
  isExpandedByDefault: PropTypes.bool
};

export const ViewingSectionShape = {
  teamName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  shape: PropTypes.string,
  teamLink: PropTypes.string.isRequired,
  teamType: PropTypes.string,
  badgeVariant: PropTypes.oneOf(BADGE_VARIANTS),
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
};

export const TeamShape = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export const PinnedItemShape = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  shape: PropTypes.string,
  onUnpin: PropTypes.func
};

export const SubNavItemShape = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export const CurrentViewSectionShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  shape: PropTypes.string,
  badge: PropTypes.node,
  subNav: PropTypes.arrayOf(SubNavItemShape)
};
