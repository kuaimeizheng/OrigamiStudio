"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[56447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Alert View \u8b66\u793a\u6846",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Alert View \u8b66\u793a\u6846",l={unversionedId:"documentation/Material/Alert View",id:"documentation/Material/Alert View",title:"Alert View \u8b66\u793a\u6846",description:"A Material alert view dialog with customizable actions.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Material/Alert View.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Alert View",permalink:"/OrigamiStudio/en/docs/documentation/Material/Alert View",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Alert View.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667730725,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{title:"Alert View \u8b66\u793a\u6846",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Material \u8c37\u6b4c\u79fb\u52a8\u7aef",permalink:"/OrigamiStudio/en/docs/category/material-\u8c37\u6b4c\u79fb\u52a8\u7aef"},next:{title:"Checkbox \u590d\u9009\u6846",permalink:"/OrigamiStudio/en/docs/documentation/Material/Checkbox"}},u={},p=[{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Message \u4fe1\u606f",id:"message-\u4fe1\u606f",level:3},{value:"Button 1 \u6309\u94ae 1",id:"button-1-\u6309\u94ae-1",level:3},{value:"Button 2 \u6309\u94ae 2",id:"button-2-\u6309\u94ae-2",level:3},{value:"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb",id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb",level:3},{value:"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb",id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alert-view-\u8b66\u793a\u6846"},"Alert View \u8b66\u793a\u6846"),(0,a.kt)("p",null,"A Material alert view dialog with customizable actions."),(0,a.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684Material\u8b66\u793a\u5bf9\u8bdd\u6846\u3002"),(0,a.kt)("p",null,"Use the Touch button on the component to get the tap events on the buttons."),(0,a.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684 Touch \u6309\u94ae\u6765\u83b7\u53d6\u6309\u94ae\u4e0a\u7684\u70b9\u51fb\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(68683).Z,width:"1542",height:"300"})),(0,a.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,a.kt)("p",null,"A pulse to animate and display the layer."),(0,a.kt)("p",null,"\u7528\u4e8e\u52a8\u753b\u548c\u663e\u793a\u56fe\u5c42\u7684\u8109\u51b2\u3002"),(0,a.kt)("h3",{id:"title-\u6807\u9898"},"Title \u6807\u9898"),(0,a.kt)("p",null,"The title text of the alert view."),(0,a.kt)("p",null,"\u8b66\u793a\u6846\u7684\u6807\u9898\u6587\u672c\u3002"),(0,a.kt)("h3",{id:"message-\u4fe1\u606f"},"Message \u4fe1\u606f"),(0,a.kt)("p",null,"The message text of the alert view."),(0,a.kt)("p",null,"\u8b66\u793a\u6846\u7684\u4fe1\u606f\u6587\u672c\u3002"),(0,a.kt)("h3",{id:"button-1-\u6309\u94ae-1"},"Button 1 \u6309\u94ae 1"),(0,a.kt)("p",null,"The text string for the first button."),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h3",{id:"button-2-\u6309\u94ae-2"},"Button 2 \u6309\u94ae 2"),(0,a.kt)("p",null,"The text string for the second button."),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h3",{id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb"},"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb"),(0,a.kt)("p",null,"A pulse that represents when Button 1 is tapped."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 1 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,a.kt)("h3",{id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb"},"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb"),(0,a.kt)("p",null,"A pulse that represents when Button 2 is tapped."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 2 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}c.isMDXComponent=!0},68683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-view-13d1a84e9d7d013f87e629ecbd8c293d.png"}}]);