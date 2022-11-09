"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[38295],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(h,i(i({ref:e},l),{},{components:n})):a.createElement(h,i({ref:e},l))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15872:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Interactions Patch \u4ea4\u4e92\u6a21\u5757",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},i="Interactions Patch \u4ea4\u4e92\u6a21\u5757",c={unversionedId:"documentation/PatchEditor/Interactions Patch",id:"documentation/PatchEditor/Interactions Patch",title:"Interactions Patch \u4ea4\u4e92\u6a21\u5757",description:"Interaction patches output information about user interactions (touches, swipes, key presses) in the viewer. Add interactions by hovering on a layer and pressing the Touch button, or by searching in the Patch Library.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/PatchEditor/Interactions Patch.md",sourceDirName:"documentation/PatchEditor",slug:"/documentation/PatchEditor/Interactions Patch",permalink:"/OrigamiStudio/en/docs/documentation/PatchEditor/Interactions Patch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/PatchEditor/Interactions Patch.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:20,frontMatter:{title:"Interactions Patch \u4ea4\u4e92\u6a21\u5757",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Animations \u52a8\u753b",permalink:"/OrigamiStudio/en/docs/documentation/PatchEditor/Animations"},next:{title:"Workflow \u5de5\u4f5c\u6d41",permalink:"/OrigamiStudio/en/docs/category/workflow-\u5de5\u4f5c\u6d41"}},p={},u=[{value:"Interaction patches \u4ea4\u4e92\u6a21\u5757",id:"interaction-patches-\u4ea4\u4e92\u6a21\u5757",level:2},{value:"Notes on touch detection \u89e6\u6478\u68c0\u6d4b\u6ce8\u610f\u4e8b\u9879",id:"notes-on-touch-detection-\u89e6\u6478\u68c0\u6d4b\u6ce8\u610f\u4e8b\u9879",level:2},{value:"Summary \u603b\u7ed3",id:"summary-\u603b\u7ed3",level:2}],l={toc:u};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interactions-patch-\u4ea4\u4e92\u6a21\u5757"},"Interactions Patch \u4ea4\u4e92\u6a21\u5757"),(0,r.kt)("p",null,"Interaction patches output information about user interactions (touches, swipes, key presses) in the viewer. Add interactions by hovering on a layer and pressing the Touch button, or by searching in the Patch Library."),(0,r.kt)("p",null,"\u4ea4\u4e92\u6a21\u5757\u5728\u67e5\u770b\u5668\u4e2d\u8f93\u51fa\u6709\u5173\u7528\u6237\u4ea4\u4e92\uff08\u89e6\u6478\u3001\u6ed1\u52a8\u3001\u6309\u952e\uff09\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u5c06\u9f20\u6807\u60ac\u505c\u5728\u56fe\u5c42\u4e0a\u5e76\u6309\u4e0b Touch \u89e6\u6478 \u6309\u94ae\u6216\u5728\u6a21\u5757\u5e93\u4e2d\u641c\u7d22\u6765\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"interaction-patches-\u4ea4\u4e92\u6a21\u5757"},"Interaction patches \u4ea4\u4e92\u6a21\u5757"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction")," This is the bread and butter of interaction in Origami. It can tell you when a user touches down or taps on a particular layer. It also provides the position of the touch within its parent group, and the amount of force applied when using a laptop, phone, or tablet that supports 3D Touch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Scroll"},"Scroll")," This is another common interaction in Origami. It lets you scroll a layer vertically or horizontally, with customizable physics. It can be set to Paging mode, which is useful for prototyping carousels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Pop%20Switch"},"Pop Switch")," This helps you quickly prototype a two-state, swipeable interaction (ex: swiping a card left and right). It also supports two-finger pinching in addition to swipes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Long%20Press"},"Long Press")," and ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Double%20Tap"},"Double Tap")," Captures long presses and double taps when connected to an Interaction patch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Drag"},"Drag")," Make any layer draggable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Keyboard"},"Keyboard")," This shows whenever a key is pressed in the viewer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Hover"},"Hover")," Allows you to capture hover interaction with a mouse.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"\u4ea4\u4e92")," \u6700\u57fa\u7840\u7684\u4ea4\u4e92\u3002\u53ef\u4ee5\u544a\u8bc9\u4f60\u7528\u6237\u4ec0\u4e48\u65f6\u5019\u89e6\u78b0\u6216\u70b9\u51fb\u4e86\u6307\u5b9a\u7684\u56fe\u5c42\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5b83\u8fd8\u63d0\u4f9b\u4e86\u89e6\u6478\u533a\u57df\u5728\u5176\u7236\u7ec4\u4e2d\u7684\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u4f7f\u7528\u652f\u6301 3D \u89e6\u6478\u7684\u7b14\u8bb0\u672c\u7535\u8111\u3001\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u65f6\u7684\u89e6\u63a7\u529b\u5ea6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Scroll"},"\u6eda\u52a8")," \u53e6\u4e00\u4e2a\u5e38\u89c1\u7684\u4ea4\u4e92\u3002\u53ef\u4ee5\u5782\u76f4\u6216\u6c34\u5e73\u6eda\u52a8\u4e00\u4e2a\u56fe\u5c42\uff0c\u5e76\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u7269\u7406\u7279\u6027\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd8\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5206\u9875\u6a21\u5f0f\uff0c\u53ef\u4ee5\u5feb\u901f\u5236\u4f5c\u51fa\u8f6e\u64ad\u56fe\u7684\u4ea4\u4e92\u8bbe\u8ba1\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Pop%20Switch"},"\u6d41\u884c\u5f00\u5173")," \u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u5207\u6362\u539f\u578b\u4e2d\u4e24\u79cd\u72b6\u6001\u7684\u53ef\u6ed1\u52a8\u7684\u4ea4\u4e92(\u4f8b\u5982:\u5411\u5de6\u6216\u5411\u53f3\u6ed1\u52a8\u5361\u7247)\u3002\u9664\u4e86\u6ed1\u52a8\u5916\uff0c\u5b83\u8fd8\u652f\u6301\u53cc\u6307\u634f\u5408\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Long%20Press"},"\u957f\u6309")," and ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Double%20Tap"},"\u53cc\u51fb")," \u957f\u6309\u548c\u53cc\u70b9\u51fb\u6355\u83b7\u957f\u6309\u548c\u53cc\u70b9\u51fb\u65f6\uff0c\u8fde\u63a5\u5230\u4e00\u4e2a\u4e92\u52a8\u6a21\u5757\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Double%20Tap"},"\u62d6\u62fd")," \u4f7f\u4efb\u4f55\u56fe\u5c42\u90fd\u53ef\u4ee5\u62d6\u52a8\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Keyboard"},"\u952e\u76d8")," \u6bcf\u5f53\u5728\u67e5\u770b\u5668\u4e2d\u6309\u4e0b\u4e00\u4e2a\u952e\u65f6\u663e\u793a\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Hover"},"\u60ac\u505c")," \u5141\u8bb8\u4f60\u6355\u6349\u9f20\u6807\u60ac\u505c\u4ea4\u4e92\u3002"))),(0,r.kt)("h2",{id:"notes-on-touch-detection-\u89e6\u6478\u68c0\u6d4b\u6ce8\u610f\u4e8b\u9879"},"Notes on touch detection \u89e6\u6478\u68c0\u6d4b\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"Layers need to be enabled and have opacity larger than 0 to receive touches. Touches in Layer Groups are propagated and shared with the parent groups, allowing you to build scrolling layer groups with tappable layers inside."),(0,r.kt)("p",null,"\u9700\u8981\u542f\u7528\u56fe\u5c42\uff0c\u5e76\u4e14\u4e0d\u900f\u660e\u5ea6\u5927\u4e8e 0 \u624d\u80fd\u63a5\u6536\u89e6\u6478\u4ea4\u4e92\u3002\u56fe\u5c42\u7ec4\u4e2d\u7684\u89e6\u6478\u4ea4\u4e92\u4f1a\u4e0e\u7236\u7ec4\u5171\u4eab\uff0c\u5141\u8bb8\u4f60\u5efa\u7acb\u5185\u90e8\u5e26\u6709\u53ef\u70b9\u51fb\u56fe\u5c42\u7684\u6eda\u52a8\u56fe\u5c42\u7ec4\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interaction patches pass information about user interactions."),(0,r.kt)("li",{parentName:"ul"},"Interactions for a particular layer can be captured by using the Touch menu."),(0,r.kt)("li",{parentName:"ul"},"There are multiple types of interaction patches for capturing different types of interactions."),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u6a21\u5757\u4f20\u9012\u6709\u5173\u7528\u6237\u7684\u4ea4\u4e92\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u89e6\u6478\u83dc\u5355\u4e2d\u7684\u9009\u9879\u8bbe\u7f6e\u7279\u5b9a\u56fe\u5c42\u7684\u4ea4\u4e92\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u591a\u79cd\u7c7b\u578b\u7684\u4ea4\u4e92\u6a21\u5757\u7528\u4e8e\u8bbe\u7f6e\u4e0d\u540c\u7c7b\u578b\u7684\u4ea4\u4e92\u3002")))}s.isMDXComponent=!0}}]);