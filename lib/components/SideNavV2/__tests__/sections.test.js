import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideNavTeamsSection from "../sections/SideNavTeamsSection";
import SideNavPinnedSection from "../sections/SideNavPinnedSection";

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
