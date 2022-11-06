"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[49741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},o="Screen \u5c4f\u5e55",l={unversionedId:"documentation/iOS/Screen",id:"documentation/iOS/Screen",title:"Screen \u5c4f\u5e55",description:"A group component with realistic iOS-style push and modal transitions. Add any layer inside the screen.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/iOS/Screen.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Screen",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Screen",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Screen.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667730725,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Page Control \u5206\u9875\u63a7\u5236\u5668",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Page Control"},next:{title:"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Segmented Control"}},s={},d=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Dismiss \u6d88\u5931",id:"dismiss-\u6d88\u5931",level:3},{value:"Transition \u8fc7\u6e21",id:"transition-\u8fc7\u6e21",level:3},{value:"Start State \u5f00\u59cb\u72b6\u6001",id:"start-state-\u5f00\u59cb\u72b6\u6001",level:3},{value:"Edge Swipe \u8fb9\u7f18\u6ed1\u52a8",id:"edge-swipe-\u8fb9\u7f18\u6ed1\u52a8",level:3},{value:"X Offset X\u4f4d\u79fb",id:"x-offset-x\u4f4d\u79fb",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Presented \u5df2\u51fa\u73b0",id:"presented-\u5df2\u51fa\u73b0",level:3},{value:"X Offset",id:"x-offset",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"screen-\u5c4f\u5e55"},"Screen \u5c4f\u5e55"),(0,r.kt)("p",null,"A group component with realistic iOS-style push and modal transitions. Add any layer inside the screen."),(0,r.kt)("p",null,"\u5177\u6709\u73b0\u5b9eiOS\u5f0f\u63a8\u9001\u548c\u6a21\u6001\u8f6c\u6362\u7684\u7ec4\u7ec4\u4ef6\u3002\u5728\u5c4f\u5e55\u5185\u6dfb\u52a0\u4efb\u4f55\u56fe\u5c42\u3002"),(0,r.kt)("p",null,"Use the Touch button on the component to get information about the screen\u2019s presentation status."),(0,r.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u6709\u5173\u5c4f\u5e55\u7684\u6f14\u793a\u72b6\u6001\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(81784).Z,width:"1550",height:"380"})),(0,r.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,r.kt)("p",null,"A boolean that is true when the screen is displayed."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5728\u663e\u793a\u5c4f\u5e55\u65f6\uff0c\u5e03\u5c14\u503c\u662f\u771f\u3002"),(0,r.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,r.kt)("p",null,"A pulse that presents the screen by animating it in."),(0,r.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u89e6\u53d1\u5c4f\u5e55\u5165\u573a\u52a8\u753b\u3002"),(0,r.kt)("h3",{id:"dismiss-\u6d88\u5931"},"Dismiss \u6d88\u5931"),(0,r.kt)("p",null,"A pulse that dismisses the screen by animating it out."),(0,r.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u89e6\u53d1\u5c4f\u5e55\u6d88\u5931\u52a8\u753b\u3002"),(0,r.kt)("h3",{id:"transition-\u8fc7\u6e21"},"Transition \u8fc7\u6e21"),(0,r.kt)("p",null,"The animation style: Push or Modal."),(0,r.kt)("p",null,"\u52a8\u753b\u98ce\u683c\uff1a\u63a8\u8fdb\u6216\u6a21\u6001\u3002"),(0,r.kt)("h3",{id:"start-state-\u5f00\u59cb\u72b6\u6001"},"Start State \u5f00\u59cb\u72b6\u6001"),(0,r.kt)("p",null,"The starting position: Dismissed or Presented."),(0,r.kt)("p",null,"\u5f00\u59cb\u4f4d\u7f6e:\u6d88\u5931\u6216\u51fa\u73b0\u3002"),(0,r.kt)("h3",{id:"edge-swipe-\u8fb9\u7f18\u6ed1\u52a8"},"Edge Swipe \u8fb9\u7f18\u6ed1\u52a8"),(0,r.kt)("p",null,"A boolean that is true when edge-swiping is enabled."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u542f\u7528\u8fb9\u7f18\u6ed1\u52a8\u65f6\u4e3a true \u3002"),(0,r.kt)("h3",{id:"x-offset-x\u4f4d\u79fb"},"X Offset X\u4f4d\u79fb"),(0,r.kt)("p",null,"A number that represents the horizontal offset of the screen."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u5c4f\u5e55\u7684\u6c34\u5e73\u504f\u79fb\u91cf\u3002"),(0,r.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,r.kt)("p",null,"A progress value that represents presentation (0 for dismissed, 1 for presented). Used to synchronize other animations."),(0,r.kt)("p",null,"\u8868\u793a\u5c55\u793a\u7684\u8fdb\u5ea6\u503c(0\u8868\u793a\u62d2\u7edd\uff0c1\u8868\u793a\u8868\u793a)\u3002\u7528\u4e8e\u540c\u6b65\u5176\u4ed6\u52a8\u753b\u3002"),(0,r.kt)("h3",{id:"presented-\u5df2\u51fa\u73b0"},"Presented \u5df2\u51fa\u73b0"),(0,r.kt)("p",null,"A boolean that is true when the screen is presented."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u5c4f\u5e55\u51fa\u73b0\u65f6\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"x-offset"},"X Offset"),(0,r.kt)("p",null,"The X position for sliding the prior screen left in a Push transition. Connect to the X Offset of the prior screen."),(0,r.kt)("p",null,"\u5728 Push \u8fc7\u6e21\u4e2d\u5411\u5de6\u6ed1\u52a8\u524d\u4e00\u4e2a\u5c4f\u5e55\u7684 X \u4f4d\u7f6e\u3002\u8fde\u63a5\u5230\u524d\u4e00\u4e2a\u5c4f\u5e55\u7684 X \u504f\u79fb\u91cf\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Pop%20Switch"},"Pop Switch \u6d41\u884c\u5f00\u5173")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}p.isMDXComponent=!0},81784:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screen-88faa48ae6e3b0c352b6f846a8d13cb5.png"}}]);