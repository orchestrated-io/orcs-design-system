import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ActionsMenu from "../ActionsMenu";
import Icon from "../Icon";
import FlexItem from "../Flex";
import { themeGet } from "@styled-system/theme-get";

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

const Tab = styled(NavLink)`
  width: fit-content;
  display: ${({ tabHidden }) => (tabHidden ? "none" : "block")};
  border-radius: ${themeGet("radii.2")};
  transition: ${themeGet("transition.transitionDefault")};
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
  }
`;

const MoreTab = styled(Tab)`
  width: 100%;
`;

const ShowMore = styled.button`
  appearance: none;
  position: absolute;
  top: 0;
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
`;

const MoreOptions = styled.div`
  position: absolute;
  top: 41px;
  border-radius: ${themeGet("radii.2")};
  background-color: ${themeGet("colors.white")};
  min-width: 84px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 6px;
  box-shadow: inset ${themeGet("shadows.thinOutline")}
      ${themeGet("colors.greyLighter")},
    ${themeGet("shadows.boxDefault")};
  display: ${({ moreOptionsVisible }) =>
    moreOptionsVisible ? "flex" : "none"};
`;

const tabsGap = 6;
export const moreTabsReservedWidth = 84;

const TabsV2 = ({ tabsList }) => {
  const containerRef = useRef(null);

  const containerVisibleWidth = useRef(0);
  const actionElementsWidth = useRef([]);
  const moreBtnLeftPosition = useRef(0);

  const [actionsMoreList, setActionsMoreList] = useState([]);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const calculateVisibility = (actionElements) => {
    // variable for actual visible tabs width + gaps between tabs calculations
    // to define if the next tab has a free space to be visible or not
    let visibleElementsWidth = 0;

    // variable for the list of hidden tabs which will be put to react state
    const actionsMoreData = [];

    // variable which works as a flag and changes to false with the
    // first hidden tab during actionElements iteration
    let isVisible = true;

    [...actionElements].forEach((actionEl, i) => {
      // necessary gap after the tab
      const gapWidth = i === actionElements.length - 1 ? 0 : tabsGap;

      // visibleElementsWidth will be increased by
      // the corresponding width of the element + gapWidth
      visibleElementsWidth += actionElementsWidth.current[i] + gapWidth;

      // calculates how much space is necessary for all the previous
      // tabs + the next tab or button "More"
      const visibleSpaceWidth =
        i !== actionElements.length - 1
          ? visibleElementsWidth + moreTabsReservedWidth
          : visibleElementsWidth;

      // compare if container's actual width is enough to show all
      // the elements that need space equal to visibleSpaceWidth width
      if (visibleSpaceWidth <= containerVisibleWidth.current && isVisible) {
        // set hideTab to false
        tabsList[i].hideTab = false;
      } else {
        if (isVisible) {
          // calculate left property for button "More" which has absolute position
          moreBtnLeftPosition.current =
            actionElementsWidth.current
              .slice(0, i)
              .reduce((acc, item) => item + acc, 0) +
            tabsGap * i;

          // set isVisible to false for the first hidden tab
          isVisible = false;
        }
        // set hideTab to true
        tabsList[i].hideTab = true;

        // update actionsMoreData with the new hidden tab's data
        actionsMoreData.push(tabsList[i]);
      }
    });

    // update React state with the list of hidden tabs
    setActionsMoreList([...actionsMoreData]);
  };

  useEffect(() => {
    const actionElements = containerRef.current?.children || [];

    // defining the actual width of each tab
    const actionsListWidth = [];
    [...actionElements].forEach((actionEl) => {
      actionsListWidth.push(actionEl.offsetWidth);
    });

    // update of the array with all the tabs width numbers,
    // stored inside actionElementsWidth ref
    actionElementsWidth.current = [...actionsListWidth];

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
  }, []);

  return (
    <TabsContainer>
      <TabWrapper>
        <Tabs style={{ gap: tabsGap }} ref={containerRef}>
          {tabsList.map((action) => (
            <Tab key={action.path} tabHidden={action.hideTab} to={action.path}>
              {action.label}
            </Tab>
          ))}
        </Tabs>

        <ActionsMenu
          direction="left-start"
          className="ignore-onclickoutside"
          customTriggerComponent={
            <ShowMore
              showMoreVisible={actionsMoreList.length}
              style={{ left: moreBtnLeftPosition.current }}
              onClick={() => setIsMoreOpen(!isMoreOpen)}
            >
              <FlexItem flex="0 0 auto">More</FlexItem>
              <FlexItem flex="0 0 auto">
                <Icon icon={["fas", "angle-down"]} title="Down" ml="s" />
              </FlexItem>
            </ShowMore>
          }
          closeOnClick={false}
        >
          <MoreOptions
            moreOptionsVisible={isMoreOpen}
            style={{ left: moreBtnLeftPosition.current }}
          >
            {actionsMoreList.map((action) => (
              <MoreTab key={action.path} to={action.path}>
                {action.label}
              </MoreTab>
            ))}
          </MoreOptions>
        </ActionsMenu>
      </TabWrapper>
    </TabsContainer>
  );
};

export default TabsV2;
