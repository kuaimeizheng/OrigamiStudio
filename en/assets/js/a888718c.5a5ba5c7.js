"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[70091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(n),p=l,g=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=n(87462),l=(n(67294),n(3905));const o={sidebar_position:5},r="Segmented Control \u5206\u6bb5\u63a7\u5236\u5668",a={unversionedId:"documentation/iOS/Segmented Control",id:"documentation/iOS/Segmented Control",title:"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668",description:"An iOS segmented control with customizable segments.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/iOS/Segmented Control.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Segmented Control",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Segmented Control",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Segmented Control.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Screen \u5c4f\u5e55",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Screen"},next:{title:"Slider \u6ed1\u5757",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Slider"}},d={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position Y Y\u4f4d\u7f6e",id:"position-y-y\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Color \u989c\u8272",id:"color-\u989c\u8272",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Number of Segments \u5206\u6bb5\u6570\u91cf",id:"number-of-segments-\u5206\u6bb5\u6570\u91cf",level:3},{value:"Switch to Segment \u5207\u6362\u5230\u5206\u6bb5",id:"switch-to-segment-\u5207\u6362\u5230\u5206\u6bb5",level:3},{value:"Switch Segment \u5f00\u5173\u5206\u6bb5",id:"switch-segment-\u5f00\u5173\u5206\u6bb5",level:3},{value:"Segment 1 - Title \u5206\u6bb5 1 - \u6807\u9898",id:"segment-1---title-\u5206\u6bb5-1---\u6807\u9898",level:3},{value:"Segment 2 - Title \u5206\u6bb5 2 - \u6807\u9898",id:"segment-2---title-\u5206\u6bb5-2---\u6807\u9898",level:3},{value:"Segment 3 - Title \u5206\u6bb5 3 - \u6807\u9898",id:"segment-3---title-\u5206\u6bb5-3---\u6807\u9898",level:3},{value:"Segment 4 - Title \u5206\u6bb5 4 - \u6807\u9898",id:"segment-4---title-\u5206\u6bb5-4---\u6807\u9898",level:3},{value:"Segment 5 - Title \u5206\u6bb5 5 - \u6807\u9898",id:"segment-5---title-\u5206\u6bb5-5---\u6807\u9898",level:3},{value:"Selected Segment Index \u9009\u5b9a\u5206\u6bb5\u7684\u7d22\u5f15",id:"selected-segment-index-\u9009\u5b9a\u5206\u6bb5\u7684\u7d22\u5f15",level:3},{value:"Segment 1 Selected \u5206\u6bb5 1 \u9009\u4e2d",id:"segment-1-selected-\u5206\u6bb5-1-\u9009\u4e2d",level:3},{value:"Segment 2 Selected \u5206\u6bb5 2 \u9009\u4e2d",id:"segment-2-selected-\u5206\u6bb5-2-\u9009\u4e2d",level:3},{value:"Segment 3 Selected \u5206\u6bb5 3 \u9009\u4e2d",id:"segment-3-selected-\u5206\u6bb5-3-\u9009\u4e2d",level:3},{value:"Segment 4 Selected \u5206\u6bb5 4 \u9009\u4e2d",id:"segment-4-selected-\u5206\u6bb5-4-\u9009\u4e2d",level:3},{value:"Segment 5 Selected \u5206\u6bb5 5 \u9009\u4e2d",id:"segment-5-selected-\u5206\u6bb5-5-\u9009\u4e2d",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"segmented-control-\u5206\u6bb5\u63a7\u5236\u5668"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668"),(0,l.kt)("p",null,"An iOS segmented control with customizable segments."),(0,l.kt)("p",null,"\u4f7f\u7528\u53ef\u5b9a\u5236\u6bb5\u7684IOS\u5206\u6bb5\u63a7\u5236\u3002"),(0,l.kt)("p",null,"Use the Touch button on the component to get information about the selected segment."),(0,l.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u6709\u5173\u6240\u9009\u6bb5\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:n(82555).Z,width:"1548",height:"670"})),(0,l.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,l.kt)("p",null,"A boolean that is true when the segmented control is displayed."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u5206\u6bb5\u63a7\u4ef6\u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"position-y-y\u4f4d\u7f6e"},"Position Y Y\u4f4d\u7f6e"),(0,l.kt)("p",null,"The vertical position of the segmented control."),(0,l.kt)("p",null,"\u5206\u6bb5\u63a7\u4ef6\u7684\u5782\u76f4\u4f4d\u7f6e\u3002"),(0,l.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,l.kt)("p",null,"The anchor point to position the segmented control is relative to. See ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,l.kt)("p",null,"\u5b9a\u4f4d\u5206\u6bb5\u63a7\u4ef6\u7684\u6240\u76f8\u5bf9\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,l.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,l.kt)("p",null,"The opacity of the segmented control."),(0,l.kt)("p",null,"\u5206\u6bb5\u63a7\u5236\u5668\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,l.kt)("h3",{id:"color-\u989c\u8272"},"Color \u989c\u8272"),(0,l.kt)("p",null,"The background color of the segmented control."),(0,l.kt)("p",null,"\u5206\u6bb5\u63a7\u5236\u5668\u7684\u80cc\u666f\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,l.kt)("p",null,"The primary color of the segmented control and selected segment."),(0,l.kt)("p",null,"\u5206\u6bb5\u63a7\u4ef6\u548c\u9009\u5b9a\u5206\u6bb5\u7684\u4e3b\u8272\u3002"),(0,l.kt)("h3",{id:"number-of-segments-\u5206\u6bb5\u6570\u91cf"},"Number of Segments \u5206\u6bb5\u6570\u91cf"),(0,l.kt)("p",null,"A number representing the number of segments in the control."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u5206\u6bb5\u63a7\u4ef6\u4e2d\u7684\u6bb5\u6570\u3002"),(0,l.kt)("h3",{id:"switch-to-segment-\u5207\u6362\u5230\u5206\u6bb5"},"Switch to Segment \u5207\u6362\u5230\u5206\u6bb5"),(0,l.kt)("p",null,"The index of the segment to switch to, starting at 0."),(0,l.kt)("p",null,"\u8981\u5207\u6362\u5230\u7684\u5206\u6bb5\u7684\u7d22\u5f15\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,l.kt)("h3",{id:"switch-segment-\u5f00\u5173\u5206\u6bb5"},"Switch Segment \u5f00\u5173\u5206\u6bb5"),(0,l.kt)("p",null,"A pulse that changes the currently selected segment."),(0,l.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6539\u53d8\u5f53\u524d\u9009\u5b9a\u7684\u5206\u6bb5\u3002"),(0,l.kt)("h3",{id:"segment-1---title-\u5206\u6bb5-1---\u6807\u9898"},"Segment 1 - Title \u5206\u6bb5 1 - \u6807\u9898"),(0,l.kt)("p",null,"A text string that is displayed as the title of the first segment."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a \u5206\u6bb5 1 - \u6807\u9898\u3002"),(0,l.kt)("h3",{id:"segment-2---title-\u5206\u6bb5-2---\u6807\u9898"},"Segment 2 - Title \u5206\u6bb5 2 - \u6807\u9898"),(0,l.kt)("p",null,"A text string that is displayed as the title of the second segment."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a \u5206\u6bb5 2 - \u6807\u9898\u3002"),(0,l.kt)("h3",{id:"segment-3---title-\u5206\u6bb5-3---\u6807\u9898"},"Segment 3 - Title \u5206\u6bb5 3 - \u6807\u9898"),(0,l.kt)("p",null,"A text string that is displayed as the title of the third segment."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a \u5206\u6bb5 3 - \u6807\u9898\u3002"),(0,l.kt)("h3",{id:"segment-4---title-\u5206\u6bb5-4---\u6807\u9898"},"Segment 4 - Title \u5206\u6bb5 4 - \u6807\u9898"),(0,l.kt)("p",null,"A text string that is displayed as the title of the fourth segment."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a \u5206\u6bb5 4 - \u6807\u9898\u3002"),(0,l.kt)("h3",{id:"segment-5---title-\u5206\u6bb5-5---\u6807\u9898"},"Segment 5 - Title \u5206\u6bb5 5 - \u6807\u9898"),(0,l.kt)("p",null,"A text string that is displayed as the title of the fifth segment."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a \u5206\u6bb5 5 - \u6807\u9898\u3002"),(0,l.kt)("h3",{id:"selected-segment-index-\u9009\u5b9a\u5206\u6bb5\u7684\u7d22\u5f15"},"Selected Segment Index \u9009\u5b9a\u5206\u6bb5\u7684\u7d22\u5f15"),(0,l.kt)("p",null,"An index that represents the currently selected segment, starting at 0."),(0,l.kt)("p",null,"\u8868\u793a\u5f53\u524d\u9009\u5b9a\u5206\u6bb5\u7684\u7d22\u5f15\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,l.kt)("h3",{id:"segment-1-selected-\u5206\u6bb5-1-\u9009\u4e2d"},"Segment 1 Selected \u5206\u6bb5 1 \u9009\u4e2d"),(0,l.kt)("p",null,"A boolean that is true when the first segment is selected."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9009\u62e9 \u5206\u6bb5 1 \u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"segment-2-selected-\u5206\u6bb5-2-\u9009\u4e2d"},"Segment 2 Selected \u5206\u6bb5 2 \u9009\u4e2d"),(0,l.kt)("p",null,"A boolean that is true when the second segment is selected."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9009\u62e9 \u5206\u6bb5 2 \u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"segment-3-selected-\u5206\u6bb5-3-\u9009\u4e2d"},"Segment 3 Selected \u5206\u6bb5 3 \u9009\u4e2d"),(0,l.kt)("p",null,"A boolean that is true when the third segment is selected."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9009\u62e9 \u5206\u6bb5 3 \u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"segment-4-selected-\u5206\u6bb5-4-\u9009\u4e2d"},"Segment 4 Selected \u5206\u6bb5 4 \u9009\u4e2d"),(0,l.kt)("p",null,"A boolean that is true when the fouth segment is selected."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9009\u62e9 \u5206\u6bb5 4 \u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"segment-5-selected-\u5206\u6bb5-5-\u9009\u4e2d"},"Segment 5 Selected \u5206\u6bb5 5 \u9009\u4e2d"),(0,l.kt)("p",null,"A boolean that is true when the fifth segment is selected."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9009\u62e9 \u5206\u6bb5 5 \u65f6\u4e3a\u771f\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}u.isMDXComponent=!0},82555:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/segmented-control-d72e184010baabd4c466b4df55987166.png"}}]);