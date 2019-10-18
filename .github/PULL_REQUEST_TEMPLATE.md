## What it does, and why

> Add a thorough explanation of what the code in this PR does in this section. Make sure to also cover why your changes are necessary and useful.
>
> Is there anything not straightforward in the code? Explain it. If you choose to use a pattern rather than another, use this space to provide the reason for your choice.

## Checklist

> Please go through following checklist before requesting review and fix issues listed there. If your code touches the files with the below in question, please address them.

#### Coding conventions

- [ ] Have you split out components if there more than one React class or component in this file?
- [ ] Have you converted the React class component to functional component?
- [ ] Are you using spread props for the React component? If so, please state the exact properties required for the component `<Component prop1={val1} prop2={val2} />`
- [ ] Are you doing prop drilling, going further than 2 levels deep? If so, refer to this document: https://blog.axlight.com/posts/four-patterns-for-global-state-with-react-hooks-context-or-redux/
- [ ] If you're doing loops, are you using Lodash over es6 methods?
- [ ] Have you extracted inline CSS in JSX out into its own styled variable?
- [ ] Have you written PropTypes for the components?
- [ ] Are you using hooks instead of HOC where possible?

#### Workflow

- [ ] Are you writing documentation for the bits of code with complex changes?
- [ ] Are you writing unit tests for business logic?
- [ ] Are Stories are written for every visual change?
- [ ] Request review if it is any visual/interaction

## Testing

> Explain how to test the changes in detail.
>
> - What testing have you performed on this change?
> - Is it unit tested? If not, why?
> - What manual steps have you performed to ensure its functioning correctly when integrated?

## Trello Tickets

> If this PR implements changes related to one or more Trello tickets please add them here:

## UI Changes

> If this PR introduce some interaction or animation change please also add GIF with how it behaves. Don't forget that this change should be possible to simulate in storybook.
> You can use [this tool](http://gifbrewery.com/) to record your screen and convert it to a GIF.
