"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[59244],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),k=a,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},86658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Interaction Recorder \u4ea4\u4e92\u8bb0\u5f55",sidebar_position:20,tags:["interaction"]},i="Interaction Recorder",l={unversionedId:"patches/Interaction/Interaction Recorder",id:"patches/Interaction/Interaction Recorder",title:"Interaction Recorder \u4ea4\u4e92\u8bb0\u5f55",description:"Interaction Recorder",source:"@site/docs/patches/Interaction/Interaction Recorder.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Interaction Recorder",permalink:"/OrigamiStudio/docs/patches/Interaction/Interaction Recorder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Interaction Recorder.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1662015759,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",sidebarPosition:20,frontMatter:{title:"Interaction Recorder \u4ea4\u4e92\u8bb0\u5f55",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Drag Scale Rotate",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Scale Rotate"},next:{title:"Long Press Pro \u957f\u6309",permalink:"/OrigamiStudio/docs/patches/Interaction/Long Press Pro"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:4},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Record \u5f55\u5236",id:"record-\u5f55\u5236",level:4},{value:"Playback \u56de\u653e",id:"playback-\u56de\u653e",level:4},{value:"Recording \u8bb0\u5f55",id:"recording-\u8bb0\u5f55",level:4},{value:"Load \u52a0\u8f7d",id:"load-\u52a0\u8f7d",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Status \u72b6\u6001",id:"status-\u72b6\u6001",level:4},{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:4},{value:"Tap \u89e6\u6478",id:"tap-\u89e6\u6478",level:4},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:4},{value:"Force \u529b\u5ea6",id:"force-\u529b\u5ea6",level:4},{value:"Recording \u8bb0\u5f55",id:"recording-\u8bb0\u5f55-1",level:4}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interaction-recorder"},"Interaction Recorder"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Interaction Recorder"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Layer ",(0,a.kt)("span",null,"tap")),(0,a.kt)("li",null,"Enable ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Record ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Playback ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Recording ",(0,a.kt)("span",null,"...")),(0,a.kt)("li",null,"Load")),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Status ",(0,a.kt)("span",{className:"patch-color-preview status"})),(0,a.kt)("li",null,"Down ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Tap ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Position ",(0,a.kt)("small",null," X ",(0,a.kt)("span",null,"150")," Y ",(0,a.kt)("span",null,"0"))),(0,a.kt)("li",null,"Force ",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"Recording ",(0,a.kt)("span",null,"[...]"))))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,a.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("h4",{id:"record-\u5f55\u5236"},"Record \u5f55\u5236"),(0,a.kt)("h4",{id:"playback-\u56de\u653e"},"Playback \u56de\u653e"),(0,a.kt)("h4",{id:"recording-\u8bb0\u5f55"},"Recording \u8bb0\u5f55"),(0,a.kt)("h4",{id:"load-\u52a0\u8f7d"},"Load \u52a0\u8f7d")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"status-\u72b6\u6001"},"Status \u72b6\u6001"),(0,a.kt)("h4",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,a.kt)("h4",{id:"tap-\u89e6\u6478"},"Tap \u89e6\u6478"),(0,a.kt)("h4",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,a.kt)("h4",{id:"force-\u529b\u5ea6"},"Force \u529b\u5ea6"),(0,a.kt)("h4",{id:"recording-\u8bb0\u5f55-1"},"Recording \u8bb0\u5f55"))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);