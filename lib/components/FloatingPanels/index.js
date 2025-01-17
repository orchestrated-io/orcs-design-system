import React from "react";
import { Container } from "./FloatingPanels.styles";
import Panel from "./Panel";
import PropTypes from "prop-types";

const FloatingPanels = ({
  panels,
  containerHeight,
  position = { right: 20, top: 20 }
}) => {
  return (
    <Container containerHeight={containerHeight} position={position}>
      {panels.map((panel) => (
        <Panel key={panel?.id} {...panel} containerHeight={containerHeight} />
      ))}
    </Container>
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
  })
};

FloatingPanels.defaultProps = {
  position: { right: 20, top: 20 }
};

export default FloatingPanels;
