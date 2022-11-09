"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[18641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),v=i,y=d["".concat(s,".").concat(v)]||d[v]||p[v]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"Progressive Blur Patch \u6e10\u53d8\u6a21\u7cca\u6a21\u5757",sidebar_position:20,tags:["layer"]},o="Progressive Blur Patch",l={unversionedId:"patches/Layer/Progressive Blur Patch",id:"patches/Layer/Progressive Blur Patch",title:"Progressive Blur Patch \u6e10\u53d8\u6a21\u7cca\u6a21\u5757",description:"Progressive Blur",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Layer/Progressive Blur Patch.md",sourceDirName:"patches/Layer",slug:"/patches/Layer/Progressive Blur Patch",permalink:"/OrigamiStudio/en/docs/patches/Layer/Progressive Blur Patch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Layer/Progressive Blur Patch.md",tags:[{label:"layer",permalink:"/OrigamiStudio/en/docs/tags/layer"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:20,frontMatter:{title:"Progressive Blur Patch \u6e10\u53d8\u6a21\u7cca\u6a21\u5757",sidebar_position:20,tags:["layer"]},sidebar:"patchesSidebar",previous:{title:"Progressive Blur Layer \u6e10\u53d8\u6a21\u7cca\u56fe\u5c42",permalink:"/OrigamiStudio/en/docs/patches/Layer/Progressive Blur Layer"},next:{title:"Scratch Card \u522e\u522e\u5361",permalink:"/OrigamiStudio/en/docs/patches/Layer/Scratch Card"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Container \u5bb9\u5668",id:"container-\u5bb9\u5668",level:4},{value:"Intencity \u5f3a\u5ea6",id:"intencity-\u5f3a\u5ea6",level:4},{value:"Resolution \u9ad8\u5206\u8fa8\u7387",id:"resolution-\u9ad8\u5206\u8fa8\u7387",level:4},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Radius \u534a\u5f84",id:"radius-\u534a\u5f84",level:4},{value:"Position Y Y\u4f4d\u7f6e",id:"position-y-y\u4f4d\u7f6e",level:4}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"progressive-blur-patch"},"Progressive Blur Patch"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Progressive Blur"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Container ",(0,i.kt)("span",null,"Container")),(0,i.kt)("li",null,"Intencity ",(0,i.kt)("span",null,"0.2")),(0,i.kt)("li",null,"Resolution ",(0,i.kt)("span",null,"0.5")),(0,i.kt)("li",null,"Curve ",(0,i.kt)("span",null,"Liner"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Radius ",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Position Y ",(0,i.kt)("span",null,"0"))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"container-\u5bb9\u5668"},"Container \u5bb9\u5668"),(0,i.kt)("h4",{id:"intencity-\u5f3a\u5ea6"},"Intencity \u5f3a\u5ea6"),(0,i.kt)("h4",{id:"resolution-\u9ad8\u5206\u8fa8\u7387"},"Resolution \u9ad8\u5206\u8fa8\u7387"),(0,i.kt)("h4",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"radius-\u534a\u5f84"},"Radius \u534a\u5f84"),(0,i.kt)("h4",{id:"position-y-y\u4f4d\u7f6e"},"Position Y Y\u4f4d\u7f6e"))),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);