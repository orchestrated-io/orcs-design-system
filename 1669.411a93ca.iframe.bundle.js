/*! For license information please see 1669.411a93ca.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[1669],{"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}},"./node_modules/focus-trap-react/dist/focus-trap-react.js":(module,__unused_webpack_exports,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var React=__webpack_require__("./node_modules/react/index.js"),PropTypes=__webpack_require__("./node_modules/prop-types/index.js"),createFocusTrap=__webpack_require__("./node_modules/focus-trap/dist/focus-trap.esm.js").createFocusTrap,isFocusable=__webpack_require__("./node_modules/tabbable/dist/index.esm.js").isFocusable,FocusTrap=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(FocusTrap,_React$Component);var _super=_createSuper(FocusTrap);function FocusTrap(props){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FocusTrap),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this,props)),"getNodeForOption",(function(optionName){var _this$internalOptions,optionValue=null!==(_this$internalOptions=this.internalOptions[optionName])&&void 0!==_this$internalOptions?_this$internalOptions:this.originalOptions[optionName];if("function"==typeof optionValue){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];optionValue=optionValue.apply(void 0,params)}if(!0===optionValue&&(optionValue=void 0),!optionValue){if(void 0===optionValue||!1===optionValue)return optionValue;throw new Error("`".concat(optionName,"` was specified but was not a node, or did not return a node"))}var _this$getDocument,node=optionValue;if("string"==typeof optionValue&&!(node=null===(_this$getDocument=this.getDocument())||void 0===_this$getDocument?void 0:_this$getDocument.querySelector(optionValue)))throw new Error("`".concat(optionName,"` as selector refers to no known node"));return node})),_this.handleDeactivate=_this.handleDeactivate.bind(_assertThisInitialized(_this)),_this.handlePostDeactivate=_this.handlePostDeactivate.bind(_assertThisInitialized(_this)),_this.handleClickOutsideDeactivates=_this.handleClickOutsideDeactivates.bind(_assertThisInitialized(_this)),_this.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:_this.handleDeactivate,onPostDeactivate:_this.handlePostDeactivate,clickOutsideDeactivates:_this.handleClickOutsideDeactivates},_this.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var focusTrapOptions=props.focusTrapOptions;for(var optionName in focusTrapOptions)Object.prototype.hasOwnProperty.call(focusTrapOptions,optionName)&&("returnFocusOnDeactivate"!==optionName&&"onDeactivate"!==optionName&&"onPostDeactivate"!==optionName&&"checkCanReturnFocus"!==optionName&&"clickOutsideDeactivates"!==optionName?_this.internalOptions[optionName]=focusTrapOptions[optionName]:_this.originalOptions[optionName]=focusTrapOptions[optionName]);return _this.outsideClick=null,_this.focusTrapElements=props.containerElements||[],_this.updatePreviousElement(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FocusTrap,[{key:"getDocument",value:function getDocument(){return this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0)}},{key:"getReturnFocusNode",value:function getReturnFocusNode(){var node=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return node||!1!==node&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function updatePreviousElement(){var currentDocument=this.getDocument();currentDocument&&(this.previouslyFocusedElement=currentDocument.activeElement)}},{key:"deactivateTrap",value:function deactivateTrap(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function handleClickOutsideDeactivates(event){var allowDeactivation="function"==typeof this.originalOptions.clickOutsideDeactivates?this.originalOptions.clickOutsideDeactivates.call(null,event):this.originalOptions.clickOutsideDeactivates;return allowDeactivation&&(this.outsideClick={target:event.target,allowDeactivation}),allowDeactivation}},{key:"handleDeactivate",value:function handleDeactivate(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function handlePostDeactivate(){var _this2=this,finishDeactivation=function finishDeactivation(){var returnFocusNode=_this2.getReturnFocusNode(),canReturnFocus=!(!_this2.originalOptions.returnFocusOnDeactivate||null==returnFocusNode||!returnFocusNode.focus||_this2.outsideClick&&(!_this2.outsideClick.allowDeactivation||isFocusable(_this2.outsideClick.target,_this2.internalOptions.tabbableOptions))),_this2$internalOption=_this2.internalOptions.preventScroll,preventScroll=void 0!==_this2$internalOption&&_this2$internalOption;canReturnFocus&&returnFocusNode.focus({preventScroll}),_this2.originalOptions.onPostDeactivate&&_this2.originalOptions.onPostDeactivate.call(null),_this2.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(finishDeactivation,finishDeactivation):finishDeactivation()}},{key:"setupFocusTrap",value:function setupFocusTrap(){this.focusTrap?this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()):this.focusTrapElements.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}},{key:"componentDidMount",value:function componentDidMount(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.focusTrap){prevProps.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var hasActivated=!prevProps.active&&this.props.active,hasDeactivated=prevProps.active&&!this.props.active,hasPaused=!prevProps.paused&&this.props.paused,hasUnpaused=prevProps.paused&&!this.props.paused;if(hasActivated&&(this.updatePreviousElement(),this.focusTrap.activate()),hasDeactivated)return void this.deactivateTrap();hasPaused&&this.focusTrap.pause(),hasUnpaused&&this.focusTrap.unpause()}else prevProps.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.deactivateTrap()}},{key:"render",value:function render(){var _this3=this,child=this.props.children?React.Children.only(this.props.children):void 0;if(child){if(child.type&&child.type===React.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return React.cloneElement(child,{ref:function callbackRef(element){var containerElements=_this3.props.containerElements;child&&("function"==typeof child.ref?child.ref(element):child.ref&&(child.ref.current=element)),_this3.focusTrapElements=containerElements||[element]}})}return null}}]),FocusTrap}(React.Component),ElementType="undefined"==typeof Element?Function:Element;FocusTrap.propTypes={active:PropTypes.bool,paused:PropTypes.bool,focusTrapOptions:PropTypes.shape({document:PropTypes.object,onActivate:PropTypes.func,onPostActivate:PropTypes.func,checkCanFocusTrap:PropTypes.func,onPause:PropTypes.func,onPostPause:PropTypes.func,onUnpause:PropTypes.func,onPostUnpause:PropTypes.func,onDeactivate:PropTypes.func,onPostDeactivate:PropTypes.func,checkCanReturnFocus:PropTypes.func,initialFocus:PropTypes.oneOfType([PropTypes.instanceOf(ElementType),PropTypes.string,PropTypes.bool,PropTypes.func]),fallbackFocus:PropTypes.oneOfType([PropTypes.instanceOf(ElementType),PropTypes.string,PropTypes.func]),escapeDeactivates:PropTypes.oneOfType([PropTypes.bool,PropTypes.func]),clickOutsideDeactivates:PropTypes.oneOfType([PropTypes.bool,PropTypes.func]),returnFocusOnDeactivate:PropTypes.bool,setReturnFocus:PropTypes.oneOfType([PropTypes.instanceOf(ElementType),PropTypes.string,PropTypes.bool,PropTypes.func]),allowOutsideClick:PropTypes.oneOfType([PropTypes.bool,PropTypes.func]),preventScroll:PropTypes.bool,tabbableOptions:PropTypes.shape({displayCheck:PropTypes.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:PropTypes.oneOfType([PropTypes.bool,PropTypes.func])}),trapStack:PropTypes.array,isKeyForward:PropTypes.func,isKeyBackward:PropTypes.func}),containerElements:PropTypes.arrayOf(PropTypes.instanceOf(ElementType)),children:PropTypes.oneOfType([PropTypes.element,PropTypes.instanceOf(ElementType)])},FocusTrap.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:createFocusTrap},module.exports=FocusTrap},"./node_modules/focus-trap/dist/focus-trap.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{createFocusTrap:()=>createFocusTrap});var tabbable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tabbable/dist/index.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var activeFocusTraps_activateTrap=function activateTrap(trapStack,trap){if(trapStack.length>0){var activeTrap=trapStack[trapStack.length-1];activeTrap!==trap&&activeTrap.pause()}var trapIndex=trapStack.indexOf(trap);-1===trapIndex||trapStack.splice(trapIndex,1),trapStack.push(trap)},activeFocusTraps_deactivateTrap=function deactivateTrap(trapStack,trap){var trapIndex=trapStack.indexOf(trap);-1!==trapIndex&&trapStack.splice(trapIndex,1),trapStack.length>0&&trapStack[trapStack.length-1].unpause()},isTabEvent=function isTabEvent(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},isKeyForward=function isKeyForward(e){return isTabEvent(e)&&!e.shiftKey},isKeyBackward=function isKeyBackward(e){return isTabEvent(e)&&e.shiftKey},delay=function delay(fn){return setTimeout(fn,0)},findIndex=function findIndex(arr,fn){var idx=-1;return arr.every((function(value,i){return!fn(value)||(idx=i,!1)})),idx},valueOrHandler=function valueOrHandler(value){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];return"function"==typeof value?value.apply(void 0,params):value},getActualTarget=function getActualTarget(event){return event.target.shadowRoot&&"function"==typeof event.composedPath?event.composedPath()[0]:event.target},internalTrapStack=[],createFocusTrap=function createFocusTrap(elements,userOptions){var trap,doc=(null==userOptions?void 0:userOptions.document)||document,trapStack=(null==userOptions?void 0:userOptions.trapStack)||internalTrapStack,config=_objectSpread2({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward,isKeyBackward},userOptions),state={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},getOption=function getOption(configOverrideOptions,optionName,configOptionName){return configOverrideOptions&&void 0!==configOverrideOptions[optionName]?configOverrideOptions[optionName]:config[configOptionName||optionName]},findContainerIndex=function findContainerIndex(element,event){var composedPath="function"==typeof(null==event?void 0:event.composedPath)?event.composedPath():void 0;return state.containerGroups.findIndex((function(_ref){var container=_ref.container,tabbableNodes=_ref.tabbableNodes;return container.contains(element)||(null==composedPath?void 0:composedPath.includes(container))||tabbableNodes.find((function(node){return node===element}))}))},getNodeForOption=function getNodeForOption(optionName){var optionValue=config[optionName];if("function"==typeof optionValue){for(var _len2=arguments.length,params=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)params[_key2-1]=arguments[_key2];optionValue=optionValue.apply(void 0,params)}if(!0===optionValue&&(optionValue=void 0),!optionValue){if(void 0===optionValue||!1===optionValue)return optionValue;throw new Error("`".concat(optionName,"` was specified but was not a node, or did not return a node"))}var node=optionValue;if("string"==typeof optionValue&&!(node=doc.querySelector(optionValue)))throw new Error("`".concat(optionName,"` as selector refers to no known node"));return node},getInitialFocusNode=function getInitialFocusNode(){var node=getNodeForOption("initialFocus");if(!1===node)return!1;if(void 0===node||!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(node,config.tabbableOptions))if(findContainerIndex(doc.activeElement)>=0)node=doc.activeElement;else{var firstTabbableGroup=state.tabbableGroups[0];node=firstTabbableGroup&&firstTabbableGroup.firstTabbableNode||getNodeForOption("fallbackFocus")}if(!node)throw new Error("Your focus-trap needs to have at least one focusable element");return node},updateTabbableNodes=function updateTabbableNodes(){if(state.containerGroups=state.containers.map((function(container){var tabbableNodes=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.tabbable)(container,config.tabbableOptions),focusableNodes=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.focusable)(container,config.tabbableOptions),firstTabbableNode=tabbableNodes.length>0?tabbableNodes[0]:void 0,lastTabbableNode=tabbableNodes.length>0?tabbableNodes[tabbableNodes.length-1]:void 0,firstDomTabbableNode=focusableNodes.find((function(node){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node)})),lastDomTabbableNode=focusableNodes.slice().reverse().find((function(node){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node)})),posTabIndexesFound=!!tabbableNodes.find((function(node){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(node)>0}));return{container,tabbableNodes,focusableNodes,posTabIndexesFound,firstTabbableNode,lastTabbableNode,firstDomTabbableNode,lastDomTabbableNode,nextTabbableNode:function nextTabbableNode(node){var forward=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],nodeIdx=tabbableNodes.indexOf(node);return nodeIdx<0?forward?focusableNodes.slice(focusableNodes.indexOf(node)+1).find((function(el){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(el)})):focusableNodes.slice(0,focusableNodes.indexOf(node)).reverse().find((function(el){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(el)})):tabbableNodes[nodeIdx+(forward?1:-1)]}}})),state.tabbableGroups=state.containerGroups.filter((function(group){return group.tabbableNodes.length>0})),state.tabbableGroups.length<=0&&!getNodeForOption("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(state.containerGroups.find((function(g){return g.posTabIndexesFound}))&&state.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},getActiveElement=function getActiveElement(el){var activeElement=el.activeElement;if(activeElement)return activeElement.shadowRoot&&null!==activeElement.shadowRoot.activeElement?getActiveElement(activeElement.shadowRoot):activeElement},tryFocus=function tryFocus(node){!1!==node&&node!==getActiveElement(document)&&(node&&node.focus?(node.focus({preventScroll:!!config.preventScroll}),state.mostRecentlyFocusedNode=node,function isSelectableInput(node){return node.tagName&&"input"===node.tagName.toLowerCase()&&"function"==typeof node.select}(node)&&node.select()):tryFocus(getInitialFocusNode()))},getReturnFocusNode=function getReturnFocusNode(previousActiveElement){var node=getNodeForOption("setReturnFocus",previousActiveElement);return node||!1!==node&&previousActiveElement},findNextNavNode=function findNextNavNode(_ref2){var target=_ref2.target,event=_ref2.event,_ref2$isBackward=_ref2.isBackward,isBackward=void 0!==_ref2$isBackward&&_ref2$isBackward;target=target||getActualTarget(event),updateTabbableNodes();var destinationNode=null;if(state.tabbableGroups.length>0){var containerIndex=findContainerIndex(target,event),containerGroup=containerIndex>=0?state.containerGroups[containerIndex]:void 0;if(containerIndex<0)destinationNode=isBackward?state.tabbableGroups[state.tabbableGroups.length-1].lastTabbableNode:state.tabbableGroups[0].firstTabbableNode;else if(isBackward){var startOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref3){var firstTabbableNode=_ref3.firstTabbableNode;return target===firstTabbableNode}));if(startOfGroupIndex<0&&(containerGroup.container===target||(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target,config.tabbableOptions)&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target,!1))&&(startOfGroupIndex=containerIndex),startOfGroupIndex>=0){var destinationGroupIndex=0===startOfGroupIndex?state.tabbableGroups.length-1:startOfGroupIndex-1,destinationGroup=state.tabbableGroups[destinationGroupIndex];destinationNode=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target)>=0?destinationGroup.lastTabbableNode:destinationGroup.lastDomTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target,!1))}else{var lastOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref4){var lastTabbableNode=_ref4.lastTabbableNode;return target===lastTabbableNode}));if(lastOfGroupIndex<0&&(containerGroup.container===target||(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target,config.tabbableOptions)&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target))&&(lastOfGroupIndex=containerIndex),lastOfGroupIndex>=0){var _destinationGroupIndex=lastOfGroupIndex===state.tabbableGroups.length-1?0:lastOfGroupIndex+1,_destinationGroup=state.tabbableGroups[_destinationGroupIndex];destinationNode=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target)>=0?_destinationGroup.firstTabbableNode:_destinationGroup.firstDomTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target))}}else destinationNode=getNodeForOption("fallbackFocus");return destinationNode},checkPointerDown=function checkPointerDown(e){var target=getActualTarget(e);findContainerIndex(target,e)>=0||(valueOrHandler(config.clickOutsideDeactivates,e)?trap.deactivate({returnFocus:config.returnFocusOnDeactivate}):valueOrHandler(config.allowOutsideClick,e)||e.preventDefault())},checkFocusIn=function checkFocusIn(event){var target=getActualTarget(event),targetContained=findContainerIndex(target,event)>=0;if(targetContained||target instanceof Document)targetContained&&(state.mostRecentlyFocusedNode=target);else{var nextNode;event.stopImmediatePropagation();var navAcrossContainers=!0;if(state.mostRecentlyFocusedNode)if((0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(state.mostRecentlyFocusedNode)>0){var mruContainerIdx=findContainerIndex(state.mostRecentlyFocusedNode),tabbableNodes=state.containerGroups[mruContainerIdx].tabbableNodes;if(tabbableNodes.length>0){var mruTabIdx=tabbableNodes.findIndex((function(node){return node===state.mostRecentlyFocusedNode}));mruTabIdx>=0&&(config.isKeyForward(state.recentNavEvent)?mruTabIdx+1<tabbableNodes.length&&(nextNode=tabbableNodes[mruTabIdx+1],navAcrossContainers=!1):mruTabIdx-1>=0&&(nextNode=tabbableNodes[mruTabIdx-1],navAcrossContainers=!1))}}else state.containerGroups.some((function(g){return g.tabbableNodes.some((function(n){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(n)>0}))}))||(navAcrossContainers=!1);else navAcrossContainers=!1;navAcrossContainers&&(nextNode=findNextNavNode({target:state.mostRecentlyFocusedNode,isBackward:config.isKeyBackward(state.recentNavEvent)})),tryFocus(nextNode||(state.mostRecentlyFocusedNode||getInitialFocusNode()))}state.recentNavEvent=void 0},checkKey=function checkKey(event){if(function isEscapeEvent(e){return"Escape"===(null==e?void 0:e.key)||"Esc"===(null==e?void 0:e.key)||27===(null==e?void 0:e.keyCode)}(event)&&!1!==valueOrHandler(config.escapeDeactivates,event))return event.preventDefault(),void trap.deactivate();(config.isKeyForward(event)||config.isKeyBackward(event))&&function checkKeyNav(event){var isBackward=arguments.length>1&&void 0!==arguments[1]&&arguments[1];state.recentNavEvent=event;var destinationNode=findNextNavNode({event,isBackward});destinationNode&&(isTabEvent(event)&&event.preventDefault(),tryFocus(destinationNode))}(event,config.isKeyBackward(event))},checkClick=function checkClick(e){var target=getActualTarget(e);findContainerIndex(target,e)>=0||valueOrHandler(config.clickOutsideDeactivates,e)||valueOrHandler(config.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},addListeners=function addListeners(){if(state.active)return activeFocusTraps_activateTrap(trapStack,trap),state.delayInitialFocusTimer=config.delayInitialFocus?delay((function(){tryFocus(getInitialFocusNode())})):tryFocus(getInitialFocusNode()),doc.addEventListener("focusin",checkFocusIn,!0),doc.addEventListener("mousedown",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("touchstart",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("click",checkClick,{capture:!0,passive:!1}),doc.addEventListener("keydown",checkKey,{capture:!0,passive:!1}),trap},removeListeners=function removeListeners(){if(state.active)return doc.removeEventListener("focusin",checkFocusIn,!0),doc.removeEventListener("mousedown",checkPointerDown,!0),doc.removeEventListener("touchstart",checkPointerDown,!0),doc.removeEventListener("click",checkClick,!0),doc.removeEventListener("keydown",checkKey,!0),trap},mutationObserver="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function checkDomRemoval(mutations){mutations.some((function(mutation){return Array.from(mutation.removedNodes).some((function(node){return node===state.mostRecentlyFocusedNode}))}))&&tryFocus(getInitialFocusNode())})):void 0,updateObservedNodes=function updateObservedNodes(){mutationObserver&&(mutationObserver.disconnect(),state.active&&!state.paused&&state.containers.map((function(container){mutationObserver.observe(container,{subtree:!0,childList:!0})})))};return(trap={get active(){return state.active},get paused(){return state.paused},activate:function activate(activateOptions){if(state.active)return this;var onActivate=getOption(activateOptions,"onActivate"),onPostActivate=getOption(activateOptions,"onPostActivate"),checkCanFocusTrap=getOption(activateOptions,"checkCanFocusTrap");checkCanFocusTrap||updateTabbableNodes(),state.active=!0,state.paused=!1,state.nodeFocusedBeforeActivation=doc.activeElement,null==onActivate||onActivate();var finishActivation=function finishActivation(){checkCanFocusTrap&&updateTabbableNodes(),addListeners(),updateObservedNodes(),null==onPostActivate||onPostActivate()};return checkCanFocusTrap?(checkCanFocusTrap(state.containers.concat()).then(finishActivation,finishActivation),this):(finishActivation(),this)},deactivate:function deactivate(deactivateOptions){if(!state.active)return this;var options=_objectSpread2({onDeactivate:config.onDeactivate,onPostDeactivate:config.onPostDeactivate,checkCanReturnFocus:config.checkCanReturnFocus},deactivateOptions);clearTimeout(state.delayInitialFocusTimer),state.delayInitialFocusTimer=void 0,removeListeners(),state.active=!1,state.paused=!1,updateObservedNodes(),activeFocusTraps_deactivateTrap(trapStack,trap);var onDeactivate=getOption(options,"onDeactivate"),onPostDeactivate=getOption(options,"onPostDeactivate"),checkCanReturnFocus=getOption(options,"checkCanReturnFocus"),returnFocus=getOption(options,"returnFocus","returnFocusOnDeactivate");null==onDeactivate||onDeactivate();var finishDeactivation=function finishDeactivation(){delay((function(){returnFocus&&tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)),null==onPostDeactivate||onPostDeactivate()}))};return returnFocus&&checkCanReturnFocus?(checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation,finishDeactivation),this):(finishDeactivation(),this)},pause:function pause(pauseOptions){if(state.paused||!state.active)return this;var onPause=getOption(pauseOptions,"onPause"),onPostPause=getOption(pauseOptions,"onPostPause");return state.paused=!0,null==onPause||onPause(),removeListeners(),updateObservedNodes(),null==onPostPause||onPostPause(),this},unpause:function unpause(unpauseOptions){if(!state.paused||!state.active)return this;var onUnpause=getOption(unpauseOptions,"onUnpause"),onPostUnpause=getOption(unpauseOptions,"onPostUnpause");return state.paused=!1,null==onUnpause||onUnpause(),updateTabbableNodes(),addListeners(),updateObservedNodes(),null==onPostUnpause||onPostUnpause(),this},updateContainerElements:function updateContainerElements(containerElements){var elementsAsArray=[].concat(containerElements).filter(Boolean);return state.containers=elementsAsArray.map((function(element){return"string"==typeof element?doc.querySelector(element):element})),state.active&&updateTabbableNodes(),updateObservedNodes(),this}}).updateContainerElements(elements),trap}}}]);