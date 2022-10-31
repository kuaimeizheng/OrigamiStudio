"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[91594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:5},a="Sound Kit \u97f3\u6548\u5305",u={unversionedId:"documentation/Device/Sound Kit",id:"documentation/Device/Sound Kit",title:"Sound Kit \u97f3\u6548\u5305",description:"Play from a collection of UI sound effects. For expanded descriptions and documentation, visit the Facebook Design Resources.",source:"@site/docs/documentation/Device/Sound Kit.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Sound Kit",permalink:"/OrigamiStudio/docs/documentation/Device/Sound Kit",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Sound Kit.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667234731,formattedLastUpdatedAt:"2022\u5e7410\u670831\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Mouse Cursor \u9f20\u6807\u624b\u52bf",permalink:"/OrigamiStudio/docs/documentation/Device/Mouse Cursor"},next:{title:"Sound Player Setting \u58f0\u97f3\u64ad\u653e\u5668\u8bbe\u7f6e",permalink:"/OrigamiStudio/docs/documentation/Device/Sound Player Setting"}},l={},c=[{value:"Sound \u58f0\u97f3",id:"sound-\u58f0\u97f3",level:3},{value:"Play \u64ad\u653e",id:"play-\u64ad\u653e",level:3},{value:"Volume \u97f3\u91cf",id:"volume-\u97f3\u91cf",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:c};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sound-kit-\u97f3\u6548\u5305"},"Sound Kit \u97f3\u6548\u5305"),(0,r.kt)("p",null,"Play from a collection of UI sound effects. For expanded descriptions and documentation, visit the ",(0,r.kt)("a",{parentName:"p",href:"http://facebook.design/soundkit"},"Facebook Design Resources"),"."),(0,r.kt)("p",null,"\u4ece\u4e00\u7ec4 UI \u97f3\u6548\u4e2d\u64ad\u653e\u3002\u5982\u9700\u8be6\u7ec6\u8bf4\u660e\u548c\u6587\u6863\uff0c\u8bf7\u8bbf\u95ee Facebook \u8bbe\u8ba1\u8d44\u6e90\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(29690).Z,width:"1432",height:"340"})),(0,r.kt)("h3",{id:"sound-\u58f0\u97f3"},"Sound \u58f0\u97f3"),(0,r.kt)("p",null,"The sound effect to play (buttons, navigation, complete, success, error, cancel, notifications, alerts)."),(0,r.kt)("p",null,"\u8981\u64ad\u653e\u7684\u97f3\u6548\uff08\u6309\u94ae\u3001\u5bfc\u822a\u3001\u5b8c\u6210\u3001\u6210\u529f\u3001\u9519\u8bef\u3001\u53d6\u6d88\u3001\u901a\u77e5\u3001\u8b66\u62a5\uff09\u3002"),(0,r.kt)("h3",{id:"play-\u64ad\u653e"},"Play \u64ad\u653e"),(0,r.kt)("p",null,"A pulse that plays the selected sound effect."),(0,r.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u64ad\u653e\u6240\u9009\u58f0\u97f3\u6548\u679c\u3002"),(0,r.kt)("h3",{id:"volume-\u97f3\u91cf"},"Volume \u97f3\u91cf"),(0,r.kt)("p",null,"A number from 0-1 that represents the volume of the selected sound. Adjust the value to mix relatively against the rest of a sound set. For additional volume control, adjust your OS volume. This may be helpful for presentations and demonstrations."),(0,r.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u6240\u9009\u58f0\u97f3\u7684\u97f3\u91cf\u3002\u8c03\u6574\u8fd9\u4e2a\u503c\uff0c\u4f7f\u5176\u4e0e\u58f0\u97f3\u96c6\u7684\u5176\u4ed6\u90e8\u5206\u76f8\u5bf9\u878d\u5408\u3002\u5982\u9700\u989d\u5916\u7684\u97f3\u91cf\u63a7\u5236\uff0c\u8bf7\u8c03\u6574\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u97f3\u91cf\u3002\u8fd9\u5bf9\u6c47\u62a5\u548c\u6f14\u793a\u5f88\u6709\u5e2e\u52a9\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Sound%20Player"},"Sound Player \u58f0\u97f3\u64ad\u653e\u5668")))}s.isMDXComponent=!0},29690:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sound-kit-767cfdafd330f64422c855d3164c3de4.png"}}]);