"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[32830],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>p});var l=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,l,i=function(t,e){if(null==t)return{};var a,l,i={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var r=l.createContext({}),c=function(t){var e=l.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=c(t.components);return l.createElement(r.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},b=l.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,r=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),b=c(a),p=i,h=b["".concat(r,".").concat(p)]||b[p]||s[p]||n;return a?l.createElement(h,o(o({ref:e},u),{},{components:a})):l.createElement(h,o({ref:e},u))}));function p(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=b;var d={};for(var r in e)hasOwnProperty.call(e,r)&&(d[r]=e[r]);d.originalType=t,d.mdxType="string"==typeof t?t:i,o[1]=d;for(var c=2;c<n;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},964:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var l=a(87462),i=(a(67294),a(3905));const n={sidebar_position:5},o="Tab Bar \u6807\u7b7e\u680f",d={unversionedId:"documentation/iOS/Tab Bar",id:"documentation/iOS/Tab Bar",title:"Tab Bar \u6807\u7b7e\u680f",description:"An iOS tab bar with customizable tabs.",source:"@site/docs/documentation/iOS/Tab Bar.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Tab Bar",permalink:"/OrigamiStudio/docs/documentation/iOS/Tab Bar",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Tab Bar.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/docs/documentation/iOS/Switch"},next:{title:"Text Field \u6587\u672c\u8f93\u5165\u6846",permalink:"/OrigamiStudio/docs/documentation/iOS/Text Field"}},r={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position Y Y\u4f4d\u7f6e",id:"position-y-y\u4f4d\u7f6e",level:3},{value:"Background \u80cc\u666f",id:"background-\u80cc\u666f",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Title Color \u6807\u9898\u989c\u8272",id:"title-color-\u6807\u9898\u989c\u8272",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Number of Tabs \u6807\u7b7e\u6570\u91cf",id:"number-of-tabs-\u6807\u7b7e\u6570\u91cf",level:3},{value:"Switch to Tab \u5207\u6362\u5230\u6807\u7b7e",id:"switch-to-tab-\u5207\u6362\u5230\u6807\u7b7e",level:3},{value:"Switch Tab \u5207\u6362\u6807\u7b7e",id:"switch-tab-\u5207\u6362\u6807\u7b7e",level:3},{value:"Tab 1 - Icon \u6807\u7b7e 1 - \u56fe\u6807",id:"tab-1---icon-\u6807\u7b7e-1---\u56fe\u6807",level:3},{value:"Tab 1 - Icon Selected \u6807\u7b7e 1 - \u56fe\u6807\u9009\u4e2d",id:"tab-1---icon-selected-\u6807\u7b7e-1---\u56fe\u6807\u9009\u4e2d",level:3},{value:"Tab 1 - Title \u6807\u7b7e 1 - \u6807\u9898",id:"tab-1---title-\u6807\u7b7e-1---\u6807\u9898",level:3},{value:"Tab 2 - Icon \u6807\u7b7e 2 - \u56fe\u6807",id:"tab-2---icon-\u6807\u7b7e-2---\u56fe\u6807",level:3},{value:"Tab 2 - Icon Selected \u6807\u7b7e 2 - \u56fe\u6807\u9009\u4e2d",id:"tab-2---icon-selected-\u6807\u7b7e-2---\u56fe\u6807\u9009\u4e2d",level:3},{value:"Tab 2 - Title \u6807\u7b7e 2 - \u6807\u9898",id:"tab-2---title-\u6807\u7b7e-2---\u6807\u9898",level:3},{value:"Tab 3 - Icon \u6807\u7b7e 3 - \u56fe\u6807",id:"tab-3---icon-\u6807\u7b7e-3---\u56fe\u6807",level:3},{value:"Tab 3 - Icon Selected \u6807\u7b7e 3 - \u56fe\u6807\u9009\u4e2d",id:"tab-3---icon-selected-\u6807\u7b7e-3---\u56fe\u6807\u9009\u4e2d",level:3},{value:"Tab 3 - Title \u6807\u7b7e 3 - \u6807\u9898",id:"tab-3---title-\u6807\u7b7e-3---\u6807\u9898",level:3},{value:"Tab 4 - Icon \u6807\u7b7e 4 - \u56fe\u6807",id:"tab-4---icon-\u6807\u7b7e-4---\u56fe\u6807",level:3},{value:"Tab 4 - Icon Selected \u6807\u7b7e 4 - \u56fe\u6807\u9009\u4e2d",id:"tab-4---icon-selected-\u6807\u7b7e-4---\u56fe\u6807\u9009\u4e2d",level:3},{value:"Tab 4 - Title \u6807\u7b7e 4 - \u6807\u9898",id:"tab-4---title-\u6807\u7b7e-4---\u6807\u9898",level:3},{value:"Tab 5 - Icon \u6807\u7b7e 5 - \u56fe\u6807",id:"tab-5---icon-\u6807\u7b7e-5---\u56fe\u6807",level:3},{value:"Tab 5 - Icon Selected \u6807\u7b7e 5 - \u56fe\u6807\u9009\u4e2d",id:"tab-5---icon-selected-\u6807\u7b7e-5---\u56fe\u6807\u9009\u4e2d",level:3},{value:"Tab 5 - Title \u6807\u7b7e 5 - \u6807\u9898",id:"tab-5---title-\u6807\u7b7e-5---\u6807\u9898",level:3},{value:"Tab 6 - Icon \u6807\u7b7e 6 - \u56fe\u6807",id:"tab-6---icon-\u6807\u7b7e-6---\u56fe\u6807",level:3},{value:"Tab 6 - Icon Selected \u6807\u7b7e 6 - \u56fe\u6807\u9009\u4e2d",id:"tab-6---icon-selected-\u6807\u7b7e-6---\u56fe\u6807\u9009\u4e2d",level:3},{value:"Tab 6 - Title \u6807\u7b7e 6 - \u6807\u9898",id:"tab-6---title-\u6807\u7b7e-6---\u6807\u9898",level:3},{value:"Selected Tab Index \u9009\u4e2d\u6807\u7b7e\u7d22\u5f15",id:"selected-tab-index-\u9009\u4e2d\u6807\u7b7e\u7d22\u5f15",level:3},{value:"Tab1 Selected \u6807\u7b7e 1 \u9009\u4e2d",id:"tab1-selected-\u6807\u7b7e-1-\u9009\u4e2d",level:3},{value:"Tab2 Selected \u6807\u7b7e 2 \u9009\u4e2d",id:"tab2-selected-\u6807\u7b7e-2-\u9009\u4e2d",level:3},{value:"Tab3 Selected \u6807\u7b7e 3 \u9009\u4e2d",id:"tab3-selected-\u6807\u7b7e-3-\u9009\u4e2d",level:3},{value:"Tab4 Selected \u6807\u7b7e 4 \u9009\u4e2d",id:"tab4-selected-\u6807\u7b7e-4-\u9009\u4e2d",level:3},{value:"Tab5 Selected \u6807\u7b7e 5 \u9009\u4e2d",id:"tab5-selected-\u6807\u7b7e-5-\u9009\u4e2d",level:3},{value:"Tab6 Selected \u6807\u7b7e 6 \u9009\u4e2d",id:"tab6-selected-\u6807\u7b7e-6-\u9009\u4e2d",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],u={toc:c};function s(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tab-bar-\u6807\u7b7e\u680f"},"Tab Bar \u6807\u7b7e\u680f"),(0,i.kt)("p",null,"An iOS tab bar with customizable tabs."),(0,i.kt)("p",null,"\u53ef\u81ea\u5b9a\u4e49\u6807\u7b7e\u7684iOS\u6807\u7b7e\u680f\u3002"),(0,i.kt)("p",null,"Use the Touch button on the component to get information about the selected tab."),(0,i.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u6709\u5173\u6240\u9009\u9009\u9879\u5361\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:a(63211).Z,width:"1536",height:"1152"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the tab bar is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u6807\u7b7e\u680f\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"position-y-y\u4f4d\u7f6e"},"Position Y Y\u4f4d\u7f6e"),(0,i.kt)("p",null,"The vertical position of the tab bar relative to the bottom of its parent group or screen."),(0,i.kt)("p",null,"\u6807\u7b7e\u680f\u76f8\u5bf9\u4e8e\u5176\u7236\u7ec4\u6216\u5c4f\u5e55\u5e95\u90e8\u7684\u5782\u76f4\u4f4d\u7f6e\u3002"),(0,i.kt)("h3",{id:"background-\u80cc\u666f"},"Background \u80cc\u666f"),(0,i.kt)("p",null,"The color of the tab bar."),(0,i.kt)("p",null,"\u6807\u7b7e\u680f\u7684\u80cc\u666f\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,i.kt)("p",null,"The color of the title of the selected tab."),(0,i.kt)("p",null,"\u6240\u9009\u4e2d\u6807\u7b7e\u7684\u6807\u9898\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"title-color-\u6807\u9898\u989c\u8272"},"Title Color \u6807\u9898\u989c\u8272"),(0,i.kt)("p",null,"The color of the title of the unselected tabs."),(0,i.kt)("p",null,"\u672a\u9009\u4e2d\u6807\u7b7e\u7684\u6807\u9898\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the tab bar."),(0,i.kt)("p",null,"\u6807\u7b7e\u680f\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"number-of-tabs-\u6807\u7b7e\u6570\u91cf"},"Number of Tabs \u6807\u7b7e\u6570\u91cf"),(0,i.kt)("p",null,"A number representing the number of items in the tab bar."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u9009\u9879\u5361\u680f\u4e2d\u7684\u9879\u76ee\u6570\u91cf\u3002"),(0,i.kt)("h3",{id:"switch-to-tab-\u5207\u6362\u5230\u6807\u7b7e"},"Switch to Tab \u5207\u6362\u5230\u6807\u7b7e"),(0,i.kt)("p",null,"The index of the tab to switch to, starting at 0."),(0,i.kt)("p",null,"\u8981\u5207\u6362\u5230\u7684\u9009\u9879\u5361\u7684\u7d22\u5f15\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,i.kt)("h3",{id:"switch-tab-\u5207\u6362\u6807\u7b7e"},"Switch Tab \u5207\u6362\u6807\u7b7e"),(0,i.kt)("p",null,"A pulse that changes the currently selected tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5207\u6362\u5f53\u524d\u9009\u5b9a\u7684\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-1---icon-\u6807\u7b7e-1---\u56fe\u6807"},"Tab 1 - Icon \u6807\u7b7e 1 - \u56fe\u6807"),(0,i.kt)("p",null,"An image that is displayed in the first tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u663e\u793a\u5728\u7b2c 1 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-1---icon-selected-\u6807\u7b7e-1---\u56fe\u6807\u9009\u4e2d"},"Tab 1 - Icon Selected \u6807\u7b7e 1 - \u56fe\u6807\u9009\u4e2d"),(0,i.kt)("p",null,"An image that is displayed in the first tab when selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u5f53\u9009\u4e2d\u65f6\u663e\u793a\u5728\u7b2c 1 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-1---title-\u6807\u7b7e-1---\u6807\u9898"},"Tab 1 - Title \u6807\u7b7e 1 - \u6807\u9898"),(0,i.kt)("p",null,"A text string that is displayed as the title of the first tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u7b2c 1 \u4e2a\u9009\u9879\u5361\u7684\u6807\u9898\u3002"),(0,i.kt)("h3",{id:"tab-2---icon-\u6807\u7b7e-2---\u56fe\u6807"},"Tab 2 - Icon \u6807\u7b7e 2 - \u56fe\u6807"),(0,i.kt)("p",null,"An image that is displayed in the second tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u663e\u793a\u5728\u7b2c 2 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-2---icon-selected-\u6807\u7b7e-2---\u56fe\u6807\u9009\u4e2d"},"Tab 2 - Icon Selected \u6807\u7b7e 2 - \u56fe\u6807\u9009\u4e2d"),(0,i.kt)("p",null,"An image that is displayed in the second tab when selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u5f53\u9009\u4e2d\u65f6\u663e\u793a\u5728\u7b2c 2 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-2---title-\u6807\u7b7e-2---\u6807\u9898"},"Tab 2 - Title \u6807\u7b7e 2 - \u6807\u9898"),(0,i.kt)("p",null,"A text string that is displayed as the title of the second tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u7b2c 2 \u4e2a\u9009\u9879\u5361\u7684\u6807\u9898\u3002"),(0,i.kt)("h3",{id:"tab-3---icon-\u6807\u7b7e-3---\u56fe\u6807"},"Tab 3 - Icon \u6807\u7b7e 3 - \u56fe\u6807"),(0,i.kt)("p",null,"An image that is displayed in the third tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u663e\u793a\u5728\u7b2c 2 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-3---icon-selected-\u6807\u7b7e-3---\u56fe\u6807\u9009\u4e2d"},"Tab 3 - Icon Selected \u6807\u7b7e 3 - \u56fe\u6807\u9009\u4e2d"),(0,i.kt)("p",null,"An image that is displayed in the third tab when selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u5f53\u9009\u4e2d\u65f6\u663e\u793a\u5728\u7b2c 3 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-3---title-\u6807\u7b7e-3---\u6807\u9898"},"Tab 3 - Title \u6807\u7b7e 3 - \u6807\u9898"),(0,i.kt)("p",null,"A text string that is displayed as the title of the third tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u7b2c 3 \u4e2a\u9009\u9879\u5361\u7684\u6807\u9898\u3002"),(0,i.kt)("h3",{id:"tab-4---icon-\u6807\u7b7e-4---\u56fe\u6807"},"Tab 4 - Icon \u6807\u7b7e 4 - \u56fe\u6807"),(0,i.kt)("p",null,"An image that is displayed in the fourth tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u663e\u793a\u5728\u7b2c 4 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-4---icon-selected-\u6807\u7b7e-4---\u56fe\u6807\u9009\u4e2d"},"Tab 4 - Icon Selected \u6807\u7b7e 4 - \u56fe\u6807\u9009\u4e2d"),(0,i.kt)("p",null,"An image that is displayed in the fourth tab when selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u5f53\u9009\u4e2d\u65f6\u663e\u793a\u5728\u7b2c 4 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-4---title-\u6807\u7b7e-4---\u6807\u9898"},"Tab 4 - Title \u6807\u7b7e 4 - \u6807\u9898"),(0,i.kt)("p",null,"A text string that is displayed as the title of the fourth tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u7b2c 4 \u4e2a\u9009\u9879\u5361\u7684\u6807\u9898\u3002"),(0,i.kt)("h3",{id:"tab-5---icon-\u6807\u7b7e-5---\u56fe\u6807"},"Tab 5 - Icon \u6807\u7b7e 5 - \u56fe\u6807"),(0,i.kt)("p",null,"An image that is displayed in the fifth tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u663e\u793a\u5728\u7b2c 5 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-5---icon-selected-\u6807\u7b7e-5---\u56fe\u6807\u9009\u4e2d"},"Tab 5 - Icon Selected \u6807\u7b7e 5 - \u56fe\u6807\u9009\u4e2d"),(0,i.kt)("p",null,"An image that is displayed in the fifth tab when selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u5f53\u9009\u4e2d\u65f6\u663e\u793a\u5728\u7b2c 5 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-5---title-\u6807\u7b7e-5---\u6807\u9898"},"Tab 5 - Title \u6807\u7b7e 5 - \u6807\u9898"),(0,i.kt)("p",null,"A text string that is displayed as the title of the fifth tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u7b2c 5 \u4e2a\u9009\u9879\u5361\u7684\u6807\u9898\u3002"),(0,i.kt)("h3",{id:"tab-6---icon-\u6807\u7b7e-6---\u56fe\u6807"},"Tab 6 - Icon \u6807\u7b7e 6 - \u56fe\u6807"),(0,i.kt)("p",null,"An image that is displayed in the sixth tab. \u4e00\u4e2a\u56fe\u7247\uff0c\u663e\u793a\u5728\u7b2c 6 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-6---icon-selected-\u6807\u7b7e-6---\u56fe\u6807\u9009\u4e2d"},"Tab 6 - Icon Selected \u6807\u7b7e 6 - \u56fe\u6807\u9009\u4e2d"),(0,i.kt)("p",null,"An image that is displayed in the sixth tab when selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u56fe\u7247\uff0c\u5f53\u9009\u4e2d\u65f6\u663e\u793a\u5728\u7b2c 6 \u4e2a\u9009\u9879\u5361\u3002"),(0,i.kt)("h3",{id:"tab-6---title-\u6807\u7b7e-6---\u6807\u9898"},"Tab 6 - Title \u6807\u7b7e 6 - \u6807\u9898"),(0,i.kt)("p",null,"A text string that is displayed as the title of the sixth tab."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u7b2c 6 \u4e2a\u9009\u9879\u5361\u7684\u6807\u9898\u3002"),(0,i.kt)("h3",{id:"selected-tab-index-\u9009\u4e2d\u6807\u7b7e\u7d22\u5f15"},"Selected Tab Index \u9009\u4e2d\u6807\u7b7e\u7d22\u5f15"),(0,i.kt)("p",null,"An index that represents the currently selected tab, starting at 0."),(0,i.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff0c\u8868\u793a\u5f53\u524d\u9009\u5b9a\u7684\u9009\u9879\u5361\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,i.kt)("h3",{id:"tab1-selected-\u6807\u7b7e-1-\u9009\u4e2d"},"Tab1 Selected \u6807\u7b7e 1 \u9009\u4e2d"),(0,i.kt)("p",null,"A boolean that is true when the first tab is selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6807\u7b7e 1 \u9009\u4e2d\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"tab2-selected-\u6807\u7b7e-2-\u9009\u4e2d"},"Tab2 Selected \u6807\u7b7e 2 \u9009\u4e2d"),(0,i.kt)("p",null,"A boolean that is true when the second tab is selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6807\u7b7e 2 \u9009\u4e2d\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"tab3-selected-\u6807\u7b7e-3-\u9009\u4e2d"},"Tab3 Selected \u6807\u7b7e 3 \u9009\u4e2d"),(0,i.kt)("p",null,"A boolean that is true when the third tab is selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6807\u7b7e 3 \u9009\u4e2d\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"tab4-selected-\u6807\u7b7e-4-\u9009\u4e2d"},"Tab4 Selected \u6807\u7b7e 4 \u9009\u4e2d"),(0,i.kt)("p",null,"A boolean that is true when the fourth tab is selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6807\u7b7e 4 \u9009\u4e2d\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"tab5-selected-\u6807\u7b7e-5-\u9009\u4e2d"},"Tab5 Selected \u6807\u7b7e 5 \u9009\u4e2d"),(0,i.kt)("p",null,"A boolean that is true when the fifth tab is selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6807\u7b7e 5 \u9009\u4e2d\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"tab6-selected-\u6807\u7b7e-6-\u9009\u4e2d"},"Tab6 Selected \u6807\u7b7e 6 \u9009\u4e2d"),(0,i.kt)("p",null,"A boolean that is true when the sixth tab is selected."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6807\u7b7e 6 \u9009\u4e2d\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Sender"},"Option Sender \u9009\u9879\u53d1\u9001\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}s.isMDXComponent=!0},63211:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/tab-bar-7a7dfab71f0a2068d5511fdd2a63736d.png"}}]);