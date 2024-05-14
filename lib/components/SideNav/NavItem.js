import React from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Popover from "../Popover";

const getSharedNavItemStyles = (props) => {
  const getThemeStyle = (style) => themeGet(style)(props);

  return `
  cursor: pointer;
  padding: ${getThemeStyle("space.s")};
  text-decoration: none;
  border-radius: ${getThemeStyle("radii.2")};
  width: 100%;
  max-height:30px;
  height: 30px;
  position: relative;
  border: none;
  path {
    transition: ${getThemeStyle("transition.transitionDefault")};
    fill: ${getThemeStyle("colors.greyDarker")};
  }
  font-family: ${getThemeStyle("fonts.main")};
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${getThemeStyle("transition.transitionDefault")};
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: ${getThemeStyle("fontWeights.1")}; 

  &:hover, &:focus {
    color: ${getThemeStyle("colors.primary")};
    path {
      fill: ${getThemeStyle("colors.primary")};
    }
    
  }
  @media screen and (max-width: 900px) {
    width: auto;
  }
  &:focus {
    outline: 0;
    color: ${getThemeStyle("colors.primary")};
    path {
      fill: ${getThemeStyle("colors.primary")};
    }
  }`;
};

const getActiveStyles = (props) => {
  const getThemeStyle = (style) => themeGet(style)(props);

  if (!props.active) return "";
  const primaryColor = getThemeStyle("colors.primary");

  if (props["aria-expanded"]) {
    return `
    color: ${primaryColor};

    path {
      fill: ${primaryColor};
    }
    :after {
      height: 100%;
      position: absolute;
      right: calc(-${getThemeStyle("space.r")} - 2px);
      content: "";
      border-right: 3px solid ${primaryColor};
      z-index: 5;
    }

    @media screen and (max-width: 900px) {
      :after {
        border-top: 3px solid ${primaryColor};
        border-right: none;
        top: -${getThemeStyle("space.r")};
        right:0;
        width: 100%;
      }
    }
    `;
  }

  return `
    background-color: ${primaryColor};
    path {
      fill: ${getThemeStyle("colors.white")};
    }

    &:hover, &:focus {
      path {
        fill: ${getThemeStyle("colors.white")};
      }
    }
    &:focus {
      path {
        fill: ${getThemeStyle("colors.white")};
      }
    }
`;
};

const SideNavItemLink = styled.div`
  & > a {
    ${(props) => getSharedNavItemStyles(props)}
    ${(props) => getActiveStyles(props)}
  }
`;

const SideNavItem = styled("button")`
  ${(props) => getSharedNavItemStyles(props)}
  ${(props) => getActiveStyles(props)}
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
    top: "0",
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
    top: "2px",
    right: "0"
  })
);

const SideNavItemPopover = styled(Popover)((props) =>
  css({
    height: "30px",
    marginBottom: props.bottomAligned ? "0" : "s",
    marginTop: props.bottomAligned ? "s" : "0",
    "@media screen and (min-width: 900px)": {
      ":nth-child(1 of .bottom-aligned) ": {
        marginTop: props.bottomAligned && "auto"
      }
    },
    "&:hover,&:focus-within": {
      "& .popoverText": {
        opacity: "1",
        zIndex: "100",
        visibility: "visible",
        pointerEvents: "auto",
        display: "initial"
      }
    },
    "&:focus-within": {
      "& .popoverText": {
        opacity: props.active ? "0" : "1",
        zIndex: props.active ? "-100" : "100",
        visibility: props.active ? "hidden" : "visible",
        pointerEvents: props.active ? "none" : "auto",
        display: props.active ? "none" : "initial"
      }
    },
    "@media screen and (max-width: 900px)": {
      width: "auto",
      marginBottom: "0",
      marginTop: "0",
      "&:hover,&:focus-within": {
        "& .popoverText": {
          opacity: "0",
          zIndex: "-100",
          visibility: "hidden",
          pointerEvents: "none",
          justifyContent: "space-around",
          display: "none"
        }
      }
    }
  })
);

const NavItem = ({
  item,
  Component,
  isActive,
  handleItemClick,
  navItemRefs
}) => {
  // Use the ternary operator to render the appropriate component based on actionType
  const accessibilityProps = {
    ...(item.actionType === "component" && {
      "aria-expanded": isActive ? "true" : "false"
    }),
    "aria-label": item.name
  };

  return (
    <SideNavItemPopover
      className={item.bottomAligned && "bottom-aligned"}
      text={item.name}
      textAlign="center"
      width="124px"
      active={isActive}
      bottomAligned={item.bottomAligned}
    >
      {item.actionType === "link" ? (
        <SideNavItemLink
          key={item.index}
          active={isActive}
          bottomAligned={item.bottomAligned}
          onClick={() => handleItemClick(item)}
          ref={(el) => (navItemRefs.current[item.index] = el)}
        >
          <Component item={item}>
            <Icon icon={["far", item.iconName]} />
          </Component>
        </SideNavItemLink>
      ) : (
        <SideNavItem
          key={item.index}
          active={isActive}
          onClick={() => handleItemClick(item)}
          bottomAligned={item.bottomAligned}
          {...accessibilityProps}
          ref={(el) => (navItemRefs.current[item.index] = el)}
        >
          {item.badgeNumber && <BadgeNumber>{item.badgeNumber}</BadgeNumber>}
          {item.badgeDot && <BadgeDot />}
          <Icon icon={["far", item.iconName]} />
        </SideNavItem>
      )}
    </SideNavItemPopover>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.elementType,
  isActive: PropTypes.bool,
  handleItemClick: PropTypes.func,
  navItemRefs: PropTypes.object
};

export default NavItem;
