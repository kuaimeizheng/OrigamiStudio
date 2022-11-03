"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[36175],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),s=p(n),m=o,k=s["".concat(l,".").concat(m)]||s[m]||d[m]||r;return n?i.createElement(k,a(a({ref:e},u),{},{components:n})):i.createElement(k,a({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=s;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26859:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_position:5},a="Point Unpack \u70b9\u89e3\u7ec4",c={unversionedId:"documentation/Utility/Point Unpack",id:"documentation/Utility/Point Unpack",title:"Point Unpack \u70b9\u89e3\u7ec4",description:"Turn a point with 2 dimensions (position, size, anchor, pivot) into its individual X and Y values.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Point Unpack.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Point Unpack",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Point Unpack",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Point Unpack.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667493511,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Point 3D \u4e09\u7ef4\u70b9",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Point 3D"},next:{title:"Point \u70b9",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Point"}},l={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:p};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"point-unpack-\u70b9\u89e3\u7ec4"},"Point Unpack \u70b9\u89e3\u7ec4"),(0,o.kt)("p",null,"Turn a point with 2 dimensions (position, size, anchor, pivot) into its individual X and Y values."),(0,o.kt)("p",null,"\u5c062\u7ef4\uff08\u4f4d\u7f6e\uff0c\u65cb\u8f6c\uff09\u7684\u70b9\u8f6c\u6362\u4e3a\u5355\u72ec\u7684X\u3001Y\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(5198).Z,width:"1344",height:"232"})),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A point with 2 dimensions."),(0,o.kt)("p",null,"\u4e00\u4e2a 2 \u4e2a\u7ef4\u5ea6\u7684\u70b9\u3002"),(0,o.kt)("h3",{id:"x"},"X"),(0,o.kt)("p",null,"A number that represents the horizontal X value."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6c34\u5e73\u4f4d\u7f6e\u7684X\u503c\u3002"),(0,o.kt)("h3",{id:"y"},"Y"),(0,o.kt)("p",null,"A number that represents the vertical Y value."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u8ff0\u5782\u76f4\u4f4d\u7f6e\u7684Y\u503c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point"},"Point \u70b9")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}d.isMDXComponent=!0},5198:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/point-unpack-1c33acf3bf0793427c1bc3c60e716ebf.png"}}]);