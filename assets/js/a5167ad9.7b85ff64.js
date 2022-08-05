"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1955],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8944:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:2},u="Alert View \u8b66\u793a\u6846",p={unversionedId:"documentation/Material/Alert View",id:"documentation/Material/Alert View",title:"Alert View \u8b66\u793a\u6846",description:"A Material alert view dialog with customizable actions.",source:"@site/docs/documentation/Material/Alert View.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Alert View",permalink:"/OrigamiStudio/docs/documentation/Material/Alert View",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Alert View.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659700546,formattedLastUpdatedAt:"2022\u5e748\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Material \u8c37\u6b4c\u79fb\u52a8\u7aef",permalink:"/OrigamiStudio/docs/category/material-\u8c37\u6b4c\u79fb\u52a8\u7aef"},next:{title:"Checkbox \u590d\u9009\u6846",permalink:"/OrigamiStudio/docs/documentation/Material/Checkbox"}},c={},d=[{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Message \u4fe1\u606f",id:"message-\u4fe1\u606f",level:3},{value:"Button 1 \u6309\u94ae 1",id:"button-1-\u6309\u94ae-1",level:3},{value:"Button 2 \u6309\u94ae 2",id:"button-2-\u6309\u94ae-2",level:3},{value:"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb",id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb",level:3},{value:"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb",id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:d};function m(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alert-view-\u8b66\u793a\u6846"},"Alert View \u8b66\u793a\u6846"),(0,i.kt)("p",null,"A Material alert view dialog with customizable actions."),(0,i.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684Material\u8b66\u793a\u5bf9\u8bdd\u6846\u3002"),(0,i.kt)("p",null,"Use the Touch button on the component to get the tap events on the buttons."),(0,i.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684 Touch \u6309\u94ae\u6765\u83b7\u53d6\u6309\u94ae\u4e0a\u7684\u70b9\u51fb\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(68683).Z,width:"1542",height:"300"})),(0,i.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,i.kt)("p",null,"A pulse to animate and display the layer."),(0,i.kt)("p",null,"\u7528\u4e8e\u52a8\u753b\u548c\u663e\u793a\u56fe\u5c42\u7684\u8109\u51b2\u3002"),(0,i.kt)("h3",{id:"title-\u6807\u9898"},"Title \u6807\u9898"),(0,i.kt)("p",null,"The title text of the alert view."),(0,i.kt)("p",null,"\u8b66\u793a\u6846\u7684\u6807\u9898\u6587\u672c\u3002"),(0,i.kt)("h3",{id:"message-\u4fe1\u606f"},"Message \u4fe1\u606f"),(0,i.kt)("p",null,"The message text of the alert view."),(0,i.kt)("p",null,"\u8b66\u793a\u6846\u7684\u4fe1\u606f\u6587\u672c\u3002"),(0,i.kt)("h3",{id:"button-1-\u6309\u94ae-1"},"Button 1 \u6309\u94ae 1"),(0,i.kt)("p",null,"The text string for the first button."),(0,i.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"button-2-\u6309\u94ae-2"},"Button 2 \u6309\u94ae 2"),(0,i.kt)("p",null,"The text string for the second button."),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb"},"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb"),(0,i.kt)("p",null,"A pulse that represents when Button 1 is tapped."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 1 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,i.kt)("h3",{id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb"},"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb"),(0,i.kt)("p",null,"A pulse that represents when Button 2 is tapped."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 2 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}m.isMDXComponent=!0},68683:function(t,e,n){e.Z=n.p+"assets/images/alert-view-13d1a84e9d7d013f87e629ecbd8c293d.png"}}]);