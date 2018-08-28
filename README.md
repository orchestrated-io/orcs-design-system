# orca - orchestrated design system with React Components

[![npm version](https://badge.fury.io/js/orca-design-system.svg)](https://badge.fury.io/js/orca-design-system) [![GitHub license](https://img.shields.io/github/license/orchestrated-io/orca-design-system.svg)](https://github.com/orchestrated-io/orca-design-system/blob/master/LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Forchestrated-io%2Forca-design-system.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Forchestrated-io%2Forca-design-system?ref=badge_large)

## Getting Started

Clone repo

````
git clone https://github.com/orchestrated-io/orca-design-system.git
````

### deploy styleguide publish

- > `npm version patch`
- > `git push --follow-tags`

Install dependencies

`npm install` or `yarn`

Start development server

`npm start` or `yarn start`

Run the styleguide

Open [http://localhost:6060](http://localhost:6060) to view it in the browser.

All library files are located inside `/lib`

## Testing

`npm run test` or `yarn test`

## Onboard your project to Orca design system

- cd to your react app root folder

- `npm i orca-design-system`

- you will need to also use styled-components package to be able to use this design system

`npm i styled-components` or `yarn add styled-components`

then at top of file add `import styled from 'styled-components';`

- Ensure the colours and theme provider is included in your application like below:

```
  import { colours } from "orca-design-system";
  import {ThemeProvider} from "styled-components";

  ...

  <ThemeProvider theme={colours}>
    <App/>
  </ThemeProvider>
```

- You will also need to add the icon library that we are using (which is Font Awesome 5.1.x Pro). To do this, add this to the top of your root app file:

```
import { library } from '@fortawesome/fontawesome-svg-core'
import {fal} from '@fortawesome/pro-light-svg-icons'
import {far} from '@fortawesome/pro-regular-svg-icons'
import {fas} from '@fortawesome/pro-solid-svg-icons'
library.add(fal, far, fas);
```

- If you want to use the app layout/navigation elements from the design system, like header, mobile nav and sidebar, you need to ensure you structure your app the following way so these all function correctly:

```
  <MobileNav>...</MobileNav>
  <Header>...</Header>
  <main>
    <Sidebar>...</Sidebar>
    <section>
      Put your main page content here
    </section>
  </main>
```

## Upgrading your app to use the latest version of the design system

When you use the design system, it will use the particular git hash that has been added/installed. If you want to upgrade to the latest hash, you need to run the following command:
`npm update --save orca-design-system` or `yarn upgrade orca-design-system`

## How to use components from the design system

- To use a component, refer to [http://styleguide.orchestrated.io/](http://styleguide.orchestrated.io/) to see list of components and examples of how to use.

### Simple components

- Make sure you import that component e.g.:

`import { Button } from 'orca-design-system';`

- Then you can use that component like so:

`<Button>Click me</Button>`

- And you can customise the look using the props which you can see in the examples on the link above. For example the following will give you a large green button:

`<Button large secondary>Click me</Button>`

### Sub-components

- Some components are made up of multiple sub-components, for example, Typography. To use these typographic elements you need to reference the component and then sub-component, like so:

- Import the component:

`import { Typography } from 'orca-design-system';`

```
  <Typography.H1>Page title</Typography.H1>
  <Typography.P>Page description</Typography.P>
```

### Multi-components

- Some components are made up of multiple components that are intended to work together. In this case you need to use exactly as specified in the design system; the markup structure and attributes should be the same.

- One example is the tabs component input [http://styleguide.orchestrated.io/#tabs](http://styleguide.orchestrated.io/#tabs), which if you refer to the design system example needs to be used like so:

```
  import { Tabs } from 'orca-design-system';

  <Tabs.Container>
    <Tabs.Tab active>Tab one</Tabs.Tab>
    <Tabs.Tab>Tab two</Tabs.Tab>
  </Tabs.Container>

  <Tabs.Content active>
    Place whatever child content you like here
  </Tabs.Content>

  <Tabs.Content>
    Place whatever child content you like here
  </Tabs.Content>
```

- There are other more complicated components like the sidebar, but as long as examples are followed these should be easy enough to implement.

### Icons

- To use icons you need to ensure you are importing the library (as outlined above in onboarding section). Import the Icon component and then reference them like this:

`import { Icon } from 'orca-design-system';`

`<Icon icon={["far", "user"]} />`

- To see a full list of icons and their names visit [https://fontawesome.com/icons?d=listing](https://fontawesome.com/icons?d=listing). Note: depending on if you want to use a light, regular or solid icon, your icon must be prefixed with either 'fal', 'far' or 'fas' as shown above.

- You can also alter the size and colour of icons, see [http://styleguide.orchestrated.io/#icon](http://styleguide.orchestrated.io/#icon) for examples.

`<Icon icon={["far", "calendar"]} size="2x" color={colours.blue} />`

## Creating custom components or styles in your app

- If you need to create a custom component that is specific for your app, this should be done and styled using the same method as this design system, which uses styled-components. For examples, view this design system's source code (have a look at various components in the /lib/components folder to see how they are constructed) and for documentation see: [https://www.styled-components.com/](https://www.styled-components.com/).

- To keep certain variables and colours consistent across your app, it is advised to use the ones defined in this design system. To view these, see /lib/colours.js and /lib/variables.js. 

- To implement these in your app you first need to import colours and variables like so: `import {colours, variables} from "orca-design-system";` and then you can use like so in your styling: 

```
const customComponent = styled.div`
  padding: ${variables.defaultSpacing};
  background-color: ${colours.primaryLight};
`
``` 

## Browser/device support

This design system is intended to work correctly on all modern desktop and mobile browsers.

---

> "A design system is a living, funded product with a roadmap and backlog, serving an ecosystem." — Nathan Curtis

