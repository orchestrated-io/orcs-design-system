import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  ComponentContainer,
  PanelBar,
  PanelBarDivider,
  PanelContainer
} from "./FloatingPanels.styles";
import { Panel, PanelBarIcon } from "./Panel";
import PropTypes from "prop-types";

const FloatingPanels = ({
  panels,
  containerHeight = "100%",
  position = { right: 0, top: 0 },
  centered = false,
  alignPanels = "right",
  zIndex = 2,
  disablePanelSelect = false,
  defaultSelectedPanelId = null,
  onClick = () => {},
  eventBus = null
}) => {
  const [selectedPanelId, setSelectedPanelId] = useState(
    defaultSelectedPanelId
  );

  useEffect(() => {
    // create events
    const SetSelectedPanel = (paneId) => {
      setSelectedPanelId(paneId);
    };

    // register event listeners
    eventBus?.on("FloatingPanels_SetSelectedPanel", SetSelectedPanel);

    // on unmount, deregister event listeners
    return () => {
      eventBus?.off("FloatingPanels_SetSelectedPanel", SetSelectedPanel);
    };
  }, [eventBus]);

  useEffect(() => {
    // external consumers can respond to changes in selected panel if they want
    eventBus?.emit("FloatingPanels_SelectedPanelChanged", selectedPanelId);
  }, [eventBus, selectedPanelId]);

  useEffect(() => {
    if (disablePanelSelect) {
      return;
    }

    const selectedPanel = panels.find((panel) => panel.selected);
    if (selectedPanel?.id && !selectedPanel.noActiveState) {
      setSelectedPanelId(selectedPanel.id);
    }
  }, [disablePanelSelect, panels]);

  const togglePanel = useCallback(
    (panelId) => {
      const selectedPanel = panels.find((panel) => panel.id === panelId);

      // no panel?
      if (!selectedPanel) {
        return;
      }

      onClick(panelId);

      if (!disablePanelSelect) {
        // panel not already selected?
        if (panelId !== selectedPanelId) {
          // has content (selectable)?
          if (selectedPanel.content) {
            // select panel
            setSelectedPanelId(panelId);
          }
        }
        // already selected?
        else {
          // toggle off
          setSelectedPanelId(null);
        }
      }
    },
    [selectedPanelId, disablePanelSelect, onClick, panels]
  );

  const panelBarItems = useMemo(() => {
    const items = [];

    let prevPanel = null;
    for (const panel of panels) {
      // grouping has changed?
      if (prevPanel !== null && panel.grouping !== prevPanel.grouping) {
        // add divider first
        items.push(<PanelBarDivider key={`${panel.grouping}_${panel.id}`} />);
      }

      // add bar item
      items.push(
        <PanelBarIcon
          key={panel?.id}
          iconName={panel.iconName}
          title={panel.title}
          isExpanded={selectedPanelId === panel.id}
          forceHighlight={panel.forceHighlight ?? false}
          toggleExpanded={() => togglePanel(panel.id)}
        />
      );

      // update prevPanel
      prevPanel = panel;
    }

    return items;
  }, [panels, selectedPanelId, togglePanel]);

  const showPanelContainer = useMemo(() => {
    return panels.some((panel) => panel.id === selectedPanelId);
  }, [panels, selectedPanelId]);

  return (
    <ComponentContainer
      centered={centered}
      alignPanels={alignPanels}
      containerHeight={containerHeight}
      position={position}
      zIndex={zIndex}
    >
      <PanelBar>{panelBarItems}</PanelBar>
      {showPanelContainer && (
        <PanelContainer containerHeight={containerHeight}>
          {panels.map((panel) => (
            <Panel
              key={panel?.id}
              title={panel.title}
              iconName={panel.iconName}
              content={panel.content}
              containerHeight={containerHeight}
              isExpanded={selectedPanelId === panel.id}
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
      grouping: PropTypes.string,
      forceHighlight: PropTypes.bool
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
  defaultSelectedPanelId: PropTypes.string,
  disablePanelSelect: PropTypes.bool,
  eventBus: PropTypes.object
};

export default FloatingPanels;
