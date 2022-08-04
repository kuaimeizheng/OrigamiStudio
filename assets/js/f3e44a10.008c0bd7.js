"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4970],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},71743:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={sidebar_position:20,tags:["interaction"]},u="Touches Recorder",l={unversionedId:"patches/Interaction/Touches Recorder",id:"patches/Interaction/Touches Recorder",title:"Touches Recorder",description:"Touches Recorder",source:"@site/docs/patches/Interaction/Touches Recorder.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Touches Recorder",permalink:"/OrigamiStudio/docs/patches/Interaction/Touches Recorder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Touches Recorder.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1659583634,formattedLastUpdatedAt:"2022\u5e748\u67084\u65e5",sidebarPosition:20,frontMatter:{sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Pinch Zoom",permalink:"/OrigamiStudio/docs/patches/Interaction/Pinch Zoom"},next:{title:"Zoom In Out",permalink:"/OrigamiStudio/docs/patches/Interaction/Zoom In Out"}},s={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Record \u5f55\u5236",id:"record-\u5f55\u5236",level:4},{value:"Playback \u56de\u653e",id:"playback-\u56de\u653e",level:4},{value:"Recording \u8bb0\u5f55",id:"recording-\u8bb0\u5f55",level:4},{value:"Load \u52a0\u8f7d",id:"load-\u52a0\u8f7d",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Status \u72b6\u6001",id:"status-\u72b6\u6001",level:4},{value:"Touches \u89e6\u6478",id:"touches-\u89e6\u6478",level:4},{value:"Recoding \u8bb0\u5f55",id:"recoding-\u8bb0\u5f55",level:4}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"touches-recorder"},"Touches Recorder"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Touches Recorder"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Record ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Playback ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Recording ",(0,a.kt)("span",null,"...")),(0,a.kt)("li",null,"Load ",(0,a.kt)("span",{className:"checkbox-off"}))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Status ",(0,a.kt)("span",{className:"patch-color-preview status"})),(0,a.kt)("li",null,"Touches",(0,a.kt)("span",null,"[ ]")," "),(0,a.kt)("li",null,"Recording ",(0,a.kt)("span",null,"[...]")," ")))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"record-\u5f55\u5236"},"Record \u5f55\u5236"),(0,a.kt)("h4",{id:"playback-\u56de\u653e"},"Playback \u56de\u653e"),(0,a.kt)("h4",{id:"recording-\u8bb0\u5f55"},"Recording \u8bb0\u5f55"),(0,a.kt)("h4",{id:"load-\u52a0\u8f7d"},"Load \u52a0\u8f7d")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"status-\u72b6\u6001"},"Status \u72b6\u6001"),(0,a.kt)("h4",{id:"touches-\u89e6\u6478"},"Touches \u89e6\u6478"),(0,a.kt)("h4",{id:"recoding-\u8bb0\u5f55"},"Recoding \u8bb0\u5f55"))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);