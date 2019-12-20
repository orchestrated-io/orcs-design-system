Toggles should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green).

As a general rule, the small version should be used in any layout components like Header, Sidebar, MobileNav; whereas the larger one can be used within the page content when required.

```js
<Layout padding childVerticalSpacing>

  <Toggle id="autosave3" label="Auto save" small />

  <Toggle id="autosave" label="Auto save" />

</Layout>

<Layout padding childVerticalSpacing backgroundDark>

  <Toggle id="autosave4" label="Auto save" inverted small />

  <Toggle id="autosave2" label="Auto save" inverted />

</Layout>
```
