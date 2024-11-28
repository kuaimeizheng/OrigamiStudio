"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[97685],{84205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(85893),i=n(11151);const r={title:"Drag \u62d6\u62fd",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},s="Drag \u62d6\u62fd",o={id:"documentation/Interaction/Drag",title:"Drag \u62d6\u62fd",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Interaction/Drag.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Drag",permalink:"/en/docs/documentation/Interaction/Drag",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Drag.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"Nov 28, 2024",sidebarPosition:5,frontMatter:{title:"Drag \u62d6\u62fd",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e",permalink:"/en/docs/documentation/Interaction/Drag Settings"},next:{title:"Gesture \u624b\u52bf",permalink:"/en/docs/documentation/Interaction/Gesture"}},d={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:3},{value:"Settings \u8bbe\u7f6e",id:"settings-\u8bbe\u7f6e",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function l(e){const t={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"drag-\u62d6\u62fd",children:"Drag \u62d6\u62fd"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:"Drag a layer in any direction. Choose the layer to drag and then connect the Position output to the layer\u2019s Position port."}),"\n",(0,a.jsx)(t.p,{children:"\u6cbf\u4efb\u4f55\u65b9\u5411\u62d6\u52a8\u4e00\u5c42\u3002\u9009\u62e9\u8981\u62d6\u52a8\u7684\u56fe\u5c42\uff0c\u7136\u540e\u5c06 \u4f4d\u7f6e \u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u56fe\u5c42\u7684 \u4f4d\u7f6e \u7aef\u53e3\u3002"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Image",src:n(14169).Z+"",width:"1662",height:"428"})}),"\n",(0,a.jsx)(t.h3,{id:"enable-\u542f\u7528",children:"Enable \u542f\u7528"}),"\n",(0,a.jsx)(t.p,{children:"A boolean that is true when dragging is enabled"}),"\n",(0,a.jsx)(t.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u62d6\u62fd\u542f\u7528\u65f6\u5e03\u5c14\u503c\u4e3a\u771f\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"layer-\u56fe\u5c42",children:"Layer \u56fe\u5c42"}),"\n",(0,a.jsx)(t.p,{children:"The name of the layer to drag. Click the value (\u201cNone\u201d, by default) to select a layer. Controls which layer activates drag on touch."}),"\n",(0,a.jsx)(t.p,{children:"\u62d6\u62fd\u56fe\u5c42\u540d\u79f0\u3002\u70b9\u51fbLayer\u7684\u503c\u9009\u62e9\u56fe\u5c42\u3002\u89e6\u6478\u54ea\u4e2a\u56fe\u5c42\u6fc0\u6d3b\u62d6\u62fd\u3002"}),"\n",(0,a.jsx)(t.p,{children:"(\u4f8b\u5982\uff1a\u6709A\u3001B\u4e24\u4e2a\u56fe\u5c42\uff0cDrag\u7684\u8f93\u51fa\u53e3\u8fde\u63a5\u7684A\u7684\u4f4d\u7f6e\u5c5e\u6027\uff0cDrag\u7684Layer\u9009\u62e9\u4e3a\u56fe\u5c42B\uff0c\u90a3\u89e6\u6478B\u53ef\u4ee5\u62d6\u52a8A\uff0c\u5982\u679c\u89e6\u6478B\u610f\u5916\u7684\u8303\u56f4\u5c31\u62d6\u4e0d\u52a8\u3002\u4e0d\u9009\u5c31\u662f\u89e6\u6478\u6574\u4e2a\u5c4f\u5e55\u6fc0\u6d3b\u56fe\u5c42\u7684\u62d6\u62fd\u3002)"}),"\n",(0,a.jsx)(t.h3,{id:"start-\u5f00\u59cb",children:"Start \u5f00\u59cb"}),"\n",(0,a.jsx)(t.p,{children:"The position the layer starts at when the prototype starts."}),"\n",(0,a.jsx)(t.p,{children:"\u5f53\u539f\u578b\u5f00\u59cb\u65f6\uff0c\u88ab\u62d6\u62fd\u7684\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"reset-\u91cd\u7f6e",children:"Reset \u91cd\u7f6e"}),"\n",(0,a.jsx)(t.p,{children:"A pulse that resets the position to the start position."}),"\n",(0,a.jsx)(t.p,{children:"\u91cd\u7f6e\u5230\u542f\u52a8\u4f4d\u7f6e\u3002 (\u4f8b\u5982\uff1aStart\u8bbe\u7f6e\u7684\u4f4d\u7f6e\u3002)"}),"\n",(0,a.jsx)(t.h3,{id:"settings-\u8bbe\u7f6e",children:"Settings \u8bbe\u7f6e"}),"\n",(0,a.jsx)(t.p,{children:"The settings from a Drag Settings patch that further customize drag behavior."}),"\n",(0,a.jsx)(t.p,{children:"\u4eceDrag Setting\u6a21\u5757\u8fdb\u4e00\u6b65\u81ea\u5b9a\u4e49\u62d6\u52a8\u884c\u4e3a\u7684\u8bbe\u7f6e\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"position-\u4f4d\u7f6e",children:"Position \u4f4d\u7f6e"}),"\n",(0,a.jsx)(t.p,{children:"The current position of the draggable layer."}),"\n",(0,a.jsx)(t.p,{children:"\u62d6\u52a8\u5c42\u7684\u5f53\u524d\u4f4d\u7f6e\u3002(\u4f8b\u5982\uff1a\u5c31\u662f\u8fd9\u4e2a\u63a5\u53e3\u8fde\u63a5\u5230\u8981\u62d6\u7684\u56fe\u5c42\u4f4d\u7f6e\u5c5e\u6027)"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/en/docs/documentation/Interaction/Drag%20Settings",children:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},14169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/drag-08f6e412afcfa5db6bce616432b460fe.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);