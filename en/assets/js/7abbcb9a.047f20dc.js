"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Or \u6216",u={unversionedId:"documentation/Logic/Or",id:"documentation/Logic/Or",title:"Or \u6216",description:"Check if any of two or more booleans are true.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Logic/Or.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Or",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Or",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Or.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Not \u975e",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Not"},next:{title:"Loops \u5faa\u73af",permalink:"/OrigamiStudio/en/docs/category/loops-\u5faa\u73af"}},l={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"or-\u6216"},"Or \u6216"),(0,o.kt)("p",null,"Check if any of two or more booleans are true."),(0,o.kt)("p",null,"Right-click to check more booleans."),(0,o.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6216\u591a\u4e2a\u5e03\u5c14\u503c\u662f\u5426\u4e3a\u771f\u3002"),(0,o.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u53ef\u67e5\u770b\u66f4\u591a\u5e03\u5c14\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(44455).Z,width:"1500",height:"194"})),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A boolean (true/false, on/off, or 0/1)."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c(\u771f/\u5047, \u5f00\u542f/\u5173\u95ed\uff0c\u62160/1)\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A boolean (true/false, on/off, or 0/1)."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c(\u771f/\u5047, \u5f00\u542f/\u5173\u95ed\uff0c\u62160/1)\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"A boolean that is true if at least one input is true."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u81f3\u5c11\u6709\u4e00\u4e2a\u7aef\u53e3\u7684\u8f93\u5165\u503c\u4e3a\u771f\uff0c\u5219\u4e3a\u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/And"},"And \u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Not"},"Not \u975e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}s.isMDXComponent=!0},44455:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/not-00f04541927a892dbabc927a325bcc1a.png"}}]);