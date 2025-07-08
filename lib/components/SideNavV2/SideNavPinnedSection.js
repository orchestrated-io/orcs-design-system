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
    text-decoration: none;
    color: #222;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const ItemName = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const SideNavPinnedSection = ({ items, isExpanded }) => (
  <SectionWrapper isExpanded={isExpanded}>
    {isExpanded && (
      <P color="grey" fontSize="0.85rem" mb="xs">
        Pinned Items
      </P>
    )}
    <ItemList isExpanded={isExpanded}>
      {items.map(({ avatar, name, link, shape }) => (
        <Item key={name}>
          <Link to={link} aria-label={name}>
            <Avatar
              image={avatar}
              sizing="small"
              customSize="30px"
              shape={shape}
            />
            {isExpanded && <ItemName>{name}</ItemName>}
          </Link>
        </Item>
      ))}
    </ItemList>
  </SectionWrapper>
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
