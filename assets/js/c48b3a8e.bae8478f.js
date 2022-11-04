"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[24616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=s.createContext({}),c=function(e){var t=s.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?s.createElement(g,a(a({ref:t},p),{},{components:r})):s.createElement(g,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(87462),n=(r(67294),r(3905));const i={title:"Progress Events \u4e8b\u4ef6\u8fdb\u5ea6",sidebar_position:20,tags:["utilities"]},a="Progress Events",l={unversionedId:"patches/Utilities/Progress Events",id:"patches/Utilities/Progress Events",title:"Progress Events \u4e8b\u4ef6\u8fdb\u5ea6",description:"Progress Events",source:"@site/docs/patches/Utilities/Progress Events.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Progress Events",permalink:"/OrigamiStudio/docs/patches/Utilities/Progress Events",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Progress Events.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:20,frontMatter:{title:"Progress Events \u4e8b\u4ef6\u8fdb\u5ea6",sidebar_position:20,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Progress Direction \u8fdb\u5ea6\u65b9\u5411",permalink:"/OrigamiStudio/docs/patches/Utilities/Progress Direction"},next:{title:"Pulse Info \u8109\u51b2\u4fe1\u53f7",permalink:"/OrigamiStudio/docs/patches/Utilities/Pulse Info"}},o={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Animating \u52a8\u753b",id:"animating-\u52a8\u753b",level:4},{value:"Increasing \u589e\u52a0",id:"increasing-\u589e\u52a0",level:4},{value:"Decreasing \u51cf\u5c11",id:"decreasing-\u51cf\u5c11",level:4},{value:"Start A \u5f00\u59cb A",id:"start-a-\u5f00\u59cb-a",level:4},{value:"End A \u7ed3\u675f A",id:"end-a-\u7ed3\u675f-a",level:4},{value:"Start B \u5f00\u59cb B",id:"start-b-\u5f00\u59cb-b",level:4},{value:"End B \u7ed3\u675f B",id:"end-b-\u7ed3\u675f-b",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"progress-events"},"Progress Events"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Progress Events"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Progress ",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Animating ",(0,n.kt)("span",{className:"checkbox-off"})),(0,n.kt)("li",null,"Increasing ",(0,n.kt)("span",{className:"checkbox-off"})),(0,n.kt)("li",null,"Decreasing ",(0,n.kt)("span",{className:"checkbox-off"})),(0,n.kt)("li",null,"Start A",(0,n.kt)("span",{className:"patch-pulse-preview"},(0,n.kt)("span",{className:"dot"}))),(0,n.kt)("li",null,"End A",(0,n.kt)("span",{className:"patch-pulse-preview"},(0,n.kt)("span",{className:"dot"}))),(0,n.kt)("li",null,"Start B",(0,n.kt)("span",{className:"patch-pulse-preview"},(0,n.kt)("span",{className:"dot"}))),(0,n.kt)("li",null,"End B",(0,n.kt)("span",{className:"patch-pulse-preview"},(0,n.kt)("span",{className:"dot"})))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"animating-\u52a8\u753b"},"Animating \u52a8\u753b"),(0,n.kt)("h4",{id:"increasing-\u589e\u52a0"},"Increasing \u589e\u52a0"),(0,n.kt)("h4",{id:"decreasing-\u51cf\u5c11"},"Decreasing \u51cf\u5c11"),(0,n.kt)("h4",{id:"start-a-\u5f00\u59cb-a"},"Start A \u5f00\u59cb A"),(0,n.kt)("h4",{id:"end-a-\u7ed3\u675f-a"},"End A \u7ed3\u675f A"),(0,n.kt)("h4",{id:"start-b-\u5f00\u59cb-b"},"Start B \u5f00\u59cb B"),(0,n.kt)("h4",{id:"end-b-\u7ed3\u675f-b"},"End B \u7ed3\u675f B"))),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);