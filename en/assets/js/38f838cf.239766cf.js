"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[12657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"Confetti \u4e94\u5f69\u7eb8\u5c51",sidebar_position:20,tags:["particles"]},o="Confetti",l={unversionedId:"patches/Particles/Confetti",id:"patches/Particles/Confetti",title:"Confetti \u4e94\u5f69\u7eb8\u5c51",description:"\u4e94\u5f69\u7eb8\u5c51\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Particles/Confetti.md",sourceDirName:"patches/Particles",slug:"/patches/Particles/Confetti",permalink:"/OrigamiStudio/en/docs/patches/Particles/Confetti",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Particles/Confetti.md",tags:[{label:"particles",permalink:"/OrigamiStudio/en/docs/tags/particles"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575955,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:20,frontMatter:{title:"Confetti \u4e94\u5f69\u7eb8\u5c51",sidebar_position:20,tags:["particles"]},sidebar:"patchesSidebar",previous:{title:"Particles \u7c92\u5b50",permalink:"/OrigamiStudio/en/docs/category/particles-\u7c92\u5b50"},next:{title:"Shapes \u5f62\u72b6",permalink:"/OrigamiStudio/en/docs/category/shapes-\u5f62\u72b6-1"}},c={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Fire \u7efd\u653e",id:"fire-\u7efd\u653e",level:3},{value:"Haptic \u89e6\u89c9\u53cd\u9988",id:"haptic-\u89e6\u89c9\u53cd\u9988",level:3},{value:"Staggered \u4ea4\u9519",id:"staggered-\u4ea4\u9519",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"confetti"},"Confetti"),(0,i.kt)("p",null,"\u4e94\u5f69\u7eb8\u5c51\u3002"),(0,i.kt)("div",{class:"patch-container"},(0,i.kt)("div",{class:"patch layer"},(0,i.kt)("h3",null,"Confetti"),(0,i.kt)("ul",{class:"inputs"},(0,i.kt)("li",null,"Enable"),(0,i.kt)("li",null,"Fire"),(0,i.kt)("li",null,"Haptic"),(0,i.kt)("li",null,"Staggered")))),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("h3",{id:"fire-\u7efd\u653e"},"Fire \u7efd\u653e"),(0,i.kt)("h3",{id:"haptic-\u89e6\u89c9\u53cd\u9988"},"Haptic \u89e6\u89c9\u53cd\u9988"),(0,i.kt)("h3",{id:"staggered-\u4ea4\u9519"},"Staggered \u4ea4\u9519"),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);