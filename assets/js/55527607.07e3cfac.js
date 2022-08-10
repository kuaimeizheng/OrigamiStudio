"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(a),m=o,h=s["".concat(u,".").concat(m)]||s[m]||l[m]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const n={sidebar_position:2},i="Touches \u89e6\u6478",c={unversionedId:"documentation/Device/Touches",id:"documentation/Device/Touches",title:"Touches \u89e6\u6478",description:"Capture the touches from the simulated or connected phone, tablet or computer.",source:"@site/docs/documentation/Device/Touches.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Touches",permalink:"/OrigamiStudio/docs/documentation/Device/Touches",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Touches.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660145226,formattedLastUpdatedAt:"2022\u5e748\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Sound Player \u58f0\u97f3\u64ad\u653e\u5668",permalink:"/OrigamiStudio/docs/documentation/Device/Sound Player"},next:{title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",permalink:"/OrigamiStudio/docs/documentation/Device/Trackpad Haptic"}},u={},d=[{value:"Touches \u89e6\u6478",id:"touches-\u89e6\u6478-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:d};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"touches-\u89e6\u6478"},"Touches \u89e6\u6478"),(0,o.kt)("p",null,"Capture the touches from the simulated or connected phone, tablet or computer."),(0,o.kt)("p",null,"Read the JSON with the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/JSON%20to%20Text"},"Structure Formatter")," patch connected to a Text Layer. Get an individual touch with an ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20at%20Index"},"Object at Index")," patch Read an individual touch\u2019s position or force with ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20for%20Key"},"Structure Key")," and a ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter")," set to position or number to cast the value."),(0,o.kt)("p",null,"\u4ece\u6a21\u62df\u6216\u8fde\u63a5\u7684\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u6355\u6349\u89e6\u6478\u3002 \u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/JSON%20to%20Text"},"Structure Formatter")," \u6a21\u5757\u8fde\u63a5\u4e00\u4e2a\u6587\u672c\u5c42\u4ee5\u8bfb\u53d6JSON\u683c\u5f0f\u7a0b\u5e8f\u3002\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20at%20Index"},"Object at Index")," \u6a21\u5757\u83b7\u5f97\u4e00\u4e2a\u5355\u72ec\u7684\u89e6\u6478\uff0c\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Touches-2a30a276b98e4c11b8b23bda1cde914c"},"Structure Key")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter")," \u6a21\u5757\u8bfb\u53d6\u5355\u4e2a\u89e6\u6478\u7684\u4f4d\u7f6e\u6216\u529b\u5ea6\uff0c\u8bbe\u7f6e\u4f4d\u7f6e\u6216\u6570\u5b57\u4ee5\u8f6c\u6362\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(38470).Z,width:"1310",height:"168"})),(0,o.kt)("h3",{id:"touches-\u89e6\u6478-1"},"Touches \u89e6\u6478"),(0,o.kt)("p",null,"A JSON object containing information about the position and force of every touch on the viewer and/or device."),(0,o.kt)("p",null,"\u4e00\u4e2aJSON\u5bf9\u8c61\uff0c\u5305\u542b\u6bcf\u4e2a\u5728\u67e5\u770b\u5668\u548c/\u6216\u8bbe\u5907\u4e0a\u7684\u89e6\u6478\u4f4d\u7f6e\u548c\u529b\u5ea6\u4fe1\u606f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter \u5206\u79bb\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20for%20Key"},"Value for Key \u5173\u952e\u503c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")))}l.isMDXComponent=!0},38470:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/touches-2c2d1b91f140597bb6a8c50a84710b37.png"}}]);