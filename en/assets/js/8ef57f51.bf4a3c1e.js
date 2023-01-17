"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[67535],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=i.createContext({}),c=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=c(t.components);return i.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,r(r({ref:e},s),{},{components:n})):i.createElement(h,r({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30530:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={title:"Option Switch \u9009\u9879\u5f00\u5173",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Option Switch \u9009\u9879\u5f00\u5173",l={unversionedId:"documentation/Utility/Option Switch",id:"documentation/Utility/Option Switch",title:"Option Switch \u9009\u9879\u5f00\u5173",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Option Switch.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Option Switch",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Option Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Option Switch.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:5,frontMatter:{title:"Option Switch \u9009\u9879\u5f00\u5173",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Option Sender \u9009\u9879\u53d1\u9001\u5668",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Option Sender"},next:{title:"Point 3D Unpack 3D\u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Point 3D Unpack"}},p={},c=[{value:"Set to 0 \u63a5\u53e3 1",id:"set-to-0-\u63a5\u53e3-1",level:3},{value:"Set to 1 \u63a5\u53e3 2",id:"set-to-1-\u63a5\u53e3-2",level:3},{value:"Set to 2 \u63a5\u53e3 3",id:"set-to-2-\u63a5\u53e3-3",level:3},{value:"Option \u8f93\u51fa\u9009\u9879\u7d22\u5f15",id:"option-\u8f93\u51fa\u9009\u9879\u7d22\u5f15",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"option-switch-\u9009\u9879\u5f00\u5173"},"Option Switch \u9009\u9879\u5f00\u5173"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Control two or more states using an index (0, 1, 2\u2026). For two states, use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Switch"},"Switch"),". Useful for tracking a state that is one of multiple options (ex: tab bar). Often used with Option Picker to select from two or more options. Formerly known as Index Switch."),(0,o.kt)("p",null,"Right-click to add additional states."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/States"},"State Basics")," for more information."),(0,o.kt)("p",null,"\u4f7f\u7528\u7d22\u5f15\uff080\uff0c1\uff0c2 ...\uff09\u63a7\u5236\u4e24\u4e2a\u6216\u66f4\u591a\u72b6\u6001\uff0c\u7528\u4e8e\u9700\u8981\u5728\u591a\u4e2a\u72b6\u6001\u4e2d\u9009\u62e9\u4e00\u4e2a\u7684\u4ea4\u4e92\uff08\u5982\uff1a\u6807\u7b7e\u680f\uff09\u3002\u53ea\u6709\u4e24\u79cd\u72b6\u6001\u4e00\u822c\u7528 ","[Switch]"," \u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Picker"},"Option Picker")," \u6a21\u5757\u4e00\u8d77\u4f7f\u7528\uff0cOption Picker \u76f8\u5f53\u4e8e\u5347\u7ea7\u7248 Transition \u6a21\u5757\uff0c\u7528\u6765\u5b9a\u4e49\u591a\u4e2a\u503c\u3002\u4ee5\u524d\u79f0\u4e3a Index Switch \u7d22\u5f15\u5f00\u5173\u3002 \u53f3\u952e\u589e\u52a0\u66f4\u591a\u72b6\u6001\uff08\u5373\u5de6\u4fa7\u8f93\u5165\u53e3\u7684\u6570\u91cf\uff09\u3002"),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/States"},"State Basics")," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Option Switch"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Set to 0",(0,o.kt)("span",{className:"patch-pulse-preview"},(0,o.kt)("span",{className:"dot"}))),(0,o.kt)("li",null,"Set to 1",(0,o.kt)("span",{className:"patch-pulse-preview"},(0,o.kt)("span",{className:"dot"}))),(0,o.kt)("li",null,"Set to 2",(0,o.kt)("span",{className:"patch-pulse-preview"},(0,o.kt)("span",{className:"dot"})))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Option",(0,o.kt)("span",null,"0"))))),(0,o.kt)("h3",{id:"set-to-0-\u63a5\u53e3-1"},"Set to 0 \u63a5\u53e3 1"),(0,o.kt)("p",null,"A pulse that sets the Option Switch to option 0."),(0,o.kt)("p",null,"\u5c06\u7aef\u53e3\u63a5\u6536\u5230\u8109\u51b2\u8f93\u51fa\u5230\u53f3\u4fa7\u7684 Option \u7aef\u53e3"),(0,o.kt)("h3",{id:"set-to-1-\u63a5\u53e3-2"},"Set to 1 \u63a5\u53e3 2"),(0,o.kt)("p",null,"A pulse that sets the Option Switch to option 1."),(0,o.kt)("h3",{id:"set-to-2-\u63a5\u53e3-3"},"Set to 2 \u63a5\u53e3 3"),(0,o.kt)("p",null,"A pulse that sets the Option Switch to option 2."),(0,o.kt)("h3",{id:"option-\u8f93\u51fa\u9009\u9879\u7d22\u5f15"},"Option \u8f93\u51fa\u9009\u9879\u7d22\u5f15"),(0,o.kt)("p",null,"An index that represents the state of the Option Switch"),(0,o.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\u503c\uff0c\u8868\u793a\u9009\u9879\u5f00\u5173\u7684\u72b6\u6001\uff0c\u5c31\u662f\u6a21\u5757\u54ea\u4e00\u4e2a\u9009\u9879\u63a5\u6536\u5230\u4e86\u8109\u51b2\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Counter"},"Counter \u8ba1\u6570\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Equals"},"Option Equals \u9009\u9879\u76f8\u7b49")))}u.isMDXComponent=!0}}]);