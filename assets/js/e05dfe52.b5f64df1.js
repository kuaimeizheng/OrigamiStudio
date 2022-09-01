"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[58420],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=o.createContext({}),p=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=i,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||r;return n?o.createElement(h,a(a({ref:e},d),{},{components:n})):o.createElement(h,a({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87258:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:2},a="Option Sender \u9009\u9879\u53d1\u9001\u5668",l={unversionedId:"documentation/Utility/Option Sender",id:"documentation/Utility/Option Sender",title:"Option Sender \u9009\u9879\u53d1\u9001\u5668",description:"Pick one of the outputs to send the value to. Often used with Option Switch to control which output to send the value to. Formerly known as Demultiplexer.",source:"@site/docs/documentation/Utility/Option Sender.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Option Sender",permalink:"/OrigamiStudio/docs/documentation/Utility/Option Sender",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Option Sender.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1662015759,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Option Picker \u9009\u9879\u9009\u62e9\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Option Picker"},next:{title:"Option Switch \u9009\u9879\u5f00\u5173",permalink:"/OrigamiStudio/docs/documentation/Utility/Option Switch"}},u={},p=[{value:"Option \u9009\u9879",id:"option-\u9009\u9879",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Default \u9ed8\u8ba4",id:"default-\u9ed8\u8ba4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function c(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"option-sender-\u9009\u9879\u53d1\u9001\u5668"},"Option Sender \u9009\u9879\u53d1\u9001\u5668"),(0,i.kt)("p",null,"Pick one of the outputs to send the value to. Often used with Option Switch to control which output to send the value to. Formerly known as Demultiplexer."),(0,i.kt)("p",null,"\u628a\u503c\u53d1\u9001\u5230\u9009\u4e2d\u7684\u4e00\u4e2a\u8f93\u51fa\u53e3\u3002 \u901a\u5e38\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch")," \u4e00\u8d77\u4f7f\u7528\u6765\u63a7\u5236\u628a\u503c\u53d1\u9001\u54ea\u4e2a\u8f93\u51fa\u53e3\u3002"),(0,i.kt)("p",null,"Right-click to change the type (ex: color, boolean), or to add additional options."),(0,i.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u7c7b\u578b (\u5982\uff1a\u989c\u8272\u3001\u5e03\u5c14\u503c)\uff0c\u6216\u6dfb\u52a0\u5176\u5b83\u9009\u9879\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(72728).Z,width:"1418",height:"258"})),(0,i.kt)("h3",{id:"option-\u9009\u9879"},"Option \u9009\u9879"),(0,i.kt)("p",null,"An index (starting at 0) that represents the output to send the value to."),(0,i.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff08\u4ece 0 \u5f00\u59cb\uff09\uff0c\u8868\u793a\u8981\u5c06\u503c\u53d1\u9001\u5230\u8f93\u51fa\u7aef\u53e3\u3002"),(0,i.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,i.kt)("p",null,"A value to be passed to the selected output."),(0,i.kt)("p",null,"\u4f20\u9012\u5230\u6240\u9009\u8f93\u51fa\u7aef\u53e3\u7684\u503c\u3002"),(0,i.kt)("h3",{id:"default-\u9ed8\u8ba4"},"Default \u9ed8\u8ba4"),(0,i.kt)("p",null,"A value to be passed to the unselected outputs."),(0,i.kt)("p",null,"\u8981\u4f20\u9012\u5230\u672a\u9009\u62e9\u8f93\u51fa\u7aef\u53e3\u7684\u503c\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"If selected (option is 0), the value. Otherwise, the default."),(0,i.kt)("p",null,"\u5982\u679c\u9009\u62e9\uff08\u9009\u9879\u4e3a 0\uff09\uff0c\u5219\u8be5\u503c\u3002\u5426\u5219\u4e3a\u9ed8\u8ba4\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa-1"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"If selected (option is 1), the value. Otherwise, the default."),(0,i.kt)("p",null,"\u5982\u679c\u9009\u62e9\uff08\u9009\u9879\u4e3a 0\uff09\uff0c\u5219\u8be5\u503c\u3002\u5426\u5219\u4e3a\u9ed8\u8ba4\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Equals"},"Option Equals \u9009\u9879\u76f8\u7b49")))}c.isMDXComponent=!0},72728:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/option-sender-02ffbae26d1d5d022fc90d2665335128.png"}}]);