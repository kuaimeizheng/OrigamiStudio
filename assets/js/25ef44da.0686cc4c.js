"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3824],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),p=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?i.createElement(m,a(a({ref:e},c),{},{components:n})):i.createElement(m,a({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56637:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},u="Option Sender \u9009\u9879\u53d1\u9001\u5668",p={unversionedId:"Utility/Option Sender",id:"Utility/Option Sender",title:"Option Sender \u9009\u9879\u53d1\u9001\u5668",description:"Pick one of the outputs to send the value to. Often used with Option Switch to control which output to send the value to. Formerly known as Demultiplexer.",source:"@site/docs/Utility/Option Sender.md",sourceDirName:"Utility",slug:"/Utility/Option Sender",permalink:"/OrigamiStudio/docs/Utility/Option Sender",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Utility/Option Sender.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Option Picker \u9009\u9879\u9009\u62e9\u5668",permalink:"/OrigamiStudio/docs/Utility/Option Picker"},next:{title:"Option Switch \u9009\u9879\u5f00\u5173",permalink:"/OrigamiStudio/docs/Utility/Option Switch"}},c={},s=[{value:"Option \u9009\u9879",id:"option-\u9009\u9879",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Default \u9ed8\u8ba4",id:"default-\u9ed8\u8ba4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function f(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"option-sender-\u9009\u9879\u53d1\u9001\u5668"},"Option Sender \u9009\u9879\u53d1\u9001\u5668"),(0,o.kt)("p",null,"Pick one of the outputs to send the value to. Often used with Option Switch to control which output to send the value to. Formerly known as Demultiplexer."),(0,o.kt)("p",null,"\u628a\u503c\u53d1\u9001\u5230\u9009\u4e2d\u7684\u4e00\u4e2a\u8f93\u51fa\u53e3\u3002 \u901a\u5e38\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Switch"},"Option Switch")," \u4e00\u8d77\u4f7f\u7528\u6765\u63a7\u5236\u628a\u503c\u53d1\u9001\u54ea\u4e2a\u8f93\u51fa\u53e3\u3002"),(0,o.kt)("p",null,"Right-click to change the type (ex: color, boolean), or to add additional options."),(0,o.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u7c7b\u578b (\u5982\uff1a\u989c\u8272\u3001\u5e03\u5c14\u503c)\uff0c\u6216\u6dfb\u52a0\u5176\u5b83\u9009\u9879\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84464562-bf02-48e4-9012-03275029a2f1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181452Z&X-Amz-Expires=86400&X-Amz-Signature=a7092dddaa1ab6fc7b8e23fa8d36ebc2a5b6df48205a3a573ad57c390a4c6518&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,o.kt)("h3",{id:"option-\u9009\u9879"},"Option \u9009\u9879"),(0,o.kt)("p",null,"An index (starting at 0) that represents the output to send the value to."),(0,o.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff08\u4ece 0 \u5f00\u59cb\uff09\uff0c\u8868\u793a\u8981\u5c06\u503c\u53d1\u9001\u5230\u8f93\u51fa\u7aef\u53e3\u3002"),(0,o.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,o.kt)("p",null,"A value to be passed to the selected output."),(0,o.kt)("p",null,"\u4f20\u9012\u5230\u6240\u9009\u8f93\u51fa\u7aef\u53e3\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"default-\u9ed8\u8ba4"},"Default \u9ed8\u8ba4"),(0,o.kt)("p",null,"A value to be passed to the unselected outputs."),(0,o.kt)("p",null,"\u8981\u4f20\u9012\u5230\u672a\u9009\u62e9\u8f93\u51fa\u7aef\u53e3\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"If selected (option is 0), the value. Otherwise, the default."),(0,o.kt)("p",null,"\u5982\u679c\u9009\u62e9\uff08\u9009\u9879\u4e3a 0\uff09\uff0c\u5219\u8be5\u503c\u3002\u5426\u5219\u4e3a\u9ed8\u8ba4\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa-1"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"If selected (option is 1), the value. Otherwise, the default."),(0,o.kt)("p",null,"\u5982\u679c\u9009\u62e9\uff08\u9009\u9879\u4e3a 0\uff09\uff0c\u5219\u8be5\u503c\u3002\u5426\u5219\u4e3a\u9ed8\u8ba4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Equals"},"Option Equals \u9009\u9879\u76f8\u7b49")))}f.isMDXComponent=!0}}]);