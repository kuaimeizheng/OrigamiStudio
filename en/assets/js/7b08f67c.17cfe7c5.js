"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[73196],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(y,i(i({ref:e},s),{},{components:r})):n.createElement(y,i({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81798:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:5},i="When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6",p={unversionedId:"documentation/Utility/When Prototype Starts",id:"documentation/Utility/When Prototype Starts",title:"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6",description:"Output a pulse when the prototype starts (on the first frame). Restart the prototype with \u2318R to trigger a pulse.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/When Prototype Starts.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/When Prototype Starts",permalink:"/OrigamiStudio/en/docs/documentation/Utility/When Prototype Starts",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/When Prototype Starts.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667493511,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Wait \u7b49\u5f85",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Wait"},next:{title:"Layer \u56fe\u5c42",permalink:"/OrigamiStudio/en/docs/category/layer-\u56fe\u5c42"}},u={},l=[{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:l};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"when-prototype-starts-\u5f53\u539f\u578b\u542f\u52a8\u65f6"},"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6"),(0,o.kt)("p",null,"Output a pulse when the prototype starts (on the first frame). Restart the prototype with \u2318R to trigger a pulse."),(0,o.kt)("p",null,"This patch also outputs a pulse when it is added from the Layer Library."),(0,o.kt)("p",null,"\u5f53\u539f\u578b\u542f\u52a8\u65f6\uff08\u5728\u7b2c\u4e00\u5e27\u4e0a\uff09\u8f93\u51fa\u8109\u51b2\u3002\u6309 \u2318R \u91cd\u65b0\u542f\u52a8\u539f\u578b\u89e6\u53d1\u8109\u51b2\u3002"),(0,o.kt)("p",null,"\u5f53\u4ece\u56fe\u5c42\u5e93\u4e2d\u6dfb\u52a0\u6b64\u6a21\u5757\u65f6\uff0c\u5b83\u4e5f\u4f1a\u8f93\u51fa\u4e00\u4e2a\u8109\u51b2\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(13515).Z,width:"1218",height:"188"})),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"A pulse on the first frame of a prototype."),(0,o.kt)("p",null,"\u8fde\u63a5\u5230\u539f\u578b\u7b2c\u4e00\u5e27\u4e0a\u7684\u8109\u51b2\u3002\u4e00\u822c\u8fde\u63a5\u5230\u5f00\u5173\u7b49\u4e8b\u4ef6\u7c7b\u6a21\u5757\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Pulse"},"Pulse \u8109\u51b2")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Pulse%20on%20Change"},"Pulse on Change \u8109\u51b2\u53d8\u5316")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Wait"},"Wait \u7b49\u5f85")))}c.isMDXComponent=!0},13515:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/when-prototype-starts-d96a4d83ebbe46b03f86798eab0add70.png"}}]);