import React, { useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, variant, position, compose } from "styled-system";
import PropTypes from "prop-types";
import Header, { Text } from "../Typography";
import Icon from "../Icon";
import Popover from "../Popover";
import StatusDot from "../StatusDot";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const avatarStyles = compose(space, layout, position);

// Helper function to resolve customSize values
const resolveCustomSize = (customSize, props) => {
  if (!customSize) return null;

  // Check if customSize is a pixel value or a theme value
  if (
    customSize.includes("px") ||
    customSize.includes("rem") ||
    customSize.includes("em") ||
    customSize.includes("%")
  ) {
    return customSize;
  } else {
    // It's a theme value, resolve it using themeGet
    return themeGet(`avatarScale.${customSize}`)(props) || customSize;
  }
};

const AvatarWrapper = styled("div")(
  css({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    position: "relative"
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
  }),
  avatarStyles
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
        resolveCustomSize(props.customSize, props) ||
        themeGet("avatarScale.avatarDefault")(props),
      height:
        resolveCustomSize(props.customSize, props) ||
        themeGet("avatarScale.avatarDefault")(props),
      flex: "0 0 auto",
      backgroundColor: themeGet("colors.greyLighter")(props),
      objectFit: "cover",
      objectPosition: "center",
      objectRepeat: "no-repeat",
      border: "0",
      display: "block",
      borderRadius: "50%"
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        small: {
          width: themeGet("avatarScale.avatarSmall")(props),
          height: themeGet("avatarScale.avatarSmall")(props)
        },
        large: {
          width: themeGet("avatarScale.avatarLarge")(props),
          height: themeGet("avatarScale.avatarLarge")(props)
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
        resolveCustomSize(props.customSize, props) ||
        themeGet("avatarScale.avatarDefault")(props),
      height:
        resolveCustomSize(props.customSize, props) ||
        themeGet("avatarScale.avatarDefault")(props),
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
          width: themeGet("avatarScale.avatarSmall")(props),
          height: themeGet("avatarScale.avatarSmall")(props)
        },
        large: {
          width: themeGet("avatarScale.avatarLarge")(props),
          height: themeGet("avatarScale.avatarLarge")(props)
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

// HeaderAvatar specific styles
const HeaderAvatarWrapper = styled("div")(
  ({ $size, $shape }) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: $size,
    height: $size,
    transition: "width 200ms ease-in-out, height 200ms ease-in-out",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.15)",
    borderRadius:
      $shape === "circle" || !$shape
        ? "50%"
        : $shape === "square"
        ? "6px"
        : "0",
    background: "transparent"
  }),
  avatarStyles
);

const HeaderAvatarBorder = styled("div")(({ $size, $shape, $sizing }) => ({
  width: $size,
  height: $size,
  transition:
    "width 200ms ease-in-out, height 200ms ease-in-out, border-width 200ms ease-in-out",
  border: $sizing === "large" ? "6px solid #fff" : "4px solid #fff",
  borderRadius:
    $shape === "circle" || !$shape ? "50%" : $shape === "square" ? "6px" : "0",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff"
}));

const HeaderAvatarImage = styled("img")(({ $size, $shape }) => ({
  width: $size,
  height: $size,
  transition: "width 200ms ease-in-out, height 200ms ease-in-out",
  objectFit: "cover",
  objectPosition: "center",
  objectRepeat: "no-repeat",
  borderRadius:
    $shape === "circle" || !$shape ? "50%" : $shape === "square" ? "6px" : "0",
  display: "block"
}));

const HeaderAvatarShape = styled("div")(({ $size, $shape }) => ({
  width: $size,
  height: $size,
  transition: "width 200ms ease-in-out, height 200ms ease-in-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#e6e6e6",
  color: "#222",
  fontWeight: 600,
  fontSize: `calc(${$size} / 2.5)`,
  borderRadius:
    $shape === "circle" || !$shape ? "50%" : $shape === "square" ? "6px" : "0",
  ...($shape === "hexagon" && {
    clipPath: "polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"
  }),
  ...($shape === "tag" && {
    clipPath: "polygon(6% 0, 95% 0, 95% 65%, 50% 100%, 6% 65%)"
  })
}));

const HeaderAvatarAction = styled("button")(({ $shape }) => ({
  cursor: "pointer",
  padding: "0",
  background: "none",
  border: "none",
  outline: "none",
  appearance: "none",
  position: "relative",
  zIndex: "5",
  borderRadius: $shape === "circle" || !$shape ? "50%" : "6px",
  ...($shape === "hexagon" && {
    clipPath: "polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"
  }),
  ...($shape === "tag" && {
    clipPath: "polygon(6% 0, 95% 0, 95% 65%, 50% 100%, 6% 65%)"
  }),
  "&:hover, &:focus": {
    "& > .icon-container": {
      opacity: "1"
    }
  }
}));

const IconContainer = styled("div")(({ $shape, $sizing, $hasImage }) => {
  // Simplified width calculation (no change based on image presence)
  const width = $sizing === "large" ? "calc(100% - 12px)" : "calc(100% - 8px)";

  // Height calculation with 5px reduction when no image
  const heightReduction =
    $sizing === "large" ? ($hasImage ? 17 : 12) : $hasImage ? 12 : 8;
  const height = `calc(100% - ${heightReduction}px)`;

  return {
    opacity: "0",
    transition: "opacity 0.2s ease-in-out",
    position: "absolute",
    top: $sizing === "large" ? "6px" : "4px",
    left: $sizing === "large" ? "6px" : "4px",
    width,
    height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: "2",
    borderRadius: $shape === "circle" || !$shape ? "50%" : "0",
    ...($shape === "hexagon" && {
      clipPath: "polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"
    }),
    ...($shape === "tag" && {
      clipPath: "polygon(6% 0, 95% 0, 95% 65%, 50% 100%, 6% 65%)"
    })
  };
});

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
  shape = "circle",
  localTime,
  uppercase = true,
  customSize,
  headerAvatar = false,
  onClick,
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

  // HeaderAvatar logic
  if (headerAvatar) {
    // Sizing logic
    let size = theme?.avatarScale?.headerAvatarDefault || "65px";
    if (sizing === "large") {
      size = theme?.avatarScale?.headerAvatarLarge || "150px";
    }
    if (customSize) {
      size = resolveCustomSize(customSize, { theme }) || customSize;
    }

    const avatarContent = (
      <HeaderAvatarWrapper {...props} $size={size} $shape={shape}>
        <HeaderAvatarBorder $size={size} $shape={shape} $sizing={sizing}>
          {image ? (
            <HeaderAvatarImage
              src={image}
              alt={alt}
              $size={size}
              $shape={shape}
            />
          ) : (
            <HeaderAvatarShape $size={size} $shape={shape}>
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
            </HeaderAvatarShape>
          )}
        </HeaderAvatarBorder>
      </HeaderAvatarWrapper>
    );

    if (onClick) {
      return (
        <Popover
          direction="right"
          width="fit-content"
          $shape={shape}
          text={shape === "circle" ? "Upload profile picture" : "Change image"}
          headerAvatarSizing={sizing}
          tabIndex="-1"
        >
          <HeaderAvatarAction
            onClick={onClick}
            aria-label="Edit avatar"
            $shape={shape}
            $sizing={sizing}
          >
            <IconContainer
              $shape={shape}
              $sizing={sizing}
              $hasImage={!!image}
              className="icon-container"
            >
              {shape === "circle" ? (
                <Icon
                  icon={["fas", "camera"]}
                  size={sizing === "large" ? "lg" : "1x"}
                  color="white"
                />
              ) : (
                <Icon
                  icon={["fas", "image"]}
                  size={sizing === "large" ? "lg" : "1x"}
                  color="white"
                />
              )}
            </IconContainer>
            {avatarContent}
          </HeaderAvatarAction>
        </Popover>
      );
    }

    return avatarContent;
  }

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
          width="fit-content"
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
  /* If specifying custom sizing, provide a string with the size including units (e.g. "65px") */
  customSize: PropTypes.string,
  /** Changes the shape of the Avatar component */
  shape: PropTypes.oneOf(["circle", "square", "hexagon", "tag"]), // circle is the default so doesn't explicitly need to be specified
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
  theme: PropTypes.object,
  /** Specifies whether to render the avatar in headerAvatar mode */
  headerAvatar: PropTypes.bool,
  /** Specifies the onClick handler for the action button in headerAvatar mode */
  onClick: PropTypes.func
};

export default Avatar;
