import styled from "styled-components";
import variables from "../../variables";
import colours from "../../colours";

const styleLink = LinkComponent => styled(LinkComponent)`
  display: ${props => (props.block ? "block" : "inline-block")};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: ${variables.defaultTransition};
  font-weight: ${props => (props.bold ? 600 : 300)};

  color: ${props =>
    props.active
      ? colours.primary
      : props.white
        ? colours.white
        : props.colour
          ? colours[props.colour]
          : colours.primary};

  margin-bottom: ${props =>
    props.marginBottomDouble
      ? variables.defaultSpacingDouble
      : props.marginBottomHalf
        ? variables.defaultSpacingHalf
        : props.marginBottom ? variables.defaultSpacing : 0};

  &:hover,
  &:focus {
    outline: 0;
    text-decoration: underline;
  }
`;

const Hyperlink = styleLink(styled.a``);

/** @component */
export default { styleLink, Hyperlink };
