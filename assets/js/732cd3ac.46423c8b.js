"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[15140],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},l=Object.keys(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),u=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(r),m=n,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?o.createElement(v,a(a({ref:e},c),{},{components:r})):o.createElement(v,a({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64038:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const l={title:"HSL to HSV",sidebar_position:20,tags:["color"]},a="HSL to HSV",i={unversionedId:"patches/Color/HSL to HSV",id:"patches/Color/HSL to HSV",title:"HSL to HSV",description:"HSL to HSV",source:"@site/docs/patches/Color/HSL to HSV.md",sourceDirName:"patches/Color",slug:"/patches/Color/HSL to HSV",permalink:"/OrigamiStudio/docs/patches/Color/HSL to HSV",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Color/HSL to HSV.md",tags:[{label:"color",permalink:"/OrigamiStudio/docs/tags/color"}],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:20,frontMatter:{title:"HSL to HSV",sidebar_position:20,tags:["color"]},sidebar:"patchesSidebar",previous:{title:"Color to RGBA",permalink:"/OrigamiStudio/docs/patches/Color/Color to RGBA"},next:{title:"Random Color \u968f\u673a\u989c\u8272",permalink:"/OrigamiStudio/docs/patches/Color/Random Color"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"H",id:"h",level:4},{value:"S",id:"s",level:4},{value:"L",id:"l",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"H",id:"h-1",level:4},{value:"S",id:"s-1",level:4},{value:"V",id:"v",level:4}],c={toc:u};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hsl-to-hsv"},"HSL to HSV"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"HSL to HSV"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"H",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"S",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"L",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"H",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"S",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"V",(0,n.kt)("span",null,"0"))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"h"},"H"),(0,n.kt)("h4",{id:"s"},"S"),(0,n.kt)("h4",{id:"l"},"L")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"h-1"},"H"),(0,n.kt)("h4",{id:"s-1"},"S"),(0,n.kt)("h4",{id:"v"},"V"))))}p.isMDXComponent=!0}}]);