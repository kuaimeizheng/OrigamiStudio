"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[45156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,v=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(v,u(u({ref:t},p),{},{components:r})):a.createElement(v,u({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,u=new Array(i);u[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var s=2;s<i;s++)u[s]=r[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Ease Combiner \u7b80\u5355\u5408\u6210",sidebar_position:160,tags:["path","shape","shape utility"]},u="Ease Combiner",o={unversionedId:"patches/Shape/Ease Combiner",id:"patches/Shape/Ease Combiner",title:"Ease Combiner \u7b80\u5355\u5408\u6210",description:"Ease Combiner",source:"@site/docs/patches/Shape/Ease Combiner.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/Ease Combiner",permalink:"/OrigamiStudio/docs/patches/Shape/Ease Combiner",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/Ease Combiner.md",tags:[{label:"path",permalink:"/OrigamiStudio/docs/tags/path"},{label:"shape",permalink:"/OrigamiStudio/docs/tags/shape"},{label:"shape utility",permalink:"/OrigamiStudio/docs/tags/shape-utility"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:160,frontMatter:{title:"Ease Combiner \u7b80\u5355\u5408\u6210",sidebar_position:160,tags:["path","shape","shape utility"]},sidebar:"patchesSidebar",previous:{title:"Curve Remover \u66f2\u7ebf\u53bb\u9664",permalink:"/OrigamiStudio/docs/patches/Shape/Curve Remover"},next:{title:"Euler Transform \u6b27\u62c9\u53d8\u5f62",permalink:"/OrigamiStudio/docs/patches/Shape/Euler Transform"}},l={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Number \u6570\u503c",id:"number-\u6570\u503c",level:4},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:4},{value:"Driver Curve \u9a71\u52a8\u66f2\u7ebf",id:"driver-curve-\u9a71\u52a8\u66f2\u7ebf",level:4},{value:"Output Curve \u8f93\u51fa\u66f2\u7ebf",id:"output-curve-\u8f93\u51fa\u66f2\u7ebf",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa-1",level:4}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ease-combiner"},"Ease Combiner"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Ease Combiner"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Number ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"Duration ",(0,n.kt)("span",null,"1s")),(0,n.kt)("li",null,"Driver Curve ",(0,n.kt)("span",null,"Quadratic In")),(0,n.kt)("li",null,"Output Curve ",(0,n.kt)("span",null,"Quadratic In"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Output ",(0,n.kt)("span",null,"0"))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"number-\u6570\u503c"},"Number \u6570\u503c"),(0,n.kt)("h4",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,n.kt)("h4",{id:"driver-curve-\u9a71\u52a8\u66f2\u7ebf"},"Driver Curve \u9a71\u52a8\u66f2\u7ebf"),(0,n.kt)("h4",{id:"output-curve-\u8f93\u51fa\u66f2\u7ebf"},"Output Curve \u8f93\u51fa\u66f2\u7ebf")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"output-\u8f93\u51fa-1"},"Output \u8f93\u51fa"))))}c.isMDXComponent=!0}}]);