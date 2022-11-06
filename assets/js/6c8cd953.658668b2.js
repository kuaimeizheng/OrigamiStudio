"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[52571],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>m});var r=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var s=r.createContext({}),u=function(t){var e=r.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var i=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(i),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return i?r.createElement(f,a(a({ref:e},c),{},{components:i})):r.createElement(f,a({ref:e},c))}));function m(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},71480:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=i(87462),n=(i(67294),i(3905));const o={title:"Auto Size \u81ea\u52a8\u5927\u5c0f",sidebar_position:20,tags:["utilities"]},a="Auto Size",l={unversionedId:"patches/Utilities/Auto Size",id:"patches/Utilities/Auto Size",title:"Auto Size \u81ea\u52a8\u5927\u5c0f",description:"Auto Size",source:"@site/docs/patches/Utilities/Auto Size.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Auto Size",permalink:"/OrigamiStudio/docs/patches/Utilities/Auto Size",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Auto Size.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:20,frontMatter:{title:"Auto Size \u81ea\u52a8\u5927\u5c0f",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Anchor Positions \u951a\u4f4d",permalink:"/OrigamiStudio/docs/patches/Utilities/Anchor Positions"},next:{title:"Bounding Box",permalink:"/OrigamiStudio/docs/patches/Utilities/Bounding Box"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:4},{value:"H \u9ad8\u5ea6",id:"h-\u9ad8\u5ea6",level:4},{value:"W \u5bbd\u5ea6",id:"w-\u5bbd\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:4}],c={toc:u};function p(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"auto-size"},"Auto Size"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Auto Size"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Layer ",(0,n.kt)("span",null,"None")),(0,n.kt)("li",null,"H ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"W ",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Size")))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,n.kt)("h4",{id:"h-\u9ad8\u5ea6"},"H \u9ad8\u5ea6"),(0,n.kt)("h4",{id:"w-\u5bbd\u5ea6"},"W \u5bbd\u5ea6")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);