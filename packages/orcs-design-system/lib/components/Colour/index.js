import styled from "styled-components";
import colours from "../../colours";

const Colour = styled.div`
  width: 75px;
  height: 75px;

  background: ${props =>
    props.black
      ? colours.black
      : props.greyDarkest
      ? colours.greyDarkest
      : props.greyDarker
      ? colours.greyDarker
      : props.greyDark
      ? colours.greyDark
      : props.grey
      ? colours.grey
      : props.greyLight
      ? colours.greyLight
      : props.greyLighter
      ? colours.greyLighter
      : props.greyLightest
      ? colours.greyLightest
      : props.white
      ? colours.white
      : props.primaryDarkest
      ? colours.primaryDarkest
      : props.primaryDarker
      ? colours.primaryDarker
      : props.primaryDark
      ? colours.primaryDark
      : props.primary
      ? colours.primary
      : props.primaryLight
      ? colours.primaryLight
      : props.primaryLighter
      ? colours.primaryLighter
      : props.primaryLightest
      ? colours.primaryLightest
      : props.successDarkest
      ? colours.successDarkest
      : props.successDarker
      ? colours.successDarker
      : props.successDark
      ? colours.successDark
      : props.success
      ? colours.success
      : props.successLight
      ? colours.successLight
      : props.successLighter
      ? colours.successLighter
      : props.successLightest
      ? colours.successLightest
      : props.warningDarkest
      ? colours.warningDarkest
      : props.warningDarker
      ? colours.warningDarker
      : props.warningDark
      ? colours.warningDark
      : props.warning
      ? colours.warning
      : props.warningLight
      ? colours.warningLight
      : props.warningLighter
      ? colours.warningLighter
      : props.warningLightest
      ? colours.warningLightest
      : props.dangerDarkest
      ? colours.dangerDarkest
      : props.dangerDarker
      ? colours.dangerDarker
      : props.dangerDark
      ? colours.dangerDark
      : props.danger
      ? colours.danger
      : props.dangerLight
      ? colours.dangerLight
      : props.dangerLighter
      ? colours.dangerLighter
      : props.dangerLightest
      ? colours.dangerLightest
      : "transparent;"};
`;

/** @component */
export default Colour;
