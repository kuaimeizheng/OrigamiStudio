"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[36208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),y=n,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Array Reverse \u6570\u7ec4\u53cd\u8f6c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Array Reverse \u6570\u7ec4\u53cd\u8f6c",l={unversionedId:"documentation/Data/Array Reverse",id:"documentation/Data/Array Reverse",title:"Array Reverse \u6570\u7ec4\u53cd\u8f6c",description:"Returns an array in reverse order.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Data/Array Reverse.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Array Reverse",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Reverse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Array Reverse.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{title:"Array Reverse \u6570\u7ec4\u53cd\u8f6c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Array Join \u6570\u7ec4\u8fde\u63a5",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Join"},next:{title:"Array Sort \u6570\u7ec4\u6392\u5e8f",permalink:"/OrigamiStudio/en/docs/documentation/Data/Array Sort"}},u={},s=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"array-reverse-\u6570\u7ec4\u53cd\u8f6c"},"Array Reverse \u6570\u7ec4\u53cd\u8f6c"),(0,n.kt)("p",null,"Returns an array in reverse order."),(0,n.kt)("p",null,"\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u8fd4\u56de\u6570\u7ec4\u3002"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Array Reverse"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Array",(0,n.kt)("span",null))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,(0,n.kt)("span",null))))),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"An array to reverse."),(0,n.kt)("p",null,"\u9700\u8981\u53cd\u8f6c\u7684\u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"The reversed array."),(0,n.kt)("p",null,"\u53cd\u8f6c\u540e\u7684\u6570\u7ec4\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Array%20Sort"},"Array Sort \u6570\u7ec4\u6392\u5e8f")))}p.isMDXComponent=!0}}]);