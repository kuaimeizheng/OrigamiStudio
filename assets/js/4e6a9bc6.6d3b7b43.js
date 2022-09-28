"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[48159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),k=a,v=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},23110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"Drag Recorder \u62d6\u62fd\u8bb0\u5f55",sidebar_position:20,tags:["interaction"]},i="Drag Recorder",o={unversionedId:"patches/Interaction/Drag Recorder",id:"patches/Interaction/Drag Recorder",title:"Drag Recorder \u62d6\u62fd\u8bb0\u5f55",description:"Drag Recorder",source:"@site/docs/patches/Interaction/Drag Recorder.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Drag Recorder",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Recorder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Drag Recorder.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1664356247,formattedLastUpdatedAt:"2022\u5e749\u670828\u65e5",sidebarPosition:20,frontMatter:{title:"Drag Recorder \u62d6\u62fd\u8bb0\u5f55",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Desktop Scroll \u7535\u8111\u6eda\u52a8",permalink:"/OrigamiStudio/docs/patches/Interaction/Desktop Scroll"},next:{title:"Drag Scale Rotate",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Scale Rotate"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:4},{value:"Start \u5f00\u59cb\u4f4d\u7f6e",id:"start-\u5f00\u59cb\u4f4d\u7f6e",level:4},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:4},{value:"Settings \u8bbe\u7f6e\u53c2\u6570",id:"settings-\u8bbe\u7f6e\u53c2\u6570",level:4},{value:"Record \u5f55\u5236",id:"record-\u5f55\u5236",level:4},{value:"Playback \u56de\u653e",id:"playback-\u56de\u653e",level:4},{value:"Recording \u8bb0\u5f55",id:"recording-\u8bb0\u5f55",level:4},{value:"Load \u52a0\u8f7d",id:"load-\u52a0\u8f7d",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Status \u72b6\u6001",id:"status-\u72b6\u6001",level:4},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:4},{value:"Velocity \u901f\u5ea6",id:"velocity-\u901f\u5ea6",level:4},{value:"Translation \u5e73\u79fb",id:"translation-\u5e73\u79fb",level:4},{value:"Recording \u8bb0\u5f55",id:"recording-\u8bb0\u5f55-1",level:4}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drag-recorder"},"Drag Recorder"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Drag Recorder"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Enable ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Layer ",(0,a.kt)("span",null,"drag")),(0,a.kt)("li",null,"Start ",(0,a.kt)("small",null," X ",(0,a.kt)("span",null,"150")," Y ",(0,a.kt)("span",null,"0"))),(0,a.kt)("li",null,"Reset"),(0,a.kt)("li",null,"Settings ",(0,a.kt)("span",null,"[...]")),(0,a.kt)("li",null,"Record ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Playback ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Recording ",(0,a.kt)("span",null,"...")),(0,a.kt)("li",null,"Load")),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Status ",(0,a.kt)("span",{className:"patch-color-preview status"})),(0,a.kt)("li",null,"Position ",(0,a.kt)("small",null," X ",(0,a.kt)("span",null,"150")," Y ",(0,a.kt)("span",null,"0"))),(0,a.kt)("li",null,"Velocity ",(0,a.kt)("small",null," W ",(0,a.kt)("span",null,"150")," H ",(0,a.kt)("span",null,"0"))),(0,a.kt)("li",null,"Translation ",(0,a.kt)("small",null," W ",(0,a.kt)("span",null,"150")," H ",(0,a.kt)("span",null,"0"))),(0,a.kt)("li",null,"Recording ",(0,a.kt)("span",null,"[...]"))))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A Boolean value."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,a.kt)("h4",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,a.kt)("h4",{id:"start-\u5f00\u59cb\u4f4d\u7f6e"},"Start \u5f00\u59cb\u4f4d\u7f6e"),(0,a.kt)("h4",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e"),(0,a.kt)("h4",{id:"settings-\u8bbe\u7f6e\u53c2\u6570"},"Settings \u8bbe\u7f6e\u53c2\u6570"),(0,a.kt)("h4",{id:"record-\u5f55\u5236"},"Record \u5f55\u5236"),(0,a.kt)("h4",{id:"playback-\u56de\u653e"},"Playback \u56de\u653e"),(0,a.kt)("h4",{id:"recording-\u8bb0\u5f55"},"Recording \u8bb0\u5f55"),(0,a.kt)("h4",{id:"load-\u52a0\u8f7d"},"Load \u52a0\u8f7d")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"status-\u72b6\u6001"},"Status \u72b6\u6001"),(0,a.kt)("h4",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,a.kt)("h4",{id:"velocity-\u901f\u5ea6"},"Velocity \u901f\u5ea6"),(0,a.kt)("h4",{id:"translation-\u5e73\u79fb"},"Translation \u5e73\u79fb"),(0,a.kt)("h4",{id:"recording-\u8bb0\u5f55-1"},"Recording \u8bb0\u5f55"))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);