import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, typography } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import StyledLink from "../StyledLink";
import Icon from "../Icon";
import Popover from "../Popover";

const BreadcrumbsWrapper = styled("nav").attrs({ "aria-label": "breadcrumb" })`
  ${space} ${layout}
`;

const List = styled("ol").withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop)
})`
  display: flex;
  flex-direction: ${({ iconTooltip }) => (iconTooltip ? "column" : "row")};
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  ${space}
`;

const Item = styled("li").withConfig({
  shouldForwardProp: (prop) => !["variant", "isLast"].includes(prop)
})`
  display: flex;
  align-items: center;
  color: ${({ variant, theme }) =>
    variant === "white"
      ? themeGet("colors.white")({ theme })
      : themeGet("colors.greyDarker")({ theme })};
  font-size: ${themeGet("fontSizes.0")};
  line-height: 1.5;
  font-weight: ${({ isLast }) =>
    isLast ? themeGet("fontWeights.2") : "normal"};
  & > a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ${typography}
`;

const Separator = styled("span")`
  margin: 0 0.5em;
  color: inherit;
`;

const Breadcrumbs = ({
  config,
  variant = "default",
  iconTooltip,
  ...props
}) => {
  if (iconTooltip) {
    return (
      <Popover
        text={
          <List variant={variant} iconTooltip={iconTooltip}>
            {config.map((item, idx) => {
              const isLast = idx === config.length - 1;
              return (
                <Item
                  key={item.to || item.label || idx}
                  variant={variant}
                  isLast={isLast}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isLast ? (
                    <span>{item.label}</span>
                  ) : (
                    <StyledLink
                      fontSize="0"
                      to={item.to}
                      white={variant === "white"}
                    >
                      {item.label}
                    </StyledLink>
                  )}
                  {!isLast && <Separator>/</Separator>}
                </Item>
              );
            })}
          </List>
        }
        width="fit-content"
        direction="top"
        inlineBlock
      >
        <Icon icon={["fas", "layer-group"]} title="Show breadcrumbs" />
      </Popover>
    );
  }
  return (
    <BreadcrumbsWrapper {...props}>
      <List variant={variant}>
        {config.map((item, idx) => {
          const isLast = idx === config.length - 1;
          return (
            <Item
              key={item.to || item.label || idx}
              variant={variant}
              isLast={isLast}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <StyledLink
                  fontSize="0"
                  to={item.to}
                  white={variant === "white"}
                >
                  {item.label}
                </StyledLink>
              )}
              {!isLast && <Separator>/</Separator>}
            </Item>
          );
        })}
      </List>
    </BreadcrumbsWrapper>
  );
};

Breadcrumbs.propTypes = {
  /** Array of breadcrumb items: { label, to } */
  config: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      to: PropTypes.string
    })
  ).isRequired,
  /** Variant for text color: 'default' (grey) or 'white' */
  variant: PropTypes.oneOf(["default", "white"]),
  /** If true, renders the icon popover variant */
  iconTooltip: PropTypes.bool
};

export default Breadcrumbs;
