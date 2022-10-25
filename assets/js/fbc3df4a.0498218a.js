"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[29894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,h=s["".concat(d,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5},a="Microphone \u8bdd\u7b52",c={unversionedId:"documentation/Device/Microphone",id:"documentation/Device/Microphone",title:"Microphone \u8bdd\u7b52",description:"Record sound from the phone, tablet, or computer microphone. Connect to a Sound Player to play the recorded sound.",source:"@site/docs/documentation/Device/Microphone.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Microphone",permalink:"/OrigamiStudio/docs/documentation/Device/Microphone",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Microphone.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666672704,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Location \u4f4d\u7f6e",permalink:"/OrigamiStudio/docs/documentation/Device/Location"},next:{title:"Mouse Cursor \u9f20\u6807\u624b\u52bf",permalink:"/OrigamiStudio/docs/documentation/Device/Mouse Cursor"}},d={},l=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Record \u5f55\u97f3",id:"record-\u5f55\u97f3",level:3},{value:"Sound \u58f0\u97f3",id:"sound-\u58f0\u97f3",level:3},{value:"Metering \u6d4b\u91cf",id:"metering-\u6d4b\u91cf",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"microphone-\u8bdd\u7b52"},"Microphone \u8bdd\u7b52"),(0,o.kt)("p",null,"Record sound from the phone, tablet, or computer microphone. Connect to a Sound Player to play the recorded sound."),(0,o.kt)("p",null,"\u7528\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u7684\u9ea6\u514b\u98ce\u5f55\u97f3\u3002\u8fde\u63a5\u5230 Sound Player \u64ad\u653e\u5f55\u97f3\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(8850).Z,width:"1324",height:"220"})),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when the microphone is on."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u8bdd\u7b52\u6253\u5f00\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"record-\u5f55\u97f3"},"Record \u5f55\u97f3"),(0,o.kt)("p",null,"A boolean that is true when the microphone is recording sound."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u8bdd\u7b52\u5f55\u97f3\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"sound-\u58f0\u97f3"},"Sound \u58f0\u97f3"),(0,o.kt)("p",null,"The recorded sound. Connect to a ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Sound%20Player"},"Sound Player"),"."),(0,o.kt)("p",null,"\u5f55\u5236\u597d\u7684\u58f0\u97f3\u3002\u8fde\u63a5\u5230 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Sound%20Player"},"Sound Player")," \u3002"),(0,o.kt)("h3",{id:"metering-\u6d4b\u91cf"},"Metering \u6d4b\u91cf"),(0,o.kt)("p",null,"Connect this to the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Media/Audio%20Metering"},"Audio Metering")," patch to make visualizations based on the microphone."),(0,o.kt)("p",null,"\u5c06\u6b64\u8fde\u63a5\u5230 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Media/Audio%20Metering"},"Audio Metering")," \u6a21\u5757\uff0c\u4ee5\u6839\u636e\u9ea6\u514b\u98ce\u8fdb\u884c\u53ef\u89c6\u5316\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Sound%20Player"},"Sound Player \u58f0\u97f3\u64ad\u653e\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Camera"},"Camera \u6444\u50cf\u5934")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Viewfinder"},"Viewfinder \u53d6\u666f\u5668")))}p.isMDXComponent=!0},8850:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/microphone-89dc31343c7c8c1c95f018bd01502966.png"}}]);