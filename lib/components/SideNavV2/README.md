# SideNavV2 Component

A modern, responsive side navigation component with context-based state management.

## Features

- **Context Provider Pattern**: State management through React Context
- **Responsive Design**: Adapts to different screen sizes
- **Resizable Panels**: Drag to resize expanded panels
- **Modular Architecture**: Separated into focused, testable modules
- **TypeScript Support**: Full type definitions included
- **Comprehensive Testing**: 100% test coverage
- **React Portal Integration**: Current view section rendered via portal for better DOM placement

## Quick Start

### Basic Usage

```jsx
import { SideNavStateProvider, SideNavV2 } from "@your-org/orcs";

function App() {
  return (
    <SideNavStateProvider>
      <SideNavV2
        sideNavHeight="100vh"
        items={[
          {
            iconName: ["fas", "home"],
            name: "Dashboard",
            actionType: "link",
            link: "/dashboard"
          },
          {
            iconName: ["fas", "users"],
            name: "Users",
            actionType: "component",
            component: UsersComponent
          }
        ]}
      />
      <main>{/* Your app content */}</main>
    </SideNavStateProvider>
  );
}
```

### With Current View Section

```jsx
import {
  SideNavStateProvider,
  SideNavV2,
  RenderCurrentViewSection
} from "@your-org/orcs";

function TeamPage() {
  const viewingState = {
    name: "Engineering Team",
    teamLink: "/teams/engineering",
    avatar: "/avatars/engineering.png",
    shape: "square"
  };

  return (
    <div>
      <RenderCurrentViewSection viewingState={viewingState} />
      <div>Team content...</div>
    </div>
  );
}

function App() {
  return (
    <SideNavStateProvider>
      <SideNavV2
        sideNavHeight="100vh"
        items={items}
        yourTeams={[
          {
            name: "Engineering",
            link: "/teams/engineering",
            avatar: "/avatars/engineering.png"
          }
        ]}
      />
      <main>
        <TeamPage />
      </main>
    </SideNavStateProvider>
  );
}
```

## API Reference

### SideNavStateProvider

The context provider that must wrap your SideNav and content.

#### Props

| Prop             | Type          | Required | Description                               |
| ---------------- | ------------- | -------- | ----------------------------------------- |
| `children`       | `ReactNode`   | Yes      | The content to render inside the provider |
| `initialViewing` | `ViewingData` | No       | Initial viewing state                     |

### SideNavV2

The main side navigation component.

#### Props

| Prop            | Type           | Required | Description                           |
| --------------- | -------------- | -------- | ------------------------------------- |
| `sideNavHeight` | `string`       | Yes      | Height of the side navigation         |
| `items`         | `NavItem[]`    | Yes      | Navigation items to display           |
| `yourTeams`     | `Team[]`       | No       | Teams to display in the teams section |
| `pinnedItems`   | `PinnedItem[]` | No       | Pinned items to display               |

### RenderCurrentViewSection

Component to render the current view section via React Portal.

```jsx
<RenderCurrentViewSection viewingState={viewingData} />
```

#### Props

- `viewingState` (ViewingData): The viewing data to display in the current view section

#### Example

```jsx
function ProjectPage({ projectId }) {
  const project = useProject(projectId);

  const viewingState = {
    name: project.teamName,
    teamLink: `/teams/${project.teamId}`,
    avatar: project.teamAvatar,
    shape: "square"
  };

  return (
    <div>
      <RenderCurrentViewSection viewingState={viewingState} />
      <div>Project content...</div>
    </div>
  );
}
```

### useSideNavStateContext

Hook to access the SideNav context directly.

```jsx
const { expandedItem, isExpanded, expandedWidth } = useSideNavStateContext();
```

#### Returns

- `expandedItem`: Currently expanded item
- `isExpanded`: Whether the side nav is expanded
- `expandedWidth`: Width of the expanded panel

## Data Types

### NavItem

```typescript
interface NavItem {
  iconName: string[];
  name: string;
  badgeNumber?: string;
  badgeDot?: boolean;
  hide?: boolean;
  large?: boolean;
  bottomAligned?: boolean;
  actionType: "component" | "link" | "button";
  component?: React.ComponentType;
  link?: string;
  onClick?: () => void;
}
```

### ViewingData

```typescript
interface ViewingData {
  name: string;
  teamLink: string;
  avatar?: string;
  shape?: string;
  badge?: React.ReactNode;
  subNav?: Array<{
    name: string;
    link: string;
  }>;
}
```

### Team

```typescript
interface Team {
  name: string;
  link: string;
  avatar?: string;
}
```

### PinnedItem

```typescript
interface PinnedItem {
  name: string;
  link: string;
  avatar?: string;
  shape?: string;
  onUnpin?: () => void;
}
```

## Advanced Usage

### Multiple Current View Sections

The system supports rendering different current view sections based on the current route or component:

```jsx
function TeamPage() {
  const viewingState = {
    name: "Engineering",
    teamLink: "/teams/engineering"
  };

  return (
    <div>
      <RenderCurrentViewSection viewingState={viewingState} />
      <ProjectList />
    </div>
  );
}

function ProjectPage() {
  const viewingState = {
    name: "Engineering",
    teamLink: "/teams/engineering",
    subNav: [{ name: "Project Alpha", link: "/projects/alpha" }]
  };

  return (
    <div>
      <RenderCurrentViewSection viewingState={viewingState} />
      <ProjectContent />
    </div>
  );
}
```

## Architecture

The component is built with a modular architecture:

```
SideNavV2/
├── components/                    # Reusable UI components
│   ├── BaseSection.js            # Generic section component
│   ├── PanelControl.js           # Expand/collapse control
│   ├── RenderCurrentViewSection.js # Portal component for current view
│   └── CurrentViewSectionPortalTarget.js # Portal target
├── context/                      # Context provider
│   └── SideNavStateProvider.js
├── hooks/                        # Custom hooks
│   ├── useSideNavState.js
│   ├── useResize.js
│   └── useResponsive.js
├── sections/                     # Section components
│   ├── SideNavTeamsSection.js
│   ├── SideNavPinnedSection.js
│   └── SideNavCurrentViewSection.js
├── styles/                       # Styled components
│   └── SideNavV2.styles.js
├── utils/                        # Utility functions
│   ├── itemUtils.js
│   └── resizeUtils.js
└── types/                        # TypeScript definitions
    └── sideNav.js
```

## Testing

The component includes comprehensive tests:

```bash
npm test -- lib/components/SideNavV2/__tests__/
```

Test coverage includes:

- Context provider functionality
- Resize behavior
- Section components
- Portal rendering
- Error handling

## Migration from SideNavV1

If you're migrating from the original SideNav component:

1. Replace `SideNav` with `SideNavV2` wrapped in `SideNavStateProvider`
2. Replace `useUpdateCurrentSideNavView` with `RenderCurrentViewSection`
3. Wrap your content with the SideNav component
4. Update any direct context usage to use the new hooks

## Browser Support

- React 16.8+ (for hooks)
- Modern browsers with ES6+ support
- IE11 with polyfills (see package.json for details)

## Contributing

When contributing to this component:

1. Follow the existing modular architecture
2. Add tests for new functionality
3. Update documentation for API changes
4. Ensure all existing tests pass
5. Follow the established naming conventions
