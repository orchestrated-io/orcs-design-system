import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import useResize from "../hooks/useResize";
import {
  calculateDesktopWidth,
  calculateMobileHeight
} from "../utils/resizeUtils";

// Mock the resize utilities
jest.mock("../utils/resizeUtils", () => ({
  calculateDesktopWidth: jest.fn(),
  calculateMobileHeight: jest.fn(),
  applyResizeCursor: jest.fn(),
  removeResizeCursor: jest.fn()
}));

// Test component to use the hook
const TestComponent = ({
  expandedRef,
  isSmallScreen,
  expandedItem,
  onWidthChange
}) => {
  const resizeHandlers = useResize(
    expandedRef,
    isSmallScreen,
    expandedItem,
    onWidthChange
  );

  return (
    <div>
      <div
        data-testid="resize-handle"
        onMouseDown={resizeHandlers.handleResizeStart}
      />
      <div data-testid="resize-status">
        {resizeHandlers.isResizing ? "resizing" : "not-resizing"}
      </div>
    </div>
  );
};

describe("useResize hook", () => {
  let mockExpandedRef;
  let mockOnWidthChange;

  beforeEach(() => {
    mockExpandedRef = {
      current: {
        style: { height: "300px" },
        offsetHeight: 300,
        parentElement: {
          querySelector: jest.fn().mockReturnValue({
            getBoundingClientRect: () => ({ right: 200 })
          })
        }
      }
    };
    mockOnWidthChange = jest.fn();

    // Reset mocks
    jest.clearAllMocks();
  });

  it("should initialize with correct default state", () => {
    const { getByTestId } = render(
      <TestComponent
        expandedRef={mockExpandedRef}
        isSmallScreen={false}
        expandedItem={0}
        onWidthChange={mockOnWidthChange}
      />
    );

    expect(getByTestId("resize-status")).toHaveTextContent("not-resizing");
  });

  it("should handle resize start correctly", () => {
    const { getByTestId } = render(
      <TestComponent
        expandedRef={mockExpandedRef}
        isSmallScreen={false}
        expandedItem={0}
        onWidthChange={mockOnWidthChange}
      />
    );

    const resizeHandle = getByTestId("resize-handle");
    fireEvent.mouseDown(resizeHandle);

    expect(getByTestId("resize-status")).toHaveTextContent("resizing");
  });

  it("should call onWidthChange when resizing on desktop", () => {
    calculateDesktopWidth.mockReturnValue(400);

    const { getByTestId } = render(
      <TestComponent
        expandedRef={mockExpandedRef}
        isSmallScreen={false}
        expandedItem={0}
        onWidthChange={mockOnWidthChange}
      />
    );

    // Start resizing
    const resizeHandle = getByTestId("resize-handle");
    fireEvent.mouseDown(resizeHandle);

    // Simulate mouse move
    fireEvent.mouseMove(document, { clientX: 600 });

    expect(calculateDesktopWidth).toHaveBeenCalledWith(600, expect.any(Object));
    expect(mockOnWidthChange).toHaveBeenCalledWith(400);
  });

  it("should handle mobile resize correctly", () => {
    calculateMobileHeight.mockReturnValue(250);

    const { getByTestId } = render(
      <TestComponent
        expandedRef={mockExpandedRef}
        isSmallScreen={true}
        expandedItem={0}
        onWidthChange={mockOnWidthChange}
      />
    );

    // Start resizing
    const resizeHandle = getByTestId("resize-handle");
    fireEvent.mouseDown(resizeHandle, { clientY: 100 });

    // Simulate mouse move
    fireEvent.mouseMove(document, { clientY: 150 });

    expect(calculateMobileHeight).toHaveBeenCalledWith(150, 100, 300);
    expect(mockExpandedRef.current.style.height).toBe("250px");
  });
});
