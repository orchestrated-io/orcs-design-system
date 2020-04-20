import React from "react";
import styled from "styled-components";
import { space, layout, variant } from "styled-system";
import PropTypes from "prop-types";
import { H3, Text } from "../Typography";
import Icon from "../Icon";
import css from "@styled-system/css";
import themeGet from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";

const AvatarWrapper = styled("div")(
  layout,
  space,
  css({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center"
  }),
  variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: 1
      },
      default: {}
    }
  }),
  variant({
    prop: "type",
    variants: {
      inverted: {
        color: "white"
      }
    }
  })
);

const TextContent = styled("div")(
  css({ marginLeft: 3 }),
  variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: 1
      }
    }
  }),
  variant({
    prop: "type",
    variants: {
      inverted: {
        color: "white"
      }
    }
  })
);

const Image = styled("img")(
  props => ({
    width: "calc(" + themeGet("space.5")(props) + " * 2)",
    height: "calc(" + themeGet("space.5")(props) + " * 2)"
  }),
  css({
    backgroundColor: "greyLighter",
    border: "0",
    display: "block",
    borderRadius: "50%"
  }),
  props =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          width: "calc(" + themeGet("space.4")(props) + " * 2.25)",
          height: "calc(" + themeGet("space.4")(props) + " * 2.25)"
        }
      }
    })
);

const Circle = styled("div")(
  props => ({
    width: "calc(" + themeGet("space.5")(props) + " * 2)",
    height: "calc(" + themeGet("space.5")(props) + " * 2)",
    fontWeight: themeGet("fontWeights.2")(props)
  }),
  css({
    backgroundColor: "greyLighter",
    border: "0",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase"
  }),
  props =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          width: "calc(" + themeGet("space.4")(props) + " * 2.25)",
          height: "calc(" + themeGet("space.4")(props) + " * 2.25)"
        }
      }
    }),
  variant({
    prop: "type",
    variants: {
      inverted: {
        backgroundColor: "greyDarker",
        color: "white"
      }
    }
  })
);

const Title = styled(H3)(
  variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: 2
      }
    }
  }),
  variant({
    prop: "type",
    variants: {
      inverted: {
        color: "white"
      }
    }
  })
);

const Subtitle = styled(Text)(
  css({
    color: "grey"
  }),
  variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: 1,
        fontWeight: 0
      }
    }
  }),
  variant({
    prop: "type",
    variants: {
      inverted: {
        color: "white"
      },
      default: {}
    }
  })
);

const Avatar = ({
  sizing,
  image,
  initials,
  title,
  subtitle,
  type,
  theme,
  ...props
}) => {
  return (
    <AvatarWrapper {...props} type={type} sizing={sizing} theme={theme}>
      {image ? (
        <Image src={image} sizing={sizing} theme={theme} />
      ) : (
        <Circle sizing={sizing} type={type} theme={theme}>
          {initials ? initials : <Icon icon={["fas", "user"]} />}
        </Circle>
      )}
      <TextContent type={type} sizing={sizing} theme={theme}>
        <Title type={type} sizing={sizing} theme={theme}>
          {title}
        </Title>
        {subtitle ? (
          <Subtitle type={type} sizing={sizing} theme={theme}>
            {subtitle}
          </Subtitle>
        ) : null}
      </TextContent>
    </AvatarWrapper>
  );
};

Avatar.propTypes = {
  /** Changes the sizing of the Avatar component */
  sizing: PropTypes.oneOf(["small", "default"]),
  /** Specifies the inverted type for dark backgrounds */
  type: PropTypes.oneOf(["inverted", "default"]),
  /** Specifies a source path for an image */
  image: PropTypes.string,
  /** Specifies initials of person if available */
  initials: PropTypes.string,
  /** Specifies title / name as just plain text, or an element like a hyperlink or react router link */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Specifies subtitle / role */
  subtitle: PropTypes.string,
  /** Specifies the colour theme */
  theme: PropTypes.object
};

Avatar.defaultProps = {
  sizing: "default",
  type: "default",
  theme: systemtheme
};

export default Avatar;
