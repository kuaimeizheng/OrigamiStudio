"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[28767],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=o.createContext({}),d=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=d(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=d(n),m=i,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||r;return n?o.createElement(f,a(a({ref:e},u),{},{components:n})):o.createElement(f,a({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69307:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:5},a="Page Control \u5206\u9875\u63a7\u5236\u5668",l={unversionedId:"documentation/iOS/Page Control",id:"documentation/iOS/Page Control",title:"Page Control \u5206\u9875\u63a7\u5236\u5668",description:"An iOS page control with a customizable number of dots and colors.",source:"@site/docs/documentation/iOS/Page Control.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Page Control",permalink:"/OrigamiStudio/docs/documentation/iOS/Page Control",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Page Control.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Notification \u901a\u77e5",permalink:"/OrigamiStudio/docs/documentation/iOS/Notification"},next:{title:"Screen \u5c4f\u5e55",permalink:"/OrigamiStudio/docs/documentation/iOS/Screen"}},c={},d=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Current Page \u5f53\u524d\u9875\u9762",id:"current-page-\u5f53\u524d\u9875\u9762",level:3},{value:"Count \u6570\u91cf",id:"count-\u6570\u91cf",level:3},{value:"Selected Index \u9009\u4e2d\u7d22\u5f15",id:"selected-index-\u9009\u4e2d\u7d22\u5f15",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],u={toc:d};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"page-control-\u5206\u9875\u63a7\u5236\u5668"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),(0,i.kt)("p",null,"An iOS page control with a customizable number of dots and colors."),(0,i.kt)("p",null,"\u5177\u53ef\u81ea\u5b9a\u4e49\u6570\u91cf\u7684\u70b9\u548c\u989c\u8272\u7684IOS\u9875\u9762\u63a7\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(97).Z,width:"1538",height:"418"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the page control is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u9875\u9762\u63a7\u4ef6\u65f6\u4e3a true \u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position to display the page control."),(0,i.kt)("p",null,"\u663e\u793a\u9875\u9762\u63a7\u4ef6\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,i.kt)("p",null,"The anchor point to position the page control relative to. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,i.kt)("p",null,"\u7528\u4e8e\u5b9a\u4f4d\u9875\u9762\u63a7\u4ef6\u76f8\u5bf9\u4f4d\u7f6e\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the page control."),(0,i.kt)("p",null,"\u9875\u9762\u63a7\u4ef6\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,i.kt)("p",null,"The color of the unselected page control dots."),(0,i.kt)("p",null,"\u672a\u9009\u4e2d\u7684\u9875\u9762\u63a7\u5236\u70b9\u7684\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"current-page-\u5f53\u524d\u9875\u9762"},"Current Page \u5f53\u524d\u9875\u9762"),(0,i.kt)("p",null,"The color of the selected page control dot."),(0,i.kt)("p",null,"\u6240\u9009\u9875\u9762\u63a7\u5236\u70b9\u7684\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"count-\u6570\u91cf"},"Count \u6570\u91cf"),(0,i.kt)("p",null,"The number of page control dots."),(0,i.kt)("p",null,"\u9875\u9762\u63a7\u5236\u70b9\u7684\u6570\u91cf\u3002"),(0,i.kt)("h3",{id:"selected-index-\u9009\u4e2d\u7d22\u5f15"},"Selected Index \u9009\u4e2d\u7d22\u5f15"),(0,i.kt)("p",null,"The currently selected page control dot, starting at 0."),(0,i.kt)("p",null,"\u5f53\u524d\u9009\u4e2d\u7684\u9875\u9762\u63a7\u5236\u70b9\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}p.isMDXComponent=!0},97:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/page-control-67fffe10e5228264d458945bcb0fd4c8.png"}}]);