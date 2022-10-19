"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[34351],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=i.createContext({}),u=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return i.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return n?i.createElement(h,r(r({ref:e},d),{},{components:n})):i.createElement(h,r({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},27187:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},r="Switch \u5f00\u5173",l={unversionedId:"documentation/iOS/Switch",id:"documentation/iOS/Switch",title:"Switch \u5f00\u5173",description:"An iOS switch with customizable colors.",source:"@site/docs/documentation/iOS/Switch.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Switch",permalink:"/OrigamiStudio/docs/documentation/iOS/Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Switch.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666145039,formattedLastUpdatedAt:"2022\u5e7410\u670819\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Status Bar \u72b6\u6001\u680f",permalink:"/OrigamiStudio/docs/documentation/iOS/Status bar"},next:{title:"Tab Bar \u6807\u7b7e\u680f",permalink:"/OrigamiStudio/docs/documentation/iOS/Tab Bar"}},c={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Turn On \u6253\u5f00",id:"turn-on-\u6253\u5f00",level:3},{value:"Turn Off \u5173\u95ed",id:"turn-off-\u5173\u95ed",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"On / Off \u5f00/\u5173",id:"on--off-\u5f00\u5173",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:u};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"switch-\u5f00\u5173"},"Switch \u5f00\u5173"),(0,o.kt)("p",null,"An iOS switch with customizable colors."),(0,o.kt)("p",null,"\u53ef\u81ea\u5b9a\u4e49\u989c\u8272\u7684iOS\u5f00\u5173\u3002"),(0,o.kt)("p",null,"Use the Touch button on the component to get the state of the switch."),(0,o.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u5f00\u5173\u7684\u72b6\u6001\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(38064).Z,width:"1556",height:"384"})),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when the switch is displayed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u5f00\u5173\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"The position to display the switch."),(0,o.kt)("p",null,"\u5f00\u5173\u663e\u793a\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,o.kt)("p",null,"The anchor point to position the switch relative to. See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,o.kt)("p",null,"\u76f8\u5bf9\u4e8e\u5f00\u5173\u7684\u5b9a\u4f4d\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,o.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,o.kt)("p",null,"The opacity of the switch."),(0,o.kt)("p",null,"\u5f00\u5173\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,o.kt)("h3",{id:"turn-on-\u6253\u5f00"},"Turn On \u6253\u5f00"),(0,o.kt)("p",null,"A pulse that turns the switch on."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6253\u5f00\u5f00\u5173\u3002"),(0,o.kt)("h3",{id:"turn-off-\u5173\u95ed"},"Turn Off \u5173\u95ed"),(0,o.kt)("p",null,"A pulse that turns the switch off."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5173\u95ed\u5f00\u5173\u3002"),(0,o.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,o.kt)("p",null,"The color of the switch background when turned on."),(0,o.kt)("p",null,"\u6253\u5f00\u5f00\u5173\u65f6\u80cc\u666f\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"on--off-\u5f00\u5173"},"On / Off \u5f00/\u5173"),(0,o.kt)("p",null,"A boolean that is true when the switch is on."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f00\u5173\u6253\u5f00\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}p.isMDXComponent=!0},38064:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/switch-817edcf2fc6ed2768939c0d0bbfe32be.png"}}]);