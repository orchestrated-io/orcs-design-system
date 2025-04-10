"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[7043,7061],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=client.createRoot(el,rootOptions),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(8109).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(el=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,Jl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Jl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,rE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.rE});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./lib/components/Toggle/Toggle.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Toggle_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Toggle/Toggle.stories.js");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_Toggle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"toggle",children:"Toggle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#default",children:"Default"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#size",children:"Small"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#inverted",children:"Inverted"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#disabled",children:"Disabled"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#properties",children:"Properties"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Toggle"})," should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["As a general rule, the small version should be used in any layout components like ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Header"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Sidebar"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MobileNav"}),"; whereas the larger one can be used within the page content when required."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Toggle_stories__WEBPACK_IMPORTED_MODULE_4__.defaultToggle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"small",children:"Small"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Toggle_stories__WEBPACK_IMPORTED_MODULE_4__.small}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"inverted",children:"Inverted"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Toggle_stories__WEBPACK_IMPORTED_MODULE_4__.inverted}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Toggle_stories__WEBPACK_IMPORTED_MODULE_4__.disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.H2,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./lib/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.pn,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,styled_system__WEBPACK_IMPORTED_MODULE_1__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.G1),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((props=>({"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null})))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyLighter")(props)}}})),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{children,theme,dataTestId,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BoxWrapper,{ref,dataTestId,...props,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Box;Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().array,prop_types__WEBPACK_IMPORTED_MODULE_7___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/Spacer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpacerBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Spacer__SpacerBox",componentId:"sc-1acikjz-0"})([""," "," line-height:0;"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),Spacer=_ref=>{let{children,theme,...props}=_ref;const clones=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).map(((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacerBox,{...props,children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child)},index)));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:clones}):clones};Spacer.propTypes={..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.layout},Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]};const __WEBPACK_DEFAULT_EXPORT__=Spacer;Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]}},"./lib/components/Toggle/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Toggle});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Group=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Toggle__Group",componentId:"sc-f6l22k-0"})([""," "," display:flex;align-items:center;",";"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,(props=>props.inverted?(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.AH)(["input{&:focus{+ label{box-shadow:",";}}}label{&:first-of-type{background:",";}}"],(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black")(props),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDark")(props)):(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.AH)([""]))),Input=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.input.attrs({type:"checkbox"}).withConfig({displayName:"Toggle__Input",componentId:"sc-f6l22k-1"})(["opacity:0;position:absolute;visibility:",";margin:0;z-index:-1;width:0;height:0;pointer-events:none;&:focus{+ label{box-shadow:",";}}:checked{+ label{background:",";&:after{left:calc(100% - 3px);transform:translateX(-100%);}}&:focus{+ label{box-shadow:",";}}}"],(props=>props.srHide?"hidden":"visible"),(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.black20")(props)),(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.success")(props)),(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("shadows.thinOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.success30")(props))),Item=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.label.withConfig({displayName:"Toggle__Item",componentId:"sc-f6l22k-2"})(["cursor:pointer;flex:0 0 auto;margin:0;display:block;position:relative;transition:",";background:",";width:",";height:",";border-radius:",';&:after{content:"";position:absolute;top:3px;left:3px;background:',";transition:",";width:",";height:",";border-radius:",";}:active{&:after{width:",";}}",";"],(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("transition.transitionDefault")(props)),(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDarker")(props)),(props=>props.small?"36px":"44px"),(props=>props.small?"20px":"24px"),(props=>props.small?"10px":"12px"),(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white")(props)),(props=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("transition.transitionDefault")(props)),(props=>props.small?"14px":"18px"),(props=>props.small?"14px":"18px"),(props=>props.small?"7px":"9px"),(props=>props.small?"20px":"24px"),(props=>props.disabled?(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.AH)(["opacity:0.5;"]):(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.AH)([""]))),Label=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.label.withConfig({displayName:"Toggle__Label",componentId:"sc-f6l22k-3"})(["margin:0;padding-left:8px;cursor:pointer;font-size:",";color:",";"],(props=>props.small?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("fontSizes.1")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("fontSizes.2")(props)),(props=>props.disabled?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.grey")(props):props.inverted?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.white")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.y)("colors.greyDarkest")(props)));function Toggle(_ref){let{inverted,id,small,theme,label,checked,disabled,srHide,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Group,{inverted,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Input,{id,checked,disabled,srHide,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Item,{htmlFor:id,small,disabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Label,{inverted,disabled,htmlFor:id,small,children:label})]});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:component}):component}Toggle.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired,checked:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,inverted:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,small:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,srHide:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,theme:prop_types__WEBPACK_IMPORTED_MODULE_5___default().object},Toggle.defaultProps={inverted:!1,small:!1},Toggle.__docgenInfo={description:"`Toggle` should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green).\n\nAs a general rule, the small version should be used in any layout components like `Header`, `Sidebar`, `MobileNav`; whereas the larger one can be used within the page content when required.",methods:[],displayName:"Toggle",props:{inverted:{defaultValue:{value:"false",computed:!1},description:"Changes appearance to suit a dark background.",type:{name:"bool"},required:!1},small:{defaultValue:{value:"false",computed:!1},description:"Makes toggle and label smaller.",type:{name:"bool"},required:!1},id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},label:{description:"Specifies the text for the label.",type:{name:"string"},required:!0},checked:{description:"Specifies whether the `checkbox` for Toggle is on or not.",type:{name:"bool"},required:!1},disabled:{description:"Applies disabled attribute and styles",type:{name:"bool"},required:!1},srHide:{description:"Hides toggle from screen-reader. Only to be used when toggle alters visual presentation, not functional.",type:{name:"bool"},required:!1},theme:{description:"Specifies the theme for component design",type:{name:"object"},required:!1}}},Toggle.__docgenInfo={description:"`Toggle` should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green).\n\nAs a general rule, the small version should be used in any layout components like `Header`, `Sidebar`, `MobileNav`; whereas the larger one can be used within the page content when required.",methods:[],displayName:"Toggle",props:{inverted:{defaultValue:{value:"false",computed:!1},description:"Changes appearance to suit a dark background.",type:{name:"bool"},required:!1},small:{defaultValue:{value:"false",computed:!1},description:"Makes toggle and label smaller.",type:{name:"bool"},required:!1},id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},label:{description:"Specifies the text for the label.",type:{name:"string"},required:!0},checked:{description:"Specifies whether the `checkbox` for Toggle is on or not.",type:{name:"bool"},required:!1},disabled:{description:"Applies disabled attribute and styles",type:{name:"bool"},required:!1},srHide:{description:"Hides toggle from screen-reader. Only to be used when toggle alters visual presentation, not functional.",type:{name:"bool"},required:!1},theme:{description:"Specifies the theme for component design",type:{name:"object"},required:!1}}}},"./lib/components/Toggle/Toggle.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultToggle:()=>defaultToggle,disabled:()=>disabled,inverted:()=>inverted,small:()=>small});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/Toggle/index.js"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Box/index.js"),_Spacer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Spacer/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Toggle",component:___WEBPACK_IMPORTED_MODULE_2__.A},defaultToggle=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave",label:"Auto save"});defaultToggle.storyName="Default";const small=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave2",label:"Auto save",small:!0}),inverted=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{p:"r",bg:"greyDarkest",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave3",label:"Auto save",inverted:!0,small:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave4",label:"Auto save",inverted:!0})]})}),disabled=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{p:"r",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave5",label:"Auto save",small:!0,disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave6",label:"Auto save",checked:!0,disabled:!0})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{p:"r",bg:"greyDarkest",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave7",label:"Auto save",inverted:!0,small:!0,disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"autosave8",label:"Auto save",checked:!0,inverted:!0,disabled:!0})]})})]});defaultToggle.__docgenInfo={description:"",methods:[],displayName:"defaultToggle"},small.__docgenInfo={description:"",methods:[],displayName:"small"},inverted.__docgenInfo={description:"",methods:[],displayName:"inverted"},disabled.__docgenInfo={description:"",methods:[],displayName:"disabled"};const __namedExportsOrder=["defaultToggle","small","inverted","disabled"];defaultToggle.parameters={...defaultToggle.parameters,docs:{...defaultToggle.parameters?.docs,source:{originalSource:'() => <Toggle id="autosave" label="Auto save" />',...defaultToggle.parameters?.docs?.source}}},small.parameters={...small.parameters,docs:{...small.parameters?.docs,source:{originalSource:'() => <Toggle id="autosave2" label="Auto save" small />',...small.parameters?.docs?.source}}},inverted.parameters={...inverted.parameters,docs:{...inverted.parameters?.docs,source:{originalSource:'() => <Box p="r" bg="greyDarkest">\n    <Spacer my="r">\n      <Toggle id="autosave3" label="Auto save" inverted small />\n      <Toggle id="autosave4" label="Auto save" inverted />\n    </Spacer>\n  </Box>',...inverted.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:'() => <>\n    <Box p="r">\n      <Spacer my="r">\n        <Toggle id="autosave5" label="Auto save" small disabled />\n        <Toggle id="autosave6" label="Auto save" checked disabled />\n      </Spacer>\n    </Box>\n    <Box p="r" bg="greyDarkest">\n      <Spacer my="r">\n        <Toggle id="autosave7" label="Auto save" inverted small disabled />\n        <Toggle id="autosave8" label="Auto save" checked inverted disabled />\n      </Spacer>\n    </Box>\n  </>',...disabled.parameters?.docs?.source}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("./node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);