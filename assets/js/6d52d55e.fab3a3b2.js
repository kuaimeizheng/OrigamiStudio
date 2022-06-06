"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9499],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},c="Page Control \u5206\u9875\u63a7\u5236\u5668",p={unversionedId:"iOS/Page Control",id:"iOS/Page Control",title:"Page Control \u5206\u9875\u63a7\u5236\u5668",description:"An iOS page control with a customizable number of dots and colors.",source:"@site/docs/iOS/Page Control.md",sourceDirName:"iOS",slug:"/iOS/Page Control",permalink:"/OrigamiStudio/docs/iOS/Page Control",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/iOS/Page Control.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Notification \u901a\u77e5",permalink:"/OrigamiStudio/docs/iOS/Notification"},next:{title:"Screen \u5c4f\u5e55",permalink:"/OrigamiStudio/docs/iOS/Screen"}},u={},d=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Current Page \u5f53\u524d\u9875\u9762",id:"current-page-\u5f53\u524d\u9875\u9762",level:3},{value:"Count \u6570\u91cf",id:"count-\u6570\u91cf",level:3},{value:"Selected Index \u9009\u4e2d\u7d22\u5f15",id:"selected-index-\u9009\u4e2d\u7d22\u5f15",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"page-control-\u5206\u9875\u63a7\u5236\u5668"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),(0,o.kt)("p",null,"An iOS page control with a customizable number of dots and colors."),(0,o.kt)("p",null,"\u5177\u53ef\u81ea\u5b9a\u4e49\u6570\u91cf\u7684\u70b9\u548c\u989c\u8272\u7684IOS\u9875\u9762\u63a7\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b25bc4f-6589-4ade-ab7a-e653d53e8333/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190721Z&X-Amz-Expires=86400&X-Amz-Signature=6821eef695b147718c3fdeda4ef159e19bf608670deced9bd85bcf0bb1dd44e5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when the page control is displayed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u9875\u9762\u63a7\u4ef6\u65f6\u4e3a true \u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"The position to display the page control."),(0,o.kt)("p",null,"\u663e\u793a\u9875\u9762\u63a7\u4ef6\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,o.kt)("p",null,"The anchor point to position the page control relative to. See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Concepts/Coordinates"},"Coordinates")," for more information."),(0,o.kt)("p",null,"\u7528\u4e8e\u5b9a\u4f4d\u9875\u9762\u63a7\u4ef6\u76f8\u5bf9\u4f4d\u7f6e\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,o.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,o.kt)("p",null,"The opacity of the page control."),(0,o.kt)("p",null,"\u9875\u9762\u63a7\u4ef6\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,o.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,o.kt)("p",null,"The color of the unselected page control dots."),(0,o.kt)("p",null,"\u672a\u9009\u4e2d\u7684\u9875\u9762\u63a7\u5236\u70b9\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"current-page-\u5f53\u524d\u9875\u9762"},"Current Page \u5f53\u524d\u9875\u9762"),(0,o.kt)("p",null,"The color of the selected page control dot."),(0,o.kt)("p",null,"\u6240\u9009\u9875\u9762\u63a7\u5236\u70b9\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"count-\u6570\u91cf"},"Count \u6570\u91cf"),(0,o.kt)("p",null,"The number of page control dots."),(0,o.kt)("p",null,"\u9875\u9762\u63a7\u5236\u70b9\u7684\u6570\u91cf\u3002"),(0,o.kt)("h3",{id:"selected-index-\u9009\u4e2d\u7d22\u5f15"},"Selected Index \u9009\u4e2d\u7d22\u5f15"),(0,o.kt)("p",null,"The currently selected page control dot, starting at 0."),(0,o.kt)("p",null,"\u5f53\u524d\u9009\u4e2d\u7684\u9875\u9762\u63a7\u5236\u70b9\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Notification"},"Notification \u901a\u77e5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Slider"},"Slider \u6ed1\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Switch"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}m.isMDXComponent=!0}}]);