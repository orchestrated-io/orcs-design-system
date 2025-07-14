import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H6 } from "../Typography";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import Flex from "../Flex";
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
    color: #222;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const TeamName = styled.span`
  margin-left: 0.5rem;
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
`;

const SideNavTeamsSection = ({ teams, isExpanded }) => (
  <Flex isExpanded={isExpanded} flexDirection="column" gap="r" mt="r">
    {isExpanded && <H6 color="greyDark">Your Teams</H6>}
    <TeamList isExpanded={isExpanded}>
      {teams.map(({ avatar, name, link }) => (
        <TeamItem key={name}>
          <Link to={link} aria-label={name}>
            <Avatar image={avatar} customSize="30px" shape="square" />
            {isExpanded && <TeamName>{name}</TeamName>}
          </Link>
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
