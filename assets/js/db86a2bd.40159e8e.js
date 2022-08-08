"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Curve Remover \u66f2\u7ebf\u53bb\u9664",sidebar_position:160,tags:["path","shape","shape utility"]},o="Curve Remover",p={unversionedId:"patches/Shape/Curve Remover",id:"patches/Shape/Curve Remover",title:"Curve Remover \u66f2\u7ebf\u53bb\u9664",description:"Curve Remover",source:"@site/docs/patches/Shape/Curve Remover.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/Curve Remover",permalink:"/OrigamiStudio/docs/patches/Shape/Curve Remover",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/Curve Remover.md",tags:[{label:"path",permalink:"/OrigamiStudio/docs/tags/path"},{label:"shape",permalink:"/OrigamiStudio/docs/tags/shape"},{label:"shape utility",permalink:"/OrigamiStudio/docs/tags/shape-utility"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659980261,formattedLastUpdatedAt:"2022\u5e748\u67088\u65e5",sidebarPosition:160,frontMatter:{title:"Curve Remover \u66f2\u7ebf\u53bb\u9664",sidebar_position:160,tags:["path","shape","shape utility"]},sidebar:"patchesSidebar",previous:{title:"Curve Shape \u66f2\u7ebf\u5f62\u72b6",permalink:"/OrigamiStudio/docs/patches/Shape/Curve Shape"},next:{title:"Shape Loop Union \u5f62\u72b6\u5faa\u73af\u5408\u5e76",permalink:"/OrigamiStudio/docs/patches/Shape/Shape Loop Union"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Shape",id:"shape",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Shape",id:"shape-1",level:4}],l={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"curve-remover"},"Curve Remover"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Curve Remover"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Shape")),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Shape")))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"shape"},"Shape")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"shape-1"},"Shape"))))}c.isMDXComponent=!0}}]);