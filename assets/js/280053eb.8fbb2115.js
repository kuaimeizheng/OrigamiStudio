"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6957],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,o(o({ref:e},p),{},{components:r})):n.createElement(f,o({ref:e},p))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:i,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9615:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],u={sidebar_position:2},l="Wait \u7b49\u5f85",c={unversionedId:"Utility/Wait",id:"Utility/Wait",title:"Wait \u7b49\u5f85",description:"Start a timer that waits the input duration before outputting a pulse.",source:"@site/docs/Utility/Wait.md",sourceDirName:"Utility",slug:"/Utility/Wait",permalink:"/OrigamiStudio/docs/Utility/Wait",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Utility/Wait.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Video \u89c6\u9891",permalink:"/OrigamiStudio/docs/Utility/Video"},next:{title:"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6",permalink:"/OrigamiStudio/docs/Utility/When Prototype Starts"}},p={},s=[{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(t){var e=t.components,r=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wait-\u7b49\u5f85"},"Wait \u7b49\u5f85"),(0,a.kt)("p",null,"Start a timer that waits the input duration before outputting a pulse."),(0,a.kt)("p",null,"\u542f\u52a8\u7b49\u5f85\u6307\u5b9a\u65f6\u95f4\u7684\u8ba1\u65f6\u5668"),(0,a.kt)("p",null,"\uff08\u8bbe\u7f6e\u5ef6\u8fdf\u52a8\u753b\u7684\u8ba1\u65f6\u5668\uff0c\u5728\u8981\u5ef6\u8fdf\u7684\u8109\u51b2\u4e0a\u52a0\u4e0a\u4e00\u4e2a Wait \u6a21\u5757\uff0c\u5c31\u80fd\u8ba9\u8fd9\u4e2a\u8109\u51b2\u5ef6\u8fdf\u8bbe\u5b9a\u7684\u65f6\u95f4\u5230\u8fbe\u4e0b\u4e00\u4e2a\u6a21\u5757\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7cfb782b-0aac-4c69-9a63-e06d76b94acd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T182735Z&X-Amz-Expires=86400&X-Amz-Signature=cbe24b6cbd86cac079051636142bd7a86860771cf2db6cacd971396016a46713&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,a.kt)("p",null,"A pulse that starts the timer."),(0,a.kt)("p",null,"\u542f\u52a8\u5b9a\u65f6\u5668\u7684\u8109\u51b2\u3002"),(0,a.kt)("h3",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,a.kt)("p",null,"The time to wait."),(0,a.kt)("p",null,"\u8981\u7b49\u5f85\u7684\u65f6\u95f4\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A boolean that is true when the wait is finished"),(0,a.kt)("p",null,"\u7b49\u5f85\u65f6\u95f4\u7ed3\u675f\u540e\u53d1\u51fa\u8109\u51b2\u3002\u4e00\u822c\u8fde\u63a5\u5230\u4e8b\u4ef6\u7c7b\u6a21\u5757\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/When%20Prototype%20Starts"},"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6")))}m.isMDXComponent=!0}}]);