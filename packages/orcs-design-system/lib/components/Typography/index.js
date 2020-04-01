import styled from "styled-components";
import { typography, color, space, variant } from "styled-system";
import * as systemtheme from "../../systemtheme";
import { rgba } from "polished";

export const H1 = styled.h1`
  ${typography}
  ${color}
  ${variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: systemtheme.fontWeights[0]
      },
      bold: {
        fontWeight: systemtheme.fontWeights[2]
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[7]
        },
        large: {
          fontSize: systemtheme.fontSizes[9]
        }
      }
    })}
`;

export const H2 = styled.h2`
  ${typography}
  ${color}
  ${variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: systemtheme.fontWeights[0]
      },
      bold: {
        fontWeight: systemtheme.fontWeights[2]
      }
    }
  })}
    ${variant({
      prop: "size",
      variants: {
        small: {
          fontSize: systemtheme.fontSizes[6]
        },
        large: {
          fontSize: systemtheme.fontSizes[8]
        }
      }
    })}
`;

export const H3 = styled.h3`
  ${typography}
  ${color}
  ${variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: systemtheme.fontWeights[0]
      },
      bold: {
        fontWeight: systemtheme.fontWeights[2]
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

export const H4 = styled.h4`
  ${typography}
  ${color}
  ${variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: systemtheme.fontWeights[0]
      },
      bold: {
        fontWeight: systemtheme.fontWeights[2]
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
export const H5 = styled.h5`
  ${typography}
  ${color}
  ${variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: systemtheme.fontWeights[0]
      },
      bold: {
        fontWeight: systemtheme.fontWeights[2]
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

export const H6 = styled.h6`
  ${typography}
  ${color}
  ${variant({
    prop: "weight",
    variants: {
      light: {
        fontWeight: systemtheme.fontWeights[0]
      },
      bold: {
        fontWeight: systemtheme.fontWeights[2]
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

export const P = styled.p`
${typography}
${color}
${space}
${variant({
  prop: "weight",
  variants: {
    light: {
      fontWeight: systemtheme.fontWeights[1]
    },
    bold: {
      fontWeight: systemtheme.fontWeights[2]
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
  line-height: ${systemtheme.lineHeights[1]};
`;

export const Text = styled.span`
  ${typography}
  ${color}
`;

export const Strong = styled.span`
  ${typography}
  font-weight: ${systemtheme.fontWeights[2]};
`;

export const Quote = styled.blockquote`
  ${typography}
  display: block;
  font-size: ${systemtheme.fontSizes[4]}px;
  line-height: ${systemtheme.lineHeights[1]};
  border-left: solid ${systemtheme.space[2]}px ${systemtheme.colors.greyDark};
  padding: ${systemtheme.space[3]}px ${systemtheme.space[4]}px;
  em {
    display: block;
    font-style: italic;
    font-size: ${systemtheme.fontSizes[3]}px;
    color: ${systemtheme.colors.grey};
  }
`;

export const Code = styled.code`
${typography}
  line-height: ${systemtheme.lineHeights[1]};
  background: ${rgba(systemtheme.colors.warningLightest, 0.4)};
  padding: ${systemtheme.space[3]}px;
`;

export default { H1, H2, H3, H4, H5, H6, P, Text, Strong, Quote, Code };

P.defaultProps = {
  fontSize: systemtheme.fontSizes[2],
  fontWeight: systemtheme.fontWeights[1]
};

Text.defaultProps = {
  fontWeight: systemtheme.fontWeights[1],
  lineHeight: systemtheme.lineHeights[1]
};
