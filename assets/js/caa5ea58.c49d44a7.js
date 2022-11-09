"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[85118],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(o),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return o?n.createElement(f,i(i({ref:e},p),{},{components:o})):n.createElement(f,i({ref:e},p))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},70976:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Not \u975e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Not \u975e",l={unversionedId:"documentation/Logic/Not",id:"documentation/Logic/Not",title:"Not \u975e",description:"---",source:"@site/docs/documentation/Logic/Not.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Not",permalink:"/OrigamiStudio/docs/documentation/Logic/Not",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Not.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Not \u975e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Less Than \u5c0f\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Less Than"},next:{title:"Or \u6216",permalink:"/OrigamiStudio/docs/documentation/Logic/Or"}},u={},c=[{value:"Boolean \u5e03\u5c14\u503c",id:"boolean-\u5e03\u5c14\u503c",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"not-\u975e"},"Not \u975e"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Flip a boolean from true to false, or from false to true."),(0,r.kt)("p",null,"\u7ffb\u8f6c\u5e03\u5c14\u503c\uff0c\u4ece\u771f\u5230\u5047\uff0c\u6216\u4ece\u5047\u5230\u771f\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Not"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Boolean",(0,r.kt)("span",null))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"\xa0",(0,r.kt)("span",null))))),(0,r.kt)("h3",{id:"boolean-\u5e03\u5c14\u503c"},"Boolean \u5e03\u5c14\u503c"),(0,r.kt)("p",null,"A boolean (true/false, on/off, or 0/1)."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff08\u771f\uff0f\u5047\u3001\u5f00\uff0f\u5173\u30010\uff0f1\uff09"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"A boolean that is the opposite of the input (if input is true, then the output is false)."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u4e0e\u8f93\u5165\u7684\u503c\u76f8\u53cd\uff08\u5982\u679c\u8f93\u5165\u4e3a \u771f\uff0c\u5219\u8f93\u51fa\u4e3a \u5047\uff09\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/And"},"And \u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Or"},"Or \u6216")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}s.isMDXComponent=!0}}]);