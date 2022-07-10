"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7546],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21020:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={sidebar_position:2},l="Subarray \u5b50\u6570\u7ec4",c={unversionedId:"documentation/Data/Subarray",id:"documentation/Data/Subarray",title:"Subarray \u5b50\u6570\u7ec4",description:"Get a subset of items from an array.",source:"@site/docs/documentation/Data/Subarray.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Subarray",permalink:"/OrigamiStudio/docs/documentation/Data/Subarray",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Subarray.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657467797,formattedLastUpdatedAt:"2022\u5e747\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Settings JSON \u8bbe\u7f6eJSON",permalink:"/OrigamiStudio/docs/documentation/Data/Settings JSON"},next:{title:"Value at Index \u7d22\u5f15\u503c",permalink:"/OrigamiStudio/docs/documentation/Data/Value at Index"}},p={},s=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Location \u4f4d\u7f6e",id:"location-\u4f4d\u7f6e",level:3},{value:"Length \u957f\u5ea6",id:"length-\u957f\u5ea6",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function f(t){var e=t.components,u=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subarray-\u5b50\u6570\u7ec4"},"Subarray \u5b50\u6570\u7ec4"),(0,o.kt)("p",null,"Get a subset of items from an array."),(0,o.kt)("p",null,"\u4ece\u6570\u7ec4\u4e2d\u83b7\u53d6\u9879\u76ee\u7684\u5b50\u96c6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(4121).Z,width:"1502",height:"262"})),(0,o.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,o.kt)("p",null,"A JSON array to get a subset from."),(0,o.kt)("p",null,"\u8981\u4ece\u4e2d\u83b7\u53d6\u5b50\u96c6\u7684 JSON \u6570\u7ec4\u3002"),(0,o.kt)("h3",{id:"location-\u4f4d\u7f6e"},"Location \u4f4d\u7f6e"),(0,o.kt)("p",null,"An index that represents the start of the subset."),(0,o.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff0c\u8868\u793a\u5b50\u96c6\u7684\u5f00\u59cb\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"length-\u957f\u5ea6"},"Length \u957f\u5ea6"),(0,o.kt)("p",null,"A number that represents the number of items from the JSON array to include."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8981\u5305\u542b\u7684 JSON \u6570\u7ec4\u4e2d\u7684\u9879\u76ee\u6570\u91cf\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"A JSON array with the subset of items."),(0,o.kt)("p",null,"\u5305\u542b\u9879\u76ee\u5b50\u96c6\u7684 JSON \u6570\u7ec4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./Array%20Append"},"Array Append \u6570\u7ec4\u6dfb\u52a0")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")))}f.isMDXComponent=!0},4121:function(t,e,r){e.Z=r.p+"assets/images/subarray-d2812dfd797af397baf013f6ec4918f9.png"}}]);