"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6995],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46065:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={sidebar_position:2},u="Time \u65f6\u95f4",l={unversionedId:"documentation/Utility/Time",id:"documentation/Utility/Time",title:"Time \u65f6\u95f4",description:"Track the number of seconds and frames since the start of the prototype.",source:"@site/docs/documentation/Utility/Time.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Time",permalink:"/OrigamiStudio/docs/documentation/Utility/Time",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Time.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657467797,formattedLastUpdatedAt:"2022\u5e747\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/docs/documentation/Utility/Switch"},next:{title:"Transition \u8fc7\u6e21",permalink:"/OrigamiStudio/docs/documentation/Utility/Transition"}},s={},m=[{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4-1",level:3},{value:"Frame \u5e27",id:"frame-\u5e27",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:m};function d(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time-\u65f6\u95f4"},"Time \u65f6\u95f4"),(0,o.kt)("p",null,"Track the number of seconds and frames since the start of the prototype."),(0,o.kt)("p",null,"\u8ddf\u8e2a\u81ea\u539f\u578b\u5f00\u59cb\u4ee5\u6765\u7684\u79d2\u6570\u548c\u5e27\u6570\u3002"),(0,o.kt)("p",null,"Use Date & Time Formatter to make human-readable formats."),(0,o.kt)("p",null,"\u4f7f\u7528 Date & Time Formatter\u6a21\u5757 \u5236\u4f5c\u6211\u4eec\u5e38\u89c1\u523b\u5ea6\u7684\u683c\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(11974).Z,width:"1316",height:"202"})),(0,o.kt)("h3",{id:"time-\u65f6\u95f4-1"},"Time \u65f6\u95f4"),(0,o.kt)("p",null,"The number of seconds have have passed since the start of the prototypes, starting at 0."),(0,o.kt)("p",null,"\u81ea\u539f\u578b\u5f00\u59cb\u4ee5\u6765\u5df2\u7ecf\u8fc7\u53bb\u7684\u79d2\u6570\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,o.kt)("h3",{id:"frame-\u5e27"},"Frame \u5e27"),(0,o.kt)("p",null,"The number of frames have have passed since the start of the prototypes, starting at 0. When running at 60 frames per second, frames should be time * 60."),(0,o.kt)("p",null,"\u4ece\u539f\u578b\u5f00\u59cb\u5230\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u7684\u5e27\u6570\uff0c\u4ece 0 \u5f00\u59cb\u3002\u4ee5\u6bcf\u79d2 60 \u5e27\u8fd0\u884c\u65f6\uff0c\u5e27\u6570\u5e94\u8be5\u662f\u65f6\u95f4 * 60\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"))}d.isMDXComponent=!0},11974:function(e,t,n){t.Z=n.p+"assets/images/time-1f48031b70646af43a847f6ba31ac2a4.png"}}]);