import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import orchestratedColours from "../colours";
import "../baseStyles";

library.add(fal, far, fas);

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={orchestratedColours}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
