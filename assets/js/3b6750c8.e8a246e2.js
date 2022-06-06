"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3969],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58531:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],u={sidebar_position:2},l="Pulse \u8109\u51b2",s={unversionedId:"Utility/Pulse",id:"Utility/Pulse",title:"Pulse \u8109\u51b2",description:"Output a pulse whenever a state changes from on to off.",source:"@site/docs/Utility/Pulse.md",sourceDirName:"Utility",slug:"/Utility/Pulse",permalink:"/OrigamiStudio/docs/Utility/Pulse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Utility/Pulse.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/OrigamiStudio/docs/Utility/Pulse on Change"},next:{title:"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/Utility/QR Code Detection"}},p={},c=[{value:"On/Off \u5f00/\u5173",id:"onoff-\u5f00\u5173",level:3},{value:"Turned On \u6253\u5f00",id:"turned-on-\u6253\u5f00",level:3},{value:"Turned Off \u5173\u95ed",id:"turned-off-\u5173\u95ed",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:c};function f(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pulse-\u8109\u51b2"},"Pulse \u8109\u51b2"),(0,o.kt)("p",null,"Output a pulse whenever a state changes from on to off."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/States-Pulses-758351d7e4104b75b06da93560565bc0"},"States & Pulses")," for more information."),(0,o.kt)("p",null,"\u6bcf\u5f53\u72b6\u6001\u4ece\u5f00\u59cb\u5207\u6362\u5230\u5173\u95ed\u65f6\uff0c\u90fd\u4f1a\u8f93\u51fa\u8109\u51b2\u3002"),(0,o.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 States & Pulses\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c46a43e-3d1c-47a9-8fd0-6b79de219a66/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181800Z&X-Amz-Expires=86400&X-Amz-Signature=a69a119921f304b5a52041c46cdb2d45fb0c48b58fdbca3b3bda01a57f4a847f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,o.kt)("h3",{id:"onoff-\u5f00\u5173"},"On/Off \u5f00/\u5173"),(0,o.kt)("p",null,"A boolean that represents an on/off state."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f00/\u5173\u72b6\u6001\u3002"),(0,o.kt)("h3",{id:"turned-on-\u6253\u5f00"},"Turned On \u6253\u5f00"),(0,o.kt)("p",null,"A pulse that is output when the input turns on."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u6253\u5f00\u65f6\u8f93\u51fa\u3002"),(0,o.kt)("h3",{id:"turned-off-\u5173\u95ed"},"Turned Off \u5173\u95ed"),(0,o.kt)("p",null,"A pulse that is output when the input turns off."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u5173\u95ed\u65f6\u8f93\u51fa\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Switch"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/When%20Prototype%20Starts"},"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Pulse%20on%20Change"},"Pulse on Change \u8109\u51b2\u53d8\u5316")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction \u4ea4\u4e92")))}f.isMDXComponent=!0}}]);