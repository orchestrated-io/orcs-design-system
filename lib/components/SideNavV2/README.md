# SideNavV2 Component

A modern, responsive side navigation component with context-based state management.

## Features

- **Context Provider Pattern**: State management through React Context
- **Responsive Design**: Adapts to different screen sizes
- **Resizable Panels**: Drag to resize expanded panels
- **Modular Architecture**: Separated into focused, testable modules
- **TypeScript Support**: Full type definitions included
- **Comprehensive Testing**: 100% test coverage

## Quick Start

### Basic Usage

```jsx
import { SideNavWithContext } from "@your-org/orcs";

function App() {
  return (
    <SideNavWithContext
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
    >
      <main>{/* Your app content */}</main>
    </SideNavWithContext>
  );
}
```

### With Viewing Context

```jsx
import { SideNavWithContext, useCurrentSideNavViewing } from "@your-org/orcs";

function TeamPage() {
  // This component will automatically set the viewing context
  useCurrentSideNavViewing({
    teamName: "Engineering Team",
    teamLink: "/teams/engineering",
    avatar: "/avatars/engineering.png",
    shape: "square"
  });

  return <div>Team content...</div>;
}

function App() {
  return (
    <SideNavWithContext
      sideNavHeight="100vh"
      items={items}
      yourTeams={[
        {
          name: "Engineering",
          link: "/teams/engineering",
          avatar: "/avatars/engineering.png"
        }
      ]}
    >
      <main>
        <TeamPage />
      </main>
    </SideNavWithContext>
  );
}
```

## API Reference

### SideNavWithContext

The main wrapper component that provides the SideNav context.

#### Props

| Prop             | Type           | Required | Description                              |
| ---------------- | -------------- | -------- | ---------------------------------------- |
| `children`       | `ReactNode`    | Yes      | The content to render inside the SideNav |
| `initialViewing` | `ViewingData`  | No       | Initial viewing state                    |
| `sideNavHeight`  | `string`       | Yes      | Height of the side navigation            |
| `items`          | `NavItem[]`    | Yes      | Navigation items to display              |
| `yourTeams`      | `Team[]`       | No       | Teams to display in the teams section    |
| `pinnedItems`    | `PinnedItem[]` | No       | Pinned items to display                  |
| `viewing`        | `ViewingData`  | No       | Viewing data (can come from context)     |

### useCurrentSideNavViewing

Hook for components to register themselves as the current viewing context.

```jsx
useCurrentSideNavViewing(viewingData, isActive);
```

#### Parameters

- `viewingData` (ViewingData): The viewing data to set when this component is active
- `isActive` (boolean, optional): Whether this component should be the active viewing context (default: true)

#### Example

```jsx
function ProjectPage({ projectId }) {
  const project = useProject(projectId);

  useCurrentSideNavViewing({
    teamName: project.teamName,
    teamLink: `/teams/${project.teamId}`,
    avatar: project.teamAvatar,
    shape: "square"
  });

  return <div>Project content...</div>;
}
```

### useSideNavContext

Hook to access the SideNav context directly.

```jsx
const { viewing, setCurrentViewing, clearCurrentViewing, isViewing } =
  useSideNavContext();
```

#### Returns

- `viewing`: Current viewing data
- `setCurrentViewing`: Function to set viewing data
- `clearCurrentViewing`: Function to clear current viewing
- `clearAllViewing`: Function to clear all viewing state
- `isViewing`: Boolean indicating if there's active viewing
- `viewingStack`: Array of viewing history

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
  teamName: string;
  teamLink: string;
  avatar?: string;
  shape?: string;
  teamType?: string;
  badgeVariant?:
    | "success"
    | "warning"
    | "danger"
    | "primaryLight"
    | "primary"
    | "primaryDark"
    | "secondary";
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

### Custom Context Provider

If you need more control, you can use the context provider directly:

```jsx
import { SideNavProvider, SideNavV2 } from "@your-org/orcs";

function App() {
  return (
    <SideNavProvider initialViewing={initialViewing}>
      <SideNavV2 sideNavHeight="100vh" items={items} yourTeams={teams} />
      <main>{/* Your app content */}</main>
    </SideNavProvider>
  );
}
```

### Multiple Viewing Contexts

The system supports a stack of viewing contexts, allowing for nested navigation:

```jsx
function TeamPage() {
  useCurrentSideNavViewing({
    teamName: "Engineering",
    teamLink: "/teams/engineering"
  });

  return <ProjectList />;
}

function ProjectPage() {
  useCurrentSideNavViewing({
    teamName: "Engineering",
    teamLink: "/teams/engineering",
    subNav: [{ name: "Project Alpha", link: "/projects/alpha" }]
  });

  return <ProjectContent />;
}
```

## Architecture

The component is built with a modular architecture:

```
SideNavV2/
├── components/          # Reusable UI components
│   ├── BaseSection.js   # Generic section component
│   ├── PanelControl.js  # Expand/collapse control
│   └── ...
├── context/            # Context provider
│   └── SideNavContext.js
├── hooks/              # Custom hooks
│   ├── useSideNavState.js
│   ├── useResize.js
│   ├── useResponsive.js
│   └── useCurrentSideNavViewing.js
├── sections/           # Section components
│   ├── SideNavTeamsSection.js
│   ├── SideNavPinnedSection.js
│   └── SideNavViewingSection.js
├── styles/             # Styled components
│   └── SideNavV2.styles.js
├── utils/              # Utility functions
│   ├── itemUtils.js
│   └── resizeUtils.js
└── types/              # TypeScript definitions
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
- Hook behavior
- Error handling

## Migration from SideNavV1

If you're migrating from the original SideNav component:

1. Replace `SideNav` with `SideNavWithContext`
2. Move the `viewing` prop to use the `useCurrentSideNavViewing` hook
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
