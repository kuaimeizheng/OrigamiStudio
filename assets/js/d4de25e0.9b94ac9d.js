"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9201],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],u={sidebar_position:2},l="Repeating Pulse \u91cd\u590d\u8109\u51b2",c={unversionedId:"documentation/Utility/Repeating Pulse",id:"documentation/Utility/Repeating Pulse",title:"Repeating Pulse \u91cd\u590d\u8109\u51b2",description:"Output a pulse at regular intervals.",source:"@site/docs/documentation/Utility/Repeating Pulse.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Repeating Pulse",permalink:"/OrigamiStudio/docs/documentation/Utility/Repeating Pulse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Repeating Pulse.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657510818,formattedLastUpdatedAt:"2022\u5e747\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Random \u968f\u673a",permalink:"/OrigamiStudio/docs/documentation/Utility/Random"},next:{title:"Restart Prototype \u91cd\u542f\u539f\u578b",permalink:"/OrigamiStudio/docs/documentation/Utility/Restart Prototype"}},p={},s=[{value:"Frequency \u9891\u7387",id:"frequency-\u9891\u7387",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(e){var t=e.components,u=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"repeating-pulse-\u91cd\u590d\u8109\u51b2"},"Repeating Pulse \u91cd\u590d\u8109\u51b2"),(0,a.kt)("p",null,"Output a pulse at regular intervals."),(0,a.kt)("p",null,"\u5b9a\u671f\u8f93\u51fa\u4e00\u4e2a\u8109\u51b2\u3002"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/States%20&%20Pulses"},"States & Pulses")," for more information."),(0,a.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u72b6\u6001\u548c\u8109\u51b2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(33012).Z,width:"1168",height:"204"})),(0,a.kt)("h3",{id:"frequency-\u9891\u7387"},"Frequency \u9891\u7387"),(0,a.kt)("p",null,"The length between pulses, in seconds."),(0,a.kt)("p",null,"\u8109\u51b2\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A pulse repeated at regular intervals."),(0,a.kt)("p",null,"\u4ee5\u56fa\u5b9a\u95f4\u9694\u91cd\u590d\u7684\u8109\u51b2\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Pulse"},"Pulse \u8109\u51b2")))}m.isMDXComponent=!0},33012:function(e,t,n){t.Z=n.p+"assets/images/repeating-pulse-033092c11ae64c4ccd0d846c1bbc14c6.png"}}]);