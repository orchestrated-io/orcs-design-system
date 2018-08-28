import styled from "styled-components";
import variables from "../../variables";
import theme from "../../theme";

const marginBottom = props =>
  props.marginBottomDouble
    ? variables.defaultSpacingDouble
    : props.marginBottomHalf
      ? variables.defaultSpacingHalf
      : props.marginBottom ? variables.defaultSpacing : 0;

const colour = props =>
  props.grey
    ? theme.grey
    : props.success
      ? theme.success
      : props.warning
        ? theme.warning
        : props.danger
          ? theme.danger
          : props.white ? theme.white : theme.greyDarkest;

const textAlign = props =>
  props.center ? "center" : props.right ? "right" : props.left ? "left" : "inherit";

const bold = props => (props.bold ? 600 : 300);

const H1 = styled.h1`
  font-size: 2.6rem;
  margin: 0;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
`;

const H3 = styled.h3`
  font-size: 2rem;
  margin: 0;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
`;

const H4 = styled.h4`
  font-size: 1.8rem;
  margin: 0;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
`;

const H5 = styled.h5`
  font-size: 1.6rem;
  margin: 0;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
`;

const H6 = styled.h6`
  font-size: 1.4rem;
  margin: 0;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
`;

const P = styled.p`
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
  line-height: 2rem;
`;

const Small = styled.small`
  display: block;
  font-size: 80%;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
  text-transform: ${props => (props.uppercase ? `uppercase` : `none`)};
`;

const Large = styled.h2`
  font-size: 5rem;
  margin-bottom: ${marginBottom};
  font-weight: ${bold};
  color: ${colour};
  text-align: ${textAlign};
`;

const Quote = styled.blockquote`
  display: block;
  margin-bottom: ${marginBottom};
  text-align: ${textAlign};
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2rem;
  padding: ${variables.defaultSpacingHalf} ${variables.defaultSpacing};
  margin: ${variables.defaultSpacing};
  border-left: solid 3px ${theme.greyDark};
  em {
    display: block;
    font-style: italic;
    font-size: 1.4rem;
    color: ${theme.greyDark};
    margin-top: ${variables.defaultSpacingQuarter};
  }
`;

const Code = styled.code`
  margin-bottom: ${marginBottom};
  text-align: ${textAlign};
  line-height: 2rem;
  background: ${theme.warningLightest.fade(0.6)};
  padding: ${variables.defaultSpacingQuarter};
`;

/** @component */
export default { H1, H2, H3, H4, H5, H6, P, Small, Large, Quote, Code };
