"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[25612],{64669:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=o(85893),i=o(11151);const r={title:"Audio Metering \u97f3\u9891\u6d4b\u91cf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Audio Metering \u97f3\u9891\u6d4b\u91cf",d={id:"documentation/Media/Audio Metering",title:"Audio Metering \u97f3\u9891\u6d4b\u91cf",description:"Measure the peak volume, current volume, and frequency data (sound wave) of an audio source (Microphone, Audio Layer or Video Layer).",source:"@site/docs/documentation/Media/Audio Metering.md",sourceDirName:"documentation/Media",slug:"/documentation/Media/Audio Metering",permalink:"/docs/documentation/Media/Audio Metering",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Media/Audio Metering.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Audio Metering \u97f3\u9891\u6d4b\u91cf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Media \u5a92\u4f53",permalink:"/docs/category/media-\u5a92\u4f53"},next:{title:"Photo Albums \u76f8\u518c",permalink:"/docs/documentation/Media/Photo Albums"}},u={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Resolution \u89e3\u6790\u5ea6",id:"resolution-\u89e3\u6790\u5ea6",level:3},{value:"Format \u683c\u5f0f\u5316",id:"format-\u683c\u5f0f\u5316",level:3},{value:"Peak Volume \u5cf0\u503c\u97f3\u91cf",id:"peak-volume-\u5cf0\u503c\u97f3\u91cf",level:3},{value:"Volume \u97f3\u91cf",id:"volume-\u97f3\u91cf",level:3},{value:"Waveform Data \u6ce2\u5f62\u6570\u636e",id:"waveform-data-\u6ce2\u5f62\u6570\u636e",level:3}];function c(e){const t={h1:"h1",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"audio-metering-\u97f3\u9891\u6d4b\u91cf",children:"Audio Metering \u97f3\u9891\u6d4b\u91cf"}),"\n",(0,n.jsx)(t.p,{children:"Measure the peak volume, current volume, and frequency data (sound wave) of an audio source (Microphone, Audio Layer or Video Layer)."}),"\n",(0,n.jsx)(t.p,{children:"\u6d4b\u91cf\u97f3\u9891\u6e90\uff08\u9ea6\u514b\u98ce\u3001\u97f3\u9891\u5c42\u6216\u89c6\u9891\u5c42\uff09\u7684\u5cf0\u503c\u97f3\u91cf\u3001\u5f53\u524d\u97f3\u91cf\u548c\u9891\u7387\u6570\u636e\uff08\u58f0\u6ce2\uff09\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image",src:o(59362).Z+"",width:"1494",height:"260"})}),"\n",(0,n.jsx)(t.h3,{id:"input-\u8f93\u5165",children:"Input \u8f93\u5165"}),"\n",(0,n.jsx)(t.p,{children:"Metering output from an audio source such as a Microphone patch, Audio Layer, or Video Layer."}),"\n",(0,n.jsx)(t.h3,{id:"resolution-\u89e3\u6790\u5ea6",children:"Resolution \u89e3\u6790\u5ea6"}),"\n",(0,n.jsx)(t.p,{children:"The number of loops to return from the Waveform output."}),"\n",(0,n.jsx)(t.p,{children:"\u4ece\u6ce2\u5f62\u8f93\u51fa\u8fd4\u56de\u7684\u5faa\u73af\u6570\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"format-\u683c\u5f0f\u5316",children:"Format \u683c\u5f0f\u5316"}),"\n",(0,n.jsx)(t.p,{children:"An enum of the output type to return, either as a percentage from 0 to 1 or as decibels (-160 (silence) to 0)."}),"\n",(0,n.jsx)(t.p,{children:"\u8981\u8fd4\u56de\u7684\u8f93\u51fa\u7c7b\u578b\u7684\u679a\u4e3e\uff0c\u53ef\u4ee5\u662f\u4ece 0 \u5230 1 \u7684\u767e\u5206\u6bd4\uff0c\u4e5f\u53ef\u4ee5\u662f\u5206\u8d1d\uff08-160\uff08\u9759\u97f3\uff09\u5230 0\uff09\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"peak-volume-\u5cf0\u503c\u97f3\u91cf",children:"Peak Volume \u5cf0\u503c\u97f3\u91cf"}),"\n",(0,n.jsx)(t.p,{children:"A number of the highest point over time (roughly every 0.5s or so) output as a percent or in decibels."}),"\n",(0,n.jsx)(t.p,{children:"\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb(\u5927\u7ea6\u6bcf0.5\u79d2\u5de6\u53f3)\uff0c\u4e00\u4e2a\u767e\u5206\u6bd4\u6216\u5206\u8d1d\u7684\u6570\u5b57\u8f93\u51fa\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"volume-\u97f3\u91cf",children:"Volume \u97f3\u91cf"}),"\n",(0,n.jsx)(t.p,{children:"A number of the current volume as a percent or in decibels."}),"\n",(0,n.jsx)(t.p,{children:"\u5f53\u524d\u97f3\u91cf\u7684\u767e\u5206\u6570\u6216\u5206\u8d1d\u6570\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"waveform-data-\u6ce2\u5f62\u6570\u636e",children:"Waveform Data \u6ce2\u5f62\u6570\u636e"}),"\n",(0,n.jsx)(t.p,{children:"A loop of low, mid, and high ranges of the audio output as a percent or in decibels."}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u767e\u5206\u6bd4\u6216\u5206\u8d1d\u4e3a\u5355\u4f4d\u7684\u97f3\u9891\u8f93\u51fa\u7684\u4f4e\u3001\u4e2d\u3001\u9ad8\u8303\u56f4\u7684\u5faa\u73af\u3002"})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},59362:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/audio-metering-ac6b303f051628fb4a8241c1f2f2b6fa.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>a});var n=o(67294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);