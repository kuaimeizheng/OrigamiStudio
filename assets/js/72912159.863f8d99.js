"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[61677],{96562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=n(85893),s=n(11151);const r={title:"Counter \u8ba1\u6570\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Counter \u8ba1\u6570\u5668",c={id:"documentation/Utility/Counter",title:"Counter \u8ba1\u6570\u5668",description:"---",source:"@site/docs/documentation/Utility/Counter.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Counter",permalink:"/docs/documentation/Utility/Counter",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Counter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Counter \u8ba1\u6570\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Corner Radius \u89d2\u534a\u5f84",permalink:"/docs/documentation/Utility/Corner Radius"},next:{title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",permalink:"/docs/documentation/Utility/Date & Time Formatter"}},l={},o=[{value:"Increase \u9012\u589e",id:"increase-\u9012\u589e",level:3},{value:"Decrease",id:"decrease",level:3},{value:"Jump \u8df3\u8f6c",id:"jump-\u8df3\u8f6c",level:3},{value:"Jump to Number \u8df3\u8f6c\u5230\u7684\u503c",id:"jump-to-number-\u8df3\u8f6c\u5230\u7684\u503c",level:3},{value:"Maximum Count \u6700\u5927\u8ba1\u6570",id:"maximum-count-\u6700\u5927\u8ba1\u6570",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function u(e){const t={a:"a",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"counter-\u8ba1\u6570\u5668",children:"Counter \u8ba1\u6570\u5668"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Create a counter that starts at 0 and can be incremented, decremented or set to a specific value. The counter is"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"incremented by one when the Increase port receives a pulse,"}),"\n",(0,i.jsx)(t.li,{children:"decremented by one when the Decrement port receives a pulse,"}),"\n",(0,i.jsx)(t.li,{children:"set to the value specified by the Jump to Number port when the Jump port receives a pulse."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u521b\u5efa\u4e00\u4e2a\u4ece 0 \u5f00\u59cb\u7684\u8ba1\u6570\u5668\uff0c\u53ef\u4ee5\u9012\u589e\u3001\u9012\u51cf\u6216\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u7684\u503c\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u8ba1\u6570\u5668\u662f\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u5f53 Increase \u9012\u589e \u63a5\u53e3\u6536\u5230\u503c\u65f6\u9012\u589e 1\uff1b"}),"\n",(0,i.jsx)(t.li,{children:"\u5f53 Decrament \u9012\u51cf \u63a5\u53e3\u6536\u5230\u503c\u65f6\u9012\u51cf 1\uff1b"}),"\n",(0,i.jsx)(t.li,{children:"\u5f53 Jump to number \u8df3\u8f6c \u63a5\u53e3\u6536\u5230\u503c\u65f6\uff0c\u8df3\u8f6c\u5230\u63a5\u53e3\u8bbe\u7f6e\u7684\u503c\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Constrain the counter by specifying a value in the Maximum Count port. If the counter is incremented after it reaches this maximum value, it will reset to zero. Decrementing the counter from its initial value will wrap it backwards to the maximum value. If the counter is constrained, the \u201cJump to Number\u201d value must fall within bounds, otherwise the counter will return to the starting value."}),"\n",(0,i.jsx)(t.p,{children:"\u901a\u8fc7\u5728\u6700\u5927\u8ba1\u6570\u7aef\u53e3\u4e2d\u6307\u5b9a\u503c\u6765\u7ea6\u675f\u8ba1\u6570\u5668\u3002\u5982\u679c\u8ba1\u6570\u5668\u5728\u8fbe\u5230\u8be5\u6700\u5927\u503c\u540e\u9012\u589e\uff0c\u5b83\u5c06\u91cd\u7f6e\u4e3a\u96f6\u3002\u5c06\u8ba1\u6570\u5668\u4ece\u5176\u521d\u59cb\u503c\u9012\u51cf\u5c06\u4f7f\u5176\u8fd4\u56de\u6700\u5927\u503c\u3002\u5982\u679c\u8ba1\u6570\u5668\u53d7\u5230\u7ea6\u675f\uff0c\u201c\u8df3\u8f6c\u5230\u6570\u5b57\u201d\u503c\u5fc5\u987b\u5728\u8303\u56f4\u5185\uff0c\u5426\u5219\u8ba1\u6570\u5668\u5c06\u8fd4\u56de\u5230\u8d77\u59cb\u503c\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["Often used to track a sequential state (ex: an onboarding flow) interchangeably with ",(0,i.jsx)(t.a,{href:"/docs/documentation/Utility/Option%20Switch",children:"Option Switch"}),". See ",(0,i.jsx)(t.a,{href:"/docs/documentation/PatchEditor/States",children:"State Basics"})," for more information."]}),"\n",(0,i.jsxs)(t.p,{children:["\u901a\u5e38\u7528\u4e8e\u8ddf\u8e2a\u987a\u5e8f\u72b6\u6001(\u4f8b\u5982:\u52a0\u8f7d\u6d41\u7a0b)\uff0c\u53ef\u4e0e ",(0,i.jsx)(t.a,{href:"/docs/documentation/Utility/Option%20Switch",children:"Option Switch"})," \u4e92\u6362\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,i.jsx)(t.a,{href:"/docs/documentation/PatchEditor/States",children:"\u72b6\u6001\u57fa\u7840"})," \u3002"]}),"\n",(0,i.jsx)("div",{className:"patch-container",children:(0,i.jsxs)("div",{className:"patch processor",children:[(0,i.jsx)("h3",{children:"Counter"}),(0,i.jsxs)("ul",{className:"inputs",children:[(0,i.jsxs)("li",{children:["Increase",(0,i.jsx)("span",{className:"patch-pulse-preview",children:(0,i.jsx)("span",{className:"dot"})})]}),(0,i.jsxs)("li",{children:["Decrease",(0,i.jsx)("span",{className:"patch-pulse-preview",children:(0,i.jsx)("span",{className:"dot"})})]}),(0,i.jsxs)("li",{children:["Jump",(0,i.jsx)("span",{className:"patch-pulse-preview",children:(0,i.jsx)("span",{className:"dot"})})]}),(0,i.jsxs)("li",{children:["Jump to Number",(0,i.jsx)("span",{children:"0"})]}),(0,i.jsxs)("li",{children:["Maximum Count",(0,i.jsx)("span",{children:"0"})]})]}),(0,i.jsx)("ul",{className:"outputs",children:(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"0"})," "]})})]})}),"\n",(0,i.jsx)(t.h3,{id:"increase-\u9012\u589e",children:"Increase \u9012\u589e"}),"\n",(0,i.jsx)(t.p,{children:"A pulse that increases the counter value by 1."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5f53\u63a5\u6536\u5230\u503c\u65f6\uff0c\u8ba1\u6570\u5668\u7684\u503c\u52a0 1\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"decrease",children:"Decrease"}),"\n",(0,i.jsx)(t.p,{children:"A pulse that decreases the counter value by 1."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5f53\u63a5\u6536\u5230\u503c\u65f6\uff0c\u8ba1\u6570\u5668\u7684\u503c\u51cf 1\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"jump-\u8df3\u8f6c",children:"Jump \u8df3\u8f6c"}),"\n",(0,i.jsx)(t.p,{children:"A pulse that resets the counter to the value specified by the Jump to Number port."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5f53\u63a5\u6536\u5230\u503c\u65f6\uff0c\u8ba1\u6570\u5668\u8df3\u8f6c\u5230 Jump to Number \u8bbe\u7f6e\u7684\u503c\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"jump-to-number-\u8df3\u8f6c\u5230\u7684\u503c",children:"Jump to Number \u8df3\u8f6c\u5230\u7684\u503c"}),"\n",(0,i.jsx)(t.p,{children:"The number to use as the counter value when the Jump port is pulsed."}),"\n",(0,i.jsx)(t.p,{children:"\u8bbe\u7f6e Jump \u7aef\u53e3\u63a5\u6536\u5230\u503c\u65f6\u8981\u8df3\u8f6c\u5230\u7684\u6570\u503c\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"maximum-count-\u6700\u5927\u8ba1\u6570",children:"Maximum Count \u6700\u5927\u8ba1\u6570"}),"\n",(0,i.jsxs)(t.p,{children:["The maximum counter value. The counter will reset to zero when the maximum value is reached. Note that the counter will always remain ",(0,i.jsx)(t.em,{children:"less"})," than this value."]}),"\n",(0,i.jsx)(t.p,{children:"\u503c\u7684\u6700\u5927\u8ba1\u6570\u503c\u3002\u5f53\u8fbe\u5230\u6700\u5927\u503c\u65f6\uff0c\u8ba1\u7b97\u5668\u5c06\u91cd\u7f6e\u4e3a\u96f6\u3002\u8bf7\u6ce8\u610f\uff0c\u8ba1\u6570\u5668\u5c06\u59cb\u7ec8\u4fdd\u6301\u5c0f\u4e8e\u6b64\u503c\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"output-\u8f93\u51fa",children:"Output \u8f93\u51fa"}),"\n",(0,i.jsx)(t.p,{children:"The current value of the counter (ex: 0, 1, 2\u2026)"}),"\n",(0,i.jsx)(t.p,{children:"\u8ba1\u6570\u5668\u7684\u5f53\u524d\u503c\uff08\u4f8b\u5982\uff1a0\uff0c1\uff0c2\u2026\uff09"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/Utility/Switch",children:"Switch \u5f00\u5173"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/Utility/Option%20Switch",children:"Option Switch \u9009\u9879\u5f00\u5173"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);