import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import ColorPickerLib from "react-best-gradient-color-picker";

const ColorPicker = ({
  value,
  onChange,
  children,
  position = "bottom-start",
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
  const colorPickerRef = useRef(null);
  const triggerRef = useRef(null);

  // Handle clicks outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
    return undefined;
  }, [isOpen]);

  const toggleColorPicker = () => setIsOpen(!isOpen);

  // Calculate position based on position prop
  const getPositionStyles = () => {
    const baseStyles = {
      position: "absolute",
      zIndex,
      bg,
      p,
      borderRadius
    };

    switch (position) {
      case "top-start":
        return { ...baseStyles, bottom: "100%", right: "0", mb: "s" };
      case "top-end":
        return { ...baseStyles, bottom: "100%", left: "0", mb: "s" };
      case "bottom-start":
        return { ...baseStyles, top: "100%", right: "0", mt: "s" };
      case "bottom-end":
        return { ...baseStyles, top: "100%", left: "0", mt: "s" };
      case "left-start":
        return { ...baseStyles, right: "100%", top: "0", mr: "s" };
      case "left-end":
        return { ...baseStyles, right: "100%", bottom: "0", mr: "s" };
      case "right-start":
        return { ...baseStyles, left: "100%", top: "0", ml: "s" };
      case "right-end":
        return { ...baseStyles, left: "100%", bottom: "0", ml: "s" };
      default:
        return { ...baseStyles, top: "100%", right: "0", mt: "s" };
    }
  };

  return (
    <Box position="relative">
      {/* Trigger element - children is a function that receives toggle function */}
      <Box ref={triggerRef}>
        {typeof children === "function"
          ? children({ isOpen, toggleColorPicker })
          : children}
      </Box>

      {/* Color picker popup */}
      {isOpen && (
        <Box ref={colorPickerRef} {...getPositionStyles()}>
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
