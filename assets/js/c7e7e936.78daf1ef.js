"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[76295],{5848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(85893),i=n(11151);const o={title:"Network Request \u7f51\u7edc\u8bf7\u6c42",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},s="Network Request \u7f51\u7edc\u8bf7\u6c42",a={id:"documentation/Data/Network Request",title:"Network Request \u7f51\u7edc\u8bf7\u6c42",description:"Request images, JSON, or text over HTTP or HTTPS using either a GET or POST request.",source:"@site/docs/documentation/Data/Network Request.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Network Request",permalink:"/docs/documentation/Data/Network Request",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Network Request.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{title:"Network Request \u7f51\u7edc\u8bf7\u6c42",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"JSON to Text JSON\u8f6c\u6587\u672c",permalink:"/docs/documentation/Data/JSON to Text"},next:{title:"Open URL \u6253\u5f00\u94fe\u63a5",permalink:"/docs/documentation/Data/Open URL"}},d={},u=[{value:"URL \u94fe\u63a5",id:"url-\u94fe\u63a5",level:3},{value:"URL Parameters \u94fe\u63a5\u53c2\u6570",id:"url-parameters-\u94fe\u63a5\u53c2\u6570",level:3},{value:"Body \u6b63\u6587",id:"body-\u6b63\u6587",level:3},{value:"Method \u65b9\u6cd5",id:"method-\u65b9\u6cd5",level:3},{value:"Request \u8bf7\u6c42",id:"request-\u8bf7\u6c42",level:3},{value:"Loading \u52a0\u8f7d",id:"loading-\u52a0\u8f7d",level:3}];function l(e){const t={h1:"h1",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"network-request-\u7f51\u7edc\u8bf7\u6c42",children:"Network Request \u7f51\u7edc\u8bf7\u6c42"}),"\n",(0,r.jsx)(t.p,{children:"Request images, JSON, or text over HTTP or HTTPS using either a GET or POST request."}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528 GET \u6216 POST \u8bf7\u6c42\u901a\u8fc7 HTTP \u6216 HTTPS \u8bf7\u6c42\u56fe\u50cf\u3001JSON \u6216\u6587\u672c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"Right-click to change the type (image, JSON, or text) of the request."}),"\n",(0,r.jsx)(t.p,{children:"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u8bf7\u6c42\u7684\u7c7b\u578b\uff08\u56fe\u50cf\u3001JSON \u6216\u6587\u672c\uff09\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Image",src:n(67019).Z+"",width:"1504",height:"328"})}),"\n",(0,r.jsx)(t.h3,{id:"url-\u94fe\u63a5",children:"URL \u94fe\u63a5"}),"\n",(0,r.jsx)(t.p,{children:"An HTTP or HTTPS URL string to query. Origami Live for iOS only supports HTTPS URL\u2019s."}),"\n",(0,r.jsx)(t.p,{children:"\u8981\u67e5\u8be2\u7684 HTTP \u6216 HTTPS URL \u5b57\u7b26\u4e32\u3002 Origami Live for iOS \u4ec5\u652f\u6301 HTTPS URL\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"url-parameters-\u94fe\u63a5\u53c2\u6570",children:"URL Parameters \u94fe\u63a5\u53c2\u6570"}),"\n",(0,r.jsx)(t.p,{children:"A JSON object for any parameters to include with the request."}),"\n",(0,r.jsx)(t.p,{children:"\u8981\u5305\u542b\u5728\u8bf7\u6c42\u4e2d\u4efb\u4f55\u53c2\u6570\u7684 JSON \u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"body-\u6b63\u6587",children:"Body \u6b63\u6587"}),"\n",(0,r.jsx)(t.p,{children:"A JSON object for the body to include with the request."}),"\n",(0,r.jsx)(t.p,{children:"\u8bf7\u6c42\u4e2d\u5305\u542b\u6b63\u6587\u7684 JSON \u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"method-\u65b9\u6cd5",children:"Method \u65b9\u6cd5"}),"\n",(0,r.jsx)(t.p,{children:"The method for requesting the response, GET or POST."}),"\n",(0,r.jsx)(t.p,{children:"\u8bf7\u6c42\u54cd\u5e94\u7684\u65b9\u6cd5\uff0cGET \u6216 POST\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"request-\u8bf7\u6c42",children:"Request \u8bf7\u6c42"}),"\n",(0,r.jsx)(t.p,{children:"A pulse that initiates the request."}),"\n",(0,r.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u542f\u52a8\u8bf7\u6c42\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"loading-\u52a0\u8f7d",children:"Loading \u52a0\u8f7d"}),"\n",(0,r.jsx)(t.p,{children:"A boolean that is true while the response is loading."}),"\n",(0,r.jsx)(t.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u52a0\u8f7d\u54cd\u5e94\u65f6\u4e3a\u771f \u3002"})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},67019:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/network-request-fd9271ae08c529a44f4870aa5ec54e51.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);