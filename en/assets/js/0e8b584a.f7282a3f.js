"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[38158],{27600:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=e(85893),a=e(11151);const s={title:"Javascript",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Javascript",o={id:"tutorial/senior/javascript",title:"Javascript",description:"\u5185\u5bb9\u5f85\u5b8c\u5584\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial/senior/javascript.md",sourceDirName:"tutorial/senior",slug:"/tutorial/senior/javascript",permalink:"/en/docs/tutorial/senior/javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/tutorial/senior/javascript.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"Nov 28, 2024",sidebarPosition:5,frontMatter:{title:"Javascript",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6\u7cfb\u7edf\u7684\u642d\u5efa",permalink:"/en/docs/tutorial/senior/intro"},next:{title:"\u4e13\u5bb6",permalink:"/en/docs/category/\u4e13\u5bb6"}},c={},u=[{value:"\u6587\u4ef6\u793a\u4f8b",id:"\u6587\u4ef6\u793a\u4f8b",level:2}];function p(t){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"javascript",children:"Javascript"}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u5bb9\u5f85\u5b8c\u5584\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u6587\u4ef6\u793a\u4f8b",children:"\u6587\u4ef6\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'//==============================================================================\n// Welcome to scripting in Origami! Helpful links:\n//\n// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics\n// Scripting API - https://origami.design/documentation/concepts/scriptingapi\n//\n// Script ID: F4CCF1AC-6840-43C1-9C65-08B64040ABE0\n//==============================================================================\n\n\n// Define your patch\n\nvar patch = new Patch();\n\n// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true\n// Setting this to true makes scripts very inefficient and should be avoided at all cost.\npatch.alwaysNeedsToEvaluate = false;\n\n// Set Inputs and Outputs.\npatch.inputs = [\n  new PatchInput("Input", types.NUMBER, 0),\n];\n\npatch.outputs = [\n  new PatchOutput("Output", types.NUMBER),\n];\n\n// Add your logic in this function.\npatch.evaluate = function() {\n  patch.outputs[0].value = patch.inputs[0].value;\n}\n\nreturn patch;\n\n'})})]})}function d(t={}){const{wrapper:n}={...(0,a.a)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>o,a:()=>r});var i=e(67294);const a={},s=i.createContext(a);function r(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);