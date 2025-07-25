import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CURRENT_VIEW_SECTION_ID } from "../constants/sideNav";

const StyledTarget = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CurrentViewSectionPortalTarget = () => {
  const containerRef = useRef(null);
  const [hasChildren, setHasChildren] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const container = document.getElementById(CURRENT_VIEW_SECTION_ID);

      if (container?.children.length > 1) {
        throw new Error(
          "Only one current view section can be rendered at a time"
        );
      }

      // Update state based on whether there are children
      setHasChildren(container?.children.length > 0);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true, // Watch for children being added/removed
        subtree: false // Set to true if you want to observe all descendants too
      });
    }

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, []);

  return (
    <StyledTarget
      ref={containerRef}
      id={CURRENT_VIEW_SECTION_ID}
      style={{ display: hasChildren ? "block" : "none" }}
    />
  );
};

CurrentViewSectionPortalTarget.propTypes = {};

export default CurrentViewSectionPortalTarget;
