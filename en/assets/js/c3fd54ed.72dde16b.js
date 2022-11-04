"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[31810],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(i),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return i?n.createElement(f,l(l({ref:t},u),{},{components:i})):n.createElement(f,l({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},68462:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const a={title:"Decimal Place \u5c0f\u6570\u4f4d",sidebar_position:20,tags:["utilities"]},l="Decimal Place",o={unversionedId:"patches/Utilities/Decimal Place",id:"patches/Utilities/Decimal Place",title:"Decimal Place \u5c0f\u6570\u4f4d",description:"Decimal Place",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Utilities/Decimal Place.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Decimal Place",permalink:"/OrigamiStudio/en/docs/patches/Utilities/Decimal Place",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Decimal Place.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/en/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:20,frontMatter:{title:"Decimal Place \u5c0f\u6570\u4f4d",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Bounding Box",permalink:"/OrigamiStudio/en/docs/patches/Utilities/Bounding Box"},next:{title:"Height of Container \u5bb9\u5668\u9ad8\u5ea6",permalink:"/OrigamiStudio/en/docs/patches/Utilities/Height of Container"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Origin \u539f\u70b9",id:"origin-\u539f\u70b9",level:4},{value:"Radius \u534a\u5f84",id:"radius-\u534a\u5f84",level:4},{value:"Angle \u89d2\u5ea6",id:"angle-\u89d2\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"X/Y",id:"xy",level:4}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decimal-place"},"Decimal Place"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Decimal Place"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Origin ",(0,r.kt)("small",null," X ",(0,r.kt)("span",null,"0")," Y ",(0,r.kt)("span",null,"0"))),(0,r.kt)("li",null,"Radius ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Angle ",(0,r.kt)("span",null,"0"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,(0,r.kt)("small",null," X ",(0,r.kt)("span",null,"0")," Y ",(0,r.kt)("span",null,"0")))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"origin-\u539f\u70b9"},"Origin \u539f\u70b9"),(0,r.kt)("h4",{id:"radius-\u534a\u5f84"},"Radius \u534a\u5f84"),(0,r.kt)("h4",{id:"angle-\u89d2\u5ea6"},"Angle \u89d2\u5ea6")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"xy"},"X/Y"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);