"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[51263],{54474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(85893),r=t(11151);const s={title:"Greater Than \u5927\u4e8e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Greater Than \u5927\u4e8e",o={id:"documentation/Logic/Greater Than",title:"Greater Than \u5927\u4e8e",description:"---",source:"@site/docs/documentation/Logic/Greater Than.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Greater Than",permalink:"/docs/documentation/Logic/Greater Than",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Greater Than.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Greater Than \u5927\u4e8e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",permalink:"/docs/documentation/Logic/Greater Than or Equal"},next:{title:"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e",permalink:"/docs/documentation/Logic/Less Than or Equal"}},c={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function l(e){const n={a:"a",h1:"h1",h3:"h3",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"greater-than-\u5927\u4e8e",children:"Greater Than \u5927\u4e8e"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"Check if a value is greater than another."}),"\n",(0,a.jsx)(n.p,{children:"\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u5426\u5927\u4e8e\u53e6\u4e00\u4e2a\u503c\u3002"}),"\n",(0,a.jsx)(n.p,{children:"Each value is compared to the next one in order, and results are combined in one output. For example, 3 > 2 > 1 is true, while 4 > 3 > 10 is false."}),"\n",(0,a.jsx)(n.p,{children:"\u6bcf\u4e2a\u503c\u6309\u987a\u5e8f\u4e0e\u4e0b\u4e00\u4e2a\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u7ed3\u679c\u5408\u5e76\u5728\u4e00\u4e2a\u8f93\u51fa\u53e3\u4e2d\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5982\uff0c3 > 2 > 1 \u4e3a\u771f\uff0c\u800c 4 > 3 > 10 \u4e3a\u5047\u3002"}),"\n",(0,a.jsx)(n.p,{children:"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."}),"\n",(0,a.jsx)(n.p,{children:"\u53f3\u952e\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u63a5\u53e3\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u5982\uff1a\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c\uff09"}),"\n",(0,a.jsx)("div",{className:"patch-container",children:(0,a.jsxs)("div",{className:"patch processor",children:[(0,a.jsx)("h3",{children:"Greater Than"}),(0,a.jsxs)("ul",{className:"inputs",children:[(0,a.jsxs)("li",{children:["\xa0",(0,a.jsx)("span",{})]}),(0,a.jsxs)("li",{children:["\xa0",(0,a.jsx)("span",{})]})]}),(0,a.jsx)("ul",{className:"outputs",children:(0,a.jsxs)("li",{children:["\xa0",(0,a.jsx)("span",{})]})})]})}),"\n",(0,a.jsx)(n.h3,{id:"input-\u8f93\u5165",children:"Input \u8f93\u5165"}),"\n",(0,a.jsx)(n.p,{children:"The base value."}),"\n",(0,a.jsx)(n.p,{children:"\u57fa\u7840\u503c\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"input-\u8f93\u5165-1",children:"Input \u8f93\u5165"}),"\n",(0,a.jsx)(n.p,{children:"The value to compare to the base."}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u6765\u548c\u57fa\u6570\u6bd4\u8f83\u7684\u503c\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"output-\u8f93\u51fa",children:"Output \u8f93\u51fa"}),"\n",(0,a.jsx)(n.p,{children:"A boolean that is true if the base value is greater than the subsequent values."}),"\n",(0,a.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u57fa\u6570\u503c\u5927\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u4e3a \u771f\u3002"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/And",children:"And \u548c"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/Or",children:"Or \u6216"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/Not",children:"Not \u975e"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/Equals%20Exactly",children:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/Greater%20Than%20or%20Equal",children:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/Less%20Than",children:"Less Than \u5c0f\u4e8e"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/Less%20Than%20or%20Equal",children:"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/documentation/Logic/Equals",children:"Equals \u7b49\u4e8e"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);