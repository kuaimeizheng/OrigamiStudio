"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[41955],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),p=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(r),m=n,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return r?a.createElement(h,o(o({ref:e},d),{},{components:r})):a.createElement(h,o({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8944:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Alert View \u8b66\u793a\u6846",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Alert View \u8b66\u793a\u6846",l={unversionedId:"documentation/Material/Alert View",id:"documentation/Material/Alert View",title:"Alert View \u8b66\u793a\u6846",description:"A Material alert view dialog with customizable actions.",source:"@site/docs/documentation/Material/Alert View.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Alert View",permalink:"/OrigamiStudio/docs/documentation/Material/Alert View",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Alert View.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Alert View \u8b66\u793a\u6846",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Material \u8c37\u6b4c\u79fb\u52a8\u7aef",permalink:"/OrigamiStudio/docs/category/material-\u8c37\u6b4c\u79fb\u52a8\u7aef"},next:{title:"Checkbox \u590d\u9009\u6846",permalink:"/OrigamiStudio/docs/documentation/Material/Checkbox"}},u={},p=[{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Message \u4fe1\u606f",id:"message-\u4fe1\u606f",level:3},{value:"Button 1 \u6309\u94ae 1",id:"button-1-\u6309\u94ae-1",level:3},{value:"Button 2 \u6309\u94ae 2",id:"button-2-\u6309\u94ae-2",level:3},{value:"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb",id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb",level:3},{value:"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb",id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:p};function c(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"alert-view-\u8b66\u793a\u6846"},"Alert View \u8b66\u793a\u6846"),(0,n.kt)("p",null,"A Material alert view dialog with customizable actions."),(0,n.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684Material\u8b66\u793a\u5bf9\u8bdd\u6846\u3002"),(0,n.kt)("p",null,"Use the Touch button on the component to get the tap events on the buttons."),(0,n.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684 Touch \u6309\u94ae\u6765\u83b7\u53d6\u6309\u94ae\u4e0a\u7684\u70b9\u51fb\u4e8b\u4ef6\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(68683).Z,width:"1542",height:"300"})),(0,n.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,n.kt)("p",null,"A pulse to animate and display the layer."),(0,n.kt)("p",null,"\u7528\u4e8e\u52a8\u753b\u548c\u663e\u793a\u56fe\u5c42\u7684\u8109\u51b2\u3002"),(0,n.kt)("h3",{id:"title-\u6807\u9898"},"Title \u6807\u9898"),(0,n.kt)("p",null,"The title text of the alert view."),(0,n.kt)("p",null,"\u8b66\u793a\u6846\u7684\u6807\u9898\u6587\u672c\u3002"),(0,n.kt)("h3",{id:"message-\u4fe1\u606f"},"Message \u4fe1\u606f"),(0,n.kt)("p",null,"The message text of the alert view."),(0,n.kt)("p",null,"\u8b66\u793a\u6846\u7684\u4fe1\u606f\u6587\u672c\u3002"),(0,n.kt)("h3",{id:"button-1-\u6309\u94ae-1"},"Button 1 \u6309\u94ae 1"),(0,n.kt)("p",null,"The text string for the first button."),(0,n.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("h3",{id:"button-2-\u6309\u94ae-2"},"Button 2 \u6309\u94ae 2"),(0,n.kt)("p",null,"The text string for the second button."),(0,n.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("h3",{id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb"},"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb"),(0,n.kt)("p",null,"A pulse that represents when Button 1 is tapped."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 1 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,n.kt)("h3",{id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb"},"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb"),(0,n.kt)("p",null,"A pulse that represents when Button 2 is tapped."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 2 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}c.isMDXComponent=!0},68683:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/alert-view-13d1a84e9d7d013f87e629ecbd8c293d.png"}}]);