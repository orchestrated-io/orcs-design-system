import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// Import CSS reset and Global Styles - removed for now do we need to re include/import these once we have upgraded all PM to orcs?

//AW mod
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);
//AW mod end


export { default as systemtheme } from "./systemtheme";
export { default as GlobalStyles } from "./GlobalStyles";
export { default as SystemThemeProvider } from "./SystemThemeProvider";
export {
  default as ActionsMenu,
  ActionsMenuBody,
  ActionsMenuHeading,
  ActionsMenuItem
} from "./components/ActionsMenu";
export { default as Avatar } from "./components/Avatar";
export { default as Badge } from "./components/Badge";
export { default as Box } from "./components/Box";
export { default as Button } from "./components/Button";
export {
  ButtonGroupContainer,
  ButtonGroupItem
} from "./components/ButtonGroup";
export { default as Card } from "./components/Card";
export { default as Checkbox } from "./components/Checkbox";
export { default as DatePicker } from "./components/DatePicker";
export { default as Divider } from "./components/Divider";
export { default as Expandable } from "./components/Expandable";
export { default as Flex, FlexItem } from "./components/Flex";
export { default as Grid, GridItem } from "./components/Grid";
export { default as Header } from "./components/Header";
export { default as Icon } from "./components/Icon";
export { default as Layout } from "./components/Layout";
export { default as Loading } from "./components/Loading";
export { default as Modal } from "./components/Modal";
export { default as Notification } from "./components/Notification";
export { default as Popover } from "./components/Popover";
export { default as ProgressBar } from "./components/ProgressBar";
export { default as RadioButton } from "./components/RadioButton";
export { default as Range } from "./components/Range";
export { default as Select } from "./components/Select";
export {
  default as Sidebar,
  SidebarTabs,
  SidebarTab,
  SidebarPanels,
  SidebarPanel,
  SidebarClose
} from "./components/Sidebar";
export { default as Spacer } from "./components/Spacer";
export { default as StatusDot } from "./components/StatusDot";
export { default as StyledLink, styleLink } from "./components/StyledLink";
export { Tab, TabsContainer } from "./components/Tabs";
export { default as Tag } from "./components/Tag";
export { default as TextInput } from "./components/TextInput";
export { default as TextArea } from "./components/TextArea";
export { default as Toggle } from "./components/Toggle";
export { default as Tooltip } from "./components/Tooltip";
export {
  default as Typography,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Text,
  Small,
  Quote,
  Code
} from "./components/Typography";
export { default as getOptionByValue } from "./utils/selectUtil";
