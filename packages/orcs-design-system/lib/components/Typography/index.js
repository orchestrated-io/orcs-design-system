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

const typeStyles = compose(typography, color, space, layout);

export const H1 = styled("h1")(
  (props) =>
    css({
      fontFamily: "main",
      fontSize: 6,
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 7
      },
      small: {
        fontSize: 5
      }
    }
  }),
  typeStyles
);

export const H2 = styled("h2")(
  (props) =>
    css({
      fontFamily: "main",
      fontSize: 5,
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 6
      },
      small: {
        fontSize: 4
      }
    }
  }),
  typeStyles
);

export const H3 = styled("h3")(
  (props) =>
    css({
      fontFamily: "main",
      fontSize: 4,
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 5
      },
      small: {
        fontSize: 3
      }
    }
  }),
  typeStyles
);

export const H4 = styled("h4")(
  (props) =>
    css({
      fontFamily: "main",
      fontSize: 3,
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 4
      },
      small: {
        fontSize: 2
      }
    }
  }),
  typeStyles
);

export const H5 = styled("h5")(
  (props) =>
    css({
      fontFamily: "main",
      fontSize: 2,
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 3
      },
      small: {
        fontSize: 1
      }
    }
  }),
  typeStyles
);

export const H6 = styled("h6")(
  (props) =>
    css({
      fontFamily: "main",
      fontSize: 1,
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 2
      },
      small: {
        fontSize: 0
      }
    }
  }),
  typeStyles
);

export const P = styled("p")(
  (props) =>
    css({
      fontFamily: "main",
      fontSize: 2,
      lineHeight: 1,
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 3
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
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  typeStyles
);

export const Text = styled("span")(
  (props) =>
    css({
      fontFamily: "main",
      fontWeight: 1,
      textTransform: props.uppercase ? "uppercase" : "none",
      wordBreak: props.breakWord ? "break-word" : "normal"
    }),
  variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      }
    }
  }),
  variant({
    prop: "sizing",
    variants: {
      large: {
        fontSize: 3
      }
    }
  }),
  typeStyles
);

export const Quote = styled("blockquote")(
  css({
    display: "block",
    fontSize: 4,
    fontWeight: 1,
    lineHeight: 1,
    borderLeftStyle: "solid",
    borderLeftWidth: 3,
    borderLeftColor: "greyLight",
    p: 4,
    em: {
      display: "block",
      fontStyle: "italic",
      fontSize: 3,
      color: "grey"
    }
  }),
  typeStyles
);

export const Code = styled("div")(
  css({
    padding: 3,
    lineHeight: 1,
    fontFamily: "monospace",
    backgroundColor: "warningLightest"
  })
);

export default { H1, H2, H3, H4, H5, H6, P, Text, Quote, Small, Code };
