Using 3rd party icons from Font Awesome.

For full list of icons see here: <https://fontawesome.com/icons?d=listing>.

Some examples of icons with props for size, colour or animation below. 

Note: There are two different icon set weightings available in the Font Awesome free icons sets. Regular and solid. To use we need to specify which set to use by prefixing icon with either "far" or "fas" as shown in example code below. 

To get started you can import the icons into Font Awesome library. Alternatively if you want to use their full icon set you need to purchase a PRO plan from Font awesome, and can install the full pro icon packages in your app. See the readme here for more details on how to use and install PRO: <https://github.com/orchestrated-io/orca-design-system>

```js static
import { library } from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(far, fas);
```

see [react-fontawesome documentation for more details](https://github.com/FortAwesome/react-fontawesome).

```js
const colours = require("../../colours").default;
<Layout childVerticalSpacing>
  <Flex alignCenter justifyAround>
    <Icon icon={["fas", "angle-down"]} />
    <Icon icon={["fas", "plus"]} />
    <Icon icon={["far", "calendar-alt"]} size="2x" color={colours.grey} />
    <Icon icon={["fas", "check-circle"]} size="lg" color={colours.successDark} />
    <Icon icon={["fas", "exclamation-triangle"]} size="lg" color={colours.warningDark} />
    <Icon icon={["fas", "ban"]} size="lg" color={colours.dangerDark} />
    <Icon icon={["fas", "cog"]} size="lg" spin />
    <Icon icon={["fas", "sync-alt"]} size="lg" color={colours.primaryDark} spin />
  </Flex>
</Layout>;
```
