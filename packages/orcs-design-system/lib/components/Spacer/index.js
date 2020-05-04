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

const Spacer = ({ children, ...props }) => {
  const clones = React.Children.toArray(children).map(child =>
    React.cloneElement(child, { ...props })
  );

  return <Item>{clones}</Item>;
};

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  /** Adds margins around each child item. */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Spacer;
