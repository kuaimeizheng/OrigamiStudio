"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[89989],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,i(i({ref:e},s),{},{components:a})):n.createElement(f,i({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76614:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Drag Scale Rotate",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},i="Drag Scale Rotate",l={unversionedId:"patches/Interaction/Drag Scale Rotate",id:"patches/Interaction/Drag Scale Rotate",title:"Drag Scale Rotate",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Interaction/Drag Scale Rotate.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Drag Scale Rotate",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Drag Scale Rotate",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Drag Scale Rotate.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/en/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:20,frontMatter:{title:"Drag Scale Rotate",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Drag Scale Rotate Settings",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Drag Scale Rotate Settings"},next:{title:"Interaction Recorder \u4ea4\u4e92\u8bb0\u5f55",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Interaction Recorder"}},c={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Momentum",id:"momentum",level:4},{value:"Momentum Friction",id:"momentum-friction",level:4},{value:"Clip",id:"clip",level:4},{value:"Rotate",id:"rotate",level:4},{value:"Pan",id:"pan",level:4},{value:"Zoom",id:"zoom",level:4},{value:"Recording",id:"recording",level:4},{value:"Zoom Offset",id:"zoom-offset",level:4},{value:"Rotate Offset",id:"rotate-offset",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Output",id:"output",level:4}],s={toc:u};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"drag-scale-rotate"},"Drag Scale Rotate"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Drag Scale Rotate"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Momentum",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Momentum Friction",(0,r.kt)("span",null,"8")),(0,r.kt)("li",null,"Clip",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Rotate",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Pan",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Zoom",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Recording",(0,r.kt)("span",null,"...")),(0,r.kt)("li",null,"Zoom Offset",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Rotate Offset",(0,r.kt)("span",null,"0"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,(0,r.kt)("span",null,"[...]"))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"momentum"},"Momentum"),(0,r.kt)("h4",{id:"momentum-friction"},"Momentum Friction"),(0,r.kt)("h4",{id:"clip"},"Clip"),(0,r.kt)("h4",{id:"rotate"},"Rotate"),(0,r.kt)("h4",{id:"pan"},"Pan"),(0,r.kt)("h4",{id:"zoom"},"Zoom"),(0,r.kt)("h4",{id:"recording"},"Recording"),(0,r.kt)("h4",{id:"zoom-offset"},"Zoom Offset"),(0,r.kt)("h4",{id:"rotate-offset"},"Rotate Offset")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"output"},"Output"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);