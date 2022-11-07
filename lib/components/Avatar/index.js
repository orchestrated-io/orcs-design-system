import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, variant } from "styled-system";
import PropTypes from "prop-types";
import { H3, Text } from "../Typography";
import Icon from "../Icon";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const AvatarWrapper = styled("div")(
  layout,
  space,
  css({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center"
  }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          fontSize: themeGet("fontSizes.1")(props)
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
  css({ marginLeft: 3, lineHeight: "0.8" }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          fontSize: themeGet("fontSizes.1")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "type",
      variants: {
        inverted: {
          color: themeGet("colors.white")(props)
        }
      }
    })
);

const Image = styled("img")(
  {
    width: "46px",
    height: "46px"
  },
  (props) =>
    css({
      flex: "0 0 auto",
      backgroundColor: themeGet("colors.greyLighter")(props),
      border: "0",
      display: "block",
      borderRadius: "50%"
    }),
  variant({
    prop: "sizing",
    variants: {
      small: {
        width: "38px",
        height: "38px"
      }
    }
  }),
  variant({
    prop: "shape",
    variants: {
      hexagon: {
        borderRadius: "0",
        clipPath: "polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"
      },
      tag: {
        borderRadius: "0",
        clipPath: "polygon(6% 0, 95% 0, 95% 65%, 50% 100%, 6% 65%)"
      }
    }
  })
);

const Shape = styled("div")(
  (props) =>
    css({
      width: "46px",
      height: "46px",
      fontWeight: themeGet("fontWeights.2")(props),
      flex: "0 0 auto",
      backgroundColor: themeGet("colors.greyLighter")(props),
      color: props.whiteInitials
        ? themeGet("colors.white")(props)
        : themeGet("colors.greyDarkest")(props),
      border: "0",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      textTransform: `${(props) => (props.uppercase ? "uppercase" : "none")}`,
      a: {
        color: themeGet("colors.greyDarkest")(props)
      },
      "&.inverted a": { color: themeGet("colors.white")(props) }
    }),
  variant({
    prop: "sizing",
    variants: {
      small: {
        width: "38px",
        height: "38px"
      },
      default: {}
    }
  }),
  (props) =>
    variant({
      prop: "type",
      variants: {
        inverted: {
          backgroundColor: themeGet("colors.greyDarker")(props),
          color: themeGet("colors.white")(props)
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
      },
      tag: {
        borderRadius: "0",
        paddingBottom: "8px",
        clipPath: "polygon(6% 0, 95% 0, 95% 65%, 50% 100%, 6% 65%)"
      }
    }
  })
);

const Title = styled(H3)(
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          fontSize: themeGet("fontSizes.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "type",
      variants: {
        inverted: {
          color: themeGet("colors.white")(props)
        }
      }
    })
);

const Subtitle = styled(Text)(
  (props) =>
    css({
      color: themeGet("colors.grey")(props)
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          fontSize: themeGet("fontSizes.1")(props),
          fontWeight: themeGet("fontWeights.1")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "type",
      variants: {
        inverted: {
          color: themeGet("colors.white")(props)
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
  uppercase = true,
  whiteInitials,
  ...props
}) => {
  const hasTitle = !!title;
  const hasSubtitle = !!subtitle;

  const component = (
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
          uppercase={uppercase}
        >
          {initials ? (
            initials
          ) : shape === "hexagon" ? (
            <Icon icon={["fas", "users"]} />
          ) : shape === "tag" ? (
            <Icon icon={["fas", "tag"]} />
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
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
};

Avatar.propTypes = {
  /** Changes the sizing of the Avatar component */
  sizing: PropTypes.oneOf(["small", "default"]),
  /** Changes the shape of the Avatar component */
  shape: PropTypes.oneOf(["hexagon", "tag", "default"]),
  /** Specifies the inverted type for dark backgrounds */
  type: PropTypes.oneOf(["inverted", "default"]),
  /** Specifies a source path for an image */
  image: PropTypes.string,
  /** Specifies initials of person if available */
  initials: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Turns white initials on for custom `Circle` backgrounds */
  whiteInitials: PropTypes.bool,
  /** Specifies whether to use uppercase for initials */
  uppercase: PropTypes.bool,
  /** Specifies title / name as just plain text, or an element like a hyperlink or react router link */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Specifies subtitle / role */
  subtitle: PropTypes.string,
  /** Specifies the colour theme */
  theme: PropTypes.object
};

export default Avatar;
