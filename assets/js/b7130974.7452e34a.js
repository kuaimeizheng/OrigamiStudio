"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[83391],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),u=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(f,o(o({ref:e},p),{},{components:r})):a.createElement(f,o({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74054:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Euler Transform \u6b27\u62c9\u53d8\u5f62",sidebar_position:160,tags:["path","shape","shape utility"]},o="Euler Transform",l={unversionedId:"patches/Shape/Euler Transform",id:"patches/Shape/Euler Transform",title:"Euler Transform \u6b27\u62c9\u53d8\u5f62",description:"Euler Transform",source:"@site/docs/patches/Shape/Euler Transform.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/Euler Transform",permalink:"/OrigamiStudio/docs/patches/Shape/Euler Transform",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/Euler Transform.md",tags:[{label:"path",permalink:"/OrigamiStudio/docs/tags/path"},{label:"shape",permalink:"/OrigamiStudio/docs/tags/shape"},{label:"shape utility",permalink:"/OrigamiStudio/docs/tags/shape-utility"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575955,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:160,frontMatter:{title:"Euler Transform \u6b27\u62c9\u53d8\u5f62",sidebar_position:160,tags:["path","shape","shape utility"]},sidebar:"patchesSidebar",previous:{title:"Ease Combiner \u7b80\u5355\u5408\u6210",permalink:"/OrigamiStudio/docs/patches/Shape/Ease Combiner"},next:{title:"JSON Model Builder JSON \u6a21\u578b\u6784\u5efa\u5668",permalink:"/OrigamiStudio/docs/patches/Shape/JSON Model Builder"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Point 3D",id:"point-3d",level:4},{value:"Rotation 3D",id:"rotation-3d",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa-1",level:4}],p={toc:u};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"euler-transform"},"Euler Transform"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Euler Transform"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Point 3D ",(0,n.kt)("small",null," X ",(0,n.kt)("span",null,"0")," Y ",(0,n.kt)("span",null,"0")," Z ",(0,n.kt)("span",null,"0"))),(0,n.kt)("li",null,"Rotation 3D ",(0,n.kt)("small",null," X ",(0,n.kt)("span",null,"0")," Y ",(0,n.kt)("span",null,"0")," Z ",(0,n.kt)("span",null,"0")))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Output ",(0,n.kt)("span",null))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"point-3d"},"Point 3D"),(0,n.kt)("h4",{id:"rotation-3d"},"Rotation 3D")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"output-\u8f93\u51fa-1"},"Output \u8f93\u51fa"))))}c.isMDXComponent=!0}}]);