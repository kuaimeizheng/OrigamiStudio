"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[99115],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var i=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=i.createContext({}),p=function(t){var e=i.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return i.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?i.createElement(f,o(o({ref:e},c),{},{components:r})):i.createElement(f,o({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}s.displayName="MDXCreateElement"},83401:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Wait \u7b49\u5f85",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Wait \u7b49\u5f85",l={unversionedId:"documentation/Utility/Wait",id:"documentation/Utility/Wait",title:"Wait \u7b49\u5f85",description:"Start a timer that waits the input duration before outputting a pulse.",source:"@site/docs/documentation/Utility/Wait.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Wait",permalink:"/OrigamiStudio/docs/documentation/Utility/Wait",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Wait.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667730725,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{title:"Wait \u7b49\u5f85",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Video \u89c6\u9891",permalink:"/OrigamiStudio/docs/documentation/Utility/Video"},next:{title:"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6",permalink:"/OrigamiStudio/docs/documentation/Utility/When Prototype Starts"}},u={},p=[{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wait-\u7b49\u5f85"},"Wait \u7b49\u5f85"),(0,n.kt)("p",null,"Start a timer that waits the input duration before outputting a pulse."),(0,n.kt)("p",null,"\u542f\u52a8\u7b49\u5f85\u6307\u5b9a\u65f6\u95f4\u7684\u8ba1\u65f6\u5668"),(0,n.kt)("p",null,"\uff08\u8bbe\u7f6e\u5ef6\u8fdf\u52a8\u753b\u7684\u8ba1\u65f6\u5668\uff0c\u5728\u8981\u5ef6\u8fdf\u7684\u8109\u51b2\u4e0a\u52a0\u4e0a\u4e00\u4e2a Wait \u6a21\u5757\uff0c\u5c31\u80fd\u8ba9\u8fd9\u4e2a\u8109\u51b2\u5ef6\u8fdf\u8bbe\u5b9a\u7684\u65f6\u95f4\u5230\u8fbe\u4e0b\u4e00\u4e2a\u6a21\u5757\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(89209).Z,width:"1282",height:"206"})),(0,n.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,n.kt)("p",null,"A pulse that starts the timer."),(0,n.kt)("p",null,"\u542f\u52a8\u5b9a\u65f6\u5668\u7684\u8109\u51b2\u3002"),(0,n.kt)("h3",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,n.kt)("p",null,"The time to wait."),(0,n.kt)("p",null,"\u8981\u7b49\u5f85\u7684\u65f6\u95f4\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"A boolean that is true when the wait is finished"),(0,n.kt)("p",null,"\u7b49\u5f85\u65f6\u95f4\u7ed3\u675f\u540e\u53d1\u51fa\u8109\u51b2\u3002\u4e00\u822c\u8fde\u63a5\u5230\u4e8b\u4ef6\u7c7b\u6a21\u5757\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/When%20Prototype%20Starts"},"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6")))}d.isMDXComponent=!0},89209:(t,e,r)=>{r.d(e,{Z:()=>i});const i=r.p+"assets/images/wait-9a7a4a73a92db8eae37cd2cfd78ffaa8.png"}}]);