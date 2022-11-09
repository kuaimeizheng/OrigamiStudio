"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[61702],{3905:(t,e,i)=>{i.d(e,{Zo:()=>d,kt:()=>m});var n=i(67294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},d=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=u(i),m=a,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||o;return i?n.createElement(f,r(r({ref:e},d),{},{components:i})):n.createElement(f,r({ref:e},d))}));function m(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,r=new Array(o);r[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,r[1]=p;for(var u=2;u<o;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},76112:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const o={sidebar_position:5},r="Notification \u901a\u77e5",p={unversionedId:"documentation/iOS/Notification",id:"documentation/iOS/Notification",title:"Notification \u901a\u77e5",description:"A pushed iOS notification with customizable app information and messaging.",source:"@site/docs/documentation/iOS/Notification.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Notification",permalink:"/OrigamiStudio/docs/documentation/iOS/Notification",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Notification.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Navigation Bar \u5bfc\u822a\u680f",permalink:"/OrigamiStudio/docs/documentation/iOS/Navigation Bar"},next:{title:"Page Control \u5206\u9875\u63a7\u5236\u5668",permalink:"/OrigamiStudio/docs/documentation/iOS/Page Control"}},l={},u=[{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Dismiss \u6d88\u5931",id:"dismiss-\u6d88\u5931",level:3},{value:"App Icon App\u56fe\u6807",id:"app-icon-app\u56fe\u6807",level:3},{value:"App Name App\u540d\u79f0",id:"app-name-app\u540d\u79f0",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Body text \u6b63\u6587\u6587\u672c",id:"body-text-\u6b63\u6587\u6587\u672c",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"Notification Tapped \u5df2\u70b9\u51fb\u901a\u77e5",id:"notification-tapped-\u5df2\u70b9\u51fb\u901a\u77e5",level:3},{value:"Play Sound \u64ad\u653e\u58f0\u97f3",id:"play-sound-\u64ad\u653e\u58f0\u97f3",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:u};function c(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notification-\u901a\u77e5"},"Notification \u901a\u77e5"),(0,a.kt)("p",null,"A pushed iOS notification with customizable app information and messaging."),(0,a.kt)("p",null,"\u63a8\u9001iOS\u901a\u77e5\uff0c\u5e26\u6709\u53ef\u5b9a\u5236\u7684\u5e94\u7528\u7a0b\u5e8f\u4fe1\u606f\u548c\u6d88\u606f\u3002"),(0,a.kt)("p",null,"Use the Touch button on the component to capture when the notification was tapped."),(0,a.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684Touch\u6309\u94ae\u6765\u6355\u83b7\u4f55\u65f6\u70b9\u51fb\u901a\u77e5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:i(72048).Z,width:"1544",height:"386"})),(0,a.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,a.kt)("p",null,"A pulse that displays the notification."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u51fa\u73b0\u901a\u77e5\u3002"),(0,a.kt)("h3",{id:"dismiss-\u6d88\u5931"},"Dismiss \u6d88\u5931"),(0,a.kt)("p",null,"A pulse that hides the notification."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u9690\u85cf\u901a\u77e5\u3002"),(0,a.kt)("h3",{id:"app-icon-app\u56fe\u6807"},"App Icon App\u56fe\u6807"),(0,a.kt)("p",null,"An image representing the icon of the app that is delivering the notification."),(0,a.kt)("p",null,"\u8868\u793a\u6b63\u5728\u53d1\u9001\u901a\u77e5\u7684\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807\u7684\u56fe\u50cf\u3002"),(0,a.kt)("h3",{id:"app-name-app\u540d\u79f0"},"App Name App\u540d\u79f0"),(0,a.kt)("p",null,"A text string that displays the name of the app that is delivering the notification."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u53d1\u9001\u901a\u77e5\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u540d\u79f0\u3002"),(0,a.kt)("h3",{id:"title-\u6807\u9898"},"Title \u6807\u9898"),(0,a.kt)("p",null,"A text string that displays the subject."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u7528\u6765\u663e\u793a\u6807\u9898\u3002"),(0,a.kt)("h3",{id:"body-text-\u6b63\u6587\u6587\u672c"},"Body text \u6b63\u6587\u6587\u672c"),(0,a.kt)("p",null,"A text string that displays more information."),(0,a.kt)("p",null,"\u663e\u793a\u66f4\u591a\u4fe1\u606f\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h3",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,a.kt)("p",null,"The type of notification: temporary, persistent."),(0,a.kt)("p",null,"\u901a\u77e5\u7684\u7c7b\u578b\uff1a\u4e34\u65f6\u7684\u3001\u6301\u4e45\u7684\u3002"),(0,a.kt)("h3",{id:"notification-tapped-\u5df2\u70b9\u51fb\u901a\u77e5"},"Notification Tapped \u5df2\u70b9\u51fb\u901a\u77e5"),(0,a.kt)("p",null,"A pulse that represents when the notification is tapped."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u4f55\u65f6\u70b9\u51fb\u901a\u77e5\u3002"),(0,a.kt)("h3",{id:"play-sound-\u64ad\u653e\u58f0\u97f3"},"Play Sound \u64ad\u653e\u58f0\u97f3"),(0,a.kt)("p",null,"A pulse that connects to a sound player or sound kit to play a sound when a notification occurs."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8fde\u63a5\u5230\u58f0\u97f3\u64ad\u653e\u5668\u6216\u58f0\u97f3\u8bbe\u5907\uff0c\u4ee5\u5728\u53d1\u751f\u901a\u77e5\u65f6\u64ad\u653e\u58f0\u97f3\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}c.isMDXComponent=!0},72048:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/notification-faf252941024087b3bf7512bd2746d63.png"}}]);