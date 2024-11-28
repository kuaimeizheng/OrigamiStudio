"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[68049],{79451:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(85893),r=i(11151);const a={title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},s="Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",o={id:"documentation/Utility/Date & Time Formatter",title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",description:"---",source:"@site/docs/documentation/Utility/Date & Time Formatter.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Date & Time Formatter",permalink:"/docs/documentation/Utility/Date & Time Formatter",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Date & Time Formatter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Counter \u8ba1\u6570\u5668",permalink:"/docs/documentation/Utility/Counter"},next:{title:"Delay 1 \u5ef6\u8fdf 1",permalink:"/docs/documentation/Utility/Delay 1"}},d={},c=[{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4",level:3},{value:"Format \u683c\u5f0f",id:"format-\u683c\u5f0f",level:3},{value:"Custom Format \u81ea\u5b9a\u4e49\u683c\u5f0f",id:"custom-format-\u81ea\u5b9a\u4e49\u683c\u5f0f",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}];function l(e){const t={a:"a",h1:"h1",h3:"h3",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"date--time-formatter-\u65e5\u671f\u65f6\u95f4\u683c\u5f0f",children:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Use Date & Time Formatter to make human-readable formats from time in seconds."}),"\n",(0,n.jsx)(t.p,{children:"\u4f7f\u7528 Date & Time Formatter \u6a21\u5757\u5c06\u4ee5\u79d2\u4e3a\u5355\u4f4d\u751f\u6210\u6211\u4eec\u53ef\u8bfb\u7684\u65f6\u95f4\u683c\u5f0f\u3002"}),"\n",(0,n.jsx)("div",{className:"patch-container",children:(0,n.jsxs)("div",{className:"patch processor",children:[(0,n.jsx)("h3",{children:"Date & Time Formatter"}),(0,n.jsxs)("ul",{className:"inputs",children:[(0,n.jsxs)("li",{children:["Time",(0,n.jsx)("span",{children:"0"})]}),(0,n.jsxs)("li",{children:["Format",(0,n.jsx)("span",{children:"12 Hours"})]}),(0,n.jsxs)("li",{children:["Custom Format",(0,n.jsx)("span",{})]})]}),(0,n.jsx)("ul",{className:"outputs",children:(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"...12"})})})]})}),"\n",(0,n.jsx)(t.h3,{id:"time-\u65f6\u95f4",children:"Time \u65f6\u95f4"}),"\n",(0,n.jsx)(t.p,{children:"The number of seconds that represents time or date."}),"\n",(0,n.jsx)(t.p,{children:"\u8868\u793a\u65f6\u95f4\u6216\u65e5\u671f\u7684\u79d2\u6570\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"format-\u683c\u5f0f",children:"Format \u683c\u5f0f"}),"\n",(0,n.jsx)(t.p,{children:"The time format to output (12/24 hour time, date, media time, custom)"}),"\n",(0,n.jsx)(t.p,{children:"\u9009\u62e9\u8f93\u51fa\u7684\u65f6\u95f4\u683c\u5f0f\u3002\uff08\u4f8b\uff1a9:42 AM\u30012016-4-13\u300103:00\uff09"}),"\n",(0,n.jsx)(t.p,{children:"** Type \u7c7b\u578b **"}),"\n",(0,n.jsx)(t.p,{children:"12 Hour Time (9:41 AM)"}),"\n",(0,n.jsx)(t.p,{children:"12 Hour Time (9:41:00 AM)"}),"\n",(0,n.jsx)(t.p,{children:"24 Hour Time (09:41)"}),"\n",(0,n.jsx)(t.p,{children:"24 Hour Time (09:41:00)"}),"\n",(0,n.jsx)(t.p,{children:"Short Date (2016-04-01)"}),"\n",(0,n.jsx)(t.p,{children:"Short Date (01-04-2016)"}),"\n",(0,n.jsx)(t.p,{children:"Short Date (04-01-2016)"}),"\n",(0,n.jsx)(t.p,{children:"Medium Date (Jan 1, 2016)"}),"\n",(0,n.jsx)(t.p,{children:"Medium Date (1 Jan, 2016)"}),"\n",(0,n.jsx)(t.p,{children:"Long Date (January 1, 2016)"}),"\n",(0,n.jsx)(t.p,{children:"Long Date (1 January, 2016)"}),"\n",(0,n.jsx)(t.p,{children:"Media Time (03:20)"}),"\n",(0,n.jsx)(t.p,{children:"Short Media Time (3:20)"}),"\n",(0,n.jsx)(t.p,{children:"Custom"}),"\n",(0,n.jsx)(t.h3,{id:"custom-format-\u81ea\u5b9a\u4e49\u683c\u5f0f",children:"Custom Format \u81ea\u5b9a\u4e49\u683c\u5f0f"}),"\n",(0,n.jsxs)(t.p,{children:["A text string that represents a format of time (ex: %H:%M:%S, %m/%d/%y). See the ",(0,n.jsx)(t.a,{href:"http://www.cplusplus.com/reference/ctime/strftime/",children:"strftime documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u65f6\u95f4\u683c\u5f0f\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"output-\u8f93\u51fa",children:"Output \u8f93\u51fa"}),"\n",(0,n.jsx)(t.p,{children:"A text string that represents the formatted time or date."}),"\n",(0,n.jsx)(t.p,{children:"\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u6309\u5b9a\u4e49\u7684\u683c\u5f0f\u663e\u793a\u65f6\u95f4\u3001\u65e5\u671f\u3002"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/documentation/Utility/Time",children:"Time \u65f6\u95f4"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/documentation/Utility/Stopwatch",children:"Stopwatch \u79d2\u8868"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/documentation/Utility/Video%20Info",children:"Video Info \u89c6\u9891\u4fe1\u606f"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/documentation/Device/Device%20Time",children:"Device Time \u8bbe\u5907\u65f6\u95f4"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"related-layers-\u76f8\u5173\u56fe\u5c42",children:"Related Layers \u76f8\u5173\u56fe\u5c42"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/documentation/Layer/Video%20File",children:"Video File \u89c6\u9891\u6587\u4ef6"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>s});var n=i(67294);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);