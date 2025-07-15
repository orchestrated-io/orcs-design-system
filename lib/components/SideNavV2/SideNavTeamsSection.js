import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H6 } from "../Typography";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import Popover from "../Popover";
import themeGet from "@styled-system/theme-get";

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: ${(props) => (props.isExpanded ? "flex-start" : "center")};
  text-align: ${(props) => (props.isExpanded ? "left" : "center")};
  display: flex;
  flex-direction: column;
`;
const TeamItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  a {
    display: flex;
    font-size: ${(props) => themeGet("fontSizes.1")(props)};
    align-items: center;
    text-decoration: none;
    color: ${(props) => themeGet("colors.greyDarkest")(props)};
    &:hover,
    &:focus {
      outline: none;
      color: ${(props) => themeGet("colors.primary")(props)};
    }
    }
  }
`;
const TeamName = styled.span`
  margin-left: 0.5rem;
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
`;

const TeamAvatarLink = ({ avatar, name, link, showName }) => (
  <Link to={link} aria-label={name}>
    <Avatar image={avatar} customSize="30px" shape="square" />
    {showName && <TeamName>{name}</TeamName>}
  </Link>
);

TeamAvatarLink.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  showName: PropTypes.bool
};

const SideNavTeamsSection = ({ teams, isExpanded }) => (
  <Flex isExpanded={isExpanded} flexDirection="column" gap="r" mt="s">
    {isExpanded && (
      <H6 sizing="small" color="greyDark">
        Your Teams
      </H6>
    )}
    <TeamList isExpanded={isExpanded}>
      {teams.map(({ avatar, name, link }) => (
        <TeamItem key={name}>
          {isExpanded ? (
            <TeamAvatarLink
              avatar={avatar}
              name={name}
              link={link}
              showName={true}
            />
          ) : (
            <Popover text={name} direction="right" width="fit-content">
              <TeamAvatarLink
                avatar={avatar}
                name={name}
                link={link}
                showName={false}
              />
            </Popover>
          )}
        </TeamItem>
      ))}
    </TeamList>
  </Flex>
);

SideNavTeamsSection.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  isExpanded: PropTypes.bool
};

export default SideNavTeamsSection;
