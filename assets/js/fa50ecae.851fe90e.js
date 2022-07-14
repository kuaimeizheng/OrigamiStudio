"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9482],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={sidebar_position:2},l="Open URL \u6253\u5f00\u94fe\u63a5",c={unversionedId:"documentation/Data/Open URL",id:"documentation/Data/Open URL",title:"Open URL \u6253\u5f00\u94fe\u63a5",description:"Opens a URL on the default external application.",source:"@site/docs/documentation/Data/Open URL.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Open URL",permalink:"/OrigamiStudio/docs/documentation/Data/Open URL",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Open URL.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657795927,formattedLastUpdatedAt:"2022\u5e747\u670814\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Network Request \u7f51\u7edc\u8bf7\u6c42",permalink:"/OrigamiStudio/docs/documentation/Data/Network Request"},next:{title:"Set Value for Key \u8bbe\u7f6e\u952e\u503c",permalink:"/OrigamiStudio/docs/documentation/Data/Set Value for Key"}},p={},s=[{value:"Open \u6253\u5f00",id:"open-\u6253\u5f00",level:3},{value:"URL \u94fe\u63a5",id:"url-\u94fe\u63a5",level:3},{value:"Result \u7ed3\u679c",id:"result-\u7ed3\u679c",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function f(e){var t=e.components,u=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"open-url-\u6253\u5f00\u94fe\u63a5"},"Open URL \u6253\u5f00\u94fe\u63a5"),(0,a.kt)("p",null,"Opens a URL on the default external application."),(0,a.kt)("p",null,"\u5728\u9ed8\u8ba4\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\u4e0a\u6253\u5f00 URL\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(65242).Z,width:"1498",height:"230"})),(0,a.kt)("h3",{id:"open-\u6253\u5f00"},"Open \u6253\u5f00"),(0,a.kt)("p",null,"A pulse that triggers the URL open."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u89e6\u53d1 URL \u7684\u6253\u5f00\u3002"),(0,a.kt)("h3",{id:"url-\u94fe\u63a5"},"URL \u94fe\u63a5"),(0,a.kt)("p",null,"A URL specifying the location to open. It can start with HTTP://, HTTPS:// or a custom app scheme like fb://"),(0,a.kt)("p",null,"\u6307\u5b9a\u8981\u6253\u5f00\u7684\u5730\u5740 URL\u3002\u5b83\u53ef\u4ee5\u4ee5 HTTP://\u3001HTTPS:// \u6216\u81ea\u5b9a\u4e49\u5e94\u7528\u65b9\u6848\uff08\u5982 fb://\uff09\u5f00\u5934"),(0,a.kt)("h3",{id:"result-\u7ed3\u679c"},"Result \u7ed3\u679c"),(0,a.kt)("p",null,"A pulse that informs if the location was successfully opened."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u544a\u77e5\u5730\u5740\u662f\u5426\u5df2\u6210\u529f\u6253\u5f00\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Network%20Request"},"Network Request \u7f51\u7edc\u8bf7\u6c42")))}f.isMDXComponent=!0},65242:function(e,t,n){t.Z=n.p+"assets/images/open-url-fe13afe2672c8bfa8724e4df61e42c16.png"}}]);