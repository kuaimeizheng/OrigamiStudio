"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[51784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"Range Repeat \u8303\u56f4\u91cd\u590d",sidebar_position:20,tags:["utilities"]},l="Range Repeat",o={unversionedId:"patches/Utilities/Range Repeat",id:"patches/Utilities/Range Repeat",title:"Range Repeat \u8303\u56f4\u91cd\u590d",description:"\u5728\u4e00\u4e2a\u8303\u56f4\u5185\u91cd\u590d\u3002",source:"@site/docs/patches/Utilities/Range Repeat.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Range Repeat",permalink:"/OrigamiStudio/docs/patches/Utilities/Range Repeat",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Range Repeat.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:20,frontMatter:{title:"Range Repeat \u8303\u56f4\u91cd\u590d",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Pulse Info \u8109\u51b2\u4fe1\u53f7",permalink:"/OrigamiStudio/docs/patches/Utilities/Pulse Info"},next:{title:"Trend Info \u8d8b\u52bf\u4fe1\u606f",permalink:"/OrigamiStudio/docs/patches/Utilities/Trend Info"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Number \u6570\u503c",id:"number-\u6570\u503c",level:4},{value:"Range \u8303\u56f4",id:"range-\u8303\u56f4",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Number \u6570\u503c",id:"number-\u6570\u503c-1",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"range-repeat"},"Range Repeat"),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u8303\u56f4\u5185\u91cd\u590d\u3002"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Range Repeat"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Number ",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Range ",(0,i.kt)("span",null,"7"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Number ",(0,i.kt)("span",null,"0"))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"number-\u6570\u503c"},"Number \u6570\u503c"),(0,i.kt)("h4",{id:"range-\u8303\u56f4"},"Range \u8303\u56f4")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"number-\u6570\u503c-1"},"Number \u6570\u503c"))),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);