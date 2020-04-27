import React from "react";
import { space, layout, compose } from "styled-system";
import { css } from "@styled-system/css";
import styled from "styled-components";
import propTypes from "@styled-system/prop-types";

import PropTypes from "prop-types";

const spaceStyles = compose(space, layout);

const Item = styled("div")(
  css({
    display: "inherit",
    alignItems: "inherit",
    flexDirection: "inherit",
    flexWrap: "inherit",
    justifyContent: "inherit"
  }),
  spaceStyles
);

const Spacer = ({ children, display, ...props }) => {
  const clones = React.Children.toArray(children).map(child =>
    React.cloneElement(child, { ...props })
  );

  return <Item display={display}>{clones}</Item>;
};

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  /** Specifies display properties for Spacer. */
  display: PropTypes.string,
  /** Adds margins around each child item. */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Spacer.defaultProps = {
  display: "inherit"
};

export default Spacer;
