"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[43473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,h=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Counter \u8ba1\u6570\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Counter \u8ba1\u6570\u5668",u={unversionedId:"documentation/Utility/Counter",id:"documentation/Utility/Counter",title:"Counter \u8ba1\u6570\u5668",description:"Create a counter that starts at 0 and can be incremented, decremented or set to a specific value. The counter is",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Counter.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Counter",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Counter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Counter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{title:"Counter \u8ba1\u6570\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Convert Position \u8f6c\u6362\u70b9",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Convert Position"},next:{title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Date & Time Formatter"}},l={},c=[{value:"Increase \u9012\u589e",id:"increase-\u9012\u589e",level:3},{value:"Decrease",id:"decrease",level:3},{value:"Jump \u8df3\u8f6c",id:"jump-\u8df3\u8f6c",level:3},{value:"Jump to Number \u8df3\u8f6c\u5230\u7684\u503c",id:"jump-to-number-\u8df3\u8f6c\u5230\u7684\u503c",level:3},{value:"Maximum Count \u6700\u5927\u8ba1\u6570",id:"maximum-count-\u6700\u5927\u8ba1\u6570",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"counter-\u8ba1\u6570\u5668"},"Counter \u8ba1\u6570\u5668"),(0,i.kt)("p",null,"Create a counter that starts at 0 and can be incremented, decremented or set to a specific value. The counter is"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"incremented by one when the Increase port receives a pulse,"),(0,i.kt)("li",{parentName:"ul"},"decremented by one when the Decrement port receives a pulse,"),(0,i.kt)("li",{parentName:"ul"},"set to the value specified by the Jump to Number port when the Jump port receives a pulse.")),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u4ece 0 \u5f00\u59cb\u7684\u8ba1\u6570\u5668\uff0c\u53ef\u4ee5\u9012\u589e\u3001\u9012\u51cf\u6216\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u8ba1\u6570\u5668\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53 Increase \u9012\u589e \u63a5\u53e3\u6536\u5230\u503c\u65f6\u9012\u589e 1\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5f53 Decrament \u9012\u51cf \u63a5\u53e3\u6536\u5230\u503c\u65f6\u9012\u51cf 1\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5f53 Jump to number \u8df3\u8f6c \u63a5\u53e3\u6536\u5230\u503c\u65f6\uff0c\u8df3\u8f6c\u5230\u63a5\u53e3\u8bbe\u7f6e\u7684\u503c\u3002")),(0,i.kt)("p",null,"Constrain the counter by specifying a value in the Maximum Count port. If the counter is incremented after it reaches this maximum value, it will reset to zero. Decrementing the counter from its initial value will wrap it backwards to the maximum value. If the counter is constrained, the \u201cJump to Number\u201d value must fall within bounds, otherwise the counter will return to the starting value."),(0,i.kt)("p",null,"\u901a\u8fc7\u5728\u6700\u5927\u8ba1\u6570\u7aef\u53e3\u4e2d\u6307\u5b9a\u503c\u6765\u7ea6\u675f\u8ba1\u6570\u5668\u3002\u5982\u679c\u8ba1\u6570\u5668\u5728\u8fbe\u5230\u8be5\u6700\u5927\u503c\u540e\u9012\u589e\uff0c\u5b83\u5c06\u91cd\u7f6e\u4e3a\u96f6\u3002\u5c06\u8ba1\u6570\u5668\u4ece\u5176\u521d\u59cb\u503c\u9012\u51cf\u5c06\u4f7f\u5176\u8fd4\u56de\u6700\u5927\u503c\u3002\u5982\u679c\u8ba1\u6570\u5668\u53d7\u5230\u7ea6\u675f\uff0c\u201c\u8df3\u8f6c\u5230\u6570\u5b57\u201d\u503c\u5fc5\u987b\u5728\u8303\u56f4\u5185\uff0c\u5426\u5219\u8ba1\u6570\u5668\u5c06\u8fd4\u56de\u5230\u8d77\u59cb\u503c\u3002"),(0,i.kt)("p",null,"Often used to track a sequential state (ex: an onboarding flow) interchangeably with ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Switch"},"Option Switch"),". See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/States"},"State Basics")," for more information."),(0,i.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u8ddf\u8e2a\u987a\u5e8f\u72b6\u6001(\u4f8b\u5982:\u52a0\u8f7d\u6d41\u7a0b)\uff0c\u53ef\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Switch"},"Option Switch")," \u4e92\u6362\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/States"},"\u72b6\u6001\u57fa\u7840")," \u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(4651).Z,width:"1492",height:"326"})),(0,i.kt)("h3",{id:"increase-\u9012\u589e"},"Increase \u9012\u589e"),(0,i.kt)("p",null,"A pulse that increases the counter value by 1."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5f53\u63a5\u6536\u5230\u503c\u65f6\uff0c\u8ba1\u6570\u5668\u7684\u503c\u52a0 1\u3002"),(0,i.kt)("h3",{id:"decrease"},"Decrease"),(0,i.kt)("p",null,"A pulse that decreases the counter value by 1."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5f53\u63a5\u6536\u5230\u503c\u65f6\uff0c\u8ba1\u6570\u5668\u7684\u503c\u51cf 1\u3002"),(0,i.kt)("h3",{id:"jump-\u8df3\u8f6c"},"Jump \u8df3\u8f6c"),(0,i.kt)("p",null,"A pulse that resets the counter to the value specified by the Jump to Number port."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5f53\u63a5\u6536\u5230\u503c\u65f6\uff0c\u8ba1\u6570\u5668\u8df3\u8f6c\u5230 Jump to Number \u8bbe\u7f6e\u7684\u503c\u3002"),(0,i.kt)("h3",{id:"jump-to-number-\u8df3\u8f6c\u5230\u7684\u503c"},"Jump to Number \u8df3\u8f6c\u5230\u7684\u503c"),(0,i.kt)("p",null,"The number to use as the counter value when the Jump port is pulsed."),(0,i.kt)("p",null,"\u8bbe\u7f6e Jump \u7aef\u53e3\u63a5\u6536\u5230\u503c\u65f6\u8981\u8df3\u8f6c\u5230\u7684\u6570\u503c\u3002"),(0,i.kt)("h3",{id:"maximum-count-\u6700\u5927\u8ba1\u6570"},"Maximum Count \u6700\u5927\u8ba1\u6570"),(0,i.kt)("p",null,"The maximum counter value. The counter will reset to zero when the maximum value is reached. Note that the counter will always remain ",(0,i.kt)("em",{parentName:"p"},"less")," than this value."),(0,i.kt)("p",null,"\u503c\u7684\u6700\u5927\u8ba1\u6570\u503c\u3002\u5f53\u8fbe\u5230\u6700\u5927\u503c\u65f6\uff0c\u8ba1\u7b97\u5668\u5c06\u91cd\u7f6e\u4e3a\u96f6\u3002\u8bf7\u6ce8\u610f\uff0c\u8ba1\u6570\u5668\u5c06\u59cb\u7ec8\u4fdd\u6301\u5c0f\u4e8e\u6b64\u503c\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"The current value of the counter (ex: 0, 1, 2\u2026)"),(0,i.kt)("p",null,"\u8ba1\u6570\u5668\u7684\u5f53\u524d\u503c\uff08\u4f8b\u5982\uff1a0\uff0c1\uff0c2\u2026\uff09"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")))}m.isMDXComponent=!0},4651:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/counter-71653b785555ae18f79b2b626d24b3e0.png"}}]);