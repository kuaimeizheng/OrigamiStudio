"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[56783],{39348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(85893),a=t(11151);const i={title:"Equals \u7b49\u4e8e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Equals \u7b49\u4e8e",r={id:"documentation/Logic/Equals",title:"Equals \u7b49\u4e8e",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Logic/Equals.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Equals",permalink:"/en/docs/documentation/Logic/Equals",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Equals.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"Nov 28, 2024",sidebarPosition:5,frontMatter:{title:"Equals \u7b49\u4e8e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",permalink:"/en/docs/documentation/Logic/Equals Exactly"},next:{title:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",permalink:"/en/docs/documentation/Logic/Greater Than or Equal"}},c={},l=[{value:"First Value \u7b2c\u4e00\u4e2a\u503c",id:"first-value-\u7b2c\u4e00\u4e2a\u503c",level:3},{value:"Second Value \u7b2c\u4e8c\u4e2a\u503c",id:"second-value-\u7b2c\u4e8c\u4e2a\u503c",level:3},{value:"Tolerance \u5bb9\u5dee",id:"tolerance-\u5bb9\u5dee",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function d(e){const n={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"equals-\u7b49\u4e8e",children:"Equals \u7b49\u4e8e"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Check if two numbers are equal, or approximately equal within a tolerance. Useful for bouncy values that don\u2019t settle on round integers."}),"\n",(0,s.jsx)(n.p,{children:"\u68c0\u67e5\u4e24\u4e2a\u6570\u5b57\u662f\u5426\u76f8\u7b49\uff0c\u6216\u8005\u5728\u516c\u5dee\u8303\u56f4\u5185\u8fd1\u4f3c\u76f8\u7b49\u3002\u9002\u7528\u4e8e\u4e0d\u662f\u56fa\u5b9a\u6574\u6570\u7684\u5f39\u6027\u503c\u3002"}),"\n",(0,s.jsx)("div",{className:"patch-container",children:(0,s.jsxs)("div",{className:"patch processor",children:[(0,s.jsx)("h3",{children:"Equals"}),(0,s.jsxs)("ul",{className:"inputs",children:[(0,s.jsxs)("li",{children:["First Value",(0,s.jsx)("span",{children:"0"})]}),(0,s.jsxs)("li",{children:["Second Value",(0,s.jsx)("span",{children:"0"})]}),(0,s.jsxs)("li",{children:["Tolerance",(0,s.jsx)("span",{children:"0"})]})]}),(0,s.jsx)("ul",{className:"outputs",children:(0,s.jsx)("li",{children:(0,s.jsx)("span",{className:"checkbox-off"})})})]})}),"\n",(0,s.jsx)(n.h3,{id:"first-value-\u7b2c\u4e00\u4e2a\u503c",children:"First Value \u7b2c\u4e00\u4e2a\u503c"}),"\n",(0,s.jsx)(n.p,{children:"The base number."}),"\n",(0,s.jsx)(n.p,{children:"\u57fa\u6570\u503c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"second-value-\u7b2c\u4e8c\u4e2a\u503c",children:"Second Value \u7b2c\u4e8c\u4e2a\u503c"}),"\n",(0,s.jsx)(n.p,{children:"The number to compare to the base."}),"\n",(0,s.jsx)(n.p,{children:"\u548c\u57fa\u6570\u503c\u6bd4\u8f83\u7684\u503c\uff0c"}),"\n",(0,s.jsx)(n.h3,{id:"tolerance-\u5bb9\u5dee",children:"Tolerance \u5bb9\u5dee"}),"\n",(0,s.jsx)(n.p,{children:"A number that represents the wiggle room between the first and second values where. For example, a tolerance of .1 means that 2.1 is equal to 2. Useful for bouncy/smoothed values."}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u57fa\u6570\u503c\u548c\u7b2c\u4e8c\u4e2a\u503c\u4e4b\u95f4\u5141\u8bb8\u76f8\u5dee\u7684\u8303\u56f4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\uff1a\u516c\u5dee\u4e3a 0.1\uff0c\u8868\u793a 2.1 \u6216 1.9 \u7b49\u4e8e 2\u3002\u9002\u7528\u4e8e\u5f39\u6027\uff0f\u5e73\u6ed1\u503c\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"output-\u8f93\u51fa",children:"Output \u8f93\u51fa"}),"\n",(0,s.jsx)(n.p,{children:"A boolean that is true if the first and second values are equal within the tolerance."}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u57fa\u6570\u503c\u548c\u7b2c\u4e8c\u4e2a\u503c\u5728\u5bb9\u5dee\u503c\u5167\u65f6\u4e3a\u771f\u3002"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/And",children:"And \u548c"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/Or",children:"Or \u6216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/Not",children:"Not \u975e"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/Equals%20Exactly",children:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/Greater%20Than",children:"Greater Than \u5927\u4e8e"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/Greater%20Than%20or%20Equal",children:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/Less%20Than",children:"Less Than \u5c0f\u4e8e"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/documentation/Logic/Less%20Than%20or%20Equal",children:"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acb68c9b-b9fa-449a-8dcf-77723da01686/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172028Z&X-Amz-Expires=86400&X-Amz-Signature=36780d6bfb2c5f9263572c9070fb44829db8f1146283390ccdec1b71ec575aa1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:""})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);