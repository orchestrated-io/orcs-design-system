# ORCS - Orchestrated Design System with React Components

## Getting Started

Clone repo

```
git clone https://github.com/orchestrated-io/orca-design-system.git
```

This repository is a monorepository running on [Lerna](https://lerna.js.org/). There are two packages installed:

- `orca-design-system`: Version 1.1.15. Deprecated, being phased out. [README](https://github.com/orchestrated-io/orca-design-system/tree/master/packages/orca-design-system) | [STYLEGUIDE](https://styleguide.orchestrated.io)
- `orcs-design-system`: Currently in development. [README](https://github.com/orchestrated-io/orca-design-system/tree/master/packages/orcs-design-system) | [STORYBOOK](https://orchestrated-io.github.io/orca-design-system)

To get started, install Lerna:

`npm install --g lerna`

You can use `lerna run` to run commands in all packages. If the command is available in that package it will run as if you had used `npm run`. To run commands in one package only, navigate to that package's directory and run from there.

Install dependencies:

`npm install` or `yarn`

## Running the design system storybook

In the monorepo's root:

`lerna run storybook`

This will run Storybook for all packages. To view just one package's Storybook, navigate to its directory:

`npm run storybook`

While `orca-design-system` package is no longer in development, you can still view its components in Styleguidist:

```
cd packages/orca-design-system
npm start
```

## Editing the design system

All library files are located inside `/lib`. We are no longer continuing development on the `orca-design-system` package. Please ensure all new work is done to the `orcs-design-system` package.

## Publishing the design system

`npm version patch`

Commit the version update, then push to master or a branch. The new version will be published when it is merged to master.

## Testing and linting

`npm run test` or `yarn test`

`npm run lint`

## Using in an app

In your root folder:

`npm i orcs-design-system`

You can then import components from the design system. More detailed usage instructions are in each package's readme:

- Orca (older version, no longer being developed): README
- Orcs: README

## Browser/device support

This design system is intended to work correctly on all modern desktop and mobile browsers.

---

> "A design system is a living, funded product with a roadmap and backlog, serving an ecosystem." — Nathan Curtis
