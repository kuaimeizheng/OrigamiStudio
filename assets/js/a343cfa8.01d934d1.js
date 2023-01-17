"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[10122],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29491:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Text Transform \u6587\u672c\u53d8\u6362",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Text Transform \u6587\u672c\u53d8\u6362",l={unversionedId:"documentation/Text/Text Transform",id:"documentation/Text/Text Transform",title:"Text Transform \u6587\u672c\u53d8\u6362",description:"---",source:"@site/docs/documentation/Text/Text Transform.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Transform",permalink:"/OrigamiStudio/docs/documentation/Text/Text Transform",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Transform.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:5,frontMatter:{title:"Text Transform \u6587\u672c\u53d8\u6362",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Text Style \u6587\u672c\u6837\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Text/Text Style"},next:{title:"Trim Text \u4fee\u526a\u6587\u672c",permalink:"/OrigamiStudio/docs/documentation/Text/Trim Text"}},u={},s=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Transform \u8f6c\u6362",id:"transform-\u8f6c\u6362",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:s};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-transform-\u6587\u672c\u53d8\u6362"},"Text Transform \u6587\u672c\u53d8\u6362"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Transform the case and capitalization of a text string."),(0,a.kt)("p",null,"\u8f6c\u6362\u6587\u672c\u5b57\u7b26\u4e32\u7684\u5927\u5c0f\u5199\u548c\u5927\u5c0f\u5199\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Text Transform"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Text",(0,a.kt)("span",null)),(0,a.kt)("li",null,"Transform",(0,a.kt)("span",null,"Uppercase"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"\xa0",(0,a.kt)("span",null))))),(0,a.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,a.kt)("p",null,"A text string to transform."),(0,a.kt)("p",null,"\u8981\u8f6c\u6362\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h3",{id:"transform-\u8f6c\u6362"},"Transform \u8f6c\u6362"),(0,a.kt)("p",null,"The property to control capitalization of the text string \u2013 Uppercase, Lowercase, or Capitalized."),(0,a.kt)("p",null,"\u63a7\u5236\u6587\u672c\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u7684\u5c5e\u6027\u2014\u2014\u5927\u5199\u3001\u5c0f\u5199\u6216\u9996\u5b57\u6bcd\u5927\u5199\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The transformed text string."),(0,a.kt)("p",null,"\u8f6c\u6362\u540e\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Size"},"Text Size \u6587\u672c\u5927\u5c0f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Length"},"Text Length \u6587\u672c\u957f\u77ed")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Size"},"Text Size \u6587\u672c\u5927\u5c0f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Trim%20Text"},"Trim Text \u4fee\u526a\u6587\u672c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Date%20&%20Time%20Formatter"},"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}p.isMDXComponent=!0}}]);