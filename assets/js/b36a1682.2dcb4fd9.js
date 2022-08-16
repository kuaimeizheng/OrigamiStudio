"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[14008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},i="Interaction \u4ea4\u4e92",c={unversionedId:"documentation/Interaction/Interaction",id:"documentation/Interaction/Interaction",title:"Interaction \u4ea4\u4e92",description:"Capture touch events on specific layers. Note that layers must be enabled and have an opacity larger than 0 to receive touches.",source:"@site/docs/documentation/Interaction/Interaction.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/",permalink:"/OrigamiStudio/docs/documentation/Interaction/",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Interaction.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660657655,formattedLastUpdatedAt:"2022\u5e748\u670816\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Hover \u60ac\u505c",permalink:"/OrigamiStudio/docs/documentation/Interaction/Hover"},next:{title:"Keyboard \u952e\u76d8",permalink:"/OrigamiStudio/docs/documentation/Interaction/Keyboard"}},l={},u=[{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:3},{value:"Tap \u8f7b\u6309###",id:"tap-\u8f7b\u6309",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Force \u538b\u529b",id:"force-\u538b\u529b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interaction-\u4ea4\u4e92"},"Interaction \u4ea4\u4e92"),(0,r.kt)("p",null,"Capture touch events on specific layers. Note that layers must be enabled and have an opacity larger than 0 to receive touches."),(0,r.kt)("p",null,"\u6355\u83b7\u6307\u5b9a\u56fe\u5c42\u4e0a\u7684\u89e6\u6478\u4e8b\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u56fe\u5c42\u5fc5\u987b\u542f\u7528\u5e76\u4e14\u4e0d\u900f\u660e\u5ea6\u5927\u4e8e 0 \u624d\u80fd\u63a5\u6536\u89e6\u6478\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"Detect ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Double%20Tap"},"Double Tap")," or ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Long%20Press"},"Long Press")," with additional patches."),(0,r.kt)("p",null,"\u9700\u4f7f\u7528\u989d\u5916\u7684\u6a21\u5757\u68c0\u6d4b Double Tap \u6216\u8005 Long Press\u3002"),(0,r.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,r.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch\u89e6\u6478 \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(70115).Z,width:"766",height:"158"})),(0,r.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,r.kt)("p",null,"The layer to check for touch interactions. When no layer is specified, the touches on the whole screen are registered."),(0,r.kt)("p",null,"\u68c0\u67e5\u89e6\u6478\u4ea4\u4e92\u7684\u56fe\u5c42\u3002\u5f53\u6ca1\u6709\u6307\u5b9a\u56fe\u5c42\u65f6\uff0c\u89e6\u6478\u5c06\u4f1a\u4f5c\u7528\u5728\u6574\u4e2a\u5c4f\u5e55\u4e0a\u3002"),(0,r.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,r.kt)("p",null,"A boolean that is true when touch detection is on. To disable interactions on this layer, disable it."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u89e6\u6478\u68c0\u6d4b\u542f\u7528\u65f6\u4e3a\u771f\u3002\u8981\u7981\u7528\u6b64\u56fe\u5c42\u4e0a\u7684\u4ea4\u4e92\uff0c\u8bf7\u7981\u7528\u5b83\u3002"),(0,r.kt)("h3",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,r.kt)("p",null,"A boolean that is true when there is a touch on the layer."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u56fe\u5c42\u4e0a\u6709\u89e6\u6478\u65f6\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"tap-\u8f7b\u6309"},"Tap \u8f7b\u6309###"),(0,r.kt)("p",null,"A pulse that represents the moment a touch has been released from the layer (touch up) as long as the touch is inside of the layer and hasn\u2019t moved."),(0,r.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u89e6\u6478\u5728\u56fe\u5c42\u4e0a\u6ca1\u6709\u79fb\u52a8\uff0c\u5e76\u4e14\u5728\u56fe\u5c42\u4e0a\u91ca\u653e\u89e6\u6478\u7684\u90a3\u4e00\u523b\u3002"),(0,r.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,r.kt)("p",null,"The position of the touch, relative to the center of the layer\u2019s parent group or device"),(0,r.kt)("p",null,"\u89e6\u6478\u7684\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u7236\u7ec4\u6216\u8bbe\u5907\u7684\u4e2d\u5fc3\u3002"),(0,r.kt)("h3",{id:"force-\u538b\u529b"},"Force \u538b\u529b"),(0,r.kt)("p",null,"A number between 0 and 6.67 that represents the force of the touch."),(0,r.kt)("p",null,"\u4e00\u4e2a\u4ecb\u4e8e 0 \u5230 6.67 \u4e4b\u95f4\u7684\u6570\u503c\uff0c\u8868\u793a\u89e6\u6478\u7684\u529b\u5ea6\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Hover"},"Hover \u60ac\u505c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Double%20Tap"},"Double Tap \u53cc\u51fb")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Long%20Press"},"Long Press \u957f\u6309")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Gesture"},"Gesture \u624b\u52bf")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Touches"},"Touches \u89e6\u6478")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")))}p.isMDXComponent=!0},70115:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/interaction-178bed95795a5c233bb54ca1f6e585ed.png"}}]);