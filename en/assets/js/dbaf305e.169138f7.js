"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[93825],{24540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var r=t(85893),s=t(11151),i=t(72111);const d={title:"Loop Filter \u5faa\u73af\u7b5b\u9009",sidebar_position:35,last_update:{author:"\u84af\u7f8e\u653f"}},l="Loop Filter \u5faa\u73af\u7b5b\u9009",o={id:"documentation/Loops/Loop Filter",title:"Loop Filter \u5faa\u73af\u7b5b\u9009",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Loop Filter.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Filter",permalink:"/en/docs/documentation/Loops/Loop Filter",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Filter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"Nov 28, 2024",sidebarPosition:35,frontMatter:{title:"Loop Filter \u5faa\u73af\u7b5b\u9009",sidebar_position:35,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",permalink:"/en/docs/documentation/Loops/Loop Dedupe"},next:{title:"Loop Insert \u5faa\u73af\u63d2\u5165",permalink:"/en/docs/documentation/Loops/Loop Insert"}},c={},h=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Include \u5305\u542b",id:"include-\u5305\u542b",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function a(e){const n={a:"a",h1:"h1",h3:"h3",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"loop-filter-\u5faa\u73af\u7b5b\u9009",children:"Loop Filter \u5faa\u73af\u7b5b\u9009"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times."}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u6a21\u5757\uff0c\u6709\u5f88\u591a\u529f\u80fd\uff01\u5b83\u53ef\u4ee5\u4ece\u5faa\u73af\u4e2d\u8fc7\u6ee4\u9879\u76ee\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u91cd\u590d\u9879\u76ee\u3002\u5b83\u751a\u81f3\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u91cd\u590d X \u6b21\u503c\u7684\u65b0\u5faa\u73af\u3002"}),"\n",(0,r.jsx)(n.p,{children:"The idea is that you pass in two loops. The values loop is what you want to modify \u2014 you either want to remove items or repeat items in this loop. The second loop you pass in tells us how many times each value should appear (or if it should be removed by repeating 0 times)."}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u9700\u8981\u4f7f\u7528\u4e24\u4e2a\u5faa\u73af\u3002 values \u503c\u5faa\u73af\u662f\u60a8\u8981\u4fee\u6539\u7684\u5185\u5bb9\u2014\u2014\u5728\u6b64\u5faa\u73af\u4e2d\u5220\u9664\u9879\u76ee\u6216\u8005\u91cd\u590d\u9879\u76ee\u3002\u4f20\u5165\u7684\u7b2c\u4e8c\u4e2a\u5faa\u73af\u8bbe\u7f6e\u6bcf\u4e2a\u503c\u5e94\u8be5\u51fa\u73b0\u591a\u5c11\u6b21\uff08\u6216\u8005\u662f\u5426\u901a\u8fc7\u91cd\u590d 0 \u6b21\u6765\u5220\u9664\u5b83\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Example A: Filter to a subset of a loop."}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b A\uff1a\u4ece\u4e00\u4e2a\u5faa\u73af\u4e2d\u7b5b\u9009\u51fa\u7684\u5b50\u96c6\u3002"}),"\n","\n","\n",(0,r.jsxs)("div",{className:i.Z.main,children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Input"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"orange"})})]})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Include"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"0"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"3"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"1"})})]})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Output"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"orange"})})]})]}),(0,r.jsx)(n.p,{children:"Example B: Make a new loop by repeating a single value X times."}),(0,r.jsx)(n.p,{children:"\u793a\u4f8b B\uff1a\u901a\u8fc7\u5c06\u5355\u4e2a\u503c\u91cd\u590d X \u6b21\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u5faa\u73af\u3002"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Input"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})})})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Include"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"5"})})})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Output"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})})]})]}),(0,r.jsx)(n.p,{children:"Example C: Repeat and filter values by using a loop of numbers."}),(0,r.jsx)(n.p,{children:"\u793a\u4f8b C\uff1a\u4f7f\u7528\u6570\u5b57\u5faa\u73af\u91cd\u590d\u548c\u8fc7\u6ee4\u503c\u3002"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Input"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"apple"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"orange"})})]})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Include"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"0"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"3"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"1"})})]})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Output"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"carrot"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"orange"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Right-click the patch to change the expected type of the Input loop."}),"\n",(0,r.jsx)(n.p,{children:"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539\u8f93\u5165\u5faa\u73af\u7684\u9884\u671f\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Use Loop Builder to make a boolean or number loop."}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Loop Builder \u521b\u5efa\u4e00\u4e2a\u5e03\u5c14\u503c\u6216\u6570\u5b57\u5faa\u73af\u3002"}),"\n",(0,r.jsx)("div",{className:"patch-container",children:(0,r.jsxs)("div",{className:"patch loop",children:[(0,r.jsx)("h3",{children:"Loop Filter"}),(0,r.jsxs)("ul",{className:"inputs",children:[(0,r.jsxs)("li",{children:["Input",(0,r.jsx)("span",{children:"0"})]}),(0,r.jsxs)("li",{children:["Include",(0,r.jsx)("span",{children:"1"})]})]}),(0,r.jsxs)("ul",{className:"outputs",children:[(0,r.jsxs)("li",{children:["Loop",(0,r.jsx)("span",{children:"0"})]}),(0,r.jsxs)("li",{children:["Index",(0,r.jsx)("span",{children:"0"})]})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"input-\u8f93\u5165",children:"Input \u8f93\u5165"}),"\n",(0,r.jsx)(n.p,{children:"A loop of values."}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"include-\u5305\u542b",children:"Include \u5305\u542b"}),"\n",(0,r.jsx)(n.p,{children:"A loop of booleans (to include or not include), or a loop of numbers (to decide how many times a value is repeated)."}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u5faa\u73af\uff08\u5305\u62ec\u6216\u4e0d\u5305\u62ec\uff09\uff0c\u6216\u4e00\u4e2a\u6570\u5b57\u5faa\u73af\uff08\u51b3\u5b9a\u4e00\u4e2a\u503c\u91cd\u590d\u591a\u5c11\u6b21\uff09\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"loop-\u5faa\u73af",children:"Loop \u5faa\u73af"}),"\n",(0,r.jsx)(n.p,{children:"The result loop, with values either filtered or repeated"}),"\n",(0,r.jsx)(n.p,{children:"\u7ed3\u679c\u5faa\u73af\uff0c\u503c\u5df2\u88ab\u8fc7\u6ee4\u6216\u91cd\u590d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"index-\u7d22\u5f15",children:"Index \u7d22\u5f15"}),"\n",(0,r.jsx)(n.p,{children:"A loop of indices for the result loop"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u7ed3\u679c\u5faa\u73af\u4e2d\u7684\u7d22\u5f15\u5faa\u73af\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u652f\u6301\u7684\u7c7b\u578b",children:"\u652f\u6301\u7684\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"Anchor"}),"\n",(0,r.jsx)(n.p,{children:"Bezier"}),"\n",(0,r.jsx)(n.p,{children:"Boolean"}),"\n",(0,r.jsx)(n.p,{children:"Color"}),"\n",(0,r.jsx)(n.p,{children:"Edges"}),"\n",(0,r.jsx)(n.p,{children:"Image"}),"\n",(0,r.jsx)(n.p,{children:"Index"}),"\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.p,{children:"Layer"}),"\n",(0,r.jsx)(n.p,{children:"Number"}),"\n",(0,r.jsx)(n.p,{children:"Photo Library Asset"}),"\n",(0,r.jsx)(n.p,{children:"Point 3D"}),"\n",(0,r.jsx)(n.p,{children:"Position"}),"\n",(0,r.jsx)(n.p,{children:"Progress"}),"\n",(0,r.jsx)(n.p,{children:"Pulse"}),"\n",(0,r.jsx)(n.p,{children:"Size"}),"\n",(0,r.jsx)(n.p,{children:"Size Axis"}),"\n",(0,r.jsx)(n.p,{children:"Sound"}),"\n",(0,r.jsx)(n.p,{children:"Space Axis"}),"\n",(0,r.jsx)(n.p,{children:"Spacing"}),"\n",(0,r.jsx)(n.p,{children:"Text"}),"\n",(0,r.jsx)(n.p,{children:"Video"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/en/docs/documentation/Loops/Loop",children:"Loop \u5faa\u73af"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/en/docs/documentation/Loops/Loop%20Builder",children:"Loop Builder \u5faa\u73af\u751f\u6210\u5668"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/en/docs/documentation/Loops/Loop%20Select",children:"Loop Select \u5faa\u73af\u9009\u62e9"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},72111:(e,n,t)=>{t.d(n,{Z:()=>r});const r={main:"main_Xkya"}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var r=t(67294);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);