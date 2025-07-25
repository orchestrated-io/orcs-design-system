import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H6 } from "../../Typography";
import Avatar from "../../Avatar";
import { Link } from "react-router-dom";
import Flex from "../../Flex";
import themeGet from "@styled-system/theme-get";
import Divider from "../../Divider";
import { AnimatedContent } from "../styles/SideNavV2.styles";

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: ${(props) => (props.isExpanded ? "flex-start" : "center")};
  text-align: ${(props) => (props.isExpanded ? "left" : "center")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => themeGet("space.s")(props)};
`;

const ItemName = styled.span`
  margin-left: 8px;
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
`;

export const Item = styled.li`
  display: flex;
  width: 100%;
  gap: ${(props) => themeGet("space.xs")(props)};
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    font-size: ${(props) => themeGet("fontSizes.1")(props)};
    text-decoration: none;
    color: ${(props) => themeGet("colors.greyDarkest")(props)};
    &:hover,
    &:focus {
      outline: none;
      color: ${(props) => themeGet("colors.primary")(props)};
    }
  }
`;

export const AvatarLink = ({
  avatar,
  name,
  link,
  shape = "square",
  showName
}) => (
  <Link to={link} aria-label={name}>
    <Avatar image={avatar} customSize="24px" shape={shape} />
    <AnimatedContent isExpanded={showName}>
      <ItemName>{name}</ItemName>
    </AnimatedContent>
  </Link>
);

AvatarLink.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  shape: PropTypes.string,
  showName: PropTypes.bool
};

const BaseSection = ({
  title,
  items,
  isExpanded,
  renderItem,
  display = ["none", "none", "none", "flex"]
}) => (
  <Flex
    flexDirection="column"
    width="100%"
    alignItems={isExpanded ? "flex-start" : "center"}
  >
    <Divider light display={["none", "none", "none", "block"]} my="s" />
    <Flex
      isExpanded={isExpanded}
      flexDirection="column"
      my={isExpanded ? "s" : "0"}
      display={display}
    >
      <AnimatedContent isExpanded={isExpanded} mb={isExpanded ? "s" : "0"}>
        <H6 sizing="small" color="greyDark">
          {title}
        </H6>
      </AnimatedContent>
      <ItemList isExpanded={isExpanded}>
        {items.map((item) => renderItem(item, isExpanded))}
      </ItemList>
    </Flex>
  </Flex>
);

BaseSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isExpanded: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  display: PropTypes.array
};

export default BaseSection;
