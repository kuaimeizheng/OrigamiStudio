"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[89578],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:e},s),{},{components:n})):r.createElement(g,o({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1665:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2},o="Drag Settings \u62d6\u62fd\u8bbe\u7f6e",l={unversionedId:"documentation/Interaction/Drag Settings",id:"documentation/Interaction/Drag Settings",title:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e",description:"Customize a Drag patch\u2019s behavior.",source:"@site/docs/documentation/Interaction/Drag Settings.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Drag Settings",permalink:"/OrigamiStudio/docs/documentation/Interaction/Drag Settings",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Drag Settings.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1663054532,formattedLastUpdatedAt:"2022\u5e749\u670813\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Double Tap \u53cc\u51fb",permalink:"/OrigamiStudio/docs/documentation/Interaction/Double Tap"},next:{title:"Drag \u62d6\u62fd",permalink:"/OrigamiStudio/docs/documentation/Interaction/Drag"}},u={},c=[{value:"Clip \u4fee\u526a",id:"clip-\u4fee\u526a",level:3},{value:"Min \u6700\u5c0f",id:"min-\u6700\u5c0f",level:3},{value:"Max \u6700\u5927",id:"max-\u6700\u5927",level:3},{value:"Momentum \u60ef\u6027",id:"momentum-\u60ef\u6027",level:3},{value:"Momentum Friction \u60ef\u6027\u6469\u64e6",id:"momentum-friction-\u60ef\u6027\u6469\u64e6",level:3},{value:"Settings \u8bbe\u7f6e",id:"settings-\u8bbe\u7f6e",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function p(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drag-settings-\u62d6\u62fd\u8bbe\u7f6e"},"Drag Settings \u62d6\u62fd\u8bbe\u7f6e"),(0,i.kt)("p",null,"Customize a Drag patch\u2019s behavior."),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u62d6\u62fd\u6a21\u5757\u7684\u884c\u4e3a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(90834).Z,width:"1562",height:"346"})),(0,i.kt)("h3",{id:"clip-\u4fee\u526a"},"Clip \u4fee\u526a"),(0,i.kt)("p",null,"A boolean that is true when clipping is enabled. Clipping prevents a layer from being dragged out of defined boundaries."),(0,i.kt)("p",null,"\u5f53\u4fee\u526a\u80fd\u542f\u52a8\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002\u963b\u6b62\u56fe\u5c42\u88ab\u62d6\u51fa\u5b9a\u4e49\u7684\u8fb9\u754c\u3002"),(0,i.kt)("h3",{id:"min-\u6700\u5c0f"},"Min \u6700\u5c0f"),(0,i.kt)("p",null,"A point that defines the top left of the drag boundaries."),(0,i.kt)("p",null,"\u5b9a\u4e49\u62d6\u52a8\u8fb9\u754c\u5de6\u4e0a\u89d2\u7684\u70b9\u3002"),(0,i.kt)("h3",{id:"max-\u6700\u5927"},"Max \u6700\u5927"),(0,i.kt)("p",null,"A point that defines the bottom right of the drag boundaries."),(0,i.kt)("p",null,"\u5b9a\u4e49\u62d6\u52a8\u8fb9\u754c\u53f3\u4e0b\u89d2\u7684\u70b9\u3002"),(0,i.kt)("h3",{id:"momentum-\u60ef\u6027"},"Momentum \u60ef\u6027"),(0,i.kt)("p",null,"A boolean that is true when momentum is enabled. Momentum adds physics when flicking the layer."),(0,i.kt)("p",null,"\u52fe\u9009\u540e\u542f\u52a8\u60ef\u6027\u3002"),(0,i.kt)("h3",{id:"momentum-friction-\u60ef\u6027\u6469\u64e6"},"Momentum Friction \u60ef\u6027\u6469\u64e6"),(0,i.kt)("p",null,"A number between 0 and 950 that represents the amount of friction when flicking the layer."),(0,i.kt)("p",null,"0\uff5e950\u4e4b\u95f4\u7684\u6570\u5b57\u8868\u793a\u6469\u64e6\u91cf\u3002(\u4f8b\u5982\uff1a\u503c\u8d8a\u5c0f\u6469\u64e6\u8d8a\u5c0f\u60ef\u6027\u8d8a\u5927)"),(0,i.kt)("h3",{id:"settings-\u8bbe\u7f6e"},"Settings \u8bbe\u7f6e"),(0,i.kt)("p",null,"The settings to pass to a Drag patch."),(0,i.kt)("p",null,"\u8fde\u63a5\u5230Drag\u6a21\u5757\u7684Setting\u63a5\u53e3\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Drag"},"Drag \u62d6\u62fd")))}p.isMDXComponent=!0},90834:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/drag-settings-bbc4543efb9f7e23ffbd52e7c2b927e9.png"}}]);