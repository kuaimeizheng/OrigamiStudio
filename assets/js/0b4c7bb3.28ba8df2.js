"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[24195],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33610:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Zoom In Out \u653e\u5927\u7f29\u5c0f",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},i="Zoom In Out",l={unversionedId:"patches/Interaction/Zoom In Out",id:"patches/Interaction/Zoom In Out",title:"Zoom In Out \u653e\u5927\u7f29\u5c0f",description:"---",source:"@site/docs/patches/Interaction/Zoom In Out.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Zoom In Out",permalink:"/OrigamiStudio/docs/patches/Interaction/Zoom In Out",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Zoom In Out.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667996896,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:20,frontMatter:{title:"Zoom In Out \u653e\u5927\u7f29\u5c0f",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Trackpad \u89e6\u6478\u677f",permalink:"/OrigamiStudio/docs/patches/Interaction/Trackpad"},next:{title:"iOS Interactive Spring iOS \u5f39\u6027\u4ea4\u4e92",permalink:"/OrigamiStudio/docs/patches/Interaction/iOS Interactive Spring"}},c={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enbale \u542f\u7528",id:"enbale-\u542f\u7528",level:4},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Fingers \u624b\u6307",id:"fingers-\u624b\u6307",level:4},{value:"Zoom In \u653e\u5927",id:"zoom-in-\u653e\u5927",level:4},{value:"Zoom Out \u7f29\u5c0f",id:"zoom-out-\u7f29\u5c0f",level:4},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:4}],s={toc:u};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zoom-in-out"},"Zoom In Out"),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Zoom In Out"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Enbale ",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,"Type ",(0,o.kt)("span",null,"Desktop"))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Fingers ",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,"Zoom In ",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,"Zoom Out ",(0,o.kt)("span",{className:"checkbox-off"})),(0,o.kt)("li",null,"Scale ",(0,o.kt)("span",null,"1"))))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"enbale-\u542f\u7528"},"Enbale \u542f\u7528"),(0,o.kt)("h4",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,o.kt)("p",null,"Desktop\u3001Mobile device\u3002")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"fingers-\u624b\u6307"},"Fingers \u624b\u6307"),(0,o.kt)("h4",{id:"zoom-in-\u653e\u5927"},"Zoom In \u653e\u5927"),(0,o.kt)("h4",{id:"zoom-out-\u7f29\u5c0f"},"Zoom Out \u7f29\u5c0f"),(0,o.kt)("h4",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"))),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);