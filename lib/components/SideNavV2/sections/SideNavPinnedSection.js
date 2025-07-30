import React from "react";
import PropTypes from "prop-types";
import Popover from "../../Popover";
import Icon from "../../Icon";
import Button from "../../Button";
import BaseSection, { AvatarLink, Item } from "../components/BaseSection";

const SideNavPinnedSection = ({ items, isExpanded }) => {
  const renderPinnedItem = (item, isExpanded) => {
    const { avatar, name, link, shape, onUnpin } = item;

    return (
      <Item key={name}>
        {isExpanded ? (
          <>
            <AvatarLink
              avatar={avatar}
              name={name}
              link={link}
              shape={shape}
              showName={true}
            />
            <Popover
              text="Unpin item"
              direction="right"
              width="fit-content"
              tabIndex="-1"
            >
              <Button
                height="20px"
                width="20px"
                borderRadius="20px"
                variant="borderGrey"
                borderColor="white"
                onClick={() => onUnpin?.(item)}
              >
                <Icon
                  icon={["fas", "thumbtack"]}
                  color="greyDarkest"
                  size="sm"
                />
              </Button>
            </Popover>
          </>
        ) : (
          <Popover text={name} direction="right" width="fit-content">
            <AvatarLink
              avatar={avatar}
              name={name}
              link={link}
              shape={shape}
              showName={false}
            />
          </Popover>
        )}
      </Item>
    );
  };

  return (
    <BaseSection
      title="Pinned"
      items={items}
      isExpanded={isExpanded}
      renderItem={renderPinnedItem}
    />
  );
};

SideNavPinnedSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      shape: PropTypes.string,
      onUnpin: PropTypes.func
    })
  ),
  isExpanded: PropTypes.bool
};

export default SideNavPinnedSection;
