"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[42510],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=i.createContext({}),c=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=c(n),m=o,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?i.createElement(h,a(a({ref:e},u),{},{components:n})):i.createElement(h,a({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93571:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Point 3D \u4e09\u7ef4\u70b9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Point 3D \u4e09\u7ef4\u70b9",l={unversionedId:"documentation/Utility/Point 3D",id:"documentation/Utility/Point 3D",title:"Point 3D \u4e09\u7ef4\u70b9",description:"Create a point with 3 dimensions (X, Y). Useful when providing position and rotation values to layers.",source:"@site/docs/documentation/Utility/Point 3D.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Point 3D",permalink:"/OrigamiStudio/docs/documentation/Utility/Point 3D",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Point 3D.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Point 3D \u4e09\u7ef4\u70b9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Point 3D Unpack 3D\u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Point 3D Unpack"},next:{title:"Point Unpack \u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Point Unpack"}},p={},c=[{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:c};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"point-3d-\u4e09\u7ef4\u70b9"},"Point 3D \u4e09\u7ef4\u70b9"),(0,o.kt)("p",null,"Create a point with 3 dimensions (X, Y). Useful when providing position and rotation values to layers."),(0,o.kt)("p",null,"\u521b\u5efa\u5177\u67093\u4e2a\u7ef4\u5ea6\uff08X\uff0cY\uff0cZ\uff09\u7684\u70b9\u3002\u7528\u4e8e\u5f53\u5411\u56fe\u5c42\u63d0\u4f9b\u4f4d\u7f6e\u3001\u5927\u5c0f\u3001\u951a\u70b9\u548c\u8f74\u5fc3\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(47443).Z,width:"1506",height:"264"})),(0,o.kt)("h3",{id:"x"},"X"),(0,o.kt)("p",null,"A number that represents the X value, which can represent a horizontal position or pitch rotation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6c34\u5e73\u4f4d\u7f6e\u6216\u4fef\u4ef0\u65cb\u8f6c\u7684X\u503c\u3002"),(0,o.kt)("h3",{id:"y"},"Y"),(0,o.kt)("p",null,"A number that represents the Y value, which can represent a vertical position or yaw rotation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u8868\u793a\u5782\u76f4\u4f4d\u7f6e\u6216\u504f\u822a\u65cb\u8f6c\u7684Y\u503c\u3002"),(0,o.kt)("h3",{id:"z"},"Z"),(0,o.kt)("p",null,"A number that represents the Z value, which can represent a depth position or roll rotation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6df1\u5ea6\u4f4d\u7f6e\u6216\u6eda\u52a8\u65cb\u8f6c\u7684Z\u503c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(46282).Z,width:"1670",height:"960"})),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"A point with 3 dimensions."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4e09\u4e2a\u7ef4\u5ea6\u7684\u70b9\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point"},"Point \u70b9")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Point Unpack \u70b9\u89e3\u7ec4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}d.isMDXComponent=!0},46282:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/point-3d-example-49821e9278e7ab9067b2a3a1f5b8eee9.png"},47443:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/point-3d-cf912fae7e80c7e63b81816aabdac0f1.png"}}]);