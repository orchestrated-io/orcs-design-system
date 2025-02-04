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
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${themeGet("colors.white")};
    border-bottom: 2px solid ${themeGet("colors.greyLighter")};
    z-index: 0;
  }
`;

const TabWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const VisibleTabs = styled.div`
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const activeTabStyle = css`
  background-color: ${themeGet("colors.white")};
  color: ${themeGet("colors.primary")};
  border-bottom: 2px solid ${themeGet("colors.primary")};
  cursor: default;
  &:hover,
  &:focus {
    background-color: ${themeGet("colors.white")};
    color: ${themeGet("colors.primary")};
    box-shadow: none;
  }
`;

const Tab = styled(NavLink)`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  display: block;
  transition: background 200ms ease-in-out, color 200ms ease-in-out;
  border-bottom: 2px solid ${themeGet("colors.greyLighter")};
  padding: ${themeGet("space.3")} ${themeGet("space.4")};
  font-size: ${themeGet("fontSizes.1")};
  font-weight: ${themeGet("fontWeights.2")};
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  background-color: ${themeGet("colors.white")};
  color: ${themeGet("colors.greyDark")};
  cursor: pointer;

  ${({ tabInShowMore }) =>
    tabInShowMore
      ? css`
          position: absolute;
          visibility: hidden;
        `
      : ""}

  &:hover {
    background-color: ${themeGet("colors.white")};
    color: ${themeGet("colors.primary")};
    box-shadow: inset 0 2px 5px 0 ${themeGet("colors.primaryLightest")};
  }
  &:focus {
    outline: 0;
    box-shadow: inset 0 2px 5px 0 ${themeGet("colors.primaryLightest")};
  }

  &.active {
    ${activeTabStyle}
  }
`;

const ShowMoreButton = styled.button`
  appearance: none;
  border: none;
  font-family: ${themeGet("fonts.main")};
  font-size: ${themeGet("fontSizes.1")};
  font-weight: ${themeGet("fontWeights.2")};
  background-color: ${themeGet("colors.white")};
  border-bottom: 2px solid ${themeGet("colors.greyLighter")};
  transition: ${themeGet("transition.transitionDefault")};
  padding: ${themeGet("space.3")} ${themeGet("space.4")};
  color: ${themeGet("colors.greyDark")};
  display: ${({ showMoreVisible }) => (showMoreVisible ? "flex" : "none")};
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${themeGet("colors.white")};
    color: ${themeGet("colors.primary")};
    box-shadow: inset 0 2px 5px 0 ${themeGet("colors.primaryLightest")};
  }
  &:focus {
    outline: 0;
    box-shadow: inset 0 2px 5px 0 ${themeGet("colors.primaryLightest")};
  }
  &.hasActive {
    ${activeTabStyle}
  }
`;

const ShowMoreTabs = styled.div`
  border-radius: ${themeGet("radii.2")};
  background-color: ${themeGet("colors.greyLighter")};
  width: fit-content;
  overflow: hidden;
  display: flex;
  gap: 1px;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: ${themeGet("shadows.boxDefault")};
  & [class^="TabsAlt__Tab"] {
    border: 0;
    padding: ${themeGet("space.3")};
    text-align: left;
  }
`;

const tabsGap = 0;

const TabsAlt = ({ tabsList }) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  const containerVisibleWidth = useRef(0);

  const [showMoreTabs, setShowMoreTabs] = useState([]);

  const calculateVisibility = useCallback(
    (actionElements) => {
      const showMoreButton = document.getElementById("show-more-button");
      const showMoreButtonWidth = showMoreButton?.offsetWidth ?? 0;
      // as we loop through the tabs, we need to calculate the width of the visible tabs.
      let calculatedWidth = showMoreTabs.length ? showMoreButtonWidth : 0;

      // variable for the list of hidden tabs which will be put to react state
      const newShowMoreTabs = [];

      [...actionElements]
        .filter((el) => el.tagName === "A") // this ensures that the ShowMore button is not included in this logic
        .forEach((actionEl, i) => {
          // visibleElementsWidth will be increased by
          // the corresponding width of the element + gapWidth
          calculatedWidth += actionEl.offsetWidth + tabsGap;

          // compare computed widths and push into newShowMoreTabs if current tab width is bigger than container width
          if (calculatedWidth >= containerVisibleWidth.current) {
            newShowMoreTabs.push(i);
          }
        });
      if (!isEqual(showMoreTabs, newShowMoreTabs)) {
        // update React state with the list of hidden tabs
        setShowMoreTabs(newShowMoreTabs);
      }
    },
    [showMoreTabs]
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

    // This is to help in cases where useEffect callback is triggered before React repaint.
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true);
        calculateVisibility(actionElements);
      }, 500);
    } else {
      // adding ResizeObserver to the observed container
      resizeObserver.observe(containerRef.current);
    }
  }, [calculateVisibility, isMounted]);

  const visibleTabsList = tabsList.filter((tab) => tab.isVisible ?? true);
  const showMoreTabsList = visibleTabsList.filter((_tab, i) =>
    showMoreTabs.includes(i)
  );
  const location = useLocation();
  const showMoreItemActive = showMoreTabsList.find((action) =>
    location.pathname.endsWith(action.path)
  );

  return (
    <TabsContainer>
      <TabWrapper>
        <VisibleTabs style={{ gap: tabsGap }} ref={containerRef} role="tablist">
          {visibleTabsList.map((tab, i) => (
            <Tab
              className={tab.className}
              id={tab.id}
              data-testid={tab["data-testid"]}
              key={tab.path}
              tabInShowMore={showMoreTabs.includes(i)}
              to={tab.path}
              role="tab"
            >
              {tab.label}
            </Tab>
          ))}

          <ActionsMenu
            direction="bottom-end"
            role="presentation"
            renderTrigger={(props) => (
              <ShowMoreButton
                {...props}
                showMoreVisible={showMoreTabsList.length}
                id="show-more-button"
                className={showMoreItemActive && "hasActive"}
                role="tab"
              >
                <FlexItem flex="0 0 auto">More</FlexItem>
                <FlexItem flex="0 0 auto">
                  <Icon
                    icon={["fas", "chevron-down"]}
                    title="Down"
                    ml="xs"
                    size="sm"
                  />
                </FlexItem>
              </ShowMoreButton>
            )}
            closeOnClick
          >
            <ShowMoreTabs>
              {showMoreTabsList.map((tab) => (
                <ActionsMenuItem
                  className={tab.className}
                  id={tab.id}
                  data-testid={tab["data-testid"]}
                  key={tab.path}
                  Component={Tab}
                  fullWidth
                  to={tab.path}
                >
                  {tab.label}
                </ActionsMenuItem>
              ))}
            </ShowMoreTabs>
          </ActionsMenu>
        </VisibleTabs>
      </TabWrapper>
    </TabsContainer>
  );
};

TabsAlt.propTypes = {
  /** isVisible defaults to true if not passed */
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      isVisible: PropTypes.bool
    })
  ).isRequired
};

export default TabsAlt;
