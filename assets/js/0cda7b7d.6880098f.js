"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[83012],{70392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var i=t(85893),d=t(11151);const r={sidebar_position:5},l="Text Field \u6587\u672c\u8f93\u5165\u6846",s={id:"documentation/Material/Text Field",title:"Text Field \u6587\u672c\u8f93\u5165\u6846",description:"An iOS text field that uses an Android phone or tablet\u2019s native keyboard when running on device.",source:"@site/docs/documentation/Material/Text Field.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Text Field",permalink:"/docs/documentation/Material/Text Field",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Text Field.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Switch \u5f00\u5173",permalink:"/docs/documentation/Material/Switch"},next:{title:"iOS \u82f9\u679c\u79fb\u52a8\u7aef",permalink:"/docs/category/ios-\u82f9\u679c\u79fb\u52a8\u7aef"}},o={},a=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Width \u5bbd\u5ea6",id:"width-\u5bbd\u5ea6",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Font Name \u5b57\u4f53\u540d\u79f0",id:"font-name-\u5b57\u4f53\u540d\u79f0",level:3},{value:"Font Size \u5b57\u4f53\u5927\u5c0f",id:"font-size-\u5b57\u4f53\u5927\u5c0f",level:3},{value:"Begin Editing \u5f00\u59cb\u7f16\u8f91",id:"begin-editing-\u5f00\u59cb\u7f16\u8f91",level:3},{value:"End Editing \u7ed3\u675f\u7f16\u8f91",id:"end-editing-\u7ed3\u675f\u7f16\u8f91",level:3},{value:"Color \u989c\u8272",id:"color-\u989c\u8272",level:3},{value:"Accent Color \u5f3a\u8c03\u989c\u8272",id:"accent-color-\u5f3a\u8c03\u989c\u8272",level:3},{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Hint Text \u63d0\u793a\u6587\u672c",id:"hint-text-\u63d0\u793a\u6587\u672c",level:3},{value:"Set Text \u8bbe\u7f6e\u6587\u672c",id:"set-text-\u8bbe\u7f6e\u6587\u672c",level:3},{value:"Underline \u4e0b\u5212\u7ebf",id:"underline-\u4e0b\u5212\u7ebf",level:3},{value:"Keyboard Type \u952e\u76d8\u7c7b\u578b",id:"keyboard-type-\u952e\u76d8\u7c7b\u578b",level:3},{value:"Secure Text Entry \u5b89\u5168\u6587\u672c\u8f93\u5165",id:"secure-text-entry-\u5b89\u5168\u6587\u672c\u8f93\u5165",level:3},{value:"Text Alignment \u6587\u672c\u5bf9\u9f50",id:"text-alignment-\u6587\u672c\u5bf9\u9f50",level:3},{value:"Editing \u7f16\u8f91",id:"editing-\u7f16\u8f91",level:3},{value:"Text \u6587\u672c",id:"text-\u6587\u672c-1",level:3},{value:"Enter Pressed \u6309\u4e0b\u8f93\u5165",id:"enter-pressed-\u6309\u4e0b\u8f93\u5165",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}];function h(e){const n={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"text-field-\u6587\u672c\u8f93\u5165\u6846",children:"Text Field \u6587\u672c\u8f93\u5165\u6846"}),"\n",(0,i.jsx)(n.p,{children:"An iOS text field that uses an Android phone or tablet\u2019s native keyboard when running on device."}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c\u65f6\u4f7f\u7528Android\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u672c\u673a\u952e\u76d8\u7684IOS\u6587\u672c\u5b57\u6bb5\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["When no device is connected, use the ",(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Fake%20Keyboard",children:"Fake Keyboard"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"\u6ca1\u6709\u8fde\u63a5\u8bbe\u5907\u65f6\uff0c\u8bf7\u4f7f\u7528\u6a21\u62df\u952e\u76d8\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Use the Touch button on the component to get information about the text and editing status."}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u6709\u5173\u6587\u672c\u548c\u7f16\u8f91\u72b6\u6001\u7684\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(71955).Z+"",width:"1550",height:"764"})}),"\n",(0,i.jsx)(n.h3,{id:"enable-\u542f\u7528",children:"Enable \u542f\u7528"}),"\n",(0,i.jsx)(n.p,{children:"A boolean that is true when the text field is displayed."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u6587\u672c\u5b57\u6bb5\u65f6\u4e3atrue\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"position-\u4f4d\u7f6e",children:"Position \u4f4d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"The position to display the text field."}),"\n",(0,i.jsx)(n.p,{children:"\u663e\u793a\u6587\u672c\u5b57\u6bb5\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"width-\u5bbd\u5ea6",children:"Width \u5bbd\u5ea6"}),"\n",(0,i.jsx)(n.p,{children:"The width of the text field."}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u672c\u5b57\u6bb5\u7684\u5bbd\u5ea6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"anchor-\u951a\u70b9",children:"Anchor \u951a\u70b9"}),"\n",(0,i.jsxs)(n.p,{children:["The anchor point to position the text field relative to. See ",(0,i.jsx)(n.a,{href:"/docs/documentation/Concepts/Coordinates",children:"Coordinates \u5750\u6807"})," for more information."]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4e8e\u5b9a\u4f4d\u6587\u672c\u5b57\u6bb5\u7684\u76f8\u5bf9\u4f4d\u7f6e\u7684\u951a\u70b9\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"font-name-\u5b57\u4f53\u540d\u79f0",children:"Font Name \u5b57\u4f53\u540d\u79f0"}),"\n",(0,i.jsx)(n.p,{children:"The font name of the text."}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u672c\u7684\u5b57\u4f53\u540d\u79f0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"font-size-\u5b57\u4f53\u5927\u5c0f",children:"Font Size \u5b57\u4f53\u5927\u5c0f"}),"\n",(0,i.jsx)(n.p,{children:"The font size of the text."}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u672c\u7684\u5b57\u4f53\u5927\u5c0f\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"begin-editing-\u5f00\u59cb\u7f16\u8f91",children:"Begin Editing \u5f00\u59cb\u7f16\u8f91"}),"\n",(0,i.jsx)(n.p,{children:"A pulse that focuses the text field and shows the keyboard if on an iPhone or iPad."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u805a\u7126\u5728\u6587\u672c\u5b57\u6bb5\u4e0a\uff0c\u5982\u679c\u5728iPhone\u6216iPad\u4e0a\uff0c\u5219\u663e\u793a\u952e\u76d8\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"end-editing-\u7ed3\u675f\u7f16\u8f91",children:"End Editing \u7ed3\u675f\u7f16\u8f91"}),"\n",(0,i.jsx)(n.p,{children:"A pulse that unfocuses the text field and hides the keyboard if on an iPhone or iPad."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u672a\u805a\u7126\u5728\u6587\u672c\u5b57\u6bb5\u4e0a\uff0c\u5982\u679c\u5728iPhone\u6216iPad\u4e0a\uff0c\u5219\u663e\u793a\u952e\u76d8\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"color-\u989c\u8272",children:"Color \u989c\u8272"}),"\n",(0,i.jsx)(n.p,{children:"The color of the text."}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u672c\u7684\u989c\u8272\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"accent-color-\u5f3a\u8c03\u989c\u8272",children:"Accent Color \u5f3a\u8c03\u989c\u8272"}),"\n",(0,i.jsx)(n.p,{children:"The color of the cursor and underline when editing."}),"\n",(0,i.jsx)(n.p,{children:"\u7f16\u8f91\u65f6\u5149\u6807\u7684\u989c\u8272\u548c\u4e0b\u5212\u7ebf\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"text-\u6587\u672c",children:"Text \u6587\u672c"}),"\n",(0,i.jsx)(n.p,{children:"A text string to change the text field to. Use Set Text to change the text."}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u5c06\u6587\u672c\u5b57\u6bb5\u66f4\u6539\u4e3a\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002\u4f7f\u7528\u6587\u672c\u8bbe\u7f6e\u66f4\u6539\u6587\u672c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"hint-text-\u63d0\u793a\u6587\u672c",children:"Hint Text \u63d0\u793a\u6587\u672c"}),"\n",(0,i.jsx)(n.p,{children:"The placeholder text when no text is entered in the field."}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u5b57\u6bb5\u4e2d\u6ca1\u6709\u8f93\u5165\u6587\u672c\u65f6\u7684\u5360\u4f4d\u7b26\u6587\u672c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"set-text-\u8bbe\u7f6e\u6587\u672c",children:"Set Text \u8bbe\u7f6e\u6587\u672c"}),"\n",(0,i.jsx)(n.p,{children:"A pulse that changes the text using the Text input."}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u6587\u672c\u8f93\u5165\u6539\u53d8\u6587\u672c\u7684\u8109\u51b2\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"underline-\u4e0b\u5212\u7ebf",children:"Underline \u4e0b\u5212\u7ebf"}),"\n",(0,i.jsx)(n.p,{children:"A boolean that is true when an underline is displayed."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u4e0b\u5212\u7ebf\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"keyboard-type-\u952e\u76d8\u7c7b\u578b",children:"Keyboard Type \u952e\u76d8\u7c7b\u578b"}),"\n",(0,i.jsx)(n.p,{children:"The type of keyboard to use on an Android phone or tablet."}),"\n",(0,i.jsx)(n.p,{children:"\u5728Android\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u4e0a\u4f7f\u7528\u7684\u952e\u76d8\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"secure-text-entry-\u5b89\u5168\u6587\u672c\u8f93\u5165",children:"Secure Text Entry \u5b89\u5168\u6587\u672c\u8f93\u5165"}),"\n",(0,i.jsx)(n.p,{children:"A boolean that represents whether the text should be obfuscated, useful for password fields."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6587\u672c\u662f\u5426\u5e94\u6a21\u7cca\u5904\u7406\uff0c\u7528\u4e8e\u5bc6\u7801\u5b57\u6bb5\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"text-alignment-\u6587\u672c\u5bf9\u9f50",children:"Text Alignment \u6587\u672c\u5bf9\u9f50"}),"\n",(0,i.jsx)(n.p,{children:"The alignment of typed text in the text field: left, center, right."}),"\n",(0,i.jsx)(n.p,{children:"\u952e\u5165\u6587\u672c\u5728\u6587\u672c\u5b57\u6bb5\u4e2d\u7684\u5bf9\u9f50\u65b9\u5f0f\uff1a\u5de6\uff0c\u5c45\u4e2d\uff0c\u53f3\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"editing-\u7f16\u8f91",children:"Editing \u7f16\u8f91"}),"\n",(0,i.jsx)(n.p,{children:"A boolean that is true when the text field is focused."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u7f16\u8f91\u6587\u672c\u5b57\u6bb5\u65f6\u4e3a\u771f\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"text-\u6587\u672c-1",children:"Text \u6587\u672c"}),"\n",(0,i.jsx)(n.p,{children:"The current text string in the text field."}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u672c\u5b57\u6bb5\u4e2d\u7684\u5f53\u524d\u6587\u672c\u5b57\u7b26\u4e32\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"enter-pressed-\u6309\u4e0b\u8f93\u5165",children:"Enter Pressed \u6309\u4e0b\u8f93\u5165"}),"\n",(0,i.jsx)(n.p,{children:"A pulse that represents when the return key is pressed."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8fd4\u56de\u952e\u88ab\u6309\u4e0b\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Text/Text%20Input%20Info",children:"Text Input Info \u6587\u672c\u8f93\u5165\u4fe1\u606f"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"related-layers-\u76f8\u5173\u56fe\u5c42",children:"Related Layers \u76f8\u5173\u56fe\u5c42"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Alert%20View",children:"Alert View \u8b66\u793a\u6846"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Checkbox",children:"Checkbox \u590d\u9009\u6846"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Fake%20Keyboard",children:"Fake Keyboard \u6a21\u62df\u952e\u76d8"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Page%20Control",children:"Page Control \u5206\u9875\u63a7\u5236\u5668"}),"\n",(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Circular%20Progress",children:"Circular Progress \u73af\u5f62\u8fdb\u5ea6"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Screen",children:"Screen \u5c4f\u5e55"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Status%20bar",children:"Status Bar \u72b6\u6001\u680f"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/Material/Switch",children:"Switch \u5f00\u5173"})})]})}function c(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71955:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/text-field-0cd2ee9f8722d37df06ed453fff2f244.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var i=t(67294);const d={},r=i.createContext(d);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);