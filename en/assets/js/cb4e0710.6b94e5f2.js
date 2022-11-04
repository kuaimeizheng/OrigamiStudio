"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[97620],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(o),d=r,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},56997:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:5},i="Loop Sum \u5faa\u73af\u603b\u548c",u={unversionedId:"documentation/Loops/Loop Sum",id:"documentation/Loops/Loop Sum",title:"Loop Sum \u5faa\u73af\u603b\u548c",description:"Calculate the sum of every value in a loop.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Loop Sum.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Sum",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Sum",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Sum.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop Shuffle \u73af\u968f\u673a\u6392\u5e8f",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Shuffle"},next:{title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop to Array"}},p={},l=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Sum \u603b\u548c",id:"sum-\u603b\u548c",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:l};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-sum-\u5faa\u73af\u603b\u548c"},"Loop Sum \u5faa\u73af\u603b\u548c"),(0,r.kt)("p",null,"Calculate the sum of every value in a loop."),(0,r.kt)("p",null,"\u8ba1\u7b97\u5faa\u73af\u4e2d\u6bcf\u4e2a\u503c\u7684\u603b\u548c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(32965).Z,width:"1310",height:"232"})),(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A loop of numbers, indices, or booleans."),(0,r.kt)("p",null,"\u6570\u5b57\u3001\u7d22\u5f15\u6216\u5e03\u5c14\u503c\u7684\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"sum-\u603b\u548c"},"Sum \u603b\u548c"),(0,r.kt)("p",null,"A number that represents the sum of every value."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u6bcf\u4e2a\u503c\u7684\u603b\u548c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Running%20Total"},"Running Total \u7d2f\u79ef\u603b\u8ba1")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")))}s.isMDXComponent=!0},32965:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-sum-f40f713125bb9142357e122a7064763c.png"}}]);