"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[76961],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(i),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return i?n.createElement(f,l(l({ref:t},u),{},{components:i})):n.createElement(f,l({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},71726:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const r={title:"Decimal Place \u5c0f\u6570\u4f4d",sidebar_position:20,tags:["utilities"]},l="Decimal Place",o={unversionedId:"patches/Utilities/Decimal Place",id:"patches/Utilities/Decimal Place",title:"Decimal Place \u5c0f\u6570\u4f4d",description:"Decimal Place",source:"@site/docs/patches/Utilities/Decimal Place.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Decimal Place",permalink:"/OrigamiStudio/docs/patches/Utilities/Decimal Place",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Decimal Place.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575955,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:20,frontMatter:{title:"Decimal Place \u5c0f\u6570\u4f4d",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Bounding Box",permalink:"/OrigamiStudio/docs/patches/Utilities/Bounding Box"},next:{title:"Height of Container \u5bb9\u5668\u9ad8\u5ea6",permalink:"/OrigamiStudio/docs/patches/Utilities/Height of Container"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Origin \u539f\u70b9",id:"origin-\u539f\u70b9",level:4},{value:"Radius \u534a\u5f84",id:"radius-\u534a\u5f84",level:4},{value:"Angle \u89d2\u5ea6",id:"angle-\u89d2\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"X/Y",id:"xy",level:4}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decimal-place"},"Decimal Place"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Decimal Place"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Origin ",(0,a.kt)("small",null," X ",(0,a.kt)("span",null,"0")," Y ",(0,a.kt)("span",null,"0"))),(0,a.kt)("li",null,"Radius ",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"Angle ",(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,(0,a.kt)("small",null," X ",(0,a.kt)("span",null,"0")," Y ",(0,a.kt)("span",null,"0")))))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"origin-\u539f\u70b9"},"Origin \u539f\u70b9"),(0,a.kt)("h4",{id:"radius-\u534a\u5f84"},"Radius \u534a\u5f84"),(0,a.kt)("h4",{id:"angle-\u89d2\u5ea6"},"Angle \u89d2\u5ea6")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"xy"},"X/Y"))),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);