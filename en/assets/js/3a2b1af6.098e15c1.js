"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[78500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Repeating Pulse \u91cd\u590d\u8109\u51b2",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Repeating Pulse \u91cd\u590d\u8109\u51b2",l={unversionedId:"documentation/Utility/Repeating Pulse",id:"documentation/Utility/Repeating Pulse",title:"Repeating Pulse \u91cd\u590d\u8109\u51b2",description:"Output a pulse at regular intervals.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Repeating Pulse.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Repeating Pulse",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Repeating Pulse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Repeating Pulse.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{title:"Repeating Pulse \u91cd\u590d\u8109\u51b2",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Random \u968f\u673a",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Random"},next:{title:"Restart Prototype \u91cd\u542f\u539f\u578b",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Restart Prototype"}},u={},p=[{value:"Frequency \u9891\u7387",id:"frequency-\u9891\u7387",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"repeating-pulse-\u91cd\u590d\u8109\u51b2"},"Repeating Pulse \u91cd\u590d\u8109\u51b2"),(0,i.kt)("p",null,"Output a pulse at regular intervals."),(0,i.kt)("p",null,"\u5b9a\u671f\u8f93\u51fa\u4e00\u4e2a\u8109\u51b2\u3002"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/States%20&%20Pulses"},"States & Pulses")," for more information."),(0,i.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u72b6\u6001\u548c\u8109\u51b2\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(33012).Z,width:"1168",height:"204"})),(0,i.kt)("h3",{id:"frequency-\u9891\u7387"},"Frequency \u9891\u7387"),(0,i.kt)("p",null,"The length between pulses, in seconds."),(0,i.kt)("p",null,"\u8109\u51b2\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"A pulse repeated at regular intervals."),(0,i.kt)("p",null,"\u4ee5\u56fa\u5b9a\u95f4\u9694\u91cd\u590d\u7684\u8109\u51b2\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Pulse"},"Pulse \u8109\u51b2")))}s.isMDXComponent=!0},33012:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/repeating-pulse-033092c11ae64c4ccd0d846c1bbc14c6.png"}}]);