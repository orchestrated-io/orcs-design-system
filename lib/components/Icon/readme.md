Using 3rd party icons from Font Awesome (version 5, PRO + small business license).

For full list of icons see here: <https://fontawesome.com/icons?d=listing>.

Some examples of icons with props for size, colour or animation below. 

Note: There are three different icon set weightings we have access to. Light, regular and solid. To use we need to specify which set to use by prefixing icon with either "fal", "far" or "fas" as shown in example code below. 

To get started you must import the icons into font awesome library

```js static
import { library } from '@fortawesome/fontawesome-svg-core'
import {fal} from '@fortawesome/pro-light-svg-icons'
import {far} from '@fortawesome/pro-regular-svg-icons'
import {fas} from '@fortawesome/pro-solid-svg-icons'
library.add(fal, far, fas);
```

see [react-fontawesome documentation for more details](https://github.com/FortAwesome/react-fontawesome).

```js
const colours = require("../../colours").default;
<Layout childVerticalSpacing>
  <Flex alignCenter justifyAround>
    <Icon icon={["fal", "angle-down"]} />
    <Icon icon={["fal", "plus"]} />
    <Icon icon={["fal", "calendar-alt"]} size="2x" color={colours.grey} />
    <Icon icon={["fal", "check-circle"]} size="lg" color={colours.successDark} />
    <Icon icon={["fal", "exclamation-triangle"]} size="lg" color={colours.warningDark} />
    <Icon icon={["fal", "ban"]} size="lg" color={colours.dangerDark} />
    <Icon icon={["fal", "cog"]} size="lg" spin />
    <Icon icon={["fal", "spinner"]} size="lg" pulse />
    <Icon icon={["fal", "spinner-third"]} size="lg" color={colours.primaryDark} spin />
  </Flex>
  <Flex alignCenter justifyAround>
    <Icon icon={["far", "angle-down"]} />
    <Icon icon={["far", "plus"]} />
    <Icon icon={["far", "calendar-alt"]} size="2x" color={colours.grey} />
    <Icon icon={["far", "check-circle"]} size="lg" color={colours.successDark} />
    <Icon icon={["far", "exclamation-triangle"]} size="lg" color={colours.warningDark} />
    <Icon icon={["far", "ban"]} size="lg" color={colours.dangerDark} />
    <Icon icon={["far", "cog"]} size="lg" spin />
    <Icon icon={["far", "spinner"]} size="lg" pulse />
    <Icon icon={["far", "spinner-third"]} size="lg" color={colours.primaryDark} spin />
  </Flex>
  <Flex alignCenter justifyAround>
    <Icon icon={["fas", "angle-down"]} />
    <Icon icon={["fas", "plus"]} />
    <Icon icon={["fas", "calendar-alt"]} size="2x" color={colours.grey} />
    <Icon icon={["fas", "check-circle"]} size="lg" color={colours.successDark} />
    <Icon icon={["fas", "exclamation-triangle"]} size="lg" color={colours.warningDark} />
    <Icon icon={["fas", "ban"]} size="lg" color={colours.dangerDark} />
    <Icon icon={["fas", "cog"]} size="lg" spin />
    <Icon icon={["fas", "spinner"]} size="lg" pulse />
    <Icon icon={["fas", "spinner-third"]} size="lg" color={colours.primaryDark} spin />
  </Flex>
</Layout>;
```
