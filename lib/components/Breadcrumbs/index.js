import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, typography } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import StyledLink from "../StyledLink";
import Popover from "../Popover";

const BreadcrumbsWrapper = styled("nav").attrs({ "aria-label": "breadcrumb" })`
  ${space} ${layout}
`;

const List = styled("ol").withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop)
})`
  display: flex;
  flex-direction: ${({ showAsIconTooltip }) =>
    showAsIconTooltip ? "column" : "row"};
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5px;
  text-shadow: ${({ variant }) =>
    variant === "white" ? "0 0px 5px rgba(0,0,0,0.2)" : "none"};
  ${space}
`;

const Item = styled("li").withConfig({
  shouldForwardProp: (prop) => !["variant", "isLast"].includes(prop)
})`
  display: flex;
  gap: 5px;
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

const Breadcrumbs = ({
  config,
  variant = "default",
  showAsIconTooltip,
  ...props
}) => {
  if (showAsIconTooltip) {
    return (
      <Popover
        text={
          <List variant={variant} showAsIconTooltip={showAsIconTooltip}>
            {config.map((item, idx) => {
              const isLast = idx === config.length - 1;
              return (
                <Item
                  key={item.id || item.to || idx}
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
                  {!isLast && <span>/</span>}
                </Item>
              );
            })}
          </List>
        }
        width="fit-content"
        direction="top"
        inlineBlock
      >
        {showAsIconTooltip}
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
              key={item.id || item.to || idx}
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
              {!isLast && <span>/</span>}
            </Item>
          );
        })}
      </List>
    </BreadcrumbsWrapper>
  );
};

Breadcrumbs.propTypes = {
  /** Array of breadcrumb items: { label, to, id } */
  config: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      to: PropTypes.string,
      id: PropTypes.string
    })
  ).isRequired,
  /** Variant for text color: 'default' (grey) or 'white' */
  variant: PropTypes.oneOf(["default", "white"]),
  /** If provided, renders the popover-with-icon variant using this icon */
  showAsIconTooltip: PropTypes.node
};

export default Breadcrumbs;
