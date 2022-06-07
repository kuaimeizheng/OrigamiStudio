"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[558],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19130:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={sidebar_position:2},u="Alert View \u8b66\u793a\u6846",p={unversionedId:"Material/Alert View",id:"Material/Alert View",title:"Alert View \u8b66\u793a\u6846",description:"A Material alert view dialog with customizable actions.",source:"@site/docs/Material/Alert View.md",sourceDirName:"Material",slug:"/Material/Alert View",permalink:"/OrigamiStudio/docs/Material/Alert View",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Material/Alert View.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654572859,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Material \u8c37\u6b4c\u79fb\u52a8\u7aef",permalink:"/OrigamiStudio/docs/category/material-\u8c37\u6b4c\u79fb\u52a8\u7aef"},next:{title:"Checkbox \u590d\u9009\u6846",permalink:"/OrigamiStudio/docs/Material/Checkbox"}},s={},c=[{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Message \u4fe1\u606f",id:"message-\u4fe1\u606f",level:3},{value:"Button 1 \u6309\u94ae 1",id:"button-1-\u6309\u94ae-1",level:3},{value:"Button 2 \u6309\u94ae 2",id:"button-2-\u6309\u94ae-2",level:3},{value:"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb",id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb",level:3},{value:"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb",id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:c};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alert-view-\u8b66\u793a\u6846"},"Alert View \u8b66\u793a\u6846"),(0,i.kt)("p",null,"A Material alert view dialog with customizable actions."),(0,i.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684Material\u8b66\u793a\u5bf9\u8bdd\u6846\u3002"),(0,i.kt)("p",null,"Use the Touch button on the component to get the tap events on the buttons."),(0,i.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684 Touch \u6309\u94ae\u6765\u83b7\u53d6\u6309\u94ae\u4e0a\u7684\u70b9\u51fb\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(68683).Z,width:"1542",height:"300"})),(0,i.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,i.kt)("p",null,"A pulse to animate and display the layer."),(0,i.kt)("p",null,"\u7528\u4e8e\u52a8\u753b\u548c\u663e\u793a\u56fe\u5c42\u7684\u8109\u51b2\u3002"),(0,i.kt)("h3",{id:"title-\u6807\u9898"},"Title \u6807\u9898"),(0,i.kt)("p",null,"The title text of the alert view."),(0,i.kt)("p",null,"\u8b66\u793a\u6846\u7684\u6807\u9898\u6587\u672c\u3002"),(0,i.kt)("h3",{id:"message-\u4fe1\u606f"},"Message \u4fe1\u606f"),(0,i.kt)("p",null,"The message text of the alert view."),(0,i.kt)("p",null,"\u8b66\u793a\u6846\u7684\u4fe1\u606f\u6587\u672c\u3002"),(0,i.kt)("h3",{id:"button-1-\u6309\u94ae-1"},"Button 1 \u6309\u94ae 1"),(0,i.kt)("p",null,"The text string for the first button."),(0,i.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"button-2-\u6309\u94ae-2"},"Button 2 \u6309\u94ae 2"),(0,i.kt)("p",null,"The text string for the second button."),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"button-1-tapped-\u6309\u94ae-1-\u70b9\u51fb"},"Button 1 Tapped \u6309\u94ae 1 \u70b9\u51fb"),(0,i.kt)("p",null,"A pulse that represents when Button 1 is tapped."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 1 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,i.kt)("h3",{id:"button-2-tapped-\u6309\u94ae-2-\u70b9\u51fb"},"Button 2 Tapped \u6309\u94ae 2 \u70b9\u51fb"),(0,i.kt)("p",null,"A pulse that represents when Button 2 is tapped."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6309\u94ae 2 \u4f55\u65f6\u88ab\u70b9\u51fb\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}m.isMDXComponent=!0},68683:function(e,t,r){t.Z=r.p+"assets/images/alert-view-13d1a84e9d7d013f87e629ecbd8c293d.png"}}]);