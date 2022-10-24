"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[63763],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(o),m=n,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return o?r.createElement(f,l(l({ref:t},p),{},{components:o})):r.createElement(f,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},779:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:5},l="Hex Color Hex \u989c\u8272",i={unversionedId:"documentation/Color/Hex Color",id:"documentation/Color/Hex Color",title:"Hex Color Hex \u989c\u8272",description:"Create a color from hex.",source:"@site/docs/documentation/Color/Hex Color.md",sourceDirName:"documentation/Color",slug:"/documentation/Color/Hex Color",permalink:"/OrigamiStudio/docs/documentation/Color/Hex Color",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Color/Hex Color.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666622342,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"HSL Color HSL\u989c\u8272",permalink:"/OrigamiStudio/docs/documentation/Color/HSL Color"},next:{title:"RGB Color RGB\u989c\u8272",permalink:"/OrigamiStudio/docs/documentation/Color/RGB Color"}},c={},u=[{value:"Hex \u5341\u516d\u8fdb\u5236",id:"hex-\u5341\u516d\u8fdb\u5236",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hex-color-hex-\u989c\u8272"},"Hex Color Hex \u989c\u8272"),(0,n.kt)("p",null,"Create a color from hex."),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5341\u516d\u8fdb\u5236\u503c\u989c\u8272\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(34919).Z,width:"1502",height:"198"})),(0,n.kt)("h3",{id:"hex-\u5341\u516d\u8fdb\u5236"},"Hex \u5341\u516d\u8fdb\u5236"),(0,n.kt)("p",null,"The hex representation of color as a text string."),(0,n.kt)("p",null,"\u8868\u793a\u5341\u516d\u8fdb\u5236\u8272\u503c\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"The color."),(0,n.kt)("p",null,"\u8f93\u51fa\u8272\u503c"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20Hex"},"Color to Hex \u8f6c\u6362\u4e3a Hex \u989c\u8272")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20RGB"},"Color to RGB \u8f6c\u6362\u4e3a RGB \u989c\u8272")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20HSL"},"Color to HSL \u8f6c\u6362\u4e3a HSL \u989c\u8272")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/HSL%20Color"},"HSL Color HSL\u989c\u8272")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/RGB%20Color"},"RGB Color RGB\u989c\u8272")))}d.isMDXComponent=!0},34919:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/hex-color-8fe05092b0c90510ef34a24998a3462c.png"}}]);