"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[26409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},81620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"3D Shape Camera 3D \u56fe\u5f62\u76f8\u673a",sidebar_position:160,tags:["shape"]},o="3D Shape Camera",l={unversionedId:"patches/Shape/3D Shape Camera",id:"patches/Shape/3D Shape Camera",title:"3D Shape Camera 3D \u56fe\u5f62\u76f8\u673a",description:"3D Shape Camera",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Shape/3D Shape Camera.md",sourceDirName:"patches/Shape",slug:"/patches/Shape/3D Shape Camera",permalink:"/OrigamiStudio/en/docs/patches/Shape/3D Shape Camera",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Shape/3D Shape Camera.md",tags:[{label:"shape",permalink:"/OrigamiStudio/en/docs/tags/shape"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667493511,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:160,frontMatter:{title:"3D Shape Camera 3D \u56fe\u5f62\u76f8\u673a",sidebar_position:160,tags:["shape"]},sidebar:"patchesSidebar",previous:{title:"Curve Shape \u66f2\u7ebf\u5f62\u72b6",permalink:"/OrigamiStudio/en/docs/patches/Shape/Curve Shape"},next:{title:"3D Shape Transform 3D \u56fe\u5f62\u53d8\u5f62",permalink:"/OrigamiStudio/en/docs/patches/Shape/3D Shape Transform"}},p={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Shape",id:"shape",level:4},{value:"Rotation",id:"rotation",level:4},{value:"Camera Position",id:"camera-position",level:4},{value:"Focal Length",id:"focal-length",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Shape",id:"shape-1",level:4}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"3d-shape-camera"},"3D Shape Camera"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"3D Shape Camera"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Shape ",(0,n.kt)("span",null,"[...]")),(0,n.kt)("li",null,"Rotation ",(0,n.kt)("small",null," X ",(0,n.kt)("span",null,"0")," Y ",(0,n.kt)("span",null,"0")," Z ",(0,n.kt)("span",null,"0"))),(0,n.kt)("li",null,"Camera Position ",(0,n.kt)("small",null," X ",(0,n.kt)("span",null,"0")," Y ",(0,n.kt)("span",null,"0")," Z ",(0,n.kt)("span",null,"0"))),(0,n.kt)("li",null,"Focal Length ",(0,n.kt)("span",null,"60"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Shape ",(0,n.kt)("span",null))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"shape"},"Shape"),(0,n.kt)("h4",{id:"rotation"},"Rotation"),(0,n.kt)("h4",{id:"camera-position"},"Camera Position"),(0,n.kt)("h4",{id:"focal-length"},"Focal Length")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"shape-1"},"Shape"))))}c.isMDXComponent=!0}}]);