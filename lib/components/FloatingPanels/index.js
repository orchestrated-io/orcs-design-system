import React, { useState, useEffect } from "react";
import {
  ComponentContainer,
  PanelContainer,
  PanelBar
} from "./FloatingPanels.styles";
import { Panel, PanelBarIcon } from "./Panel";
import PropTypes from "prop-types";

const FloatingPanels = ({
  panels,
  containerHeight,
  position = { right: 20, top: 20 },
  centered = false,
  onClick = () => {}
}) => {
  const [expandedPanelId, setExpandedPanelId] = useState(null);

  useEffect(() => {
    const expandedPanel = panels.find(
      (panel) => panel.expanded && !panel?.noActiveState
    );
    if (expandedPanel?.id) {
      setExpandedPanelId(expandedPanel.id);
    }
  }, [panels]);

  const togglePanel = (panelId) => {
    const shouldSetState = panels.find(
      (panel) => panel.id === panelId && !panel?.noActiveState
    );
    const selectedPanelId = expandedPanelId === panelId ? null : panelId;
    onClick(panelId);
    if (shouldSetState) {
      setExpandedPanelId(selectedPanelId);
    }
  };

  const shouldDisplayPanelContainer = panels?.some((panel) => panel?.content);

  return (
    <ComponentContainer
      centered={centered}
      containerHeight={containerHeight}
      position={position}
    >
      <PanelBar>
        {panels.map((panel) => (
          <PanelBarIcon
            key={panel?.id}
            iconName={panel.iconName}
            title={panel.title}
            isExpanded={expandedPanelId === panel.id}
            toggleExpanded={() => togglePanel(panel.id)}
          />
        ))}
      </PanelBar>
      {shouldDisplayPanelContainer && (
        <PanelContainer containerHeight={containerHeight}>
          {panels.map((panel) => (
            <Panel
              key={panel?.id}
              {...panel}
              containerHeight={containerHeight}
              isExpanded={expandedPanelId === panel.id}
              toggleExpanded={() => togglePanel(panel.id)}
            />
          ))}
        </PanelContainer>
      )}
    </ComponentContainer>
  );
};

FloatingPanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      defaultExpanded: PropTypes.bool
    })
  ).isRequired,
  containerHeight: PropTypes.number,
  position: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  onClick: PropTypes.func,
  centered: PropTypes.bool
};

FloatingPanels.defaultProps = {
  position: { right: 20, top: 20 }
};

export default FloatingPanels;
