"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[83199],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>m});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var c=n.createContext({}),l=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=l(o),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(f,a(a({ref:e},s),{},{components:o})):n.createElement(f,a({ref:e},s))}));function m(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=o.length,a=new Array(r);a[0]=d;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:i,a[1]=p;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},79663:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const r={sidebar_position:5},a="Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173",p={unversionedId:"documentation/Loops/Loop Option Switch",id:"documentation/Loops/Loop Option Switch",title:"Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173",description:"Find the index of the last pulsed item in a loop of pulses.",source:"@site/docs/documentation/Loops/Loop Option Switch.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Option Switch",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Option Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Option Switch.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666962516,formattedLastUpdatedAt:"2022\u5e7410\u670828\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop Insert \u5faa\u73af\u63d2\u5165",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Insert"},next:{title:"Loop Over Array \u6570\u7ec4\u904d\u5386",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Over Array"}},c={},l=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Option \u9009\u9879",id:"option-\u9009\u9879",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:l};function u(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loop-option-switch-\u5faa\u73af\u9009\u9879\u5f00\u5173"},"Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173"),(0,i.kt)("p",null,"Find the index of the last pulsed item in a loop of pulses."),(0,i.kt)("p",null,"\u67e5\u627e\u8109\u51b2\u5faa\u73af\u4e2d\u6700\u540e\u4e00\u4e2a\u8109\u51b2\u9879\u7684\u7d22\u5f15\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:o(20003).Z,width:"170",height:"442"})),(0,i.kt)("p",null,"Often used with an ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction")," patch on a looped layer to check which of the layers was tapped."),(0,i.kt)("p",null,"\u901a\u5e38\u5728\u5faa\u73af\u7684\u56fe\u5c42\u4e0a\u6dfb\u52a0\u4e00\u4e2a\u4ea4\u4e92\u6a21\u5757\uff0c\u4ee5\u68c0\u67e5\u54ea\u4e2a\u56fe\u5c42\u88ab\u70b9\u51fb\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:o(46996).Z,width:"1308",height:"214"})),(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A loop of pulses."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\u5faa\u73af"),(0,i.kt)("h3",{id:"option-\u9009\u9879"},"Option \u9009\u9879"),(0,i.kt)("p",null,"An index that represents the last pulsed item in a loop."),(0,i.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff0c\u8868\u793a\u5faa\u73af\u4e2d\u6700\u540e\u4e00\u4e2a\u8109\u51b2\u9879\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")))}u.isMDXComponent=!0},20003:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/loop-option-switch-1-b917df53aa09ddcd776bbf5a43aca5d1.png"},46996:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/loop-option-switch-6126b833dd0bb9963f674b8e9de915d5.png"}}]);