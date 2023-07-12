import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { css } from "@styled-system/css";
import { space, color, typography, compose } from "styled-system";

/**
 * Using 3rd party icons from Font Awesome.
 *
 * For full list of icons see here: <https://fontawesome.com/icons?d=listing>.
 *
 * Some examples of icons with props for size, colour or animation below. For full usage guidelines view the readme at https://github.com/FortAwesome/react-fontawesome#usage
 *
 * Note: There are two different icon set weightings available in the Font Awesome free icons sets. Regular and solid. To use we need to specify which set to use by prefixing icon with either "far" or "fas" as shown in example code below.
 *
 * To get started you can import the icons into Font Awesome library. Alternatively if you want to use their full icon set you need to purchase a PRO plan from Font awesome, and can install the full pro icon packages in your app. See the readme here for more details on how to use and install PRO: <https://github.com/orchestrated-io/orca-design-system>
 */

const IconStyles = compose(space, color, typography);

const IconWrapper = styled("span")(
  css({ lineHeight: "0", display: "inline-block" }),
  IconStyles
);

export default function Icon({
  border,
  mask,
  fixedWidth,
  inverse,
  flip,
  icon,
  listitem,
  pull,
  pulse,
  rotation,
  size,
  spin,
  symbol,
  transform,
  color,
  theme,
  title,
  ...props
}) {
  const component = (
    <IconWrapper color={color} {...props}>
      <FontAwesomeIcon
        border={border}
        mask={mask}
        fixedWidth={fixedWidth}
        inverse={inverse}
        flip={flip}
        listitem={listitem}
        pull={pull}
        rotation={rotation}
        icon={icon}
        pulse={pulse}
        size={size}
        spin={spin}
        symbol={symbol}
        transform={transform}
        title={title}
      />
    </IconWrapper>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Icon.propTypes = {
  /** Colours the icon using colours from the system colour palette */
  color: PropTypes.string,
  /** Set a border around the icon */
  border: PropTypes.bool,
  /** Set an icon as a clipping mask around another icon */
  mask: PropTypes.string,
  /** Set icon to display as fixed width */
  fixedWidth: PropTypes.bool,
  /** Invert the icon for use on dark backgrounds */
  inverse: PropTypes.bool,
  /** Flip horizontally, vertically, or both */
  flip: PropTypes.oneOf(["horizontal", "vertical", "both"]),
  /** Set the Font Awesome style/weight, and icon */
  icon: PropTypes.array,
  /** Set icon to render in the style of a list bullet */
  listitem: PropTypes.bool,
  /** Pull an icon to float to the left or right of the element's other contents */
  pull: PropTypes.oneOf(["left", "right"]),
  /** Set a slow pulse animation on the icon */
  pulse: PropTypes.bool,
  /** Rotate the icon by the specified degree */
  rotation: PropTypes.oneOf(["90", "180", "270"]),
  /** Set the icon size based on FontAwesome usage for size */
  size: PropTypes.string,
  /** Set an 8-frame spinning animation on the icon */
  spin: PropTypes.bool,
  /** Set an icon as a symbol to use with the SVG Sprites technique */
  symbol: PropTypes.any,
  /** Power transforms to scale and position the icon */
  transform: PropTypes.any,
  /** Specifies the system design theme. */
  theme: PropTypes.object,
  /** Set an accessabilty title for screen readers. */
  title: PropTypes.string
};
