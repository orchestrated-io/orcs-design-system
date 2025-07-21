import React, { useEffect, useRef } from "react";
import { CURRENT_VIEW_SECTION_ID } from "../constants/sideNav";

const CurrentViewSectionPortalTarget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const container = document.getElementById(CURRENT_VIEW_SECTION_ID);

      if (container?.children.length > 1) {
        throw new Error(
          "Only one current view section can be rendered at a time"
        );
      }
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

  return <div ref={containerRef} id={CURRENT_VIEW_SECTION_ID} />;
};

CurrentViewSectionPortalTarget.propTypes = {};

export default CurrentViewSectionPortalTarget;
