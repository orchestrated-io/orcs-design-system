"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[6151],{"./lib/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.pn,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,styled_system__WEBPACK_IMPORTED_MODULE_1__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.G1),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((props=>({"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null})))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyLighter")(props)}}})),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{children,theme,dataTestId,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BoxWrapper,{ref,dataTestId,...props,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Box;Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/Checkbox/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Checkbox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),lodash__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/lodash.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const checkboxOn=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.i7)(["0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0px 0 20px,0px 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px;}50%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0px 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px;}100%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0px 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;}"]),checkboxOff=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.i7)(["0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0px 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px,0 0 0 0 inset;}25%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0px 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px,0 0 0 0 inset;}50%{transform:rotate(45deg);margin-top:-4px;margin-left:6px;width:0px;height:0px;box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0px 0 20px,0px 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px,0 0 0 0 inset;}51%{transform:rotate(0deg);margin-top:-2px;margin-left:-2px;width:20px;height:20px;box-shadow:0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0px 0px 0 10px inset;}100%{transform:rotate(0deg);margin-top:-2px;margin-left:-2px;width:20px;height:20px;box-shadow:0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0px 0px 0 0px inset;}"]),Item=((0,styled_components__WEBPACK_IMPORTED_MODULE_5__.i7)(["0%{opacity:0.5;}100%{opacity:0;transform:scale(13,13);}"]),(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.i7)(["0%{opacity:0.5;}100%{opacity:0;transform:scale(13,13);}"]),styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div.withConfig({displayName:"Checkbox__Item",componentId:"sc-p4d19b-0"})([""," "," display:block;transform:translateZ(0);color:",";"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,(props=>"white"===props.colour?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDarkest")(props)))),Label=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.label.withConfig({displayName:"Checkbox__Label",componentId:"sc-p4d19b-1"})(["display:flex;align-items:center;cursor:",";opacity:",";"],(props=>props.disabled?"default":"pointer"),(props=>props.disabled?"0.5":"1")),Control=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.input.attrs({type:"checkbox"}).withConfig({displayName:"Checkbox__Control",componentId:"sc-p4d19b-2"})(["opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;pointer-events:none;&:focus{+ div{border-radius:2px;box-shadow:",";}}+ div{transition:",";&:before{background-color:",";}> div{color:",";}}:focus + div div:after{opacity:0.2;}:checked{+ div div:before{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0px 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;.animate&{animation:"," 300ms forwards ease-out;}}}&:not(:checked) + div div:before{.animate&{animation:"," 300ms forwards ease-out;}}"],(props=>props.colour?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors."+props.colour+"30")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black20")(props)),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("transition.transitionDefault"),(props=>props.colour?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)(`colors.${props.colour}`)(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDarker")(props)),(props=>props.colour?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)(`colors.${props.colour}`)(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDarker")(props)),checkboxOn,checkboxOff),Box=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div.withConfig({displayName:"Checkbox__Box",componentId:"sc-p4d19b-3"})(['position:relative;height:20px;width:20px;&:before{content:"";display:block;position:absolute;left:8px;top:8px;height:4px;width:4px;border-radius:100%;z-index:1;opacity:0;margin:0;pointer-events:none;background-color:',";}"],(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black50")(props))),Check=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div.withConfig({displayName:"Checkbox__Check",componentId:"sc-p4d19b-4"})(["position:relative;display:inline-block;width:20px;height:20px;border:2px solid;border-radius:",";overflow:hidden;z-index:1;color:",';&:before{content:"";position:absolute;transform:rotate(45deg);display:block;margin-top:-4px;margin-left:6px;width:0;height:0;box-shadow:0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0,0 0 0 0 inset;@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none){width:1px;height:1px;}}}'],(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("radii.1")(props)),(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDarker")(props))),Text=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div.withConfig({displayName:"Checkbox__Text",componentId:"sc-p4d19b-5"})(["font-size:",";padding-left:8px;",""],(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("fontSizes.2")(props)),styled_system__WEBPACK_IMPORTED_MODULE_1__.Il);function Checkbox(_ref){let{name,label,colour,disabled,checked,onClick,onChange,theme,ariaLabel,...props}=_ref;const inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Item,{colour,...props,onClick:()=>{inputRef.current&&!disabled&&inputRef.current.classList.add("animate")},onAnimationEnd:()=>{inputRef.current&&!disabled&&inputRef.current.classList.remove("animate")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Label,{disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Control,{name,colour,disabled,checked,onChange,ref:inputRef,"aria-label":ariaLabel}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box,{colour,onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Check,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Text,{...(0,lodash__WEBPACK_IMPORTED_MODULE_3__.pick)(props,styled_system__WEBPACK_IMPORTED_MODULE_1__.Il.propNames),children:label})]})});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}Checkbox.propTypes={colour:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["success","warning","danger","primary","white"]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,checked:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,name:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,ariaLabel:(props,propName)=>props.label||null!=props[propName]&&""!==props[propName]?props[propName]&&"string"!=typeof props[propName]?new Error(`Invalid propType \`${propName}\` supplied to Checkbox component. Expected \`string\`, received \`${typeof props[propName]}\`.`):null:new Error(`Missing prop \`${propName}\` not specified for Checkbox component. When \`label\` is not provided, \`${propName}\` is required.`),theme:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object},Checkbox.__docgenInfo={description:"The default checkbox (or inverted if on dark background) should be used for the majority of the UI; however, the coloured ones can be used in situations where the colour corresponds with some indication of status, e.g. in a task list, green could denote task completed, red could denote task overdue.",methods:[],displayName:"Checkbox",props:{colour:{description:"Sets the colour of the checkbox. Colours used are the design system standard colours.",type:{name:"enum",value:[{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"danger"',computed:!1},{value:'"primary"',computed:!1},{value:'"white"',computed:!1}]},required:!1},disabled:{description:"Applies disabled attribute and styling",type:{name:"bool"},required:!1},checked:{description:"Applies checked attribute and styling",type:{name:"bool"},required:!1},name:{description:"Input name attribute (should be unique id)",type:{name:"string"},required:!1},onChange:{description:"On checkbox input change handler",type:{name:"func"},required:!1},onClick:{description:"On checkbox click handler",type:{name:"string"},required:!1},label:{description:"Text label to display beside the checkbox",type:{name:"string"},required:!1},ariaLabel:{description:"",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for Checkbox component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to Checkbox component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1}}},Checkbox.__docgenInfo={description:"The default checkbox (or inverted if on dark background) should be used for the majority of the UI; however, the coloured ones can be used in situations where the colour corresponds with some indication of status, e.g. in a task list, green could denote task completed, red could denote task overdue.",methods:[],displayName:"Checkbox",props:{colour:{description:"Sets the colour of the checkbox. Colours used are the design system standard colours.",type:{name:"enum",value:[{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"danger"',computed:!1},{value:'"primary"',computed:!1},{value:'"white"',computed:!1}]},required:!1},disabled:{description:"Applies disabled attribute and styling",type:{name:"bool"},required:!1},checked:{description:"Applies checked attribute and styling",type:{name:"bool"},required:!1},name:{description:"Input name attribute (should be unique id)",type:{name:"string"},required:!1},onChange:{description:"On checkbox input change handler",type:{name:"func"},required:!1},onClick:{description:"On checkbox click handler",type:{name:"string"},required:!1},label:{description:"Text label to display beside the checkbox",type:{name:"string"},required:!1},ariaLabel:{description:"",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for Checkbox component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to Checkbox component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1}}}},"./lib/components/Spacer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpacerBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Spacer__SpacerBox",componentId:"sc-1acikjz-0"})([""," "," line-height:0;"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),Spacer=_ref=>{let{children,theme,...props}=_ref;const clones=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).map(((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacerBox,{...props,children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child)},index)));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:clones}):clones};Spacer.propTypes={..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.layout},Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]};const __WEBPACK_DEFAULT_EXPORT__=Spacer;Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]}},"./lib/components/Checkbox/Checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basicCheckbox:()=>basicCheckbox,checked:()=>checked,colourVariants:()=>colourVariants,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,inverted:()=>inverted});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/Checkbox/index.js"),_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Box/index.js"),_Spacer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Spacer/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox",component:___WEBPACK_IMPORTED_MODULE_2__.A},basicCheckbox=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},label:"Default checkbox"});basicCheckbox.storyName="Default";const colourVariants=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_3__.A,{m:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},label:"Primary colour checkbox",colour:"primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},label:"Success colour checkbox",colour:"success"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},label:"Warning colour checkbox",colour:"warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},label:"Danger colour checkbox",colour:"danger"})]}),disabled=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_3__.A,{m:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},disabled:!0,label:"Disabled checkbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},checked:!0,disabled:!0,label:"Disabled ticked checkbox"})]}),checked=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},checked:!0,label:"Ticked checkbox"}),inverted=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_4__.A,{bg:"greyDarker",p:"r",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{onChange:()=>{},colour:"white",label:"Inverted checkbox"})});basicCheckbox.__docgenInfo={description:"",methods:[],displayName:"basicCheckbox"},colourVariants.__docgenInfo={description:"",methods:[],displayName:"colourVariants"},disabled.__docgenInfo={description:"",methods:[],displayName:"disabled"},checked.__docgenInfo={description:"",methods:[],displayName:"checked"},inverted.__docgenInfo={description:"",methods:[],displayName:"inverted"};const __namedExportsOrder=["basicCheckbox","colourVariants","disabled","checked","inverted"];basicCheckbox.parameters={...basicCheckbox.parameters,docs:{...basicCheckbox.parameters?.docs,source:{originalSource:'() => <Checkbox onChange={() => {}} label="Default checkbox" />',...basicCheckbox.parameters?.docs?.source}}},colourVariants.parameters={...colourVariants.parameters,docs:{...colourVariants.parameters?.docs,source:{originalSource:'() => <Spacer m="3">\n    <Checkbox onChange={() => {}} label="Primary colour checkbox" colour="primary" />\n    <Checkbox onChange={() => {}} label="Success colour checkbox" colour="success" />\n    <Checkbox onChange={() => {}} label="Warning colour checkbox" colour="warning" />\n    <Checkbox onChange={() => {}} label="Danger colour checkbox" colour="danger" />\n  </Spacer>',...colourVariants.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:'() => <Spacer m="3">\n    <Checkbox onChange={() => {}} disabled label="Disabled checkbox" />\n    <Checkbox onChange={() => {}} checked disabled label="Disabled ticked checkbox" />\n  </Spacer>',...disabled.parameters?.docs?.source}}},checked.parameters={...checked.parameters,docs:{...checked.parameters?.docs,source:{originalSource:'() => <Checkbox onChange={() => {}} checked label="Ticked checkbox" />',...checked.parameters?.docs?.source}}},inverted.parameters={...inverted.parameters,docs:{...inverted.parameters?.docs,source:{originalSource:'() => <Box bg="greyDarker" p="r">\n    <Checkbox onChange={() => {}} colour="white" label="Inverted checkbox" />\n  </Box>',...inverted.parameters?.docs?.source}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}}}]);