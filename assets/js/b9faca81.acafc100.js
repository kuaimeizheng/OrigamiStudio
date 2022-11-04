"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[37297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const o={title:"Audio Waveform Maker \u97f3\u9891\u6ce2\u5f62\u5236\u4f5c",sidebar_position:20,tags:["media"]},n="Audio Waveform Maker",l={unversionedId:"patches/Media/Audio Waveform Maker",id:"patches/Media/Audio Waveform Maker",title:"Audio Waveform Maker \u97f3\u9891\u6ce2\u5f62\u5236\u4f5c",description:"Audio Waveform Maker",source:"@site/docs/patches/Media/Audio Waveform Maker.md",sourceDirName:"patches/Media",slug:"/patches/Media/Audio Waveform Maker",permalink:"/OrigamiStudio/docs/patches/Media/Audio Waveform Maker",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Media/Audio Waveform Maker.md",tags:[{label:"media",permalink:"/OrigamiStudio/docs/tags/media"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:20,frontMatter:{title:"Audio Waveform Maker \u97f3\u9891\u6ce2\u5f62\u5236\u4f5c",sidebar_position:20,tags:["media"]},sidebar:"patchesSidebar",previous:{title:"Media \u5a92\u4f53",permalink:"/OrigamiStudio/docs/category/media-\u5a92\u4f53-1"},next:{title:"Oscillator \u632f\u8361\u5668",permalink:"/OrigamiStudio/docs/patches/Media/Oscillator"}},u={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:4},{value:"Sample \u91c7\u6837",id:"sample-\u91c7\u6837",level:4},{value:"Volume Meter \u97f3\u91cf\u8ba1\u7b97\u5668",id:"volume-meter-\u97f3\u91cf\u8ba1\u7b97\u5668",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Shape",id:"shape",level:4}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"audio-waveform-maker"},"Audio Waveform Maker"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Audio Waveform Maker"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Size ",(0,i.kt)("small",null," X ",(0,i.kt)("span",null,"325")," Y ",(0,i.kt)("span",null,"100"))),(0,i.kt)("li",null,"Sample ",(0,i.kt)("span",{className:"checkbox-off"})),(0,i.kt)("li",null,"Volume Meter ",(0,i.kt)("span",null,"0"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Shape")))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,i.kt)("h4",{id:"sample-\u91c7\u6837"},"Sample \u91c7\u6837"),(0,i.kt)("h4",{id:"volume-meter-\u97f3\u91cf\u8ba1\u7b97\u5668"},"Volume Meter \u97f3\u91cf\u8ba1\u7b97\u5668")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"shape"},"Shape"))),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);