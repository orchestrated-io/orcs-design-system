import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import Typography from "../Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: ${variables.defaultSpacingHalf};
  }
`;

const Text = styled.div`
  > * + * {
    margin-top: ${variables.defaultSpacingQuarter};
  }
  ${props =>
    props.inverted
      ? css`
          h2,
          h4,
          small {
            color: ${colours.white};
          }
        `
      : css``};
`;

const Image = styled.img`
  width: ${props => (props.small ? "38px" : "50px")};
  height: ${props => (props.small ? "38px" : "50px")};
  background-color: ${colours.greyLighter};
  border-radius: 50%;
  border: 0;
  display: block;
`;

const Default = styled.div`
  width: ${props => (props.small ? "38px" : "50px")};
  height: ${props => (props.small ? "38px" : "50px")};
  border-radius: 50%;
  background: ${colours.greyLighter};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: ${props => (props.small ? "1.6rem" : "2rem")};
  text-align: center;
  text-transform: uppercase;
  font-family: "Arial", sans-serif;
  letter-spacing: normal;
  line-height: normal;
  color: ${colours.white};
  ${props =>
    !props.initials
      ? css`
          &:before {
            content: "";
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' version='1.1'%3E%3Cg transform='translate(-502.000000, -201.000000)' fill='%23FFFFFF'%3E%3Cpath d='M505 206C505 203.2 507.2 201 510 201 512.8 201 515 203.2 515 206 515 208.8 512.8 211 510 211 507.2 211 505 208.8 505 206ZM514.5 212L513.6 212C511.4 213.3 508.6 213.3 506.4 212L505.5 212C503.6 212 502 213.6 502 215.5L502 216.3C502 216.7 502.3 217 502.8 217L517.3 217C517.7 217 518 216.7 518 216.3L518 215.5C518 213.6 516.4 212 514.5 212Z'/%3E%3C/g%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: ${props =>
              props.small ? "16px 16px" : "22px 22px"};
            position: relative;
            width: 100%;
            height: 100%;
          }
        `
      : css``};
`;

/**
 * Avatars can come in a few different options. Firstly regular or small size (using a `H2` or `H5` respectively).
 *
 * Next, depending on what is available it can preferably contain an image file/source, if no image, then show initials as fall back, if no name/initials, then fall back to an icon.
 *
 * Thirdly the title/name can be a link or just plain text.
 *
 * Lastly you can specify whether it is being rendered on a dark background and the colours will change to suit this case.
 *
 * Also, if no title/subtitle is specified then it will only show the circle avatar part.
 *
 * Follow example code below to achieve desired option.
 */
export function Avatar({ image, initials, small, inverted, title, subtitle }) {
  return (
    <Container>
      {image ? (
        <Image src={image} small={small} />
      ) : (
        <Default small={small} initials={initials}>
          {initials}
        </Default>
      )}
      <Text inverted={inverted}>
        {title ? (
          small ? (
            <Typography.H4>{title}</Typography.H4>
          ) : (
            <Typography.H2>{title}</Typography.H2>
          )
        ) : null}
        {subtitle ? <Typography.Small grey>{subtitle}</Typography.Small> : null}
      </Text>
    </Container>
  );
}

Avatar.propTypes = {
  /** Specifies to use small avatar instead of regular size */
  small: PropTypes.bool,
  /** Specifies to use inverted styling if on dark background */
  inverted: PropTypes.bool,
  /** Specifies a source path for an image */
  image: PropTypes.string,
  /** Specifies initials of person if available */
  initials: PropTypes.string,
  /** Specifies title / name as just plain text, or an element like a hyperlink or react router link */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Specifies subtitle **/
  subtitle: PropTypes.string
};

/** @component */
export default Avatar;
