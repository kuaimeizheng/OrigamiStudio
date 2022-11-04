"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[54053],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),u=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return i.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?i.createElement(f,o(o({ref:e},p),{},{components:n})):i.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},55330:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={title:"Vec4 \u56db\u7ef4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Vec4 \u56db\u7ef4",l={unversionedId:"documentation/Utility/Vec4",id:"documentation/Utility/Vec4",title:"Vec4 \u56db\u7ef4",description:"Create a point with 4 dimensions (X, Y, Z, W).",source:"@site/docs/documentation/Utility/Vec4.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Vec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Vec4",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Vec4.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Vec4 \u56db\u7ef4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Vec4 Unpack"},next:{title:"Velocity \u901f\u5ea6",permalink:"/OrigamiStudio/docs/documentation/Utility/Velocity"}},c={},u=[{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"W###",id:"w",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:u};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vec4-\u56db\u7ef4"},"Vec4 \u56db\u7ef4"),(0,r.kt)("p",null,"Create a point with 4 dimensions (X, Y, Z, W)."),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5177\u6709 4 \u4e2a\u7ef4\u5ea6\uff08X\u3001Y\u3001Z\u3001W\uff09\u7684\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(17228).Z,width:"1502",height:"298"})),(0,r.kt)("h3",{id:"x"},"X"),(0,r.kt)("p",null,"A number that represents the X value."),(0,r.kt)("p",null,"\u8868\u793a X \u503c\u7684\u6570\u5b57\u3002"),(0,r.kt)("h3",{id:"y"},"Y"),(0,r.kt)("p",null,"A number that represents the Y value."),(0,r.kt)("p",null,"\u8868\u793a Y \u503c\u7684\u6570\u5b57\u3002"),(0,r.kt)("h3",{id:"z"},"Z"),(0,r.kt)("p",null,"A number that represents the Z value."),(0,r.kt)("p",null,"\u8868\u793a Z \u503c\u7684\u6570\u5b57\u3002"),(0,r.kt)("h3",{id:"w"},"W###"),(0,r.kt)("p",null,"A number that represents the W value."),(0,r.kt)("p",null,"\u8868\u793a W \u503c\u7684\u6570\u5b57\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"A point with 4 dimensions."),(0,r.kt)("p",null,"\u5177\u6709 4 \u4e2a\u7ef4\u5ea6\u7684\u70b9\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point"},"Point \u70b9")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Point Unpack \u70b9\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}d.isMDXComponent=!0},17228:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/vec4-4424b0448f4b1bfa4a6b1fd59be4e767.png"}}]);