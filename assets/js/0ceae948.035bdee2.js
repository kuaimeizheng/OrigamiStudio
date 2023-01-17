"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[65433],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(y,o(o({ref:e},p),{},{components:n})):r.createElement(y,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32197:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Delay 1 \u5ef6\u8fdf 1",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Delay 1 \u5ef6\u8fdf 1",l={unversionedId:"documentation/Utility/Delay 1",id:"documentation/Utility/Delay 1",title:"Delay 1 \u5ef6\u8fdf 1",description:"---",source:"@site/docs/documentation/Utility/Delay 1.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Delay 1",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay 1",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Delay 1.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:5,frontMatter:{title:"Delay 1 \u5ef6\u8fdf 1",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Utility/Date & Time Formatter"},next:{title:"Delay \u5ef6\u8fdf",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay"}},u={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delay-1-\u5ef6\u8fdf-1"},"Delay 1 \u5ef6\u8fdf 1"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Delay a number by one frame. Useful for split second delays. A typical composition runs at around 60 frames per second."),(0,a.kt)("p",null,"\u5c06\u6570\u5b57\u5ef6\u8fdf\u4e00\u5e27\u3002\u9002\u7528\u4e8e\u518d\u6b21\u62c6\u5206\u5ef6\u8fdf\u65f6\u95f4\u3002\u5178\u578b\u7684\u5408\u6210\u4ee5\u5927\u7ea6\u6bcf\u79d2 60 \u5e27\u7684\u901f\u5ea6\u8fd0\u884c"),(0,a.kt)("p",null,"Right-click to change the type (ex: number, position, color)."),(0,a.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\u3001\u4f4d\u7f6e\u3001\u989c\u8272\uff09"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Delay 1"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,(0,a.kt)("span",null,"0"))))),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"The number to delay."),(0,a.kt)("p",null,"\u5ef6\u8fdf\u7684\u6570\u503c"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The number, which is output only after the delay has elapsed."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u53ea\u6709\u5728\u5ef6\u8fdf\u8fc7\u540e\u624d\u8f93\u51fa\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Delay"},"Delay \u5ef6\u8fdf")))}s.isMDXComponent=!0}}]);