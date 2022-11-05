"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[98314],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(o),k=n,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||p;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,i=new Array(p);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<p;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},33237:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const p={sidebar_position:5},i="Peek Pop \u8f7b\u538b\u91cd\u538b",a={unversionedId:"documentation/Interaction/Peek Pop",id:"documentation/Interaction/Peek Pop",title:"Peek Pop \u8f7b\u538b\u91cd\u538b",description:"Allows you to build prototypes using Apple\u2019s Peek/Pop 3D Touch feature from iOS 9. This patch takes in a touch force and exposes peek progress, pop progress and whether or not the current content should be peeking or popped.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Interaction/Peek Pop.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Peek Pop",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Peek Pop",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Peek Pop.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Mouse \u9f20\u6807",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Mouse"},next:{title:"Pop Switch \u6d41\u884c\u5f00\u5173",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Pop Switch"}},l={},c=[{value:"Enable Pop \u542f\u7528\u8f7b\u538b",id:"enable-pop-\u542f\u7528\u8f7b\u538b",level:3},{value:"Force \u538b\u529b",id:"force-\u538b\u529b",level:3},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:3},{value:"Peek Force \u8f7b\u538b\u529b\u5ea6",id:"peek-force-\u8f7b\u538b\u529b\u5ea6",level:3},{value:"Pop Force \u91cd\u538b\u529b\u5ea6",id:"pop-force-\u91cd\u538b\u529b\u5ea6",level:3},{value:"Peek Progress \u8f7b\u538b\u8fdb\u5ea6",id:"peek-progress-\u8f7b\u538b\u8fdb\u5ea6",level:3},{value:"Popped Progress \u91cd\u538b\u8fdb\u5ea6",id:"popped-progress-\u91cd\u538b\u8fdb\u5ea6",level:3},{value:"Peeking \u662f\u5426\u8f7b\u538b",id:"peeking-\u662f\u5426\u8f7b\u538b",level:3},{value:"Popped \u662f\u5426\u91cd\u538b",id:"popped-\u662f\u5426\u91cd\u538b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"### Sample  \u793a\u4f8b",id:"-sample--\u793a\u4f8b",level:3}],s={toc:c};function u(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"peek-pop-\u8f7b\u538b\u91cd\u538b"},"Peek Pop \u8f7b\u538b\u91cd\u538b"),(0,n.kt)("p",null,"Allows you to build prototypes using Apple\u2019s Peek/Pop 3D Touch feature from iOS 9. This patch takes in a touch force and exposes peek progress, pop progress and whether or not the current content should be peeking or popped."),(0,n.kt)("p",null,"\u5141\u8bb8\u4f60\u4f7f\u7528 iOS 9\u7684\u82f9\u679c Peek/Pop 3D Touch \u529f\u80fd\u6765\u6784\u5efa\u539f\u578b\u3002\u8fd9\u4e2a\u6a21\u5757\u5728\u89e6\u6478\u529b\u5ea6\u548c\u8f7b\u538b\u529b\u5ea6\uff0c\u91cd\u538b\u529b\u5ea6\u4ee5\u53ca\u662f\u5426\u5141\u8bb8\u5f53\u524d\u7684\u5185\u5bb9\u53ef\u4ee5\u88ab\u8f7b\u538b\u6216\u91cd\u538b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(96632).Z,width:"1288",height:"296"})),(0,n.kt)("h3",{id:"enable-pop-\u542f\u7528\u8f7b\u538b"},"Enable Pop \u542f\u7528\u8f7b\u538b"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u63a5\u6536\u5230\u4ea4\u4e92\u6a21\u5757\u542f\u7528\u65f6\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"force-\u538b\u529b"},"Force \u538b\u529b"),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u63a5\u6536\u5230\u7684\u89e6\u6478\u7684\u538b\u529b\u503c\u3002"),(0,n.kt)("h3",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u91cd\u7f6e\u4ea4\u4e92\u3002"),(0,n.kt)("h3",{id:"peek-force-\u8f7b\u538b\u529b\u5ea6"},"Peek Force \u8f7b\u538b\u529b\u5ea6"),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8fbe\u5230\u8f7b\u538b\u6240\u9700\u7684\u529b\u5ea6\u3002"),(0,n.kt)("h3",{id:"pop-force-\u91cd\u538b\u529b\u5ea6"},"Pop Force \u91cd\u538b\u529b\u5ea6"),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8fbe\u5230\u91cd\u538b\u6240\u9700\u7684\u529b\u5ea6\u3002"),(0,n.kt)("h3",{id:"peek-progress-\u8f7b\u538b\u8fdb\u5ea6"},"Peek Progress \u8f7b\u538b\u8fdb\u5ea6"),(0,n.kt)("p",null,"\u4e00\u4e2a\u4ece0\u52301\u7684\u6570\u5b57\u52a8\u753b\uff0c\u8868\u793a\u5f53\u524d\u8f7b\u538b\u7684\u529b\u5ea6\u3002"),(0,n.kt)("h3",{id:"popped-progress-\u91cd\u538b\u8fdb\u5ea6"},"Popped Progress \u91cd\u538b\u8fdb\u5ea6"),(0,n.kt)("p",null,"\u4e00\u4e2a\u4ece0\u52301\u7684\u6570\u5b57\u52a8\u753b\uff0c\u8868\u793a\u5f53\u524d\u91cd\u538b\u7684\u529b\u5ea6\u3002"),(0,n.kt)("h3",{id:"peeking-\u662f\u5426\u8f7b\u538b"},"Peeking \u662f\u5426\u8f7b\u538b"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u662f\u5426\u88ab\u8f7b\u538b\u3002"),(0,n.kt)("h3",{id:"popped-\u662f\u5426\u91cd\u538b"},"Popped \u662f\u5426\u91cd\u538b"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u662f\u5426\u88ab\u91cd\u538b\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-sample--\u793a\u4f8b"},"### Sample  \u793a\u4f8b"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(29127).Z,width:"1366",height:"354"})),(0,n.kt)("p",null,"\u5982\u56fe\uff1a"),(0,n.kt)("p",null,"\u5f53\u68c0\u6d4b\u5230\u6309\u4e0b\u65f6\uff0c Enable Pop \u8f93\u5165\u7aef\u53e3\u4e3a\u771f\uff0cForce \u8f93\u5165\u7aef\u53e3\u663e\u793a\u5f53\u524d\u538b\u529b\u503c\u7684\u6570\u5b57\uff0c\u5f53\u538b\u529b\u503c\u4ece 0 \u5230 3 \u65f6\uff0cPeek Progress \u8f93\u51fa\u7aef\u53e3\u505a\u4ece 0 \u5230 1 \u7684\u52a8\u753b\uff0c\u5e76\u8f93\u51fa\u4e3a 1\uff0c\u5f53\u524d\u538b\u529b\u503c\u4ece 3 \u5230 6.65 \u65f6\uff0cPopped Progress \u8f93\u51fa\u7aef\u53e3\u4ece 0 \u5230 1 \u7684\u52a8\u753b\uff0c\u5e76\u8f93\u51fa\u4e3a 1\uff0c\u5f53\u538b\u529b\u503c\u8fbe\u5230 3 \u548c 6.65 \u65f6\uff0cPeeking \u548cPopped \u7aef\u53e3\u8f93\u51fa\u4e3a\u771f\u3002"))}u.isMDXComponent=!0},29127:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/peek-pop-example-47e24e9c6f828e5869a4ac211f4a800f.png"},96632:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/peek-pop-df7772344016af8b74e604504041fdd0.png"}}]);