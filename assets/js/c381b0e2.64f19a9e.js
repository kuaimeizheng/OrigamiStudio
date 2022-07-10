"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1101],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:e},s),{},{components:n})):r.createElement(m,a({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89913:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={sidebar_position:2},l="Pulse \u8109\u51b2",c={unversionedId:"documentation/Utility/Pulse",id:"documentation/Utility/Pulse",title:"Pulse \u8109\u51b2",description:"Output a pulse whenever a state changes from on to off.",source:"@site/docs/documentation/Utility/Pulse.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Pulse",permalink:"/OrigamiStudio/docs/documentation/Utility/Pulse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Pulse.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657467797,formattedLastUpdatedAt:"2022\u5e747\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/OrigamiStudio/docs/documentation/Utility/Pulse on Change"},next:{title:"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/documentation/Utility/QR Code Detection"}},s={},p=[{value:"On/Off \u5f00/\u5173",id:"onoff-\u5f00\u5173",level:3},{value:"Turned On \u6253\u5f00",id:"turned-on-\u6253\u5f00",level:3},{value:"Turned Off \u5173\u95ed",id:"turned-off-\u5173\u95ed",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function f(t){var e=t.components,u=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pulse-\u8109\u51b2"},"Pulse \u8109\u51b2"),(0,i.kt)("p",null,"Output a pulse whenever a state changes from on to off."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/States-Pulses-758351d7e4104b75b06da93560565bc0"},"States & Pulses")," for more information."),(0,i.kt)("p",null,"\u6bcf\u5f53\u72b6\u6001\u4ece\u5f00\u59cb\u5207\u6362\u5230\u5173\u95ed\u65f6\uff0c\u90fd\u4f1a\u8f93\u51fa\u8109\u51b2\u3002"),(0,i.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 States & Pulses\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(82895).Z,width:"1336",height:"240"})),(0,i.kt)("h3",{id:"onoff-\u5f00\u5173"},"On/Off \u5f00/\u5173"),(0,i.kt)("p",null,"A boolean that represents an on/off state."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f00/\u5173\u72b6\u6001\u3002"),(0,i.kt)("h3",{id:"turned-on-\u6253\u5f00"},"Turned On \u6253\u5f00"),(0,i.kt)("p",null,"A pulse that is output when the input turns on."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u6253\u5f00\u65f6\u8f93\u51fa\u3002"),(0,i.kt)("h3",{id:"turned-off-\u5173\u95ed"},"Turned Off \u5173\u95ed"),(0,i.kt)("p",null,"A pulse that is output when the input turns off."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u5173\u95ed\u65f6\u8f93\u51fa\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/When%20Prototype%20Starts"},"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Pulse%20on%20Change"},"Pulse on Change \u8109\u51b2\u53d8\u5316")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")))}f.isMDXComponent=!0},82895:function(t,e,n){e.Z=n.p+"assets/images/pulse-f5629b29db4cae29cae1d7e3cdd4b498.png"}}]);