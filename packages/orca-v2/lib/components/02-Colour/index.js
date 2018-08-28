import styled from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Colour = styled.div`
  width: 100px;
  height: 100px;

  background: ${props =>
    props.black
      ? theme.black
      : props.greyDarkest
        ? theme.greyDarkest
        : props.greyDarker
          ? theme.greyDarker
          : props.greyDark
            ? theme.greyDark
            : props.grey
              ? theme.grey
              : props.greyLight
                ? theme.greyLight
                : props.greyLighter
                  ? theme.greyLighter
                  : props.greyLightest
                    ? theme.greyLightest
                    : props.white
                      ? theme.white
                      : props.primaryDarkest
                        ? theme.primaryDarkest
                        : props.primaryDarker
                          ? theme.primaryDarker
                          : props.primaryDark
                            ? theme.primaryDark
                            : props.primary
                              ? theme.primary
                              : props.primaryLight
                                ? theme.primaryLight
                                : props.primaryLighter
                                  ? theme.primaryLighter
                                  : props.primaryLightest
                                    ? theme.primaryLightest
                                    : props.successDarkest
                                      ? theme.successDarkest
                                      : props.successDarker
                                        ? theme.successDarker
                                        : props.successDark
                                          ? theme.successDark
                                          : props.success
                                            ? theme.success
                                            : props.successLight
                                              ? theme.successLight
                                              : props.successLighter
                                                ? theme.successLighter
                                                : props.successLightest
                                                  ? theme.successLightest
                                                  : props.warningDarkest
                                                    ? theme.warningDarkest
                                                    : props.warningDarker
                                                      ? theme.warningDarker
                                                      : props.warningDark
                                                        ? theme.warningDark
                                                        : props.warning
                                                          ? theme.warning
                                                          : props.warningLight
                                                            ? theme.warningLight
                                                            : props.warningLighter
                                                              ? theme.warningLighter
                                                              : props.warningLightest
                                                                ? theme.warningLightest
                                                                : props.dangerDarkest
                                                                  ? theme.dangerDarkest
                                                                  : props.dangerDarker
                                                                    ? theme.dangerDarker
                                                                    : props.dangerDark
                                                                      ? theme.dangerDark
                                                                      : props.danger
                                                                        ? theme.danger
                                                                        : props.dangerLight
                                                                          ? theme.dangerLight
                                                                          : props.dangerLighter
                                                                            ? theme.dangerLighter
                                                                            : props.dangerLightest
                                                                              ? theme.dangerLightest
                                                                              : "transparent;"};
`;

/** @component */
export default Colour;
