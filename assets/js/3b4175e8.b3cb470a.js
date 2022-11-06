"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[24425],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||n;return a?r.createElement(h,o(o({ref:e},d),{},{components:a})):r.createElement(h,o({ref:e},d))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66518:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={sidebar_position:5},o="Status Bar \u72b6\u6001\u680f",l={unversionedId:"documentation/iOS/Status bar",id:"documentation/iOS/Status bar",title:"Status Bar \u72b6\u6001\u680f",description:"An iOS status bar that is responsive and customizable.",source:"@site/docs/documentation/iOS/Status bar.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Status bar",permalink:"/OrigamiStudio/docs/documentation/iOS/Status bar",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Status bar.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Slider \u6ed1\u5757",permalink:"/OrigamiStudio/docs/documentation/iOS/Slider"},next:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/docs/documentation/iOS/Switch"}},u={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Color \u989c\u8272",id:"color-\u989c\u8272",level:3},{value:"Carrier \u8fd0\u8425\u5546",id:"carrier-\u8fd0\u8425\u5546",level:3},{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4",level:3},{value:"Battery \u7535\u91cf",id:"battery-\u7535\u91cf",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:c};function s(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"status-bar-\u72b6\u6001\u680f"},"Status Bar \u72b6\u6001\u680f"),(0,i.kt)("p",null,"An iOS status bar that is responsive and customizable."),(0,i.kt)("p",null,"\u4e00\u4e2a\u54cd\u5e94\u548c\u53ef\u81ea\u5b9a\u4e49\u7684iOS\u72b6\u6001\u680f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:a(91184).Z,width:"1548",height:"302"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the status bar is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u72b6\u6001\u680f\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"color-\u989c\u8272"},"Color \u989c\u8272"),(0,i.kt)("p",null,"The color of the status bar contents: black or white."),(0,i.kt)("p",null,"\u72b6\u6001\u680f\u5185\u5bb9\u7684\u989c\u8272\uff1a\u9ed1\u8272\u6216\u767d\u8272\u3002"),(0,i.kt)("h3",{id:"carrier-\u8fd0\u8425\u5546"},"Carrier \u8fd0\u8425\u5546"),(0,i.kt)("p",null,"A text string that is shown as the network carrier in the top left."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5728\u5de6\u4e0a\u89d2\u663e\u793a\u7684\u7f51\u7edc\u8fd0\u8425\u5546\u3002"),(0,i.kt)("h3",{id:"time-\u65f6\u95f4"},"Time \u65f6\u95f4"),(0,i.kt)("p",null,"A text string that is shown as the time on the device. By default, this is blank and uses the current phone, tablet or computer time."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5728\u8bbe\u5907\u4e0a\u663e\u793a\u65f6\u95f4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u9879\u4e3a\u7a7a\u767d\u5e76\u4f7f\u7528\u5f53\u524d\u624b\u673a\u3001\u5e73\u677f\u7535\u8111\u6216\u8ba1\u7b97\u673a\u65f6\u95f4"),(0,i.kt)("h3",{id:"battery-\u7535\u91cf"},"Battery \u7535\u91cf"),(0,i.kt)("p",null,"A number from 0 to 100 that represents the battery level in the top right."),(0,i.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 100 \u7684\u6570\u5b57\uff0c\u8868\u793a\u53f3\u4e0a\u89d2\u7684\u7535\u6c60\u7535\u91cf\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Time"},"Time \u65f6\u95f4")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Time"},"Device Time \u8bbe\u5907\u65f6\u95f4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}s.isMDXComponent=!0},91184:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/status-bar-75b623933c2b8ebccaf5fd60aa49ec31.png"}}]);