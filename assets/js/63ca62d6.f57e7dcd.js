"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7036],{3905:function(n,t,e){e.d(t,{Zo:function(){return s},kt:function(){return m}});var r=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=r.createContext({}),l=function(n){var t=r.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},s=function(n){var t=l(n.components);return r.createElement(c.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),d=l(e),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return e?r.createElement(f,a(a({ref:t},s),{},{components:e})):r.createElement(f,a({ref:t},s))}));function m(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var i=e.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=n,u.mdxType="string"==typeof n?n:o,a[1]=u;for(var l=2;l<i;l++)a[l]=e[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},61366:function(n,t,e){e.r(t),e.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=e(87462),o=e(63366),i=(e(67294),e(3905)),a=["components"],u={sidebar_position:2},c="Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",l={unversionedId:"documentation/Animation/Bouncy Converter",id:"documentation/Animation/Bouncy Converter",title:"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",description:"Convert Pop Animation values to spring tension and friction.",source:"@site/docs/documentation/Animation/Bouncy Converter.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Bouncy Converter",permalink:"/OrigamiStudio/docs/documentation/Animation/Bouncy Converter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Bouncy Converter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Animation \u52a8\u753b",permalink:"/OrigamiStudio/docs/category/animation-\u52a8\u753b"},next:{title:"Classic Animation \u7ecf\u5178\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Classic Animation"}},s={},p=[{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:3},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:3},{value:"Friction \u5f20\u529b",id:"friction-\u5f20\u529b",level:3},{value:"Tension \u6469\u64e6\u529b",id:"tension-\u6469\u64e6\u529b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function m(n){var t=n.components,e=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bouncy-converter-\u5f39\u6027\u8f6c\u6362\u5668"},"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668"),(0,i.kt)("p",null,"Convert Pop Animation values to spring tension and friction."),(0,i.kt)("p",null,"\u628a Pop Animation \u7684\u503c\u8f6c\u6362\u4e3a\u5f39\u7c27\u5f20\u529b\u548c\u6469\u64e6\u529b\u3002"),(0,i.kt)("div",{class:"patch-container"},(0,i.kt)("div",{class:"patch processor"},(0,i.kt)("h3",null,"Bouncy Converter"),(0,i.kt)("ul",{class:"inputs"},(0,i.kt)("li",null,"Bounciness"),(0,i.kt)("li",null,"Speed")),(0,i.kt)("ul",{class:"outputs"},(0,i.kt)("li",null,"Friction"),(0,i.kt)("li",null,"Tension")),(0,i.kt)("hr",null))),(0,i.kt)("h3",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,i.kt)("p",null,"A number that represents bounciness from Pop Animation."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u5f39\u6027\uff0c\u503c\u8d8a\u5927\u8d8a\u6709\u5f39\u6027\u3002"),(0,i.kt)("h3",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,i.kt)("p",null,"A number that represents speed of Pop Animation."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u901f\u5ea6\uff0c\u503c\u8d8a\u5927\u901f\u5ea6\u8d8a\u5feb\u3002"),(0,i.kt)("h3",{id:"friction-\u5f20\u529b"},"Friction \u5f20\u529b"),(0,i.kt)("p",null,"A number that represents friction."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5f20\u529b\u3002"),(0,i.kt)("h3",{id:"tension-\u6469\u64e6\u529b"},"Tension \u6469\u64e6\u529b"),(0,i.kt)("p",null,"A number that represents spring tension."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6469\u64e6\u529b\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Spring%20Converter"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668")))}m.isMDXComponent=!0}}]);