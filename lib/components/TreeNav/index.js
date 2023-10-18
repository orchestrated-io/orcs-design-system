import React from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import PropTypes from "prop-types";
import { themeGet } from "@styled-system/theme-get";
import Icon from "../Icon";
import Flex from "../Flex";
import Badge from "../Badge";
import Checkbox from "../Checkbox";
import { Small } from "../Typography";

import { Tree } from "react-arborist";

const TreeItemWrapper = styled("div")((props) =>
  css({
    padding: "5px",
    marginRight: "5px",
    cursor: "pointer",
    borderRadius: themeGet("radii.2")(props),
    transition: themeGet("transition.transitionDefault")(props),
    "&:hover, &:focus": {
      backgroundColor: themeGet("colors.primary10")(props)
    }
  })
);

const Node = ({ node, style, dragHandle }) => {
  /* This node instance can do many things. See the API reference. */
  return (
    <TreeItemWrapper
      style={style}
      className="treeitem-wrapper"
      ref={dragHandle}
      onClick={() => node.toggle()}
    >
      <Flex alignItems="center">
        {node.isLeaf ? (
          <Icon
            icon={["fas", "chevron-down"]}
            title="Select item"
            mr="xs"
            ml="s"
            size="sm"
            rotation={270}
            color="transparent"
          />
        ) : node.isOpen ? (
          <Icon
            icon={["fas", "chevron-down"]}
            title="Collapse item"
            transform="up-1"
            mr="xs"
            ml="s"
            size="sm"
          />
        ) : (
          <Icon
            icon={["fas", "chevron-down"]}
            title="Expand item"
            transform="up-1"
            mr="xs"
            ml="s"
            size="sm"
            rotation={270}
          />
        )}
        {node.data.checkbox && (
          <Checkbox onChange={node.data.checkboxOnChange} />
        )}
        <Small>{node.data.name}</Small>
        {node.data.badgeText && (
          <Badge variant={node.data.badgeColour} ml="auto">
            {node.data.badgeText}
          </Badge>
        )}
      </Flex>
    </TreeItemWrapper>
  );
};

Node.propTypes = {
  isLeaf: PropTypes.bool,
  data: PropTypes.array
};

const TreeNav = ({ data, ...props }) => {
  return (
    <Tree
      initialData={data}
      {...props}
      overscanCount={5}
      rowHeight={32}
      indent={14}
    >
      {Node}
    </Tree>
  );
};

TreeNav.propTypes = {
  data: PropTypes.array
};

/** @component */
export default TreeNav;
