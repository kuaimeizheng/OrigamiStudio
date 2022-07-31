"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3201],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93341:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={sidebar_position:2},l="JSON to Text JSON\u8f6c\u6587\u672c",c={unversionedId:"documentation/Data/JSON to Text",id:"documentation/Data/JSON to Text",title:"JSON to Text JSON\u8f6c\u6587\u672c",description:"Formats any JSON value into a text string to be used with a Text Layer for debugging.",source:"@site/docs/documentation/Data/JSON to Text.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/JSON to Text",permalink:"/OrigamiStudio/docs/documentation/Data/JSON to Text",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/JSON to Text.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"JSON Object JSON\u5bf9\u8c61",permalink:"/OrigamiStudio/docs/documentation/Data/JSON Object"},next:{title:"Network Request \u7f51\u7edc\u8bf7\u6c42",permalink:"/OrigamiStudio/docs/documentation/Data/Network Request"}},p={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:d};function f(t){var e=t.components,u=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json-to-text-json\u8f6c\u6587\u672c"},"JSON to Text JSON\u8f6c\u6587\u672c"),(0,o.kt)("p",null,"Formats any JSON value into a text string to be used with a Text Layer for debugging."),(0,o.kt)("p",null,"\u5c06\u4efb\u4f55JSON\u503c\u683c\u5f0f\u5316\u4e3a\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u7528\u6587\u672c\u56fe\u5c42\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(62821).Z,width:"1508",height:"198"})),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A JSON object or array."),(0,o.kt)("p",null,"JSON\u5bf9\u8c61\u6216\u6570\u7ec4\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"A text string that represents the JSON data."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793aJSON\u6570\u636e\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./Set%20Value%20for%20Key"},"Set Value for Key \u8bbe\u7f6e\u952e\u503c")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}f.isMDXComponent=!0},62821:function(t,e,n){e.Z=n.p+"assets/images/json-to-text-265a6992095db0d82cbe24638a933edd.png"}}]);