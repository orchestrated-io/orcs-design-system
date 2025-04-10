"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[7721],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)};var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?esm_browser_v4():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./lib/components/Flex/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Flex,Z:()=>FlexItem});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FlexStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_1__.pn,styled_system__WEBPACK_IMPORTED_MODULE_1__.yW,styled_system__WEBPACK_IMPORTED_MODULE_1__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_1__.G1),FlexWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.Ay,displayName:"Flex__FlexWrapper",componentId:"sc-1f3kfw7-0"}).attrs((props=>({"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null})))((props=>(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({boxSizing:"border-box",gap:props.gap})),FlexStyles),FlexItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)("div").withConfig({displayName:"Flex__FlexItem",componentId:"sc-1f3kfw7-1"})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.AH)({boxSizing:"border-box"}),FlexStyles);function Flex(_ref){let{children,gap,theme,...props}=_ref;const component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FlexWrapper,{gap,...props,children});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FlexWrapper,{...props,children})}):theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.NP,{theme,children:component}):component}Flex.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,gap:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.Ay.layout,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.Ay.flexbox},Flex.defaultProps={display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"stretch"},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},gap:{description:"",type:{name:"string"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},gap:{description:"",type:{name:"string"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]}},"./lib/components/Spacer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpacerBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Spacer__SpacerBox",componentId:"sc-1acikjz-0"})([""," "," line-height:0;"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),Spacer=_ref=>{let{children,theme,...props}=_ref;const clones=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).map(((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacerBox,{...props,children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child)},index)));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:clones}):clones};Spacer.propTypes={..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.layout},Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]};const __WEBPACK_DEFAULT_EXPORT__=Spacer;Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]}},"./lib/components/Button/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,alternateColours:()=>alternateColours,alternateSize:()=>alternateSize,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultButton:()=>defaultButton,disabled:()=>disabled,fullWidth:()=>fullWidth,ghost:()=>ghost,iconOnly:()=>iconOnly,loading:()=>loading,variants:()=>variants,withIcon:()=>withIcon});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./lib/components/Icon/index.js"),_Spacer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Spacer/index.js"),_Flex__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/components/Flex/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Buttons/Button",component:___WEBPACK_IMPORTED_MODULE_3__.Ay},defaultButton=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{children:"Default button"});defaultButton.storyName="Default button";const variants=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"3",children:Object.keys(___WEBPACK_IMPORTED_MODULE_3__.Nh).map((variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{large:!0,variant,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:variant},variant)))}),alternateSize=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{small:!0,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Small button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{large:!0,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Large button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{height:"xxxl",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Specified height button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),width:"100px",children:"A multiple-line button with specified width"})]});alternateSize.storyName="Alternate sizes";const alternateColours=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"success",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Success/green button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"danger",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Danger/red button"})]});alternateColours.storyName="Alternate colours";const ghost=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{small:!0,variant:"ghost",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Small ghost button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"ghost",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Regular ghost button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{large:!0,variant:"ghost",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),children:"Large ghost button"})]});ghost.storyName="Ghost style";const fullWidth=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{fullWidth:!0,children:"Full width button"});fullWidth.storyName="Full width";const disabled=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{disabled:!0,children:"Disabled button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"disabled",children:"Alternate way of making button disabled"})]});disabled.storyName="Disabled state";const loading=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{isLoading:!0,children:"Loading..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{isLoading:!0,variant:"success",children:"Saving..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{isLoading:!0,variant:"danger",children:"Deleting..."})]});loading.storyName="Loading state";const withIcon=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{iconLeft:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["fas","user-plus"]}),"Left aligned icon"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{iconRight:!0,children:["Right aligned icon",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["fas","download"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{leftIcon:["fas","star"],children:"Left icon magic!"})]});withIcon.storyName="With icon";const iconOnly=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{small:!0,iconOnly:!0,p:"s",ariaLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["fas","download"]}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["far","calendar-alt"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{iconOnly:!0,p:"s",ariaLabel:"Show calendar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["far","calendar-alt"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{large:!0,iconOnly:!0,p:"s",ariaLabel:"Show calendar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["far","calendar-alt"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_6__.A,{alignItems:"center",mt:"r",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{mr:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{iconOnly:!0,variant:"success",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),width:"33px",height:"32px",ariaLabel:"Confirm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["fas","check"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{iconOnly:!0,variant:"successAlternate",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),width:"33px",height:"32px",ariaLabel:"Confirm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["fas","check"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{iconOnly:!0,variant:"danger",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),width:"33px",height:"32px",ariaLabel:"Cancel",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["fas","times"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Ay,{iconOnly:!0,variant:"dangerAlternate",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("clicked"),width:"33px",height:"32px",ariaLabel:"Cancel",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:["fas","times"]})})]})})]});iconOnly.storyName="Icon only",defaultButton.__docgenInfo={description:"",methods:[],displayName:"defaultButton"},variants.__docgenInfo={description:"",methods:[],displayName:"variants"},alternateSize.__docgenInfo={description:"",methods:[],displayName:"alternateSize"},alternateColours.__docgenInfo={description:"",methods:[],displayName:"alternateColours"},ghost.__docgenInfo={description:"",methods:[],displayName:"ghost"},fullWidth.__docgenInfo={description:"",methods:[],displayName:"fullWidth"},disabled.__docgenInfo={description:"",methods:[],displayName:"disabled"},loading.__docgenInfo={description:"",methods:[],displayName:"loading"},withIcon.__docgenInfo={description:"",methods:[],displayName:"withIcon"},iconOnly.__docgenInfo={description:"",methods:[],displayName:"iconOnly"};const __namedExportsOrder=["defaultButton","variants","alternateSize","alternateColours","ghost","fullWidth","disabled","loading","withIcon","iconOnly"];defaultButton.parameters={...defaultButton.parameters,docs:{...defaultButton.parameters?.docs,source:{originalSource:"() => <Button>Default button</Button>",...defaultButton.parameters?.docs?.source}}},variants.parameters={...variants.parameters,docs:{...variants.parameters?.docs,source:{originalSource:'() => <Spacer my="3">\n    {Object.keys(VARIANT_COLORS).map(variant => <Button large key={variant} variant={variant} onClick={action("clicked")}>\n        {variant}\n      </Button>)}\n  </Spacer>',...variants.parameters?.docs?.source}}},alternateSize.parameters={...alternateSize.parameters,docs:{...alternateSize.parameters?.docs,source:{originalSource:'() => <Spacer my="3">\n    <Button small onClick={action("clicked")}>\n      Small button\n    </Button>\n    <Button large onClick={action("clicked")}>\n      Large button\n    </Button>\n    <Button height="xxxl" onClick={action("clicked")}>\n      Specified height button\n    </Button>\n    <Button onClick={action("clicked")} width="100px">\n      A multiple-line button with specified width\n    </Button>\n  </Spacer>',...alternateSize.parameters?.docs?.source}}},alternateColours.parameters={...alternateColours.parameters,docs:{...alternateColours.parameters?.docs,source:{originalSource:'() => <Spacer my="3">\n    <Button variant="success" onClick={action("clicked")}>\n      Success/green button\n    </Button>\n    <Button variant="danger" onClick={action("clicked")}>\n      Danger/red button\n    </Button>\n  </Spacer>',...alternateColours.parameters?.docs?.source}}},ghost.parameters={...ghost.parameters,docs:{...ghost.parameters?.docs,source:{originalSource:'() => <Spacer my="3">\n    <Button small variant="ghost" onClick={action("clicked")}>\n      Small ghost button\n    </Button>\n    <Button variant="ghost" onClick={action("clicked")}>\n      Regular ghost button\n    </Button>\n    <Button large variant="ghost" onClick={action("clicked")}>\n      Large ghost button\n    </Button>\n  </Spacer>',...ghost.parameters?.docs?.source}}},fullWidth.parameters={...fullWidth.parameters,docs:{...fullWidth.parameters?.docs,source:{originalSource:"() => <Button fullWidth>Full width button</Button>",...fullWidth.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:'() => <Spacer my="r">\n    <Button disabled>Disabled button</Button>\n    <Button variant="disabled">Alternate way of making button disabled</Button>\n  </Spacer>',...disabled.parameters?.docs?.source}}},loading.parameters={...loading.parameters,docs:{...loading.parameters?.docs,source:{originalSource:'() => <Spacer my="3">\n    <Button isLoading>Loading...</Button>\n    <Button isLoading variant="success">\n      Saving...\n    </Button>\n    <Button isLoading variant="danger">\n      Deleting...\n    </Button>\n  </Spacer>',...loading.parameters?.docs?.source}}},withIcon.parameters={...withIcon.parameters,docs:{...withIcon.parameters?.docs,source:{originalSource:'() => <Spacer my="3">\n    <Button iconLeft>\n      <Icon icon={["fas", "user-plus"]} />\n      Left aligned icon\n    </Button>\n    <Button iconRight>\n      Right aligned icon\n      <Icon icon={["fas", "download"]} />\n    </Button>\n    <Button leftIcon={["fas", "star"]}>Left icon magic!</Button>\n  </Spacer>',...withIcon.parameters?.docs?.source}}},iconOnly.parameters={...iconOnly.parameters,docs:{...iconOnly.parameters?.docs,source:{originalSource:'() => <Spacer my="3">\n    <Button small iconOnly p="s" ariaLabel={<Icon icon={["fas", "download"]} />}>\n      <Icon icon={["far", "calendar-alt"]} />\n    </Button>\n    <Button iconOnly p="s" ariaLabel="Show calendar">\n      <Icon icon={["far", "calendar-alt"]} />\n    </Button>\n    <Button large iconOnly p="s" ariaLabel="Show calendar">\n      <Icon icon={["far", "calendar-alt"]} />\n    </Button>\n    <Flex alignItems="center" mt="r">\n      <Spacer mr="r">\n        <Button iconOnly variant="success" onClick={action("clicked")} width="33px" height="32px" ariaLabel="Confirm">\n          <Icon icon={["fas", "check"]} />\n        </Button>\n        <Button iconOnly variant="successAlternate" onClick={action("clicked")} width="33px" height="32px" ariaLabel="Confirm">\n          <Icon icon={["fas", "check"]} />\n        </Button>\n        <Button iconOnly variant="danger" onClick={action("clicked")} width="33px" height="32px" ariaLabel="Cancel">\n          <Icon icon={["fas", "times"]} />\n        </Button>\n        <Button iconOnly variant="dangerAlternate" onClick={action("clicked")} width="33px" height="32px" ariaLabel="Cancel">\n          <Icon icon={["fas", "times"]} />\n        </Button>\n      </Spacer>\n    </Flex>\n  </Spacer>',...iconOnly.parameters?.docs?.source}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}}}]);