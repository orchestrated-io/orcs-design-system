import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Popover from "../Popover";
import Divider from "../Divider";
import Box from "../Box";

const SideNavWrapper = styled("div")((props) =>
  css({
    bg: themeGet("colors.white")(props),
    color: themeGet("colors.greyDarkest")(props),
    minHeight: props.sideNavHeight,
    height: props.sideNavHeight,
    maxWidth: "max-content",
    fontFamily: themeGet("fonts.main")(props),
    borderRadius: themeGet("radii.2")(props),
    border: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    boxShadow: themeGet("shadows.boxDefault")(props),
    display: "flex",
    alignItems: "stretch",
    alignContent: "stretch",
    "@media screen and (max-width: 900px)": {
      borderRadius: "0",
      width: "100%",
      height: "auto",
      minWidth: "auto",
      maxWidth: "initial",
      minHeight: "initial",
      maxHeight: themeGet("appScale.sidebarMobileHeight")(props),
      position: "fixed",
      bottom: "0",
      left: "0",
      zIndex: "6",
      flexDirection: "column-reverse"
    }
  })
);

const SideNavItems = styled("div")((props) =>
  css({
    minWidth: themeGet("appScale.navBarSize")(props),
    minHeight: "inherit",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "r",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    // "&:hover, &:focus": {
    //   "& .sideNavItemName": {
    //     display: "block"
    //   }
    // },
    "@media screen and (max-width: 900px)": {
      height: themeGet("appScale.navBarSize")(props),
      flexDirection: "row",
      minHeight: "initial",
      minWidth: "initial",
      justifyContent: "space-around"
    }
  })
);

const PanelControlTooltip = styled(Popover)((props) =>
  css({
    alignSelf: props.showItemNames ? "flex-end" : "center",
    position: props.hideExpandedControl ? "absolute" : "relative",
    right: props.hideExpandedControl ? "r" : "initial",
    display: props.hideExpandedControl ? "block" : "none !important",
    borderTop: props.hideExpandedControl ? "none" : "solid 1px",
    borderTopColor: themeGet("colors.greyLighter")(props),
    paddingTop: props.hideExpandedControl ? "0" : "r",
    width: props.hideExpandedControl ? "auto" : "100%",
    justifyContent: props.showItemNames ? "flex-end" : "center",
    "&:focus": {
      outline: "0"
    },
    "@media screen and (max-width: 900px)": {
      border: "none"
    },
    "& .popoverText": {
      marginTop: props.hideExpandedControl ? "0" : "s"
    }
  })
);

const PanelControl = styled("button")((props) =>
  css({
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    background: themeGet("colors.greyLighter")(props),
    color: themeGet("colors.greyDarker")(props),
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none"
  })
);

const SideNavItemPopover = styled(Popover)((props) =>
  css({
    width: "100%",
    marginBottom: props.bottomAligned ? "0" : "s",
    marginTop: props.bottomAligned ? "s" : "0",
    "&:hover,&:focus-within": {
      "& .popoverText": {
        opacity: props.showItemNames ? "0" : "1",
        zIndex: props.showItemNames ? "-100" : "100",
        visibility: props.showItemNames ? "hidden" : "visible",
        pointerEvents: props.showItemNames ? "none" : "auto",
        display: props.showItemNames ? "none" : "initial"
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
          display: "none"
        }
      }
    }
  })
);

const SideNavItem = styled("button").attrs((props) => ({
  className: props.badge ? "Sidebar__Badge" : ""
}))(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: themeGet("radii.2")(props),
      transition: themeGet("transition.transitionDefault")(props),
      bg: "transparent",
      cursor: "pointer",
      border: "none",
      padding: "s",
      // marginBottom: props.bottomAligned ? "0" : "s",
      // marginTop: props.bottomAligned ? "s" : "0",
      fontSize: "1.4rem",
      fontWeight: themeGet("fontWeights.1")(props),
      color: themeGet("colors.greyDarker")(props),
      path: {
        transition: themeGet("transition.transitionDefault")(props),
        fill: themeGet("colors.greyDarker")(props)
      },
      "&:hover, &:focus": {
        outline: "0",
        color: themeGet("colors.primary")(props),
        path: {
          fill: themeGet("colors.primary")(props)
        },
        "& .sideNavItemName": {
          color: themeGet("colors.primary")(props)
        }
      },
      "@media screen and (max-width: 900px)": {
        width: "auto"
      }
    }),
  (props) =>
    props.active &&
    css({
      bg: themeGet("colors.primary")(props),
      path: {
        fill: themeGet("colors.white")(props)
      },
      "& .sideNavItemName": {
        color: themeGet("colors.white")(props)
      },
      "&:hover, &:focus": {
        path: {
          fill: themeGet("colors.white")(props)
        },
        "& .sideNavItemName": {
          color: themeGet("colors.white")(props)
        }
      }
    })
);

const SideNavItemLink = styled("div").attrs((props) => ({
  className: props.badge ? "Sidebar__Badge" : ""
}))(
  (props) =>
    css({
      "& > a": {
        cursor: "pointer",
        padding: "s",
        textDecoration: "none",
        borderRadius: themeGet("radii.2")(props),
        width: "100%",
        path: {
          transition: themeGet("transition.transitionDefault")(props),
          fill: themeGet("colors.greyDarker")(props)
        },
        fontFamily: themeGet("fonts.main")(props),
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: themeGet("transition.transitionDefault")(props),
        bg: "transparent",
        fontSize: "1.4rem",
        fontWeight: themeGet("fontWeights.1")(props),
        "&:hover, &:focus": {
          "& .sideNavItemName": {
            color: themeGet("colors.primary")(props)
          },
          path: {
            fill: themeGet("colors.primary")(props)
          }
        },
        "@media screen and (max-width: 900px)": {
          width: "auto"
        },
        "&:focus": {
          outline: "0",
          color: themeGet("colors.primary")(props),
          path: {
            fill: themeGet("colors.primary")(props)
          }
        }
      }
    }),
  (props) =>
    props.active &&
    css({
      "& > a": {
        bg: themeGet("colors.primary")(props),
        path: {
          fill: themeGet("colors.white")(props)
        },
        "&:hover, &:focus": {
          path: {
            fill: themeGet("colors.white")(props)
          },
          "& .sideNavItemName": {
            color: themeGet("colors.white")(props)
          }
        },
        "&:focus": {
          path: {
            fill: themeGet("colors.white")(props)
          }
        }
      },
      "& .sideNavItemName": {
        color: themeGet("colors.white")(props)
      }
    })
);

const BottomAlignedNavItems = styled("div")(() =>
  css({
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    "@media screen and (max-width: 900px)": {
      width: "auto"
    }
  })
);

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

// const SideNavItemName = styled("div")((props) =>
//   css({
//     lineHeight: "0",
//     marginLeft: themeGet("space.r")(props),
//     fontSize: themeGet("fontSizes.1")(props),
//     whiteSpace: "nowrap",
//     textDecoration: "none",
//     color: themeGet("colors.greyDarker")(props),
//     "&:hover, &:focus": {
//       color: themeGet("colors.primary")(props)
//     }
//   })
// );

const SideNavExpanded = styled("div")((props) =>
  css({
    position: "relative",
    display: props.active ? "block" : "none",
    minWidth: props.large
      ? "calc(" +
        themeGet("appScale.sidebarMaxWidthLarge")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")"
      : "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")",
    maxWidth: props.large
      ? "calc(" +
        themeGet("appScale.sidebarMaxWidthLarge")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")"
      : "calc(" +
        themeGet("appScale.sidebarMaxWidth")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")",
    height: "inherit",
    overflowY: "auto",
    padding: "r",
    borderLeft: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
    "@media screen and (max-width: 900px)": {
      width: "100%",
      minWidth: "initial",
      maxWidth: "initial",
      borderLeft: "none",
      borderBottom: `solid 1px ${themeGet("colors.greyLighter")(props)}`,
      height:
        "calc(" +
        themeGet("appScale.sidebarMobileHeight")(props) +
        " - " +
        themeGet("appScale.navBarSize")(props) +
        ")"
    }
  })
);

const NavItem = ({
  item,
  Component,
  activeItem,
  handleItemClick
  // showItemNames
}) => {
  // Use the ternary operator to render the appropriate component based on actionType
  const accessibilityProps = {
    ...(item.actionType === "component" && {
      "aria-expanded": item.index === activeItem ? "true" : "false"
    }),
    "aria-label": item.name
  };
  return item.actionType === "link" ? (
    <SideNavItemPopover
      text={item.name}
      textAlign="center"
      width="100px"
      active={item.index === activeItem}
      bottomAligned={item.bottomAligned}
      // showItemNames={showItemNames}
    >
      <SideNavItemLink
        key={item.index}
        active={item.index === activeItem}
        bottomAligned={item.bottomAligned}
        onClick={() => handleItemClick(item)}
      >
        <Component item={item}>
          <Icon icon={["far", item.iconName]} />
          {/* {showItemNames && (
            <SideNavItemName className="sideNavItemName">
              {item.name}
            </SideNavItemName>
          )} */}
        </Component>
      </SideNavItemLink>
    </SideNavItemPopover>
  ) : (
    <SideNavItemPopover
      text={item.name}
      textAlign="center"
      width="100px"
      active={item.index === activeItem}
      bottomAligned={item.bottomAligned}
      // showItemNames={showItemNames}
    >
      <SideNavItem
        key={item.index}
        active={item.index === activeItem}
        onClick={() => handleItemClick(item)}
        bottomAligned={item.bottomAligned}
        {...accessibilityProps}
      >
        {item.badgeNumber && <BadgeNumber>{item.badgeNumber}</BadgeNumber>}
        <Icon icon={["far", item.iconName]} />
        {/* {showItemNames && (
          <SideNavItemName className="sideNavItemName">
            {item.name}
          </SideNavItemName>
        )} */}
      </SideNavItem>
    </SideNavItemPopover>
  );
};

const SideNav = ({ items, sideNavHeight }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    const { index: itemIndex, actionType, onClick: onButtonClick } = item;
    if (actionType === "link" || actionType === "button") {
      setExpandedItem(null);
      onButtonClick && onButtonClick(item);
    } else {
      setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
      onButtonClick && onButtonClick(item);
    }

    setActiveItem(itemIndex === activeItem ? null : itemIndex);
  };

  // Split items into two arrays based on the bottomAligned prop
  const allItems = items.map((item, index) => ({ ...item, index }));
  const topAlignedItems = allItems.filter(
    (item) => !item.bottomAligned && !item.pageSpecific
  );
  const pageSpecificItems = allItems.filter(
    (item) => !item.bottomAligned && item.pageSpecific
  );
  const bottomAlignedItems = allItems.filter((item) => item.bottomAligned);

  const [isGreaterThan900, setIsGreaterThan900] = useState(
    window.innerWidth > 900
  );

  const handleResize = () => {
    setIsGreaterThan900(window.innerWidth > 900);
  };

  const debounceResize = () => setTimeout(handleResize, 300); // Wrap in a function

  useEffect(() => {
    return () => clearTimeout(handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  });

  // Toggle nav item names on click of panel control button
  // const [showItemNames, setShowItemNames] = useState(false);
  // const toggleItemNames = () => {
  //   setShowItemNames((prevState) => !prevState);
  // };

  return (
    <SideNavWrapper sideNavHeight={sideNavHeight}>
      <SideNavItems>
        {/* <Flex
          width="100%"
          alignItems="center"
          mb="s"
          justifyContent={showItemNames === true ? "space-between" : "center"}
          display={["none", "none", "none", "flex"]}
        >
          <PanelControlTooltip
            width="178px"
            textAlign="center"
            showItemNames={showItemNames}
            text={
              showItemNames === true
                ? "Hide navigation item names"
                : "Show navigation item names"
            }
          >
            <PanelControl
              onClick={toggleItemNames}
              aria-label="toggle navigation item names"
            >
              {showItemNames === true ? (
                <Icon icon={["fas", "chevron-left"]} />
              ) : (
                <Icon icon={["fas", "chevron-right"]} />
              )}
            </PanelControl>
          </PanelControlTooltip>
        </Flex> */}
        {topAlignedItems.map((item) => {
          const Component = item.component;
          return (
            <NavItem
              key={item.index}
              item={item}
              Component={Component}
              // showItemNames={showItemNames}
              activeItem={activeItem}
              handleItemClick={handleItemClick}
            />
          );
        })}
        {pageSpecificItems.length > 0 && ( // Render the special-container only if there are bottom-aligned items
          <>
            <Box width="100%" display={["none", "none", "none", "block"]}>
              <Divider light mt="s" mb="r" />
            </Box>
            {pageSpecificItems.map((item) => {
              const Component = item.component;
              return (
                <NavItem
                  key={item.index}
                  item={item}
                  Component={Component}
                  // showItemNames={showItemNames}
                  activeItem={activeItem}
                  handleItemClick={handleItemClick}
                />
              );
            })}
          </>
        )}
        {/* {bottomAlignedItems.length > 0 && // Render the special-container only if there are bottom-aligned items
          (isGreaterThan900 ? (
            <>
              <BottomAlignedNavItems>
                {bottomAlignedItems.map((item) => {
                  const Component = item.component;
                  return (
                    <NavItem
                      key={item.index}
                      item={item}
                      Component={Component}
                      showItemNames={showItemNames}
                      activeItem={activeItem}
                      handleItemClick={handleItemClick}
                    />
                  );
                })}
              </BottomAlignedNavItems>
              <PanelControlTooltip
                width="180px"
                textAlign="center"
                mt="r"
                showItemNames={showItemNames}
                text={
                  showItemNames === true
                    ? "Hide navigation item names"
                    : "Show navigation item names"
                }
              >
                <PanelControl
                  onClick={toggleItemNames}
                  aria-label="toggle navigation item names"
                >
                  {showItemNames === true ? (
                    <Icon icon={["fas", "chevron-left"]} />
                  ) : (
                    <Icon icon={["fas", "chevron-right"]} />
                  )}
                </PanelControl>
              </PanelControlTooltip>
            </> */}
        {bottomAlignedItems.length > 0 && // Render the special-container only if there are bottom-aligned items
          (isGreaterThan900 ? (
            <BottomAlignedNavItems>
              {bottomAlignedItems.map((item) => {
                const Component = item.component;
                return (
                  <NavItem
                    key={item.index}
                    item={item}
                    Component={Component}
                    // showItemNames={showItemNames}
                    activeItem={activeItem}
                    handleItemClick={handleItemClick}
                  />
                );
              })}
            </BottomAlignedNavItems>
          ) : (
            bottomAlignedItems.map((item) => {
              const Component = item.component;
              return (
                <NavItem
                  key={item.index}
                  item={item}
                  Component={Component}
                  // showItemNames={showItemNames}
                  activeItem={activeItem}
                  handleItemClick={handleItemClick}
                />
              );
            })
          ))}
      </SideNavItems>
      {expandedItem !== null && allItems[expandedItem].component ? (
        <SideNavExpanded
          active={expandedItem === activeItem}
          large={allItems[expandedItem] && allItems[expandedItem].large}
        >
          <PanelControlTooltip
            width="80px"
            textAlign="center"
            hideExpandedControl
            direction="left"
            text="Hide panel"
          >
            <PanelControl
              onClick={() => handleItemClick(allItems[expandedItem])}
              aria-label="toggle panel"
            >
              {isGreaterThan900 === true ? (
                <Icon icon={["fas", "chevron-left"]} />
              ) : (
                <Icon icon={["fas", "chevron-down"]} />
              )}
            </PanelControl>
          </PanelControlTooltip>
          {allItems[expandedItem].component()}
        </SideNavExpanded>
      ) : null}
    </SideNavWrapper>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.elementType,
  activeItem: PropTypes.string,
  handleItemClick: PropTypes.func
  // showItemNames: PropTypes.bool
};

SideNav.propTypes = {
  sideNavHeight: PropTypes.string.isRequired, // Used to specify the height of the sideNav
  handleItemClick: PropTypes.func
  // showItemNames: PropTypes.bool
};

SideNav.propTypes = {
  sideNavHeight: PropTypes.string.isRequired, // Used to specify the height of the sideNav
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      badgeNumber: PropTypes.string,
      large: PropTypes.bool,
      bottomAligned: PropTypes.bool,
      actionType: PropTypes.oneOf(["component", "link", "button"]).isRequired,
      component: PropTypes.elementType,
      link: PropTypes.string,
      onClick: PropTypes.func
    })
  ).isRequired,
  LinkComponent: PropTypes.elementType // React Router Link component
};

/** @component */
export default SideNav;
