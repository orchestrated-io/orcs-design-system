import React from "react";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import styled from "styled-components";
import { space, layout } from "styled-system";

const classnames = (...args) => args.join(" ");
const getClassName = el => (el.props && el.props.className) || "";

const StyledChildren = ({ className, children }) => {
  const styledChildren = React.Children.toArray(children).map(child =>
    React.cloneElement(child, {
      className: classnames(getClassName(child), className)
    })
  );
  return <>{styledChildren}</>;
};

const Wrapper = styled(StyledChildren)(space, layout);

export default function Spacer({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

Spacer.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  /** Adds margins around each child item. Can use numbers (which refer to the elements in the `space` array or px/percentage values.) */
  margin: PropTypes.string
};

Spacer.defaultProps = {
  /** Adds margins around each child item. */
  margin: 3
};

StyledChildren.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
