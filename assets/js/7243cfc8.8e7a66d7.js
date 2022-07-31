"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6506],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29402:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],u={sidebar_position:1,tags:["path","shape","path builder"]},l="Path Builder",p={unversionedId:"patches/Shape/Path builder",id:"patches/Shape/Path builder",title:"Path Builder",description:"Path Builder",source:"@site/docs/patches/Shape/Path builder.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/Path builder",permalink:"/OrigamiStudio/docs/patches/Shape/Path builder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/Path builder.md",tags:[{label:"path",permalink:"/OrigamiStudio/docs/tags/path"},{label:"shape",permalink:"/OrigamiStudio/docs/tags/shape"},{label:"path builder",permalink:"/OrigamiStudio/docs/tags/path-builder"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["path","shape","path builder"]},sidebar:"patchesSidebar",previous:{title:"Shapes \u5f62\u72b6",permalink:"/OrigamiStudio/docs/category/shapes-\u5f62\u72b6-1"},next:{title:"Path builder to Shape",permalink:"/OrigamiStudio/docs/patches/Shape/Path builder to Shape"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"moveTo",id:"moveto",level:4},{value:"Point",id:"point",level:4},{value:"curveFrom",id:"curvefrom",level:4},{value:"curveTo",id:"curveto",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Path Array",id:"path-array",level:4}],d={toc:s};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"path-builder"},"Path Builder"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Path Builder"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"type ",(0,i.kt)("span",null,"moveTo")),(0,i.kt)("li",null,"Point X ",(0,i.kt)("span",null,"0")," \xa0\xa0\xa0\xa0 Y ",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"curveFrom X ",(0,i.kt)("span",null,"0")," \xa0\xa0\xa0\xa0 Y ",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"curveTo X ",(0,i.kt)("span",null,"0")," \xa0\xa0\xa0\xa0 Y ",(0,i.kt)("span",null,"0"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Path Array",(0,i.kt)("span",null,"[...]"))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"moveto"},"moveTo"),(0,i.kt)("h4",{id:"point"},"Point"),(0,i.kt)("h4",{id:"curvefrom"},"curveFrom"),(0,i.kt)("h4",{id:"curveto"},"curveTo")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"path-array"},"Path Array"))))}h.isMDXComponent=!0}}]);