"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[32783],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),s=c(n),h=o,m=s["".concat(u,".").concat(h)]||s[h]||d[h]||a;return n?i.createElement(m,l(l({ref:e},p),{},{components:n})):i.createElement(m,l({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=s;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r.mdxType="string"==typeof t?t:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13994:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},l="Action Sheet \u64cd\u4f5c\u5217\u8868",r={unversionedId:"documentation/iOS/Action Sheet",id:"documentation/iOS/Action Sheet",title:"Action Sheet \u64cd\u4f5c\u5217\u8868",description:"An iOS action sheet with customizable actions.",source:"@site/docs/documentation/iOS/Action Sheet.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Action Sheet",permalink:"/OrigamiStudio/docs/documentation/iOS/Action Sheet",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Action Sheet.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667268661,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"iOS \u82f9\u679c\u79fb\u52a8\u7aef",permalink:"/OrigamiStudio/docs/category/ios-\u82f9\u679c\u79fb\u52a8\u7aef"},next:{title:"Activity Indicator \u72b6\u6001\u6307\u793a\u5668",permalink:"/OrigamiStudio/docs/documentation/iOS/Activity Indicator"}},u={},c=[{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Title Text \u6807\u9898\u6587\u672c",id:"title-text-\u6807\u9898\u6587\u672c",level:3},{value:"Body Text \u6b63\u6587\u6587\u672c",id:"body-text-\u6b63\u6587\u6587\u672c",level:3},{value:"Action 1 Text",id:"action-1-text",level:3},{value:"Action 1 Style",id:"action-1-style",level:3},{value:"Action 2 Text",id:"action-2-text",level:3},{value:"Action 2 Style",id:"action-2-style",level:3},{value:"Action 3 Text",id:"action-3-text",level:3},{value:"Action 3 Style",id:"action-3-style",level:3},{value:"Action 4 Text",id:"action-4-text",level:3},{value:"Action 4 Style",id:"action-4-style",level:3},{value:"Action 5 Text",id:"action-5-text",level:3},{value:"Action 5 Style",id:"action-5-style",level:3},{value:"Action 6 Text",id:"action-6-text",level:3},{value:"Action 6 Style",id:"action-6-style",level:3},{value:"Cancel Text \u53d6\u6d88\u6587\u672c",id:"cancel-text-\u53d6\u6d88\u6587\u672c",level:3},{value:"Button 1 Tapped",id:"button-1-tapped",level:3},{value:"Button 2 Tapped",id:"button-2-tapped",level:3},{value:"Button 3 Tapped",id:"button-3-tapped",level:3},{value:"Button 4 Tapped",id:"button-4-tapped",level:3},{value:"Button 5 Tapped",id:"button-5-tapped",level:3},{value:"Button 6 Tapped",id:"button-6-tapped",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],p={toc:c};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"action-sheet-\u64cd\u4f5c\u5217\u8868"},"Action Sheet \u64cd\u4f5c\u5217\u8868"),(0,o.kt)("p",null,"An iOS action sheet with customizable actions."),(0,o.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684IOS\u64cd\u4f5c\u5217\u8868\u3002"),(0,o.kt)("p",null,"Use the Touch button on the component to get the tap events on the buttons."),(0,o.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684Touch\u6309\u94ae\u83b7\u53d6\u6309\u94ae\u4e0a\u7684\u70b9\u51fb\u4e8b\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(74287).Z,width:"1552",height:"730"})),(0,o.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,o.kt)("p",null,"A pulse that displays the action sheet."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u663e\u793a\u64cd\u4f5c\u5217\u8868\u3002"),(0,o.kt)("h3",{id:"title-text-\u6807\u9898\u6587\u672c"},"Title Text \u6807\u9898\u6587\u672c"),(0,o.kt)("p",null,"A text string representing action sheet title that displays above the action buttons."),(0,o.kt)("p",null,"\u8868\u793a\u64cd\u4f5c\u8868\u6807\u9898\u7684\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u53ef\u663e\u793a\u5728\u64cd\u4f5c\u6309\u94ae\u4e0a\u65b9\u3002"),(0,o.kt)("h3",{id:"body-text-\u6b63\u6587\u6587\u672c"},"Body Text \u6b63\u6587\u6587\u672c"),(0,o.kt)("p",null,"A text string representing action sheet message that displays above the action buttons."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5728\u64cd\u4f5c\u6309\u94ae\u4e0a\u65b9\u663e\u793a\u7684\u64cd\u4f5c\u8868\u6d88\u606f\u3002"),(0,o.kt)("h3",{id:"action-1-text"},"Action 1 Text"),(0,o.kt)("p",null,"A text string for the first action button."),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("h3",{id:"action-1-style"},"Action 1 Style"),(0,o.kt)("p",null,"The button style: Default (blue) or Destructive (red)"),(0,o.kt)("p",null,"\u6309\u94ae\u6837\u5f0f\uff1a\u9ed8\u8ba4\uff08\u84dd\u8272\uff09\u6216 \u7834\u574f\u6027\uff08\u7ea2\u8272\uff09"),(0,o.kt)("h3",{id:"action-2-text"},"Action 2 Text"),(0,o.kt)("p",null,"A text string for the second action button."),(0,o.kt)("h3",{id:"action-2-style"},"Action 2 Style"),(0,o.kt)("p",null,"The button style: Default (blue) or Destructive (red)"),(0,o.kt)("h3",{id:"action-3-text"},"Action 3 Text"),(0,o.kt)("p",null,"A text string for the third action button."),(0,o.kt)("h3",{id:"action-3-style"},"Action 3 Style"),(0,o.kt)("p",null,"The button style: Default (blue) or Destructive (red)"),(0,o.kt)("h3",{id:"action-4-text"},"Action 4 Text"),(0,o.kt)("p",null,"A text string for the fourth action button."),(0,o.kt)("h3",{id:"action-4-style"},"Action 4 Style"),(0,o.kt)("p",null,"The button style: Default (blue) or Destructive (red)"),(0,o.kt)("h3",{id:"action-5-text"},"Action 5 Text"),(0,o.kt)("p",null,"A text string for the fifth action button."),(0,o.kt)("h3",{id:"action-5-style"},"Action 5 Style"),(0,o.kt)("p",null,"The button style: Default (blue) or Destructive (red)"),(0,o.kt)("h3",{id:"action-6-text"},"Action 6 Text"),(0,o.kt)("p",null,"A text string for the sixth action button."),(0,o.kt)("h3",{id:"action-6-style"},"Action 6 Style"),(0,o.kt)("p",null,"The button style: Default (blue) or Destructive (red)"),(0,o.kt)("h3",{id:"cancel-text-\u53d6\u6d88\u6587\u672c"},"Cancel Text \u53d6\u6d88\u6587\u672c"),(0,o.kt)("p",null,"A text string for the cancel button."),(0,o.kt)("p",null,"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("h3",{id:"button-1-tapped"},"Button 1 Tapped"),(0,o.kt)("p",null,"A pulse that represents when the first action button is tapped."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u7b2c\u4e00\u52a8\u4f5c\u6309\u94ae\u88ab\u6309\u4e0b\u3002"),(0,o.kt)("h3",{id:"button-2-tapped"},"Button 2 Tapped"),(0,o.kt)("p",null,"A pulse that represents when the second action button is tapped."),(0,o.kt)("h3",{id:"button-3-tapped"},"Button 3 Tapped"),(0,o.kt)("p",null,"A pulse that represents when the third action button is tapped."),(0,o.kt)("h3",{id:"button-4-tapped"},"Button 4 Tapped"),(0,o.kt)("p",null,"A pulse that represents when the fourth action button is tapped."),(0,o.kt)("h3",{id:"button-5-tapped"},"Button 5 Tapped"),(0,o.kt)("p",null,"A pulse that represents when the fifth action button is tapped."),(0,o.kt)("h3",{id:"button-6-tapped"},"Button 6 Tapped"),(0,o.kt)("p",null,"A pulse that represents when the sixth action button is tapped."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}d.isMDXComponent=!0},74287:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/action-sheet-2fb3812b754c57c8b32fa6c0ccb605af.png"}}]);