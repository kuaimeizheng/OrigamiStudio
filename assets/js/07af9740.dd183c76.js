"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[61922],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},610:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Or \u6216",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Or \u6216",l={unversionedId:"documentation/Logic/Or",id:"documentation/Logic/Or",title:"Or \u6216",description:"---",source:"@site/docs/documentation/Logic/Or.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Or",permalink:"/OrigamiStudio/docs/documentation/Logic/Or",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Or.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667659545,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Or \u6216",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Not \u975e",permalink:"/OrigamiStudio/docs/documentation/Logic/Not"},next:{title:"Loops \u5faa\u73af",permalink:"/OrigamiStudio/docs/category/loops-\u5faa\u73af"}},u={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"or-\u6216"},"Or \u6216"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Check if any of two or more booleans are true."),(0,o.kt)("p",null,"Right-click to check more booleans."),(0,o.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6216\u591a\u4e2a\u5e03\u5c14\u503c\u662f\u5426\u4e3a\u771f\u3002"),(0,o.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u53ef\u67e5\u770b\u66f4\u591a\u5e03\u5c14\u503c\u3002"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Or"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Boolean",(0,o.kt)("span",null))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"\xa0",(0,o.kt)("span",null))))),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A boolean (true/false, on/off, or 0/1)."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c(\u771f/\u5047, \u5f00\u542f/\u5173\u95ed\uff0c\u62160/1)\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A boolean (true/false, on/off, or 0/1)."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c(\u771f/\u5047, \u5f00\u542f/\u5173\u95ed\uff0c\u62160/1)\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"A boolean that is true if at least one input is true."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u81f3\u5c11\u6709\u4e00\u4e2a\u7aef\u53e3\u7684\u8f93\u5165\u503c\u4e3a\u771f\uff0c\u5219\u4e3a\u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/And"},"And \u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Not"},"Not \u975e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}s.isMDXComponent=!0}}]);