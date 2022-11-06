"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[82383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=l(a),m=n,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return a?r.createElement(f,c(c({ref:t},d),{},{components:a})):r.createElement(f,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},91529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},c="Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",o={unversionedId:"documentation/Device/Trackpad Haptic",id:"documentation/Device/Trackpad Haptic",title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",description:"Access the haptic engine on a macOS trackpad.",source:"@site/docs/documentation/Device/Trackpad Haptic.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Trackpad Haptic",permalink:"/OrigamiStudio/docs/documentation/Device/Trackpad Haptic",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Trackpad Haptic.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667730725,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Touches \u89e6\u6478",permalink:"/OrigamiStudio/docs/documentation/Device/Touches"},next:{title:"Trackpad \u89e6\u63a7\u677f",permalink:"/OrigamiStudio/docs/documentation/Device/Trackpad"}},p={},l=[{value:"PlaY",id:"play",level:3},{value:"Type",id:"type",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trackpad-haptic-\u89e6\u63a7\u677f\u89e6\u89c9"},"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9"),(0,n.kt)("p",null,"Access the haptic engine on a macOS trackpad."),(0,n.kt)("p",null,"\u5728macOS\u89e6\u63a7\u677f\u4e0a\u8bbf\u95ee\u89e6\u89c9\u5f15\u64ce\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:a(28650).Z,width:"1184",height:"228"})),(0,n.kt)("h3",{id:"play"},"PlaY"),(0,n.kt)("p",null,"A pulse that plays the selected haptic feedback."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u64ad\u653e\u9009\u5b9a\u7684\u89e6\u89c9\u53cd\u9988\u3002"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("p",null,"The type of haptic response to activate on the macOS trackpad (Alignment, Level Change)"),(0,n.kt)("p",null,"\u5728macOS\u89e6\u63a7\u677f\u4e0a\u6fc0\u6d3b\u7684\u89e6\u89c9\u53cd\u5e94\u7c7b\u578b(\u5bf9\u9f50\uff0c\u7ea7\u522b\u66f4\u6539)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Vibrate"},"Vibrate \u9707\u52a8")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Haptic"},"Haptic \u89e6\u89c9")))}u.isMDXComponent=!0},28650:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/trackpad-haptic-a17b35ff828eb0ca9530d07718515a21.png"}}]);