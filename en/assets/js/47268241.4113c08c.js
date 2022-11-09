"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[73326],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(y,o(o({ref:e},c),{},{components:r})):n.createElement(y,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76321:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Array Join \u6570\u7ec4\u8fde\u63a5",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Array Join \u6570\u7ec4\u8fde\u63a5",l={unversionedId:"documentation/Data/Array Join",id:"documentation/Data/Array Join",title:"Array Join \u6570\u7ec4\u8fde\u63a5",description:"Joins multiple arrays into a single array.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Data/Array Join.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Array Join",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Join",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Array Join.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{title:"Array Join \u6570\u7ec4\u8fde\u63a5",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Array Count \u6570\u7ec4\u6570\u91cf",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Count"},next:{title:"Array Reverse \u6570\u7ec4\u53cd\u8f6c",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Reverse"}},u={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array-join-\u6570\u7ec4\u8fde\u63a5"},"Array Join \u6570\u7ec4\u8fde\u63a5"),(0,a.kt)("p",null,"Joins multiple arrays into a single array."),(0,a.kt)("p",null,"\u5c06\u591a\u4e2a\u6570\u7ec4\u8fde\u63a5\u6210\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"Right-click the patch to add additional inputs."),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Array Join"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"\xa0",(0,a.kt)("span",null)),(0,a.kt)("li",null,"\xa0",(0,a.kt)("span",null))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,(0,a.kt)("span",null))))),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A JSON array."),(0,a.kt)("p",null,"\u4e00\u4e2aJSON\u6570\u7ec4\u3002"),(0,a.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A JSON array to join with the first array."),(0,a.kt)("p",null,"\u8981\u4e0e\u7b2c\u4e00\u4e2a\u6570\u7ec4\u8fde\u63a5\u7684JSON\u6570\u7ec4\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A single joined array."),(0,a.kt)("p",null,"\u5408\u5e76\u540e\u7684\u6570\u7ec4\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Array%20Append"},"Array Append \u6570\u7ec4\u6dfb\u52a0")))}s.isMDXComponent=!0}}]);