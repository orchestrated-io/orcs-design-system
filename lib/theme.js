import createTheme from "styled-components-theme";
import orchestratedColours from "./colours";

const theme = createTheme(...Object.keys(orchestratedColours));
export default theme;
