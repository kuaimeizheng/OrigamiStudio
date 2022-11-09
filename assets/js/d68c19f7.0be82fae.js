"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[49545],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>h});var a=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(c,".").concat(h)]||p[h]||s[h]||n;return r?a.createElement(m,o(o({ref:e},d),{},{components:r})):a.createElement(m,o({ref:e},d))}));function h(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76485:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const n={sidebar_position:5},o="Switch \u5f00\u5173",l={unversionedId:"documentation/Material/Switch",id:"documentation/Material/Switch",title:"Switch \u5f00\u5173",description:"A Material switch with customizable colors.",source:"@site/docs/documentation/Material/Switch.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Switch",permalink:"/OrigamiStudio/docs/documentation/Material/Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Switch.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Status Bar \u72b6\u6001\u680f",permalink:"/OrigamiStudio/docs/documentation/Material/Status bar"},next:{title:"Text Field \u6587\u672c\u8f93\u5165\u6846",permalink:"/OrigamiStudio/docs/documentation/Material/Text Field"}},c={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Theme \u4e3b\u9898",id:"theme-\u4e3b\u9898",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Turn On \u6253\u5f00",id:"turn-on-\u6253\u5f00",level:3},{value:"Turn Off \u5173\u95ed",id:"turn-off-\u5173\u95ed",level:3},{value:"Disabled \u7981\u7528",id:"disabled-\u7981\u7528",level:3},{value:"On / Off \u5f00/\u5173",id:"on--off-\u5f00\u5173",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:u};function s(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"switch-\u5f00\u5173"},"Switch \u5f00\u5173"),(0,i.kt)("p",null,"A Material switch with customizable colors."),(0,i.kt)("p",null,"\u53ef\u5b9a\u5236\u989c\u8272\u7684Material\u5f00\u5173\u3002"),(0,i.kt)("p",null,"Use the Touch button on the component to get the state of the switch."),(0,i.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u4ea4\u6362\u673a\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(18195).Z,width:"1548",height:"458"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the switch is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u5f00\u5173\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position to display the switch."),(0,i.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,i.kt)("p",null,"The anchor point to position the switch relative to. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,i.kt)("p",null,"The color of the switch when turned on."),(0,i.kt)("h3",{id:"theme-\u4e3b\u9898"},"Theme \u4e3b\u9898"),(0,i.kt)("p",null,"The theme of the switch when turned off: light or dark."),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the switch."),(0,i.kt)("h3",{id:"turn-on-\u6253\u5f00"},"Turn On \u6253\u5f00"),(0,i.kt)("p",null,"A pulse that turns the switch on."),(0,i.kt)("h3",{id:"turn-off-\u5173\u95ed"},"Turn Off \u5173\u95ed"),(0,i.kt)("p",null,"A pulse that turns the switch off."),(0,i.kt)("h3",{id:"disabled-\u7981\u7528"},"Disabled \u7981\u7528"),(0,i.kt)("p",null,"A boolean that is true when the switch is disabled."),(0,i.kt)("h3",{id:"on--off-\u5f00\u5173"},"On / Off \u5f00/\u5173"),(0,i.kt)("p",null,"A boolean that is true when the switch is on."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),"\n",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}s.isMDXComponent=!0},18195:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/switch-cbcaf358499751770849281166c331d2.png"}}]);