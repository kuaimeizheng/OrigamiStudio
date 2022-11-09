"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[53226],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=u(r),v=o,h=d["".concat(l,".").concat(v)]||d[v]||p[v]||a;return r?n.createElement(h,i(i({ref:e},s),{},{components:r})):n.createElement(h,i({ref:e},s))}));function v(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8480:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Touch Over \u63a5\u8fd1",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},i="Touch Over",c={unversionedId:"patches/Interaction/Touch Over",id:"patches/Interaction/Touch Over",title:"Touch Over \u63a5\u8fd1",description:"---",source:"@site/docs/patches/Interaction/Touch Over.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Touch Over",permalink:"/OrigamiStudio/docs/patches/Interaction/Touch Over",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Touch Over.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667996896,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:20,frontMatter:{title:"Touch Over \u63a5\u8fd1",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Touch Indicator \u89e6\u63a7\u6307\u793a",permalink:"/OrigamiStudio/docs/patches/Interaction/Touch Indicator"},next:{title:"Touch Point Velocity",permalink:"/OrigamiStudio/docs/patches/Interaction/Touch Point Velocity"}},l={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Layer",id:"layer",level:4},{value:"X/Y",id:"xy",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Over",id:"over",level:4},{value:"Position",id:"position",level:4}],s={toc:u};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"touch-over"},"Touch Over"),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Touch Over"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Layer",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,(0,o.kt)("small",null,"X",(0,o.kt)("span",null,"0"),"Y",(0,o.kt)("span",null,"0")))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Over",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,"Position",(0,o.kt)("span",null))))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"layer"},"Layer"),(0,o.kt)("h4",{id:"xy"},"X/Y")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"over"},"Over"),(0,o.kt)("h4",{id:"position"},"Position"))),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);