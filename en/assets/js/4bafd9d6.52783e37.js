"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[19729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},55756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Touches Recorder \u89e6\u6478\u8bb0\u5f55",sidebar_position:20,tags:["interaction"]},c="Touches Recorder",i={unversionedId:"patches/Interaction/Touches Recorder",id:"patches/Interaction/Touches Recorder",title:"Touches Recorder \u89e6\u6478\u8bb0\u5f55",description:"Touches Recorder",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Interaction/Touches Recorder.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Touches Recorder",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Touches Recorder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Touches Recorder.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/en/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:20,frontMatter:{title:"Touches Recorder \u89e6\u6478\u8bb0\u5f55",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Touch Over \u63a5\u8fd1",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Touch Over"},next:{title:"Trackpad \u89e6\u6478\u677f",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Trackpad"}},l={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Record \u5f55\u5236",id:"record-\u5f55\u5236",level:4},{value:"Playback \u56de\u653e",id:"playback-\u56de\u653e",level:4},{value:"Recording \u8bb0\u5f55",id:"recording-\u8bb0\u5f55",level:4},{value:"Load \u52a0\u8f7d",id:"load-\u52a0\u8f7d",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Status \u72b6\u6001",id:"status-\u72b6\u6001",level:4},{value:"Touches \u89e6\u6478",id:"touches-\u89e6\u6478",level:4},{value:"Recoding \u8bb0\u5f55",id:"recoding-\u8bb0\u5f55",level:4}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"touches-recorder"},"Touches Recorder"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Touches Recorder"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Record ",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,"Playback ",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,"Recording ",(0,o.kt)("span",null,"...")),(0,o.kt)("li",null,"Load ",(0,o.kt)("span",{className:"checkbox-off"}))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Status ",(0,o.kt)("span",{className:"patch-color-preview status"})),(0,o.kt)("li",null,"Touches",(0,o.kt)("span",null,"[ ]")," "),(0,o.kt)("li",null,"Recording ",(0,o.kt)("span",null,"[...]")," ")))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"record-\u5f55\u5236"},"Record \u5f55\u5236"),(0,o.kt)("h4",{id:"playback-\u56de\u653e"},"Playback \u56de\u653e"),(0,o.kt)("h4",{id:"recording-\u8bb0\u5f55"},"Recording \u8bb0\u5f55"),(0,o.kt)("h4",{id:"load-\u52a0\u8f7d"},"Load \u52a0\u8f7d")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"status-\u72b6\u6001"},"Status \u72b6\u6001"),(0,o.kt)("h4",{id:"touches-\u89e6\u6478"},"Touches \u89e6\u6478"),(0,o.kt)("h4",{id:"recoding-\u8bb0\u5f55"},"Recoding \u8bb0\u5f55"))),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);