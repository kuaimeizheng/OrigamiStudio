"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2452],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(o),m=i,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||r;return o?n.createElement(f,a(a({ref:t},d),{},{components:o})):n.createElement(f,a({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},3405:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],l={sidebar_position:2},c="QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",u={unversionedId:"documentation/Utility/QR Code Detection",id:"documentation/Utility/QR Code Detection",title:"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",description:"Detect QR codes in a still image, video or, from a camera stream.",source:"@site/docs/documentation/Utility/QR Code Detection.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/QR Code Detection",permalink:"/OrigamiStudio/docs/documentation/Utility/QR Code Detection",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/QR Code Detection.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659373767,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Pulse \u8109\u51b2",permalink:"/OrigamiStudio/docs/documentation/Utility/Pulse"},next:{title:"Random \u968f\u673a",permalink:"/OrigamiStudio/docs/documentation/Utility/Random"}},d={},p=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Quality \u8d28\u91cf",id:"quality-\u8d28\u91cf",level:3},{value:"QR Detected \u4e8c\u7ef4\u7801\u68c0\u6d4b",id:"qr-detected-\u4e8c\u7ef4\u7801\u68c0\u6d4b",level:3},{value:"Message \u6d88\u606f",id:"message-\u6d88\u606f",level:3},{value:"Top Left \u5de6\u4e0a\u65b9",id:"top-left-\u5de6\u4e0a\u65b9",level:3},{value:"Top Right \u53f3\u4e0a\u65b9",id:"top-right-\u53f3\u4e0a\u65b9",level:3},{value:"Bottom Left \u5de6\u4e0b\u65b9",id:"bottom-left-\u5de6\u4e0b\u65b9",level:3},{value:"Bottom Right \u53f3\u4e0b\u65b9",id:"bottom-right-\u53f3\u4e0b\u65b9",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"qr-code-detection-\u4e8c\u7ef4\u7801\u68c0\u6d4b"},"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b"),(0,r.kt)("p",null,"Detect QR codes in a still image, video or, from a camera stream."),(0,r.kt)("p",null,"\u68c0\u6d4b\u9759\u6b62\u56fe\u50cf\u3001\u89c6\u9891\u6216\u6444\u50cf\u673a\u6d41\u4e2d\u7684\u4e8c\u7ef4\u7801\u3002"),(0,r.kt)("p",null,"All the outputs are loops of the same size; and the indices of each loop matches with every other output. For example, Top Left ","[2]"," and Bottom Right ","[2]"," both correspond to the same QR code at index 3."),(0,r.kt)("p",null,"\u6240\u6709\u8f93\u51fa\u90fd\u662f\u76f8\u540c\u5927\u5c0f\u7684\u5faa\u73af\uff1b\u5e76\u4e14\u6bcf\u4e2a\u5faa\u73af\u7684\u7d22\u5f15\u4e0e\u5176\u4ed6\u6240\u6709\u8f93\u51fa\u5339\u914d\u3002\u4f8b\u5982\uff0c\u5de6\u4e0a ","[2]"," \u548c\u53f3\u4e0b ","[2]"," \u90fd\u5bf9\u5e94\u7d22\u5f15 3 \u5904\u7684\u76f8\u540c\u4e8c\u7ef4\u7801\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(86269).Z,width:"1468",height:"348"})),(0,r.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,r.kt)("p",null,"A Boolean value that is true when detection is enabled."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u542f\u7528\u68c0\u6d4b\u65f6\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,r.kt)("p",null,"An Image or Video layer to search for QR codes."),(0,r.kt)("p",null,"\u7528\u4e8e\u641c\u7d22 QR \u7801\u7684\u56fe\u50cf\u6216\u89c6\u9891\u5c42\u3002"),(0,r.kt)("h3",{id:"quality-\u8d28\u91cf"},"Quality \u8d28\u91cf"),(0,r.kt)("p",null,"Specify the accuracy of the detection. A High quality requires more processing time."),(0,r.kt)("p",null,"\u6307\u5b9a\u68c0\u6d4b\u7684\u51c6\u786e\u6027\u3002 \u9ad8\u8d28\u91cf\u9700\u8981\u66f4\u591a\u7684\u5904\u7406\u65f6\u95f4\u3002"),(0,r.kt)("h3",{id:"qr-detected-\u4e8c\u7ef4\u7801\u68c0\u6d4b"},"QR Detected \u4e8c\u7ef4\u7801\u68c0\u6d4b"),(0,r.kt)("p",null,"A Boolean value that is true when at least one QR code has been detected."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u81f3\u5c11\u68c0\u6d4b\u5230\u4e00\u4e2a\u4e8c\u7ef4\u7801\u65f6\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"message-\u6d88\u606f"},"Message \u6d88\u606f"),(0,r.kt)("p",null,"A Loop of Texts with the messages decoded for each detected QR code."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5faa\u73af\uff0c\u5176\u4e2d\u5305\u542b\u4e3a\u6bcf\u4e2a\u68c0\u6d4b\u5230\u7684\u4e8c\u7ef4\u7801\u7801\u89e3\u7801\u7684\u6d88\u606f\u3002"),(0,r.kt)("h3",{id:"top-left-\u5de6\u4e0a\u65b9"},"Top Left \u5de6\u4e0a\u65b9"),(0,r.kt)("p",null,"A Loop of positions for the top left corner."),(0,r.kt)("p",null,"\u5de6\u4e0a\u89d2\u7684\u4f4d\u7f6e\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"top-right-\u53f3\u4e0a\u65b9"},"Top Right \u53f3\u4e0a\u65b9"),(0,r.kt)("p",null,"A Loop of positions for the top right corner."),(0,r.kt)("p",null,"\u53f3\u4e0a\u89d2\u7684\u4f4d\u7f6e\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"bottom-left-\u5de6\u4e0b\u65b9"},"Bottom Left \u5de6\u4e0b\u65b9"),(0,r.kt)("p",null,"A Loop of positions for the bottom left corner."),(0,r.kt)("p",null,"\u5de6\u4e0b\u89d2\u7684\u4f4d\u7f6e\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"bottom-right-\u53f3\u4e0b\u65b9"},"Bottom Right \u53f3\u4e0b\u65b9"),(0,r.kt)("p",null,"A Loop of positions for the bottom right corner."),(0,r.kt)("p",null,"\u53f3\u4e0b\u89d2\u7684\u4f4d\u7f6e\u5faa\u73af\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Face%20Detection"},"Face Detection \u4eba\u8138\u68c0\u6d4b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Object%20Detection"},"Object Detection \u76ee\u6807\u68c0\u6d4b")))}m.isMDXComponent=!0},86269:function(e,t,o){t.Z=o.p+"assets/images/qr-code-detection-e02db224f7184b631bb9abb8868290ce.png"}}]);