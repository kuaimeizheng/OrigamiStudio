"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[14279],{89226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var i=t(85893),a=t(11151);const l={title:"Delay \u5ef6\u8fdf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},s="Delay \u5ef6\u8fdf",r={id:"documentation/Utility/Delay",title:"Delay \u5ef6\u8fdf",description:"---",source:"@site/docs/documentation/Utility/Delay.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Delay",permalink:"/docs/documentation/Utility/Delay",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Delay.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Delay \u5ef6\u8fdf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Delay 1 \u5ef6\u8fdf 1",permalink:"/docs/documentation/Utility/Delay 1"},next:{title:"Face Detection \u4eba\u8138\u68c0\u6d4b",permalink:"/docs/documentation/Utility/Face Detection"}},c={},o=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:3},{value:"Style \u6837\u5f0f",id:"style-\u6837\u5f0f",level:3},{value:"Value \u503c",id:"value-\u503c-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function d(e){const n={a:"a",h1:"h1",h3:"h3",hr:"hr",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"delay-\u5ef6\u8fdf",children:"Delay \u5ef6\u8fdf"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Delay a value by the specified number of seconds. The patch will not output the value it receives until the delay has elapsed."}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u6307\u5b9a\u7684\u79d2\u6570\u5ef6\u8fdf\u8109\u51b2\u3002Delay \u6a21\u5757\u5728\u63a5\u6536\u5230\u4fe1\u606f\u540e\u4e0d\u4f1a\u9a6c\u4e0a\u8f93\u51fa\uff0c\u800c\u662f\u7b49\u5230\u6307\u5b9a\u7684\u5ef6\u8fdf\u65f6\u95f4\u8fc7\u4e86\u4e4b\u540e\u624d\u8f93\u51fa\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Right-click to change the type (ex: number, boolean, color)."}),"\n",(0,i.jsx)("div",{className:"patch-container",children:(0,i.jsxs)("div",{className:"patch processor",children:[(0,i.jsx)("h3",{children:"Delay"}),(0,i.jsxs)("ul",{className:"inputs",children:[(0,i.jsxs)("li",{children:["Value",(0,i.jsx)("span",{children:"0"})]}),(0,i.jsxs)("li",{children:["Duration",(0,i.jsx)("span",{children:"1s"})]}),(0,i.jsxs)("li",{children:["Style",(0,i.jsx)("span",{children:"Always"})]})]}),(0,i.jsx)("ul",{className:"outputs",children:(0,i.jsxs)("li",{children:["Value",(0,i.jsx)("span",{children:"0"})]})})]})}),"\n",(0,i.jsx)(n.h3,{id:"value-\u503c",children:"Value \u503c"}),"\n",(0,i.jsx)(n.p,{children:"The value to delay."}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u5ef6\u8fdf\u7684\u503c\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"duration-\u6301\u7eed\u65f6\u95f4",children:"Duration \u6301\u7eed\u65f6\u95f4"}),"\n",(0,i.jsx)(n.p,{children:"The number of seconds to wait."}),"\n",(0,i.jsx)(n.p,{children:"\u7b49\u5f85\u591a\u957f\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"style-\u6837\u5f0f",children:"Style \u6837\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"The condition for triggering the delay, one of Always, When Increasing, and When Decreasing. The default Always option will always trigger a delay, while When Increasing and When Decreasing will trigger a delay only when the value is currently increasing or decreasing."}),"\n",(0,i.jsx)(n.p,{children:"Note that the When Increasing and When Decreasing options only apply to number and boolean values; otherwise, When Increasing and When Decreasing will function the same as Always."}),"\n",(0,i.jsx)(n.p,{children:"\u89e6\u53d1\u5ef6\u8fdf\u7684\u6761\u4ef6\uff0c\u53ef\u4ee5\u9009\u62e9 \u201c\u59cb\u7ec8\u201d\u3001\u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d\u3002\u9ed8\u8ba4\u7684 \u201c\u59cb\u7ec8\u201d\u9009\u9879\u5c06\u59cb\u7ec8\u89e6\u53d1\u5ef6\u8fdf\u3002\u800c \u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d\u9009\u9879\u5c06\u4ec5\u5728\u5f53\u524d\u503c\u589e\u52a0\u6216\u51cf\u5c11\u65f6\u89e6\u53d1\u5ef6\u8fdf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f \u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d \u9009\u9879\u4ec5\u9002\u7528\u4e8e\u6570\u503c\u548c\u5e03\u5c14\u503c\uff1b\u5426\u5219\uff0c\u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d\u548c \u201c\u59cb\u7ec8\u201d \u529f\u80fd\u76f8\u540c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"value-\u503c-1",children:"Value \u503c"}),"\n",(0,i.jsx)(n.p,{children:"The value, which will be output only after the delay has elapsed."}),"\n",(0,i.jsx)(n.p,{children:"\u8f93\u51fa\u5ef6\u8fdf\u540e\u7684\u503c\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Utility/Delay%201",children:"Delay 1 \u5ef6\u8fdf 1"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Utility/Switch",children:"Switch \u5f00\u5173"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Interaction/",children:"Interaction \u4ea4\u4e92"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);