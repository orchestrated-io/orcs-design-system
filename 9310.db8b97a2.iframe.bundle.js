"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[9310],{"./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UE:()=>floating_ui_dom_arrow,ll:()=>autoUpdate,rD:()=>floating_ui_dom_computePosition,UU:()=>floating_ui_dom_flip,cY:()=>floating_ui_dom_offset,BN:()=>floating_ui_dom_shift});const floating_ui_utils_min=Math.min,floating_ui_utils_max=Math.max,round=Math.round,floor=Math.floor,createCoords=v=>({x:v,y:v}),oppositeSideMap={left:"right",right:"left",bottom:"top",top:"bottom"},oppositeAlignmentMap={start:"end",end:"start"};function clamp(start,value,end){return floating_ui_utils_max(start,floating_ui_utils_min(value,end))}function floating_ui_utils_evaluate(value,param){return"function"==typeof value?value(param):value}function floating_ui_utils_getSide(placement){return placement.split("-")[0]}function floating_ui_utils_getAlignment(placement){return placement.split("-")[1]}function floating_ui_utils_getOppositeAxis(axis){return"x"===axis?"y":"x"}function getAxisLength(axis){return"y"===axis?"height":"width"}function floating_ui_utils_getSideAxis(placement){return["top","bottom"].includes(floating_ui_utils_getSide(placement))?"y":"x"}function getAlignmentAxis(placement){return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement))}function floating_ui_utils_getOppositeAlignmentPlacement(placement){return placement.replace(/start|end/g,(alignment=>oppositeAlignmentMap[alignment]))}function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,(side=>oppositeSideMap[side]))}function floating_ui_utils_getPaddingObject(padding){return"number"!=typeof padding?function expandPaddingObject(padding){return{top:0,right:0,bottom:0,left:0,...padding}}(padding):{top:padding,right:padding,bottom:padding,left:padding}}function floating_ui_utils_rectToClientRect(rect){const{x,y,width,height}=rect;return{width,height,top:y,left:x,right:x+width,bottom:y+height,x,y}}function computeCoordsFromPlacement(_ref,placement,rtl){let{reference,floating}=_ref;const sideAxis=floating_ui_utils_getSideAxis(placement),alignmentAxis=getAlignmentAxis(placement),alignLength=getAxisLength(alignmentAxis),side=floating_ui_utils_getSide(placement),isVertical="y"===sideAxis,commonX=reference.x+reference.width/2-floating.width/2,commonY=reference.y+reference.height/2-floating.height/2,commonAlign=reference[alignLength]/2-floating[alignLength]/2;let coords;switch(side){case"top":coords={x:commonX,y:reference.y-floating.height};break;case"bottom":coords={x:commonX,y:reference.y+reference.height};break;case"right":coords={x:reference.x+reference.width,y:commonY};break;case"left":coords={x:reference.x-floating.width,y:commonY};break;default:coords={x:reference.x,y:reference.y}}switch(floating_ui_utils_getAlignment(placement)){case"start":coords[alignmentAxis]-=commonAlign*(rtl&&isVertical?-1:1);break;case"end":coords[alignmentAxis]+=commonAlign*(rtl&&isVertical?-1:1)}return coords}async function detectOverflow(state,options){var _await$platform$isEle;void 0===options&&(options={});const{x,y,platform,rects,elements,strategy}=state,{boundary="clippingAncestors",rootBoundary="viewport",elementContext="floating",altBoundary=!1,padding=0}=floating_ui_utils_evaluate(options,state),paddingObject=floating_ui_utils_getPaddingObject(padding),element=elements[altBoundary?"floating"===elementContext?"reference":"floating":elementContext],clippingClientRect=floating_ui_utils_rectToClientRect(await platform.getClippingRect({element:null==(_await$platform$isEle=await(null==platform.isElement?void 0:platform.isElement(element)))||_await$platform$isEle?element:element.contextElement||await(null==platform.getDocumentElement?void 0:platform.getDocumentElement(elements.floating)),boundary,rootBoundary,strategy})),rect="floating"===elementContext?{x,y,width:rects.floating.width,height:rects.floating.height}:rects.reference,offsetParent=await(null==platform.getOffsetParent?void 0:platform.getOffsetParent(elements.floating)),offsetScale=await(null==platform.isElement?void 0:platform.isElement(offsetParent))&&await(null==platform.getScale?void 0:platform.getScale(offsetParent))||{x:1,y:1},elementClientRect=floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect?await platform.convertOffsetParentRelativeRectToViewportRelativeRect({elements,rect,offsetParent,strategy}):rect);return{top:(clippingClientRect.top-elementClientRect.top+paddingObject.top)/offsetScale.y,bottom:(elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom)/offsetScale.y,left:(clippingClientRect.left-elementClientRect.left+paddingObject.left)/offsetScale.x,right:(elementClientRect.right-clippingClientRect.right+paddingObject.right)/offsetScale.x}}var floating_ui_utils_dom=__webpack_require__("./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");function getCssDimensions(element){const css=(0,floating_ui_utils_dom.L9)(element);let width=parseFloat(css.width)||0,height=parseFloat(css.height)||0;const hasOffset=(0,floating_ui_utils_dom.sb)(element),offsetWidth=hasOffset?element.offsetWidth:width,offsetHeight=hasOffset?element.offsetHeight:height,shouldFallback=round(width)!==offsetWidth||round(height)!==offsetHeight;return shouldFallback&&(width=offsetWidth,height=offsetHeight),{width,height,$:shouldFallback}}function unwrapElement(element){return(0,floating_ui_utils_dom.vq)(element)?element:element.contextElement}function getScale(element){const domElement=unwrapElement(element);if(!(0,floating_ui_utils_dom.sb)(domElement))return createCoords(1);const rect=domElement.getBoundingClientRect(),{width,height,$}=getCssDimensions(domElement);let x=($?round(rect.width):rect.width)/width,y=($?round(rect.height):rect.height)/height;return x&&Number.isFinite(x)||(x=1),y&&Number.isFinite(y)||(y=1),{x,y}}const noOffsets=createCoords(0);function getVisualOffsets(element){const win=(0,floating_ui_utils_dom.zk)(element);return(0,floating_ui_utils_dom.Tc)()&&win.visualViewport?{x:win.visualViewport.offsetLeft,y:win.visualViewport.offsetTop}:noOffsets}function getBoundingClientRect(element,includeScale,isFixedStrategy,offsetParent){void 0===includeScale&&(includeScale=!1),void 0===isFixedStrategy&&(isFixedStrategy=!1);const clientRect=element.getBoundingClientRect(),domElement=unwrapElement(element);let scale=createCoords(1);includeScale&&(offsetParent?(0,floating_ui_utils_dom.vq)(offsetParent)&&(scale=getScale(offsetParent)):scale=getScale(element));const visualOffsets=function shouldAddVisualOffsets(element,isFixed,floatingOffsetParent){return void 0===isFixed&&(isFixed=!1),!(!floatingOffsetParent||isFixed&&floatingOffsetParent!==(0,floating_ui_utils_dom.zk)(element))&&isFixed}(domElement,isFixedStrategy,offsetParent)?getVisualOffsets(domElement):createCoords(0);let x=(clientRect.left+visualOffsets.x)/scale.x,y=(clientRect.top+visualOffsets.y)/scale.y,width=clientRect.width/scale.x,height=clientRect.height/scale.y;if(domElement){const win=(0,floating_ui_utils_dom.zk)(domElement),offsetWin=offsetParent&&(0,floating_ui_utils_dom.vq)(offsetParent)?(0,floating_ui_utils_dom.zk)(offsetParent):offsetParent;let currentWin=win,currentIFrame=(0,floating_ui_utils_dom._m)(currentWin);for(;currentIFrame&&offsetParent&&offsetWin!==currentWin;){const iframeScale=getScale(currentIFrame),iframeRect=currentIFrame.getBoundingClientRect(),css=(0,floating_ui_utils_dom.L9)(currentIFrame),left=iframeRect.left+(currentIFrame.clientLeft+parseFloat(css.paddingLeft))*iframeScale.x,top=iframeRect.top+(currentIFrame.clientTop+parseFloat(css.paddingTop))*iframeScale.y;x*=iframeScale.x,y*=iframeScale.y,width*=iframeScale.x,height*=iframeScale.y,x+=left,y+=top,currentWin=(0,floating_ui_utils_dom.zk)(currentIFrame),currentIFrame=(0,floating_ui_utils_dom._m)(currentWin)}}return floating_ui_utils_rectToClientRect({width,height,x,y})}function getWindowScrollBarX(element){return getBoundingClientRect((0,floating_ui_utils_dom.ep)(element)).left+(0,floating_ui_utils_dom.CP)(element).scrollLeft}function getClientRectFromClippingAncestor(element,clippingAncestor,strategy){let rect;if("viewport"===clippingAncestor)rect=function getViewportRect(element,strategy){const win=(0,floating_ui_utils_dom.zk)(element),html=(0,floating_ui_utils_dom.ep)(element),visualViewport=win.visualViewport;let width=html.clientWidth,height=html.clientHeight,x=0,y=0;if(visualViewport){width=visualViewport.width,height=visualViewport.height;const visualViewportBased=(0,floating_ui_utils_dom.Tc)();(!visualViewportBased||visualViewportBased&&"fixed"===strategy)&&(x=visualViewport.offsetLeft,y=visualViewport.offsetTop)}return{width,height,x,y}}(element,strategy);else if("document"===clippingAncestor)rect=function getDocumentRect(element){const html=(0,floating_ui_utils_dom.ep)(element),scroll=(0,floating_ui_utils_dom.CP)(element),body=element.ownerDocument.body,width=floating_ui_utils_max(html.scrollWidth,html.clientWidth,body.scrollWidth,body.clientWidth),height=floating_ui_utils_max(html.scrollHeight,html.clientHeight,body.scrollHeight,body.clientHeight);let x=-scroll.scrollLeft+getWindowScrollBarX(element);const y=-scroll.scrollTop;return"rtl"===(0,floating_ui_utils_dom.L9)(body).direction&&(x+=floating_ui_utils_max(html.clientWidth,body.clientWidth)-width),{width,height,x,y}}((0,floating_ui_utils_dom.ep)(element));else if((0,floating_ui_utils_dom.vq)(clippingAncestor))rect=function getInnerBoundingClientRect(element,strategy){const clientRect=getBoundingClientRect(element,!0,"fixed"===strategy),top=clientRect.top+element.clientTop,left=clientRect.left+element.clientLeft,scale=(0,floating_ui_utils_dom.sb)(element)?getScale(element):createCoords(1);return{width:element.clientWidth*scale.x,height:element.clientHeight*scale.y,x:left*scale.x,y:top*scale.y}}(clippingAncestor,strategy);else{const visualOffsets=getVisualOffsets(element);rect={...clippingAncestor,x:clippingAncestor.x-visualOffsets.x,y:clippingAncestor.y-visualOffsets.y}}return floating_ui_utils_rectToClientRect(rect)}function hasFixedPositionAncestor(element,stopNode){const parentNode=(0,floating_ui_utils_dom.$4)(element);return!(parentNode===stopNode||!(0,floating_ui_utils_dom.vq)(parentNode)||(0,floating_ui_utils_dom.eu)(parentNode))&&("fixed"===(0,floating_ui_utils_dom.L9)(parentNode).position||hasFixedPositionAncestor(parentNode,stopNode))}function getRectRelativeToOffsetParent(element,offsetParent,strategy){const isOffsetParentAnElement=(0,floating_ui_utils_dom.sb)(offsetParent),documentElement=(0,floating_ui_utils_dom.ep)(offsetParent),isFixed="fixed"===strategy,rect=getBoundingClientRect(element,!0,isFixed,offsetParent);let scroll={scrollLeft:0,scrollTop:0};const offsets=createCoords(0);if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)if(("body"!==(0,floating_ui_utils_dom.mq)(offsetParent)||(0,floating_ui_utils_dom.ZU)(documentElement))&&(scroll=(0,floating_ui_utils_dom.CP)(offsetParent)),isOffsetParentAnElement){const offsetRect=getBoundingClientRect(offsetParent,!0,isFixed,offsetParent);offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}else documentElement&&(offsets.x=getWindowScrollBarX(documentElement));return{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height}}function isStaticPositioned(element){return"static"===(0,floating_ui_utils_dom.L9)(element).position}function getTrueOffsetParent(element,polyfill){return(0,floating_ui_utils_dom.sb)(element)&&"fixed"!==(0,floating_ui_utils_dom.L9)(element).position?polyfill?polyfill(element):element.offsetParent:null}function getOffsetParent(element,polyfill){const win=(0,floating_ui_utils_dom.zk)(element);if((0,floating_ui_utils_dom.Tf)(element))return win;if(!(0,floating_ui_utils_dom.sb)(element)){let svgOffsetParent=(0,floating_ui_utils_dom.$4)(element);for(;svgOffsetParent&&!(0,floating_ui_utils_dom.eu)(svgOffsetParent);){if((0,floating_ui_utils_dom.vq)(svgOffsetParent)&&!isStaticPositioned(svgOffsetParent))return svgOffsetParent;svgOffsetParent=(0,floating_ui_utils_dom.$4)(svgOffsetParent)}return win}let offsetParent=getTrueOffsetParent(element,polyfill);for(;offsetParent&&(0,floating_ui_utils_dom.Lv)(offsetParent)&&isStaticPositioned(offsetParent);)offsetParent=getTrueOffsetParent(offsetParent,polyfill);return offsetParent&&(0,floating_ui_utils_dom.eu)(offsetParent)&&isStaticPositioned(offsetParent)&&!(0,floating_ui_utils_dom.sQ)(offsetParent)?win:offsetParent||(0,floating_ui_utils_dom.gJ)(element)||win}const platform={convertOffsetParentRelativeRectToViewportRelativeRect:function convertOffsetParentRelativeRectToViewportRelativeRect(_ref){let{elements,rect,offsetParent,strategy}=_ref;const isFixed="fixed"===strategy,documentElement=(0,floating_ui_utils_dom.ep)(offsetParent),topLayer=!!elements&&(0,floating_ui_utils_dom.Tf)(elements.floating);if(offsetParent===documentElement||topLayer&&isFixed)return rect;let scroll={scrollLeft:0,scrollTop:0},scale=createCoords(1);const offsets=createCoords(0),isOffsetParentAnElement=(0,floating_ui_utils_dom.sb)(offsetParent);if((isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)&&(("body"!==(0,floating_ui_utils_dom.mq)(offsetParent)||(0,floating_ui_utils_dom.ZU)(documentElement))&&(scroll=(0,floating_ui_utils_dom.CP)(offsetParent)),(0,floating_ui_utils_dom.sb)(offsetParent))){const offsetRect=getBoundingClientRect(offsetParent);scale=getScale(offsetParent),offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}return{width:rect.width*scale.x,height:rect.height*scale.y,x:rect.x*scale.x-scroll.scrollLeft*scale.x+offsets.x,y:rect.y*scale.y-scroll.scrollTop*scale.y+offsets.y}},getDocumentElement:floating_ui_utils_dom.ep,getClippingRect:function getClippingRect(_ref){let{element,boundary,rootBoundary,strategy}=_ref;const clippingAncestors=[..."clippingAncestors"===boundary?(0,floating_ui_utils_dom.Tf)(element)?[]:function getClippingElementAncestors(element,cache){const cachedResult=cache.get(element);if(cachedResult)return cachedResult;let result=(0,floating_ui_utils_dom.v9)(element,[],!1).filter((el=>(0,floating_ui_utils_dom.vq)(el)&&"body"!==(0,floating_ui_utils_dom.mq)(el))),currentContainingBlockComputedStyle=null;const elementIsFixed="fixed"===(0,floating_ui_utils_dom.L9)(element).position;let currentNode=elementIsFixed?(0,floating_ui_utils_dom.$4)(element):element;for(;(0,floating_ui_utils_dom.vq)(currentNode)&&!(0,floating_ui_utils_dom.eu)(currentNode);){const computedStyle=(0,floating_ui_utils_dom.L9)(currentNode),currentNodeIsContaining=(0,floating_ui_utils_dom.sQ)(currentNode);currentNodeIsContaining||"fixed"!==computedStyle.position||(currentContainingBlockComputedStyle=null),(elementIsFixed?!currentNodeIsContaining&&!currentContainingBlockComputedStyle:!currentNodeIsContaining&&"static"===computedStyle.position&&currentContainingBlockComputedStyle&&["absolute","fixed"].includes(currentContainingBlockComputedStyle.position)||(0,floating_ui_utils_dom.ZU)(currentNode)&&!currentNodeIsContaining&&hasFixedPositionAncestor(element,currentNode))?result=result.filter((ancestor=>ancestor!==currentNode)):currentContainingBlockComputedStyle=computedStyle,currentNode=(0,floating_ui_utils_dom.$4)(currentNode)}return cache.set(element,result),result}(element,this._c):[].concat(boundary),rootBoundary],firstClippingAncestor=clippingAncestors[0],clippingRect=clippingAncestors.reduce(((accRect,clippingAncestor)=>{const rect=getClientRectFromClippingAncestor(element,clippingAncestor,strategy);return accRect.top=floating_ui_utils_max(rect.top,accRect.top),accRect.right=floating_ui_utils_min(rect.right,accRect.right),accRect.bottom=floating_ui_utils_min(rect.bottom,accRect.bottom),accRect.left=floating_ui_utils_max(rect.left,accRect.left),accRect}),getClientRectFromClippingAncestor(element,firstClippingAncestor,strategy));return{width:clippingRect.right-clippingRect.left,height:clippingRect.bottom-clippingRect.top,x:clippingRect.left,y:clippingRect.top}},getOffsetParent,getElementRects:async function(data){const getOffsetParentFn=this.getOffsetParent||getOffsetParent,getDimensionsFn=this.getDimensions,floatingDimensions=await getDimensionsFn(data.floating);return{reference:getRectRelativeToOffsetParent(data.reference,await getOffsetParentFn(data.floating),data.strategy),floating:{x:0,y:0,width:floatingDimensions.width,height:floatingDimensions.height}}},getClientRects:function getClientRects(element){return Array.from(element.getClientRects())},getDimensions:function getDimensions(element){const{width,height}=getCssDimensions(element);return{width,height}},getScale,isElement:floating_ui_utils_dom.vq,isRTL:function isRTL(element){return"rtl"===(0,floating_ui_utils_dom.L9)(element).direction}};function autoUpdate(reference,floating,update,options){void 0===options&&(options={});const{ancestorScroll=!0,ancestorResize=!0,elementResize="function"==typeof ResizeObserver,layoutShift="function"==typeof IntersectionObserver,animationFrame=!1}=options,referenceEl=unwrapElement(reference),ancestors=ancestorScroll||ancestorResize?[...referenceEl?(0,floating_ui_utils_dom.v9)(referenceEl):[],...(0,floating_ui_utils_dom.v9)(floating)]:[];ancestors.forEach((ancestor=>{ancestorScroll&&ancestor.addEventListener("scroll",update,{passive:!0}),ancestorResize&&ancestor.addEventListener("resize",update)}));const cleanupIo=referenceEl&&layoutShift?function observeMove(element,onMove){let timeoutId,io=null;const root=(0,floating_ui_utils_dom.ep)(element);function cleanup(){var _io;clearTimeout(timeoutId),null==(_io=io)||_io.disconnect(),io=null}return function refresh(skip,threshold){void 0===skip&&(skip=!1),void 0===threshold&&(threshold=1),cleanup();const{left,top,width,height}=element.getBoundingClientRect();if(skip||onMove(),!width||!height)return;const options={rootMargin:-floor(top)+"px "+-floor(root.clientWidth-(left+width))+"px "+-floor(root.clientHeight-(top+height))+"px "+-floor(left)+"px",threshold:floating_ui_utils_max(0,floating_ui_utils_min(1,threshold))||1};let isFirstUpdate=!0;function handleObserve(entries){const ratio=entries[0].intersectionRatio;if(ratio!==threshold){if(!isFirstUpdate)return refresh();ratio?refresh(!1,ratio):timeoutId=setTimeout((()=>{refresh(!1,1e-7)}),1e3)}isFirstUpdate=!1}try{io=new IntersectionObserver(handleObserve,{...options,root:root.ownerDocument})}catch(e){io=new IntersectionObserver(handleObserve,options)}io.observe(element)}(!0),cleanup}(referenceEl,update):null;let frameId,reobserveFrame=-1,resizeObserver=null;elementResize&&(resizeObserver=new ResizeObserver((_ref=>{let[firstEntry]=_ref;firstEntry&&firstEntry.target===referenceEl&&resizeObserver&&(resizeObserver.unobserve(floating),cancelAnimationFrame(reobserveFrame),reobserveFrame=requestAnimationFrame((()=>{var _resizeObserver;null==(_resizeObserver=resizeObserver)||_resizeObserver.observe(floating)}))),update()})),referenceEl&&!animationFrame&&resizeObserver.observe(referenceEl),resizeObserver.observe(floating));let prevRefRect=animationFrame?getBoundingClientRect(reference):null;return animationFrame&&function frameLoop(){const nextRefRect=getBoundingClientRect(reference);!prevRefRect||nextRefRect.x===prevRefRect.x&&nextRefRect.y===prevRefRect.y&&nextRefRect.width===prevRefRect.width&&nextRefRect.height===prevRefRect.height||update();prevRefRect=nextRefRect,frameId=requestAnimationFrame(frameLoop)}(),update(),()=>{var _resizeObserver2;ancestors.forEach((ancestor=>{ancestorScroll&&ancestor.removeEventListener("scroll",update),ancestorResize&&ancestor.removeEventListener("resize",update)})),null==cleanupIo||cleanupIo(),null==(_resizeObserver2=resizeObserver)||_resizeObserver2.disconnect(),resizeObserver=null,animationFrame&&cancelAnimationFrame(frameId)}}const floating_ui_dom_offset=function(options){return void 0===options&&(options=0),{name:"offset",options,async fn(state){var _middlewareData$offse,_middlewareData$arrow;const{x,y,placement,middlewareData}=state,diffCoords=await async function convertValueToCoords(state,options){const{placement,platform,elements}=state,rtl=await(null==platform.isRTL?void 0:platform.isRTL(elements.floating)),side=floating_ui_utils_getSide(placement),alignment=floating_ui_utils_getAlignment(placement),isVertical="y"===floating_ui_utils_getSideAxis(placement),mainAxisMulti=["left","top"].includes(side)?-1:1,crossAxisMulti=rtl&&isVertical?-1:1,rawValue=floating_ui_utils_evaluate(options,state);let{mainAxis,crossAxis,alignmentAxis}="number"==typeof rawValue?{mainAxis:rawValue,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...rawValue};return alignment&&"number"==typeof alignmentAxis&&(crossAxis="end"===alignment?-1*alignmentAxis:alignmentAxis),isVertical?{x:crossAxis*crossAxisMulti,y:mainAxis*mainAxisMulti}:{x:mainAxis*mainAxisMulti,y:crossAxis*crossAxisMulti}}(state,options);return placement===(null==(_middlewareData$offse=middlewareData.offset)?void 0:_middlewareData$offse.placement)&&null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset?{}:{x:x+diffCoords.x,y:y+diffCoords.y,data:{...diffCoords,placement}}}}},floating_ui_dom_shift=function(options){return void 0===options&&(options={}),{name:"shift",options,async fn(state){const{x,y,placement}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!1,limiter={fn:_ref=>{let{x,y}=_ref;return{x,y}}},...detectOverflowOptions}=floating_ui_utils_evaluate(options,state),coords={x,y},overflow=await detectOverflow(state,detectOverflowOptions),crossAxis=floating_ui_utils_getSideAxis(floating_ui_utils_getSide(placement)),mainAxis=floating_ui_utils_getOppositeAxis(crossAxis);let mainAxisCoord=coords[mainAxis],crossAxisCoord=coords[crossAxis];if(checkMainAxis){const maxSide="y"===mainAxis?"bottom":"right";mainAxisCoord=clamp(mainAxisCoord+overflow["y"===mainAxis?"top":"left"],mainAxisCoord,mainAxisCoord-overflow[maxSide])}if(checkCrossAxis){const maxSide="y"===crossAxis?"bottom":"right";crossAxisCoord=clamp(crossAxisCoord+overflow["y"===crossAxis?"top":"left"],crossAxisCoord,crossAxisCoord-overflow[maxSide])}const limitedCoords=limiter.fn({...state,[mainAxis]:mainAxisCoord,[crossAxis]:crossAxisCoord});return{...limitedCoords,data:{x:limitedCoords.x-x,y:limitedCoords.y-y}}}}},floating_ui_dom_flip=function(options){return void 0===options&&(options={}),{name:"flip",options,async fn(state){var _middlewareData$arrow,_middlewareData$flip;const{placement,middlewareData,rects,initialPlacement,platform,elements}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!0,fallbackPlacements:specifiedFallbackPlacements,fallbackStrategy="bestFit",fallbackAxisSideDirection="none",flipAlignment=!0,...detectOverflowOptions}=floating_ui_utils_evaluate(options,state);if(null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset)return{};const side=floating_ui_utils_getSide(placement),initialSideAxis=floating_ui_utils_getSideAxis(initialPlacement),isBasePlacement=floating_ui_utils_getSide(initialPlacement)===initialPlacement,rtl=await(null==platform.isRTL?void 0:platform.isRTL(elements.floating)),fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipAlignment?[getOppositePlacement(initialPlacement)]:function getExpandedPlacements(placement){const oppositePlacement=getOppositePlacement(placement);return[floating_ui_utils_getOppositeAlignmentPlacement(placement),oppositePlacement,floating_ui_utils_getOppositeAlignmentPlacement(oppositePlacement)]}(initialPlacement)),hasFallbackAxisSideDirection="none"!==fallbackAxisSideDirection;!specifiedFallbackPlacements&&hasFallbackAxisSideDirection&&fallbackPlacements.push(...function getOppositeAxisPlacements(placement,flipAlignment,direction,rtl){const alignment=floating_ui_utils_getAlignment(placement);let list=function getSideList(side,isStart,rtl){const lr=["left","right"],rl=["right","left"],tb=["top","bottom"],bt=["bottom","top"];switch(side){case"top":case"bottom":return rtl?isStart?rl:lr:isStart?lr:rl;case"left":case"right":return isStart?tb:bt;default:return[]}}(floating_ui_utils_getSide(placement),"start"===direction,rtl);return alignment&&(list=list.map((side=>side+"-"+alignment)),flipAlignment&&(list=list.concat(list.map(floating_ui_utils_getOppositeAlignmentPlacement)))),list}(initialPlacement,flipAlignment,fallbackAxisSideDirection,rtl));const placements=[initialPlacement,...fallbackPlacements],overflow=await detectOverflow(state,detectOverflowOptions),overflows=[];let overflowsData=(null==(_middlewareData$flip=middlewareData.flip)?void 0:_middlewareData$flip.overflows)||[];if(checkMainAxis&&overflows.push(overflow[side]),checkCrossAxis){const sides=function floating_ui_utils_getAlignmentSides(placement,rects,rtl){void 0===rtl&&(rtl=!1);const alignment=floating_ui_utils_getAlignment(placement),alignmentAxis=getAlignmentAxis(placement),length=getAxisLength(alignmentAxis);let mainAlignmentSide="x"===alignmentAxis?alignment===(rtl?"end":"start")?"right":"left":"start"===alignment?"bottom":"top";return rects.reference[length]>rects.floating[length]&&(mainAlignmentSide=getOppositePlacement(mainAlignmentSide)),[mainAlignmentSide,getOppositePlacement(mainAlignmentSide)]}(placement,rects,rtl);overflows.push(overflow[sides[0]],overflow[sides[1]])}if(overflowsData=[...overflowsData,{placement,overflows}],!overflows.every((side=>side<=0))){var _middlewareData$flip2,_overflowsData$filter;const nextIndex=((null==(_middlewareData$flip2=middlewareData.flip)?void 0:_middlewareData$flip2.index)||0)+1,nextPlacement=placements[nextIndex];if(nextPlacement)return{data:{index:nextIndex,overflows:overflowsData},reset:{placement:nextPlacement}};let resetPlacement=null==(_overflowsData$filter=overflowsData.filter((d=>d.overflows[0]<=0)).sort(((a,b)=>a.overflows[1]-b.overflows[1]))[0])?void 0:_overflowsData$filter.placement;if(!resetPlacement)switch(fallbackStrategy){case"bestFit":{var _overflowsData$filter2;const placement=null==(_overflowsData$filter2=overflowsData.filter((d=>{if(hasFallbackAxisSideDirection){const currentSideAxis=floating_ui_utils_getSideAxis(d.placement);return currentSideAxis===initialSideAxis||"y"===currentSideAxis}return!0})).map((d=>[d.placement,d.overflows.filter((overflow=>overflow>0)).reduce(((acc,overflow)=>acc+overflow),0)])).sort(((a,b)=>a[1]-b[1]))[0])?void 0:_overflowsData$filter2[0];placement&&(resetPlacement=placement);break}case"initialPlacement":resetPlacement=initialPlacement}if(placement!==resetPlacement)return{reset:{placement:resetPlacement}}}return{}}}},floating_ui_dom_arrow=options=>({name:"arrow",options,async fn(state){const{x,y,placement,rects,platform,elements,middlewareData}=state,{element,padding=0}=floating_ui_utils_evaluate(options,state)||{};if(null==element)return{};const paddingObject=floating_ui_utils_getPaddingObject(padding),coords={x,y},axis=getAlignmentAxis(placement),length=getAxisLength(axis),arrowDimensions=await platform.getDimensions(element),isYAxis="y"===axis,minProp=isYAxis?"top":"left",maxProp=isYAxis?"bottom":"right",clientProp=isYAxis?"clientHeight":"clientWidth",endDiff=rects.reference[length]+rects.reference[axis]-coords[axis]-rects.floating[length],startDiff=coords[axis]-rects.reference[axis],arrowOffsetParent=await(null==platform.getOffsetParent?void 0:platform.getOffsetParent(element));let clientSize=arrowOffsetParent?arrowOffsetParent[clientProp]:0;clientSize&&await(null==platform.isElement?void 0:platform.isElement(arrowOffsetParent))||(clientSize=elements.floating[clientProp]||rects.floating[length]);const centerToReference=endDiff/2-startDiff/2,largestPossiblePadding=clientSize/2-arrowDimensions[length]/2-1,minPadding=floating_ui_utils_min(paddingObject[minProp],largestPossiblePadding),maxPadding=floating_ui_utils_min(paddingObject[maxProp],largestPossiblePadding),min$1=minPadding,max=clientSize-arrowDimensions[length]-maxPadding,center=clientSize/2-arrowDimensions[length]/2+centerToReference,offset=clamp(min$1,center,max),shouldAddOffset=!middlewareData.arrow&&null!=floating_ui_utils_getAlignment(placement)&&center!==offset&&rects.reference[length]/2-(center<min$1?minPadding:maxPadding)-arrowDimensions[length]/2<0,alignmentOffset=shouldAddOffset?center<min$1?center-min$1:center-max:0;return{[axis]:coords[axis]+alignmentOffset,data:{[axis]:offset,centerOffset:center-offset-alignmentOffset,...shouldAddOffset&&{alignmentOffset}},reset:shouldAddOffset}}}),floating_ui_dom_computePosition=(reference,floating,options)=>{const cache=new Map,mergedOptions={platform,...options},platformWithCache={...mergedOptions.platform,_c:cache};return(async(reference,floating,config)=>{const{placement="bottom",strategy="absolute",middleware=[],platform}=config,validMiddleware=middleware.filter(Boolean),rtl=await(null==platform.isRTL?void 0:platform.isRTL(floating));let rects=await platform.getElementRects({reference,floating,strategy}),{x,y}=computeCoordsFromPlacement(rects,placement,rtl),statefulPlacement=placement,middlewareData={},resetCount=0;for(let i=0;i<validMiddleware.length;i++){const{name,fn}=validMiddleware[i],{x:nextX,y:nextY,data,reset}=await fn({x,y,initialPlacement:placement,placement:statefulPlacement,strategy,middlewareData,rects,platform,elements:{reference,floating}});x=null!=nextX?nextX:x,y=null!=nextY?nextY:y,middlewareData={...middlewareData,[name]:{...middlewareData[name],...data}},reset&&resetCount<=50&&(resetCount++,"object"==typeof reset&&(reset.placement&&(statefulPlacement=reset.placement),reset.rects&&(rects=!0===reset.rects?await platform.getElementRects({reference,floating,strategy}):reset.rects),({x,y}=computeCoordsFromPlacement(rects,statefulPlacement,rtl))),i=-1)}return{x,y,placement:statefulPlacement,strategy,middlewareData}})(reference,floating,{...mergedOptions,platform:platformWithCache})}},"./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getNodeName(node){return isNode(node)?(node.nodeName||"").toLowerCase():"#document"}function getWindow(node){var _node$ownerDocument;return(null==node||null==(_node$ownerDocument=node.ownerDocument)?void 0:_node$ownerDocument.defaultView)||window}function getDocumentElement(node){var _ref;return null==(_ref=(isNode(node)?node.ownerDocument:node.document)||window.document)?void 0:_ref.documentElement}function isNode(value){return value instanceof Node||value instanceof getWindow(value).Node}function isElement(value){return value instanceof Element||value instanceof getWindow(value).Element}function isHTMLElement(value){return value instanceof HTMLElement||value instanceof getWindow(value).HTMLElement}function isShadowRoot(value){return"undefined"!=typeof ShadowRoot&&(value instanceof ShadowRoot||value instanceof getWindow(value).ShadowRoot)}function isOverflowElement(element){const{overflow,overflowX,overflowY,display}=getComputedStyle(element);return/auto|scroll|overlay|hidden|clip/.test(overflow+overflowY+overflowX)&&!["inline","contents"].includes(display)}function isTableElement(element){return["table","td","th"].includes(getNodeName(element))}function isTopLayer(element){return[":popover-open",":modal"].some((selector=>{try{return element.matches(selector)}catch(e){return!1}}))}function isContainingBlock(elementOrCss){const webkit=isWebKit(),css=isElement(elementOrCss)?getComputedStyle(elementOrCss):elementOrCss;return"none"!==css.transform||"none"!==css.perspective||!!css.containerType&&"normal"!==css.containerType||!webkit&&!!css.backdropFilter&&"none"!==css.backdropFilter||!webkit&&!!css.filter&&"none"!==css.filter||["transform","perspective","filter"].some((value=>(css.willChange||"").includes(value)))||["paint","layout","strict","content"].some((value=>(css.contain||"").includes(value)))}function getContainingBlock(element){let currentNode=getParentNode(element);for(;isHTMLElement(currentNode)&&!isLastTraversableNode(currentNode);){if(isContainingBlock(currentNode))return currentNode;if(isTopLayer(currentNode))return null;currentNode=getParentNode(currentNode)}return null}function isWebKit(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(node){return["html","body","#document"].includes(getNodeName(node))}function getComputedStyle(element){return getWindow(element).getComputedStyle(element)}function getNodeScroll(element){return isElement(element)?{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop}:{scrollLeft:element.scrollX,scrollTop:element.scrollY}}function getParentNode(node){if("html"===getNodeName(node))return node;const result=node.assignedSlot||node.parentNode||isShadowRoot(node)&&node.host||getDocumentElement(node);return isShadowRoot(result)?result.host:result}function getNearestOverflowAncestor(node){const parentNode=getParentNode(node);return isLastTraversableNode(parentNode)?node.ownerDocument?node.ownerDocument.body:node.body:isHTMLElement(parentNode)&&isOverflowElement(parentNode)?parentNode:getNearestOverflowAncestor(parentNode)}function getOverflowAncestors(node,list,traverseIframes){var _node$ownerDocument2;void 0===list&&(list=[]),void 0===traverseIframes&&(traverseIframes=!0);const scrollableAncestor=getNearestOverflowAncestor(node),isBody=scrollableAncestor===(null==(_node$ownerDocument2=node.ownerDocument)?void 0:_node$ownerDocument2.body),win=getWindow(scrollableAncestor);if(isBody){const frameElement=getFrameElement(win);return list.concat(win,win.visualViewport||[],isOverflowElement(scrollableAncestor)?scrollableAncestor:[],frameElement&&traverseIframes?getOverflowAncestors(frameElement):[])}return list.concat(scrollableAncestor,getOverflowAncestors(scrollableAncestor,[],traverseIframes))}function getFrameElement(win){return win.parent&&Object.getPrototypeOf(win.parent)?win.frameElement:null}__webpack_require__.d(__webpack_exports__,{$4:()=>getParentNode,CP:()=>getNodeScroll,L9:()=>getComputedStyle,Lv:()=>isTableElement,Ng:()=>isShadowRoot,Tc:()=>isWebKit,Tf:()=>isTopLayer,ZU:()=>isOverflowElement,_m:()=>getFrameElement,ep:()=>getDocumentElement,eu:()=>isLastTraversableNode,gJ:()=>getContainingBlock,mq:()=>getNodeName,sQ:()=>isContainingBlock,sb:()=>isHTMLElement,v9:()=>getOverflowAncestors,vq:()=>isElement,zk:()=>getWindow})},"./node_modules/@styled-system/prop-types/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};const __WEBPACK_DEFAULT_EXPORT__={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.xe.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.yW.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Il.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.pn.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.G1.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.r7.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.i9.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.XC.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.NW.propNames)}}}]);