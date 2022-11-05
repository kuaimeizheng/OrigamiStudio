"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[19069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"Time \u65f6\u95f4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Time \u65f6\u95f4",l={unversionedId:"documentation/Utility/Time",id:"documentation/Utility/Time",title:"Time \u65f6\u95f4",description:"Track the number of seconds and frames since the start of the prototype.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Time.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Time",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Time",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Time.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{title:"Time \u65f6\u95f4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Switch"},next:{title:"Transition \u8fc7\u6e21",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Transition"}},s={},c=[{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4-1",level:3},{value:"Frame \u5e27",id:"frame-\u5e27",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time-\u65f6\u95f4"},"Time \u65f6\u95f4"),(0,i.kt)("p",null,"Track the number of seconds and frames since the start of the prototype."),(0,i.kt)("p",null,"\u8ddf\u8e2a\u81ea\u539f\u578b\u5f00\u59cb\u4ee5\u6765\u7684\u79d2\u6570\u548c\u5e27\u6570\u3002"),(0,i.kt)("p",null,"Use Date & Time Formatter to make human-readable formats."),(0,i.kt)("p",null,"\u4f7f\u7528 Date & Time Formatter\u6a21\u5757 \u5236\u4f5c\u6211\u4eec\u5e38\u89c1\u523b\u5ea6\u7684\u683c\u5f0f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(11974).Z,width:"1316",height:"202"})),(0,i.kt)("h3",{id:"time-\u65f6\u95f4-1"},"Time \u65f6\u95f4"),(0,i.kt)("p",null,"The number of seconds have have passed since the start of the prototypes, starting at 0."),(0,i.kt)("p",null,"\u81ea\u539f\u578b\u5f00\u59cb\u4ee5\u6765\u5df2\u7ecf\u8fc7\u53bb\u7684\u79d2\u6570\uff0c\u4ece 0 \u5f00\u59cb\u3002"),(0,i.kt)("h3",{id:"frame-\u5e27"},"Frame \u5e27"),(0,i.kt)("p",null,"The number of frames have have passed since the start of the prototypes, starting at 0. When running at 60 frames per second, frames should be time * 60."),(0,i.kt)("p",null,"\u4ece\u539f\u578b\u5f00\u59cb\u5230\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u7684\u5e27\u6570\uff0c\u4ece 0 \u5f00\u59cb\u3002\u4ee5\u6bcf\u79d2 60 \u5e27\u8fd0\u884c\u65f6\uff0c\u5e27\u6570\u5e94\u8be5\u662f\u65f6\u95f4 * 60\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"))}m.isMDXComponent=!0},11974:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/time-1f48031b70646af43a847f6ba31ac2a4.png"}}]);