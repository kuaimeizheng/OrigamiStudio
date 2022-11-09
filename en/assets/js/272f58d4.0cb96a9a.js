"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[57704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Pinch Scale \u634f\u653e\u6bd4\u4f8b",sidebar_position:20,tags:["interaction"]},c="Pinch Scale",l={unversionedId:"patches/Interaction/Pinch Scale",id:"patches/Interaction/Pinch Scale",title:"Pinch Scale \u634f\u653e\u6bd4\u4f8b",description:"\u53ef\u4ee5\u901a\u8fc7\u624b\u6307\u634f\u548c\uff0c\u8fdb\u884c\u5143\u7d20\u7684\u653e\u5927\u548c\u7f29\u5c0f\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Interaction/Pinch Scale.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Pinch Scale",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Pinch Scale",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Pinch Scale.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/en/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667996896,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:20,frontMatter:{title:"Pinch Scale \u634f\u653e\u6bd4\u4f8b",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Mouse Cursor \u9f20\u6807\u5149\u6807",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Mouse Cursor"},next:{title:"Touch Indicator \u89e6\u63a7\u6307\u793a",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Touch Indicator"}},o={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Touches \u89e6\u6478\u6570\u636e",id:"touches-\u89e6\u6478\u6570\u636e",level:4},{value:"Start Scale \u5f00\u59cb\u6bd4\u4f8b",id:"start-scale-\u5f00\u59cb\u6bd4\u4f8b",level:4},{value:"Min Scale \u6700\u5c0f\u6bd4\u4f8b",id:"min-scale-\u6700\u5c0f\u6bd4\u4f8b",level:4},{value:"Max Scale \u6700\u5927\u6bd4\u4f8b",id:"max-scale-\u6700\u5927\u6bd4\u4f8b",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pinch-scale"},"Pinch Scale"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u624b\u6307\u634f\u548c\uff0c\u8fdb\u884c\u5143\u7d20\u7684\u653e\u5927\u548c\u7f29\u5c0f\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Pinch Scale"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Touches ",(0,r.kt)("span",null,"[]")),(0,r.kt)("li",null,"Start Scale ",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Min Scale ",(0,r.kt)("span",null,"0.1")),(0,r.kt)("li",null,"Max Scale ",(0,r.kt)("span",null,"2"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Scale ",(0,r.kt)("span",null,"1"))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"touches-\u89e6\u6478\u6570\u636e"},"Touches \u89e6\u6478\u6570\u636e"),(0,r.kt)("h4",{id:"start-scale-\u5f00\u59cb\u6bd4\u4f8b"},"Start Scale \u5f00\u59cb\u6bd4\u4f8b"),(0,r.kt)("h4",{id:"min-scale-\u6700\u5c0f\u6bd4\u4f8b"},"Min Scale \u6700\u5c0f\u6bd4\u4f8b"),(0,r.kt)("h4",{id:"max-scale-\u6700\u5927\u6bd4\u4f8b"},"Max Scale \u6700\u5927\u6bd4\u4f8b")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);