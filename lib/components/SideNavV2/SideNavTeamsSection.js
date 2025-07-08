import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { P } from "../Typography";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";

const SectionWrapper = styled.div`
  margin-bottom: 1.5rem;
  align-items: ${(props) => (props.isExpanded ? "flex-start" : "center")};
  text-align: ${(props) => (props.isExpanded ? "left" : "center")};
  display: flex;
  flex-direction: column;
`;
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
  font-size: 1rem;
`;

const SideNavTeamsSection = ({ teams, isExpanded }) => (
  <SectionWrapper isExpanded={isExpanded}>
    {isExpanded && (
      <P color="grey" fontSize="0.85rem" mb="xs">
        Your Teams
      </P>
    )}
    <TeamList isExpanded={isExpanded}>
      {teams.map(({ avatar, name, link }) => (
        <TeamItem key={name}>
          <Link to={link} aria-label={name}>
            <Avatar
              image={avatar}
              sizing="small"
              customSize="30px"
              shape="square"
            />
            {isExpanded && <TeamName>{name}</TeamName>}
          </Link>
        </TeamItem>
      ))}
    </TeamList>
  </SectionWrapper>
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
