"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[1729],{"./lib/components/Spacer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpacerBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div.withConfig({displayName:"Spacer__SpacerBox",componentId:"sc-1acikjz-0"})([""," "," line-height:0;"],styled_system__WEBPACK_IMPORTED_MODULE_1__.xe,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp),Spacer=_ref=>{let{children,theme,...props}=_ref;const clones=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).map(((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacerBox,{...props,children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child)},index)));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.NP,{theme,children:clones}):clones};Spacer.propTypes={..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.space,..._styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__.Ay.layout},Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]};const __WEBPACK_DEFAULT_EXPORT__=Spacer;Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]}},"./lib/components/TextArea/TextArea.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,boldLabelTextArea:()=>boldLabelTextArea,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultTextArea:()=>defaultTextArea,disabledTextArea:()=>disabledTextArea,fullWidthTextArea:()=>fullWidthTextArea,invertedTextArea:()=>invertedTextArea,mandatoryTextArea:()=>mandatoryTextArea,sizeTextArea:()=>sizeTextArea,statesTextArea:()=>statesTextArea});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/TextArea/index.js"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Box/index.js"),_Spacer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Spacer/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TextArea",component:___WEBPACK_IMPORTED_MODULE_2__.A,decorators:[storyFn=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{p:"r",children:storyFn()})]},defaultTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{"data-testid":"Test-id",id:"TextArea01",label:"Message",autoFocus:!0});defaultTextArea.storyName="Default";const sizeTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea02",label:"Message",cols:"50",rows:"5"});sizeTextArea.storyName="Size";const fullWidthTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea05",label:"Message",fullWidth:!0});fullWidthTextArea.storyName="Full-width";const boldLabelTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextAreaBold",label:"Message",bold:!0,"data-testid":"test-input"});boldLabelTextArea.storyName="Bold Label";const mandatoryTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextAreaMandatory",label:"Message",mandatory:!0});mandatoryTextArea.storyName="Mandatory";const statesTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea03",label:"Message - invalid message",invalid:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea04",label:"Message",valid:!0})]});statesTextArea.storyName="States";const invertedTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{bg:"greyDarker",p:"r",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Spacer__WEBPACK_IMPORTED_MODULE_4__.A,{my:"r",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea06",label:"Message",inverted:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea07",label:"Message - invalid message",inverted:!0,invalid:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{id:"TextArea08",label:"Message",inverted:!0,valid:!0})]})});invertedTextArea.storyName="Inverted";const disabledTextArea=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{"data-testid":"Test-id",id:"TextArea01",label:"Message",value:"This is uneditable",disabled:!0});disabledTextArea.storyName="Disabled",defaultTextArea.__docgenInfo={description:"",methods:[],displayName:"defaultTextArea"},sizeTextArea.__docgenInfo={description:"",methods:[],displayName:"sizeTextArea"},fullWidthTextArea.__docgenInfo={description:"",methods:[],displayName:"fullWidthTextArea"},boldLabelTextArea.__docgenInfo={description:"",methods:[],displayName:"boldLabelTextArea"},mandatoryTextArea.__docgenInfo={description:"",methods:[],displayName:"mandatoryTextArea"},statesTextArea.__docgenInfo={description:"",methods:[],displayName:"statesTextArea"},invertedTextArea.__docgenInfo={description:"",methods:[],displayName:"invertedTextArea"},disabledTextArea.__docgenInfo={description:"",methods:[],displayName:"disabledTextArea"};const __namedExportsOrder=["defaultTextArea","sizeTextArea","fullWidthTextArea","boldLabelTextArea","mandatoryTextArea","statesTextArea","invertedTextArea","disabledTextArea"];defaultTextArea.parameters={...defaultTextArea.parameters,docs:{...defaultTextArea.parameters?.docs,source:{originalSource:'() => <TextArea data-testid="Test-id" id="TextArea01" label="Message" autoFocus />',...defaultTextArea.parameters?.docs?.source}}},sizeTextArea.parameters={...sizeTextArea.parameters,docs:{...sizeTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextArea02" label="Message" cols="50" rows="5" />',...sizeTextArea.parameters?.docs?.source}}},fullWidthTextArea.parameters={...fullWidthTextArea.parameters,docs:{...fullWidthTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextArea05" label="Message" fullWidth />',...fullWidthTextArea.parameters?.docs?.source}}},boldLabelTextArea.parameters={...boldLabelTextArea.parameters,docs:{...boldLabelTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextAreaBold" label="Message" bold data-testid="test-input" />',...boldLabelTextArea.parameters?.docs?.source}}},mandatoryTextArea.parameters={...mandatoryTextArea.parameters,docs:{...mandatoryTextArea.parameters?.docs,source:{originalSource:'() => <TextArea id="TextAreaMandatory" label="Message" mandatory />',...mandatoryTextArea.parameters?.docs?.source}}},statesTextArea.parameters={...statesTextArea.parameters,docs:{...statesTextArea.parameters?.docs,source:{originalSource:'() => <Spacer my="r">\n    <TextArea id="TextArea03" label="Message - invalid message" invalid />\n    <TextArea id="TextArea04" label="Message" valid />\n  </Spacer>',...statesTextArea.parameters?.docs?.source}}},invertedTextArea.parameters={...invertedTextArea.parameters,docs:{...invertedTextArea.parameters?.docs,source:{originalSource:'() => <Box bg="greyDarker" p="r">\n    <Spacer my="r">\n      <TextArea id="TextArea06" label="Message" inverted />\n      <TextArea id="TextArea07" label="Message - invalid message" inverted invalid />\n      <TextArea id="TextArea08" label="Message" inverted valid />\n    </Spacer>\n  </Box>',...invertedTextArea.parameters?.docs?.source}}},disabledTextArea.parameters={...disabledTextArea.parameters,docs:{...disabledTextArea.parameters?.docs,source:{originalSource:'() => <TextArea data-testid="Test-id" id="TextArea01" label="Message" value="This is uneditable" disabled />',...disabledTextArea.parameters?.docs?.source}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}}}]);