"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[416],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,y=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return o?r.createElement(y,i(i({ref:t},u),{},{components:o})):r.createElement(y,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9433:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:5},i="Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",p={unversionedId:"documentation/Loops/Loop to Array",id:"documentation/Loops/Loop to Array",title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",description:"Convert a loop to an array.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Loop to Array.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop to Array",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop to Array",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop to Array.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop Sum \u5faa\u73af\u603b\u548c",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Sum"},next:{title:"Running Total \u7d2f\u79ef\u603b\u8ba1",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Running Total"}},l={},c=[{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loop-to-array-\u5faa\u73af\u8f6c\u6362\u6570\u7ec4"},"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4"),(0,n.kt)("p",null,"Convert a loop to an array."),(0,n.kt)("p",null,"\u5c06\u5faa\u73af\u8f6c\u6362\u4e3a\u6570\u7ec4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(67289).Z,width:"1396",height:"210"})),(0,n.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,n.kt)("p",null,"A loop of values."),(0,n.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af"),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"A JSON array of values."),(0,n.kt)("p",null,"\u5305\u542b\u503c\u7684JSON\u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(83187).Z,width:"104",height:"362"})),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")))}s.isMDXComponent=!0},83187:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/loop-to-array-item-dcc5380fb163a16e0c90a0a2dd3a3b2d.png"},67289:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/loop-to-array-cbb39ccb66027d0cac2b1b884ec68ad7.png"}}]);