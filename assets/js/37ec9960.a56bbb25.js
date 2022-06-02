"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[242],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:e},l),{},{components:n})):r.createElement(m,a({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3559:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:2},c="Option Switch \u9009\u9879\u5f00\u5173",s={unversionedId:"Utility/Option Switch",id:"Utility/Option Switch",title:"Option Switch \u9009\u9879\u5f00\u5173",description:"Control two or more states using an index (0, 1, 2\u2026). For two states, use Switch. Useful for tracking a state that is one of multiple options (ex: tab bar). Often used with Option Picker to select from two or more options. Formerly known as Index Switch.",source:"@site/docs/Utility/Option Switch.md",sourceDirName:"Utility",slug:"/Utility/Option Switch",permalink:"/OrigamiStudio/docs/Utility/Option Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Utility/Option Switch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Option Sender \u9009\u9879\u53d1\u9001\u5668",permalink:"/OrigamiStudio/docs/Utility/Option Sender"},next:{title:"Point 3D Unpack 3D\u70b9\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/Utility/Point 3D Unpack"}},l={},u=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],f={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"option-switch-\u9009\u9879\u5f00\u5173"},"Option Switch \u9009\u9879\u5f00\u5173"),(0,i.kt)("p",null,"Control two or more states using an index (0, 1, 2\u2026). For two states, use ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.switch.html"},"Switch"),". Useful for tracking a state that is one of multiple options (ex: tab bar). Often used with Option Picker to select from two or more options. Formerly known as Index Switch."),(0,i.kt)("p",null,"Right-click to add additional states."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/States-f6b16f4ab5014bbabfa37251885c1d09"},"State Basics")," for more information."),(0,i.kt)("p",null,"\u4f7f\u7528\u7d22\u5f15\uff080\uff0c1\uff0c2 ...\uff09\u63a7\u5236\u4e24\u4e2a\u6216\u66f4\u591a\u72b6\u6001\uff0c\u7528\u4e8e\u9700\u8981\u5728\u591a\u4e2a\u72b6\u6001\u4e2d\u9009\u62e9\u4e00\u4e2a\u7684\u4ea4\u4e92\uff08\u5982\uff1a\u6807\u7b7e\u680f\uff09\u3002\u53ea\u6709\u4e24\u79cd\u72b6\u6001\u4e00\u822c\u7528 ","[Switch]"," \u6a21\u5757\u3002"),(0,i.kt)("p",null,"\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Option-Picker-26fa02ba463b47be8b9c4098357d5dfb"},"Option Picker")," \u6a21\u5757\u4e00\u8d77\u4f7f\u7528\uff0cOption Picker \u76f8\u5f53\u4e8e\u5347\u7ea7\u7248 Transition \u6a21\u5757\uff0c\u7528\u6765\u5b9a\u4e49\u591a\u4e2a\u503c\u3002\u4ee5\u524d\u79f0\u4e3a Index Switch\u7d22\u5f15\u5f00\u5173\u3002 \u53f3\u952e\u589e\u52a0\u66f4\u591a\u72b6\u6001\uff08\u5373\u5de6\u4fa7\u8f93\u5165\u53e3\u7684\u6570\u91cf\uff09\u3002"),(0,i.kt)("p",null,"\u67e5\u770b  State Basics\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c84c92d2-ce0c-440e-b8ff-f050c9e3edb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181514Z&X-Amz-Expires=86400&X-Amz-Signature=c203ef53041e85ba8b6014a0c73c312c9b5ed4fde5e0a5226c7a0ed1cfc4a298&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Set to 0 \u63a5\u53e3 1")),(0,i.kt)("p",null,"A pulse that sets the Option Switch to option 0."),(0,i.kt)("p",null,"\u5c06\u7aef\u53e3\u63a5\u6536\u5230\u8109\u51b2\u8f93\u51fa\u5230\u53f3\u4fa7\u7684Option\u7aef\u53e3"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Set to 1 \u63a5\u53e3 2")),(0,i.kt)("p",null,"A pulse that sets the Option Switch to option 1."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Set to 2 \u63a5\u53e3 3")),(0,i.kt)("p",null,"A pulse that sets the Option Switch to option 2."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Option \u8f93\u51fa\u9009\u9879\u7d22\u5f15")),(0,i.kt)("p",null,"An index that represents the state of the Option Switch"),(0,i.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\u503c\uff0c\u8868\u793a\u9009\u9879\u5f00\u5173\u7684\u72b6\u6001\uff0c\u5c31\u662f\u6a21\u5757\u54ea\u4e00\u4e2a\u9009\u9879\u63a5\u6536\u5230\u4e86\u8109\u51b2\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,i.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Switch-bd684625ec8b4aaa9ff9b5ae3e396e86"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Counter-d206f21658ca469e9d7dd2ccf80c8001"},"Counter \u8ba1\u6570\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Option-Picker-26fa02ba463b47be8b9c4098357d5dfb"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Option-Sender-d36296ca4f44472094031e55ef7546ce"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Option-Equals-638d7c82510948fbbdba0bbd8a18ba7f"},"Option Equals \u9009\u9879\u76f8\u7b49")))}d.isMDXComponent=!0}}]);