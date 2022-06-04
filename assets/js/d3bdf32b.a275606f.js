"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6484],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",u={unversionedId:"Animation/Bouncy Converter",id:"Animation/Bouncy Converter",title:"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",description:"Convert Pop Animation values to spring tension and friction.",source:"@site/docs/Animation/Bouncy Converter.md",sourceDirName:"Animation",slug:"/Animation/Bouncy Converter",permalink:"/OrigamiStudio/docs/Animation/Bouncy Converter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Animation/Bouncy Converter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Animation \u52a8\u753b",permalink:"/OrigamiStudio/docs/category/animation-\u52a8\u753b"},next:{title:"Classic Animation \u7ecf\u5178\u52a8\u753b",permalink:"/OrigamiStudio/docs/Animation/Classic Animation"}},l={},p=[{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:3},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:3},{value:"Friction \u5f20\u529b",id:"friction-\u5f20\u529b",level:3},{value:"Tension \u6469\u64e6\u529b",id:"tension-\u6469\u64e6\u529b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bouncy-converter-\u5f39\u6027\u8f6c\u6362\u5668"},"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668"),(0,o.kt)("p",null,"Convert Pop Animation values to spring tension and friction."),(0,o.kt)("p",null,"\u628a Pop Animation \u7684\u503c\u8f6c\u6362\u4e3a\u5f39\u7c27\u5f20\u529b\u548c\u6469\u64e6\u529b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13d06cbe-b0e9-402a-8ef8-b66702bfa8e3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T150855Z&X-Amz-Expires=86400&X-Amz-Signature=270f814841165612b57eb8afbc292e8f674f6fe62d9679b78bc9e7cb18461aaa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})),(0,o.kt)("h3",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,o.kt)("p",null,"A number that represents bounciness from Pop Animation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u5f39\u6027\uff0c\u503c\u8d8a\u5927\u8d8a\u6709\u5f39\u6027\u3002"),(0,o.kt)("h3",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,o.kt)("p",null,"A number that represents speed of Pop Animation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u901f\u5ea6\uff0c\u503c\u8d8a\u5927\u901f\u5ea6\u8d8a\u5feb\u3002"),(0,o.kt)("h3",{id:"friction-\u5f20\u529b"},"Friction \u5f20\u529b"),(0,o.kt)("p",null,"A number that represents friction."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5f20\u529b\u3002"),(0,o.kt)("h3",{id:"tension-\u6469\u64e6\u529b"},"Tension \u6469\u64e6\u529b"),(0,o.kt)("p",null,"A number that represents spring tension."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6469\u64e6\u529b\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Spring%20Converter"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668")),(0,o.kt)("p",null,"\u5386\u53f2\u7248\u672c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a74dbc54-9f08-4269-8857-a26834e650fe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T150926Z&X-Amz-Expires=86400&X-Amz-Signature=9a3b40f9322955c53b152785dc8813bf4c41a51eaf55152dd8f2a923d0786a46&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})))}d.isMDXComponent=!0}}]);