import styled from "styled-components";
import {
  typography,
  space,
  layout,
  color,
  variant,
  compose
} from "styled-system";
import css from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { themeGet } from "@styled-system/theme-get";

const typeStyles = compose(typography, color, space, layout);

export const H1 = styled("h1")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.6")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.7")(props)
        },
        small: {
          fontSize: themeGet("fontSizes.5")(props)
        }
      }
    }),
  typeStyles
);

export const H2 = styled("h2")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.5")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.6")(props)
        },
        small: {
          fontSize: themeGet("fontSizes.4")(props)
        }
      }
    }),
  typeStyles
);

export const H3 = styled("h3")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.4")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.5")(props)
        },
        small: {
          fontSize: themeGet("fontSizes.3")(props)
        }
      }
    }),
  typeStyles
);

export const H4 = styled("h4")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.3")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.4")(props)
        },
        small: {
          fontSize: themeGet("fontSizes.2")(props)
        }
      }
    }),
  typeStyles
);

export const H5 = styled("h5")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.2")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.3")(props)
        },
        small: {
          fontSize: themeGet("fontSizes.1")(props)
        }
      }
    }),
  typeStyles
);

export const H6 = styled("h6")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.1")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.2")(props)
        },
        small: {
          fontSize: themeGet("fontSizes.0")(props)
        }
      }
    }),
  typeStyles
);

export const P = styled("p")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.2")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.3")(props)
        }
      }
    }),
  typeStyles
);

export const Small = styled("small")
  .withConfig({ shouldForwardProp })
  .attrs({ className: "Small" })(
  (props) =>
    css({
      fontSize: "1.3rem",
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  typeStyles
);

export const Text = styled("span")(
  (props) =>
    css({
      fontFamily: themeGet("fonts.main")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  (props) =>
    variant({
      prop: "weight",
      variants: {
        light: {
          fontWeight: themeGet("fontWeights.0")(props)
        },
        bold: {
          fontWeight: themeGet("fontWeights.2")(props)
        }
      }
    }),
  (props) =>
    variant({
      prop: "sizing",
      variants: {
        large: {
          fontSize: themeGet("fontSizes.3")(props)
        }
      }
    }),
  typeStyles
);

export const Quote = styled("blockquote")(
  (props) =>
    css({
      display: "block",
      fontSize: themeGet("fontSizes.4")(props),
      fontWeight: themeGet("fontWeights.1")(props),
      borderLeftStyle: "solid",
      borderLeftWidth: 3,
      borderLeftColor: "greyLight",
      p: 4,
      em: {
        display: "block",
        fontStyle: "italic",
        fontSize: themeGet("fontSizes.3")(props),
        color: themeGet("colors.grey")(props)
      }
    }),
  typeStyles
);

export const Code = styled("div")((props) =>
  css({
    padding: 3,
    fontFamily: "monospace",
    backgroundColor: themeGet("colors.warningLightest")(props)
  })
);

export default { H1, H2, H3, H4, H5, H6, P, Text, Quote, Small, Code };
