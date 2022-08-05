"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8049],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),p=l(r),s=i,f=p["".concat(u,".").concat(s)]||p[s]||d[s]||a;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function s(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=p;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=t,m.mdxType="string"==typeof t?t:i,o[1]=m;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52332:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],m={sidebar_position:2},u="Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",l={unversionedId:"documentation/Utility/Date & Time Formatter",id:"documentation/Utility/Date & Time Formatter",title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",description:"Use Date & Time Formatter to make human-readable formats from time in seconds.",source:"@site/docs/documentation/Utility/Date & Time Formatter.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Date & Time Formatter",permalink:"/OrigamiStudio/docs/documentation/Utility/Date & Time Formatter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Date & Time Formatter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659700546,formattedLastUpdatedAt:"2022\u5e748\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Counter \u8ba1\u6570\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Counter"},next:{title:"Delay 1 \u5ef6\u8fdf1",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay 1"}},c={},d=[{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4",level:3},{value:"Format \u683c\u5f0f",id:"format-\u683c\u5f0f",level:3},{value:"Custom Format \u81ea\u5b9a\u4e49\u683c\u5f0f",id:"custom-format-\u81ea\u5b9a\u4e49\u683c\u5f0f",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],p={toc:d};function s(t){var e=t.components,m=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,m,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date--time-formatter-\u65e5\u671f\u65f6\u95f4\u683c\u5f0f"},"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f"),(0,a.kt)("p",null,"Use Date & Time Formatter to make human-readable formats from time in seconds."),(0,a.kt)("p",null,"\u4f7f\u7528 Date & Time Formatter \u6a21\u5757\u5c06\u4ee5\u79d2\u4e3a\u5355\u4f4d\u751f\u6210\u6211\u4eec\u53ef\u8bfb\u7684\u65f6\u95f4\u683c\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(32351).Z,width:"1382",height:"266"})),(0,a.kt)("h3",{id:"time-\u65f6\u95f4"},"Time \u65f6\u95f4"),(0,a.kt)("p",null,"The number of seconds that represents time or date."),(0,a.kt)("p",null,"\u8868\u793a\u65f6\u95f4\u6216\u65e5\u671f\u7684\u79d2\u6570\u3002"),(0,a.kt)("h3",{id:"format-\u683c\u5f0f"},"Format \u683c\u5f0f"),(0,a.kt)("p",null,"The time format to output (12/24 hour time, date, media time, custom)"),(0,a.kt)("p",null,"\u9009\u62e9\u8f93\u51fa\u7684\u65f6\u95f4\u683c\u5f0f\u3002\uff08\u4f8b\uff1a9:42 AM\u30012016-4-13\u300103:00\uff09"),(0,a.kt)("h3",{id:"custom-format-\u81ea\u5b9a\u4e49\u683c\u5f0f"},"Custom Format \u81ea\u5b9a\u4e49\u683c\u5f0f"),(0,a.kt)("p",null,"A text string that represents a format of time (ex: %H:%M:%S, %m/%d/%y). See the ",(0,a.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/ctime/strftime/"},"strftime documentation"),"."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u65f6\u95f4\u683c\u5f0f\u3002"),(0,a.kt)("h3",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(32805).Z,width:"580",height:"738"})),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A text string that represents the formatted time or date."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u6309\u5b9a\u4e49\u7684\u683c\u5f0f\u663e\u793a\u65f6\u95f4\u3001\u65e5\u671f\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Time"},"Time \u65f6\u95f4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Stopwatch"},"Stopwatch \u79d2\u8868")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Video%20Info"},"Video Info \u89c6\u9891\u4fe1\u606f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Time"},"Device Time \u8bbe\u5907\u65f6\u95f4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Video%20File"},"Video File \u89c6\u9891\u6587\u4ef6")))}s.isMDXComponent=!0},32805:function(t,e,r){e.Z=r.p+"assets/images/date&time-formatter-item-a6b2b9b37c10317323415d7004366d07.png"},32351:function(t,e,r){e.Z=r.p+"assets/images/date&time-formatter-88246e1dd7680625ba2a66d909218cd3.png"}}]);