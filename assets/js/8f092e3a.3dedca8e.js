"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4239],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8875:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Progress \u8fdb\u5ea6",u={unversionedId:"Utility/Progress",id:"Utility/Progress",title:"Progress \u8fdb\u5ea6",description:"Convert a number from any range to progress (0 to 1). Useful with Transition to convert an animating value to another range.",source:"@site/docs/Utility/Progress.md",sourceDirName:"Utility",slug:"/Utility/Progress",permalink:"/OrigamiStudio/docs/Utility/Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Utility/Progress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Point \u70b9",permalink:"/OrigamiStudio/docs/Utility/Point"},next:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/OrigamiStudio/docs/Utility/Pulse on Change"}},p={},c=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,a.kt)("p",null,"Convert a number from any range to progress (0 to 1). Useful with ",(0,a.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.transition.html"},"Transition")," to convert an animating value to another range."),(0,a.kt)("p",null,"\u5c06\u4efb\u4f55\u8303\u56f4\u5185\u7684\u6570\u5b57\u8f6c\u6362\u4e3a\u8fdb\u5ea6\uff080\u52301\uff09\u3002\u548c ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Transition-105402795ee34baea7dd7a6b4bb251cc"},"Transition \u8fc7\u6e21")," \u4e00\u8d77\u4f7f\u7528\u53ef\u4ee5\u5c06\u52a8\u753b\u503c\u8f6c\u6362\u4e3a\u5176\u5b83\u7684\u8303\u56f4\uff08\u4f8b\u5982\uff1a100\uff5e125\u300120\uff5e30\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/92503d0b-5aaf-470e-9a7a-000fa0fbb164/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181732Z&X-Amz-Expires=86400&X-Amz-Signature=35235945d58a5557b27827663efd9be9474c5d5086c26055376cf5551109a8dd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Value \u503c")),(0,a.kt)("p",null,"A number to convert."),(0,a.kt)("p",null,"\u8981\u8f6c\u6362\u7684\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Value \u5f00\u59cb\u503c")),(0,a.kt)("p",null,"The start value of the range."),(0,a.kt)("p",null,"\u8303\u56f4\u7684\u5f00\u59cb\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"End Value \u7ed3\u675f\u503c")),(0,a.kt)("p",null,"The end value of the range."),(0,a.kt)("p",null,"\u8303\u56f4\u7684\u7ed3\u675f\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Progress \u8fdb\u5ea6")),(0,a.kt)("p",null,"A progress value."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/cbf103e362354b7dbb0217e916ed392e"},"Animation Basics")," for more information."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002"),(0,a.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 Animation Basic\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,a.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Transition-105402795ee34baea7dd7a6b4bb251cc"},"Transition \u8fc7\u6e21")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Clip-a5ecb147ada6467e982695ba6670f474"},"Clip \u88c1\u526a")))}d.isMDXComponent=!0}}]);