"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[24532],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=i.createContext({}),p=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return n?i.createElement(k,o(o({ref:e},u),{},{components:n})):i.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78554:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4",l={unversionedId:"documentation/Utility/Vec4 Unpack",id:"documentation/Utility/Vec4 Unpack",title:"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4",description:"Turn a point with 4 dimensions into its individual X, Y, Z, and W values.",source:"@site/docs/documentation/Utility/Vec4 Unpack.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Vec4 Unpack",permalink:"/OrigamiStudio/docs/documentation/Utility/Vec4 Unpack",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Vec4 Unpack.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Variable Receiver"},next:{title:"Vec4 \u56db\u7ef4",permalink:"/OrigamiStudio/docs/documentation/Utility/Vec4"}},c={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"W###",id:"w",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:p};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vec4-unpack-\u56db\u7ef4\u89e3\u7ec4"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4"),(0,a.kt)("p",null,"Turn a point with 4 dimensions into its individual X, Y, Z, and W values."),(0,a.kt)("p",null,"\u5c06\u5177\u6709 4 \u4e2a\u7ef4\u5ea6\u7684\u70b9\u8f6c\u6362\u4e3a\u5176\u5355\u72ec\u7684 X\u3001Y\u3001Z \u548c W \u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(74645).Z,width:"1502",height:"302"})),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A point with 4 dimensions."),(0,a.kt)("p",null,"\u5177\u6709 4 \u4e2a\u7ef4\u5ea6\u7684\u70b9\u3002"),(0,a.kt)("h3",{id:"x"},"X"),(0,a.kt)("p",null,"A number that represents the X value."),(0,a.kt)("p",null,"\u8868\u793a X \u503c\u7684\u6570\u5b57\u3002"),(0,a.kt)("h3",{id:"y"},"Y"),(0,a.kt)("p",null,"A number that represents the Y value."),(0,a.kt)("p",null,"\u8868\u793a Y \u503c\u7684\u6570\u5b57\u3002"),(0,a.kt)("h3",{id:"z"},"Z"),(0,a.kt)("p",null,"A number that represents the Z value."),(0,a.kt)("p",null,"\u8868\u793a Z \u503c\u7684\u6570\u5b57\u3002"),(0,a.kt)("h3",{id:"w"},"W###"),(0,a.kt)("p",null,"A number that represents the W value."),(0,a.kt)("p",null,"\u8868\u793a W \u503c\u7684\u6570\u5b57\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point"},"Point \u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Point Unpack \u70b9\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}d.isMDXComponent=!0},74645:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/vec4-unpack-688e38d81fc078b0a160de6a1d9eb385.png"}}]);