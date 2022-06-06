"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3517],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return y}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=c(r),y=a,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},248:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={sidebar_position:2},l="Array Sort \u6570\u7ec4\u6392\u5e8f",c={unversionedId:"Data/Array Sort",id:"Data/Array Sort",title:"Array Sort \u6570\u7ec4\u6392\u5e8f",description:"Returns an array in sorted order.",source:"@site/docs/Data/Array Sort.md",sourceDirName:"Data",slug:"/Data/Array Sort",permalink:"/OrigamiStudio/docs/Data/Array Sort",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Data/Array Sort.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654509971,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Array Sort \u6570\u7ec4\u53cd\u8f6c",permalink:"/OrigamiStudio/docs/Data/Array Reverse"},next:{title:"Get Keys \u83b7\u53d6\u952e",permalink:"/OrigamiStudio/docs/Data/Get Keys"}},s={},p=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Sort By \u6392\u5e8f\u65b9\u5f0f",id:"sort-by-\u6392\u5e8f\u65b9\u5f0f",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function y(t){var e=t.components,u=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"array-sort-\u6570\u7ec4\u6392\u5e8f"},"Array Sort \u6570\u7ec4\u6392\u5e8f"),(0,o.kt)("p",null,"Returns an array in sorted order."),(0,o.kt)("p",null,"\u8fd4\u56de\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(1811).Z,width:"1500",height:"228"})),(0,o.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,o.kt)("p",null,"An array to sort."),(0,o.kt)("p",null,"\u9700\u8981\u6392\u5e8f\u7684\u6570\u7ec4\u3002"),(0,o.kt)("h3",{id:"sort-by-\u6392\u5e8f\u65b9\u5f0f"},"Sort By \u6392\u5e8f\u65b9\u5f0f"),(0,o.kt)("p",null,"The sorting method \u2013 Ascending or Descending."),(0,o.kt)("p",null,"\u6392\u5e8f\u65b9\u5f0f\u2014\u2014\u5347\u5e8f\u6216\u964d\u5e8f\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The sorted array."),(0,o.kt)("p",null,"\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./Array%20Reverse"},"Array Reverse \u6570\u7ec4\u53cd\u8f6c")))}y.isMDXComponent=!0},1811:function(t,e,r){e.Z=r.p+"assets/images/array-sort-3f8603247c5db14e72f9a6dadc061ed3.png"}}]);