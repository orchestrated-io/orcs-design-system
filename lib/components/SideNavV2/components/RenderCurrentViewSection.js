import React from "react";
import { createPortal } from "react-dom";
import { CURRENT_VIEW_SECTION_ID } from "../constants/sideNav";
import Divider from "../../Divider";
import SideNavCurrentViewSection from "../sections/SideNavCurrentViewSection";
import Flex from "../../Flex";
import { useSideNavStateContext } from "../context/SideNavStateProvider";
import useResponsive from "../hooks/useResponsive";
import PropTypes from "prop-types";

const RenderCurrentViewSection = ({ viewingState }) => {
  const container = document.getElementById(CURRENT_VIEW_SECTION_ID);
  const { isExpanded } = useSideNavStateContext();
  const { isSmallScreen } = useResponsive();

  return createPortal(
    <Flex flexDirection="column" gap="s">
      <Divider light display={["none", "none", "none", "block"]} />
      <SideNavCurrentViewSection
        {...viewingState}
        isExpanded={isExpanded}
        isSmallScreen={isSmallScreen}
      />
    </Flex>,
    container
  );
};

RenderCurrentViewSection.propTypes = {
  viewingState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    shape: PropTypes.string,
    badge: PropTypes.node,
    subNav: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      })
    )
  })
};

export default RenderCurrentViewSection;
