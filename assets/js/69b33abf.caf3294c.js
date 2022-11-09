"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[70676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(v,a(a({ref:t},s),{},{components:n})):l.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(87462),o=(n(67294),n(3905));const r={title:"Completion Value \u5b8c\u6210\u503c",sidebar_position:20,tags:["logic"]},a="Completion Value",i={unversionedId:"patches/Logic/Completion Value",id:"patches/Logic/Completion Value",title:"Completion Value \u5b8c\u6210\u503c",description:"Completion Value",source:"@site/docs/patches/Logic/Completion Value.md",sourceDirName:"patches/Logic",slug:"/patches/Logic/Completion Value",permalink:"/OrigamiStudio/docs/patches/Logic/Completion Value",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Logic/Completion Value.md",tags:[{label:"logic",permalink:"/OrigamiStudio/docs/tags/logic"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:20,frontMatter:{title:"Completion Value \u5b8c\u6210\u503c",sidebar_position:20,tags:["logic"]},sidebar:"patchesSidebar",previous:{title:"Completion Item \u5b8c\u6210\u9879\u76ee",permalink:"/OrigamiStudio/docs/patches/Logic/Completion Item"},next:{title:"Count Down \u5012\u8ba1\u65f6",permalink:"/OrigamiStudio/docs/patches/Logic/Count Down"}},u={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Value",id:"value",level:4},{value:"Start Value",id:"start-value",level:4},{value:"End Value",id:"end-value",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Progress",id:"progress",level:4},{value:"Completetion %",id:"completetion-",level:4},{value:"Reset",id:"reset",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"completion-value"},"Completion Value"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Completion Value"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Value ",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,"Start Value",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,"End Value",(0,o.kt)("span",null,"0"))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Progress",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,"Completetion %",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,"Reset",(0,o.kt)("span",null,"0"))))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"value"},"Value"),(0,o.kt)("h4",{id:"start-value"},"Start Value"),(0,o.kt)("h4",{id:"end-value"},"End Value")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"progress"},"Progress"),(0,o.kt)("h4",{id:"completetion-"},"Completetion %"),(0,o.kt)("h4",{id:"reset"},"Reset"))))}c.isMDXComponent=!0}}]);