"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[36974],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),s=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return i.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?i.createElement(f,a(a({ref:e},c),{},{components:n})):i.createElement(f,a({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41015:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const l={title:"Bounding Box",sidebar_position:20,tags:["utilities"]},a="Trend Info",o={unversionedId:"patches/Utilities/Bounding Box",id:"patches/Utilities/Bounding Box",title:"Bounding Box",description:"Bounding Box",source:"@site/docs/patches/Utilities/Bounding Box.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Bounding Box",permalink:"/OrigamiStudio/docs/patches/Utilities/Bounding Box",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Bounding Box.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667659545,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:20,frontMatter:{title:"Bounding Box",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Auto Size \u81ea\u52a8\u5927\u5c0f",permalink:"/OrigamiStudio/docs/patches/Utilities/Auto Size"},next:{title:"Decimal Place \u5c0f\u6570\u4f4d",permalink:"/OrigamiStudio/docs/patches/Utilities/Decimal Place"}},u={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"X/Y",id:"xy",level:4},{value:"W/H",id:"wh",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"X1",id:"x1",level:4},{value:"Y1",id:"y1",level:4},{value:"X1",id:"x1-1",level:4},{value:"Y2",id:"y2",level:4}],c={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trend-info"},"Trend Info"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Bounding Box"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,(0,r.kt)("small",null,"X",(0,r.kt)("span",null,"100"),"Y",(0,r.kt)("span",null,"200"))),(0,r.kt)("li",null,(0,r.kt)("small",null,"W",(0,r.kt)("span",null,"20"),"H",(0,r.kt)("span",null,"40")))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"X1",(0,r.kt)("span",null,"100")),(0,r.kt)("li",null,"Y1",(0,r.kt)("span",null,"200")),(0,r.kt)("li",null,"X1",(0,r.kt)("span",null,"120")),(0,r.kt)("li",null,"Y2",(0,r.kt)("span",null,"240"))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"xy"},"X/Y"),(0,r.kt)("h4",{id:"wh"},"W/H")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"x1"},"X1"),(0,r.kt)("h4",{id:"y1"},"Y1"),(0,r.kt)("h4",{id:"x1-1"},"X1"),(0,r.kt)("h4",{id:"y2"},"Y2"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);