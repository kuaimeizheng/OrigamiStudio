"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3326],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>h});var n=i(67294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},l=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=p(i),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return i?n.createElement(m,o(o({ref:e},l),{},{components:i})):n.createElement(m,o({ref:e},l))}));function h(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,o=new Array(r);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9187:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={sidebar_position:3},o="States \u72b6\u6001",c={unversionedId:"documentation/Patch Editor/States",id:"documentation/Patch Editor/States",title:"States \u72b6\u6001",description:"Every prototype has multiple states it can transition between. In Origami, Switch patches help keep track of which state you are in. They are like light switches and can be toggled with [interaction patches] .",source:"@site/docs/documentation/Patch Editor/States.md",sourceDirName:"documentation/Patch Editor",slug:"/documentation/Patch Editor/States",permalink:"/OrigamiStudio/docs/documentation/Patch Editor/States",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Patch Editor/States.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659715910,formattedLastUpdatedAt:"2022\u5e748\u67085\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentionSidebar",previous:{title:"Interactions Patch \u4ea4\u4e92\u6a21\u5757",permalink:"/OrigamiStudio/docs/documentation/Patch Editor/Interactions Patch"},next:{title:"Animations \u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Patch Editor/Animations"}},s={},p=[{value:"Switch \u21e7S \u5361\u5173",id:"switch-s-\u5361\u5173",level:3},{value:"Option Switch \u9009\u9879\u5f00\u5173",id:"option-switch-\u9009\u9879\u5f00\u5173",level:3},{value:"Counter \u8ba1\u6570\u5668",id:"counter-\u8ba1\u6570\u5668",level:3}],l={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"states-\u72b6\u6001"},"States \u72b6\u6001"),(0,a.kt)("p",null,"Every prototype has multiple states it can transition between. In Origami, Switch patches help keep track of which state you are in. They are like light switches and can be toggled with ","[interaction patches]"," ."),(0,a.kt)("p",null,"\u6bcf\u4e2a\u539f\u578b\u90fd\u6709\u591a\u4e2a\u53ef\u4ee5\u8f6c\u6362\u7684\u72b6\u6001\u3002 \u5728 Origami \u4e2d\uff0c",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")," \u6a21\u5757\u53ef\u4ee5\u5e2e\u52a9\u8ffd\u8e2a\u6a21\u5757\u6240\u5904\u7684\u72b6\u6001\u3002\u5b83\u4eec\u5c31\u50cf\u7535\u706f\u5f00\u5173\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ea4\u4e92\u6a21\u5757\u8fdb\u884c\u5207\u6362\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"state-patches-\u72b6\u6001\u6a21\u5757"},"State patches \u72b6\u6001\u6a21\u5757"),(0,a.kt)("h3",{id:"switch-s-\u5361\u5173"},"Switch \u21e7S \u5361\u5173"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch")," patch is like a light switch: turning it on keeps it on, and turning it off keeps it off. They are helpful to build simple two-state interactions, e.g. showing and hiding comments in a popover."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch")," \u5f00\u5173\u6a21\u5757\u5c31\u50cf\u4e00\u4e2a\u7535\u706f\u5f00\u5173\uff1a\u6253\u5f00\u5c31\u4fdd\u6301\u6253\u5f00\u72b6\u6001\uff0c\u5173\u95ed\u5c31\u4fdd\u6301\u5173\u95ed\u72b6\u6001\u3002\u5b83\u6709\u52a9\u4e8e\u6784\u5efa\u7b80\u5355\u7684\u53ea\u6709\u4e24\u79cd\u72b6\u6001\u7684\u4ea4\u4e92\uff0c\u4f8b\u5982\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u663e\u793a\u548c\u9690\u85cf\u8bc4\u8bba\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(87438).Z,width:"1498",height:"294"})),(0,a.kt)("p",null,"Multiple Switch patches can combined with Logic patches (",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Or"},"Or"),", ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/And"},"And"),", ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Not"},"Not")," to build on top of each other, e.g. opening a composer with different attachment options which the user can toggle."),(0,a.kt)("p",null,"\u591a\u4e2a\u5f00\u5173\u6a21\u5757\u53ef\u4ee5\u4e0e\u903b\u8f91\u6a21\u5757\uff08\u6216\u3001\u548c\u3001\u975e\uff09\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u76f8\u4e92\u6784\u5efa\uff0c\u4f8b\u5982\uff0c\u6253\u5f00\u4e00\u4e2a\u5177\u6709\u4e0d\u540c\u9644\u4ef6\u9009\u9879\u7684\u88c5\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u5207\u6362\u8fd9\u4e9b\u9009\u9879\u3002"),(0,a.kt)("h3",{id:"option-switch-\u9009\u9879\u5f00\u5173"},"Option Switch \u9009\u9879\u5f00\u5173"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch")," patches are useful for mutually exclusive states that cannot coexist, e.g. a tab bar. Option Switches are commonly used with ","[Option Pickers]"," to pass different values depending the state. For example, if you wanted to change a navigation bar title between 3 states:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"\u9009\u9879\u5f00\u5173"),"\u6a21\u5757\u9002\u7528\u4e8e\u4e0d\u80fd\u5171\u5b58\u7684\u4e92\u65a5\u72b6\u6001\uff0c\u4f8b\u5982\u6807\u7b7e\u680f\u3002\u9009\u9879\u5f00\u5173\u901a\u5e38\u4e0e\u9009\u9879\u9009\u62e9\u5668\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u6839\u636e\u72b6\u6001\u4f20\u9012\u4e0d\u540c\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8981\u57283\u79cd\u72b6\u6001\u4e4b\u95f4\u66f4\u6539\u5bfc\u822a\u680f\u6807\u9898\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(79252).Z,width:"1496",height:"298"})),(0,a.kt)("h3",{id:"counter-\u8ba1\u6570\u5668"},"Counter \u8ba1\u6570\u5668"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Counter"},"Counter")," patches are useful for mutually exclusive states that cannot coexist, and increment in a fixed order e.g. an onboarding flow."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Counter"},"\u8ba1\u6570\u5668"),"\u6a21\u5757\u9002\u7528\u4e8e\u4e0d\u80fd\u5171\u5b58\u7684\u4e92\u65a5\u72b6\u6001\uff0c\u5e76\u4e14\u4ee5\u56fa\u5b9a\u7684\u987a\u5e8f\u9012\u589e\uff0c\u4f8b\u5982\uff0c\u5165\u804c\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(53375).Z,width:"1502",height:"330"})),(0,a.kt)("h1",{id:"index-numbers-represent-states-\u7d22\u5f15\u5e8f\u53f7\u8868\u793a\u72b6\u6001"},"Index numbers represent states \u7d22\u5f15\u5e8f\u53f7\u8868\u793a\u72b6\u6001"),(0,a.kt)("p",null,"Both Switch and Option Switch patches output a number for the state that is active. Switch patches output a 0 (off) or a 1 (on), and Option Switch patches output a number starting from 0 for the first state, to 1 for the 2nd, and so on:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")," \u6a21\u5757\u90fd\u4f1a\u8f93\u51fa\u6fc0\u6d3b\u72b6\u6001\u7684\u6570\u5b57\u3002\u5f00\u5173\u6a21\u5757\u8f93\u51fa 0\uff08\u5173\u95ed\uff09\u6216 1\uff08\u6253\u5f00\uff09\uff0c\u9009\u9879\u5f00\u5173\u6a21\u5757\u8f93\u51fa\u4e00\u4e2a\u6570\u5b57\uff0c\u7b2c\u4e00\u4e2a\u72b6\u6001\u4ece0\u5f00\u59cb\uff0c\u7b2c\u4e8c\u4e2a\u72b6\u6001\u4ece1\u5f00\u59cb\uff0c\u4f9d\u6b64\u7c7b\u63a8\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Index 0 \u2192 Initial state / Off State  \u7d22\u5f15 0 \u2192 \u521d\u59cb\u72b6\u6001/\u5173\u95ed\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"Index 1 \u2192 2nd state / On State  \u7d22\u5f15 1 \u2192 \u7b2c\u4e8c\u72b6\u6001/\u6253\u5f00\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"Index 2 \u2192 3rd state  \u7d22\u5f15 2 \u2192 \u7b2c\u4e09\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"Index 3 \u2192 4th state  \u7d22\u5f15 3 \u2192 \u7b2c\u56db\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manage state with Switch, Option Switch, or Counter"),(0,a.kt)("li",{parentName:"ul"},"States are represented with integers, starting from 0"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5f00\u5173\u3001\u9009\u9879\u5f00\u5173\u6216\u8ba1\u6570\u5668\u6a21\u5757\u7ba1\u7406\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7528\u6574\u6570\u8868\u793a\uff0c\u4ece 0 \u5f00\u59cb")))}u.isMDXComponent=!0},87438:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/states-1-7a1b452f8c40544cb71039477fee4c15.png"},79252:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/states-2-03b6d4f66ecca639374ae96f642ff395.png"},53375:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/states-3-54c9418a90c691c567cd5dc09b1f2e4d.png"}}]);