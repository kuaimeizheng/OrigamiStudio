"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[21101],{8824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const o={title:"Pulse \u8109\u51b2",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Pulse \u8109\u51b2",r={id:"documentation/Utility/Pulse",title:"Pulse \u8109\u51b2",description:"---",source:"@site/docs/documentation/Utility/Pulse.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Pulse",permalink:"/docs/documentation/Utility/Pulse",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Pulse.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Pulse \u8109\u51b2",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/docs/documentation/Utility/Pulse on Change"},next:{title:"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",permalink:"/docs/documentation/Utility/QR Code Detection"}},l={},c=[{value:"On/Off \u5f00/\u5173",id:"onoff-\u5f00\u5173",level:3},{value:"Turned On \u6253\u5f00",id:"turned-on-\u6253\u5f00",level:3},{value:"Turned Off \u5173\u95ed",id:"turned-off-\u5173\u95ed",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",hr:"hr",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pulse-\u8109\u51b2",children:"Pulse \u8109\u51b2"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Output a pulse whenever a state changes from on to off."}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/docs/documentation/Concepts/States%20&%20Pulses",children:"States & Pulses"})," for more information."]}),"\n",(0,s.jsx)(t.p,{children:"\u6bcf\u5f53\u72b6\u6001\u4ece\u5f00\u59cb\u5207\u6362\u5230\u5173\u95ed\u65f6\uff0c\u90fd\u4f1a\u8f93\u51fa\u8109\u51b2\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"/docs/documentation/Concepts/States%20&%20Pulses",children:"States & Pulses"}),"\u3002"]}),"\n",(0,s.jsx)("div",{className:"patch-container",children:(0,s.jsxs)("div",{className:"patch processor",children:[(0,s.jsx)("h3",{children:"Pulse"}),(0,s.jsx)("ul",{className:"inputs",children:(0,s.jsxs)("li",{children:["On/Off",(0,s.jsx)("span",{className:"checkbox-off"})]})}),(0,s.jsxs)("ul",{className:"outputs",children:[(0,s.jsxs)("li",{children:["Turned On",(0,s.jsx)("span",{className:"patch-pulse-preview",children:(0,s.jsx)("span",{className:"dot"})})]}),(0,s.jsxs)("li",{children:["Turned Off",(0,s.jsx)("span",{className:"patch-pulse-preview",children:(0,s.jsx)("span",{className:"dot"})})]})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"onoff-\u5f00\u5173",children:"On/Off \u5f00/\u5173"}),"\n",(0,s.jsx)(t.p,{children:"A boolean that represents an on/off state."}),"\n",(0,s.jsx)(t.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f00/\u5173\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"turned-on-\u6253\u5f00",children:"Turned On \u6253\u5f00"}),"\n",(0,s.jsx)(t.p,{children:"A pulse that is output when the input turns on."}),"\n",(0,s.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u6253\u5f00\u65f6\u8f93\u51fa\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"turned-off-\u5173\u95ed",children:"Turned Off \u5173\u95ed"}),"\n",(0,s.jsx)(t.p,{children:"A pulse that is output when the input turns off."}),"\n",(0,s.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8f93\u5165\u7aef\u53e3\u5173\u95ed\u65f6\u8f93\u51fa\u3002"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/documentation/Animation/Repeating%20Animation",children:"Repeating Animation \u91cd\u590d\u52a8\u753b"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/documentation/Utility/Switch",children:"Switch \u5f00\u5173"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/documentation/Utility/When%20Prototype%20Starts",children:"When Prototype Starts \u5f53\u539f\u578b\u542f\u52a8\u65f6"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/documentation/Utility/Pulse%20on%20Change",children:"Pulse on Change \u8109\u51b2\u53d8\u5316"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/documentation/Interaction/",children:"Interaction \u4ea4\u4e92"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(67294);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);