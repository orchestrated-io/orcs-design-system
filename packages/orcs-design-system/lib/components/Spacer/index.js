import React from "react";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import styled from "styled-components";

const SpacerWrapper = styled.div``;

const Spacer = ({ children, ...props }) => {
  const clones = React.Children.map(children, child => {
    return React.cloneElement(child, { ...props });
  });

  return <SpacerWrapper>{clones}</SpacerWrapper>;
};

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  /** Adds margins around each child item. Can use numbers (which refer to the elements in the `space` array) or px/percentage values. */
  margin: PropTypes.string
};

Spacer.defaultProps = {
  /** Adds margins around each child item. */
  m: 3
};

export default Spacer;
