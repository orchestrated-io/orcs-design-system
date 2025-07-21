import React from "react";
import PropTypes from "prop-types";
import Popover from "../../Popover";
import BaseSection, { AvatarLink, Item } from "../components/BaseSection";

const SideNavTeamsSection = ({ teams, isExpanded }) => {
  const renderTeamItem = (team, isExpanded) => {
    const { avatar, name, link } = team;

    return (
      <Item key={name}>
        {isExpanded ? (
          <AvatarLink
            avatar={avatar}
            name={name}
            link={link}
            shape="square"
            showName={true}
          />
        ) : (
          <Popover text={name} direction="right" width="fit-content">
            <AvatarLink
              avatar={avatar}
              name={name}
              link={link}
              shape="square"
              showName={false}
            />
          </Popover>
        )}
      </Item>
    );
  };

  return (
    <BaseSection
      title="Your Teams"
      items={teams}
      isExpanded={isExpanded}
      renderItem={renderTeamItem}
    />
  );
};

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
