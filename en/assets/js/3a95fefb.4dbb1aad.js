"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[36733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Decimal Place \u5c0f\u6570\u4f4d\u6570",sidebar_position:20,tags:["utilities"]},l="Decimal Place",c={unversionedId:"patches/Text/Decimal Place",id:"patches/Text/Decimal Place",title:"Decimal Place \u5c0f\u6570\u4f4d\u6570",description:"Decimal Place",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Text/Decimal Place.md",sourceDirName:"patches/Text",slug:"/patches/Text/Decimal Place",permalink:"/OrigamiStudio/en/docs/patches/Text/Decimal Place",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Text/Decimal Place.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/en/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:20,frontMatter:{title:"Decimal Place \u5c0f\u6570\u4f4d\u6570",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Adds Leading Zero \u6dfb\u52a0\u524d\u5bfc\u96f6",permalink:"/OrigamiStudio/en/docs/patches/Text/Adds Leading Zero"},next:{title:"Dynamic Type \u52a8\u6001\u5b57\u4f53",permalink:"/OrigamiStudio/en/docs/patches/Text/Dynamic Type"}},o={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Number \u6570\u503c",id:"number-\u6570\u503c",level:4},{value:"Decimal Places \u5c0f\u6570\u4f4d\u6570",id:"decimal-places-\u5c0f\u6570\u4f4d\u6570",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Rounded Number \u53d6\u6574\u6570",id:"rounded-number-\u53d6\u6574\u6570",level:4}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"decimal-place"},"Decimal Place"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Decimal Place"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Number ",(0,n.kt)("span",null,"1")),(0,n.kt)("li",null,"Decimal Places ",(0,n.kt)("span",null,"1"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Rounded Number ",(0,n.kt)("span",null,"1.0"))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"number-\u6570\u503c"},"Number \u6570\u503c"),(0,n.kt)("h4",{id:"decimal-places-\u5c0f\u6570\u4f4d\u6570"},"Decimal Places \u5c0f\u6570\u4f4d\u6570")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"rounded-number-\u53d6\u6574\u6570"},"Rounded Number \u53d6\u6574\u6570"))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);