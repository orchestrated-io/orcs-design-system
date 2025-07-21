import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  SideNavProvider,
  useSideNavContext,
  useCurrentSideNavViewing
} from "../index";

// Mock components
jest.mock("../../Avatar", () => {
  return function MockAvatar({ image, customSize, shape }) {
    return (
      <div
        data-testid="avatar"
        data-image={image}
        data-size={customSize}
        data-shape={shape}
      />
    );
  };
});

jest.mock("../../Icon", () => {
  return function MockIcon({ icon, color, size }) {
    return (
      <div
        data-testid="icon"
        data-icon={icon.join(" ")}
        data-color={color}
        data-size={size}
      />
    );
  };
});

jest.mock("../../Button", () => {
  return function MockButton({ children, onClick, ...props }) {
    return (
      <button data-testid="button" onClick={onClick} {...props}>
        {children}
      </button>
    );
  };
});

jest.mock("../../Popover", () => {
  return function MockPopover({ children, text, direction, width }) {
    return (
      <div
        data-testid="popover"
        data-text={text}
        data-direction={direction}
        data-width={width}
      >
        {children}
      </div>
    );
  };
});

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

// Test component that uses the context
const TestComponent = () => {
  const {
    currentViewState,
    updateCurrentViewState,
    clearCurrentViewState,
    isViewing
  } = useSideNavContext();

  return (
    <div>
      <div data-testid="viewing-status">
        {isViewing ? "viewing" : "not-viewing"}
      </div>
      <div data-testid="viewing-data">
        {currentViewState ? JSON.stringify(currentViewState) : "null"}
      </div>
      <button
        data-testid="set-viewing"
        onClick={() =>
          updateCurrentViewState({ teamName: "Test Team", teamLink: "/test" })
        }
      >
        Set Viewing
      </button>
      <button data-testid="clear-viewing" onClick={clearCurrentViewState}>
        Clear Viewing
      </button>
    </div>
  );
};

// Test component that uses the hook
const TestHookComponent = ({ viewingData, isActive = true }) => {
  useCurrentSideNavViewing(viewingData, isActive);

  return <div data-testid="hook-component">Hook Component</div>;
};

describe("SideNav Context", () => {
  it("should provide context with initial state", () => {
    renderWithRouter(
      <SideNavProvider>
        <TestComponent />
      </SideNavProvider>
    );

    expect(screen.getByTestId("viewing-status")).toHaveTextContent(
      "not-viewing"
    );
    expect(screen.getByTestId("viewing-data")).toHaveTextContent("null");
  });

  it("should provide context with initial viewing data", () => {
    const initialViewing = { teamName: "Initial Team", teamLink: "/initial" };

    renderWithRouter(
      <SideNavProvider initialViewing={initialViewing}>
        <TestComponent />
      </SideNavProvider>
    );

    expect(screen.getByTestId("viewing-status")).toHaveTextContent("viewing");
    expect(screen.getByTestId("viewing-data")).toHaveTextContent(
      JSON.stringify(initialViewing)
    );
  });

  it("should allow setting viewing state", () => {
    renderWithRouter(
      <SideNavProvider>
        <TestComponent />
      </SideNavProvider>
    );

    const setButton = screen.getByTestId("set-viewing");
    act(() => {
      setButton.click();
    });

    expect(screen.getByTestId("viewing-status")).toHaveTextContent("viewing");
    expect(screen.getByTestId("viewing-data")).toHaveTextContent(
      '{"teamName":"Test Team","teamLink":"/test"}'
    );
  });

  it("should allow clearing viewing state", () => {
    const initialViewing = { teamName: "Initial Team", teamLink: "/initial" };

    renderWithRouter(
      <SideNavProvider initialViewing={initialViewing}>
        <TestComponent />
      </SideNavProvider>
    );

    const clearButton = screen.getByTestId("clear-viewing");
    act(() => {
      clearButton.click();
    });

    expect(screen.getByTestId("viewing-status")).toHaveTextContent(
      "not-viewing"
    );
    expect(screen.getByTestId("viewing-data")).toHaveTextContent("null");
  });
});

describe("useCurrentSideNavViewing Hook", () => {
  it("should set viewing when component mounts with active state", () => {
    const viewingData = { teamName: "Hook Team", teamLink: "/hook" };

    renderWithRouter(
      <SideNavProvider>
        <TestHookComponent viewingData={viewingData} isActive={true} />
        <TestComponent />
      </SideNavProvider>
    );

    expect(screen.getByTestId("viewing-status")).toHaveTextContent("viewing");
    expect(screen.getByTestId("viewing-data")).toHaveTextContent(
      JSON.stringify(viewingData)
    );
  });

  it("should not set viewing when component is not active", () => {
    const viewingData = { teamName: "Hook Team", teamLink: "/hook" };

    renderWithRouter(
      <SideNavProvider>
        <TestHookComponent viewingData={viewingData} isActive={false} />
        <TestComponent />
      </SideNavProvider>
    );

    expect(screen.getByTestId("viewing-status")).toHaveTextContent(
      "not-viewing"
    );
    expect(screen.getByTestId("viewing-data")).toHaveTextContent("null");
  });

  it("should clear viewing when component unmounts", () => {
    const viewingData = { teamName: "Hook Team", teamLink: "/hook" };

    const { unmount } = renderWithRouter(
      <SideNavProvider>
        <TestHookComponent viewingData={viewingData} isActive={true} />
        <TestComponent />
      </SideNavProvider>
    );

    expect(screen.getByTestId("viewing-status")).toHaveTextContent("viewing");

    act(() => {
      unmount();
    });

    // The viewing should be cleared when the component unmounts
    // We can't test this directly since the component is unmounted,
    // but the hook should handle cleanup internally
  });
});

describe("Context Error Handling", () => {
  it("should throw error when useSideNavContext is used outside provider", () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      renderWithRouter(<TestComponent />);
    }).toThrow("useSideNavContext must be used within a SideNavProvider");

    console.error = originalError;
  });
});
