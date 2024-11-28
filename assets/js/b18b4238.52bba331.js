"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[11543],{68305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var l=t(85893),r=t(11151);const o={title:"Scroll \u6eda\u52a8",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Scroll \u6eda\u52a8",c={id:"documentation/Interaction/Scroll",title:"Scroll \u6eda\u52a8",description:"Scroll a layer using free or paged (carousel) scrolling. The layer will be scrolled inside of its parent layer group.",source:"@site/docs/documentation/Interaction/Scroll.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Scroll",permalink:"/docs/documentation/Interaction/Scroll",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Scroll.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Scroll \u6eda\u52a8",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",permalink:"/docs/documentation/Interaction/Scroll Settings"},next:{title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",permalink:"/docs/documentation/Interaction/Scrollaway"}},s={},a=[{value:"Content Layer \u5185\u5bb9\u56fe\u5c42",id:"content-layer-\u5185\u5bb9\u56fe\u5c42",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Scroll X X\u8f74\u6eda\u52a8",id:"scroll-x-x\u8f74\u6eda\u52a8",level:3},{value:"Scroll Y Y\u8f74\u6eda\u52a8",id:"scroll-y-y\u8f74\u6eda\u52a8",level:3},{value:"Settings \u8bbe\u7f6e",id:"settings-\u8bbe\u7f6e",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Page X X\u8f74\u9875\u9762",id:"page-x-x\u8f74\u9875\u9762",level:3},{value:"Page Y Y\u8f74\u9875\u9762",id:"page-y-y\u8f74\u9875\u9762",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function d(e){const n={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"scroll-\u6eda\u52a8",children:"Scroll \u6eda\u52a8"}),"\n",(0,l.jsx)(n.p,{children:"Scroll a layer using free or paged (carousel) scrolling. The layer will be scrolled inside of its parent layer group."}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u81ea\u7531\u6216\u5206\u9875\uff08\u8f6e\u64ad\uff09\u9009\u9879\u6765\u6eda\u52a8\u56fe\u5c42\u3002\u8be5\u56fe\u5c42\u5c06\u5728\u5176\u7236\u56fe\u5c42\u7ec4\u5185\u6eda\u52a8\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Use the Touch button on a layer to quickly add interactions."}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u89e6\u6478 \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Image",src:t(75517).Z+"",width:"1816",height:"424"})}),"\n",(0,l.jsx)(n.h3,{id:"content-layer-\u5185\u5bb9\u56fe\u5c42",children:"Content Layer \u5185\u5bb9\u56fe\u5c42"}),"\n",(0,l.jsx)(n.p,{children:"The layer to scroll."}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u6eda\u52a8\u7684\u56fe\u5c42\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"enable-\u542f\u7528",children:"Enable \u542f\u7528"}),"\n",(0,l.jsx)(n.p,{children:"A boolean that is true when scrolling is enabled."}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u6eda\u52a8\u542f\u7528\u65f6\u4e3a\u771f\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"scroll-x-x\u8f74\u6eda\u52a8",children:"Scroll X X\u8f74\u6eda\u52a8"}),"\n",(0,l.jsx)(n.p,{children:"The horizontal scrolling style - None, Free or Paging."}),"\n",(0,l.jsx)(n.p,{children:"\u6c34\u5e73\u6eda\u52a8\u6837\u5f0f\uff1a\u65e0\u3001\u81ea\u7531\u6216\u5206\u9875\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"scroll-y-y\u8f74\u6eda\u52a8",children:"Scroll Y Y\u8f74\u6eda\u52a8"}),"\n",(0,l.jsx)(n.p,{children:"The vertical scrolling style - None, Free or Paging."}),"\n",(0,l.jsx)(n.p,{children:"\u5782\u76f4\u6eda\u52a8\u6837\u5f0f\uff1a\u65e0\u3001\u81ea\u7531\u6216\u5206\u9875\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"settings-\u8bbe\u7f6e",children:"Settings \u8bbe\u7f6e"}),"\n",(0,l.jsxs)(n.p,{children:["Custom scroll settings. To be used with the output of the ",(0,l.jsx)(n.a,{href:"/docs/documentation/Interaction/Scroll%20Settings",children:"Scroll Settings"})," patch."]}),"\n",(0,l.jsxs)(n.p,{children:["\u81ea\u5b9a\u4e49\u6eda\u52a8\u8bbe\u7f6e\u3002\u4e0e ",(0,l.jsx)(n.a,{href:"/docs/documentation/Interaction/Scroll%20Settings",children:"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e"})," \u6a21\u5757\u7684\u8f93\u51fa\u4e00\u8d77\u4f7f\u7528\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"x",children:"X"}),"\n",(0,l.jsx)(n.p,{children:"The current horizontal scroll position. Connect to the X Position of the selected layer."}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u524d\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\u3002\u8fde\u63a5\u5230\u6240\u9009\u56fe\u5c42\u7684 X \u4f4d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"y",children:"Y"}),"\n",(0,l.jsx)(n.p,{children:"The current vertical scroll position. Connect to the Y Position of the selected layer."}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u524d\u5782\u76f4\u6eda\u52a8\u4f4d\u7f6e\u3002\u8fde\u63a5\u5230\u6240\u9009\u56fe\u5c42\u7684 Y \u4f4d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"page-x-x\u8f74\u9875\u9762",children:"Page X X\u8f74\u9875\u9762"}),"\n",(0,l.jsx)(n.p,{children:"The current horizontal scroll page index."}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u524d\u6c34\u5e73\u6eda\u52a8\u9875\u9762\u7684\u7d22\u5f15\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"page-y-y\u8f74\u9875\u9762",children:"Page Y Y\u8f74\u9875\u9762"}),"\n",(0,l.jsx)(n.p,{children:"The current vertical scroll page index."}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u524d\u5782\u76f4\u6eda\u52a8\u9875\u9762\u7684\u7d22\u5f15\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/documentation/Interaction/Pop%20Switch",children:"Pop Switch \u6d41\u884c\u5f00\u5173"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/documentation/Interaction/Scrollaway",children:"Scrollaway \u6eda\u52a8\u8ddd\u79bb"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/documentation/Interaction/Drag",children:"Drag \u62d6\u62fd"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/documentation/Interaction/Momentum%20Scrolling",children:"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/documentation/Interaction/Scroll%20Settings",children:"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},75517:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/scroll-3c9100bf951c19a8bca98db771655a1d.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var l=t(67294);const r={},o=l.createContext(r);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);