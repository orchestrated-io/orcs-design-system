"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[5823],{"./lib/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,styled_system__WEBPACK_IMPORTED_MODULE_1__.PQ),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((props=>({"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null})))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyLighter")(props)}}})),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{children,theme,dataTestId,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BoxWrapper,{ref,dataTestId,...props,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Box;Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/Divider/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Divider});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Item=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div.withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.Ay}).withConfig({displayName:"Divider__Item",componentId:"sc-106mlj-0"})([""," "," "," display:block;width:100%;height:",";grid-column:",";border-bottom:",";background-color:",";"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,(props=>props.thick?"3px":"1px"),(props=>props.spanGrid?"1 / -1":"auto"),(props=>props.dash&&props.thick&&props.light?`dashed 3px ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black10")(props)}`:props.dash&&props.thick&&props.inverted?`dashed 3px ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white20")(props)}`:props.dash&&props.inverted?`dashed 1px ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white20")(props)}`:props.dash&&props.light?`dashed 1px ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black10")(props)}`:props.dash&&props.thick?`dashed 3px ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black20")(props)}`:props.dash?`dashed 1px ${(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black20")(props)}`:"none"),(props=>props.dash?"transparent":props.inverted?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white20")(props):props.light?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black10")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black20")(props)));function Divider(_ref){let{light,thick,dash,inverted,spanGrid,theme,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Item,{light,thick,dash,inverted,spanGrid,...props});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}Divider.propTypes={light:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,thick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,dash:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,inverted:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,spanGrid:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,theme:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object},Divider.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{light:{description:"Divider will use a lighter grey colour",type:{name:"bool"},required:!1},thick:{description:"Divider will be 3px instead of 1px",type:{name:"bool"},required:!1},dash:{description:"Divider will have a dashed line instead of solid line",type:{name:"bool"},required:!1},inverted:{description:"Divider will be a darker colour more suited for dark backgrounds",type:{name:"bool"},required:!1},spanGrid:{description:"Divider will span all columns when in a grid so it can be used as a row divider",type:{name:"bool"},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1}}},Divider.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{light:{description:"Divider will use a lighter grey colour",type:{name:"bool"},required:!1},thick:{description:"Divider will be 3px instead of 1px",type:{name:"bool"},required:!1},dash:{description:"Divider will have a dashed line instead of solid line",type:{name:"bool"},required:!1},inverted:{description:"Divider will be a darker colour more suited for dark backgrounds",type:{name:"bool"},required:!1},spanGrid:{description:"Divider will span all columns when in a grid so it can be used as a row divider",type:{name:"bool"},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1}}}},"./lib/components/Spacer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpacerBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Spacer__SpacerBox",componentId:"sc-1acikjz-0"})([""," "," line-height:0;"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),Spacer=_ref=>{let{children,theme,...props}=_ref;const clones=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).map(((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacerBox,{...props,children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child)},index)));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:clones}):clones};Spacer.propTypes={..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.layout},Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]};const __WEBPACK_DEFAULT_EXPORT__=Spacer;Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]}},"./lib/components/Divider/Divider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,dashDivider:()=>dashDivider,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultDivider:()=>defaultDivider,invertedDivider:()=>invertedDivider,spanGrid:()=>spanGrid});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/Divider/index.js"),_Spacer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Spacer/index.js"),_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Box/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Divider",component:___WEBPACK_IMPORTED_MODULE_2__.A},defaultDivider=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_3__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{light:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{thick:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{light:!0,thick:!0})]}),dashDivider=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_3__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{dash:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{light:!0,dash:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{thick:!0,dash:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{light:!0,thick:!0,dash:!0})]}),invertedDivider=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_4__.A,{bg:"greyDarkest",p:"5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_3__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{inverted:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{inverted:!0,thick:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{inverted:!0,dash:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{inverted:!0,thick:!0,dash:!0})]})}),spanGrid=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{spanGrid:!0});defaultDivider.__docgenInfo={description:"",methods:[],displayName:"defaultDivider"},dashDivider.__docgenInfo={description:"",methods:[],displayName:"dashDivider"},invertedDivider.__docgenInfo={description:"",methods:[],displayName:"invertedDivider"},spanGrid.__docgenInfo={description:"",methods:[],displayName:"spanGrid"};const __namedExportsOrder=["defaultDivider","dashDivider","invertedDivider","spanGrid"];defaultDivider.parameters={...defaultDivider.parameters,docs:{...defaultDivider.parameters?.docs,source:{originalSource:'() => <Spacer my="r">\n    <Divider />\n    <Divider light />\n    <Divider thick />\n    <Divider light thick />\n  </Spacer>',...defaultDivider.parameters?.docs?.source}}},dashDivider.parameters={...dashDivider.parameters,docs:{...dashDivider.parameters?.docs,source:{originalSource:'() => <Spacer my="r">\n    <Divider dash />\n    <Divider light dash />\n    <Divider thick dash />\n    <Divider light thick dash />\n  </Spacer>',...dashDivider.parameters?.docs?.source}}},invertedDivider.parameters={...invertedDivider.parameters,docs:{...invertedDivider.parameters?.docs,source:{originalSource:'() => <Box bg="greyDarkest" p="5">\n    <Spacer my="r">\n      <Divider inverted />\n      <Divider inverted thick />\n      <Divider inverted dash />\n      <Divider inverted thick dash />\n    </Spacer>\n  </Box>',...invertedDivider.parameters?.docs?.source}}},spanGrid.parameters={...spanGrid.parameters,docs:{...spanGrid.parameters?.docs,source:{originalSource:"() => <Divider spanGrid />",...spanGrid.parameters?.docs?.source}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}}}]);