"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6226],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||r;return n?i.createElement(f,a(a({ref:e},c),{},{components:n})):i.createElement(f,a({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12589:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],u={sidebar_position:2},l="Option Equals",p={unversionedId:"documentation/Utility/Option Equals",id:"documentation/Utility/Option Equals",title:"Option Equals",description:"Check if a value is equal to any of the given inputs.",source:"@site/docs/documentation/Utility/Option Equals.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Option Equals",permalink:"/OrigamiStudio/docs/documentation/Utility/Option Equals",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Option Equals.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1659583634,formattedLastUpdatedAt:"2022\u5e748\u67084\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Object Detection \u76ee\u6807\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/documentation/Utility/Object Detection"},next:{title:"Option Picker \u9009\u9879\u9009\u62e9\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Option Picker"}},c={},s=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-2",level:3},{value:"Option \u9009\u9879",id:"option-\u9009\u9879",level:3},{value:"Equals \u7b49\u4e8e",id:"equals-\u7b49\u4e8e",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(t){var e=t.components,u=(0,o.Z)(t,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"option-equals"},"Option Equals"),(0,r.kt)("p",null,"Check if a value is equal to any of the given inputs."),(0,r.kt)("p",null,"\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u5426\u7b49\u4e8e\u4efb\u4f55\u7ed9\u5b9a\u7684\u8f93\u5165\u3002"),(0,r.kt)("p",null,"Right-click to change the type (ex: number, text, color), or to add additional options."),(0,r.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u53ef\u4ee5\u66f4\u6539\u7c7b\u578b(\u4f8b\u5982:\u6570\u5b57\u3001\u6587\u672c\u3001\u989c\u8272)\uff0c\u6216\u6dfb\u52a0\u5176\u4ed6\u9009\u9879\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(20408).Z,width:"1472",height:"284"})),(0,r.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,r.kt)("p",null,"A value to compare with the option inputs."),(0,r.kt)("p",null,"\u8981\u4e0e\u8f93\u5165\u9009\u9879\u8fdb\u884c\u6bd4\u8f83\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A value that represents option 0."),(0,r.kt)("p",null,"\u8868\u793a\u9009\u98790\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A value that represents option 1."),(0,r.kt)("p",null,"\u8868\u793a\u9009\u98791\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"input-\u8f93\u5165-2"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A value that represents option 2."),(0,r.kt)("p",null,"\u8868\u793a\u9009\u98791\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"option-\u9009\u9879"},"Option \u9009\u9879"),(0,r.kt)("p",null,"The option input that the value is equal to."),(0,r.kt)("p",null,"\u503c\u7b49\u4e8e\u7684\u9009\u9879\u8f93\u5165\u3002"),(0,r.kt)("h3",{id:"equals-\u7b49\u4e8e"},"Equals \u7b49\u4e8e"),(0,r.kt)("p",null,"A boolean that is true if the value input matches any of the option inputs."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u503c\u8f93\u5165\u4e0e\u4efb\u4f55\u9009\u9879\u8f93\u5165\u5339\u914d\uff0c\u5219\u4e3a\u771f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")))}m.isMDXComponent=!0},20408:function(t,e,n){e.Z=n.p+"assets/images/option-equals-e1ea942f5378b8b7cbae0fb96c8f4e66.png"}}]);