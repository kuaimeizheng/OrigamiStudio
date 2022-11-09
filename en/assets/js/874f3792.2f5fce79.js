"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[42857],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(i),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return i?r.createElement(f,a(a({ref:t},c),{},{components:i})):r.createElement(f,a({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},33354:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=i(87462),n=(i(67294),i(3905));const o={title:"Auto Size \u81ea\u52a8\u5927\u5c0f",sidebar_position:20,tags:["utilities"]},a="Auto Size",l={unversionedId:"patches/Utilities/Auto Size",id:"patches/Utilities/Auto Size",title:"Auto Size \u81ea\u52a8\u5927\u5c0f",description:"Auto Size",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Utilities/Auto Size.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Auto Size",permalink:"/OrigamiStudio/en/docs/patches/Utilities/Auto Size",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Auto Size.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/en/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:20,frontMatter:{title:"Auto Size \u81ea\u52a8\u5927\u5c0f",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Anchor Positions \u951a\u4f4d",permalink:"/OrigamiStudio/en/docs/patches/Utilities/Anchor Positions"},next:{title:"Bounding Box",permalink:"/OrigamiStudio/en/docs/patches/Utilities/Bounding Box"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:4},{value:"H \u9ad8\u5ea6",id:"h-\u9ad8\u5ea6",level:4},{value:"W \u5bbd\u5ea6",id:"w-\u5bbd\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:4}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"auto-size"},"Auto Size"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Auto Size"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Layer ",(0,n.kt)("span",null,"None")),(0,n.kt)("li",null,"H ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"W ",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Size")))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,n.kt)("h4",{id:"h-\u9ad8\u5ea6"},"H \u9ad8\u5ea6"),(0,n.kt)("h4",{id:"w-\u5bbd\u5ea6"},"W \u5bbd\u5ea6")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);