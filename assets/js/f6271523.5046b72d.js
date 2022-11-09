"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[42196],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5309:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Drag Scale Rotate Settings",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},l="Drag Scale Rotate Settings",o={unversionedId:"patches/Interaction/Drag Scale Rotate Settings",id:"patches/Interaction/Drag Scale Rotate Settings",title:"Drag Scale Rotate Settings",description:"---",source:"@site/docs/patches/Interaction/Drag Scale Rotate Settings.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Drag Scale Rotate Settings",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Scale Rotate Settings",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Drag Scale Rotate Settings.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:20,frontMatter:{title:"Drag Scale Rotate Settings",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Drag Recorder \u62d6\u62fd\u8bb0\u5f55",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Recorder"},next:{title:"Drag Scale Rotate",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Scale Rotate"}},s={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Layer",id:"layer",level:4},{value:"Enable",id:"enable",level:4},{value:"Settings",id:"settings",level:4},{value:"Has Multiple",id:"has-multiple",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Position",id:"position",level:4},{value:"Scale",id:"scale",level:4},{value:"Rotation Z",id:"rotation-z",level:4},{value:"Pivot",id:"pivot",level:4}],u={toc:c};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"drag-scale-rotate-settings"},"Drag Scale Rotate Settings"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Drag Scale Rotate Settings"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Layer",(0,r.kt)("span",null,"None")),(0,r.kt)("li",null,"Enable",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Settings",(0,r.kt)("span",null,"[...]")),(0,r.kt)("li",null,"Has Multiple",(0,r.kt)("span",{className:"checkbox-off"}))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Position",(0,r.kt)("small",null,"X",(0,r.kt)("span",null,"0"),"Y",(0,r.kt)("span",null,"0"),"Z",(0,r.kt)("span",null,"1"))),(0,r.kt)("li",null,"Scale",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Rotation Z",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Pivot",(0,r.kt)("small",null,"X",(0,r.kt)("span",null,"0"),"Y",(0,r.kt)("span",null,"0"),"Z",(0,r.kt)("span",null,"0")))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"layer"},"Layer"),(0,r.kt)("h4",{id:"enable"},"Enable"),(0,r.kt)("h4",{id:"settings"},"Settings"),(0,r.kt)("h4",{id:"has-multiple"},"Has Multiple")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"position"},"Position"),(0,r.kt)("h4",{id:"scale"},"Scale"),(0,r.kt)("h4",{id:"rotation-z"},"Rotation Z"),(0,r.kt)("h4",{id:"pivot"},"Pivot"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);