"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[83529],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},l=Object.keys(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=o.createContext({}),s=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?o.createElement(f,a(a({ref:e},u),{},{components:r})):o.createElement(f,a({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3132:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const l={title:"Color to RGBA",sidebar_position:20,tags:["color"]},a="Color to RGBA",i={unversionedId:"patches/Color/Color to RGBA",id:"patches/Color/Color to RGBA",title:"Color to RGBA",description:"Color to RGBA",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Color/Color to RGBA.md",sourceDirName:"patches/Color",slug:"/patches/Color/Color to RGBA",permalink:"/OrigamiStudio/en/docs/patches/Color/Color to RGBA",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Color/Color to RGBA.md",tags:[{label:"color",permalink:"/OrigamiStudio/en/docs/tags/color"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:20,frontMatter:{title:"Color to RGBA",sidebar_position:20,tags:["color"]},sidebar:"patchesSidebar",previous:{title:"Color \u989c\u8272",permalink:"/OrigamiStudio/en/docs/category/color-\u989c\u8272-1"},next:{title:"HSL to HSV",permalink:"/OrigamiStudio/en/docs/patches/Color/HSL to HSV"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Color",id:"color",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"R",id:"r",level:4},{value:"G",id:"g",level:4},{value:"B",id:"b",level:4},{value:"A",id:"a",level:4}],u={toc:s};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"color-to-rgba"},"Color to RGBA"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Color to RGBA"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,(0,n.kt)("span",{className:"color"}))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"R",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"G",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"B",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"A",(0,n.kt)("span",null,"100"))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"color"},"Color")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"r"},"R"),(0,n.kt)("h4",{id:"g"},"G"),(0,n.kt)("h4",{id:"b"},"B"),(0,n.kt)("h4",{id:"a"},"A"))))}p.isMDXComponent=!0}}]);