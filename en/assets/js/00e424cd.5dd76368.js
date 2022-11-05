"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[43642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={title:"Game Controller \u6e38\u620f\u63a7\u5236\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Game Controller \u6e38\u620f\u63a7\u5236\u5668",a={unversionedId:"documentation/Device/Game Controller",id:"documentation/Device/Game Controller",title:"Game Controller \u6e38\u620f\u63a7\u5236\u5668",description:"Control your prototype using any MFI-compatible Game Controller. Supports the Game Pad and Extended Game Pad profiles. Micro Game Pad profile is not available on macOS.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Device/Game Controller.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Game Controller",permalink:"/OrigamiStudio/en/docs/documentation/Device/Game Controller",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Game Controller.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{title:"Game Controller \u6e38\u620f\u63a7\u5236\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Device Time \u8bbe\u5907\u65f6\u95f4",permalink:"/OrigamiStudio/en/docs/documentation/Device/Device Time"},next:{title:"Haptic \u89e6\u89c9",permalink:"/OrigamiStudio/en/docs/documentation/Device/Haptic"}},u={},p=[{value:"Connected \u8fde\u63a5",id:"connected-\u8fde\u63a5",level:3},{value:"A",id:"a",level:3},{value:"b",id:"b",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"L1",id:"l1",level:3},{value:"R1",id:"r1",level:3},{value:"L2",id:"l2",level:3},{value:"R2",id:"r2",level:3},{value:"D-pad",id:"d-pad",level:3},{value:"Left Thumbstick \u5de6\u62c7\u6307\u6746",id:"left-thumbstick-\u5de6\u62c7\u6307\u6746",level:3},{value:"Right Thumbstick  \u53f3\u62c7\u6307\u6746",id:"right-thumbstick--\u53f3\u62c7\u6307\u6746",level:3}],d={toc:p};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"game-controller-\u6e38\u620f\u63a7\u5236\u5668"},"Game Controller \u6e38\u620f\u63a7\u5236\u5668"),(0,o.kt)("p",null,"Control your prototype using any ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/programs/mfi/"},"MFI-compatible")," Game Controller. Supports the Game Pad and Extended Game Pad profiles. Micro Game Pad profile is not available on macOS."),(0,o.kt)("p",null,"\u4f7f\u7528\u4efb\u4f55\u517c\u5bb9 MFI \u7684\u6e38\u620f\u63a7\u5236\u5668\u63a7\u5236\u60a8\u7684\u539f\u578b\u3002\u652f\u6301 Game Pad \u548c Extended Game Pad \u914d\u7f6e\u6587\u4ef6\u3002 Micro Game Pad \u914d\u7f6e\u6587\u4ef6\u5728 macOS \u4e0a\u4e0d\u53ef\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(42205).Z,width:"1502",height:"562"})),(0,o.kt)("h3",{id:"connected-\u8fde\u63a5"},"Connected \u8fde\u63a5"),(0,o.kt)("p",null,"A boolean that is true when a controller is paired and connected."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u63a7\u5236\u5668\u914d\u5bf9\u5e76\u8fde\u63a5\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"a"},"A"),(0,o.kt)("p",null,"A boolean that is true when the bottom face button is pressed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b A \u6309\u94ae\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"b"},"b"),(0,o.kt)("p",null,"A boolean that is true when the right face button is pressed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b B \u6309\u94ae\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"x"},"X"),(0,o.kt)("p",null,"A boolean that is true when the left face button is pressed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b X \u6309\u94ae\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"y"},"Y"),(0,o.kt)("p",null,"A boolean that is true when the top face button is pressed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b Y \u6309\u94ae\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"l1"},"L1"),(0,o.kt)("p",null,"A boolean that is true when the left shoulder button is pressed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b L1 \u6309\u94ae\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"r1"},"R1"),(0,o.kt)("p",null,"A boolean that is true when the right shoulder button is pressed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b R1 \u6309\u94ae\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"l2"},"L2"),(0,o.kt)("p",null,"A boolean that is true when the left trigger button is pressed. Only supported on controllers with the Extended Game Pad profile."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b L2 \u6309\u94ae\u65f6\u4e3a\u771f\u3002\u4ec5\u5728\u5177\u6709\u6269\u5c55\u6e38\u620f\u624b\u67c4\u914d\u7f6e\u6587\u4ef6\u7684\u63a7\u5236\u5668\u4e0a\u53d7\u652f\u6301\u3002"),(0,o.kt)("h3",{id:"r2"},"R2"),(0,o.kt)("p",null,"A boolean that is true when the right trigger button is pressed. Only supported on controllers with the Extended Game Pad profile."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u4e0b R2 \u6309\u94ae\u65f6\u4e3a\u771f\u3002\u4ec5\u5728\u5177\u6709\u6269\u5c55\u6e38\u620f\u624b\u67c4\u914d\u7f6e\u6587\u4ef6\u7684\u63a7\u5236\u5668\u4e0a\u53d7\u652f\u6301\u3002"),(0,o.kt)("h3",{id:"d-pad"},"D-pad"),(0,o.kt)("p",null,"A point value between -1 ,-1 (bottom left) and 1,1 (top right) that represents the position of the directional pad."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ecb\u4e8e -1 ,-1\uff08\u5de6\u4e0b\uff09\u548c 1,1\uff08\u53f3\u4e0a\uff09\u4e4b\u95f4\u7684\u70b9\u503c\uff0c\u8868\u793a\u65b9\u5411\u952e\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"left-thumbstick-\u5de6\u62c7\u6307\u6746"},"Left Thumbstick \u5de6\u62c7\u6307\u6746"),(0,o.kt)("p",null,"A point value between -1 ,-1 (bottom left) and 1,1 (top right) that represents the position of the left joystick."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ecb\u4e8e -1 ,-1\uff08\u5de6\u4e0b\uff09\u548c 1,1\uff08\u53f3\u4e0a\uff09\u4e4b\u95f4\u7684\u70b9\u503c\uff0c\u8868\u793a\u5de6\u64cd\u7eb5\u6746\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"right-thumbstick--\u53f3\u62c7\u6307\u6746"},"Right Thumbstick  \u53f3\u62c7\u6307\u6746"),(0,o.kt)("p",null,"A point value between -1 ,-1 (bottom left) and 1,1 (top right) that represents the position of the right joystick."),(0,o.kt)("p",null,"\u4ecb\u4e8e -1 ,-1\uff08\u5de6\u4e0b\uff09\u548c 1,1\uff08\u53f3\u4e0a\uff09\u4e4b\u95f4\u7684\u70b9\u503c\uff0c\u8868\u793a\u53f3\u64cd\u7eb5\u6746\u7684\u4f4d\u7f6e\u3002"))}c.isMDXComponent=!0},42205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/game-controller-685bc6e6dc9de96f32449f6339b2ad4c.png"}}]);