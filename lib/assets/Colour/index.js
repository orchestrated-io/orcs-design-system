import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { css } from "styled-components";

export const Colour = styled("div").withConfig({ shouldForwardProp })(
  (props) => {
    return css({
      backgroundColor: themeGet(`colors.${props.bg}`)(props),
      width: "75px",
      height: "75px"
    });
  }
);

/** @component */
export default Colour;
