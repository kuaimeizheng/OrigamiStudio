"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[10807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||n;return a?r.createElement(m,p(p({ref:t},s),{},{components:a})):r.createElement(m,p({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<n;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={title:"Path builder to Shape \u8def\u5f84\u6784\u5efa\u5230\u5f62\u72b6",sidebar_position:110,tags:["path","shape","path builder"]},p="Path builder to Shape",o={unversionedId:"patches/Shape/Path builder to Shape",id:"patches/Shape/Path builder to Shape",title:"Path builder to Shape \u8def\u5f84\u6784\u5efa\u5230\u5f62\u72b6",description:"Path builder to Shape",source:"@site/docs/patches/Shape/Path builder to Shape.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/Path builder to Shape",permalink:"/OrigamiStudio/docs/patches/Shape/Path builder to Shape",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/Path builder to Shape.md",tags:[{label:"path",permalink:"/OrigamiStudio/docs/tags/path"},{label:"shape",permalink:"/OrigamiStudio/docs/tags/shape"},{label:"path builder",permalink:"/OrigamiStudio/docs/tags/path-builder"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:110,frontMatter:{title:"Path builder to Shape \u8def\u5f84\u6784\u5efa\u5230\u5f62\u72b6",sidebar_position:110,tags:["path","shape","path builder"]},sidebar:"patchesSidebar",previous:{title:"Path Builder \u8def\u5f84\u6784\u5efa",permalink:"/OrigamiStudio/docs/patches/Shape/Path builder"},next:{title:"Curve Shape \u66f2\u7ebf\u5f62\u72b6",permalink:"/OrigamiStudio/docs/patches/Shape/Curve Shape"}},l={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Path Array",id:"path-array",level:4},{value:"Coordinate Space",id:"coordinate-space",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Shape",id:"shape",level:4}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"path-builder-to-shape"},"Path builder to Shape"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Path builder to Shape"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Path Array ",(0,i.kt)("span",null,"...")),(0,i.kt)("li",null,"Coordinate Space X ",(0,i.kt)("span",null,"0")," \xa0\xa0\xa0\xa0 Y ",(0,i.kt)("span",null,"0"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Shape"),(0,i.kt)("li",null,(0,i.kt)("span",null),"Error")))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"path-array"},"Path Array"),(0,i.kt)("h4",{id:"coordinate-space"},"Coordinate Space")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"shape"},"Shape"))))}c.isMDXComponent=!0}}]);