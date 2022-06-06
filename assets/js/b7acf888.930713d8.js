"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[539],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],u={sidebar_position:2},l="Repeating Pulse \u91cd\u590d\u8109\u51b2",p={unversionedId:"Utility/Repeating Pulse",id:"Utility/Repeating Pulse",title:"Repeating Pulse \u91cd\u590d\u8109\u51b2",description:"Output a pulse at regular intervals.",source:"@site/docs/Utility/Repeating Pulse.md",sourceDirName:"Utility",slug:"/Utility/Repeating Pulse",permalink:"/OrigamiStudio/docs/Utility/Repeating Pulse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Utility/Repeating Pulse.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Random \u968f\u673a",permalink:"/OrigamiStudio/docs/Utility/Random"},next:{title:"Restart Prototype \u91cd\u542f\u539f\u578b",permalink:"/OrigamiStudio/docs/Utility/Restart Prototype"}},s={},c=[{value:"Frequency \u9891\u7387",id:"frequency-\u9891\u7387",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"repeating-pulse-\u91cd\u590d\u8109\u51b2"},"Repeating Pulse \u91cd\u590d\u8109\u51b2"),(0,a.kt)("p",null,"Output a pulse at regular intervals."),(0,a.kt)("p",null,"\u5b9a\u671f\u8f93\u51fa\u4e00\u4e2a\u8109\u51b2\u3002"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Concepts/States%20&%20Pulses"},"States & Pulses")," for more information."),(0,a.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u72b6\u6001\u548c\u8109\u51b2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cce1b5f0-9411-4cce-8c5d-f1aa3b4258ad/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181923Z&X-Amz-Expires=86400&X-Amz-Signature=13f4cb0b9d0b6b2da79b414763af8c360618d2874556b665e1e9752b096cfb69&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,a.kt)("h3",{id:"frequency-\u9891\u7387"},"Frequency \u9891\u7387"),(0,a.kt)("p",null,"The length between pulses, in seconds."),(0,a.kt)("p",null,"\u8109\u51b2\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A pulse repeated at regular intervals."),(0,a.kt)("p",null,"\u4ee5\u56fa\u5b9a\u95f4\u9694\u91cd\u590d\u7684\u8109\u51b2\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Pulse"},"Pulse \u8109\u51b2")))}m.isMDXComponent=!0}}]);