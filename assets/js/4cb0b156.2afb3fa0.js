"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[48638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,h=m["".concat(u,".").concat(p)]||m[p]||s[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Random \u968f\u673a",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Random \u968f\u673a",l={unversionedId:"documentation/Utility/Random",id:"documentation/Utility/Random",title:"Random \u968f\u673a",description:"---",source:"@site/docs/documentation/Utility/Random.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Random",permalink:"/OrigamiStudio/docs/documentation/Utility/Random",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Random.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:5,frontMatter:{title:"Random \u968f\u673a",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/documentation/Utility/QR Code Detection"},next:{title:"Repeating Pulse \u91cd\u590d\u8109\u51b2",permalink:"/OrigamiStudio/docs/documentation/Utility/Repeating Pulse"}},u={},d=[{value:"Randomize \u968f\u673a\u5316",id:"randomize-\u968f\u673a\u5316",level:3},{value:"Start Value \u5f00\u59cb\u503c",id:"start-value-\u5f00\u59cb\u503c",level:3},{value:"End Value \u7ed3\u675f\u503c",id:"end-value-\u7ed3\u675f\u503c",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"random-\u968f\u673a"},"Random \u968f\u673a"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Generate a random number (with decimals) that falls between two numbers of your choice. The patch will generate and output a random number each time it receives a pulse on its Randomize port."),(0,r.kt)("p",null,"\u751f\u6210\u4e00\u4e2a\u4ecb\u4e8e\u60a8\u8bbe\u7f6e\u7684\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\u7684\u968f\u673a\u6570\uff08\u5e26\u5c0f\u6570\uff09\u3002\u6a21\u5757\u6bcf\u6b21\u5728\u5176 Randomize \u7aef\u53e3\u4e0a\u63a5\u6536\u5230\u8109\u51b2\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u5e76\u8f93\u51fa\u4e00\u4e2a\u968f\u673a\u6570\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Random"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Randomize",(0,r.kt)("span",{className:"patch-pulse-preview"},(0,r.kt)("span",{className:"dot"}))),(0,r.kt)("li",null,"Start Value",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"End Value",(0,r.kt)("span",null,"1"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Value",(0,r.kt)("span",null,"0"))))),(0,r.kt)("h3",{id:"randomize-\u968f\u673a\u5316"},"Randomize \u968f\u673a\u5316"),(0,r.kt)("p",null,"A pulse that generates a new random number."),(0,r.kt)("p",null,"\u4ea7\u751f\u65b0\u968f\u673a\u6570\u7684\u8109\u51b2\u3002"),(0,r.kt)("h3",{id:"start-value-\u5f00\u59cb\u503c"},"Start Value \u5f00\u59cb\u503c"),(0,r.kt)("p",null,"The lowest random number."),(0,r.kt)("p",null,"\u6700\u5c0f\u7684\u968f\u673a\u6570\u3002"),(0,r.kt)("h3",{id:"end-value-\u7ed3\u675f\u503c"},"End Value \u7ed3\u675f\u503c"),(0,r.kt)("p",null,"The highest random number."),(0,r.kt)("p",null,"\u6700\u5927\u7684\u968f\u673a\u6570\u3002"),(0,r.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,r.kt)("p",null,"A random number (with decimals). Use the ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Round"},"Round")," patch to round the number to an integer."),(0,r.kt)("p",null,"\u968f\u673a\u6570(\u5305\u62ec\u5c0f\u6570)\u3002\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Round"},"Round")," \u6a21\u5757\u5c06\u6570\u5b57\u56db\u820d\u4e94\u5165\u4e3a\u6574\u6570\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Round"},"Round \u56db\u820d\u4e94\u5165")))}s.isMDXComponent=!0}}]);