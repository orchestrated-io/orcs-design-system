import styled from "styled-components";
import {
  typography,
  color,
  space,
  layout,
  variant,
  compose
} from "styled-system";
import css from "@styled-system/css";
import { rgba } from "polished";
import { themeGet } from "@styled-system/theme-get";
import { systemtheme } from "../../systemtheme";

const typeStyles = compose(typography, space, color);

export const H1 = styled("h1")(
  css({
    fontFamily: "main",
    fontSize: 8,
    fontWeight: 1
  }),
  variant({
    scale: "variantsH1",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      },
      large: {
        fontSize: 9
      },
      small: {
        fontSize: 7
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[5]
        },
        large: {
          fontSize: systemtheme.fontSizes[7]
        }
      }
    })}
`;

export const H2 = styled("h2")(
  css({
    fontFamily: "main",
    fontSize: 7,
    fontWeight: 1
  }),
  variant({
    scale: "variantsH2",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      },
      large: {
        fontSize: 8
      },
      small: {
        fontSize: 6
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[4]
        },
        large: {
          fontSize: systemtheme.fontSizes[6]
        }
      }
    })}
`;

export const H3 = styled("h3")(
  css({
    fontFamily: "main",
    fontSize: 6,
    fontWeight: 1
  }),
  variant({
    scale: "variantsH3",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      },
      large: {
        fontSize: 7
      },
      small: {
        fontSize: 5
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[3]
        },
        large: {
          fontSize: systemtheme.fontSizes[5]
        }
      }
    })}
`;

export const H4 = styled("h4")(
  css({
    fontFamily: "main",
    fontSize: 5,
    fontWeight: 1
  }),
  variant({
    scale: "variantsH4",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      },
      large: {
        fontSize: 6
      },
      small: {
        fontSize: 4
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[2]
        },
        large: {
          fontSize: systemtheme.fontSizes[4]
        }
      }
    })}
`;
export const H5 = styled.h5`
  ${typography}
  ${color}
  ${variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      },
      large: {
        fontSize: 5
      },
      small: {
        fontSize: 3
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[1]
        },
        large: {
          fontSize: systemtheme.fontSizes[3]
        }
      }
    })}
`;

export const H6 = styled("h6")(
  css({
    fontFamily: "main",
    fontSize: 3,
    fontWeight: 1
  }),
  variant({
    scale: "variantsH6",
    variants: {
      light: {
        fontWeight: 0
      },
      bold: {
        fontWeight: 2
      },
      large: {
        fontSize: 4
      },
      small: {
        fontSize: 2
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[0]
        },
        large: {
          fontSize: systemtheme.fontSizes[2]
        }
      }
    })}
`;

export const P = styled("p")(
  css({
    fontFamily: "main",
    fontSize: 2,
    lineHeight: 1
  }),
  variant({
    scale: "variantsP",
    variants: {
      large: {
        fontSize: 3
      },
      small: {
        fontSize: 1
      },
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
  css({
    fontFamily: "main"
  }),
  typeStyles
);

export const Quote = styled.blockquote`
  display: block;
  font-size: ${systemtheme.fontSizes[3]};
  font-family: ${systemtheme.fonts.main};
  line-height: ${systemtheme.lineHeights[1]};
  padding: ${systemtheme.space[3]} ${systemtheme.space[4]};
  border-left: ${systemtheme.space[2]} solid ${systemtheme.colors.greyDark};
  em {
    display: block;
    font-style: italic;
    font-size: ${systemtheme.fontSizes[2]};
    color: ${systemtheme.colors.greyDark};
  };
  ${typography}
  ${space}
  ${color}
`;

export const Code = styled.code`
  background: ${rgba(systemtheme.colors.warningLightest, 0.4)};
  ${css({
    lineHeight: 1,
    padding: 3
  })},
  ${typography}
  ${color}
  ${space}
`;

export default { H1, H2, H3, H4, H5, H6, P, Text, Quote, Code };
