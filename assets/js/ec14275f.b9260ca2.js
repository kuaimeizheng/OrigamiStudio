"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[12195],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),d=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=d(a),s=n,f=m["".concat(u,".").concat(s)]||m[s]||l[s]||o;return a?r.createElement(f,i(i({ref:e},p),{},{components:a})):r.createElement(f,i({ref:e},p))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51476:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"Trackpad \u89e6\u63a7\u677f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Trackpad \u89e6\u63a7\u677f",c={unversionedId:"documentation/Device/Trackpad",id:"documentation/Device/Trackpad",title:"Trackpad \u89e6\u63a7\u677f",description:"Capture touches on the computer trackpad.",source:"@site/docs/documentation/Device/Trackpad.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Trackpad",permalink:"/OrigamiStudio/docs/documentation/Device/Trackpad",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Trackpad.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Trackpad \u89e6\u63a7\u677f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",permalink:"/OrigamiStudio/docs/documentation/Device/Trackpad Haptic"},next:{title:"Vibrate \u9707\u52a8",permalink:"/OrigamiStudio/docs/documentation/Device/Vibrate"}},u={},d=[{value:"Touches \u89e6\u6478",id:"touches-\u89e6\u6478",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:d};function l(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trackpad-\u89e6\u63a7\u677f"},"Trackpad \u89e6\u63a7\u677f"),(0,n.kt)("p",null,"Capture touches on the computer trackpad."),(0,n.kt)("p",null,"Read the JSON with the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/JSON%20to%20Text"},"Structure Formatter")," patch connected to a Text Layer. Get an individual touch with an ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20at%20Index"},"Object at Index")," patch Read an individual touch\u2019s position or force with ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20for%20Key"},"Structure Key")," and a ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter")," set to position or number to cast the value."),(0,n.kt)("p",null,"\u5728\u89e6\u63a7\u677f\u4e0a\u6355\u6349\u89e6\u6478\u3002 \u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/JSON%20to%20Text"},"Structure Formatter")," \u6a21\u5757\u8fde\u63a5\u5230\u6587\u672c\u56fe\u5c42\u8bfb\u53d6JSON\u3002\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20at%20Index"},"Object at Index")," \u6a21\u5757\u83b7\u5f97\u4e00\u4e2a\u5355\u72ec\u7684\u89e6\u6478\uff0c\u7528 ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20for%20Key"},"Structure Key")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter")," \u6a21\u5757\u8bfb\u53d6\u5355\u4e2a\u89e6\u6478\u7684\u4f4d\u7f6e\u6216\u529b\u5ea6\uff0c\u8bbe\u7f6e\u4f4d\u7f6e\u6216\u6570\u5b57\u4ee5\u8f6c\u6362\u503c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:a(29267).Z,width:"1270",height:"168"})),(0,n.kt)("h3",{id:"touches-\u89e6\u6478"},"Touches \u89e6\u6478"),(0,n.kt)("p",null,"A JSON object containing information about the position of every touch on the trackpad."),(0,n.kt)("p",null,"\u4e00\u4e2aJSON\u5bf9\u8c61\uff0c\u5305\u542b\u6bcf\u4e2a\u5728\u89e6\u63a7\u677f\u4e0a\u7684\u89e6\u6478\u4f4d\u7f6e\u548c\u529b\u5ea6\u4fe1\u606f\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter \u5206\u79bb\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Touches"},"Touches \u89e6\u6478")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20for%20Key"},"Value for Key \u5173\u952e\u503c")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")))}l.isMDXComponent=!0},29267:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/trackpad-60e8651f43860f5bb548d3230c2dd228.png"}}]);