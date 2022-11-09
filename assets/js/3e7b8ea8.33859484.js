"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[53553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(k,l(l({ref:t},s),{},{components:n})):i.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={title:"Custom Devices \u81ea\u5b9a\u4e49\u8bbe\u5907",sidebar_position:15,last_update:{author:"\u84af\u7f8e\u653f"}},l="Custom Devices \u81ea\u5b9a\u4e49\u8bbe\u5907",r={unversionedId:"documentation/Workflow/Custom Devices",id:"documentation/Workflow/Custom Devices",title:"Custom Devices \u81ea\u5b9a\u4e49\u8bbe\u5907",description:"\u901a\u8fc7\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c3a\u5bf8\u3001\u6bd4\u4f8b\u3001\u6846\u67b6\u548c\u624b\u5f62\u56fe\u7247\u5236\u4f5c\u81ea\u5b9a\u4e49\u8bbe\u5907\uff0c\u6269\u5c55 Origami Studio \u4e2d\u7684\u6a21\u62df\u8bbe\u5907\u5e93\u3002",source:"@site/docs/documentation/Workflow/Custom Devices.md",sourceDirName:"documentation/Workflow",slug:"/documentation/Workflow/Custom Devices",permalink:"/OrigamiStudio/docs/documentation/Workflow/Custom Devices",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Workflow/Custom Devices.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:15,frontMatter:{title:"Custom Devices \u81ea\u5b9a\u4e49\u8bbe\u5907",sidebar_position:15,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Creating an Origami System \u7cfb\u7edf\u521b\u5efa",permalink:"/OrigamiStudio/docs/documentation/Workflow/Creating an Origami System"},next:{title:"Keyboard Shortcuts \u952e\u76d8\u5feb\u6377\u952e",permalink:"/OrigamiStudio/docs/documentation/Workflow/Keyboard Shortcuts"}},p={},d=[{value:"Creating a New Device \u521b\u5efa\u65b0\u8bbe\u5907",id:"creating-a-new-device-\u521b\u5efa\u65b0\u8bbe\u5907",level:2},{value:"Testing your Device \u6d4b\u8bd5\u4f60\u7684\u8bbe\u5907",id:"testing-your-device-\u6d4b\u8bd5\u4f60\u7684\u8bbe\u5907",level:2},{value:"\u793a\u4f8b info.json",id:"\u793a\u4f8b-infojson",level:2},{value:"info.json Documentation info.json \u6587\u6863",id:"infojson-documentation-infojson-\u6587\u6863",level:2},{value:"<code>key</code> \u952e",id:"key-\u952e",level:3},{value:"<code>displayName</code> \u663e\u793a\u540d\u79f0",id:"displayname-\u663e\u793a\u540d\u79f0",level:3},{value:"<code>screenSize</code> \u5c4f\u5e55\u5c3a\u5bf8",id:"screensize-\u5c4f\u5e55\u5c3a\u5bf8",level:3},{value:"<code>screenScale</code> \u5c4f\u5e55\u500d\u6570",id:"screenscale-\u5c4f\u5e55\u500d\u6570",level:3},{value:"<code>type</code> \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"<code>platform</code> \u5e73\u53f0",id:"platform-\u5e73\u53f0",level:3},{value:"<code>mouseInput</code> \u9f20\u6807\u8f93\u5165",id:"mouseinput-\u9f20\u6807\u8f93\u5165",level:3},{value:"<code>viewerWindowNative</code> \u67e5\u770b\u672c\u673a\u7a97\u53e3",id:"viewerwindownative-\u67e5\u770b\u672c\u673a\u7a97\u53e3",level:3},{value:"<code>deviceInsets</code> \u8bbe\u5907\u63d2\u4ef6",id:"deviceinsets-\u8bbe\u5907\u63d2\u4ef6",level:3},{value:"<code>shadowOffset</code> \u9634\u5f71\u504f\u79fb",id:"shadowoffset-\u9634\u5f71\u504f\u79fb",level:3},{value:"<code>deviceImages</code> \u8bbe\u5907\u56fe\u50cf",id:"deviceimages-\u8bbe\u5907\u56fe\u50cf",level:3},{value:"<code>deviceImageOffset</code> \u8bbe\u5907\u56fe\u50cf\u504f\u79fb",id:"deviceimageoffset-\u8bbe\u5907\u56fe\u50cf\u504f\u79fb",level:3},{value:"<code>deviceImageScale</code> \u8bbe\u5907\u56fe\u7247\u7f29\u653e",id:"deviceimagescale-\u8bbe\u5907\u56fe\u7247\u7f29\u653e",level:3},{value:"<code>deviceOverlayImages</code> \u8bbe\u5907\u56fe\u7247\u53e0\u52a0",id:"deviceoverlayimages-\u8bbe\u5907\u56fe\u7247\u53e0\u52a0",level:3},{value:"<code>handsImageOffset</code> \u624b\u52bf\u56fe\u7247\u504f\u79fb",id:"handsimageoffset-\u624b\u52bf\u56fe\u7247\u504f\u79fb",level:3},{value:"<code>handsImageScale</code> \u624b\u52bf\u56fe\u7247\u7f29\u653e",id:"handsimagescale-\u624b\u52bf\u56fe\u7247\u7f29\u653e",level:3},{value:"<code>handsImages</code> \u624b\u52bf\u56fe\u7247",id:"handsimages-\u624b\u52bf\u56fe\u7247",level:3},{value:"<code>handsOnTop</code> \u624b\u5728\u524d\u9762",id:"handsontop-\u624b\u5728\u524d\u9762",level:3},{value:"<code>defaultDeviceOrientation</code> \u9ed8\u8ba4\u8bbe\u5907\u65b9\u5411",id:"defaultdeviceorientation-\u9ed8\u8ba4\u8bbe\u5907\u65b9\u5411",level:3},{value:"<code>supportsDeviceOrientationPortrait</code>\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411,",id:"supportsdeviceorientationportrait\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411",level:3},{value:"<code>supportsDeviceOrientationLandscapeLeft</code>\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u5de6,",id:"supportsdeviceorientationlandscapeleft\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u5de6",level:3},{value:"<code>supportsDeviceOrientationLandscapeRight</code>\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u53f3,",id:"supportsdeviceorientationlandscaperight\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u53f3",level:3},{value:"<code>supportsDeviceOrientationPortraitUpsideDown</code>\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411\u5012\u7f6e",id:"supportsdeviceorientationportraitupsidedown\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411\u5012\u7f6e",level:3}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-devices-\u81ea\u5b9a\u4e49\u8bbe\u5907"},"Custom Devices \u81ea\u5b9a\u4e49\u8bbe\u5907"),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c3a\u5bf8\u3001\u6bd4\u4f8b\u3001\u6846\u67b6\u548c\u624b\u5f62\u56fe\u7247\u5236\u4f5c\u81ea\u5b9a\u4e49\u8bbe\u5907\uff0c\u6269\u5c55 Origami Studio \u4e2d\u7684\u6a21\u62df\u8bbe\u5907\u5e93\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"creating-a-new-device-\u521b\u5efa\u65b0\u8bbe\u5907"},"Creating a New Device \u521b\u5efa\u65b0\u8bbe\u5907"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u81ea\u5b9a\u4e49\u8bbe\u5907\u793a\u4f8b ",(0,a.kt)("a",{parentName:"li",href:"https://s3-us-west-2.amazonaws.com/fborigami/custom_device_example/Example_device.origamidevice.zip"},"\u81ea\u5b9a\u4e49\u8bbe\u5907\u793a\u4f8b")),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u5e76\u5728\u83dc\u5355\u4e2d\u9009\u62e9\u201c\u663e\u793a\u5305\u5185\u5bb9\u201d\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"li"},".origamidevice")," \u5305"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u63cf\u8ff0\u8bbe\u5907\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"info.json")," \u6587\u4ef6\u8fdb\u884c\u4fee\u6539\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u6587\u6863\uff09\u3002\u786e\u4fdd\u4e3a\u60a8\u521b\u5efa\u7684\u6bcf\u53f0\u8bbe\u5907\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ol"},"\u66ff\u6362\u6216\u6dfb\u52a0 .png \u56fe\u50cf\u5e76\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"info.json")," \u6587\u4ef6\u4e2d\u5f15\u7528\u5b83\u4eec"),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u51fb\u5305\u6587\u4ef6\u5b89\u88c5")),(0,a.kt)("p",null,"\u60a8\u7684\u65b0\u8bbe\u5907\u5c06\u51fa\u73b0\u5728\u81ea\u5b9a\u4e49\u83dc\u5355\u9879\u4e0b\u7684\u8bbe\u5907\u9009\u62e9\u5217\u8868\u4e2d\u3002\u53ef\u4ee5\u5728 info.json \u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u6765\u6539\u53d8\u3002"),(0,a.kt)("h2",{id:"testing-your-device-\u6d4b\u8bd5\u4f60\u7684\u8bbe\u5907"},"Testing your Device \u6d4b\u8bd5\u4f60\u7684\u8bbe\u5907"),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u540e\u6d4b\u8bd5\u60a8\u7684\u81ea\u5b9a\u4e49\u8bbe\u5907\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 Origami Studio \u4e2d\u5207\u6362\u5230\u8bbe\u5907"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},".origamidevice")," \u5305\u5185\u8fdb\u884c\u4efb\u610f\u66f4\u6539"),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},".origamidevice")," \u5305"),(0,a.kt)("li",{parentName:"ol"},"Origami Studio \u5c06\u7acb\u5373\u5237\u65b0\u8bbe\u5907")),(0,a.kt)("p",null,"\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8bbe\u5907\u90fd\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/Diamond/Devices")," \u4e2d\u3002\u5982\u679c\u60a8\u5728\u8be5\u6587\u4ef6\u5939\u4e2d\u5df2\u6709\u540c\u540d\u8bbe\u5907\uff0c\u4f1a\u88ab\u66ff\u6362\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b-infojson"},"\u793a\u4f8b info.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "key" : "iPhone4",\n  "displayName" : "iPhone 4",\n  "platform" : "iOS",\n  "type" : "phone",\n  "screenScale" : 2,\n  "screenSize" : [\n    320,\n    480\n  ],\n  "handsImageScale" : 0.5649999999999999,\n  "handsImageOffset" : [\n    2,\n    45\n  ],\n  "handsImages" : [\n    "iPhoneHands.png",\n    "iPhoneHands2.png",\n    "iPhoneHands3.png"\n  ],\n  "deviceInsets" : [\n    130,\n    28,\n    130,\n    28\n  ],\n  "deviceImages" : {\n    "White" : "iPhone4-White.png",\n    "Black" : "iPhone4-Black.png"\n  },\n  "shadowOffset" : [\n    20,\n    -5\n  ],\n  "defaultDeviceOrientation" : "Portrait",\n  "supportsDeviceOrientationPortrait" : true,\n  "supportsDeviceOrientationLandscapeLeft" : true,\n  "supportsDeviceOrientationLandscapeRight" : true,\n  "supportsDeviceOrientationPortraitUpsideDown" : true\n}\n')),(0,a.kt)("h2",{id:"infojson-documentation-infojson-\u6587\u6863"},"info.json Documentation info.json \u6587\u6863"),(0,a.kt)("p",null,"\u8bbe\u5907 info.json \u6587\u4ef6\u7684\u8bb8\u591a\u5c5e\u6027\u90fd\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"../Device/Device%20Info"},"\u8bbe\u5907\u4fe1\u606f")," \u6a21\u5757\u83b7\u53d6\u3002"),(0,a.kt)("h3",{id:"key-\u952e"},(0,a.kt)("inlineCode",{parentName:"h3"},"key")," \u952e"),(0,a.kt)("p",null,"Type: String, Required"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\uff0c\u5fc5\u586b"),(0,a.kt)("p",null,"\u8fd9\u662f\u5305\u4e2d\u6700\u91cd\u8981\u7684\u9879\u76ee\u3002\u5bc6\u94a5\u5c06\u4fdd\u5b58\u5230\u8bbe\u8ba1\u5e08\u7684\u4f5c\u54c1\u4e2d\uff0c\u56e0\u6b64\u4e00\u65e6\u88ab\u8bbe\u7f6e\u5c31\u65e0\u6cd5\u66f4\u6539\u3002\u8be5\u952e\u5e94\u4e0e\u8bbe\u5907\u7684\u5e38\u89c1\u540d\u79f0\u76f8\u5173\uff0c\u4f46\u5982\u679c\u6709\u591a\u79cd\u5c4f\u5e55\u5c3a\u5bf8\u6216\u5206\u8fa8\u7387\uff0c\u5219\u8be5\u7ec4\u5408\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002\u5bc6\u94a5\u4e2d\u4e0d\u5e94\u8be5\u5305\u542b\u8bbe\u5907\u989c\u8272\uff1b\u8fd9\u53ef\u4ee5\u5728\u8bbe\u5907\u56fe\u50cf\u4f53\u73b0\u3002"),(0,a.kt)("h3",{id:"displayname-\u663e\u793a\u540d\u79f0"},(0,a.kt)("inlineCode",{parentName:"h3"},"displayName")," \u663e\u793a\u540d\u79f0"),(0,a.kt)("p",null,"Type: String, Required"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\uff0c\u5fc5\u586b"),(0,a.kt)("p",null,"\u540d\u79f0\u5c06\u663e\u793a\u5728 Studio \u7684\u8bbe\u5907\u9009\u62e9\u83dc\u5355\u4e2d\u3002\u5b83\u53ef\u4ee5\u5728\u4e4b\u540e\u66f4\u6539\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u4fdd\u5b58\u5728\u5408\u6210\u4e2d\u3002"),(0,a.kt)("h3",{id:"screensize-\u5c4f\u5e55\u5c3a\u5bf8"},(0,a.kt)("inlineCode",{parentName:"h3"},"screenSize")," \u5c4f\u5e55\u5c3a\u5bf8"),(0,a.kt)("p",null,"Type: Array of 2 numbers, Required"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a2 \u4e2a\u6570\u5b57\u7684\u6570\u7ec4\uff0c\u5fc5\u586b"),(0,a.kt)("p",null,"\u8bbe\u5907\u663e\u793a\u7684\u5927\u5c0f\uff0c\u4ee5pt/dp\u4e3a\u5355\u4f4d\u3002\u50cf\u7d20\u5927\u5c0f\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"screenSize"),"\u4e58\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"screenScale"),"\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u8bbe\u5907\u4fe1\u606f\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Screen Size \u5c4f\u5e55\u5927\u5c0f"),"\u7aef\u53e3\u5448\u73b0\u7ed9\u5408\u6210\u3002"),(0,a.kt)("h3",{id:"screenscale-\u5c4f\u5e55\u500d\u6570"},(0,a.kt)("inlineCode",{parentName:"h3"},"screenScale")," \u5c4f\u5e55\u500d\u6570"),(0,a.kt)("p",null,"Type: Number, Required"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a2 \u4e2a\u6570\u5b57\u7684\u6570\u7ec4\uff0c\u5fc5\u586b"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u70b9\u6709\u591a\u5c11\u50cf\u7d20\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0ciOS Retina \u5c4f\u5e55\u7684\u6bd4\u4f8b\u901a\u5e38\u4e3a 2.0\u3002 iPhone 6 Plus \u7684\u6bd4\u4f8b\u4e3a 3.0\u3002 Android \u8bbe\u5907\u7684\u6bd4\u4f8b\u8303\u56f4\u662f 0.75 \u5230 4.0\uff0c\u5bf9\u5e94\u4e8e ldpi (0.75) mdpi (1.0)\u3001hdpi (1.5)\u3001xhdpi (2.0)\u3001xxhdpi (3.0) \u548c xxxhdpi (4.0)\u3002"),(0,a.kt)("h3",{id:"type-\u7c7b\u578b"},(0,a.kt)("inlineCode",{parentName:"h3"},"type")," \u7c7b\u578b"),(0,a.kt)("p",null,"Type: String, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u8bbe\u5907\u9009\u62e9\u83dc\u5355\u4e2d\u6b64\u8bbe\u5907\u53ef\u7528\u7684\u83dc\u5355\u9879\u3002\u53ef\u7528\u7c7b\u578b\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"p"},"computer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"phone"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tablet"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tv"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"watch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"custom"),"\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"custom"),"\u3002"),(0,a.kt)("h3",{id:"platform-\u5e73\u53f0"},(0,a.kt)("inlineCode",{parentName:"h3"},"platform")," \u5e73\u53f0"),(0,a.kt)("p",null,"Type: String, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"iOS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Android"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidWear"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WindowsPhone"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Windows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"OSX"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tvOS"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"watchOS")),(0,a.kt)("h3",{id:"mouseinput-\u9f20\u6807\u8f93\u5165"},(0,a.kt)("inlineCode",{parentName:"h3"},"mouseInput")," \u9f20\u6807\u8f93\u5165"),(0,a.kt)("p",null,"Type: Boolean, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5e03\u5c14\u503c\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u6b64\u8bbe\u5907\u662f\u5426\u4f7f\u7528\u9f20\u6807\u6216\u89e6\u63a7\u677f\u8fdb\u884c\u8f93\u5165"),(0,a.kt)("h3",{id:"viewerwindownative-\u67e5\u770b\u672c\u673a\u7a97\u53e3"},(0,a.kt)("inlineCode",{parentName:"h3"},"viewerWindowNative")," \u67e5\u770b\u672c\u673a\u7a97\u53e3"),(0,a.kt)("p",null,"Type: Boolean, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5e03\u5c14\u503c\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u5f53\u5f39\u51fa\u81ea\u5df1\u7684\u7a97\u53e3\u65f6\uff0c\u8bbe\u5907\u662f\u5426\u4f7f\u7528\u672c\u673a mac \u7a97\u53e3\u6765\u663e\u793a\u3002\u7136\u540e\u5c4f\u5e55\u5927\u5c0f\u53ef\u4ee5\u81ea\u7531\u8c03\u6574\u3002"),(0,a.kt)("h3",{id:"deviceinsets-\u8bbe\u5907\u63d2\u4ef6"},(0,a.kt)("inlineCode",{parentName:"h3"},"deviceInsets")," \u8bbe\u5907\u63d2\u4ef6"),(0,a.kt)("p",null,"Type: Array of 4 Numbers, Required"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a4 \u4e2a\u6570\u5b57\u7684\u6570\u7ec4\uff0c\u5fc5\u586b"),(0,a.kt)("p",null,"\u63cf\u8ff0\u8bbe\u5907\u5468\u56f4\u7684\u8ddd\u79bb\u3002\u5f71\u54cd\u9634\u5f71\u7684\u8bbe\u8ba1\u65b9\u5f0f\u4ee5\u53ca\u8bbe\u5907\u76f8\u5bf9\u4e8e\u5305\u542b\u89c6\u56fe\u6846\u67b6\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("h3",{id:"shadowoffset-\u9634\u5f71\u504f\u79fb"},(0,a.kt)("inlineCode",{parentName:"h3"},"shadowOffset")," \u9634\u5f71\u504f\u79fb"),(0,a.kt)("p",null,"Type: Array of 2 Numbers, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a2 \u4e2a\u6570\u5b57\u7684\u6570\u7ec4\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u5185\u7f6e\u9634\u5f71\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u975e\u96f6\u503c\uff0c\u4f60\u5c31\u53ef\u4ee5\u76f8\u5bf9\u4e8e\u8bbe\u5907\u5b9a\u4f4d\u9634\u5f71\u3002"),(0,a.kt)("h3",{id:"deviceimages-\u8bbe\u5907\u56fe\u50cf"},(0,a.kt)("inlineCode",{parentName:"h3"},"deviceImages")," \u8bbe\u5907\u56fe\u50cf"),(0,a.kt)("p",null,"Type: Dictionary of Strings to Strings"),(0,a.kt)("p",null,"\u5b57\u5178\u4e2d\u7684\u952e\u63cf\u8ff0\u4e86\u8bbe\u5907\u53ef\u7528\u7684\u989c\u8272\uff0c\u503c\u662f\u5305\u4e2d .png \u6587\u4ef6\u7684\u540d\u79f0\uff0c\u5c06\u5728 Origami Studio \u4e2d\u663e\u793a\u7b26\u5408\u7684\u8bbe\u5907\u6846\u67b6\u3002"),(0,a.kt)("h3",{id:"deviceimageoffset-\u8bbe\u5907\u56fe\u50cf\u504f\u79fb"},(0,a.kt)("inlineCode",{parentName:"h3"},"deviceImageOffset")," \u8bbe\u5907\u56fe\u50cf\u504f\u79fb"),(0,a.kt)("p",null,"Type: Array of 2 Numbers, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a2 \u4e2a\u6570\u5b57\u7684\u6570\u7ec4\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u8bbe\u5907\u56fe\u50cf\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u504f\u79fb\u591a\u5c11"),(0,a.kt)("h3",{id:"deviceimagescale-\u8bbe\u5907\u56fe\u7247\u7f29\u653e"},(0,a.kt)("inlineCode",{parentName:"h3"},"deviceImageScale")," \u8bbe\u5907\u56fe\u7247\u7f29\u653e"),(0,a.kt)("p",null,"Type: Number, Required if deviceImages is used"),(0,a.kt)("p",null,"\u7c7b\u578b\u3002\u6570\u5b57\uff0c\u5982\u679c\u4f7f\u7528\u8bbe\u5907\u56fe\u50cf\u5219\u5fc5\u586b"),(0,a.kt)("p",null,"\u4e0e\u5c4f\u5e55\u76f8\u6bd4\uff0c\u8bbe\u5907\u56fe\u50cf\u653e\u5927\u6216\u7f29\u5c0f\u591a\u5c11"),(0,a.kt)("h3",{id:"deviceoverlayimages-\u8bbe\u5907\u56fe\u7247\u53e0\u52a0"},(0,a.kt)("inlineCode",{parentName:"h3"},"deviceOverlayImages")," \u8bbe\u5907\u56fe\u7247\u53e0\u52a0"),(0,a.kt)("p",null,"Type: Dictionary of Strings to Strings"),(0,a.kt)("p",null,"\u4e3a\u90e8\u5206\u5c4f\u5e55\u88ab\u906e\u6321\u7684\u8bbe\u5907\uff08\u4f8b\u5982\u4e09\u661f Galaxy S8 \u6216 iPhone X\uff09\u53e0\u52a0\u56fe\u50cf\u3002\u6309\u952e\u9700\u8981\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"deviceImages"),"\u4e2d\u63d0\u4f9b\u7684\u989c\u8272\u76f8\u5339\u914d\uff0c\u5e76\u4e14\u56fe\u50cf\u5927\u5c0f\u5fc5\u987b\u76f8\u540c\u3002"),(0,a.kt)("h3",{id:"handsimageoffset-\u624b\u52bf\u56fe\u7247\u504f\u79fb"},(0,a.kt)("inlineCode",{parentName:"h3"},"handsImageOffset")," \u624b\u52bf\u56fe\u7247\u504f\u79fb"),(0,a.kt)("p",null,"Type: Array of 2 Numbers, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a2 \u4e2a\u6570\u5b57\u7684\u6570\u7ec4\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u624b\u90e8\u56fe\u50cf\u4e0e\u8bbe\u5907\u56fe\u50cf\u7684\u504f\u79fb\u91cf"),(0,a.kt)("h3",{id:"handsimagescale-\u624b\u52bf\u56fe\u7247\u7f29\u653e"},(0,a.kt)("inlineCode",{parentName:"h3"},"handsImageScale")," \u624b\u52bf\u56fe\u7247\u7f29\u653e"),(0,a.kt)("p",null,"Type: Float, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u6d6e\u52a8\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u4e0e\u5c4f\u5e55\u76f8\u6bd4\uff0c\u624b\u5f62\u56fe\u50cf\u6bd4\u4f8b\u591a\u5c11"),(0,a.kt)("h3",{id:"handsimages-\u624b\u52bf\u56fe\u7247"},(0,a.kt)("inlineCode",{parentName:"h3"},"handsImages")," \u624b\u52bf\u56fe\u7247"),(0,a.kt)("p",null,"Type: Array of Strings, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684\u6bcf\u4e2a\u6761\u76ee\u90fd\u5e94\u8be5\u5f15\u7528\u8bbe\u5907\u5305\u4e2d\u63d0\u4f9b\u7684\u624b\u5f62\u56fe\u50cf\u3002"),(0,a.kt)("h3",{id:"handsontop-\u624b\u5728\u524d\u9762"},(0,a.kt)("inlineCode",{parentName:"h3"},"handsOnTop")," \u624b\u5728\u524d\u9762"),(0,a.kt)("p",null,"Type: Boolean, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5e03\u5c14\u503c\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u624b\u662f\u5426\u5728\u8bbe\u5907\u9876\u90e8\u3002\u4e00\u822c\u7528\u4e8e\u624b\u6301 iPad \u5927\u5c4f\u5e55\u8fd9\u6837\u62c7\u6307\u7ecf\u5e38\u653e\u5728\u9876\u90e8\u7684\u8bbe\u5907\u3002"),(0,a.kt)("h3",{id:"defaultdeviceorientation-\u9ed8\u8ba4\u8bbe\u5907\u65b9\u5411"},(0,a.kt)("inlineCode",{parentName:"h3"},"defaultDeviceOrientation")," \u9ed8\u8ba4\u8bbe\u5907\u65b9\u5411"),(0,a.kt)("p",null,"Type: String, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5b57\u7b26\u4e32\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u6839\u636e\u63d0\u4f9b\u7684\u5c4f\u5e55\u5927\u5c0f\u548c\u8bbe\u5907\u56fe\u7247\u663e\u793a\u8bbe\u5907\u7684\u9ed8\u8ba4\u65b9\u5411\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8bbe\u5907\u662f\u6a2a\u5411\u7684\u7535\u89c6\u6216\u5e73\u677f\u7535\u8111\uff0c\u5219\u8be5\u503c\u5e94\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"LandscapeLeft"),"\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"LandscapeRight"),"\u3002\u53ef\u7528\u7684\u65b9\u5411\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Portrait"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LandscapeLeft"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LandscapeRight"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PortraitUpsideDown"),".\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Portrait"),"\u3002"),(0,a.kt)("h3",{id:"supportsdeviceorientationportrait\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411"},(0,a.kt)("inlineCode",{parentName:"h3"},"supportsDeviceOrientationPortrait"),"\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411,"),(0,a.kt)("h3",{id:"supportsdeviceorientationlandscapeleft\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u5de6"},(0,a.kt)("inlineCode",{parentName:"h3"},"supportsDeviceOrientationLandscapeLeft"),"\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u5de6,"),(0,a.kt)("h3",{id:"supportsdeviceorientationlandscaperight\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u53f3"},(0,a.kt)("inlineCode",{parentName:"h3"},"supportsDeviceOrientationLandscapeRight"),"\u652f\u6301\u8bbe\u5907\u65b9\u5411\u6a2a\u5411\u5411\u53f3,"),(0,a.kt)("h3",{id:"supportsdeviceorientationportraitupsidedown\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411\u5012\u7f6e"},(0,a.kt)("inlineCode",{parentName:"h3"},"supportsDeviceOrientationPortraitUpsideDown"),"\u652f\u6301\u8bbe\u5907\u65b9\u5411\u7eb5\u5411\u5012\u7f6e"),(0,a.kt)("p",null,"Type: Boolean, Optional"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a\u5e03\u5c14\u503c\uff0c\u53ef\u9009"),(0,a.kt)("p",null,"\u8bbe\u5907\u65cb\u8f6c\u652f\u6301\u7684\u754c\u9762\u65b9\u5411\u3002"))}c.isMDXComponent=!0}}]);