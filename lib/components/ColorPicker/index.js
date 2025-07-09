import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import ColorPickerLib from "react-best-gradient-color-picker";
import { FloatingPortal } from "@floating-ui/react";
import { getFloatingUiRootElement } from "../../utils/floatingUiHelpers";
import useActionMenu from "../ActionsMenu/useActionMenu";

const ColorPicker = ({
  value,
  onChange,
  children,
  position = "bottom-end",
  zIndex = 20,
  bg = "#202020",
  p = "s",
  borderRadius = "2",
  // Set defaults for commonly used library props
  width = 250,
  height = 250,
  hidePresets = true,
  hideInputs = false,
  hideControls = false,
  hideOpacity = true,
  hideEyeDrop = true,
  hideAdvancedSliders = true,
  hideColorGuide = true,
  hideInputType = true,
  hideColorTypeBtns = false,
  hideGradientType = false,
  hideGradientAngle = false,
  hideGradientStop = false,
  hideGradientControls = false,
  // Spread all other props to the underlying library
  ...colorPickerProps
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleColorPicker = () => setIsOpen(!isOpen);

  const baseStyles = useMemo(
    () => ({
      zIndex,
      bg,
      p,
      borderRadius
    }),
    [zIndex, bg, p, borderRadius]
  );

  const actionMenu = useActionMenu({
    placement: position,
    open: isOpen,
    onOpenChange: setIsOpen
  });

  return (
    <Box ref={actionMenu.refs.setReference} {...actionMenu.getReferenceProps()}>
      {/* Trigger element - children is a function that receives toggle function */}
      {typeof children === "function"
        ? children({ isOpen, toggleColorPicker })
        : children}

      {/* Color picker popup */}
      {isOpen && (
        <FloatingPortal
          root={getFloatingUiRootElement(actionMenu.refs.reference)}
          preserveTabOrder={true}
        >
          <Box
            ref={actionMenu.refs.setFloating}
            style={actionMenu.floatingStyles}
            {...baseStyles}
            {...actionMenu.getFloatingProps()}
          >
            <ColorPickerLib
              value={value}
              onChange={onChange}
              width={width}
              height={height}
              hidePresets={hidePresets}
              hideInputs={hideInputs}
              hideControls={hideControls}
              hideOpacity={hideOpacity}
              hideEyeDrop={hideEyeDrop}
              hideAdvancedSliders={hideAdvancedSliders}
              hideColorGuide={hideColorGuide}
              hideInputType={hideInputType}
              hideColorTypeBtns={hideColorTypeBtns}
              hideGradientType={hideGradientType}
              hideGradientAngle={hideGradientAngle}
              hideGradientStop={hideGradientStop}
              hideGradientControls={hideGradientControls}
              {...colorPickerProps}
            />
          </Box>
        </FloatingPortal>
      )}
    </Box>
  );
};

ColorPicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  position: PropTypes.oneOf([
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-start",
    "left-end",
    "right-start",
    "right-end"
  ]),
  zIndex: PropTypes.number,
  bg: PropTypes.string,
  p: PropTypes.string,
  borderRadius: PropTypes.string,
  // Default props for the underlying library
  width: PropTypes.number,
  height: PropTypes.number,
  hidePresets: PropTypes.bool,
  hideInputs: PropTypes.bool,
  hideControls: PropTypes.bool,
  hideOpacity: PropTypes.bool,
  hideEyeDrop: PropTypes.bool,
  hideAdvancedSliders: PropTypes.bool,
  hideColorGuide: PropTypes.bool,
  hideInputType: PropTypes.bool,
  hideColorTypeBtns: PropTypes.bool,
  hideGradientType: PropTypes.bool,
  hideGradientAngle: PropTypes.bool,
  hideGradientStop: PropTypes.bool,
  hideGradientControls: PropTypes.bool
  // Note: We don't need to define PropTypes for the spread props
  // as they'll be passed directly to the underlying library
};

export default ColorPicker;
