"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[44512],{8090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=a(85893),n=a(11151);const r={title:"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",s={id:"documentation/Utility/Variable Broadcaster",title:"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",description:"---",source:"@site/docs/documentation/Utility/Variable Broadcaster.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Variable Broadcaster",permalink:"/docs/documentation/Utility/Variable Broadcaster",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Variable Broadcaster.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Transition \u8fc7\u6e21",permalink:"/docs/documentation/Utility/Transition"},next:{title:"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668",permalink:"/docs/documentation/Utility/Variable Receiver"}},c={},l=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"variable-broadcaster-\u53d8\u91cf\u53d1\u9001\u5668",children:"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Sends a value to any Variable Receiver patch set to receive the same name. Used to simplify and organize patches by replacing the cables between patches."}),"\n",(0,i.jsx)(t.p,{children:"\u5c06\u503c\u53d1\u9001\u5230\u4efb\u4f55\u53d8\u91cf\u63a5\u6536\u5668\u6a21\u5757\u96c6\u4ee5\u63a5\u6536\u76f8\u540c\u7684\u540d\u79f0\u3002\u7528\u4e8e\u901a\u8fc7\u66ff\u6362\u6a21\u5757\u4e4b\u95f4\u7684\u8fde\u7ebf\u6765\u7b80\u5316\u548c\u6574\u7406\u6a21\u5757\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["By default, the variable can be used locally, and is available only within the current patch graph. Click the popup menu (or right-click the patch) to change the scope to \u201cGlobal\u201d to make the value available within the current patch graph as well as any child components. Learn more about ",(0,i.jsx)(t.a,{href:"/docs/documentation/Concepts/Variables",children:"Global Variables"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u53d8\u91cf\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\uff0c\u5e76\u4e14\u4ec5\u5728\u5f53\u524d\u6a21\u5757\u56fe\u4e2d\u53ef\u7528\u3002\u5355\u51fb\u5f39\u51fa\u83dc\u5355\uff08\u6216\u53f3\u952e\u5355\u51fb\u6a21\u5757\uff09\u4ee5\u5c06\u8303\u56f4\u66f4\u6539\u4e3a\u201c\u5168\u5c40\u201d\uff0c\u4ee5\u4f7f\u8be5\u503c\u5728\u5f53\u524d\u6a21\u5757\u56fe\u4e2d\u4ee5\u53ca\u4efb\u4f55\u5b50\u7ec4\u4ef6\u4e2d\u53ef\u7528\u3002\u8be6\u7ec6\u4e86\u89e3",(0,i.jsx)(t.a,{href:"/docs/documentation/Concepts/Variables",children:"\u5168\u5c40\u53d8\u91cf"}),"\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"Rename the patch to set the name of the value."}),"\n",(0,i.jsx)(t.p,{children:"\u91cd\u547d\u540d\u6a21\u5757\u4ee5\u8bbe\u7f6e\u8be5\u503c\u7684\u540d\u79f0\u3002"}),"\n",(0,i.jsx)(t.p,{children:"Right-click the patch to change the type of the value, or to change the scope of where the variable is available."}),"\n",(0,i.jsx)(t.p,{children:"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539\u503c\u7684\u7c7b\u578b\uff0c\u6216\u66f4\u6539\u53d8\u91cf\u53ef\u7528\u7684\u8303\u56f4\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Image",src:a(61176).Z+"",width:"1424",height:"204"})}),"\n",(0,i.jsx)(t.h3,{id:"input-\u8f93\u5165",children:"Input \u8f93\u5165"}),"\n",(0,i.jsx)(t.p,{children:"A value to broadcast."}),"\n",(0,i.jsx)(t.p,{children:"\u8981\u53d1\u9001\u7684\u503c\u3002"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/Utility/Variable%20Receiver",children:"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/Utility/Splitter",children:"Splitter \u5206\u79bb\u5668"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},61176:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/variable-broadcaster-0f1472e5522c9b2d1b090ebabd6243c3.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var i=a(67294);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);