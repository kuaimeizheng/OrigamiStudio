"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),y=i,v=d["".concat(u,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"Progressive Blur Layer \u6e10\u53d8\u6a21\u7cca\u56fe\u5c42",sidebar_position:20,tags:["layer"]},l="Progressive Blur Layer",o={unversionedId:"patches/Layer/Progressive Blur Layer",id:"patches/Layer/Progressive Blur Layer",title:"Progressive Blur Layer \u6e10\u53d8\u6a21\u7cca\u56fe\u5c42",description:"\u521b\u5efa\u65e0\u7f1d\u6e10\u8fdb\u6a21\u7cca\u6548\u679c\uff0c\u5982\u5728\u5e94\u7528\u5217\u8868\u6216\u97f3\u4e50\u5e94\u7528\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Layer/Progressive Blur Layer.md",sourceDirName:"patches/Layer",slug:"/patches/Layer/Progressive Blur Layer",permalink:"/OrigamiStudio/en/docs/patches/Layer/Progressive Blur Layer",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Layer/Progressive Blur Layer.md",tags:[{label:"layer",permalink:"/OrigamiStudio/en/docs/tags/layer"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:20,frontMatter:{title:"Progressive Blur Layer \u6e10\u53d8\u6a21\u7cca\u56fe\u5c42",sidebar_position:20,tags:["layer"]},sidebar:"patchesSidebar",previous:{title:"Flipper \u7ffb\u8f6c",permalink:"/OrigamiStudio/en/docs/patches/Layer/Flipper"},next:{title:"Progressive Blur Patch \u6e10\u53d8\u6a21\u7cca\u6a21\u5757",permalink:"/OrigamiStudio/en/docs/patches/Layer/Progressive Blur Patch"}},u={},s=[{value:"Intencity \u5f3a\u5ea6",id:"intencity-\u5f3a\u5ea6",level:3},{value:"Resolution \u5206\u8fa8\u7387",id:"resolution-\u5206\u8fa8\u7387",level:3},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Saturation \u9971\u548c\u5ea6",id:"saturation-\u9971\u548c\u5ea6",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"progressive-blur-layer"},"Progressive Blur Layer"),(0,i.kt)("p",null,"\u521b\u5efa\u65e0\u7f1d\u6e10\u8fdb\u6a21\u7cca\u6548\u679c\uff0c\u5982\u5728\u5e94\u7528\u5217\u8868\u6216\u97f3\u4e50\u5e94\u7528\u3002\n\u6027\u80fd\u5f88\u5dee\uff0c\u6240\u4ee5\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528\u5b83\uff0c\u5c3d\u7ba1\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c\u7684\u6ca1\u6709\u95ee\u9898\u3002"),(0,i.kt)("div",{class:"patch-container"},(0,i.kt)("div",{class:"patch layer"},(0,i.kt)("h3",null,"Progressive Blur"),(0,i.kt)("ul",{class:"inputs"},(0,i.kt)("li",null,"Intencity"),(0,i.kt)("li",null,"Resolution"),(0,i.kt)("li",null,"Curve"),(0,i.kt)("li",null,"Opacity"),(0,i.kt)("li",null,"Saturation")))),(0,i.kt)("h3",{id:"intencity-\u5f3a\u5ea6"},"Intencity \u5f3a\u5ea6"),(0,i.kt)("h3",{id:"resolution-\u5206\u8fa8\u7387"},"Resolution \u5206\u8fa8\u7387"),(0,i.kt)("h3",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,i.kt)("p",null,"\u66f2\u7ebf\u5217\u8868\uff0c\u5305\u542b\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,i.kt)("p",null,"Linear"),(0,i.kt)("p",null,"Quadratic In"),(0,i.kt)("p",null,"Quadratic Out"),(0,i.kt)("p",null,"Quadratic In-Out"),(0,i.kt)("p",null,"Cubic In"),(0,i.kt)("p",null,"Cubic Out"),(0,i.kt)("p",null,"Cubic In-Out"),(0,i.kt)("p",null,"Exponential In"),(0,i.kt)("p",null,"Exponential Out"),(0,i.kt)("p",null,"Exponential In-Out"),(0,i.kt)("p",null,"Sinusoidal In"),(0,i.kt)("p",null,"Sinusoidal Out"),(0,i.kt)("p",null,"Sinusoidal In-Out"),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("h3",{id:"saturation-\u9971\u548c\u5ea6"},"Saturation \u9971\u548c\u5ea6"),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);