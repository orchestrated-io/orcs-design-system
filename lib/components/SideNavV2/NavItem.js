import React from "react";
import styled, { css as styledCss } from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Popover from "../Popover";
import { BREAKPOINTS } from "./constants/sideNav";

const sharedNavItemStyles = styledCss`
  cursor: pointer;
  padding: ${themeGet("space.s")};
  text-decoration: none;
  border-radius: ${themeGet("radii.2")};
  width: 100%;
  position: relative;
  border: none;
  path {
    transition: ${themeGet("transition.transitionDefault")};
    fill: ${themeGet("colors.greyDarker")};
  }
  font-family: ${themeGet("fonts.main")};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${themeGet("transition.transitionDefault")};
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: ${themeGet("fontWeights.1")};

  &:hover,
  &:focus {
    color: ${themeGet("colors.primary")};
    path {
      fill: ${themeGet("colors.primary")};
    }
  }
  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}px) {
    width: auto;
    max-height: 30px;
    height: 30px;
  }
  &:focus {
    outline: 0;
    color: ${themeGet("colors.primary")};
    path {
      fill: ${themeGet("colors.primary")};
    }
  }
`;

const expandedNavItemStyles = (props) => styledCss`
  justify-content: flex-start;
  gap: ${themeGet("space.s")};
  
  .nav-item-text {
    font-size: ${themeGet("fontSizes.1")};
    line-height: 1;
    font-weight: ${themeGet("fontWeights.1")};
    color: ${
      props.active
        ? themeGet("colors.greyDarkest")
        : themeGet("colors.greyDarker")
    };
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  &:hover .nav-item-text,
  &:focus .nav-item-text {
    color: ${
      props.active ? themeGet("colors.greyDarkest") : themeGet("colors.primary")
    };
  }
`;

const variantActiveStyles = {
  expandableItem: (props) => styledCss`
  color: ${themeGet("colors.greyDarkest")};

  path {
    fill: ${themeGet("colors.greyDarkest")};
  }
  :after {
    height: 100%;
    position: absolute;
    right: 0;
    transform: ${props.isExpanded ? "translateX(9px)" : "translateX(8px)"};
    content: "";
    border-right: 3px solid ${themeGet("colors.primary")};
    z-index: 5;
  }
  &:hover .nav-item-text,
  &:focus .nav-item-text {
    color: ${themeGet("colors.primary")};
  }

  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}px) {
    :after {
      border-top: 3px solid ${themeGet("colors.primary")};
      border-right: none;
      transform: translateY(-10px);
      right: auto;
      width: 100%;
    }
  }
`,
  default: styledCss`
background-color: ${themeGet("colors.primaryLightest")};
path {
  fill: ${themeGet("colors.greyDarkest")};
}

&:hover,
&:focus {
  path {
    fill: ${themeGet("colors.greyDarkest")};
  }
}
&:focus {
  path {
    fill: ${themeGet("colors.greyDarkest")};
  }
}
`
};

const getActiveStyles = (props) => {
  if (!props.active) return "";

  if (props["aria-expanded"]) {
    return variantActiveStyles.expandableItem(props);
  }

  return variantActiveStyles.default;
};

const SideNavItemLink = styled.div`
  & > a {
    ${sharedNavItemStyles}
    ${(props) => (props.isExpanded ? expandedNavItemStyles(props) : "")}
    ${getActiveStyles}
  }
`;

const SideNavItem = styled("button")`
  ${sharedNavItemStyles}
  ${(props) => (props.isExpanded ? expandedNavItemStyles(props) : "")}
  ${getActiveStyles}
`;

const BadgeNumber = styled("div")((props) =>
  css({
    position: "absolute",
    height: "16px",
    width: "16px",
    bg: themeGet("colors.danger")(props),
    fontSize: "1rem",
    fontWeight: themeGet("fontWeights.2")(props),
    color: themeGet("colors.white")(props),
    borderRadius: "50%",
    top: props.isExpanded ? "8px" : "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
);

const BadgeDot = styled("div")((props) =>
  css({
    position: "absolute",
    height: "8px",
    width: "8px",
    bg: themeGet("colors.primary")(props),
    borderRadius: "50%",
    top: props.isExpanded ? "12px" : "2px",
    right: "0"
  })
);

const SideNavItemWrapper = styled.div((props) =>
  css({
    "&:nth-child(1 of .bottom-aligned) ": {
      marginTop: props.bottomAligned && "auto"
    }
  })
);

const NavItem = ({
  item,
  Component,
  isActive,
  handleItemClick,
  navItemRefs,
  isSmallScreen,
  isExpanded
}) => {
  // Use the ternary operator to render the appropriate component based on actionType
  const accessibilityProps = {
    ...(item.actionType === "component" && {
      "aria-expanded": isActive ? "true" : "false"
    }),
    "aria-label": item.name
  };

  const renderNavItem = () => {
    if (item.actionType === "link") {
      return (
        <SideNavItemLink
          key={item.index}
          active={isActive}
          bottomAligned={item.bottomAligned}
          isExpanded={isExpanded}
          onClick={() => handleItemClick(item)}
          ref={(el) => (navItemRefs.current[item.index] = el)}
        >
          <Component item={item}>
            <Icon icon={["far", item.iconName]} />
            {isExpanded && !isSmallScreen && (
              <span className="nav-item-text">{item.name}</span>
            )}
          </Component>
        </SideNavItemLink>
      );
    } else {
      return (
        <SideNavItem
          key={item.index}
          active={isActive}
          onClick={() => handleItemClick(item)}
          bottomAligned={item.bottomAligned}
          isExpanded={isExpanded}
          {...accessibilityProps}
          ref={(el) => (navItemRefs.current[item.index] = el)}
        >
          {item.badgeNumber && (
            <BadgeNumber isExpanded={isExpanded}>
              {item.badgeNumber}
            </BadgeNumber>
          )}
          {item.badgeDot && <BadgeDot isExpanded={isExpanded} />}
          <Icon icon={["far", item.iconName]} />
          {isExpanded && !isSmallScreen && (
            <span className="nav-item-text">{item.name}</span>
          )}
        </SideNavItem>
      );
    }
  };

  return isSmallScreen ? (
    <Popover
      text={item.name}
      direction="top"
      textAlign="center"
      width="fit-content"
      tabIndex="-1"
    >
      {renderNavItem()}
    </Popover>
  ) : (
    <SideNavItemWrapper
      className={item.bottomAligned && "bottom-aligned"}
      bottomAligned={item.bottomAligned}
    >
      {renderNavItem()}
    </SideNavItemWrapper>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.elementType,
  isActive: PropTypes.bool,
  handleItemClick: PropTypes.func,
  navItemRefs: PropTypes.object,
  isSmallScreen: PropTypes.bool,
  isExpanded: PropTypes.bool
};

export default NavItem;
