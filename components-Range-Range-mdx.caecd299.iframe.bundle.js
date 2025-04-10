"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[5589,9823],{"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});var storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("storybook/internal/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./lib/components/Range/Range.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./lib/components/Range/index.js"),_Range_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Range/Range.stories.js");function _createMdxContent(props){const _components={a:"a",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_Range_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"range",children:"Range"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#default",children:"Default"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#inverted",children:"Inverted"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#properties",children:"Properties"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Range component is pretty self explanatory, used to select a number out of a range, make sure to set a min, max, default\nvalue and define a label for accessibility."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Range_stories__WEBPACK_IMPORTED_MODULE_4__.defaultRange}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"inverted",children:"Inverted"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Range_stories__WEBPACK_IMPORTED_MODULE_4__.inverted}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.H2,{component:___WEBPACK_IMPORTED_MODULE_5__.A})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./lib/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.pn,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,styled_system__WEBPACK_IMPORTED_MODULE_1__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.G1),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((props=>({"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null})))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyLighter")(props)}}})),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{children,theme,dataTestId,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BoxWrapper,{ref,dataTestId,...props,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Box;Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/Range/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Range});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const vars_trackHeight="4px",vars_thumbDiameter="20px",thumb=props=>`\n    margin-top: -8px;\n    box-sizing: border-box;\n    border: none;\n    width: ${vars_thumbDiameter};\n    height: ${vars_thumbDiameter};\n    border-radius: ${vars_thumbDiameter};\n    background: ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.primary")(props)};\n`,track=props=>`\n    box-sizing: border-box;\n    border: none;\n    width: 100%;\n    height: ${vars_trackHeight};\n\t  background: ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyLight")(props)};\n    border-radius: 4px;\n`,Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Range__Wrapper",componentId:"sc-zb0zps-0"})([""," ",' position:relative;width:100%;display:flex;flex-wrap:wrap;align-items:center;&:before{content:"','";font-size:10px;font-weight:bold;}&:after{content:"','";font-size:10px;font-weight:bold;}',""],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,(props=>props.minValue),(props=>props.maxValue),(props=>props.inverted?(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.AH)(["&:before,&:after{color:",";}input{&:focus{background:rgba(255,255,255,0.1);}&::-webkit-slider-runnable-track{background:",";}&::-moz-range-track{background:",";}&::-ms-track{background:",";}}output{color:",";}"],(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white")(props),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDark")(props),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDark")(props),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDark")(props),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white")(props)):(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.AH)([""]))),Input=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.input.attrs({type:"range"}).withConfig({displayName:"Range__Input",componentId:"sc-zb0zps-1"})(["flex:1;margin:0;padding:0;width:100%;min-height:",";background:transparent;cursor:ew-resize;padding:10px 10px;border-radius:25px;transition:",";&:focus{outline:none;background:rgba(0,0,0,0.05);}&,&::-webkit-slider-thumb{-moz-appearance:none;-webkit-appearance:none;appearance:none;}&::-webkit-slider-runnable-track{",";}&::-moz-range-track{",";}&::-ms-track{",";}&::-webkit-slider-thumb{",";}&::-moz-range-thumb{",";}&::-ms-thumb{",";}&::-ms-tooltip{display:none;}"],vars_thumbDiameter,(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("transition.transitionDefault")(props)),track,track,track,thumb,thumb,thumb),Output=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.output.withConfig({displayName:"Range__Output",componentId:"sc-zb0zps-2"})(["display:block;user-select:none;font-weight:bold;text-align:center;font-size:14px;pointer-events:none;text-align:center;flex:1 1 100%;order:4;color:",";"],(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDarker")(props)));function Range(_ref){let{min,max,inverted,defaultValue,theme,ariaLabel,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Wrapper,{minValue:min,maxValue:max,inverted,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Input,{min,max,"aria-label":ariaLabel,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Output,{"aria-hidden":"true",children:defaultValue})]});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:component}):component}Range.propTypes={min:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,max:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired,inverted:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,theme:prop_types__WEBPACK_IMPORTED_MODULE_5___default().object},Range.__docgenInfo={description:"Range component is pretty self explanatory, used to select a number out of a range, make sure to set a min, max and default value.",methods:[],displayName:"Range",props:{min:{description:"Sets the minimum value for the range",type:{name:"number"},required:!1},max:{description:"Sets the maximum value for the range",type:{name:"number"},required:!1},defaultValue:{description:"Sets the default value for the range",type:{name:"number"},required:!1},ariaLabel:{description:"Sets the aria-label for accessibility",type:{name:"string"},required:!0},inverted:{description:"Changes appearance to suit dark backgrounds",type:{name:"bool"},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1}}},Range.__docgenInfo={description:"Range component is pretty self explanatory, used to select a number out of a range, make sure to set a min, max and default value.",methods:[],displayName:"Range",props:{min:{description:"Sets the minimum value for the range",type:{name:"number"},required:!1},max:{description:"Sets the maximum value for the range",type:{name:"number"},required:!1},defaultValue:{description:"Sets the default value for the range",type:{name:"number"},required:!1},ariaLabel:{description:"Sets the aria-label for accessibility",type:{name:"string"},required:!0},inverted:{description:"Changes appearance to suit dark backgrounds",type:{name:"bool"},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1}}}},"./lib/components/Range/Range.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultRange:()=>defaultRange,inverted:()=>inverted});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/Range/index.js"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Box/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Range",component:___WEBPACK_IMPORTED_MODULE_2__.A},defaultRange=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{min:0,max:20,defaultValue:10,ariaLabel:"Default range slider"});defaultRange.storyName="Default";const inverted=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{bg:"greyDarker",p:"r",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{min:0,max:20,defaultValue:10,ariaLabel:"Inverted range slider",inverted:!0})})});defaultRange.__docgenInfo={description:"",methods:[],displayName:"defaultRange"},inverted.__docgenInfo={description:"",methods:[],displayName:"inverted"};const __namedExportsOrder=["defaultRange","inverted"];defaultRange.parameters={...defaultRange.parameters,docs:{...defaultRange.parameters?.docs,source:{originalSource:'() => <Range min={0} max={20} defaultValue={10} ariaLabel="Default range slider" />',...defaultRange.parameters?.docs?.source}}},inverted.parameters={...inverted.parameters,docs:{...inverted.parameters?.docs,source:{originalSource:'() => <>\n    <Box bg="greyDarker" p="r">\n      <Range min={0} max={20} defaultValue={10} ariaLabel="Inverted range slider" inverted />\n    </Box>\n  </>',...inverted.parameters?.docs?.source}}}}}]);