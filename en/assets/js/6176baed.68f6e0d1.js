"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6638],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>f});var r=l(67294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(l),f=i,S=d["".concat(c,".").concat(f)]||d[f]||u[f]||n;return l?r.createElement(S,o(o({ref:t},p),{},{components:l})):r.createElement(S,o({ref:t},p))}));function f(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=l.length,o=new Array(n);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<n;s++)o[s]=l[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},47887:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>s});var r=l(87462),i=(l(67294),l(3905));const n={title:"Scroll Switch",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["scroll"]},o="Scroll Switch",a={unversionedId:"patches/Scroll/Scroll Switch",id:"patches/Scroll/Scroll Switch",title:"Scroll Switch",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Scroll/Scroll Switch.md",sourceDirName:"patches/Scroll",slug:"/patches/Scroll/Scroll Switch",permalink:"/OrigamiStudio/en/docs/patches/Scroll/Scroll Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Scroll/Scroll Switch.md",tags:[{label:"scroll",permalink:"/OrigamiStudio/en/docs/tags/scroll"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:20,frontMatter:{title:"Scroll Switch",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["scroll"]},sidebar:"patchesSidebar",previous:{title:"SScroller \u6eda\u52a8\u5668",permalink:"/OrigamiStudio/en/docs/patches/Scroll/SScroller"},next:{title:"Scrollaway + \u6eda\u52a8\u91cf +",permalink:"/OrigamiStudio/en/docs/patches/Scroll/Scrollaway +"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Swipe Layer \u6ed1\u52a8\u56fe\u5c42",id:"swipe-layer-\u6ed1\u52a8\u56fe\u5c42",level:4},{value:"Swipe Tolerance \u6ed1\u52a8\u504f\u5dee",id:"swipe-tolerance-\u6ed1\u52a8\u504f\u5dee",level:4},{value:"Switch Off \u6ed1\u52a8\u5173\u95ed",id:"switch-off-\u6ed1\u52a8\u5173\u95ed",level:4},{value:"Scroll Layer \u6eda\u52a8\u56fe\u5c42",id:"scroll-layer-\u6eda\u52a8\u56fe\u5c42",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Swipe Position \u6ed1\u52a8\u4f4d\u7f6e",id:"swipe-position-\u6ed1\u52a8\u4f4d\u7f6e",level:4},{value:"Scroll Position \u6eda\u52a8\u4f4d\u7f6e",id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e",level:4},{value:"Swipe Progress \u6ed1\u52a8\u8fdb\u5ea6",id:"swipe-progress-\u6ed1\u52a8\u8fdb\u5ea6",level:4},{value:"On/Off \u5f00/\u5173",id:"onoff-\u5f00\u5173",level:4}],p={toc:s};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scroll-switch"},"Scroll Switch"),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Scroll Switch"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Enable ",(0,i.kt)("span",{className:"checkbox-off"})),(0,i.kt)("li",null,"Swipe Layer ",(0,i.kt)("span",null,"None")),(0,i.kt)("li",null,"Swipe Tolerance ",(0,i.kt)("span",null,"120")),(0,i.kt)("li",null,"Switch Off ",(0,i.kt)("span",{className:"checkbox-off"})),(0,i.kt)("li",null,"Scroll Layer ",(0,i.kt)("span",null,"None"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Swipe Position ",(0,i.kt)("span",null,"400")),(0,i.kt)("li",null,"Scroll Position ",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Swipe Progress ",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"On/ Off ",(0,i.kt)("span",{className:"checkbox-off"}))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("h4",{id:"swipe-layer-\u6ed1\u52a8\u56fe\u5c42"},"Swipe Layer \u6ed1\u52a8\u56fe\u5c42"),(0,i.kt)("h4",{id:"swipe-tolerance-\u6ed1\u52a8\u504f\u5dee"},"Swipe Tolerance \u6ed1\u52a8\u504f\u5dee"),(0,i.kt)("h4",{id:"switch-off-\u6ed1\u52a8\u5173\u95ed"},"Switch Off \u6ed1\u52a8\u5173\u95ed"),(0,i.kt)("h4",{id:"scroll-layer-\u6eda\u52a8\u56fe\u5c42"},"Scroll Layer \u6eda\u52a8\u56fe\u5c42")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"swipe-position-\u6ed1\u52a8\u4f4d\u7f6e"},"Swipe Position \u6ed1\u52a8\u4f4d\u7f6e"),(0,i.kt)("h4",{id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e"},"Scroll Position \u6eda\u52a8\u4f4d\u7f6e"),(0,i.kt)("h4",{id:"swipe-progress-\u6ed1\u52a8\u8fdb\u5ea6"},"Swipe Progress \u6ed1\u52a8\u8fdb\u5ea6"),(0,i.kt)("h4",{id:"onoff-\u5f00\u5173"},"On/Off \u5f00/\u5173"))),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);