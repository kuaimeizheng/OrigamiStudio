"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[53226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),v=o,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"Touch Over \u63a5\u8fd1",sidebar_position:20,tags:["interaction"]},a="Touch Over",c={unversionedId:"patches/Interaction/Touch Over",id:"patches/Interaction/Touch Over",title:"Touch Over \u63a5\u8fd1",description:"Touch Over",source:"@site/docs/patches/Interaction/Touch Over.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Touch Over",permalink:"/OrigamiStudio/docs/patches/Interaction/Touch Over",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Touch Over.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667659545,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:20,frontMatter:{title:"Touch Over \u63a5\u8fd1",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Touch Indicator \u89e6\u63a7\u6307\u793a",permalink:"/OrigamiStudio/docs/patches/Interaction/Touch Indicator"},next:{title:"Touches Recorder \u89e6\u6478\u8bb0\u5f55",permalink:"/OrigamiStudio/docs/patches/Interaction/Touches Recorder"}},l={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Layer",id:"layer",level:4},{value:"X/Y",id:"xy",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Over",id:"over",level:4},{value:"Position",id:"position",level:4}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"touch-over"},"Touch Over"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Touch Over"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Layer",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,(0,o.kt)("small",null,"X",(0,o.kt)("span",null,"0"),"Y",(0,o.kt)("span",null,"0")))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Over",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,"Position",(0,o.kt)("span",null))))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"layer"},"Layer"),(0,o.kt)("h4",{id:"xy"},"X/Y")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"over"},"Over"),(0,o.kt)("h4",{id:"position"},"Position"))),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);