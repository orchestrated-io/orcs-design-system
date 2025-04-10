"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[3715],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)};var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?esm_browser_v4():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./lib/components/TextArea/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const WrapperStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),LabelStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.Il,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW),InputStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.Il,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW),Wrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"TextArea__Wrapper",componentId:"sc-1oyenoa-0"})((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({position:"relative",width:props.fullWidth?"100%":"auto"})),WrapperStyles),Input=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("textarea").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"TextArea__Input",componentId:"sc-1oyenoa-1"}).attrs((props=>({"data-testid":props["data-testid"]?props["data-testid"]:null})))((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({display:"block",cursor:"text",appearance:"none",boxShadow:"none",fontFamily:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fonts.main")(props),fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontSizes.2")(props),zIndex:"1",borderRadius:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("radii.2")(props),transition:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("transition.transitionDefault")(props),background:props.disabled?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyLightest")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.white")(props),color:props.disabled?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.grey")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyDarkest")(props),width:props.fullWidth?"100%":"auto",padding:"between",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("borderWidths.1")(props),borderStyle:"solid",borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerLight")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successLight")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.black30")(props),"&:hover":{borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerDark")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.primary")(props)},"&:focus":{outline:"0",boxShadow:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.danger30")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.success30")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.primary30")(props),borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerDark")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.primary")(props)}})),InputStyles),Label=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("label").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"TextArea__Label",componentId:"sc-1oyenoa-2"})((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({display:"block",zIndex:"2",textAlign:"left",fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontSizes.1")(props),fontWeight:props.bold?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontWeights.2")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontWeights.1")(props),transition:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("transition.transitionDefault")(props),mb:props.floating?0:"xs",span:{color:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.danger")(props),fontWeight:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("fontWeights.2")(props)},color:props.inverted?props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successLightest")(props):props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerLightest")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.white")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.successDark")(props):props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.dangerDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.y)("colors.greyDarkest")(props)})),LabelStyles),Asterisk=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:" *"}),TextArea=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const{inverted,id,value,disabled,label,invalid,valid,fullWidth,mandatory,bold,cols,rows,onChange,defaultValue,autoFocus,theme,WrapperStyles,LabelStyles,ariaLabel,InputStyles}=props,component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper,{fullWidth,...WrapperStyles,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Label,{inverted,invalid,valid,htmlFor:id,mandatory,bold,...LabelStyles,children:[label," ",mandatory&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Asterisk,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Input,{ref,id,fullWidth,cols,disabled,rows,autoFocus,valid,invalid,onChange,"data-testid":props["data-testid"],defaultValue,"aria-label":ariaLabel,...InputStyles,children:value})]});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}));TextArea.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,ariaLabel:(props,propName)=>props.label||null!=props[propName]&&""!==props[propName]?props[propName]&&"string"!=typeof props[propName]?new Error(`Invalid propType \`${propName}\` supplied to TextArea component. Expected \`string\`, received \`${typeof props[propName]}\`.`):null:new Error(`Missing prop \`${propName}\` not specified for TextArea component. When \`label\` is not provided, \`${propName}\` is required.`),bold:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,fullWidth:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,cols:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,rows:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,invalid:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,mandatory:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,inverted:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,WrapperStyles:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,LabelStyles:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,InputStyles:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,"data-testid":prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object},TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},value:{description:"Use value to specify text in text area.",type:{name:"string"},required:!1},label:{description:"Specifies the text for the TextArea label.",type:{name:"string"},required:!1},ariaLabel:{description:"Specifies aria-label for TextArea. This is only required if not using the label prop.",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for TextArea component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to TextArea component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},bold:{description:"Set the label text to bold font-weight.",type:{name:"bool"},required:!1},disabled:{description:"Sets disabled attribute and styling",type:{name:"bool"},required:!1},fullWidth:{description:"Makes text box take up full width of parent",type:{name:"bool"},required:!1},cols:{description:"Sets specified width of input area in columns",type:{name:"string"},required:!1},rows:{description:"Sets specified height of input area in rows",type:{name:"string"},required:!1},invalid:{description:'Applies invalid styles (coloured with "warning" colour from design system)',type:{name:"bool"},required:!1},valid:{description:'Applies valid styles (coloured with "success" colour from design system)',type:{name:"bool"},required:!1},mandatory:{description:"Shows asterisk to denote a mandatory field",type:{name:"bool"},required:!1},inverted:{description:"Set inverted styling for dark backgrounds",type:{name:"bool"},required:!1},WrapperStyles:{description:"Set additional styles for the `Wrapper` if needed",type:{name:"object"},required:!1},LabelStyles:{description:"Set additional styles for the `Label` if needed",type:{name:"object"},required:!1},InputStyles:{description:"Set additional styles for the `Input` textarea if needed",type:{name:"object"},required:!1},"data-testid":{description:"Specifies `data-testid` for testing",type:{name:"string"},required:!1},autoFocus:{description:"Specifies whether TextArea should automatically get focus",type:{name:"bool"},required:!1},onChange:{description:"Specifies `onChange` function",type:{name:"func"},required:!1},defaultValue:{description:"Specifies `textarea` default value (different from placeholder)",type:{name:"string"},required:!1},theme:{description:"Specifies the design theme object",type:{name:"object"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=TextArea;TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},value:{description:"Use value to specify text in text area.",type:{name:"string"},required:!1},label:{description:"Specifies the text for the TextArea label.",type:{name:"string"},required:!1},ariaLabel:{description:"Specifies aria-label for TextArea. This is only required if not using the label prop.",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for TextArea component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to TextArea component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},bold:{description:"Set the label text to bold font-weight.",type:{name:"bool"},required:!1},disabled:{description:"Sets disabled attribute and styling",type:{name:"bool"},required:!1},fullWidth:{description:"Makes text box take up full width of parent",type:{name:"bool"},required:!1},cols:{description:"Sets specified width of input area in columns",type:{name:"string"},required:!1},rows:{description:"Sets specified height of input area in rows",type:{name:"string"},required:!1},invalid:{description:'Applies invalid styles (coloured with "warning" colour from design system)',type:{name:"bool"},required:!1},valid:{description:'Applies valid styles (coloured with "success" colour from design system)',type:{name:"bool"},required:!1},mandatory:{description:"Shows asterisk to denote a mandatory field",type:{name:"bool"},required:!1},inverted:{description:"Set inverted styling for dark backgrounds",type:{name:"bool"},required:!1},WrapperStyles:{description:"Set additional styles for the `Wrapper` if needed",type:{name:"object"},required:!1},LabelStyles:{description:"Set additional styles for the `Label` if needed",type:{name:"object"},required:!1},InputStyles:{description:"Set additional styles for the `Input` textarea if needed",type:{name:"object"},required:!1},"data-testid":{description:"Specifies `data-testid` for testing",type:{name:"string"},required:!1},autoFocus:{description:"Specifies whether TextArea should automatically get focus",type:{name:"bool"},required:!1},onChange:{description:"Specifies `onChange` function",type:{name:"func"},required:!1},defaultValue:{description:"Specifies `textarea` default value (different from placeholder)",type:{name:"string"},required:!1},theme:{description:"Specifies the design theme object",type:{name:"object"},required:!1}}}},"./lib/components/ActionsMenu/ActionsMenu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,advancedActionsMenu:()=>advancedActionsMenu,customActionsMenu:()=>customActionsMenu,default:()=>ActionsMenu_stories,defaultActionsMenu:()=>defaultActionsMenu,keepInViewExample:()=>keepInViewExample,leftOffsetActionsMenu:()=>leftOffsetActionsMenu,textButtonActionsMenu:()=>textButtonActionsMenu});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_router_dom=__webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),checkClass=function checkClass(el,cl){var _el$classList;return null==(_el$classList=el.classList)?void 0:_el$classList.contains(cl)},hasIgnoreClass=function hasIgnoreClass(e,ignoreClass){for(var el=e.target||e;el;){if(Array.isArray(ignoreClass)){if(ignoreClass.some((function(c){return checkClass(el,c)})))return!0}else if(checkClass(el,ignoreClass))return!0;el=el.parentElement}return!1},getEventOptions=function getEventOptions(type){return!(!type.includes("touch")||!function(){if("undefined"==typeof window||"function"!=typeof window.addEventListener)return!1;var passive=!1,options=Object.defineProperty({},"passive",{get:function get(){passive=!0}}),noop=function noop(){return null};return window.addEventListener("test",noop,options),window.removeEventListener("test",noop,options),passive}())&&{passive:!0}};const index_esm=function useOnclickOutside(callback,_temp){var _ref=void 0===_temp?{}:_temp,refsOpt=_ref.refs,disabled=_ref.disabled,_ref$eventTypes=_ref.eventTypes,eventTypes=void 0===_ref$eventTypes?["mousedown","touchstart"]:_ref$eventTypes,excludeScrollbar=_ref.excludeScrollbar,_ref$ignoreClass=_ref.ignoreClass,ignoreClass=void 0===_ref$ignoreClass?"ignore-onclickoutside":_ref$ignoreClass,_ref$detectIFrame=_ref.detectIFrame,detectIFrame=void 0===_ref$detectIFrame||_ref$detectIFrame,_useState=(0,react.useState)([]),refsState=_useState[0],setRefsState=_useState[1],callbackRef=(0,react.useRef)(callback);callbackRef.current=callback;var ref=(0,react.useCallback)((function(el){return setRefsState((function(prevState){return[].concat(prevState,[{current:el}])}))}),[]);return(0,react.useEffect)((function(){if(null!=refsOpt&&refsOpt.length||refsState.length){var getEls=function getEls(){var els=[];return(refsOpt||refsState).forEach((function(_ref2){var current=_ref2.current;return current&&els.push(current)})),els},handler=function handler(e){hasIgnoreClass(e,ignoreClass)||excludeScrollbar&&function clickedOnScrollbar(e){return document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY}(e)||!getEls().every((function(el){return!el.contains(e.target)}))||callbackRef.current(e)},blurHandler=function blurHandler(e){return setTimeout((function(){var activeElement=document.activeElement;"IFRAME"!==(null==activeElement?void 0:activeElement.tagName)||hasIgnoreClass(activeElement,ignoreClass)||getEls().includes(activeElement)||callbackRef.current(e)}),0)},removeEventListener=function removeEventListener(){eventTypes.forEach((function(type){return document.removeEventListener(type,handler,getEventOptions(type))})),detectIFrame&&window.removeEventListener("blur",blurHandler)};if(!disabled)return eventTypes.forEach((function(type){return document.addEventListener(type,handler,getEventOptions(type))})),detectIFrame&&window.addEventListener("blur",blurHandler),function(){return removeEventListener()};removeEventListener()}}),[refsState,ignoreClass,excludeScrollbar,disabled,detectIFrame,JSON.stringify(eventTypes)]),ref};var ActionsMenu=__webpack_require__("./lib/components/ActionsMenu/index.js"),Flex=__webpack_require__("./lib/components/Flex/index.js"),Icon=__webpack_require__("./lib/components/Icon/index.js"),Box=__webpack_require__("./lib/components/Box/index.js"),Button=__webpack_require__("./lib/components/Button/index.js"),TextArea=__webpack_require__("./lib/components/TextArea/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ActionsMenu_stories={title:"Components/ActionsMenu",decorators:[storyFn=>(0,jsx_runtime.jsx)(Box.A,{pb:"150px",children:storyFn()})],component:ActionsMenu.Ay},defaultActionsMenu=()=>(0,jsx_runtime.jsxs)(ActionsMenu.Ay,{children:[(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"https://orchestrated.io/",children:"Open details page"}),(0,jsx_runtime.jsx)(react_router_dom.Kd,{children:(0,jsx_runtime.jsx)(ActionsMenu.WE,{as:react_router_dom.N_,to:"/",children:"Edit"})}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{onClick:(0,dist.XI)("clicked"),children:"Remove"})]});defaultActionsMenu.storyName="Default";const leftOffsetActionsMenu=()=>(0,jsx_runtime.jsx)(Flex.A,{justifyContent:"flex-end",children:(0,jsx_runtime.jsxs)(ActionsMenu.Ay,{ariaLabel:"Options Menu",direction:"left-start",children:[(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"https://orchestrated.io/",children:"Open details page"}),(0,jsx_runtime.jsx)(react_router_dom.Kd,{children:(0,jsx_runtime.jsx)(ActionsMenu.WE,{as:react_router_dom.N_,to:"/",children:"Edit"})}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{onClick:(0,dist.XI)("clicked"),children:"Remove"})]})});leftOffsetActionsMenu.storyName="Left offset";const MenuItems=react.forwardRef((({closeMenu,reasons},ref)=>{const[showOther,setShowOther]=(0,react.useState)(!1),[selectedReason,setSelectedReason]=(0,react.useState)(null),[otherReason,setOtherReason]=(0,react.useState)(""),reset=()=>{setShowOther(!1)},resetAndCloseMenu=()=>{reset(),closeMenu()};(0,react.useImperativeHandle)(ref,(()=>({reset})));const clickOther=()=>{setSelectedReason("other"),setShowOther(!0)},setReason=id=>()=>{setSelectedReason(id),setOtherReason(""),resetAndCloseMenu()};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(ActionsMenu.R7,{onClick:reset,canClick:showOther,children:[showOther&&(0,jsx_runtime.jsx)(Icon.A,{icon:["fas","angle-left"],mr:"xs"})," Select reason"]}),!showOther&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:reasons.map((({id,label})=>"other"===id?(0,jsx_runtime.jsx)(ActionsMenu.WE,{type:"button",id:"other",selected:selectedReason===id,onClick:clickOther,children:(0,jsx_runtime.jsxs)(Flex.A,{alignItems:"center",justifyContent:"space-between",children:[label,(0,jsx_runtime.jsx)(Icon.A,{icon:["fas","pen"],size:"sm"})]})},id):(0,jsx_runtime.jsx)(ActionsMenu.WE,{type:"button",selected:selectedReason===id,onClick:setReason(id),children:label},id)))}),showOther&&(0,jsx_runtime.jsxs)(Box.A,{id:"editableContent",p:"s",children:[(0,jsx_runtime.jsx)(TextArea.A,{id:"TextArea01",label:"Reason for rejection",cols:"35",rows:"3",defaultValue:otherReason,onChange:e=>{setOtherReason(e.target.value)}}),(0,jsx_runtime.jsx)(Button.Ay,{onClick:resetAndCloseMenu,small:!0,variant:"danger",mt:"s",children:"Reject request"})]})]})}));MenuItems.propTypes={closeMenu:prop_types_default().bool,reasons:prop_types_default().array};const Reasons=[{id:"tooMany",label:"Too many people"},{id:"notEnough",label:"Not enough people"},{id:"noPeopleWithSkills",label:"No people with the desired skills"},{id:"other",label:"Other"}],advancedActionsMenu=()=>{const ref=react.createRef(null);return(0,jsx_runtime.jsx)(Flex.A,{justifyContent:"flex-end",children:(0,jsx_runtime.jsx)(ActionsMenu.Ay,{ref,direction:"left-start",className:"ignore-onclickoutside",customTriggerComponent:(0,jsx_runtime.jsx)(Button.Ay,{variant:"default",iconOnly:!0,type:"button",width:"30px",height:"30px",children:(0,jsx_runtime.jsx)(Icon.A,{icon:["fas","pen"],size:"sm"})}),closeOnClick:!1,children:(0,jsx_runtime.jsx)(MenuItems,{closeMenu:()=>{ref.current&&ref.current.closeMenu()},reasons:Reasons})})})};advancedActionsMenu.storyName="Advanced Actions Menu";const customActionsMenu=()=>{const AdvancedActionsMenu=()=>{const[toggleState,setToggle]=(0,react.useState)(!1),menuItemsRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Flex.A,{justifyContent:"flex-end",children:(0,jsx_runtime.jsx)(ActionsMenu.V3,{toggleState,onToggle:e=>{e.stopPropagation(),setToggle(!toggleState)},direction:"left-start",customTriggerComponent:(0,jsx_runtime.jsx)(Button.Ay,{variant:"danger",iconOnly:!0,type:"button",width:"30px",height:"30px",children:(0,jsx_runtime.jsx)(Icon.A,{icon:["fas","times"]})}),children:(0,jsx_runtime.jsx)(MenuItems,{ref:menuItemsRef,closeMenu:()=>{setToggle(!1)},reasons:Reasons})})})})};return(0,jsx_runtime.jsx)(AdvancedActionsMenu,{})};customActionsMenu.storyName="Custom Actions Menu";const textButtonActionsMenu=()=>{const TextButtonActionsMenu=()=>{const[toggleState,setToggle]=(0,react.useState)(!1),menuItemsRef=(0,react.useRef)(null),menuRef=index_esm((()=>{menuItemsRef.current&&menuItemsRef.current.reset(),setToggle(!1)}),{disabled:!toggleState});return(0,jsx_runtime.jsx)("div",{ref:menuRef,children:(0,jsx_runtime.jsxs)(ActionsMenu.V3,{toggleState,onToggle:e=>{e.stopPropagation(),setToggle(!toggleState)},menuWidth:"120px",direction:"bottom-start",customTriggerComponent:(0,jsx_runtime.jsxs)(Button.Ay,{variant:"ghost",type:"button",iconRight:!0,small:!0,children:["Contact via...",(0,jsx_runtime.jsx)(Icon.A,{icon:["fas","chevron-down"]})]}),children:[(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"Email"}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"Phone"}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"MS Teams"}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"Slack"})]})})};return(0,jsx_runtime.jsx)(TextButtonActionsMenu,{})};textButtonActionsMenu.storyName="Text Button Actions Menu";const keepInViewExample=()=>(0,jsx_runtime.jsxs)(Flex.A,{alignItems:"flex-end",width:"100%",flexDirection:"column",children:[(0,jsx_runtime.jsxs)(ActionsMenu.Ay,{mb:"r",children:[(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"https://orchestrated.io/",children:"Open details page"}),(0,jsx_runtime.jsx)(react_router_dom.Kd,{children:(0,jsx_runtime.jsx)(ActionsMenu.WE,{as:react_router_dom.N_,to:"/",children:"Edit"})}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{onClick:(0,dist.XI)("clicked"),children:"Remove"})]}),(0,jsx_runtime.jsxs)(ActionsMenu.Ay,{direction:"bottom-start",menuWidth:"200px",customTriggerComponent:(0,jsx_runtime.jsxs)(Button.Ay,{variant:"ghost",type:"button",iconRight:!0,small:!0,children:["Contact via...",(0,jsx_runtime.jsx)(Icon.A,{icon:["fas","chevron-down"]})]}),children:[(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"Email"}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"Phone"}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"MS Teams"}),(0,jsx_runtime.jsx)(ActionsMenu.WE,{href:"#",children:"Slack"})]})]});keepInViewExample.storyName="Keep In View Example",defaultActionsMenu.__docgenInfo={description:"",methods:[],displayName:"defaultActionsMenu"},leftOffsetActionsMenu.__docgenInfo={description:"",methods:[],displayName:"leftOffsetActionsMenu"},advancedActionsMenu.__docgenInfo={description:"",methods:[],displayName:"advancedActionsMenu"},customActionsMenu.__docgenInfo={description:"",methods:[],displayName:"customActionsMenu"},textButtonActionsMenu.__docgenInfo={description:"",methods:[],displayName:"textButtonActionsMenu"},keepInViewExample.__docgenInfo={description:"",methods:[],displayName:"keepInViewExample"};const __namedExportsOrder=["defaultActionsMenu","leftOffsetActionsMenu","advancedActionsMenu","customActionsMenu","textButtonActionsMenu","keepInViewExample"];defaultActionsMenu.parameters={...defaultActionsMenu.parameters,docs:{...defaultActionsMenu.parameters?.docs,source:{originalSource:'() => <ActionsMenu>\n    <ActionsMenuItem href="https://orchestrated.io/">\n      Open details page\n    </ActionsMenuItem>\n    <BrowserRouter>\n      <ActionsMenuItem as={Link} to="/">\n        Edit\n      </ActionsMenuItem>\n    </BrowserRouter>\n    <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>\n  </ActionsMenu>',...defaultActionsMenu.parameters?.docs?.source}}},leftOffsetActionsMenu.parameters={...leftOffsetActionsMenu.parameters,docs:{...leftOffsetActionsMenu.parameters?.docs,source:{originalSource:'() => <Flex justifyContent="flex-end">\n    <ActionsMenu ariaLabel="Options Menu" direction="left-start">\n      <ActionsMenuItem href="https://orchestrated.io/">\n        Open details page\n      </ActionsMenuItem>\n      <BrowserRouter>\n        <ActionsMenuItem as={Link} to="/">\n          Edit\n        </ActionsMenuItem>\n      </BrowserRouter>\n      <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>\n    </ActionsMenu>\n  </Flex>',...leftOffsetActionsMenu.parameters?.docs?.source}}},advancedActionsMenu.parameters={...advancedActionsMenu.parameters,docs:{...advancedActionsMenu.parameters?.docs,source:{originalSource:'() => {\n  const ref = React.createRef(null);\n  const closeMenu = () => {\n    if (ref.current) {\n      ref.current.closeMenu();\n    }\n  };\n  return <Flex justifyContent="flex-end">\n      <ActionsMenu ref={ref} direction="left-start" className="ignore-onclickoutside" customTriggerComponent={<Button variant="default" iconOnly type="button" width="30px" height="30px">\n            <Icon icon={["fas", "pen"]} size="sm" />\n          </Button>} closeOnClick={false}>\n        <MenuItems closeMenu={closeMenu} reasons={Reasons} />\n      </ActionsMenu>\n    </Flex>;\n}',...advancedActionsMenu.parameters?.docs?.source}}},customActionsMenu.parameters={...customActionsMenu.parameters,docs:{...customActionsMenu.parameters?.docs,source:{originalSource:'() => {\n  const AdvancedActionsMenu = () => {\n    const [toggleState, setToggle] = useState(false);\n    const menuItemsRef = useRef(null);\n    const closeMenu = () => {\n      setToggle(false);\n    };\n    const onToggle = e => {\n      e.stopPropagation();\n      setToggle(!toggleState);\n    };\n    return <div>\n        <Flex justifyContent="flex-end">\n          <ActionsMenuBody toggleState={toggleState} onToggle={onToggle} direction="left-start" customTriggerComponent={<Button variant="danger" iconOnly type="button" width="30px" height="30px">\n                <Icon icon={["fas", "times"]} />\n              </Button>}>\n            <MenuItems ref={menuItemsRef} closeMenu={closeMenu} reasons={Reasons} />\n          </ActionsMenuBody>\n        </Flex>\n      </div>;\n  };\n  return <AdvancedActionsMenu />;\n}',...customActionsMenu.parameters?.docs?.source}}},textButtonActionsMenu.parameters={...textButtonActionsMenu.parameters,docs:{...textButtonActionsMenu.parameters?.docs,source:{originalSource:'() => {\n  const TextButtonActionsMenu = () => {\n    const [toggleState, setToggle] = useState(false);\n    const menuItemsRef = useRef(null);\n    const closeMenu = () => {\n      setToggle(false);\n    };\n    const resetAndCloseMenu = () => {\n      if (menuItemsRef.current) {\n        menuItemsRef.current.reset();\n      }\n      closeMenu();\n    };\n    const menuRef = useOnclickOutside(resetAndCloseMenu, {\n      disabled: !toggleState\n    });\n    const onToggle = e => {\n      e.stopPropagation();\n      setToggle(!toggleState);\n    };\n    return <div ref={menuRef}>\n        <ActionsMenuBody toggleState={toggleState} onToggle={onToggle} menuWidth="120px" direction="bottom-start" customTriggerComponent={<Button variant="ghost" type="button" iconRight small>\n              Contact via...\n              <Icon icon={["fas", "chevron-down"]} />\n            </Button>}>\n          <ActionsMenuItem href="#">Email</ActionsMenuItem>\n          <ActionsMenuItem href="#">Phone</ActionsMenuItem>\n          <ActionsMenuItem href="#">MS Teams</ActionsMenuItem>\n          <ActionsMenuItem href="#">Slack</ActionsMenuItem>\n        </ActionsMenuBody>\n      </div>;\n  };\n  return <TextButtonActionsMenu />;\n}',...textButtonActionsMenu.parameters?.docs?.source}}},keepInViewExample.parameters={...keepInViewExample.parameters,docs:{...keepInViewExample.parameters?.docs,source:{originalSource:'() => <Flex alignItems="flex-end" width="100%" flexDirection="column">\n    <ActionsMenu mb="r">\n      <ActionsMenuItem href="https://orchestrated.io/">\n        Open details page\n      </ActionsMenuItem>\n      <BrowserRouter>\n        <ActionsMenuItem as={Link} to="/">\n          Edit\n        </ActionsMenuItem>\n      </BrowserRouter>\n      <ActionsMenuItem onClick={action("clicked")}>Remove</ActionsMenuItem>\n    </ActionsMenu>\n    <ActionsMenu direction="bottom-start" menuWidth="200px" customTriggerComponent={<Button variant="ghost" type="button" iconRight small>\n          Contact via...\n          <Icon icon={["fas", "chevron-down"]} />\n        </Button>}>\n      <ActionsMenuItem href="#">Email</ActionsMenuItem>\n      <ActionsMenuItem href="#">Phone</ActionsMenuItem>\n      <ActionsMenuItem href="#">MS Teams</ActionsMenuItem>\n      <ActionsMenuItem href="#">Slack</ActionsMenuItem>\n    </ActionsMenu>\n  </Flex>',...keepInViewExample.parameters?.docs?.source}}}}}]);