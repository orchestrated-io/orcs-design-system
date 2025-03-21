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
  zIndex = 2,
  onClick = () => {}
}) => {
  const [expandedPanelId, setExpandedPanelId] = useState(null);

  useEffect(() => {
    const expandedPanel = panels.find((panel) => panel.expanded);
    if (expandedPanel?.id && !expandedPanel.noActiveState) {
      setExpandedPanelId(expandedPanel.id);
    }
  }, [panels]);

  const togglePanel = (panelId) => {
    const selectedPanel = panels.find((panel) => panel.id === panelId);
    if (selectedPanel?.stopToggling && expandedPanelId === panelId) {
      return;
    }
    onClick(panelId);
    const selectedPanelId = expandedPanelId === panelId ? null : panelId;
    if (!selectedPanel.noActiveState) {
      setExpandedPanelId(selectedPanelId);
    }
  };

  const shouldDisplayPanelContainer = panels?.some((panel) => panel?.content);

  return (
    <ComponentContainer
      centered={centered}
      containerHeight={containerHeight}
      position={position}
      zIndex={zIndex}
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
  centered: PropTypes.bool,
  zIndex: PropTypes.number
};

FloatingPanels.defaultProps = {
  position: { right: 20, top: 20 }
};

export default FloatingPanels;
