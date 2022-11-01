"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[39206],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(i),m=n,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||r;return i?a.createElement(h,o(o({ref:t},d),{},{components:i})):a.createElement(h,o({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}s.displayName="MDXCreateElement"},85576:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=i(87462),n=(i(67294),i(3905));const r={sidebar_position:5},o="Haptic \u89e6\u89c9",c={unversionedId:"documentation/Device/Haptic",id:"documentation/Device/Haptic",title:"Haptic \u89e6\u89c9",description:"Access the haptic engine on an iPhone or iPad.",source:"@site/docs/documentation/Device/Haptic.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Haptic",permalink:"/OrigamiStudio/docs/documentation/Device/Haptic",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Haptic.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667310473,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Game Controller \u6e38\u620f\u63a7\u5236\u5668",permalink:"/OrigamiStudio/docs/documentation/Device/Game Controller"},next:{title:"Interface Orientation \u754c\u9762\u65b9\u5411",permalink:"/OrigamiStudio/docs/documentation/Device/Interface Orientation"}},p={},l=[{value:"Play \u64ad\u653e",id:"play-\u64ad\u653e",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"File \u6587\u4ef6",id:"file-\u6587\u4ef6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:3},{value:"\u6838\u5fc3\u89e6\u89c9\u6a21\u5f0f\uff1a",id:"\u6838\u5fc3\u89e6\u89c9\u6a21\u5f0f",level:5},{value:"\u8bbe\u8ba1\u6587\u6863\uff1a",id:"\u8bbe\u8ba1\u6587\u6863",level:5},{value:"\u5f00\u53d1\u6587\u6863\uff1a",id:"\u5f00\u53d1\u6587\u6863",level:5},{value:"\u81ea\u5b9a\u4e49\u89e6\u89c9\uff1a",id:"\u81ea\u5b9a\u4e49\u89e6\u89c9",level:5}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"haptic-\u89e6\u89c9"},"Haptic \u89e6\u89c9"),(0,n.kt)("p",null,"Access the haptic engine on an iPhone or iPad."),(0,n.kt)("p",null,"\u5728iPhone\u6216ipad\u4e0a\u8bbf\u95ee\u89e6\u89c9\u5f15\u64ce\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:i(63738).Z,width:"1658",height:"378"})),(0,n.kt)("h3",{id:"play-\u64ad\u653e"},"Play \u64ad\u653e"),(0,n.kt)("p",null,"A pulse that plays the selected haptic feedback."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u64ad\u653e\u9009\u5b9a\u7684\u89e6\u89c9\u53cd\u9988\u3002"),(0,n.kt)("h3",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,n.kt)("p",null,"The type of haptic response to activate on the iPhone (Selection, Impact Light, Impact Medium, Impact Heavy, Notification Success, Notification Warning, Notification Error)"),(0,n.kt)("p",null,"\u5728iPhone\u4e0a\u6fc0\u6d3b\u7684\u89e6\u89c9\u54cd\u5e94\u7c7b\u578b\uff08\u9009\u62e9\uff0c\u5f71\u54cd\u8f7b\u3001\u5f71\u54cd\u4e2d\u3001\u5f71\u54cd\u91cd\u3001\u901a\u77e5\u6210\u529f\uff0c\u901a\u77e5\u8b66\u544a\uff0c\u901a\u77e5\u9519\u8bef\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:i(89247).Z,width:"290",height:"323"})),(0,n.kt)("h3",{id:"file-\u6587\u4ef6"},"File \u6587\u4ef6"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Vibrate"},"Vibrate \u9707\u52a8")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Trackpad%20Haptic"},"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9")),(0,n.kt)("h3",{id:"\u76f8\u5173\u53c2\u8003"},"\u76f8\u5173\u53c2\u8003"),(0,n.kt)("h5",{id:"\u6838\u5fc3\u89e6\u89c9\u6a21\u5f0f"},"\u6838\u5fc3\u89e6\u89c9\u6a21\u5f0f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/corehaptics"},"https://developer.apple.com/documentation/corehaptics")),(0,n.kt)("h5",{id:"\u8bbe\u8ba1\u6587\u6863"},"\u8bbe\u8ba1\u6587\u6863\uff1a"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/patterns/playing-haptics"},"https://developer.apple.com/design/human-interface-guidelines/patterns/playing-haptics")),(0,n.kt)("h5",{id:"\u5f00\u53d1\u6587\u6863"},"\u5f00\u53d1\u6587\u6863\uff1a"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uifeedbackgenerator"},"https://developer.apple.com/documentation/uikit/uifeedbackgenerator")),(0,n.kt)("h5",{id:"\u81ea\u5b9a\u4e49\u89e6\u89c9"},"\u81ea\u5b9a\u4e49\u89e6\u89c9\uff1a"),(0,n.kt)("p",null,"Apple \u5728 iOS 13 \u4e2d\u5f15\u5165\u4e86\u4f7f\u7528\u65b0\u7684 AHAP \u6587\u4ef6\u8bbe\u8ba1\u81ea\u5df1\u7684\u89e6\u89c9\u4f53\u9a8c\u7684\u80fd\u529b\u3002 \u8be5\u5de5\u5177\u53ef\u4ee5\u7528\u56fe\u5f62\u65b9\u5f0f\u53ef\u89c6\u5316\u8bbe\u8ba1\u60a8\u81ea\u5df1\u7684\u6a21\u5f0f\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ahap.fancypixel.it/"},"https://ahap.fancypixel.it/")))}u.isMDXComponent=!0},89247:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/haptic-item-5cf8ac3ce6140904c4957e09bb863e91.png"},63738:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/haptic-8ec730ac107d00f0335a207b3cae57e5.png"}}]);