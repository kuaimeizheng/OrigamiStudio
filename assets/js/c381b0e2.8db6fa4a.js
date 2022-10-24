"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[21101],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25017:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5},a="Pulse \u8109\u51b2",l={unversionedId:"documentation/Utility/Pulse",id:"documentation/Utility/Pulse",title:"Pulse \u8109\u51b2",description:"Output a pulse whenever a state changes from on to off.",source:"@site/docs/documentation/Utility/Pulse.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Pulse",permalink:"/OrigamiStudio/docs/documentation/Utility/Pulse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Pulse.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666622342,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/OrigamiStudio/docs/documentation/Utility/Pulse on Change"},next:{title:"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/documentation/Utility/QR Code Detection"}},u={},s=[{value:"On/Off \u5f00/\u5173",id:"onoff-\u5f00\u5173",level:3},{value:"Turned On \u6253\u5f00",id:"turned-on-\u6253\u5f00",level:3},{value:"Turned Off \u5173\u95ed",id:"turned-off-\u5173\u95ed",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:s};function c(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pulse-\u8109\u51b2"},"Pulse \u8109\u51b2"),(0,o.kt)("p",null,"Output a pulse whenever a state changes from on to off."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/States-Pulses-758351d7e4104b75b06da93560565bc0"},"States & Pulses")," for more information."),(0,o.kt)("p",null,"\u6bcf\u5f53\u72b6\u6001\u4ece\u5f00\u59cb\u5207\u6362\u5230\u5173\u95ed\u65f6\uff0c\u90fd\u4f1a\u8f93\u51fa\u8109\u51b2\u3002"),(0,o.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 States & Pulses\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(82895).Z,width:"1336",height:"240"})),(0,o.kt)("h3",{id:"onoff-\u5f00\u5173"},"On/Off \u5f00/\u5173"),(0,o.kt)("p",null,"A boolean that represents an on/off state."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f00/\u5173\u72b6\u6001\u3002"),(0,o.kt)("h3",{id:"turned-on-\u6253\u5f00"},"Turned On \u6253\u5f00"),(0,o.kt)("p",null,"A pulse that is output when the input turns on."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u6253\u5f00\u65f6\u8f93\u51fa\u3002"),(0,o.kt)("h3",{id:"turned-off-\u5173\u95ed"},"Turned Off \u5173\u95ed"),(0,o.kt)("p",null,"A pulse that is output when the input turns off."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u5173\u95ed\u65f6\u8f93\u51fa\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/When%20Prototype%20Starts"},"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Pulse%20on%20Change"},"Pulse on Change \u8109\u51b2\u53d8\u5316")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")))}c.isMDXComponent=!0},82895:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/pulse-f5629b29db4cae29cae1d7e3cdd4b498.png"}}]);