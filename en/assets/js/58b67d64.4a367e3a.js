"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[73465],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=i.createContext({}),u=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return n?i.createElement(k,l(l({ref:e},c),{},{components:n})):i.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37935:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const r={title:"Option Picker \u9009\u9879\u9009\u62e9\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},l="Option Picker \u9009\u9879\u9009\u62e9\u5668",a={unversionedId:"documentation/Utility/Option Picker",id:"documentation/Utility/Option Picker",title:"Option Picker \u9009\u9879\u9009\u62e9\u5668",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Option Picker.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Option Picker",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Option Picker",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Option Picker.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:5,frontMatter:{title:"Option Picker \u9009\u9879\u9009\u62e9\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Option Equals \u9009\u9879\u76f8\u7b49",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Option Equals"},next:{title:"Option Sender \u9009\u9879\u53d1\u9001\u5668",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Option Sender"}},p={},u=[{value:"Option",id:"option",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output",id:"output",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function s(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"option-picker-\u9009\u9879\u9009\u62e9\u5668"},"Option Picker \u9009\u9879\u9009\u62e9\u5668"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This holds a list of options and then allows you to choose one of them. This can be used to switch between different colors for a layer, for example. The first input controls which value is chosen. Often used with Option Switch to control which option is picked. Formerly known as Multiplexer."),(0,o.kt)("p",null,"\u5305\u542b\u4e00\u4e2a\u9009\u9879\u5217\u8868\uff0c\u7136\u540e\u5141\u8bb8\u60a8\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a\u3002 \u4f8b\u5982\uff0c\u8fd9\u53ef\u7528\u4e8e\u5728\u56fe\u5c42\u7684\u4e0d\u540c\u989c\u8272\u4e4b\u95f4\u5207\u6362\u3002 \u7b2c\u4e00\u4e2a\u8f93\u5165\u63a7\u5236\u9009\u62e9\u54ea\u4e2a\u503c\u3002 \u901a\u5e38\u4e0e\u9009\u9879\u5f00\u5173\u4e00\u8d77\u4f7f\u7528\u6765\u63a7\u5236\u9009\u62e9\u54ea\u4e2a\u9009\u9879\u3002 \u4ee5\u524d\u79f0\u4e3a\u591a\u8def\u590d\u7528\u5668\u3002"),(0,o.kt)("p",null,"If you are a programmer looking for an \u201cif statement\u201d or \u201ccase statement\u201d, this patch gives similar functionality but in an Origami style."),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u662f\u5bfb\u627e\u201cif \u8bed\u53e5\u201d\u6216\u201ccase \u8bed\u53e5\u201d\u7684\u7a0b\u5e8f\u5458\uff0c\u6b64\u6a21\u5757\u63d0\u4f9b\u4e86\u7c7b\u4f3c\u7684\u529f\u80fd\uff0c\u4f46\u91c7\u7528\u4e86 Origami \u98ce\u683c\u3002"),(0,o.kt)("p",null,"Right-click to change the type (ex: number, text, color), or to add additional options."),(0,o.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\u3001\u6587\u672c\u3001\u989c\u8272\uff09\u6216\u6dfb\u52a0\u5176\u4ed6\u9009\u9879\u3002"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Option Picker"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Option",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,(0,o.kt)("span",null,"0"))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Option",(0,o.kt)("span",null,"0"))))),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("p",null,"An index (starting at 0) that represents the option to output."),(0,o.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\u503c\uff08\u4ece 0 \u5f00\u59cb\uff09\uff0c\u8868\u793a\u8f93\u51fa\u9009\u9879\u3002Option Switch \u6a21\u5757\u7684\u8f93\u51fa\u7aef\u53e3\u4e00\u822c\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A value that represents option 0."),(0,o.kt)("p",null,"\u4e00\u4e2a\u503c\uff0c\u8868\u793a\u9009\u9879 0\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A value that represents option 1."),(0,o.kt)("p",null,"\u4e00\u4e2a\u503c\uff0c\u8868\u793a\u9009\u9879 1."),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("p",null,"The picked value."),(0,o.kt)("p",null,"\u8f93\u51fa\u9009\u4e2d\u7684\u4ea4\u4e92\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u8fde\u63a5\u5230\u8981\u8981\u5207\u6362\u7684\u5c5e\u6027\u503c\uff0c\u5982\u679c\u9700\u8981\u6dfb\u52a0\u52a8\u753b\uff0c\u5219\u5728 Option Picker \u6a21\u5757\u548c\u5c5e\u6027\u503c\u6a21\u5757\u4e2d\u95f4\u63d2\u5165\u52a8\u753b\u6a21\u5757\u3002"),(0,o.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(35529).Z,width:"156",height:"494"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Equals"},"Option Equals \u9009\u9879\u76f8\u7b49")))}s.isMDXComponent=!0},35529:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/option-picker-item-18bd17caf7613bfe1b0f89f36d48bbdb.png"}}]);