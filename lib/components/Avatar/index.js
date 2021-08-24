import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, variant } from "styled-system";
import PropTypes from "prop-types";
import { H3, Text } from "../Typography";
import Icon from "../Icon";
import css from "@styled-system/css";
import systemtheme from "../../systemtheme";
import { themeGet } from "@styled-system/theme-get";

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
      inverted: {}
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
  (props) => ({
    width: `calc(${themeGet("space.5")(props)} * 2)`,
    height: `calc(${themeGet("space.5")(props)} * 2)`
  }),
  css({
    flex: "0 0 auto",
    backgroundColor: "greyLighter",
    border: "0",
    display: "block",
    borderRadius: "50%"
  }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          width: `calc(${themeGet("space.4")(props)} * 2.25)`,
          height: `calc(${themeGet("space.4")(props)} * 2.25)`
        }
      }
    }),
  variant({
    prop: "shape",
    variants: {
      hexagon: {
        borderRadius: "0",
        clipPath: "polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"
      }
    }
  })
);

const Shape = styled("div")(
  (props) =>
    css({
      width: `calc(${themeGet("space.5")(props)}* 2)`,
      height: `calc(${themeGet("space.5")(props)}* 2)`,
      fontWeight: themeGet("fontWeights.2")(props),
      flex: "0 0 auto",
      backgroundColor: "greyLighter",
      color: props.whiteInitials ? "white" : "greyDarkest",
      border: "0",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      textTransform: "uppercase",
      a: {
        color: "greyDarkest"
      },
      "&.inverted a": { color: "white" }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          width: `calc(${themeGet("space.4")(props)} * 2.25)`,
          height: `calc(${themeGet("space.4")(props)} * 2.25)`
        },
        default: {}
      }
    }),
  variant({
    prop: "type",
    variants: {
      inverted: {
        backgroundColor: "greyDarker",
        color: "white"
      },
      default: {}
    }
  }),
  variant({
    prop: "shape",
    variants: {
      hexagon: {
        borderRadius: "0",
        clipPath: "polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"
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
  shape,
  whiteInitials,
  ...props
}) => {
  const hasTitle = !!title;
  const hasSubtitle = !!subtitle;

  return (
    <ThemeProvider theme={theme}>
      <AvatarWrapper {...props} type={type} sizing={sizing}>
        {image ? (
          <Image src={image} sizing={sizing} shape={shape} />
        ) : (
          <Shape
            shape={shape}
            sizing={sizing}
            type={type}
            className={type == "inverted" ? "inverted" : ""}
            whiteInitials={whiteInitials}
          >
            {initials ? (
              initials
            ) : shape === "hexagon" ? (
              <Icon icon={["fas", "users"]} />
            ) : (
              <Icon icon={["fas", "user"]} />
            )}
          </Shape>
        )}
        {(hasTitle || hasSubtitle) && (
          <TextContent type={type} sizing={sizing} theme={theme}>
            {hasTitle && (
              <Title type={type} sizing={sizing} theme={theme}>
                {title}
              </Title>
            )}
            {hasSubtitle && (
              <Subtitle type={type} sizing={sizing}>
                {subtitle}
              </Subtitle>
            )}
          </TextContent>
        )}
      </AvatarWrapper>
    </ThemeProvider>
  );
};

Avatar.propTypes = {
  /** Changes the sizing of the Avatar component */
  sizing: PropTypes.oneOf(["small", "default"]),
  /** Changes the sizing of the Avatar component */
  shape: PropTypes.oneOf(["hexagon", "default"]),
  /** Specifies the inverted type for dark backgrounds */
  type: PropTypes.oneOf(["inverted", "default"]),
  /** Specifies a source path for an image */
  image: PropTypes.string,
  /** Specifies initials of person if available */
  initials: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Turns white initials on for custom `Circle` backgrounds */
  whiteInitials: PropTypes.bool,
  /** Specifies title / name as just plain text, or an element like a hyperlink or react router link */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Specifies subtitle / role */
  subtitle: PropTypes.string,
  /** Specifies the colour theme */
  theme: PropTypes.object
};

Avatar.defaultProps = {
  theme: systemtheme
};

export default Avatar;
