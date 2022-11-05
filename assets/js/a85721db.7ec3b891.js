"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[25612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(r),m=n,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},27413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const i={title:"Audio Metering \u97f3\u9891\u6d4b\u91cf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Audio Metering \u97f3\u9891\u6d4b\u91cf",u={unversionedId:"documentation/Media/Audio Metering",id:"documentation/Media/Audio Metering",title:"Audio Metering \u97f3\u9891\u6d4b\u91cf",description:"Measure the peak volume, current volume, and frequency data (sound wave) of an audio source (Microphone, Audio Layer or Video Layer).",source:"@site/docs/documentation/Media/Audio Metering.md",sourceDirName:"documentation/Media",slug:"/documentation/Media/Audio Metering",permalink:"/OrigamiStudio/docs/documentation/Media/Audio Metering",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Media/Audio Metering.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Audio Metering \u97f3\u9891\u6d4b\u91cf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Media \u5a92\u4f53",permalink:"/OrigamiStudio/docs/category/media-\u5a92\u4f53"},next:{title:"Photo Albums \u76f8\u518c",permalink:"/OrigamiStudio/docs/documentation/Media/Photo Albums"}},l={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Resolution \u89e3\u6790\u5ea6",id:"resolution-\u89e3\u6790\u5ea6",level:3},{value:"Format \u683c\u5f0f\u5316",id:"format-\u683c\u5f0f\u5316",level:3},{value:"Peak Volume \u5cf0\u503c\u97f3\u91cf",id:"peak-volume-\u5cf0\u503c\u97f3\u91cf",level:3},{value:"Volume \u97f3\u91cf",id:"volume-\u97f3\u91cf",level:3},{value:"Waveform Data \u6ce2\u5f62\u6570\u636e",id:"waveform-data-\u6ce2\u5f62\u6570\u636e",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"audio-metering-\u97f3\u9891\u6d4b\u91cf"},"Audio Metering \u97f3\u9891\u6d4b\u91cf"),(0,n.kt)("p",null,"Measure the peak volume, current volume, and frequency data (sound wave) of an audio source (Microphone, Audio Layer or Video Layer)."),(0,n.kt)("p",null,"\u6d4b\u91cf\u97f3\u9891\u6e90\uff08\u9ea6\u514b\u98ce\u3001\u97f3\u9891\u5c42\u6216\u89c6\u9891\u5c42\uff09\u7684\u5cf0\u503c\u97f3\u91cf\u3001\u5f53\u524d\u97f3\u91cf\u548c\u9891\u7387\u6570\u636e\uff08\u58f0\u6ce2\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(59362).Z,width:"1494",height:"260"})),(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("p",null,"Metering output from an audio source such as a Microphone patch, Audio Layer, or Video Layer."),(0,n.kt)("h3",{id:"resolution-\u89e3\u6790\u5ea6"},"Resolution \u89e3\u6790\u5ea6"),(0,n.kt)("p",null,"The number of loops to return from the Waveform output."),(0,n.kt)("p",null,"\u4ece\u6ce2\u5f62\u8f93\u51fa\u8fd4\u56de\u7684\u5faa\u73af\u6570\u3002"),(0,n.kt)("h3",{id:"format-\u683c\u5f0f\u5316"},"Format \u683c\u5f0f\u5316"),(0,n.kt)("p",null,"An enum of the output type to return, either as a percentage from 0 to 1 or as decibels (-160 (silence) to 0)."),(0,n.kt)("p",null,"\u8981\u8fd4\u56de\u7684\u8f93\u51fa\u7c7b\u578b\u7684\u679a\u4e3e\uff0c\u53ef\u4ee5\u662f\u4ece 0 \u5230 1 \u7684\u767e\u5206\u6bd4\uff0c\u4e5f\u53ef\u4ee5\u662f\u5206\u8d1d\uff08-160\uff08\u9759\u97f3\uff09\u5230 0\uff09\u3002"),(0,n.kt)("h3",{id:"peak-volume-\u5cf0\u503c\u97f3\u91cf"},"Peak Volume \u5cf0\u503c\u97f3\u91cf"),(0,n.kt)("p",null,"A number of the highest point over time (roughly every 0.5s or so) output as a percent or in decibels."),(0,n.kt)("p",null,"\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb(\u5927\u7ea6\u6bcf0.5\u79d2\u5de6\u53f3)\uff0c\u4e00\u4e2a\u767e\u5206\u6bd4\u6216\u5206\u8d1d\u7684\u6570\u5b57\u8f93\u51fa\u3002"),(0,n.kt)("h3",{id:"volume-\u97f3\u91cf"},"Volume \u97f3\u91cf"),(0,n.kt)("p",null,"A number of the current volume as a percent or in decibels."),(0,n.kt)("p",null,"\u5f53\u524d\u97f3\u91cf\u7684\u767e\u5206\u6570\u6216\u5206\u8d1d\u6570\u3002"),(0,n.kt)("h3",{id:"waveform-data-\u6ce2\u5f62\u6570\u636e"},"Waveform Data \u6ce2\u5f62\u6570\u636e"),(0,n.kt)("p",null,"A loop of low, mid, and high ranges of the audio output as a percent or in decibels."),(0,n.kt)("p",null,"\u4ee5\u767e\u5206\u6bd4\u6216\u5206\u8d1d\u4e3a\u5355\u4f4d\u7684\u97f3\u9891\u8f93\u51fa\u7684\u4f4e\u3001\u4e2d\u3001\u9ad8\u8303\u56f4\u7684\u5faa\u73af\u3002"))}p.isMDXComponent=!0},59362:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/audio-metering-ac6b303f051628fb4a8241c1f2f2b6fa.png"}}]);