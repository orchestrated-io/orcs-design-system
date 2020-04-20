import React from "react";
import { space, layout, compose } from "styled-system";
import propTypes from "@styled-system/prop-types";

import PropTypes from "prop-types";

const Spacer = ({ children, ...props }) => {
  const spaceProps = compose(space, layout);
  const clones = React.Children.map(children, child => {
    return React.cloneElement(child, { spaceProps, ...props });
  });

  return <>{clones}</>;
};

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  /** Adds margins around each child item. */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Spacer.defaultProps = {
  /** Adds margins around each child item. */
  m: 3
};

export default Spacer;
