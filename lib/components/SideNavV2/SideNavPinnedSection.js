import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H6 } from "../Typography";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import Popover from "../Popover";
import themeGet from "@styled-system/theme-get";

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: ${(props) => (props.isExpanded ? "flex-start" : "center")};
  text-align: ${(props) => (props.isExpanded ? "left" : "center")};
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
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
const ItemName = styled.span`
  margin-left: 0.5rem;
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
`;

const PinnedItemAvatarLink = ({ avatar, name, link, shape, showName }) => (
  <Link to={link} aria-label={name}>
    <Avatar image={avatar} customSize="30px" shape={shape} />
    {showName && <ItemName>{name}</ItemName>}
  </Link>
);

PinnedItemAvatarLink.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  shape: PropTypes.string,
  showName: PropTypes.bool
};

const SideNavPinnedSection = ({ items, isExpanded }) => (
  <Flex isExpanded={isExpanded} flexDirection="column" gap="r" mt="s">
    {isExpanded && (
      <H6 sizing="small" color="greyDark">
        Pinned
      </H6>
    )}
    <ItemList isExpanded={isExpanded}>
      {items.map(({ avatar, name, link, shape }) => (
        <Item key={name}>
          {isExpanded ? (
            <PinnedItemAvatarLink
              avatar={avatar}
              name={name}
              link={link}
              shape={shape}
              showName={true}
            />
          ) : (
            <Popover text={name} direction="right" width="fit-content">
              <PinnedItemAvatarLink
                avatar={avatar}
                name={name}
                link={link}
                shape={shape}
                showName={false}
              />
            </Popover>
          )}
        </Item>
      ))}
    </ItemList>
  </Flex>
);

SideNavPinnedSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      shape: PropTypes.string
    })
  ),
  isExpanded: PropTypes.bool
};

export default SideNavPinnedSection;
