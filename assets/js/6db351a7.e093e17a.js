"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5455],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=c(r),m=a,y=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(y,o(o({ref:e},p),{},{components:r})):n.createElement(y,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},68138:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={sidebar_position:2},l="Array Join \u6570\u7ec4\u8fde\u63a5",c={unversionedId:"documentation/Data/Array Join",id:"documentation/Data/Array Join",title:"Array Join \u6570\u7ec4\u8fde\u63a5",description:"Joins multiple arrays into a single array.",source:"@site/docs/documentation/Data/Array Join.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Array Join",permalink:"/OrigamiStudio/docs/documentation/Data/Array Join",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Array Join.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657520054,formattedLastUpdatedAt:"2022\u5e747\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Array Count \u6570\u7ec4\u6570\u91cf",permalink:"/OrigamiStudio/docs/documentation/Data/Array Count"},next:{title:"Array Sort \u6570\u7ec4\u53cd\u8f6c",permalink:"/OrigamiStudio/docs/documentation/Data/Array Reverse"}},p={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function m(t){var e=t.components,u=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"array-join-\u6570\u7ec4\u8fde\u63a5"},"Array Join \u6570\u7ec4\u8fde\u63a5"),(0,i.kt)("p",null,"Joins multiple arrays into a single array."),(0,i.kt)("p",null,"\u5c06\u591a\u4e2a\u6570\u7ec4\u8fde\u63a5\u6210\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"Right-click the patch to add additional inputs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(86792).Z,width:"1498",height:"226"})),(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A JSON array."),(0,i.kt)("p",null,"\u4e00\u4e2aJSON\u6570\u7ec4\u3002"),(0,i.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A JSON array to join with the first array."),(0,i.kt)("p",null,"\u8981\u4e0e\u7b2c\u4e00\u4e2a\u6570\u7ec4\u8fde\u63a5\u7684JSON\u6570\u7ec4\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"A single joined array."),(0,i.kt)("p",null,"\u5408\u5e76\u540e\u7684\u6570\u7ec4\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./Array%20Append"},"Array Append \u6570\u7ec4\u6dfb\u52a0")))}m.isMDXComponent=!0},86792:function(t,e,r){e.Z=r.p+"assets/images/array-join-3588e47a172c64aa719d40e5e9da5362.png"}}]);