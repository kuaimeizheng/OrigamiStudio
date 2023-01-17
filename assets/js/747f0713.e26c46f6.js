"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[65880],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?i.createElement(k,a(a({ref:e},p),{},{components:n})):i.createElement(k,a({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76948:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"Point \u70b9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Point \u70b9",l={unversionedId:"documentation/Utility/Point",id:"documentation/Utility/Point",title:"Point \u70b9",description:"---",source:"@site/docs/documentation/Utility/Point.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Point",permalink:"/OrigamiStudio/docs/documentation/Utility/Point",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Point.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:5,frontMatter:{title:"Point \u70b9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Point Unpack \u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Point Unpack"},next:{title:"Progress \u8fdb\u5ea6",permalink:"/OrigamiStudio/docs/documentation/Utility/Progress"}},u={},c=[{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Output",id:"output",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"point-\u70b9"},"Point \u70b9"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Create a point with 2 dimensions (X, Y). Useful when providing position, size, anchor, and pivot values to layers."),(0,r.kt)("p",null,"\u521b\u5efa\u5177\u6709 2 \u4e2a\u7ef4\u5ea6\uff08X\uff0cY\uff09\u7684\u70b9\u3002\u7528\u4e8e\u5f53\u5411\u56fe\u5c42\u63d0\u4f9b\u4f4d\u7f6e\u3001\u5927\u5c0f\u3001\u951a\u70b9\u548c\u8f74\u5fc3\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Point"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"X",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Y",(0,r.kt)("span",null,"0"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"\xa0",(0,r.kt)("span",null,"0"))))),(0,r.kt)("h3",{id:"x"},"X"),(0,r.kt)("p",null,"A number that represents the horizontal X value."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6c34\u5e73\u4f4d\u7f6e\u7684 X \u503c\u3002"),(0,r.kt)("h3",{id:"y"},"Y"),(0,r.kt)("p",null,"A number that represents the vertical Y value."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5782\u76f4\u4f4d\u7f6e\u7684 Y \u503c\u3002"),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("p",null,"A point with 2 dimensions."),(0,r.kt)("p",null,"\u4e00\u4e2a 2 \u4e2a\u7ef4\u5ea6\u7684\u70b9\uff0c"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Point Unpack \u70b9\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D \u70b9\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}s.isMDXComponent=!0}}]);