"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[1729],{"./lib/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.pn,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,styled_system__WEBPACK_IMPORTED_MODULE_1__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.G1),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((props=>({"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null})))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyLighter")(props)}}})),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{children,theme,dataTestId,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BoxWrapper,{ref,dataTestId,...props,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Box;Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/Spacer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpacerBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Spacer__SpacerBox",componentId:"sc-1acikjz-0"})([""," "," line-height:0;"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),Spacer=_ref=>{let{children,theme,...props}=_ref;const clones=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).map(((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacerBox,{...props,children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child)},index)));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:clones}):clones};Spacer.propTypes={..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.layout},Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]};const __WEBPACK_DEFAULT_EXPORT__=Spacer;Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]}},"./lib/components/TextArea/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const WrapperStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),LabelStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.Il,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW),InputStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.Il,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW),Wrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"TextArea__Wrapper",componentId:"sc-1oyenoa-0"})((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({position:"relative",width:props.fullWidth?"100%":"auto"})),WrapperStyles),Input=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("textarea").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"TextArea__Input",componentId:"sc-1oyenoa-1"}).attrs((props=>({"data-testid":props["data-testid"]?props["data-testid"]:null})))((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({display:"block",cursor:"text",appearance:"none",boxShadow:"none",fontFamily:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fonts.main")(props),fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontSizes.2")(props),zIndex:"1",borderRadius:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("radii.2")(props),transition:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("transition.transitionDefault")(props),background:props.disabled?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyLightest")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.white")(props),color:props.disabled?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.grey")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyDarkest")(props),width:props.fullWidth?"100%":"auto",padding:"between",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("borderWidths.1")(props),borderStyle:"solid",borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerLight")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successLight")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.black30")(props),"&:hover":{borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerDark")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.primary")(props)},"&:focus":{outline:"0",boxShadow:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.danger30")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.success30")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.primary30")(props),borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerDark")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.primary")(props)}})),InputStyles),Label=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("label").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"TextArea__Label",componentId:"sc-1oyenoa-2"})((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({display:"block",zIndex:"2",textAlign:"left",fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontSizes.1")(props),fontWeight:props.bold?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontWeights.2")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontWeights.1")(props),transition:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("transition.transitionDefault")(props),mb:props.floating?0:"xs",span:{color:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.danger")(props),fontWeight:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontWeights.2")(props)},color:props.inverted?props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successLightest")(props):props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerLightest")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.white")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successDark")(props):props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyDarkest")(props)})),LabelStyles),Asterisk=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:" *"}),TextArea=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const{inverted,id,value,disabled,label,invalid,valid,fullWidth,mandatory,bold,cols,rows,onChange,defaultValue,autoFocus,theme,WrapperStyles,LabelStyles,ariaLabel,InputStyles}=props,component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper,{fullWidth,...WrapperStyles,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Label,{inverted,invalid,valid,htmlFor:id,mandatory,bold,...LabelStyles,children:[label," ",mandatory&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Asterisk,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Input,{ref,id,fullWidth,cols,disabled,rows,autoFocus,valid,invalid,onChange,"data-testid":props["data-testid"],defaultValue,"aria-label":ariaLabel,...InputStyles,children:value})]});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}));TextArea.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,ariaLabel:(props,propName)=>props.label||null!=props[propName]&&""!==props[propName]?props[propName]&&"string"!=typeof props[propName]?new Error(`Invalid propType \`${propName}\` supplied to TextArea component. Expected \`string\`, received \`${typeof props[propName]}\`.`):null:new Error(`Missing prop \`${propName}\` not specified for TextArea component. When \`label\` is not provided, \`${propName}\` is required.`),bold:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,fullWidth:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,cols:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,rows:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,invalid:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,mandatory:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,inverted:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,WrapperStyles:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,LabelStyles:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,InputStyles:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,"data-testid":prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},value:{description:"Use value to specify text in text area.",type:{name:"string"},required:!1},label:{description:"Specifies the text for the TextArea label.",type:{name:"string"},required:!1},ariaLabel:{description:"Specifies aria-label for TextArea. This is only required if not using the label prop.",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for TextArea component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to TextArea component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},bold:{description:"Set the label text to bold font-weight.",type:{name:"bool"},required:!1},disabled:{description:"Sets disabled attribute and styling",type:{name:"bool"},required:!1},fullWidth:{description:"Makes text box take up full width of parent",type:{name:"bool"},required:!1},cols:{description:"Sets specified width of input area in columns",type:{name:"string"},required:!1},rows:{description:"Sets specified height of input area in rows",type:{name:"string"},required:!1},invalid:{description:'Applies invalid styles (coloured with "warning" colour from design system)',type:{name:"bool"},required:!1},valid:{description:'Applies valid styles (coloured with "success" colour from design system)',type:{name:"bool"},required:!1},mandatory:{description:"Shows asterisk to denote a mandatory field",type:{name:"bool"},required:!1},inverted:{description:"Set inverted styling for dark backgrounds",type:{name:"bool"},required:!1},WrapperStyles:{description:"Set additional styles for the `Wrapper` if needed",type:{name:"object"},required:!1},LabelStyles:{description:"Set additional styles for the `Label` if needed",type:{name:"object"},required:!1},InputStyles:{description:"Set additional styles for the `Input` textarea if needed",type:{name:"object"},required:!1},"data-testid":{description:"Specifies `data-testid` for testing",type:{name:"string"},required:!1},autoFocus:{description:"Specifies whether TextArea should automatically get focus",type:{name:"bool"},required:!1},onChange:{description:"Specifies `onChange` function",type:{name:"func"},required:!1},defaultValue:{description:"Specifies `textarea` default value (different from placeholder)",type:{name:"string"},required:!1},theme:{description:"Specifies the design theme object",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=TextArea;TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},value:{description:"Use value to specify text in text area.",type:{name:"string"},required:!1},label:{description:"Specifies the text for the TextArea label.",type:{name:"string"},required:!1},ariaLabel:{description:"Specifies aria-label for TextArea. This is only required if not using the label prop.",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for TextArea component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to TextArea component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},bold:{description:"Set the label text to bold font-weight.",type:{name:"bool"},required:!1},disabled:{description:"Sets disabled attribute and styling",type:{name:"bool"},required:!1},fullWidth:{description:"Makes text box take up full width of parent",type:{name:"bool"},required:!1},cols:{description:"Sets specified width of input area in columns",type:{name:"string"},required:!1},rows:{description:"Sets specified height of input area in rows",type:{name:"string"},required:!1},invalid:{description:'Applies invalid styles (coloured with "warning" colour from design system)',type:{name:"bool"},required:!1},valid:{description:'Applies valid styles (coloured with "success" colour from design system)',type:{name:"bool"},required:!1},mandatory:{description:"Shows asterisk to denote a mandatory field",type:{name:"bool"},required:!1},inverted:{description:"Set inverted styling for dark backgrounds",type:{name:"bool"},required:!1},WrapperStyles:{description:"Set additional styles for the `Wrapper` if needed",type:{name:"object"},required:!1},LabelStyles:{description:"Set additional styles for the `Label` if needed",type:{name:"object"},required:!1},InputStyles:{description:"Set additional styles for the `Input` textarea if needed",type:{name:"object"},required:!1},"data-testid":{description:"Specifies `data-testid` for testing",type:{name:"string"},required:!1},autoFocus:{description:"Specifies whether TextArea should automatically get focus",type:{name:"bool"},required:!1},onChange:{description:"Specifies `onChange` function",type:{name:"func"},required:!1},defaultValue:{description:"Specifies `textarea` default value (different from placeholder)",type:{name:"string"},required:!1},theme:{description:"Specifies the design theme object",type:{name:"object"},required:!1}}}},"./lib/components/TextArea/TextArea.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,boldLabelTextArea:()=>boldLabelTextArea,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultTextArea:()=>defaultTextArea,disabledTextArea:()=>disabledTextArea,fullWidthTextArea:()=>fullWidthTextArea,invertedTextArea:()=>invertedTextArea,mandatoryTextArea:()=>mandatoryTextArea,sizeTextArea:()=>sizeTextArea,statesTextArea:()=>statesTextArea});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/TextArea/index.js"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Box/index.js"),_Spacer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Spacer/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TextArea",component:___WEBPACK_IMPORTED_MODULE_2__.A,decorators:[storyFn=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{p:"r",children:storyFn()})]},defaultTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{"data-testid":"Test-id",id:"TextArea01",label:"Message",autoFocus:!0});defaultTextArea.storyName="Default";const sizeTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea02",label:"Message",cols:"50",rows:"5"});sizeTextArea.storyName="Size";const fullWidthTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea05",label:"Message",fullWidth:!0});fullWidthTextArea.storyName="Full-width";const boldLabelTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextAreaBold",label:"Message",bold:!0,"data-testid":"test-input"});boldLabelTextArea.storyName="Bold Label";const mandatoryTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextAreaMandatory",label:"Message",mandatory:!0});mandatoryTextArea.storyName="Mandatory";const statesTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea03",label:"Message - invalid message",invalid:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea04",label:"Message",valid:!0})]});statesTextArea.storyName="States";const invertedTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{bg:"greyDarker",p:"r",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea06",label:"Message",inverted:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea07",label:"Message - invalid message",inverted:!0,invalid:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea08",label:"Message",inverted:!0,valid:!0})]})});invertedTextArea.storyName="Inverted";const disabledTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{"data-testid":"Test-id",id:"TextArea01",label:"Message",value:"This is uneditable",disabled:!0});disabledTextArea.storyName="Disabled",defaultTextArea.__docgenInfo={description:"",methods:[],displayName:"defaultTextArea"},sizeTextArea.__docgenInfo={description:"",methods:[],displayName:"sizeTextArea"},fullWidthTextArea.__docgenInfo={description:"",methods:[],displayName:"fullWidthTextArea"},boldLabelTextArea.__docgenInfo={description:"",methods:[],displayName:"boldLabelTextArea"},mandatoryTextArea.__docgenInfo={description:"",methods:[],displayName:"mandatoryTextArea"},statesTextArea.__docgenInfo={description:"",methods:[],displayName:"statesTextArea"},invertedTextArea.__docgenInfo={description:"",methods:[],displayName:"invertedTextArea"},disabledTextArea.__docgenInfo={description:"",methods:[],displayName:"disabledTextArea"};const __namedExportsOrder=["defaultTextArea","sizeTextArea","fullWidthTextArea","boldLabelTextArea","mandatoryTextArea","statesTextArea","invertedTextArea","disabledTextArea"];defaultTextArea.parameters={...defaultTextArea.parameters,docs:{...defaultTextArea.parameters?.docs,source:{originalSource:'() => <TextArea data-testid="Test-id" id="TextArea01" label="Message" autoFocus />',...defaultTextArea.parameters?.docs?.source}}},sizeTextArea.parameters={...sizeTextArea.parameters,docs:{...sizeTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextArea02" label="Message" cols="50" rows="5" />',...sizeTextArea.parameters?.docs?.source}}},fullWidthTextArea.parameters={...fullWidthTextArea.parameters,docs:{...fullWidthTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextArea05" label="Message" fullWidth />',...fullWidthTextArea.parameters?.docs?.source}}},boldLabelTextArea.parameters={...boldLabelTextArea.parameters,docs:{...boldLabelTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextAreaBold" label="Message" bold data-testid="test-input" />',...boldLabelTextArea.parameters?.docs?.source}}},mandatoryTextArea.parameters={...mandatoryTextArea.parameters,docs:{...mandatoryTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextAreaMandatory" label="Message" mandatory />',...mandatoryTextArea.parameters?.docs?.source}}},statesTextArea.parameters={...statesTextArea.parameters,docs:{...statesTextArea.parameters?.docs,source:{originalSource:'() => <Spacer my="r">\n    <TextArea id="TextArea03" label="Message - invalid message" invalid />\n    <TextArea id="TextArea04" label="Message" valid />\n  </Spacer>',...statesTextArea.parameters?.docs?.source}}},invertedTextArea.parameters={...invertedTextArea.parameters,docs:{...invertedTextArea.parameters?.docs,source:{originalSource:'() => <Box bg="greyDarker" p="r">\n    <Spacer my="r">\n      <TextArea id="TextArea06" label="Message" inverted />\n      <TextArea id="TextArea07" label="Message - invalid message" inverted invalid />\n      <TextArea id="TextArea08" label="Message" inverted valid />\n    </Spacer>\n  </Box>',...invertedTextArea.parameters?.docs?.source}}},disabledTextArea.parameters={...disabledTextArea.parameters,docs:{...disabledTextArea.parameters?.docs,source:{originalSource:'() => <TextArea data-testid="Test-id" id="TextArea01" label="Message" value="This is uneditable" disabled />',...disabledTextArea.parameters?.docs?.source}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}}}]);