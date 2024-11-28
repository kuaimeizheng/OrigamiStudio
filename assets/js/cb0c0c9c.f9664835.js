"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[61702],{37962:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var t=n(85893),o=n(11151);const a={sidebar_position:5},d="Notification \u901a\u77e5",s={id:"documentation/iOS/Notification",title:"Notification \u901a\u77e5",description:"A pushed iOS notification with customizable app information and messaging.",source:"@site/docs/documentation/iOS/Notification.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Notification",permalink:"/docs/documentation/iOS/Notification",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Notification.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Navigation Bar \u5bfc\u822a\u680f",permalink:"/docs/documentation/iOS/Navigation Bar"},next:{title:"Page Control \u5206\u9875\u63a7\u5236\u5668",permalink:"/docs/documentation/iOS/Page Control"}},c={},r=[{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Dismiss \u6d88\u5931",id:"dismiss-\u6d88\u5931",level:3},{value:"App Icon App\u56fe\u6807",id:"app-icon-app\u56fe\u6807",level:3},{value:"App Name App\u540d\u79f0",id:"app-name-app\u540d\u79f0",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Body text \u6b63\u6587\u6587\u672c",id:"body-text-\u6b63\u6587\u6587\u672c",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"Notification Tapped \u5df2\u70b9\u51fb\u901a\u77e5",id:"notification-tapped-\u5df2\u70b9\u51fb\u901a\u77e5",level:3},{value:"Play Sound \u64ad\u653e\u58f0\u97f3",id:"play-sound-\u64ad\u653e\u58f0\u97f3",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}];function l(e){const i={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"notification-\u901a\u77e5",children:"Notification \u901a\u77e5"}),"\n",(0,t.jsx)(i.p,{children:"A pushed iOS notification with customizable app information and messaging."}),"\n",(0,t.jsx)(i.p,{children:"\u63a8\u9001iOS\u901a\u77e5\uff0c\u5e26\u6709\u53ef\u5b9a\u5236\u7684\u5e94\u7528\u7a0b\u5e8f\u4fe1\u606f\u548c\u6d88\u606f\u3002"}),"\n",(0,t.jsx)(i.p,{children:"Use the Touch button on the component to capture when the notification was tapped."}),"\n",(0,t.jsx)(i.p,{children:"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684Touch\u6309\u94ae\u6765\u6355\u83b7\u4f55\u65f6\u70b9\u51fb\u901a\u77e5\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Image",src:n(72048).Z+"",width:"1544",height:"386"})}),"\n",(0,t.jsx)(i.h3,{id:"present-\u51fa\u73b0",children:"Present \u51fa\u73b0"}),"\n",(0,t.jsx)(i.p,{children:"A pulse that displays the notification."}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u51fa\u73b0\u901a\u77e5\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"dismiss-\u6d88\u5931",children:"Dismiss \u6d88\u5931"}),"\n",(0,t.jsx)(i.p,{children:"A pulse that hides the notification."}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u9690\u85cf\u901a\u77e5\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"app-icon-app\u56fe\u6807",children:"App Icon App\u56fe\u6807"}),"\n",(0,t.jsx)(i.p,{children:"An image representing the icon of the app that is delivering the notification."}),"\n",(0,t.jsx)(i.p,{children:"\u8868\u793a\u6b63\u5728\u53d1\u9001\u901a\u77e5\u7684\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807\u7684\u56fe\u50cf\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"app-name-app\u540d\u79f0",children:"App Name App\u540d\u79f0"}),"\n",(0,t.jsx)(i.p,{children:"A text string that displays the name of the app that is delivering the notification."}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u53d1\u9001\u901a\u77e5\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u540d\u79f0\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"title-\u6807\u9898",children:"Title \u6807\u9898"}),"\n",(0,t.jsx)(i.p,{children:"A text string that displays the subject."}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u7528\u6765\u663e\u793a\u6807\u9898\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"body-text-\u6b63\u6587\u6587\u672c",children:"Body text \u6b63\u6587\u6587\u672c"}),"\n",(0,t.jsx)(i.p,{children:"A text string that displays more information."}),"\n",(0,t.jsx)(i.p,{children:"\u663e\u793a\u66f4\u591a\u4fe1\u606f\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"type-\u7c7b\u578b",children:"Type \u7c7b\u578b"}),"\n",(0,t.jsx)(i.p,{children:"The type of notification: temporary, persistent."}),"\n",(0,t.jsx)(i.p,{children:"\u901a\u77e5\u7684\u7c7b\u578b\uff1a\u4e34\u65f6\u7684\u3001\u6301\u4e45\u7684\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"notification-tapped-\u5df2\u70b9\u51fb\u901a\u77e5",children:"Notification Tapped \u5df2\u70b9\u51fb\u901a\u77e5"}),"\n",(0,t.jsx)(i.p,{children:"A pulse that represents when the notification is tapped."}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u4f55\u65f6\u70b9\u51fb\u901a\u77e5\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"play-sound-\u64ad\u653e\u58f0\u97f3",children:"Play Sound \u64ad\u653e\u58f0\u97f3"}),"\n",(0,t.jsx)(i.p,{children:"A pulse that connects to a sound player or sound kit to play a sound when a notification occurs."}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8fde\u63a5\u5230\u58f0\u97f3\u64ad\u653e\u5668\u6216\u58f0\u97f3\u8bbe\u5907\uff0c\u4ee5\u5728\u53d1\u751f\u901a\u77e5\u65f6\u64ad\u653e\u58f0\u97f3\u3002"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"related-layers-\u76f8\u5173\u56fe\u5c42",children:"Related Layers \u76f8\u5173\u56fe\u5c42"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Action%20Sheet",children:"Action Sheet \u64cd\u4f5c\u5217\u8868"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Activity%20Indicator",children:"Activity Indicator \u72b6\u6001\u6307\u793a\u5668"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Alert%20View",children:"Alert View \u8b66\u793a\u6846"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Fake%20Keyboard",children:"Fake Keyboard \u6a21\u62df\u952e\u76d8"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Navigation%20Bar",children:"Navigation Bar \u5bfc\u822a\u680f"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Page%20Control",children:"Page Control \u5206\u9875\u63a7\u5236\u5668"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Screen",children:"Screen \u5c4f\u5e55"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Segmented%20Control",children:"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Slider",children:"Slider \u6ed1\u5757"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Status%20bar",children:"Status Bar \u72b6\u6001\u680f"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Switch",children:"Switch \u5f00\u5173"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Tab%20Bar",children:"Tab Bar \u6807\u7b7e\u680f"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Text%20Field",children:"Text Field \u6587\u672c\u8f93\u5165\u6846"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/documentation/iOS/Visual%20Effect",children:"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c"})})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},72048:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/notification-faf252941024087b3bf7512bd2746d63.png"},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>d});var t=n(67294);const o={},a=t.createContext(o);function d(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);