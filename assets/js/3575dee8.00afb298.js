"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3199],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(f,a(a({ref:e},l),{},{components:n})):o.createElement(f,a({ref:e},l))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1995:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],p={sidebar_position:2},c="Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173",u={unversionedId:"documentation/Loops/Loop Option Switch",id:"documentation/Loops/Loop Option Switch",title:"Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173",description:"Find the index of the last pulsed item in a loop of pulses.",source:"@site/docs/documentation/Loops/Loop Option Switch.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Option Switch",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Option Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Option Switch.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657467797,formattedLastUpdatedAt:"2022\u5e747\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Loop Insert \u5faa\u73af\u63d2\u5165",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Insert"},next:{title:"Loop Over Array \u6570\u7ec4\u904d\u5386",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Over Array"}},l={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Option \u9009\u9879",id:"option-\u9009\u9879",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(t){var e=t.components,p=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loop-option-switch-\u5faa\u73af\u9009\u9879\u5f00\u5173"},"Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173"),(0,i.kt)("p",null,"Find the index of the last pulsed item in a loop of pulses."),(0,i.kt)("p",null,"\u67e5\u627e\u8109\u51b2\u5faa\u73af\u4e2d\u6700\u540e\u4e00\u4e2a\u8109\u51b2\u9879\u7684\u7d22\u5f15\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(20003).Z,width:"170",height:"442"})),(0,i.kt)("p",null,"Often used with an ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction")," patch on a looped layer to check which of the layers was tapped."),(0,i.kt)("p",null,"\u901a\u5e38\u5728\u5faa\u73af\u7684\u56fe\u5c42\u4e0a\u6dfb\u52a0\u4e00\u4e2a\u4ea4\u4e92\u6a21\u5757\uff0c\u4ee5\u68c0\u67e5\u54ea\u4e2a\u56fe\u5c42\u88ab\u70b9\u51fb\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(46996).Z,width:"1308",height:"214"})),(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A loop of pulses."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\u5faa\u73af"),(0,i.kt)("h3",{id:"option-\u9009\u9879"},"Option \u9009\u9879"),(0,i.kt)("p",null,"An index that represents the last pulsed item in a loop."),(0,i.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff0c\u8868\u793a\u5faa\u73af\u4e2d\u6700\u540e\u4e00\u4e2a\u8109\u51b2\u9879\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")))}m.isMDXComponent=!0},20003:function(t,e,n){e.Z=n.p+"assets/images/loop-option-switch-1-b917df53aa09ddcd776bbf5a43aca5d1.png"},46996:function(t,e,n){e.Z=n.p+"assets/images/loop-option-switch-6126b833dd0bb9963f674b8e9de915d5.png"}}]);