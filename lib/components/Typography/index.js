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
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.7")
      },
      small: {
        fontSize: themeGet("fontSizes.5")
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
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.6")
      },
      small: {
        fontSize: themeGet("fontSizes.4")
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
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.5")
      },
      small: {
        fontSize: themeGet("fontSizes.3")
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
      fontWeight: themeGet("fontWeights.1"),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.4")
      },
      small: {
        fontSize: themeGet("fontSizes.2")
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
      fontWeight: themeGet("fontWeights.1"),
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.3")
      },
      small: {
        fontSize: themeGet("fontSizes.1")
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
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.2")
      },
      small: {
        fontSize: themeGet("fontSizes.0")
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
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.3")
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
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
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
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: themeGet("fontWeights.0")
      },
      bold: {
        fontWeight: themeGet("fontWeights.2")
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: themeGet("fontSizes.3")
      }
    }
  }),
  typeStyles
);

export const Quote = styled("blockquote")(
  css({
    display: "block",
    fontSize: themeGet("fontSizes.4"),
    fontWeight: themeGet("fontWeights.1"),
    borderLeftStyle: "solid",
    borderLeftWidth: 3,
    borderLeftColor: "greyLight",
    p: 4,
    em: {
      display: "block",
      fontStyle: "italic",
      fontSize: themeGet("fontSizes.3"),
      color: themeGet("colors.grey")
    }
  }),
  typeStyles
);

export const Code = styled("div")(
  css({
    padding: 3,
    fontFamily: "monospace",
    backgroundColor: themeGet("colors.warningLightest")
  })
);

export default { H1, H2, H3, H4, H5, H6, P, Text, Quote, Small, Code };
