"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[42510],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=i.createContext({}),u=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return n?i.createElement(k,o(o({ref:e},c),{},{components:n})):i.createElement(k,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93571:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={title:"Point 3D \u4e09\u7ef4\u70b9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Point 3D \u4e09\u7ef4\u70b9",l={unversionedId:"documentation/Utility/Point 3D",id:"documentation/Utility/Point 3D",title:"Point 3D \u4e09\u7ef4\u70b9",description:"---",source:"@site/docs/documentation/Utility/Point 3D.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Point 3D",permalink:"/OrigamiStudio/docs/documentation/Utility/Point 3D",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Point 3D.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667996896,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Point 3D \u4e09\u7ef4\u70b9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Point 3D Unpack 3D\u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Point 3D Unpack"},next:{title:"Point Unpack \u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Point Unpack"}},p={},u=[{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"point-3d-\u4e09\u7ef4\u70b9"},"Point 3D \u4e09\u7ef4\u70b9"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Create a point with 3 dimensions (X, Y). Useful when providing position and rotation values to layers."),(0,a.kt)("p",null,"\u521b\u5efa\u5177\u6709 3 \u4e2a\u7ef4\u5ea6\uff08X\uff0cY\uff0cZ\uff09\u7684\u70b9\u3002\u7528\u4e8e\u5f53\u5411\u56fe\u5c42\u63d0\u4f9b\u4f4d\u7f6e\u3001\u5927\u5c0f\u3001\u951a\u70b9\u548c\u8f74\u5fc3\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Point 3D"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"X",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"Y",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"Z",(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"\xa0",(0,a.kt)("span",null,"0"))))),(0,a.kt)("h3",{id:"x"},"X"),(0,a.kt)("p",null,"A number that represents the X value, which can represent a horizontal position or pitch rotation."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6c34\u5e73\u4f4d\u7f6e\u6216\u4fef\u4ef0\u65cb\u8f6c\u7684 X \u503c\u3002"),(0,a.kt)("h3",{id:"y"},"Y"),(0,a.kt)("p",null,"A number that represents the Y value, which can represent a vertical position or yaw rotation."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u8868\u793a\u5782\u76f4\u4f4d\u7f6e\u6216\u504f\u822a\u65cb\u8f6c\u7684 Y \u503c\u3002"),(0,a.kt)("h3",{id:"z"},"Z"),(0,a.kt)("p",null,"A number that represents the Z value, which can represent a depth position or roll rotation."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6df1\u5ea6\u4f4d\u7f6e\u6216\u6eda\u52a8\u65cb\u8f6c\u7684 Z \u503c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(46282).Z,width:"1670",height:"960"})),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A point with 3 dimensions."),(0,a.kt)("p",null,"\u4e00\u4e2a\u4e09\u4e2a\u7ef4\u5ea6\u7684\u70b9\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point"},"Point \u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Point Unpack \u70b9\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D \u70b9\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}s.isMDXComponent=!0},46282:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/point-3d-example-49821e9278e7ab9067b2a3a1f5b8eee9.png"}}]);