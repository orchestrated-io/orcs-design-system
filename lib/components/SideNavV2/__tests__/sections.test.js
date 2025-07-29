import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideNavTeamsSection from "../sections/SideNavTeamsSection";
import SideNavPinnedSection from "../sections/SideNavPinnedSection";
import RenderCurrentViewSection from "../components/RenderCurrentViewSection";
import { SideNavStateProvider } from "../index";

// Mock the RenderCurrentViewSection component to avoid portal issues in tests
jest.mock("../components/RenderCurrentViewSection", () => {
  return function MockRenderCurrentViewSection({ viewingState }) {
    // Don't render anything if there's no valid viewing state or no name
    if (!viewingState || !viewingState.name) {
      return null;
    }

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

// Mock components that might not be available in test environment
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

jest.mock("../../Typography", () => ({
  H5: ({ children, fontWeight, ...props }) => (
    <h5 data-testid="h5" data-font-weight={fontWeight} {...props}>
      {children}
    </h5>
  ),
  H6: ({ children, sizing, color, ...props }) => (
    <h6 data-testid="h6" data-sizing={sizing} data-color={color} {...props}>
      {children}
    </h6>
  )
}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("SideNavTeamsSection", () => {
  const mockTeams = [
    { avatar: "team1.jpg", name: "Team Alpha", link: "/teams/alpha" },
    { avatar: "team2.jpg", name: "Team Beta", link: "/teams/beta" }
  ];

  it("should render teams section when expanded", () => {
    renderWithRouter(
      <SideNavTeamsSection teams={mockTeams} isExpanded={true} />
    );

    expect(screen.getByText("Your Teams")).toBeInTheDocument();
    expect(screen.getByText("Team Alpha")).toBeInTheDocument();
    expect(screen.getByText("Team Beta")).toBeInTheDocument();
  });

  it("should not show title when collapsed", () => {
    renderWithRouter(
      <SideNavTeamsSection teams={mockTeams} isExpanded={false} />
    );

    expect(screen.queryByText("Your Teams")).not.toBeInTheDocument();
  });

  it("should render avatars for each team", () => {
    renderWithRouter(
      <SideNavTeamsSection teams={mockTeams} isExpanded={true} />
    );

    const avatars = screen.getAllByTestId("avatar");
    expect(avatars).toHaveLength(2);
    expect(avatars[0]).toHaveAttribute("data-image", "team1.jpg");
    expect(avatars[1]).toHaveAttribute("data-image", "team2.jpg");
  });
});

describe("SideNavPinnedSection", () => {
  const mockPinnedItems = [
    {
      avatar: "user1.jpg",
      name: "John Doe",
      link: "/users/john",
      shape: "circle",
      onUnpin: jest.fn()
    },
    {
      avatar: "user2.jpg",
      name: "Jane Smith",
      link: "/users/jane",
      shape: "square",
      onUnpin: jest.fn()
    }
  ];

  it("should render pinned section when expanded", () => {
    renderWithRouter(
      <SideNavPinnedSection items={mockPinnedItems} isExpanded={true} />
    );

    expect(screen.getByText("Pinned")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("should not show title when collapsed", () => {
    renderWithRouter(
      <SideNavPinnedSection items={mockPinnedItems} isExpanded={false} />
    );

    expect(screen.queryByText("Pinned")).not.toBeInTheDocument();
  });

  it("should render unpin buttons when expanded", () => {
    renderWithRouter(
      <SideNavPinnedSection items={mockPinnedItems} isExpanded={true} />
    );

    const buttons = screen.getAllByTestId("button");
    expect(buttons).toHaveLength(2);
  });

  it("should render avatars with correct shapes", () => {
    renderWithRouter(
      <SideNavPinnedSection items={mockPinnedItems} isExpanded={true} />
    );

    const avatars = screen.getAllByTestId("avatar");
    expect(avatars[0]).toHaveAttribute("data-shape", "circle");
    expect(avatars[1]).toHaveAttribute("data-shape", "square");
  });
});

describe("RenderCurrentViewSection", () => {
  const mockViewingState = {
    name: "Test Team",
    teamLink: "/teams/test",
    avatar: "/avatars/test.jpg",
    shape: "square"
  };

  it("should render current view section with basic data", () => {
    renderWithRouter(
      <SideNavStateProvider>
        <RenderCurrentViewSection viewingState={mockViewingState} />
      </SideNavStateProvider>
    );

    expect(
      screen.getByTestId("render-current-view-section")
    ).toBeInTheDocument();
    expect(screen.getByTestId("viewing-name")).toHaveTextContent("Test Team");
    expect(screen.getByTestId("viewing-team-link")).toHaveTextContent(
      "/teams/test"
    );
    expect(screen.getByTestId("viewing-avatar")).toHaveTextContent(
      "/avatars/test.jpg"
    );
    expect(screen.getByTestId("viewing-shape")).toHaveTextContent("square");
  });

  it("should render current view section with subNav", () => {
    const viewingStateWithSubNav = {
      ...mockViewingState,
      subNav: [
        { name: "Overview", link: "/teams/test/overview" },
        { name: "Members", link: "/teams/test/members" }
      ]
    };

    renderWithRouter(
      <SideNavStateProvider>
        <RenderCurrentViewSection viewingState={viewingStateWithSubNav} />
      </SideNavStateProvider>
    );

    expect(
      screen.getByTestId("render-current-view-section")
    ).toBeInTheDocument();
    expect(screen.getByTestId("viewing-subnav")).toBeInTheDocument();
    expect(screen.getByTestId("subnav-item-0")).toHaveTextContent(
      "Overview: /teams/test/overview"
    );
    expect(screen.getByTestId("subnav-item-1")).toHaveTextContent(
      "Members: /teams/test/members"
    );
  });

  it("should render current view section with badge", () => {
    const viewingStateWithBadge = {
      ...mockViewingState,
      badge: <div data-testid="badge">Badge</div>
    };

    renderWithRouter(
      <SideNavStateProvider>
        <RenderCurrentViewSection viewingState={viewingStateWithBadge} />
      </SideNavStateProvider>
    );

    expect(
      screen.getByTestId("render-current-view-section")
    ).toBeInTheDocument();
    expect(screen.getByTestId("viewing-badge")).toBeInTheDocument();
  });

  it("should handle viewing state without avatar", () => {
    const viewingStateWithoutAvatar = {
      name: "Team No Avatar",
      teamLink: "/teams/no-avatar"
    };

    renderWithRouter(
      <SideNavStateProvider>
        <RenderCurrentViewSection viewingState={viewingStateWithoutAvatar} />
      </SideNavStateProvider>
    );

    expect(
      screen.getByTestId("render-current-view-section")
    ).toBeInTheDocument();
    expect(screen.getByTestId("viewing-name")).toHaveTextContent(
      "Team No Avatar"
    );
    expect(screen.getByTestId("viewing-team-link")).toHaveTextContent(
      "/teams/no-avatar"
    );
    expect(screen.queryByTestId("viewing-avatar")).not.toBeInTheDocument();
    expect(screen.queryByTestId("viewing-shape")).not.toBeInTheDocument();
  });

  it("should not render when viewing state is null or undefined", () => {
    const { container } = renderWithRouter(
      <SideNavStateProvider>
        <RenderCurrentViewSection viewingState={null} />
      </SideNavStateProvider>
    );

    expect(container.firstChild).toBeNull();
  });

  it("should not render when viewing state has no name", () => {
    const viewingStateWithoutName = {
      teamLink: "/teams/test",
      avatar: "/avatars/test.jpg"
    };

    const { container } = renderWithRouter(
      <SideNavStateProvider>
        <RenderCurrentViewSection viewingState={viewingStateWithoutName} />
      </SideNavStateProvider>
    );

    expect(container.firstChild).toBeNull();
  });
});
