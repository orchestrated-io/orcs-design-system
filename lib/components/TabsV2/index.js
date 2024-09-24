import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { isEqual } from "lodash";
import ActionsMenu, { ActionsMenuItem } from "../ActionsMenu";
import Icon from "../Icon";
import FlexItem from "../Flex";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";

const TabsContainer = styled.div`
  position: relative;
`;

const TabWrapper = styled.div`
  position: relative;
`;

const Tabs = styled.div`
  flex-shrink: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const activeTabStyle = css`
  background-color: ${themeGet("colors.white")};
  color: ${themeGet("colors.primary")};
  cursor: default;
  &:hover {
    background-color: ${themeGet("colors.white")};
    color: ${themeGet("colors.primary")};
  }
  &:focus {
    color: ${themeGet("colors.primary")};
  }
`;

const Tab = styled(NavLink)`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  display: block;
  border-radius: ${themeGet("radii.2")};
  transition: background 200ms ease-in-out, color 200ms ease-in-out;
  padding: ${themeGet("space.3")} ${themeGet("space.4")};
  font-size: ${themeGet("fontSizes.1")};
  font-weight: ${themeGet("fontWeights.2")};
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  background-color: ${themeGet("colors.greyLighter")};
  color: ${themeGet("colors.greyDarker")};
  cursor: pointer;

  ${({ tabHidden }) =>
    tabHidden
      ? css`
          position: absolute;
          visibility: hidden;
        `
      : ""}

  &:hover {
    outline: 0;
    background-color: ${themeGet("colors.greyLight")};
    color: ${themeGet("colors.greyDarker")};
  }
  &:focus {
    outline: 0;
    color: ${themeGet("colors.greyDarker")};
    box-shadow: inset ${themeGet("shadows.thinOutline")}
      ${themeGet("colors.grey")};
  }

  &.active {
    ${activeTabStyle}
  }
`;

const ShowMoreButton = styled.button`
  appearance: none;
  width: 84px;
  border: none;
  font-family: ${themeGet("fonts.main")};
  font-size: ${themeGet("fontSizes.1")};
  font-weight: ${themeGet("fontWeights.2")};
  border-radius: ${themeGet("radii.2")};
  background-color: ${themeGet("colors.greyLighter")};
  transition: ${themeGet("transition.transitionDefault")};
  padding: ${themeGet("space.3")} ${themeGet("space.4")};
  color: ${themeGet("colors.greyDarker")};
  display: ${({ showMoreVisible }) => (showMoreVisible ? "flex" : "none")};
  align-items: center;
  &:hover {
    background-color: ${themeGet("colors.greyLight")};
    color: ${themeGet("colors.greyDarker")};
    outline: 0;
  }
  &:focus {
    color: ${themeGet("colors.greyDarker")};
    outline: 0;
    box-shadow: inset ${themeGet("shadows.thinOutline")}
      ${themeGet("colors.grey")};
  }
  &.hasActive {
    ${activeTabStyle}
  }
`;

const CollapsedTabs = styled.div`
  border-radius: ${themeGet("radii.2")};
  background-color: ${themeGet("colors.white")};
  min-width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 6px;
  box-shadow: inset ${themeGet("shadows.thinOutline")}
      ${themeGet("colors.greyLighter")},
    ${themeGet("shadows.boxDefault")};
`;

const tabsGap = 6;
export const moreTabsReservedWidth = 84;

const TabsV2 = ({ tabsList }) => {
  const containerRef = useRef(null);

  const containerVisibleWidth = useRef(0);

  const [hiddenTabs, setHiddenTabs] = useState([]);

  const calculateVisibility = useCallback(
    (actionElements) => {
      // as we loop through the tabs, we need to calculate the width of the visible tabs.
      let calculatedWidth = hiddenTabs.length ? moreTabsReservedWidth : 0;

      // variable for the list of hidden tabs which will be put to react state
      const newHiddenTabs = [];

      [...actionElements]
        .filter((el) => el.tagName === "A")
        .forEach((actionEl, i) => {
          // visibleElementsWidth will be increased by
          // the corresponding width of the element + gapWidth
          calculatedWidth += actionEl.offsetWidth + tabsGap;

          // compare computed widths and push into newHiddenTabs if current tab width is bigger than container width
          if (calculatedWidth >= containerVisibleWidth.current) {
            // set hideTab to false
            tabsList[i].hideTab = true;
            newHiddenTabs.push(i);
          }
        });

      if (!isEqual(hiddenTabs, newHiddenTabs)) {
        // update React state with the list of hidden tabs
        setHiddenTabs(newHiddenTabs);
      }
    },
    [tabsList, hiddenTabs]
  );

  useEffect(() => {
    const actionElements = containerRef.current?.children || [];

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const contentBoxSize = entry.contentBoxSize[0];

          // Math.ceil is necessary to round up and return
          // the smallest integer for the size of observed element
          containerVisibleWidth.current = Math.ceil(contentBoxSize.inlineSize);

          // invoke the functions which calculates tabs visibility
          // and sets data to the list of hidden tabs
          calculateVisibility(actionElements);
        }
      }
    });

    // adding ResizeObserver to the observed container
    resizeObserver.observe(containerRef.current);
  }, [calculateVisibility]);

  const hiddenTabsList = tabsList.filter((tab, i) => hiddenTabs.includes(i));
  const location = useLocation();
  const showMoreItemActive = hiddenTabsList.find((action) =>
    location.pathname.endsWith(action.path)
  );

  return (
    <TabsContainer>
      <TabWrapper>
        <Tabs style={{ gap: tabsGap }} ref={containerRef}>
          {tabsList.map((action, i) => (
            <Tab
              key={action.path}
              tabHidden={hiddenTabs.includes(i)}
              to={action.path}
            >
              {action.label}
            </Tab>
          ))}

          <ActionsMenu
            direction="bottom-end"
            customTriggerComponent={
              <ShowMoreButton
                showMoreVisible={hiddenTabsList.length}
                className={showMoreItemActive && "hasActive"}
              >
                <FlexItem flex="0 0 auto">More</FlexItem>
                <FlexItem flex="0 0 auto">
                  <Icon
                    icon={["fas", "chevron-down"]}
                    title="Down"
                    ml="s"
                    size="sm"
                  />
                </FlexItem>
              </ShowMoreButton>
            }
            closeOnClick
          >
            <CollapsedTabs>
              {hiddenTabsList.map((action) => (
                <ActionsMenuItem
                  key={action.path}
                  Component={Tab}
                  fullWidth
                  to={action.path}
                >
                  {action.label}
                </ActionsMenuItem>
              ))}
            </CollapsedTabs>
          </ActionsMenu>
        </Tabs>
      </TabWrapper>
    </TabsContainer>
  );
};

TabsV2.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.objectOf({
      label: PropTypes.string,
      path: PropTypes.string
    })
  )
};

export default TabsV2;
