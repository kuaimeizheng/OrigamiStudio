"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4195],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),s=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,a(a({ref:e},u),{},{components:n})):o.createElement(f,a({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33610:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={title:"Zoom In Out \u653e\u5927\u7f29\u5c0f",sidebar_position:20,tags:["interaction"]},a="Zoom In Out",l={unversionedId:"patches/Interaction/Zoom In Out",id:"patches/Interaction/Zoom In Out",title:"Zoom In Out \u653e\u5927\u7f29\u5c0f",description:"Zoom In Out",source:"@site/docs/patches/Interaction/Zoom In Out.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Zoom In Out",permalink:"/OrigamiStudio/docs/patches/Interaction/Zoom In Out",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Zoom In Out.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659980261,formattedLastUpdatedAt:"2022\u5e748\u67088\u65e5",sidebarPosition:20,frontMatter:{title:"Zoom In Out \u653e\u5927\u7f29\u5c0f",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Trackpad \u89e6\u6478\u677f",permalink:"/OrigamiStudio/docs/patches/Interaction/Trackpad"},next:{title:"iOS Interactive Spring iOS \u5f39\u6027\u4ea4\u4e92",permalink:"/OrigamiStudio/docs/patches/Interaction/iOS Interactive Spring"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enbale \u542f\u7528",id:"enbale-\u542f\u7528",level:4},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Fingers \u624b\u6307",id:"fingers-\u624b\u6307",level:4},{value:"Is Zoom In \u662f\u653e\u5927",id:"is-zoom-in-\u662f\u653e\u5927",level:4},{value:"Is Zoom Out \u662f\u7f29\u5c0f",id:"is-zoom-out-\u662f\u7f29\u5c0f",level:4},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:4}],u={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zoom-in-out"},"Zoom In Out"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Zoom In Out"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Enbale ",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Type ",(0,r.kt)("span",null,"Desktop"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Fingers ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Is Zoom In ",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Is Zoom Out ",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Scale ",(0,r.kt)("span",null,"1"))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"enbale-\u542f\u7528"},"Enbale \u542f\u7528"),(0,r.kt)("h4",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,r.kt)("p",null,"Desktop\u3001Mobile device\u3002")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"fingers-\u624b\u6307"},"Fingers \u624b\u6307"),(0,r.kt)("h4",{id:"is-zoom-in-\u662f\u653e\u5927"},"Is Zoom In \u662f\u653e\u5927"),(0,r.kt)("h4",{id:"is-zoom-out-\u662f\u7f29\u5c0f"},"Is Zoom Out \u662f\u7f29\u5c0f"),(0,r.kt)("h4",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);