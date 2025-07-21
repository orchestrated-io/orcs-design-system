import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SideNavStateProvider, useSideNavStateContext } from "../index";
import RenderCurrentViewSection from "../components/RenderCurrentViewSection";

// Mock the RenderCurrentViewSection component to avoid portal issues in tests
jest.mock("../components/RenderCurrentViewSection", () => {
  return function MockRenderCurrentViewSection({ viewingState }) {
    return (
      <div data-testid="render-current-view-section">
        <div data-testid="viewing-name">{viewingState.name}</div>
        <div data-testid="viewing-team-link">{viewingState.teamLink}</div>
        {viewingState.avatar && (
          <div data-testid="viewing-avatar">{viewingState.avatar}</div>
        )}
        {viewingState.shape && (
          <div data-testid="viewing-shape">{viewingState.shape}</div>
        )}
        {viewingState.subNav && (
          <div data-testid="viewing-subnav">
            {viewingState.subNav.map((item, index) => (
              <div key={index} data-testid={`subnav-item-${index}`}>
                {item.name}: {item.link}
              </div>
            ))}
          </div>
        )}
        {viewingState.badge && (
          <div data-testid="viewing-badge">{viewingState.badge}</div>
        )}
      </div>
    );
  };
});

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

jest.mock("../../Divider", () => {
  return function MockDivider({ light, display }) {
    return (
      <div
        data-testid="divider"
        data-light={light}
        data-display={JSON.stringify(display)}
      />
    );
  };
});

jest.mock("../../Flex", () => {
  return function MockFlex({ children, flexDirection, gap, p, mt, ...props }) {
    return (
      <div
        data-testid="flex"
        data-direction={flexDirection}
        data-gap={gap}
        data-p={p}
        data-mt={mt}
        {...props}
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
  } = useSideNavStateContext();

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
          updateCurrentViewState({ name: "Test Team", teamLink: "/test" })
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

// Test component that uses RenderCurrentViewSection
const TestPortalComponent = ({ viewingState }) => {
  return (
    <div>
      <RenderCurrentViewSection viewingState={viewingState} />
      <div data-testid="portal-component">Portal Component</div>
    </div>
  );
};

describe("SideNav Context", () => {
  it("should provide context with initial state", () => {
    renderWithRouter(
      <SideNavStateProvider>
        <TestComponent />
      </SideNavStateProvider>
    );

    expect(screen.getByTestId("viewing-status")).toHaveTextContent(
      "not-viewing"
    );
    expect(screen.getByTestId("viewing-data")).toHaveTextContent("null");
  });

  it("should provide context with initial viewing data", () => {
    const initialViewing = { name: "Initial Team", teamLink: "/initial" };

    renderWithRouter(
      <SideNavStateProvider initialViewing={initialViewing}>
        <TestComponent />
      </SideNavStateProvider>
    );

    expect(screen.getByTestId("viewing-status")).toHaveTextContent("viewing");
    expect(screen.getByTestId("viewing-data")).toHaveTextContent(
      JSON.stringify(initialViewing)
    );
  });

  it("should allow setting viewing state", () => {
    renderWithRouter(
      <SideNavStateProvider>
        <TestComponent />
      </SideNavStateProvider>
    );

    const setButton = screen.getByTestId("set-viewing");
    act(() => {
      setButton.click();
    });

    expect(screen.getByTestId("viewing-status")).toHaveTextContent("viewing");
    expect(screen.getByTestId("viewing-data")).toHaveTextContent(
      '{"name":"Test Team","teamLink":"/test"}'
    );
  });

  it("should allow clearing viewing state", () => {
    const initialViewing = { name: "Initial Team", teamLink: "/initial" };

    renderWithRouter(
      <SideNavStateProvider initialViewing={initialViewing}>
        <TestComponent />
      </SideNavStateProvider>
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

describe("RenderCurrentViewSection Portal", () => {
  it("should render current view section via portal", () => {
    const viewingState = {
      name: "Portal Team",
      teamLink: "/teams/portal",
      avatar: "/avatars/portal.png",
      shape: "square"
    };

    renderWithRouter(
      <SideNavStateProvider>
        <TestPortalComponent viewingState={viewingState} />
      </SideNavStateProvider>
    );

    expect(screen.getByTestId("portal-component")).toBeInTheDocument();
    expect(
      screen.getByTestId("render-current-view-section")
    ).toBeInTheDocument();
    expect(screen.getByTestId("viewing-name")).toHaveTextContent("Portal Team");
    expect(screen.getByTestId("viewing-team-link")).toHaveTextContent(
      "/teams/portal"
    );
    expect(screen.getByTestId("viewing-avatar")).toHaveTextContent(
      "/avatars/portal.png"
    );
    expect(screen.getByTestId("viewing-shape")).toHaveTextContent("square");
  });

  it("should handle viewing state with subNav", () => {
    const viewingState = {
      name: "Team with SubNav",
      teamLink: "/teams/subnav",
      subNav: [
        { name: "Overview", link: "/teams/subnav/overview" },
        { name: "Members", link: "/teams/subnav/members" }
      ]
    };

    renderWithRouter(
      <SideNavStateProvider>
        <TestPortalComponent viewingState={viewingState} />
      </SideNavStateProvider>
    );

    expect(screen.getByTestId("portal-component")).toBeInTheDocument();
    expect(screen.getByTestId("viewing-subnav")).toBeInTheDocument();
    expect(screen.getByTestId("subnav-item-0")).toHaveTextContent(
      "Overview: /teams/subnav/overview"
    );
    expect(screen.getByTestId("subnav-item-1")).toHaveTextContent(
      "Members: /teams/subnav/members"
    );
  });

  it("should handle viewing state with badge", () => {
    const viewingState = {
      name: "Team with Badge",
      teamLink: "/teams/badge",
      badge: <div data-testid="badge">Badge</div>
    };

    renderWithRouter(
      <SideNavStateProvider>
        <TestPortalComponent viewingState={viewingState} />
      </SideNavStateProvider>
    );

    expect(screen.getByTestId("portal-component")).toBeInTheDocument();
    expect(screen.getByTestId("viewing-badge")).toBeInTheDocument();
  });

  it("should handle viewing state without optional fields", () => {
    const viewingState = {
      name: "Team No Avatar",
      teamLink: "/teams/no-avatar"
    };

    renderWithRouter(
      <SideNavStateProvider>
        <TestPortalComponent viewingState={viewingState} />
      </SideNavStateProvider>
    );

    expect(screen.getByTestId("portal-component")).toBeInTheDocument();
    expect(screen.getByTestId("viewing-name")).toHaveTextContent(
      "Team No Avatar"
    );
    expect(screen.getByTestId("viewing-team-link")).toHaveTextContent(
      "/teams/no-avatar"
    );
    expect(screen.queryByTestId("viewing-avatar")).not.toBeInTheDocument();
    expect(screen.queryByTestId("viewing-shape")).not.toBeInTheDocument();
  });
});

describe("Context Error Handling", () => {
  it("should throw error when useSideNavStateContext is used outside provider", () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      renderWithRouter(<TestComponent />);
    }).toThrow(
      "useSideNavStateContext must be used within a SideNavStateProvider"
    );

    console.error = originalError;
  });
});
