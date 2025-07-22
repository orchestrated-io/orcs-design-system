import React, { useEffect, useRef, useState } from "react";
import { CURRENT_VIEW_SECTION_ID } from "../constants/sideNav";
import { useTheme } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box } from "@mui/material";

const CurrentViewSectionPortalTarget = () => {
  const containerRef = useRef(null);
  const [hasChildren, setHasChildren] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const container = document.getElementById(CURRENT_VIEW_SECTION_ID);

      if (container?.children.length > 1) {
        throw new Error(
          "Only one current view section can be rendered at a time"
        );
      }

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
    <Box
      ref={containerRef}
      id={CURRENT_VIEW_SECTION_ID}
      // TODO: This is a hack to fix gap being added to the bottom of the current view section when there are no children
      mb={hasChildren ? "0px" : `-${themeGet("space.s")({ theme })}`}
    />
  );
};

CurrentViewSectionPortalTarget.propTypes = {};

export default CurrentViewSectionPortalTarget;
