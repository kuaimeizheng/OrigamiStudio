"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2991],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(k,o(o({ref:e},u),{},{components:n})):i.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32639:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3},o="Quick Interactions \u5feb\u6377\u4ea4\u4e92",s={unversionedId:"documentation/Canvas/Quick Interactions",id:"documentation/Canvas/Quick Interactions",title:"Quick Interactions \u5feb\u6377\u4ea4\u4e92",description:"Quick Interactions are a faster way to create flows between screens in the Origami [Canvas].",source:"@site/docs/documentation/Canvas/Quick Interactions.md",sourceDirName:"documentation/Canvas",slug:"/documentation/Canvas/Quick Interactions",permalink:"/OrigamiStudio/docs/documentation/Canvas/Quick Interactions",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Canvas/Quick Interactions.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660145226,formattedLastUpdatedAt:"2022\u5e748\u670810\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentionSidebar",previous:{title:"Layout \u5e03\u5c40",permalink:"/OrigamiStudio/docs/documentation/Canvas/Layout"},next:{title:"Patch Editor \u6a21\u5757\u7f16\u8f91\u5668",permalink:"/OrigamiStudio/docs/category/patch-editor-\u6a21\u5757\u7f16\u8f91\u5668"}},l={},c=[],u={toc:c};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-interactions-\u5feb\u6377\u4ea4\u4e92"},"Quick Interactions \u5feb\u6377\u4ea4\u4e92"),(0,r.kt)("p",null,"Quick Interactions are a faster way to create flows between screens in the Origami ","[Canvas]","."),(0,r.kt)("p",null,"\u5feb\u6377\u4ea4\u4e92\u662f\u5728 Origami \u753b\u5e03\u4e2d\u521b\u5efa\u5c4f\u5e55\u8f6c\u573a\u7684\u4e00\u79cd\u66f4\u5feb\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"presenting-screens-\u663e\u793a\u5c4f\u5e55"},"Presenting Screens \u663e\u793a\u5c4f\u5e55"),(0,r.kt)("p",null,"To create a Quick Interaction, click on the Quick Interaction icon in the toolbar and then click on the layer you\u2019d like to trigger the Interaction from to the arboard you\u2019d like to present. You can also Ctrl + Drag from the layer to the artboard."),(0,r.kt)("p",null,"\u8981\u521b\u5efa\u5feb\u6377\u4ea4\u4e92\uff0c\u8bf7\u5355\u51fb\u5de5\u5177\u680f\u4e2d\u7684\u201c\u5feb\u6377\u4ea4\u4e92\u201d\u56fe\u6807\uff0c\u7136\u540e\u5355\u51fb\u8981\u89e6\u53d1\u4ea4\u4e92\u7684\u56fe\u5c42\u548c\u8981\u663e\u793a\u7684\u753b\u677f\u3002\u4e5f\u53ef\u4ee5\u6309\u4f4f ### Ctrl +\u952e\u5c06\u5176\u4ece\u56fe\u5c42\u62d6\u52a8\u5230\u753b\u677f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/quick_interaction_icon.png",alt:null})),(0,r.kt)("p",null,"Presenting and dismissing will use the corresponding transition styles of whichever device platform you have selected in the Devices dropdown in the Origami toolbar. So an iPhone will use the iOS presentation and dismiss transitions while a Pixel will use the Material presentation and dismiss transitions."),(0,r.kt)("p",null,"\u663e\u793a\u548c\u5173\u95ed\u5c06\u4f7f\u7528\u60a8\u5728\u5de5\u5177\u680f\u4e2d\u7684\u201c\u8bbe\u5907\u201d\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u7684\u8bbe\u5907\u5bf9\u5e94\u7684\u8fc7\u6e21\u6837\u5f0f\uff0c\u6240\u4ee5iPhone\u4f1a\u4f7f\u7528iOS\u7684\u8fc7\u6e21\u6837\u5f0f\uff0c\u800cPixel\u4f1a\u4f7f\u7528Material\u7684\u6837\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/quick_interactions_present@2x.png",alt:null})),(0,r.kt)("p",null,"Presenting screens with Quick Interations"),(0,r.kt)("p",null,"\u7528\u5feb\u6377\u4ea4\u4e92\u663e\u793a\u5c4f\u5e55"),(0,r.kt)("p",null,"Trigger a present transition using a Tap, Double Tap or Long Press interaction. You can change the presentation transition type from Push, Modal or None in the Inspector panel on the right hand side of Origami."),(0,r.kt)("p",null,"\u4f7f\u7528\u8f7b\u6309\u3001\u53cc\u51fb\u6216\u957f\u6309\u4ea4\u4e92\u6765\u89e6\u53d1\u5f53\u524d\u7684\u8fc7\u6e21\u3002\u60a8\u53ef\u4ee5\u5728Origami\u53f3\u4fa7\u7684\u68c0\u67e5\u5668\u9762\u677f\u4e2d\uff0c\u9009\u62e9Push\u3001Modal\u6216None\u6765\u66f4\u6539\u8fc7\u6e21\u7c7b\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Push")," Default iOS transition, will slide in the next screen being presented from right to left"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modal")," Will transition in the next screen from the bottom up"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"None")," Will present the next screen immediately with no transition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63a8\u52a8")," \u9ed8\u8ba4iOS\u8fc7\u6e21\uff0c\u4e0b\u4e00\u4e2a\u5c4f\u5e55\u5c06\u4ece\u53f3\u5411\u5de6\u663e\u793a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u6001")," \u4e0b\u4e00\u4e2a\u5c4f\u5e55\u5c06\u4ece\u4e0b\u5411\u4e0a\u8fc7\u6e21"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u65e0")," \u4e0b\u4e00\u4e2a\u5c4f\u5e55\u6ca1\u6709\u8fc7\u6e21\u7acb\u5373\u51fa\u73b0\u3002")),(0,r.kt)("h1",{id:"dismissing-screens-\u5173\u95ed\u5c4f\u5e55"},"Dismissing Screens \u5173\u95ed\u5c4f\u5e55"),(0,r.kt)("p",null,"To dismiss a screen, drag from the layer you\u2019d like to add the interaction to the containing Artboard. This will dismiss that screen and return back to the Artboard you presented from."),(0,r.kt)("p",null,"\u8981\u5173\u95ed\u5c4f\u5e55\uff0c\u8bf7\u62d6\u52a8\u6dfb\u52a0\u4ea4\u4e92\u7684\u56fe\u5c42\u5230\u5176\u6240\u5305\u542b\u7684\u753b\u677f\u3002 \u8fd9\u5c06\u5173\u95ed\u8be5\u5c4f\u5e55\u5e76\u8fd4\u56de\u5230\u60a8\u9700\u8981\u5c55\u793a\u7684\u753b\u677f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/quick_interactions_dismiss@2x.png",alt:null})),(0,r.kt)("p",null,"Dismissing screens with Quick Interations"),(0,r.kt)("p",null,"\u5173\u95ed\u5c4f\u5e55\u7684\u5feb\u6377\u4ea4\u4e92"),(0,r.kt)("h1",{id:"quick-interactions--patch-editor-\u5feb\u6377\u4ea4\u4e92\u6a21\u5757\u7f16\u8f91\u5668"},"Quick Interactions & Patch Editor \u5feb\u6377\u4ea4\u4e92&\u6a21\u5757\u7f16\u8f91\u5668"),(0,r.kt)("p",null,"Creating a Quick Interaction will automatically generate a corresponding patch in the Patch Editor."),(0,r.kt)("p",null,"\u521b\u5efa\u5feb\u6377\u4ea4\u4e92\u5c06\u81ea\u52a8\u5728\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\u751f\u6210\u76f8\u5e94\u7684\u4ea4\u4e92\u6a21\u5757\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15559).Z,width:"1502",height:"296"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"When creating multiple Quick Interactions, Origami will often stack the automatically generated patches on top of each other so double check that if you\u2019re not seeing them show up in the Patch Editor.")),(0,r.kt)("p",null,"\u5f53\u521b\u5efa\u591a\u4e2a\u5feb\u6377\u4ea4\u4e92\u65f6\uff0cOrigami\u901a\u5e38\u4f1a\u5c06\u81ea\u52a8\u751f\u6210\u7684\u6a21\u5757\u5806\u53e0\u5728\u5f7c\u6b64\u7684\u9876\u90e8\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u5728\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\u770b\u5230\u5b83\u4eec\uff0c\u8bf7\u4ed4\u7ec6\u68c0\u67e5\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the Quick Interaction feature to create transitions between screens in your prototypes."),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5feb\u6377\u4ea4\u4e92\u529f\u80fd\u5728\u539f\u578b\u4e2d\u521b\u5efa\u5c4f\u5e55\u4e4b\u95f4\u7684\u8f6c\u573a\u3002")))}p.isMDXComponent=!0},15559:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/quick-interactions-1-59573601a7bc3c7fb94fb323c6ea5f03.png"}}]);