"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[37206],{79132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(85893),a=n(11151);const r={sidebar_position:5},o="Navigation Bar \u5bfc\u822a\u680f",s={id:"documentation/iOS/Navigation Bar",title:"Navigation Bar \u5bfc\u822a\u680f",description:"An iOS navigation bar with customizable left and right actions. It offers large and standard title styles. Add sub-layers to customize the contents of the search bar.",source:"@site/docs/documentation/iOS/Navigation Bar.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Navigation Bar",permalink:"/docs/documentation/iOS/Navigation Bar",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Navigation Bar.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Fake Keyboard \u6a21\u62df\u952e\u76d8",permalink:"/docs/documentation/iOS/Fake Keyboard"},next:{title:"Notification \u901a\u77e5",permalink:"/docs/documentation/iOS/Notification"}},l={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Large Title \u5927\u6807\u9898",id:"large-title-\u5927\u6807\u9898",level:3},{value:"Show Search \u663e\u793a\u641c\u7d22",id:"show-search-\u663e\u793a\u641c\u7d22",level:3},{value:"Background \u80cc\u666f",id:"background-\u80cc\u666f",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Left Action Text \u5de6\u4fa7\u52a8\u4f5c\u6587\u672c",id:"left-action-text-\u5de6\u4fa7\u52a8\u4f5c\u6587\u672c",level:3},{value:"Left Action Back Arrow \u5de6\u4fa7\u8fd4\u56de\u7bad\u5934",id:"left-action-back-arrow-\u5de6\u4fa7\u8fd4\u56de\u7bad\u5934",level:3},{value:"Right Action Text \u53f3\u4fa7\u52a8\u4f5c\u6587\u672c",id:"right-action-text-\u53f3\u4fa7\u52a8\u4f5c\u6587\u672c",level:3},{value:"Right Action Style \u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f",id:"right-action-style-\u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f",level:3},{value:"Left Tap \u70b9\u51fb\u5de6\u4fa7",id:"left-tap-\u70b9\u51fb\u5de6\u4fa7",level:3},{value:"Right Tap \u70b9\u51fb\u53f3\u4fa7",id:"right-tap-\u70b9\u51fb\u53f3\u4fa7",level:3},{value:"Search Tap \u70b9\u51fb\u641c\u7d22",id:"search-tap-\u70b9\u51fb\u641c\u7d22",level:3},{value:"Height \u9ad8\u5ea6",id:"height-\u9ad8\u5ea6",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"navigation-bar-\u5bfc\u822a\u680f",children:"Navigation Bar \u5bfc\u822a\u680f"}),"\n",(0,i.jsx)(t.p,{children:"An iOS navigation bar with customizable left and right actions. It offers large and standard title styles. Add sub-layers to customize the contents of the search bar."}),"\n",(0,i.jsx)(t.p,{children:"iOS\u5bfc\u822a\u680f\u53ef\u81ea\u5b9a\u4e49\u5de6\u53f3\u52a8\u4f5c\u6309\u94ae\u3002\u63d0\u4f9b\u5927\u7684\u548c\u6807\u51c6\u6807\u9898\u6837\u5f0f\u3002\u6dfb\u52a0\u5b50\u56fe\u5c42\u4ee5\u81ea\u5b9a\u4e49\u641c\u7d22\u680f\u7684\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(t.p,{children:"Use the Touch button on the component to capture taps on individual buttons in the navigation bar."}),"\n",(0,i.jsx)(t.p,{children:"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684Touch\u6309\u94ae\u6765\u6355\u83b7\u5bfc\u822a\u680f\u4e2d\u5355\u4e2a\u6309\u94ae\u4e0a\u7684\u70b9\u51fb\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Image",src:n(99221).Z+"",width:"1554",height:"504"})}),"\n",(0,i.jsx)(t.h3,{id:"enable-\u542f\u7528",children:"Enable \u542f\u7528"}),"\n",(0,i.jsx)(t.p,{children:"A boolean that is true when the status bar is displayed."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u72b6\u6001\u680f\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"title-\u6807\u9898",children:"Title \u6807\u9898"}),"\n",(0,i.jsx)(t.p,{children:"A text string that represents the title of the page."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u9875\u9762\u7684\u6807\u9898\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"large-title-\u5927\u6807\u9898",children:"Large Title \u5927\u6807\u9898"}),"\n",(0,i.jsx)(t.p,{children:"A boolean that is true when the title is using a large title treatment. Turn off when scrolling past the initial state."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6807\u9898\u4f7f\u7528\u5927\u578b\u6807\u9898\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002\u6eda\u52a8\u8d85\u8fc7\u521d\u59cb\u72b6\u6001\u65f6\u5173\u95ed\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"show-search-\u663e\u793a\u641c\u7d22",children:"Show Search \u663e\u793a\u641c\u7d22"}),"\n",(0,i.jsx)(t.p,{children:"A boolean that shows a search field in the navigation bar."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u663e\u793a\u5bfc\u822a\u680f\u4e2d\u7684\u641c\u7d22\u6846\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"background-\u80cc\u666f",children:"Background \u80cc\u666f"}),"\n",(0,i.jsx)(t.p,{children:"The color of the navigation bar."}),"\n",(0,i.jsx)(t.p,{children:"\u5bfc\u822a\u680f\u7684\u80cc\u666f\u989c\u8272\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"tint-color-\u8272\u8c03\u989c\u8272",children:"Tint Color \u8272\u8c03\u989c\u8272"}),"\n",(0,i.jsx)(t.p,{children:"The color of the left and right text buttons."}),"\n",(0,i.jsx)(t.p,{children:"\u5de6\u4fa7\u548c\u53f3\u4fa7\u6587\u672c\u6309\u94ae\u7684\u989c\u8272\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"left-action-text-\u5de6\u4fa7\u52a8\u4f5c\u6587\u672c",children:"Left Action Text \u5de6\u4fa7\u52a8\u4f5c\u6587\u672c"}),"\n",(0,i.jsx)(t.p,{children:"A text string that represents the title of the left button."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5de6\u6309\u94ae\u7684\u6807\u9898\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"left-action-back-arrow-\u5de6\u4fa7\u8fd4\u56de\u7bad\u5934",children:"Left Action Back Arrow \u5de6\u4fa7\u8fd4\u56de\u7bad\u5934"}),"\n",(0,i.jsx)(t.p,{children:"A boolean that displays a back arrow in the left."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5728\u5de6\u4fa7\u663e\u793a\u8fd4\u56de\u7bad\u5934\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"right-action-text-\u53f3\u4fa7\u52a8\u4f5c\u6587\u672c",children:"Right Action Text \u53f3\u4fa7\u52a8\u4f5c\u6587\u672c"}),"\n",(0,i.jsx)(t.p,{children:"A text string that represents the title of the right button."}),"\n",(0,i.jsx)(t.p,{children:"\u8868\u793a\u53f3\u4fa7\u6807\u9898\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"right-action-style-\u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f",children:"Right Action Style \u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f"}),"\n",(0,i.jsx)(t.p,{children:"Text style for Right Text: plain (blue), done (semi-bold and blue), inactive (grey)."}),"\n",(0,i.jsx)(t.p,{children:"\u53f3\u4fa7\u6587\u672c\u7684\u6837\u5f0f\uff1a\u666e\u901a\uff08\u84dd\u8272\uff09\uff0c\u5b8c\u6210\uff08\u4e2d\u7c97\u4f53\u548c\u84dd\u8272\uff09\uff0c\u65e0\u6548\uff08\u7070\u8272\uff09\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"left-tap-\u70b9\u51fb\u5de6\u4fa7",children:"Left Tap \u70b9\u51fb\u5de6\u4fa7"}),"\n",(0,i.jsx)(t.p,{children:"A pulse that represents when the left button is tapped."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u70b9\u51fb\u5de6\u4fa7\u6309\u94ae\u65f6\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"right-tap-\u70b9\u51fb\u53f3\u4fa7",children:"Right Tap \u70b9\u51fb\u53f3\u4fa7"}),"\n",(0,i.jsx)(t.p,{children:"A pulse that represents when the right button is tapped."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u70b9\u51fb\u53f3\u4fa7\u6309\u94ae\u65f6\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"search-tap-\u70b9\u51fb\u641c\u7d22",children:"Search Tap \u70b9\u51fb\u641c\u7d22"}),"\n",(0,i.jsx)(t.p,{children:"A pulse that represents when the search bar is tapped."}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u70b9\u51fb\u641c\u7d22\u680f\u65f6\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"height-\u9ad8\u5ea6",children:"Height \u9ad8\u5ea6"}),"\n",(0,i.jsx)(t.p,{children:"A number representing the height of the navigation bar, in points."}),"\n",(0,i.jsx)(t.p,{children:"\u8868\u793a\u5bfc\u822a\u680f\u9ad8\u5ea6\u7684\u6570\u5b57\uff0c\u4ee5\u70b9\u4e3a\u5355\u4f4d\u3002"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"related-layers-\u76f8\u5173\u56fe\u5c42",children:"Related Layers \u76f8\u5173\u56fe\u5c42"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Action%20Sheet",children:"Action Sheet \u64cd\u4f5c\u5217\u8868"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Activity%20Indicator",children:"Activity Indicator \u72b6\u6001\u6307\u793a\u5668"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Alert%20View",children:"Alert View \u8b66\u793a\u6846"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Fake%20Keyboard",children:"Fake Keyboard \u6a21\u62df\u952e\u76d8"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Notification",children:"Notification \u901a\u77e5"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Page%20Control",children:"Page Control \u5206\u9875\u63a7\u5236\u5668"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Screen",children:"Screen \u5c4f\u5e55"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Segmented%20Control",children:"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Slider",children:"Slider \u6ed1\u5757"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Status%20bar",children:"Status Bar \u72b6\u6001\u680f"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Switch",children:"Switch \u5f00\u5173"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Tab%20Bar",children:"Tab Bar \u6807\u7b7e\u680f"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Text%20Field",children:"Text Field \u6587\u672c\u8f93\u5165\u6846"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/documentation/iOS/Visual%20Effect",children:"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},99221:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/navigation-bar-05f96c81f110f7a557ff28b5f659c0c7.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(67294);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);