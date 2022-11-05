"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[95275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},i="Not \u975e",u={unversionedId:"documentation/Logic/Not",id:"documentation/Logic/Not",title:"Not \u975e",description:"Flip a boolean from true to false, or from false to true.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Logic/Not.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Not",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Not",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Not.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Less Than \u5c0f\u4e8e",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Less Than"},next:{title:"Or \u6216",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Or"}},l={},c=[{value:"Boolean \u5e03\u5c14\u503c",id:"boolean-\u5e03\u5c14\u503c",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"not-\u975e"},"Not \u975e"),(0,r.kt)("p",null,"Flip a boolean from true to false, or from false to true."),(0,r.kt)("p",null,"\u7ffb\u8f6c\u5e03\u5c14\u503c\uff0c\u4ece\u771f\u5230\u5047\uff0c\u6216\u4ece\u5047\u5230\u771f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(44455).Z,width:"1500",height:"194"})),(0,r.kt)("h3",{id:"boolean-\u5e03\u5c14\u503c"},"Boolean \u5e03\u5c14\u503c"),(0,r.kt)("p",null,"A boolean (true/false, on/off, or 0/1)."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff08\u771f\uff0f\u5047\u3001\u5f00\uff0f\u5173\u30010\uff0f1\uff09"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"A boolean that is the opposite of the input (if input is true, then the output is false)."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u4e0e\u8f93\u5165\u7684\u503c\u76f8\u53cd\uff08\u5982\u679c\u8f93\u5165\u4e3a \u771f\uff0c\u5219\u8f93\u51fa\u4e3a \u5047\uff09\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/And"},"And \u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Or"},"Or \u6216")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}s.isMDXComponent=!0},44455:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/not-00f04541927a892dbabc927a325bcc1a.png"}}]);