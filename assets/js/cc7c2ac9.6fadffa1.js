"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[48803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),k=o,m=d["".concat(a,".").concat(k)]||d[k]||p[k]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"3D Thickness",sidebar_position:20,tags:["3d"]},l="3D Thickness",s={unversionedId:"patches/3D/3D Thickness",id:"patches/3D/3D Thickness",title:"3D Thickness",description:"3D Thickness",source:"@site/docs/patches/3D/3D Thickness.md",sourceDirName:"patches/3D",slug:"/patches/3D/3D Thickness",permalink:"/OrigamiStudio/docs/patches/3D/3D Thickness",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/3D/3D Thickness.md",tags:[{label:"3d",permalink:"/OrigamiStudio/docs/tags/3-d"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:20,frontMatter:{title:"3D Thickness",sidebar_position:20,tags:["3d"]},sidebar:"patchesSidebar",previous:{title:"3D Pivot \u4e09\u7ef4\u4e2d\u5fc3\u70b9",permalink:"/OrigamiStudio/docs/patches/3D/3D Pivot"},next:{title:"Color \u989c\u8272",permalink:"/OrigamiStudio/docs/category/color-\u989c\u8272-1"}},a={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Front Color",id:"front-color",level:4},{value:"Back Color",id:"back-color",level:4},{value:"Side Color",id:"side-color",level:4},{value:"Thickness",id:"thickness",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Position Z",id:"position-z",level:4},{value:"Color",id:"color",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3d-thickness"},"3D Thickness"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch consumer"},(0,o.kt)("h3",null,"3D Thickness"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Front Color",(0,o.kt)("span",{className:"color"})),(0,o.kt)("li",null,"Back Color",(0,o.kt)("span",{className:"color"})),(0,o.kt)("li",null,"Side Color",(0,o.kt)("span",{className:"color"})),(0,o.kt)("li",null,"Thickness ",(0,o.kt)("span",null,"4")," ")),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Position Z ",(0,o.kt)("span",null,"2")),(0,o.kt)("li",null,"Color",(0,o.kt)("span",{className:"color"}))))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"front-color"},"Front Color"),(0,o.kt)("h4",{id:"back-color"},"Back Color"),(0,o.kt)("h4",{id:"side-color"},"Side Color"),(0,o.kt)("h4",{id:"thickness"},"Thickness")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"position-z"},"Position Z"),(0,o.kt)("h4",{id:"color"},"Color"))),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);