"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[68049],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>p});var a=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var m=a.createContext({}),u=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(r),p=i,f=d["".concat(m,".").concat(p)]||d[p]||c[p]||n;return r?a.createElement(f,o(o({ref:e},s),{},{components:r})):a.createElement(f,o({ref:e},s))}));function p(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52332:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const n={title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",l={unversionedId:"documentation/Utility/Date & Time Formatter",id:"documentation/Utility/Date & Time Formatter",title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",description:"Use Date & Time Formatter to make human-readable formats from time in seconds.",source:"@site/docs/documentation/Utility/Date & Time Formatter.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Date & Time Formatter",permalink:"/OrigamiStudio/docs/documentation/Utility/Date & Time Formatter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Date & Time Formatter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Counter \u8ba1\u6570\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Counter"},next:{title:"Delay 1 \u5ef6\u8fdf1",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay 1"}},m={},u=[{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4",level:3},{value:"Format \u683c\u5f0f",id:"format-\u683c\u5f0f",level:3},{value:"Custom Format \u81ea\u5b9a\u4e49\u683c\u5f0f",id:"custom-format-\u81ea\u5b9a\u4e49\u683c\u5f0f",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:u};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"date--time-formatter-\u65e5\u671f\u65f6\u95f4\u683c\u5f0f"},"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f"),(0,i.kt)("p",null,"Use Date & Time Formatter to make human-readable formats from time in seconds."),(0,i.kt)("p",null,"\u4f7f\u7528 Date & Time Formatter \u6a21\u5757\u5c06\u4ee5\u79d2\u4e3a\u5355\u4f4d\u751f\u6210\u6211\u4eec\u53ef\u8bfb\u7684\u65f6\u95f4\u683c\u5f0f\u3002"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Date & Time Formatter"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Time",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Format",(0,i.kt)("span",null,"12 Hours")),(0,i.kt)("li",null,"Custom Format",(0,i.kt)("span",null))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,(0,i.kt)("span",null,"...12"))))),(0,i.kt)("h3",{id:"time-\u65f6\u95f4"},"Time \u65f6\u95f4"),(0,i.kt)("p",null,"The number of seconds that represents time or date."),(0,i.kt)("p",null,"\u8868\u793a\u65f6\u95f4\u6216\u65e5\u671f\u7684\u79d2\u6570\u3002"),(0,i.kt)("h3",{id:"format-\u683c\u5f0f"},"Format \u683c\u5f0f"),(0,i.kt)("p",null,"The time format to output (12/24 hour time, date, media time, custom)"),(0,i.kt)("p",null,"\u9009\u62e9\u8f93\u51fa\u7684\u65f6\u95f4\u683c\u5f0f\u3002\uff08\u4f8b\uff1a9:42 AM\u30012016-4-13\u300103:00\uff09"),(0,i.kt)("h3",{id:"custom-format-\u81ea\u5b9a\u4e49\u683c\u5f0f"},"Custom Format \u81ea\u5b9a\u4e49\u683c\u5f0f"),(0,i.kt)("p",null,"A text string that represents a format of time (ex: %H:%M:%S, %m/%d/%y). See the ",(0,i.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/ctime/strftime/"},"strftime documentation"),"."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u65f6\u95f4\u683c\u5f0f\u3002"),(0,i.kt)("h3",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(32805).Z,width:"580",height:"738"})),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"A text string that represents the formatted time or date."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u6309\u5b9a\u4e49\u7684\u683c\u5f0f\u663e\u793a\u65f6\u95f4\u3001\u65e5\u671f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Time"},"Time \u65f6\u95f4")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Stopwatch"},"Stopwatch \u79d2\u8868")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Video%20Info"},"Video Info \u89c6\u9891\u4fe1\u606f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Time"},"Device Time \u8bbe\u5907\u65f6\u95f4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Video%20File"},"Video File \u89c6\u9891\u6587\u4ef6")))}c.isMDXComponent=!0},32805:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/date&time-formatter-item-a6b2b9b37c10317323415d7004366d07.png"}}]);