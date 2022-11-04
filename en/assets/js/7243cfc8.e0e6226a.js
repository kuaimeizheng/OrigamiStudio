"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[96506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Path Builder \u8def\u5f84\u6784\u5efa",sidebar_position:105,tags:["path","shape","path builder"]},l="Path Builder",o={unversionedId:"patches/Shape/Path builder",id:"patches/Shape/Path builder",title:"Path Builder \u8def\u5f84\u6784\u5efa",description:"Path Builder",source:"@site/docs/patches/Shape/Path builder.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/Path builder",permalink:"/OrigamiStudio/en/docs/patches/Shape/Path builder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/Path builder.md",tags:[{label:"path",permalink:"/OrigamiStudio/en/docs/tags/path"},{label:"shape",permalink:"/OrigamiStudio/en/docs/tags/shape"},{label:"path builder",permalink:"/OrigamiStudio/en/docs/tags/path-builder"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:105,frontMatter:{title:"Path Builder \u8def\u5f84\u6784\u5efa",sidebar_position:105,tags:["path","shape","path builder"]},sidebar:"patchesSidebar",previous:{title:"Skew Shape \u503e\u659c\u5f62\u72b6",permalink:"/OrigamiStudio/en/docs/patches/Shape/Skew Shape"},next:{title:"Path builder to Shape \u8def\u5f84\u6784\u5efa\u5230\u5f62\u72b6",permalink:"/OrigamiStudio/en/docs/patches/Shape/Path builder to Shape"}},u={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"moveTo",id:"moveto",level:4},{value:"Point",id:"point",level:4},{value:"curveFrom",id:"curvefrom",level:4},{value:"curveTo",id:"curveto",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Path Array",id:"path-array",level:4}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"path-builder"},"Path Builder"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Path Builder"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"type ",(0,n.kt)("span",null,"moveTo")),(0,n.kt)("li",null,"Point X ",(0,n.kt)("span",null,"0")," \xa0\xa0\xa0\xa0 Y ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"curveFrom X ",(0,n.kt)("span",null,"0")," \xa0\xa0\xa0\xa0 Y ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"curveTo X ",(0,n.kt)("span",null,"0")," \xa0\xa0\xa0\xa0 Y ",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Path Array",(0,n.kt)("span",null,"[...]"))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"moveto"},"moveTo"),(0,n.kt)("h4",{id:"point"},"Point"),(0,n.kt)("h4",{id:"curvefrom"},"curveFrom"),(0,n.kt)("h4",{id:"curveto"},"curveTo")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"path-array"},"Path Array"))))}c.isMDXComponent=!0}}]);