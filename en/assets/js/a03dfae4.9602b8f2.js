"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7668],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(r),y=a,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55132:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Array Sort \u6570\u7ec4\u6392\u5e8f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Array Sort \u6570\u7ec4\u6392\u5e8f",l={unversionedId:"documentation/Data/Array Sort",id:"documentation/Data/Array Sort",title:"Array Sort \u6570\u7ec4\u6392\u5e8f",description:"Returns an array in sorted order.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Data/Array Sort.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Array Sort",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Sort",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Array Sort.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{title:"Array Sort \u6570\u7ec4\u6392\u5e8f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Array Reverse \u6570\u7ec4\u53cd\u8f6c",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Reverse"},next:{title:"Get Keys \u83b7\u53d6\u952e",permalink:"/OrigamiStudio/en/docs/documentation/Data/Get Keys"}},u={},c=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Sort By \u6392\u5e8f\u65b9\u5f0f",id:"sort-by-\u6392\u5e8f\u65b9\u5f0f",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array-sort-\u6570\u7ec4\u6392\u5e8f"},"Array Sort \u6570\u7ec4\u6392\u5e8f"),(0,a.kt)("p",null,"Returns an array in sorted order."),(0,a.kt)("p",null,"\u8fd4\u56de\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Array Sort"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Array",(0,a.kt)("span",null)),(0,a.kt)("li",null,"Sort By",(0,a.kt)("span",null))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,(0,a.kt)("span",null))))),(0,a.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,a.kt)("p",null,"An array to sort."),(0,a.kt)("p",null,"\u9700\u8981\u6392\u5e8f\u7684\u6570\u7ec4\u3002"),(0,a.kt)("h3",{id:"sort-by-\u6392\u5e8f\u65b9\u5f0f"},"Sort By \u6392\u5e8f\u65b9\u5f0f"),(0,a.kt)("p",null,"The sorting method \u2013 Ascending or Descending."),(0,a.kt)("p",null,"\u6392\u5e8f\u65b9\u5f0f\u2014\u2014\u5347\u5e8f\u6216\u964d\u5e8f\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The sorted array."),(0,a.kt)("p",null,"\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Array%20Reverse"},"Array Reverse \u6570\u7ec4\u53cd\u8f6c")))}p.isMDXComponent=!0}}]);