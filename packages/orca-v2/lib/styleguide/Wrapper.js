import React, { Component, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import colours from "../colours";
import GlobalStyles from "../globalStyles";

library.add(far, fas);

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={colours}>
        <Fragment>
          <GlobalStyles/>
          {this.props.children}
        </Fragment>
      </ThemeProvider>
    );
  }
}
