"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[88047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Polygon \u591a\u8fb9\u5f62",sidebar_position:15,tags:["path","shape","shape creator"]},i="Polygon",l={unversionedId:"patches/Shape/Polygon",id:"patches/Shape/Polygon",title:"Polygon \u591a\u8fb9\u5f62",description:"Polygon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Shape/Polygon.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/Polygon",permalink:"/OrigamiStudio/en/docs/patches/Shape/Polygon",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/Polygon.md",tags:[{label:"path",permalink:"/OrigamiStudio/en/docs/tags/path"},{label:"shape",permalink:"/OrigamiStudio/en/docs/tags/shape"},{label:"shape creator",permalink:"/OrigamiStudio/en/docs/tags/shape-creator"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:15,frontMatter:{title:"Polygon \u591a\u8fb9\u5f62",sidebar_position:15,tags:["path","shape","shape creator"]},sidebar:"patchesSidebar",previous:{title:"Rectangle \u77e9\u5f62",permalink:"/OrigamiStudio/en/docs/patches/Shape/Rectangle"},next:{title:"Star \u661f\u661f",permalink:"/OrigamiStudio/en/docs/patches/Shape/Star"}},s={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Sides",id:"sides",level:4},{value:"Radius",id:"radius",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Shape",id:"shape",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"polygon"},"Polygon"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Polygon"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Sides ",(0,n.kt)("span",null,"5")),(0,n.kt)("li",null,"Radius ",(0,n.kt)("span",null,"50"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Shape")))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"sides"},"Sides"),(0,n.kt)("h4",{id:"radius"},"Radius")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"shape"},"Shape"))))}u.isMDXComponent=!0}}]);