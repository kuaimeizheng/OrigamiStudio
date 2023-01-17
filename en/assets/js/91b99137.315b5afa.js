"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[69137],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28662:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},l="Equals Exactly \u5b8c\u5168\u7b49\u4e8e",i={unversionedId:"documentation/Logic/Equals Exactly",id:"documentation/Logic/Equals Exactly",title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Logic/Equals Exactly.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Equals Exactly",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Equals Exactly",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Equals Exactly.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:5,frontMatter:{title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"And \u548c",permalink:"/OrigamiStudio/en/docs/documentation/Logic/And"},next:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Equals"}},u={},c=[{value:"Input",id:"input",level:3},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"equals-exactly-\u5b8c\u5168\u7b49\u4e8e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Check if two or more values are exactly the same as each other."),(0,r.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u540c\u3002"),(0,r.kt)("p",null,"This is a convenience equivalent of using the (Equals)","[builtin.compare.equal Approx]"," patch with tolerance set to 0."),(0,r.kt)("p",null,"\u8fd9\u76f8\u5f53\u4e8e\u4f7f\u7528(Equals)","[builtin.compare.equal Approx]","(python \u8fd1\u4f3c\u6bd4\u8f83)\u6a21\u5757\uff0c\u7136\u540e\u516c\u5dee\u8bbe\u7f6e\u4e3a 0\u3002"),(0,r.kt)("p",null,"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."),(0,r.kt)("p",null,"\u53f3\u952e\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u63a5\u53e3\u53bb\u6bd4\u8f83\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u5982\uff1a\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c\uff09"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Equals Exactly"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"\xa0",(0,r.kt)("span",null)),(0,r.kt)("li",null,"\xa0",(0,r.kt)("span",null))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"\xa0",(0,r.kt)("span",null))))),(0,r.kt)("h3",{id:"input"},"Input"),(0,r.kt)("p",null,"The base value."),(0,r.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,r.kt)("h3",{id:"input-1"},"Input"),(0,r.kt)("p",null,"The value to compare to the base."),(0,r.kt)("p",null,"\u548c\u57fa\u7840\u503c\u6bd4\u8f83\u7684\u503c"),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("p",null,"A boolean that is true if the values are exactly equal to each other."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u8f93\u5165\u7684\u503c\u5f7c\u6b64\u5b8c\u5168\u76f8\u7b49\uff0c\u5219\u4e3a \u771f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/And"},"And \u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Or"},"Or \u6216")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Not"},"Not \u975e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}s.isMDXComponent=!0}}]);