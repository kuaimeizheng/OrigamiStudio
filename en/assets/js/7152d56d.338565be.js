"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[15525],{48929:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const r={title:"Arc Transition \u5f27\u5f62\u8fc7\u6e21",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Arc Transition \u5f27\u5f62\u8fc7\u6e21",o={id:"documentation/Utility/Arc Transition",title:"Arc Transition \u5f27\u5f62\u8fc7\u6e21",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Arc Transition.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Arc Transition",permalink:"/en/docs/documentation/Utility/Arc Transition",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Arc Transition.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"Nov 28, 2024",sidebarPosition:5,frontMatter:{title:"Arc Transition \u5f27\u5f62\u8fc7\u6e21",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Utility \u5b9e\u7528",permalink:"/en/docs/category/utility-\u5b9e\u7528"},next:{title:"Clip \u88c1\u526a",permalink:"/en/docs/documentation/Utility/Clip"}},d={},l=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Middle \u4e2d\u95f4",id:"middle-\u4e2d\u95f4",level:3},{value:"End \u7ed3\u675f",id:"end-\u7ed3\u675f",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function c(n){const e={a:"a",h1:"h1",h3:"h3",hr:"hr",p:"p",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"arc-transition-\u5f27\u5f62\u8fc7\u6e21",children:"Arc Transition \u5f27\u5f62\u8fc7\u6e21"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"Convert a value between 0 and 1 to a new range defined by the start and end values, while specifying a middle value it should pass through. Allowing you to \u2018arc\u2019 a transition between the start and end values."}),"\n",(0,i.jsx)(e.p,{children:"\u5c06 0 \u5230 1 \u4e4b\u95f4\u7684\u503c\u8f6c\u6362\u4e3a\u7531\u5f00\u59cb\u503c\u548c\u7ed3\u675f\u503c\u5b9a\u4e49\u7684\u65b0\u8303\u56f4\uff0c\u540c\u65f6\u6307\u5b9a\u5b83\u5e94\u8be5\u901a\u8fc7\u7684\u4e2d\u95f4\u503c\u3002 \u5141\u8bb8\u60a8\u5728\u5f00\u59cb\u503c\u548c\u7ed3\u675f\u503c\u4e4b\u95f4\u201c\u5f27\u5f62\u201d\u8f6c\u6362\u3002"}),"\n",(0,i.jsx)("div",{className:"patch-container",children:(0,i.jsxs)("div",{className:"patch processor",children:[(0,i.jsx)("h3",{children:"Arc Transition"}),(0,i.jsxs)("ul",{className:"inputs",children:[(0,i.jsxs)("li",{children:["Progress",(0,i.jsx)("span",{children:"0"})]}),(0,i.jsxs)("li",{children:["Start",(0,i.jsx)("span",{children:"0"})]}),(0,i.jsxs)("li",{children:["Middle",(0,i.jsx)("span",{children:"0"})]}),(0,i.jsxs)("li",{children:["End",(0,i.jsx)("span",{children:"1"})]})]}),(0,i.jsx)("ul",{className:"outputs",children:(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:"0"})})})]})}),"\n",(0,i.jsx)(e.h3,{id:"progress-\u8fdb\u5ea6",children:"Progress \u8fdb\u5ea6"}),"\n",(0,i.jsxs)(e.p,{children:["A progress value. See ",(0,i.jsx)(e.a,{href:"/en/docs/documentation/PatchEditor/Animations",children:"Animation Basics"})," for more information."]}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002\u6709\u5173\u8be6\u60c5\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 Animation Basic"}),"\n",(0,i.jsx)(e.h3,{id:"start-\u5f00\u59cb",children:"Start \u5f00\u59cb"}),"\n",(0,i.jsx)(e.p,{children:"The start value of the new range."}),"\n",(0,i.jsx)(e.p,{children:"\u65b0\u8303\u56f4\u7684\u5f00\u59cb\u503c\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"middle-\u4e2d\u95f4",children:"Middle \u4e2d\u95f4"}),"\n",(0,i.jsx)(e.p,{children:"The middle value of the new range."}),"\n",(0,i.jsx)(e.p,{children:"\u65b0\u8303\u56f4\u7684\u4e2d\u95f4\u503c\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"end-\u7ed3\u675f",children:"End \u7ed3\u675f"}),"\n",(0,i.jsx)(e.p,{children:"The end value of the new range."}),"\n",(0,i.jsx)(e.p,{children:"\u65b0\u8303\u56f4\u7684\u7ed3\u675f\u503c\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"output-\u8f93\u51fa",children:"Output \u8f93\u51fa"}),"\n",(0,i.jsx)(e.p,{children:"The converted value."}),"\n",(0,i.jsx)(e.p,{children:"\u8f6c\u6362\u540e\u7684\u503c\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/en/docs/documentation/Animation/Pop%20Animation",children:"Pop Animation \u6d41\u884c\u52a8\u753b"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/en/docs/documentation/Animation/Classic%20Animation",children:"Classic Animation \u7ecf\u5178\u52a8\u753b"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/en/docs/documentation/Utility/Transition",children:"Transition \u8fc7\u6e21"})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);