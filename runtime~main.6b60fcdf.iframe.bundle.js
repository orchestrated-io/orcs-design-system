(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({15:"components-Popover-Popover-stories",39:"components-Sidebar-Sidebar-stories",291:"components-Badge-Badge-stories",303:"components-Notification-Notification-stories",463:"components-Button-Button-mdx",669:"components-Checkbox-Checkbox-mdx",880:"Spacing-mdx",1185:"components-Badge-Badge-mdx",1249:"components-Grid-Grid-stories",1413:"components-StatusDot-StatusDot-mdx",1729:"components-TextArea-TextArea-stories",1874:"components-Flex-FlexItem-stories",2079:"components-HeaderSimple-HeaderSimple-stories",2235:"components-Select-Select-mdx",2239:"components-TreeNav-TreeNav-stories",2293:"components-Modal-Modal-mdx",2393:"components-Expandable-Expandable-stories",2513:"components-Card-Card-stories",2573:"components-DatePicker-DatePicker-stories",2669:"components-SideNav-SideNav-mdx",2925:"components-Select-Select-stories",3173:"components-Spacer-Spacer-stories",3223:"components-TextArea-TextArea-mdx",3347:"components-StyledLink-StyledLink-stories",3381:"components-Popover-Popover-mdx",3715:"components-ActionsMenu-ActionsMenu-stories",3901:"components-Icon-Icon-mdx",3945:"components-ButtonGroup-ButtonGroupIteam-mdx",4041:"Colour-mdx",4105:"components-Tabs-Tabs-stories",4391:"components-RadioButton-RadioButton-stories",4453:"components-Notification-Notification-mdx",4607:"components-Modal-Modal-stories",4639:"components-TextInput-TextInput-stories",4797:"components-RadioButton-RadioButton-mdx",4871:"components-Grid-Grid-mdx",4965:"components-Header-Header-mdx",4975:"components-Tabs-Tabs-mdx",5291:"components-DatePicker-DatePicker-mdx",5405:"components-Loading-Loading-mdx",5427:"components-ProgressBar-ProgressBar-stories",5589:"components-Range-Range-mdx",5607:"components-SideNav-SideNav-stories",5823:"components-Divider-Divider-stories",5843:"components-Spacer-Spacer-mdx",6047:"components-StatusDot-StatusDot-stories",6117:"components-Typography-Typography-mdx",6151:"components-Checkbox-Checkbox-stories",6178:"components-ButtonGroup-ButtonGroupItem-stories",6233:"components-ButtonGroup-ButtonGroup-mdx",6497:"components-ActionsMenu-ActionsMenu-mdx",6535:"components-Box-Box-stories",6623:"components-Table-Table-stories",6647:"components-Loading-Loading-stories",6649:"components-Flex-Flex-mdx",6789:"components-HeaderSimple-HeaderSimple-mdx",6807:"components-Avatar-Avatar-stories",7043:"components-Toggle-Toggle-mdx",7061:"components-Toggle-Toggle-stories",7121:"components-StyledLink-StyledLink-mdx",7279:"components-Header-Header-stories",7301:"components-Divider-Divider-mdx",7647:"components-Typography-Typography-stories",7680:"components-Flex-FlexItem-mdx",7721:"components-Button-Button-stories",7807:"components-Expandable-Expandable-mdx",7809:"components-ProgressBar-ProgressBar-mdx",7837:"01-Intro-mdx",8007:"components-Card-Card-mdx",8277:"components-Button-ButtonLink-stories",8311:"components-Icon-Icon-stories",8485:"components-Tag-Tag-mdx",8511:"components-Tag-Tag-stories",8619:"components-Flex-Flex-stories",8621:"components-Sidebar-Sidebar-mdx",8630:"assets-Colour-Colour-stories",8875:"components-ButtonGroup-ButtonGroup-stories",8957:"components-Box-Box-mdx",9045:"components-TreeNav-TreeNav-mdx",9053:"components-Avatar-Avatar-mdx",9173:"components-TextInput-TextInput-mdx",9823:"components-Range-Range-stories"}[chunkId]||chunkId)+"."+{15:"7409faf4",39:"13ba4a1e",291:"33f9583e",303:"bc1ca85f",463:"89fc355b",588:"9d1d7b7d",669:"aa70f8a3",718:"d012629e",880:"002d5672",1185:"ccfd2b96",1249:"071234a2",1413:"68aef540",1669:"411a93ca",1729:"43d4c0ff",1874:"de74cd07",2079:"957b5737",2235:"eb6d0b53",2239:"f88f4140",2293:"3c1875af",2393:"9db4fd8e",2434:"cde47ec1",2461:"d34dda33",2513:"1b31ee4b",2573:"8445c042",2669:"f7528409",2925:"f11750ee",3173:"0030b787",3223:"6786f332",3261:"7c9ff3c5",3347:"bfc54b11",3381:"95408be8",3715:"c2d710a2",3901:"b9e198a5",3945:"febc3a3d",4041:"95279c19",4105:"07293072",4155:"7d2b0fb2",4320:"49140046",4391:"77d3f1d3",4453:"2d5c5675",4607:"3354c7b8",4639:"6c445bea",4797:"dd0fa69b",4871:"c188c8cc",4965:"3122a69b",4975:"fd7cc2fe",5291:"f614a647",5405:"ae60f3c1",5427:"905ececc",5589:"ace3bca3",5607:"3025a778",5751:"a8f63c4a",5781:"5a039361",5823:"40677948",5843:"03805774",5982:"35a47de2",6047:"9deb14a0",6117:"20d67fb0",6151:"882bec37",6178:"43934ff3",6233:"64c8a5f3",6363:"ba89e371",6497:"75f6f2f3",6535:"e25750af",6623:"d1d69bf5",6647:"82c0b144",6649:"a95fa886",6751:"03b7a6e0",6789:"c9f9803d",6807:"342fa31f",7043:"bd972b37",7061:"c912dd08",7121:"4c02ce4c",7279:"c7b7a45d",7301:"345dddfd",7364:"173b1432",7369:"12af6b05",7437:"a010fcd4",7647:"bb156abe",7680:"2633b3a9",7721:"e4e05961",7807:"59095c15",7809:"23da214b",7837:"86aa223b",8007:"1cdc1c5c",8109:"42e43c5a",8240:"8e1f152c",8277:"757d9791",8311:"103a7ac1",8485:"8756aafe",8511:"50cec393",8609:"ea778611",8619:"d2b48a8b",8621:"0266d66a",8630:"3578a9fc",8639:"1ae9c59c",8875:"a5911a48",8957:"0ac5f8fa",9045:"c57bc695",9053:"eaa45f4f",9054:"f7c29d80",9129:"5bcc8ae2",9173:"4bc03857",9310:"db8b97a2",9345:"15270878",9645:"2301ed20",9752:"11b7a865",9823:"3497e683"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>"static/css/"+{2573:"components-DatePicker-DatePicker-stories",5291:"components-DatePicker-DatePicker-mdx"}[chunkId]+"."+{2573:"f5bc1fce",5291:"f5bc1fce"}[chunkId]+".chunk.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="orcs-design-system:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","orcs-design-system:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{if("undefined"!=typeof document){var loadStylesheet=chunkId=>new Promise(((resolve,reject)=>{var href=__webpack_require__.miniCssF(chunkId),fullhref=__webpack_require__.p+href;if(((href,fullhref)=>{for(var existingLinkTags=document.getElementsByTagName("link"),i=0;i<existingLinkTags.length;i++){var dataHref=(tag=existingLinkTags[i]).getAttribute("data-href")||tag.getAttribute("href");if("stylesheet"===tag.rel&&(dataHref===href||dataHref===fullhref))return tag}var existingStyleTags=document.getElementsByTagName("style");for(i=0;i<existingStyleTags.length;i++){var tag;if((dataHref=(tag=existingStyleTags[i]).getAttribute("data-href"))===href||dataHref===fullhref)return tag}})(href,fullhref))return resolve();((chunkId,fullhref,oldTag,resolve,reject)=>{var linkTag=document.createElement("link");linkTag.rel="stylesheet",linkTag.type="text/css",__webpack_require__.nc&&(linkTag.nonce=__webpack_require__.nc),linkTag.onerror=linkTag.onload=event=>{if(linkTag.onerror=linkTag.onload=null,"load"===event.type)resolve();else{var errorType=event&&event.type,realHref=event&&event.target&&event.target.href||fullhref,err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+errorType+": "+realHref+")");err.name="ChunkLoadError",err.code="CSS_CHUNK_LOAD_FAILED",err.type=errorType,err.request=realHref,linkTag.parentNode&&linkTag.parentNode.removeChild(linkTag),reject(err)}},linkTag.href=fullhref,oldTag?oldTag.parentNode.insertBefore(linkTag,oldTag.nextSibling):document.head.appendChild(linkTag)})(chunkId,fullhref,null,resolve,reject)})),installedCssChunks={5354:0};__webpack_require__.f.miniCss=(chunkId,promises)=>{installedCssChunks[chunkId]?promises.push(installedCssChunks[chunkId]):0!==installedCssChunks[chunkId]&&{2573:1,5291:1}[chunkId]&&promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then((()=>{installedCssChunks[chunkId]=0}),(e=>{throw delete installedCssChunks[chunkId],e})))}}})(),(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(2573|5354)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();