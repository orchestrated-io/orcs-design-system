import React, { useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, variant } from "styled-system";
import PropTypes from "prop-types";
import Header, { Text } from "../Typography";
import Icon from "../Icon";
import Popover from "../Popover";
import StatusDot from "../StatusDot";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const AvatarWrapper = styled("div")(
  layout,
  space,
  css({
    boxSizing: "border-box",
    position: "relative",
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
        large: {
          fontSize: themeGet("fontSizes.2")(props)
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
  css({ marginLeft: "s", lineHeight: "0.8" }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          fontSize: themeGet("fontSizes.1")(props)
        },
        large: {
          marginLeft: "r",
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

const Image = styled("img")(
  (props) =>
    css({
      width:
        themeGet(`appScale.${props.customSize || "avatarDefault"}`)(props) ||
        props.customSize,
      height:
        themeGet(`appScale.${props.customSize || "avatarDefault"}`)(props) ||
        props.customSize,
      flex: "0 0 auto",
      backgroundColor: themeGet("colors.greyLighter")(props),
      border: "0",
      display: "block",
      borderRadius: "50%"
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          width: themeGet("appScale.avatarSmall")(props),
          height: themeGet("appScale.avatarSmall")(props)
        },
        large: {
          width: themeGet("appScale.avatarLarge")(props),
          height: themeGet("appScale.avatarLarge")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "shape",
      variants: {
        square: {
          borderRadius: themeGet("radii.2")(props)
        },
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
      width:
        themeGet(`appScale.${props.customSize || "avatarDefault"}`)(props) ||
        props.customSize,
      height:
        themeGet(`appScale.${props.customSize || "avatarDefault"}`)(props) ||
        props.customSize,
      fontWeight: themeGet("fontWeights.2")(props),
      flex: "0 0 auto",
      background: `linear-gradient(135deg, ${themeGet("colors.primaryLightest")(
        props
      )}, ${themeGet("colors.primaryLight")(props)})`,
      color: themeGet("colors.white")(props),
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
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          width: themeGet("appScale.avatarSmall")(props),
          height: themeGet("appScale.avatarSmall")(props)
        },
        large: {
          width: themeGet("appScale.avatarLarge")(props),
          height: themeGet("appScale.avatarLarge")(props)
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
  (props) =>
    variant({
      prop: "shape",
      variants: {
        square: {
          borderRadius: themeGet("radii.2")(props)
        },
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

const Title = styled(({ titleLevel, ...props }) => {
  const Heading = Header[titleLevel];
  return React.cloneElement(<Heading />, props);
})(
  (props) =>
    css({
      fontSize: themeGet("fontSizes.2")(props),
      "> a": {
        fontSize: themeGet("fontSizes.2")(props),
        color:
          props.type == "inverted"
            ? themeGet("colors.primaryLight")(props)
            : themeGet("colors.primary")(props)
      },
      "> div > a": {
        fontSize: themeGet("fontSizes.2")(props),
        color:
          props.type == "inverted"
            ? themeGet("colors.primaryLight")(props)
            : themeGet("colors.primary")(props)
      },
      "> div > div > a": {
        fontSize: themeGet("fontSizes.2")(props),
        color:
          props.type == "inverted"
            ? themeGet("colors.primaryLight")(props)
            : themeGet("colors.primary")(props)
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          fontSize: themeGet("fontSizes.2")(props),
          "> a": {
            fontSize: themeGet("fontSizes.2")(props)
          },
          "> div > a": {
            fontSize: themeGet("fontSizes.2")(props)
          },
          "> div > div > a": {
            fontSize: themeGet("fontSizes.2")(props)
          }
        },
        large: {
          fontSize: themeGet("fontSizes.3")(props),
          "> a": {
            fontSize: themeGet("fontSizes.3")(props)
          },
          "> div > a": {
            fontSize: themeGet("fontSizes.3")(props)
          },
          "> div > div > a": {
            fontSize: themeGet("fontSizes.3")(props)
          }
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
      color: themeGet("colors.greyDark")(props),
      fontSize: themeGet("fontSizes.1")(props)
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          fontSize: themeGet("fontSizes.0")(props),
          fontWeight: themeGet("fontWeights.1")(props)
        },
        large: {
          fontSize: themeGet("fontSizes.2")(props),
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

const LocalTime = styled(Popover)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Avatar = ({
  sizing,
  image,
  imageAlt,
  initials,
  title,
  titleLevel = "H3",
  subtitle,
  subtitleContent,
  type,
  theme,
  shape,
  localTime,
  uppercase = true,
  customSize,
  ...props
}) => {
  const hasTitle = !!title;
  const hasSubtitle = !!subtitle;
  const hasSubtitleContent = !!subtitleContent;
  const alt = useMemo(() => {
    if (imageAlt) {
      return imageAlt;
    } else if (typeof title === "string") {
      return `Avatar for ${title}`;
    }
  }, [imageAlt, title]);

  const component = (
    <AvatarWrapper {...props} type={type} sizing={sizing}>
      {image ? (
        <Image
          src={image}
          sizing={sizing}
          shape={shape}
          alt={alt}
          customSize={customSize}
        />
      ) : (
        <Shape
          shape={shape}
          sizing={sizing}
          customSize={customSize}
          type={type}
          className={type == "inverted" ? "inverted" : ""}
          uppercase={uppercase}
        >
          {initials ? (
            initials
          ) : shape === "hexagon" ? (
            <Icon icon={["fas", "users"]} />
          ) : shape === "tag" ? (
            <Icon icon={["fas", "tag"]} />
          ) : shape === "square" ? (
            <Icon icon={["fas", "users"]} />
          ) : (
            <Icon icon={["fas", "user"]} />
          )}
        </Shape>
      )}
      {(hasTitle || hasSubtitle) && (
        <TextContent type={type} sizing={sizing} theme={theme}>
          {hasTitle && (
            <Title
              titleLevel={titleLevel}
              type={type}
              sizing={sizing}
              theme={theme}
            >
              {title}
            </Title>
          )}
          {hasSubtitle && (
            <Subtitle type={type} sizing={sizing}>
              {subtitle}
            </Subtitle>
          )}
          {hasSubtitleContent && subtitleContent}
        </TextContent>
      )}
      {localTime && (
        <LocalTime
          direction="topRight"
          textAlign="center"
          width="130px"
          text={localTime}
        >
          <StatusDot icon>
            <Icon icon={["fas", "clock"]} color="white" transform="grow-2" />
          </StatusDot>
        </LocalTime>
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
  sizing: PropTypes.oneOf(["small", "large", "default"]),
  /* If specifying custom sizing, provide a string with the size in pixels */
  customSize: PropTypes.string,
  /** Changes the shape of the Avatar component */
  shape: PropTypes.oneOf(["square", "hexagon", "tag", "default"]),
  /** Specifies the inverted type for dark backgrounds */
  type: PropTypes.oneOf(["inverted", "default"]),
  /** Specifies a source path for an image */
  image: PropTypes.string,
  /** Specifies the alt text for an image. This must be specified if image prop is used and title prop is not a string. */
  imageAlt: (props, propName) => {
    if (
      props.image &&
      props.title &&
      typeof props.title !== "string" &&
      (props[propName] == null || props[propName] === "")
    ) {
      return new Error(
        `Missing prop \`${propName}\` not specified for Avatar component. When \`image\` is provided, \`${propName}\` is required.`
      );
    }
    if (props[propName] && typeof props[propName] !== "string") {
      return new Error(
        `Invalid propType \`${propName}\` supplied to Avatar component. Expected \`string\`, received \`${typeof props[
          propName
        ]}\`.`
      );
    }
    return null;
  },
  /** Specifies initials of person if available */
  initials: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Specifies custom content for avatar subtitle */
  subtitleContent: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  /** Specifies whether to use uppercase for initials */
  uppercase: PropTypes.bool,
  /** Specifies title / name as just plain text, or an element like a hyperlink or react router link */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Specifies the component to wrap the heading, defaults to H3 */
  titleLevel: PropTypes.oneOf(["H1", "H2", "H3", "H4", "H5", "H6"]),
  /** Specifies subtitle / role */
  subtitle: PropTypes.string,
  /** Specifies local time */
  localTime: PropTypes.string,
  /** Specifies the colour theme */
  theme: PropTypes.object
};

export default Avatar;
