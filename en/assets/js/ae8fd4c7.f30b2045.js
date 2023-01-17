"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[11668],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=i.createContext({}),p=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||r;return n?i.createElement(g,o(o({ref:e},u),{},{components:n})):i.createElement(g,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3964:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Spacing \u95f4\u8ddd",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Spacing \u95f4\u8ddd",l={unversionedId:"documentation/Utility/Spacing",id:"documentation/Utility/Spacing",title:"Spacing \u95f4\u8ddd",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Spacing.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Spacing",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Spacing",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Spacing.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:5,frontMatter:{title:"Spacing \u95f4\u8ddd",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Spacing Unpack"},next:{title:"Splitter \u5206\u79bb\u5668",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Splitter"}},c={},p=[{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:p};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spacing-\u95f4\u8ddd"},"Spacing \u95f4\u8ddd"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Create spacing with 2 dimensions (X, Y). Useful when providing spacing to Layout of layers."),(0,a.kt)("p",null,"\u521b\u5efa\u5177\u6709 2 \u4e2a\u7ef4\u5ea6\uff08X\u3001Y\uff09\u7684\u95f4\u8ddd\u3002\u5728\u4e3a\u56fe\u5c42\u5e03\u5c40\u9700\u8981\u95f4\u8ddd\u65f6\u5f88\u6709\u7528\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Spacing"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"X",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"Y",(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,(0,a.kt)("span",null))))),(0,a.kt)("h3",{id:"x"},"X"),(0,a.kt)("p",null,"The amount of spacing on the X axis."),(0,a.kt)("p",null,"X \u8f74\u4e0a\u7684\u95f4\u8ddd\u3002"),(0,a.kt)("h3",{id:"y"},"Y"),(0,a.kt)("p",null,"The amount of spacing on the Y axis."),(0,a.kt)("p",null,"Y \u8f74\u4e0a\u7684\u95f4\u8ddd\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"Spacing with 2 dimensions."),(0,a.kt)("p",null,"\u4e8c\u7ef4\u7a7a\u95f4\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point"},"Point \u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D \u70b9\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}s.isMDXComponent=!0}}]);