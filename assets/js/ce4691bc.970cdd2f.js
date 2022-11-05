"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[85755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||s[f]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={title:"Interface Orientation \u754c\u9762\u65b9\u5411",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Interface Orientation \u754c\u9762\u65b9\u5411",c={unversionedId:"documentation/Device/Interface Orientation",id:"documentation/Device/Interface Orientation",title:"Interface Orientation \u754c\u9762\u65b9\u5411",description:"Define how the prototype\u2019s interface reacts to rotation of the device. Different phones, laptops or tablets can have different set of supported interface orientations. Use the Device Info patch to get the physical orientation of a connected device in angles.",source:"@site/docs/documentation/Device/Interface Orientation.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Interface Orientation",permalink:"/OrigamiStudio/docs/documentation/Device/Interface Orientation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Interface Orientation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Interface Orientation \u754c\u9762\u65b9\u5411",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Haptic \u89e6\u89c9",permalink:"/OrigamiStudio/docs/documentation/Device/Haptic"},next:{title:"Location \u4f4d\u7f6e",permalink:"/OrigamiStudio/docs/documentation/Device/Location"}},l={},d=[{value:"Start In \u5f00\u59cb\u4e8e",id:"start-in-\u5f00\u59cb\u4e8e",level:3},{value:"Portrait \u7eb5\u5411",id:"portrait-\u7eb5\u5411",level:3},{value:"Landscape Left \u5de6\u6a2a\u5411",id:"landscape-left-\u5de6\u6a2a\u5411",level:3},{value:"Landscape Right \u53f3\u6a2a\u5411",id:"landscape-right-\u53f3\u6a2a\u5411",level:3},{value:"Upside Down \u98a0\u5012",id:"upside-down-\u98a0\u5012",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-orientation-\u754c\u9762\u65b9\u5411"},"Interface Orientation \u754c\u9762\u65b9\u5411"),(0,r.kt)("p",null,"Define how the prototype\u2019s interface reacts to rotation of the device. Different phones, laptops or tablets can have different set of supported interface orientations. Use the ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Info"},"Device Info")," patch to get the physical orientation of a connected device in angles."),(0,r.kt)("p",null,"\u63a7\u5236\u539f\u578b\u754c\u9762\u5982\u4f55\u54cd\u5e94\u8bbe\u5907\u7684\u65cb\u8f6c\u3002\u4e0d\u540c\u7684\u624b\u673a\u3001\u7b14\u8bb0\u672c\u7535\u8111\u6216\u5e73\u677f\u7535\u8111\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u652f\u6301\u754c\u9762\u65b9\u5411\u3002\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Info"},"Device Info")," \u53ef\u4ee5\u4ece\u591a\u4e2a\u89d2\u5ea6\u83b7\u53d6\u8fde\u63a5\u8bbe\u5907\u7684\u7269\u7406\u65b9\u5411\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(68419).Z,width:"1600",height:"386"})),(0,r.kt)("h3",{id:"start-in-\u5f00\u59cb\u4e8e"},"Start In \u5f00\u59cb\u4e8e"),(0,r.kt)("p",null,"The interface orientation to be shown when the prototype starts or restarts. Can be Portrait, Landscape Reft, Landscape Left or Upside Down. If the current device doesn\u2019t support this orientation, it will use its default orientation instead."),(0,r.kt)("p",null,"\u539f\u578b\u542f\u52a8\u6216\u91cd\u65b0\u542f\u52a8\u65f6\u754c\u9762\u7684\u663e\u793a\u65b9\u5411\u3002\u53ef\u4ee5\u662f\u7eb5\u5411\u3001\u5411\u53f3\u6a2a\u5411\u3001\u5411\u5de6\u6a2a\u5411\u6216\u5012\u7f6e\u3002\u5982\u679c\u5f53\u524d\u8bbe\u5907\u4e0d\u652f\u6301\u6b64\u65b9\u5411\uff0c\u5b83\u5c06\u4f7f\u7528\u5176\u9ed8\u8ba4\u65b9\u5411\u3002"),(0,r.kt)("h3",{id:"portrait-\u7eb5\u5411"},"Portrait \u7eb5\u5411"),(0,r.kt)("p",null,"A boolean indicating whether the interface will rotate when device is rotated to the portrait orientation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u8bbe\u5907\u65cb\u8f6c\u5230\u7eb5\u5411\u65f6\uff0c\u754c\u9762\u662f\u5426\u4f1a\u65cb\u8f6c\u3002"),(0,r.kt)("h3",{id:"landscape-left-\u5de6\u6a2a\u5411"},"Landscape Left \u5de6\u6a2a\u5411"),(0,r.kt)("p",null,"A boolean indicating whether the interface will rotate when device is rotated to the left landscape orientation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u8bbe\u5907\u5411\u5de6\u6a2a\u5411\u65cb\u8f6c\u65f6\uff0c\u754c\u9762\u662f\u5426\u4f1a\u65cb\u8f6c\u3002"),(0,r.kt)("h3",{id:"landscape-right-\u53f3\u6a2a\u5411"},"Landscape Right \u53f3\u6a2a\u5411"),(0,r.kt)("p",null,"A boolean indicating whether the interface will rotate when device is rotated to the right landscape orientation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u8bbe\u5907\u5411\u53f3\u6a2a\u5411\u65cb\u8f6c\u65f6\uff0c\u754c\u9762\u662f\u5426\u4f1a\u65cb\u8f6c\u3002"),(0,r.kt)("h3",{id:"upside-down-\u98a0\u5012"},"Upside Down \u98a0\u5012"),(0,r.kt)("p",null,"A boolean indicating whether the interface will rotate when device is rotated to the upside down orientation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u8bbe\u5907\u65cb\u8f6c\u65b9\u5411\u98a0\u5012\u65f6\u754c\u9762\u662f\u5426\u4f1a\u65cb\u8f6c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Info"},"Device Info \u8bbe\u5907\u4fe1\u606f")))}s.isMDXComponent=!0},68419:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/interface-orientation-7323f2568b0e0caad40ce1caa8b2a9c8.png"}}]);