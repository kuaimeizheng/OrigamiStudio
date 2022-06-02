"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8358],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:2},l="Power \u5e42\u503c",p={unversionedId:"Math/Power",id:"Math/Power",title:"Power \u5e42\u503c",description:"Calculate the first value (base) to the second value (exponent)\u2019s power (ex: 2^3).",source:"@site/docs/Math/Power.md",sourceDirName:"Math",slug:"/Math/Power",permalink:"/OrigamiStudio/docs/Math/Power",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Math/Power.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mod \u6c42\u4f59\u51fd\u6570",permalink:"/OrigamiStudio/docs/Math/Mod"},next:{title:"Round \u56db\u820d\u4e94\u5165",permalink:"/OrigamiStudio/docs/Math/Round"}},s={},c=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"power-\u5e42\u503c"},"Power \u5e42\u503c"),(0,a.kt)("p",null,"Calculate the first value (base) to the second value (exponent)\u2019s power (ex: 2^3)."),(0,a.kt)("p",null,"\u8ba1\u7b97\u7b2c\u4e00\u4e2a\u503c ( \u57fa\u6570 ) \u5230\u7b2c\u4e8c\u4e2a\u503c ( \u6307\u6570 ) \u7684\u5e42\u503c\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a2\xb3\uff0c\u53ef\u4ee5\u5199\u4e3a\uff1aPOWER(2,3)\u3002"),(0,a.kt)("p",null,"Right-click to add ports for additional exponents to chain, or change the type (ex: number, position, rotation)."),(0,a.kt)("p",null,"\u53f3\u952e\u9009\u62e9\u66f4\u591a\u7684\u7aef\u53e3\u6570\u91cf\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\uff0c\u4f4d\u7f6e\uff0c\u89d2\u5ea6\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/67ef1fb1-6fb7-4dc2-ab76-c70bda808745/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T175149Z&X-Amz-Expires=86400&X-Amz-Signature=faf78552b7cd2a992fc5e03f12f984c4aa63e56084154b59dc725b6c1bb51e71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,a.kt)("p",null,"The base value."),(0,a.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,a.kt)("p",null,"A value that represents the exponent to raise the previous number by."),(0,a.kt)("p",null,"\u4e00\u4e2a\u503c\uff0c\u8868\u793a\u5c06\u5148\u524d\u7684\u6570\u5b57\u4e58\u4ee5\u8f93\u5165\u7684\u6b21\u65b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output \u8f93\u51fa")),(0,a.kt)("p",null,"The base value to the subsequent exponents\u2019 powers."),(0,a.kt)("p",null,"\u57fa\u7840\u503c\u4e58\u4ee5\u8f93\u5165\u7684\u6b21\u65b9\u540e\u7684\u5e42\u503c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,a.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/b40c51ddb88e4c7d813587de212037da"},(0,a.kt)("strong",{parentName:"a"},"[\u221a](https://origami.design/documentation/patches/builtin.math.sqrt.html) \u6839\u53f7"))))}m.isMDXComponent=!0}}]);