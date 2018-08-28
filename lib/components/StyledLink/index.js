import styled from "styled-components";
import variables from "../../variables";
import theme from "../../theme";

const styleLink = LinkComponent => styled(LinkComponent)`
  text-decoration: none;
  cursor: pointer;
  transition: ${variables.defaultTransition};
  font-weight: ${props => (props.bold ? 600 : 300)};
  display: ${props => (props.block ? `block` : `inline`)};

  color: ${props =>
    props.active ? theme.primary : props.white ? theme.white : theme.primary};

  margin-bottom: ${props =>
    props.marginBottomDouble
      ? variables.defaultSpacingDouble
      : props.marginBottomHalf
        ? variables.defaultSpacingHalf
        : props.marginBottom ? variables.defaultSpacing : 0};

  &:hover,
  &:focus {
    outline: none;
    color: ${props => (props.white ? theme.warning : theme.warningDark)};
  }
`;

const Hyperlink = styleLink(styled.a``);

/** @component */
export default { styleLink, Hyperlink };
