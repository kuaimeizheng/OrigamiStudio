"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[89989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Drag Scale Rotate",sidebar_position:20,tags:["interaction"]},i="Drag Scale Rotate",l={unversionedId:"patches/Interaction/Drag Scale Rotate",id:"patches/Interaction/Drag Scale Rotate",title:"Drag Scale Rotate",description:"Drag Scale Rotate",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Interaction/Drag Scale Rotate.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Drag Scale Rotate",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Drag Scale Rotate",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Drag Scale Rotate.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/en/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:20,frontMatter:{title:"Drag Scale Rotate",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Drag Recorder \u62d6\u62fd\u8bb0\u5f55",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Drag Recorder"},next:{title:"Interaction Recorder \u4ea4\u4e92\u8bb0\u5f55",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Interaction Recorder"}},c={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:4},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:4},{value:"Clip Content \u88c1\u526a\u5185\u5bb9",id:"clip-content-\u88c1\u526a\u5185\u5bb9",level:4},{value:"Bounds \u8fb9\u754c",id:"bounds-\u8fb9\u754c",level:4},{value:"Pan",id:"pan",level:4},{value:"Zoom \u7f29\u653e",id:"zoom-\u7f29\u653e",level:4},{value:"Rotate \u65cb\u8f6c",id:"rotate-\u65cb\u8f6c",level:4},{value:"Momentum \u52a8\u91cf",id:"momentum-\u52a8\u91cf",level:4},{value:"Friction \u6469\u64e6",id:"friction-\u6469\u64e6",level:4}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drag-scale-rotate"},"Drag Scale Rotate"),(0,a.kt)("div",{class:"patch-container"},(0,a.kt)("div",{class:"patch layer"},(0,a.kt)("h3",null,"Drag Scale Rotate"),(0,a.kt)("ul",{class:"inputs"},(0,a.kt)("li",null,"Enable"),(0,a.kt)("li",null,"Position"),(0,a.kt)("li",null,"Size"),(0,a.kt)("li",null,"Clip Content"),(0,a.kt)("li",null,"Bounds"),(0,a.kt)("li",null,"Pan"),(0,a.kt)("li",null,"Zoom"),(0,a.kt)("li",null,"Rotate"),(0,a.kt)("li",null,"Momentum"),(0,a.kt)("li",null,"Friction")))),(0,a.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("h4",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,a.kt)("h4",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,a.kt)("h4",{id:"clip-content-\u88c1\u526a\u5185\u5bb9"},"Clip Content \u88c1\u526a\u5185\u5bb9"),(0,a.kt)("h4",{id:"bounds-\u8fb9\u754c"},"Bounds \u8fb9\u754c"),(0,a.kt)("h4",{id:"pan"},"Pan"),(0,a.kt)("h4",{id:"zoom-\u7f29\u653e"},"Zoom \u7f29\u653e"),(0,a.kt)("h4",{id:"rotate-\u65cb\u8f6c"},"Rotate \u65cb\u8f6c"),(0,a.kt)("h4",{id:"momentum-\u52a8\u91cf"},"Momentum \u52a8\u91cf"),(0,a.kt)("h4",{id:"friction-\u6469\u64e6"},"Friction \u6469\u64e6"),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);