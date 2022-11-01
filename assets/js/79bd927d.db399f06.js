"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[35696],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return a?r.createElement(v,l(l({ref:t},c),{},{components:a})):r.createElement(v,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={title:"Oscillator \u632f\u8361\u5668",sidebar_position:20,tags:["media"]},l="Oscillator",o={unversionedId:"patches/Media/Oscillator",id:"patches/Media/Oscillator",title:"Oscillator \u632f\u8361\u5668",description:"Oscillator",source:"@site/docs/patches/Media/Oscillator.md",sourceDirName:"patches/Media",slug:"/patches/Media/Oscillator",permalink:"/OrigamiStudio/docs/patches/Media/Oscillator",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Media/Oscillator.md",tags:[{label:"media",permalink:"/OrigamiStudio/docs/tags/media"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667316201,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:20,frontMatter:{title:"Oscillator \u632f\u8361\u5668",sidebar_position:20,tags:["media"]},sidebar:"patchesSidebar",previous:{title:"Audio Waveform Maker \u97f3\u9891\u6ce2\u5f62\u5236\u4f5c",permalink:"/OrigamiStudio/docs/patches/Media/Audio Waveform Maker"},next:{title:"Pattern \u6a21\u5f0f",permalink:"/OrigamiStudio/docs/patches/Media/Pattern"}},s={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Frequency \u9891\u7387",id:"frequency-\u9891\u7387",level:4},{value:"Wave \u6ce2\u957f",id:"wave-\u6ce2\u957f",level:4},{value:"Sine \u6b63\u5f26",id:"sine-\u6b63\u5f26",level:4},{value:"Square \u6b63\u65b9\u5f62",id:"square-\u6b63\u65b9\u5f62",level:4},{value:"Triangle \u4e09\u89d2\u5f62",id:"triangle-\u4e09\u89d2\u5f62",level:4},{value:"Sawtooth \u952f\u9f7f",id:"sawtooth-\u952f\u9f7f",level:4},{value:"Noise \u566a\u70b9",id:"noise-\u566a\u70b9",level:4},{value:"Pause \u6682\u505c",id:"pause-\u6682\u505c",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Number \u6570\u503c",id:"number-\u6570\u503c",level:4}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"oscillator"},"Oscillator"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Oscillator"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Frequency",(0,i.kt)("span",null,"0.2")),(0,i.kt)("li",null,"Wave",(0,i.kt)("span",null,"1")),(0,i.kt)("li",null,"Sine",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Square",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Triangle",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Sawtooth",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Noise",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Pause",(0,i.kt)("span",{className:"checkbox-off"}))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,(0,i.kt)("span",null,"1"))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"frequency-\u9891\u7387"},"Frequency \u9891\u7387"),(0,i.kt)("h4",{id:"wave-\u6ce2\u957f"},"Wave \u6ce2\u957f"),(0,i.kt)("h4",{id:"sine-\u6b63\u5f26"},"Sine \u6b63\u5f26"),(0,i.kt)("h4",{id:"square-\u6b63\u65b9\u5f62"},"Square \u6b63\u65b9\u5f62"),(0,i.kt)("h4",{id:"triangle-\u4e09\u89d2\u5f62"},"Triangle \u4e09\u89d2\u5f62"),(0,i.kt)("h4",{id:"sawtooth-\u952f\u9f7f"},"Sawtooth \u952f\u9f7f"),(0,i.kt)("h4",{id:"noise-\u566a\u70b9"},"Noise \u566a\u70b9"),(0,i.kt)("h4",{id:"pause-\u6682\u505c"},"Pause \u6682\u505c")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"number-\u6570\u503c"},"Number \u6570\u503c"))),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);