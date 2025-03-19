import React from "react";
import Header from ".";
import TextInput from "../TextInput";
import Box from "../Box";
import Flex from "../Flex";
import { Small } from "../Typography";
import Toggle from "../Toggle";
import Divider from "../Divider";
import Icon from "../Icon";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (storyFn) => (
      <Box height="350px" bg="white" p="r">
        {storyFn()}
      </Box>
    )
  ]
};

const dummyLogo = (
  <svg
    width="67"
    height="68"
    viewBox="0 0 67 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.5 67.0667C52.0015 67.0667 67 52.0682 67 33.5667C67 15.0651 52.0015 0.0666504 33.5 0.0666504C14.9985 0.0666504 0 15.0651 0 33.5667C0 52.0682 14.9985 67.0667 33.5 67.0667ZM19.2617 16.8147C20.9764 16.8147 22.4908 17.6724 23.3992 18.9822L43.0847 12.3152C43.048 12.1345 43.0287 11.9474 43.0287 11.7558C43.0287 10.212 44.2803 8.96051 45.8241 8.96051C47.3679 8.96051 48.6194 10.212 48.6194 11.7558C48.6194 13.2997 47.3679 14.5512 45.8241 14.5512C45.5255 14.5512 45.2379 14.5044 44.9682 14.4177L36.6741 27.4513C37.1798 27.9571 37.4927 28.6559 37.4927 29.4277C37.4927 30.5866 36.7874 31.5808 35.7826 32.0045L40.7391 55.4351C42.2126 55.5136 43.3833 56.7333 43.3833 58.2264C43.3833 59.7702 42.1318 61.0217 40.588 61.0217C39.0441 61.0217 37.7926 59.7702 37.7926 58.2264C37.7926 57.4346 38.1219 56.7197 38.6509 56.2111L20.8146 26.6337C20.3255 26.7922 19.8036 26.8779 19.2617 26.8779C16.4828 26.8779 14.2301 24.6251 14.2301 21.8463C14.2301 19.0674 16.4828 16.8147 19.2617 16.8147ZM39.7436 55.5609C39.6553 55.5888 39.5689 55.621 39.4847 55.6572L21.7375 26.2276C22.462 25.8173 23.0747 25.2325 23.5184 24.5303L31.9647 28.8363C31.9236 29.0269 31.902 29.2248 31.902 29.4277C31.902 30.9715 33.1535 32.223 34.6973 32.223C34.7338 32.223 34.7701 32.2223 34.8063 32.221L39.7436 55.5609ZM44.0843 13.9439L35.8516 26.8811C35.4997 26.7213 35.1089 26.6324 34.6973 26.6324C33.713 26.6324 32.8476 27.1411 32.3495 27.91L23.9657 23.6359C24.1774 23.0799 24.2933 22.4766 24.2933 21.8463C24.2933 21.1453 24.1499 20.4778 23.891 19.8715L43.4578 13.2447C43.6261 13.5116 43.8383 13.7481 44.0843 13.9439Z"
      fill="black"
    />
  </svg>
);

const UserMenuContent = () => {
  const [checked, setChecked] = React.useState(false);

  const handleToggleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Small fontWeight="600" fontSize="0">
        Compact theme
      </Small>
      <Toggle
        id="compactTheme"
        label={checked ? "On" : "Off"}
        small
        onChange={handleToggleChange}
      />
      <Divider light />
      <Flex alignItems="center" gap="s">
        <Icon icon={["fas", "sign-out-alt"]} />
        <Small fontWeight="600">Logout</Small>
      </Flex>
    </>
  );
};

export const defaultHeader = () => (
  <Header
    appName="Powercorp directory"
    logo={dummyLogo}
    showLogoSeparator
    userName="Michael Jenkins (michael.jenkins@powercorp.com)"
    avatarSource="https://api.dicebear.com/7.x/personas/svg?seed=mike"
    avatarAlt="Avatar for Michael"
    avatarInitials="MJ"
    currentWorkspace="Org Design Workspace"
    searchComponent={
      <TextInput
        fullWidth
        id="search"
        height="100%"
        key="search"
        type="text"
        placeholder="Search for..."
        iconRight={["fas", "search"]}
      />
    }
    userMenuContent={<UserMenuContent />}
  />
);
defaultHeader.storyName = "Default Header";
