"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[65880],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),p=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?i.createElement(f,a(a({ref:e},u),{},{components:n})):i.createElement(f,a({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76948:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5},a="Point \u70b9",l={unversionedId:"documentation/Utility/Point",id:"documentation/Utility/Point",title:"Point \u70b9",description:"Create a point with 2 dimensions (X, Y). Useful when providing position, size, anchor, and pivot values to layers.",source:"@site/docs/documentation/Utility/Point.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Point",permalink:"/OrigamiStudio/docs/documentation/Utility/Point",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Point.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667316201,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Point Unpack \u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Point Unpack"},next:{title:"Progress \u8fdb\u5ea6",permalink:"/OrigamiStudio/docs/documentation/Utility/Progress"}},c={},p=[{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Output",id:"output",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:p};function d(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"point-\u70b9"},"Point \u70b9"),(0,r.kt)("p",null,"Create a point with 2 dimensions (X, Y). Useful when providing position, size, anchor, and pivot values to layers."),(0,r.kt)("p",null,"\u521b\u5efa\u5177\u67092\u4e2a\u7ef4\u5ea6\uff08X\uff0cY\uff09\u7684\u70b9\u3002\u7528\u4e8e\u5f53\u5411\u56fe\u5c42\u63d0\u4f9b\u4f4d\u7f6e\u3001\u5927\u5c0f\u3001\u951a\u70b9\u548c\u8f74\u5fc3\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(74730).Z,width:"1224",height:"216"})),(0,r.kt)("h3",{id:"x"},"X"),(0,r.kt)("p",null,"A number that represents the horizontal X value."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6c34\u5e73\u4f4d\u7f6e\u7684X\u503c\u3002"),(0,r.kt)("h3",{id:"y"},"Y"),(0,r.kt)("p",null,"A number that represents the vertical Y value."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5782\u76f4\u4f4d\u7f6e\u7684Y\u503c\u3002"),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("p",null,"A point with 2 dimensions."),(0,r.kt)("p",null,"\u4e00\u4e2a 2 \u4e2a\u7ef4\u5ea6\u7684\u70b9\uff0c"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Point Unpack \u70b9\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}d.isMDXComponent=!0},74730:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/point-bf5279f0545a2996e8c61c05918cc58b.png"}}]);