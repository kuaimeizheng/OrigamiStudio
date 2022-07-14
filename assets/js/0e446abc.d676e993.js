"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5898],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:2},c="Page Control \u5206\u9875\u63a7\u5236\u5668",u={unversionedId:"documentation/Material/Page Control",id:"documentation/Material/Page Control",title:"Page Control \u5206\u9875\u63a7\u5236\u5668",description:"A Material page control with a customizable number of dots and colors.",source:"@site/docs/documentation/Material/Page Control.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Page Control",permalink:"/OrigamiStudio/docs/documentation/Material/Page Control",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Page Control.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657795927,formattedLastUpdatedAt:"2022\u5e747\u670814\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Fake Keyboard \u6a21\u62df\u952e\u76d8",permalink:"/OrigamiStudio/docs/documentation/Material/Fake Keyboard"},next:{title:"Screen \u5c4f\u5e55",permalink:"/OrigamiStudio/docs/documentation/Material/Screen"}},d={},p=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Count \u6570\u91cf",id:"count-\u6570\u91cf",level:3},{value:"Selected Index \u9009\u4e2d\u7d22\u5f15",id:"selected-index-\u9009\u4e2d\u7d22\u5f15",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Current Page \u5f53\u524d\u9875\u9762",id:"current-page-\u5f53\u524d\u9875\u9762",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"page-control-\u5206\u9875\u63a7\u5236\u5668"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),(0,a.kt)("p",null,"A Material page control with a customizable number of dots and colors."),(0,a.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u6570\u91cf\u7684\u70b9\u548c\u989c\u8272\u7684 Material \u9875\u9762\u63a7\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(65228).Z,width:"1542",height:"416"})),(0,a.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A boolean that is true when the page control is displayed."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u9875\u9762\u63a7\u4ef6\u65f6\u4e3a true\u3002"),(0,a.kt)("h3",{id:"count-\u6570\u91cf"},"Count \u6570\u91cf"),(0,a.kt)("p",null,"The number of page control dots."),(0,a.kt)("p",null,"\u9875\u9762\u63a7\u5236\u70b9\u7684\u6570\u91cf\u3002"),(0,a.kt)("h3",{id:"selected-index-\u9009\u4e2d\u7d22\u5f15"},"Selected Index \u9009\u4e2d\u7d22\u5f15"),(0,a.kt)("p",null,"The currently selected page control dot, starting at 0."),(0,a.kt)("p",null,"\u5f53\u524d\u9009\u4e2d\u7684\u9875\u9762\u63a7\u5236\u70b9\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,a.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,a.kt)("p",null,"The position to display the page control."),(0,a.kt)("p",null,"\u663e\u793a\u9875\u9762\u63a7\u4ef6\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,a.kt)("p",null,"The anchor point to position the page control relative to. See ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information. \u76f8\u5bf9\u4e8e\u5b9a\u4f4d\u9875\u9762\u63a7\u4ef6\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,a.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,a.kt)("p",null,"The opacity of the page control."),(0,a.kt)("p",null,"\u9875\u9762\u63a7\u4ef6\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,a.kt)("h3",{id:"current-page-\u5f53\u524d\u9875\u9762"},"Current Page \u5f53\u524d\u9875\u9762"),(0,a.kt)("p",null,"The color of the selected page control dot."),(0,a.kt)("p",null,"\u6240\u9009\u9875\u9762\u63a7\u5236\u70b9\u7684\u989c\u8272\u3002"),(0,a.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,a.kt)("p",null,"The color of the unselected page control dots."),(0,a.kt)("p",null,"\u672a\u9009\u4e2d\u7684\u9875\u9762\u63a7\u5236\u70b9\u7684\u989c\u8272\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}m.isMDXComponent=!0},65228:function(e,t,n){t.Z=n.p+"assets/images/page-control-ea2851f52386d5c2aba48203a19dc03f.png"}}]);