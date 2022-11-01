"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[77710],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(y,i(i({ref:e},c),{},{components:r})):a.createElement(y,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5018:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Array Count \u6570\u7ec4\u6570\u91cf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Array Count \u6570\u7ec4\u6570\u91cf",u={unversionedId:"documentation/Data/Array Count",id:"documentation/Data/Array Count",title:"Array Count \u6570\u7ec4\u6570\u91cf",description:"Count the number of items in a JSON array.",source:"@site/docs/documentation/Data/Array Count.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Array Count",permalink:"/OrigamiStudio/docs/documentation/Data/Array Count",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Array Count.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667317157,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{title:"Array Count \u6570\u7ec4\u6570\u91cf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Array Append \u6570\u7ec4\u6dfb\u52a0",permalink:"/OrigamiStudio/docs/documentation/Data/Array Append"},next:{title:"Array Join \u6570\u7ec4\u8fde\u63a5",permalink:"/OrigamiStudio/docs/documentation/Data/Array Join"}},l={},p=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"array-count-\u6570\u7ec4\u6570\u91cf"},"Array Count \u6570\u7ec4\u6570\u91cf"),(0,n.kt)("p",null,"Count the number of items in a JSON array."),(0,n.kt)("p",null,"\u8ba1\u7b97 JSON \u6570\u7ec4\u9009\u9879\u7684\u6570\u91cf\u3002"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Array Count"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Array",(0,n.kt)("span",null))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,(0,n.kt)("span",null))))),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"A JSON array to count."),(0,n.kt)("p",null,"\u8981\u8ba1\u7b97\u6570\u91cf\u7684JSON\u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"The number of items in the JSON array."),(0,n.kt)("p",null,"JSON\u6570\u7ec4\u4e2d\u9879\u76ee\u7684\u6570\u91cf\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4"),"]"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Array%20Append"},"Array Append \u6570\u7ec4\u6dfb\u52a0")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Subarray"},"Subarray \u5b50\u6570\u7ec4")))}s.isMDXComponent=!0}}]);