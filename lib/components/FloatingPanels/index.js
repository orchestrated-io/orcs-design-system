import React, { useState, useEffect, useCallback } from "react";
import {
  ComponentContainer,
  PanelBar,
  PanelContainer
} from "./FloatingPanels.styles";
import { Panel, PanelBarIcon } from "./Panel";
import PropTypes from "prop-types";

const FloatingPanels = ({
  panels,
  containerHeight = "100%",
  position = { right: 20, top: 20 },
  centered = false,
  alignPanels = "right",
  zIndex = 2,
  disablePanelSelect = false,
  defaultExpandedPanelId = null,
  onClick = () => {}
}) => {
  const [expandedPanelId, setExpandedPanelId] = useState(
    defaultExpandedPanelId
  );

  useEffect(() => {
    if (disablePanelSelect) {
      return;
    }

    const expandedPanel = panels.find((panel) => panel.expanded);
    if (expandedPanel?.id && !expandedPanel.noActiveState) {
      setExpandedPanelId(expandedPanel.id);
    }
  }, [disablePanelSelect, panels]);

  const togglePanel = useCallback(
    (panelId) => {
      const selectedPanel = panels.find((panel) => panel.id === panelId);

      // no panel?
      if (!panels) {
        return;
      }

      onClick(panelId);

      if (!disablePanelSelect) {
        // panel not already selected?
        if (panelId !== expandedPanelId) {
          // has content (selectable)?
          if (selectedPanel.content) {
            // select panel
            setExpandedPanelId(panelId);
          }
        }
        // already selected?
        else {
          // toggle off
          setExpandedPanelId(null);
        }
      }
    },
    [expandedPanelId, disablePanelSelect, onClick, panels]
  );

  return (
    <ComponentContainer
      centered={centered}
      alignPanels={alignPanels}
      containerHeight={containerHeight}
      position={position}
      zIndex={zIndex}
    >
      <PanelBar>
        {panels?.map((panel) => (
          <PanelBarIcon
            key={panel?.id}
            iconName={panel.iconName}
            title={panel.title}
            isExpanded={expandedPanelId === panel.id}
            toggleExpanded={() => togglePanel(panel.id)}
          />
        ))}
      </PanelBar>
      <PanelContainer containerHeight={containerHeight}>
        {panels.map((panel) => (
          <Panel
            key={panel?.id}
            title={panel.title}
            iconName={panel.iconName}
            content={panel.content}
            containerHeight={containerHeight}
            isExpanded={expandedPanelId === panel.id}
            toggleExpanded={() => togglePanel(panel.id)}
          />
        ))}
      </PanelContainer>
    </ComponentContainer>
  );
};

FloatingPanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  containerHeight: PropTypes.string,
  position: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  onClick: PropTypes.func,
  centered: PropTypes.bool,
  alignPanels: PropTypes.oneOf(["left", "center", "right"]),
  zIndex: PropTypes.number,
  defaultExpandedPanelId: PropTypes.string,
  disablePanelSelect: PropTypes.bool
};

export default FloatingPanels;
