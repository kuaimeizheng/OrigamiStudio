"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[99115],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83401:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Wait \u7b49\u5f85",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Wait \u7b49\u5f85",l={unversionedId:"documentation/Utility/Wait",id:"documentation/Utility/Wait",title:"Wait \u7b49\u5f85",description:"---",source:"@site/docs/documentation/Utility/Wait.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Wait",permalink:"/OrigamiStudio/docs/documentation/Utility/Wait",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Wait.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667996896,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Wait \u7b49\u5f85",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Video \u89c6\u9891",permalink:"/OrigamiStudio/docs/documentation/Utility/Video"},next:{title:"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6",permalink:"/OrigamiStudio/docs/documentation/Utility/When Prototype Starts"}},u={},s=[{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:s};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wait-\u7b49\u5f85"},"Wait \u7b49\u5f85"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Start a timer that waits the input duration before outputting a pulse."),(0,a.kt)("p",null,"\u542f\u52a8\u7b49\u5f85\u6307\u5b9a\u65f6\u95f4\u7684\u8ba1\u65f6\u5668"),(0,a.kt)("p",null,"\uff08\u8bbe\u7f6e\u5ef6\u8fdf\u52a8\u753b\u7684\u8ba1\u65f6\u5668\uff0c\u5728\u8981\u5ef6\u8fdf\u7684\u8109\u51b2\u4e0a\u52a0\u4e0a\u4e00\u4e2a Wait \u6a21\u5757\uff0c\u5c31\u80fd\u8ba9\u8fd9\u4e2a\u8109\u51b2\u5ef6\u8fdf\u8bbe\u5b9a\u7684\u65f6\u95f4\u5230\u8fbe\u4e0b\u4e00\u4e2a\u6a21\u5757\uff09"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Wait"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Start",(0,a.kt)("span",{className:"patch-pulse-preview"},(0,a.kt)("span",{className:"dot"}))),(0,a.kt)("li",null,"Duration",(0,a.kt)("span",null,"1s"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,(0,a.kt)("span",{className:"checkbox-off"}))))),(0,a.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,a.kt)("p",null,"A pulse that starts the timer."),(0,a.kt)("p",null,"\u542f\u52a8\u5b9a\u65f6\u5668\u7684\u8109\u51b2\u3002"),(0,a.kt)("h3",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,a.kt)("p",null,"The time to wait."),(0,a.kt)("p",null,"\u8981\u7b49\u5f85\u7684\u65f6\u95f4\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A boolean that is true when the wait is finished"),(0,a.kt)("p",null,"\u7b49\u5f85\u65f6\u95f4\u7ed3\u675f\u540e\u53d1\u51fa\u8109\u51b2\u3002\u4e00\u822c\u8fde\u63a5\u5230\u4e8b\u4ef6\u7c7b\u6a21\u5757\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/When%20Prototype%20Starts"},"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6")))}p.isMDXComponent=!0}}]);