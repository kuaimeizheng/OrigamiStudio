"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[10802],{10326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(85893),s=n(11151);const i={title:"Double Tap \u53cc\u51fb",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Double Tap \u53cc\u51fb",c={id:"documentation/Interaction/Double Tap",title:"Double Tap \u53cc\u51fb",description:"---",source:"@site/docs/documentation/Interaction/Double Tap.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Double Tap",permalink:"/docs/documentation/Interaction/Double Tap",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Double Tap.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Double Tap \u53cc\u51fb",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Interaction \u4ea4\u4e92",permalink:"/docs/category/interaction-\u4ea4\u4e92"},next:{title:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e",permalink:"/docs/documentation/Interaction/Drag Settings"}},r={},l=[{value:"Tap \u8f7b\u70b9",id:"tap-\u8f7b\u70b9",level:3},{value:"Delay \u5ef6\u8fdf",id:"delay-\u5ef6\u8fdf",level:3},{value:"Double Tap \u53cc\u51fb",id:"double-tap-\u53cc\u51fb-1",level:3},{value:"Single Tap \u5355\u51fb",id:"single-tap-\u5355\u51fb",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",hr:"hr",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"double-tap-\u53cc\u51fb",children:"Double Tap \u53cc\u51fb"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:["Capture double taps or single taps within a specified time frame. To be used with the Tap port in the ",(0,a.jsx)(t.a,{href:"/docs/documentation/Interaction/",children:"Interaction"})," patch."]}),"\n",(0,a.jsx)(t.p,{children:"Use the Touch button on a layer to quickly add interactions."}),"\n",(0,a.jsx)(t.p,{children:"\u6355\u6349\u6307\u5b9a\u65f6\u95f4\u5185\u7684\u53cc\u51fb\u6216\u5355\u51fb\u3002\u4e0e Interaction \u6a21\u5757\u7684 Tap \u8f93\u51fa\u63a5\u53e3\u8fde\u63a5\u5728\u4e00\u8d77\u4f7f\u7528\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"}),"\n",(0,a.jsx)("div",{className:"patch-container",children:(0,a.jsxs)("div",{className:"patch processor",children:[(0,a.jsx)("h3",{children:"Double Tap"}),(0,a.jsxs)("ul",{className:"inputs",children:[(0,a.jsxs)("li",{children:["Tap",(0,a.jsx)("span",{className:"patch-pulse-preview",children:(0,a.jsx)("span",{className:"dot"})})]}),(0,a.jsxs)("li",{children:["Delay",(0,a.jsx)("span",{children:"0.3s"})]})]}),(0,a.jsxs)("ul",{className:"outputs",children:[(0,a.jsxs)("li",{children:["Double Tap ",(0,a.jsx)("span",{className:"patch-pulse-preview",children:(0,a.jsx)("span",{className:"dot"})})]}),(0,a.jsxs)("li",{children:["Single Tap ",(0,a.jsx)("span",{className:"patch-pulse-preview",children:(0,a.jsx)("span",{className:"dot"})})]})]})]})}),"\n",(0,a.jsx)(t.h3,{id:"tap-\u8f7b\u70b9",children:"Tap \u8f7b\u70b9"}),"\n",(0,a.jsx)(t.p,{children:"A pulse that comes from the Interaction patch\u2019s Tap output."}),"\n",(0,a.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u4ea4\u4e92\u6a21\u5757\u7684 Tap \u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"delay-\u5ef6\u8fdf",children:"Delay \u5ef6\u8fdf"}),"\n",(0,a.jsx)(t.p,{children:"The maximum time duration between two taps to activate a double tap. By default, the delay is 0.3s."}),"\n",(0,a.jsx)(t.p,{children:"\u5728\u6700\u5927\u6301\u7eed\u65f6\u95f4\u5185\u70b9\u51fb\u4e24\u6b21\u80fd\u6fc0\u6d3b\u53cc\u51fb\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5ef6\u8fdf\u4e3a 0.3 \u79d2\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"double-tap-\u53cc\u51fb-1",children:"Double Tap \u53cc\u51fb"}),"\n",(0,a.jsx)(t.p,{children:"Pulses when two taps occur in the specified delay"}),"\n",(0,a.jsx)(t.p,{children:"\u5f53\u53cc\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"single-tap-\u5355\u51fb",children:"Single Tap \u5355\u51fb"}),"\n",(0,a.jsx)(t.p,{children:"Pulses when one tap occurs in the specified delay"}),"\n",(0,a.jsx)(t.p,{children:"\u5f53\u70b9\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/documentation/Interaction/",children:"Interaction \u4ea4\u4e92"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/documentation/Interaction/Mouse",children:"Mouse \u9f20\u6807"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/documentation/Interaction/Long%20Press",children:"Long Press \u957f\u6309"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/documentation/Device/Touches",children:"Touches \u89e6\u6478"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/documentation/Device/Trackpad",children:"Trackpad \u89e6\u63a7\u677f"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);