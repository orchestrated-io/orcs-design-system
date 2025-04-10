"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[6649,8619],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=client.createRoot(el,rootOptions),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(8109).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(el=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,Jl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Jl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,rE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.rE});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./lib/components/Flex/Flex.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./lib/components/Flex/index.js"),_Flex_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Flex/Flex.stories.js");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"flex",children:"Flex"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#properties",children:"Properties"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#upgrading",children:"Upgrading"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Flex"})," is a component to layout, align, and arrange items dynamically within a container. This component should be used to display items where a grid structure is not needed, for instance a horizontal menu bar of buttons or links."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Flex"})," in conjunction with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Spacer"})," to control the spacing of elements in the dynamic container."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_4__.basicFlex}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"space"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"layout"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"flexbox"})," properties with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Flex"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"for-reference-see",children:"For reference, see:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://styled-system.com/table#space",rel:"nofollow",children:"space on Styled-System"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://styled-system.com/table#layout",rel:"nofollow",children:"layout on Styled-System"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://styled-system.com/table#flexbox",rel:"nofollow",children:"flexbox on Styled-System"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",rel:"nofollow",children:"CSS Flexbox reference"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/orchestrated-io/orcs-design-system/blob/master/packages/orcs-design-system/lib/systemtheme.js",rel:"nofollow",children:"systemtheme.js"})," (our arrays for design system values)"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.H2,{component:___WEBPACK_IMPORTED_MODULE_5__.A})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_orcs_design_system_orcs_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./lib/components/Flex/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Flex,Z:()=>FlexItem});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FlexStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.pn,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,styled_system__WEBPACK_IMPORTED_MODULE_1__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.G1),FlexWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"Flex__FlexWrapper",componentId:"sc-1f3kfw7-0"}).attrs((props=>({"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null})))((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({boxSizing:"border-box",gap:props.gap})),FlexStyles),FlexItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({displayName:"Flex__FlexItem",componentId:"sc-1f3kfw7-1"})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({boxSizing:"border-box"}),FlexStyles);function Flex(_ref){let{children,gap,theme,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FlexWrapper,{gap,...props,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FlexWrapper,{...props,children})}):theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}Flex.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,gap:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.Ay.layout,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.Ay.flexbox},Flex.defaultProps={display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"stretch"},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},gap:{description:"",type:{name:"string"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},gap:{description:"",type:{name:"string"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]}},"./lib/components/Flex/Flex.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basicFlex:()=>basicFlex,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/Flex/index.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Flex",component:___WEBPACK_IMPORTED_MODULE_2__.A},basicFlex=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.A,{gap:"r",flexWrap:"wrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"Button 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"Button 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"Button 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"Button 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"Button 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"Button 6"})]});basicFlex.storyName="Basic Flex",basicFlex.__docgenInfo={description:"",methods:[],displayName:"basicFlex"};const __namedExportsOrder=["basicFlex"];basicFlex.parameters={...basicFlex.parameters,docs:{...basicFlex.parameters?.docs,source:{originalSource:'() => <Flex gap="r" flexWrap="wrap">\n    <Button>Button 1</Button>\n    <Button>Button 2</Button>\n    <Button>Button 3</Button>\n    <Button>Button 4</Button>\n    <Button>Button 5</Button>\n    <Button>Button 6</Button>\n  </Flex>',...basicFlex.parameters?.docs?.source}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("./node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);