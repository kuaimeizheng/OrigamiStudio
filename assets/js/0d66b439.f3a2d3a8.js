"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4994],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=i.createContext({}),l=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return i.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:e},p),{},{components:n})):i.createElement(h,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3528:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},c="States \u72b6\u6001",l={unversionedId:"Patch Editor/States",id:"Patch Editor/States",title:"States \u72b6\u6001",description:"Every prototype has multiple states it can transition between. In Origami, Switch patches help keep track of which state you are in. They are like light switches and can be toggled with [interaction patches] .",source:"@site/docs/Patch Editor/States.md",sourceDirName:"Patch Editor",slug:"/Patch Editor/States",permalink:"/OrigamiStudio/docs/Patch Editor/States",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Patch Editor/States.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactions Patch \u4ea4\u4e92\u6a21\u5757",permalink:"/OrigamiStudio/docs/Patch Editor/Interactions Patch"},next:{title:"Animations \u52a8\u753b",permalink:"/OrigamiStudio/docs/Patch Editor/Animations"}},p={},u=[{value:"Switch \u21e7S \u5361\u5173",id:"switch-s-\u5361\u5173",level:3},{value:"Option Switch \u9009\u9879\u5f00\u5173",id:"option-switch-\u9009\u9879\u5f00\u5173",level:3},{value:"Counter \u8ba1\u6570\u5668",id:"counter-\u8ba1\u6570\u5668",level:3}],d={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"states-\u72b6\u6001"},"States \u72b6\u6001"),(0,r.kt)("p",null,"Every prototype has multiple states it can transition between. In Origami, Switch patches help keep track of which state you are in. They are like light switches and can be toggled with ","[interaction patches]"," ."),(0,r.kt)("p",null,"\u6bcf\u4e2a\u539f\u578b\u90fd\u6709\u591a\u4e2a\u53ef\u4ee5\u8f6c\u6362\u7684\u72b6\u6001\u3002 \u5728 Origami \u4e2d\uff0c",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Switch"},"Switch \u5f00\u5173")," \u6a21\u5757\u53ef\u4ee5\u5e2e\u52a9\u8ffd\u8e2a\u6a21\u5757\u6240\u5904\u7684\u72b6\u6001\u3002\u5b83\u4eec\u5c31\u50cf\u7535\u706f\u5f00\u5173\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ea4\u4e92\u6a21\u5757\u8fdb\u884c\u5207\u6362\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"state-patches-\u72b6\u6001\u6a21\u5757"},"State patches \u72b6\u6001\u6a21\u5757"),(0,r.kt)("h3",{id:"switch-s-\u5361\u5173"},"Switch \u21e7S \u5361\u5173"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Switch"},"Switch")," patch is like a light switch: turning it on keeps it on, and turning it off keeps it off. They are helpful to build simple two-state interactions, e.g. showing and hiding comments in a popover."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Switch"},"Switch")," \u5f00\u5173\u6a21\u5757\u5c31\u50cf\u4e00\u4e2a\u7535\u706f\u5f00\u5173\uff1a\u6253\u5f00\u5c31\u4fdd\u6301\u6253\u5f00\u72b6\u6001\uff0c\u5173\u95ed\u5c31\u4fdd\u6301\u5173\u95ed\u72b6\u6001\u3002\u5b83\u6709\u52a9\u4e8e\u6784\u5efa\u7b80\u5355\u7684\u53ea\u6709\u4e24\u79cd\u72b6\u6001\u7684\u4ea4\u4e92\uff0c\u4f8b\u5982\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u663e\u793a\u548c\u9690\u85cf\u8bc4\u8bba\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9611dde1-5b8c-48ee-a187-2e250c5fba16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162439Z&X-Amz-Expires=86400&X-Amz-Signature=bcf145c6ce12ac771872a6227a1a3f681319f9eca1479034ad82a90ea54ba7df&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})),(0,r.kt)("p",null,"Multiple Switch patches can combined with Logic patches (",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Or"},"Or"),", ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/And"},"And"),", ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Not"},"Not")," to build on top of each other, e.g. opening a composer with different attachment options which the user can toggle."),(0,r.kt)("p",null,"\u591a\u4e2a\u5f00\u5173\u6a21\u5757\u53ef\u4ee5\u4e0e\u903b\u8f91\u6a21\u5757\uff08\u6216\u3001\u548c\u3001\u975e\uff09\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u76f8\u4e92\u6784\u5efa\uff0c\u4f8b\u5982\uff0c\u6253\u5f00\u4e00\u4e2a\u5177\u6709\u4e0d\u540c\u9644\u4ef6\u9009\u9879\u7684\u88c5\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u5207\u6362\u8fd9\u4e9b\u9009\u9879\u3002"),(0,r.kt)("h3",{id:"option-switch-\u9009\u9879\u5f00\u5173"},"Option Switch \u9009\u9879\u5f00\u5173"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Switch"},"Option Switch")," patches are useful for mutually exclusive states that cannot coexist, e.g. a tab bar. Option Switches are commonly used with ","[Option Pickers]"," to pass different values depending the state. For example, if you wanted to change a navigation bar title between 3 states:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Switch"},"\u9009\u9879\u5f00\u5173"),"\u6a21\u5757\u9002\u7528\u4e8e\u4e0d\u80fd\u5171\u5b58\u7684\u4e92\u65a5\u72b6\u6001\uff0c\u4f8b\u5982\u6807\u7b7e\u680f\u3002\u9009\u9879\u5f00\u5173\u901a\u5e38\u4e0e\u9009\u9879\u9009\u62e9\u5668\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u6839\u636e\u72b6\u6001\u4f20\u9012\u4e0d\u540c\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8981\u57283\u79cd\u72b6\u6001\u4e4b\u95f4\u66f4\u6539\u5bfc\u822a\u680f\u6807\u9898\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f5529284-08dd-4101-b66b-265a9527cc07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162452Z&X-Amz-Expires=86400&X-Amz-Signature=95767a71a1e76329ca8cbc15e014bc2fdab9b0bfb2a01cb5b11af7d4ed0d8231&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})),(0,r.kt)("h3",{id:"counter-\u8ba1\u6570\u5668"},"Counter \u8ba1\u6570\u5668"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Counter"},"Counter")," patches are useful for mutually exclusive states that cannot coexist, and increment in a fixed order e.g. an onboarding flow."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Counter"},"\u8ba1\u6570\u5668"),"\u6a21\u5757\u9002\u7528\u4e8e\u4e0d\u80fd\u5171\u5b58\u7684\u4e92\u65a5\u72b6\u6001\uff0c\u5e76\u4e14\u4ee5\u56fa\u5b9a\u7684\u987a\u5e8f\u9012\u589e\uff0c\u4f8b\u5982\uff0c\u5165\u804c\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1516a62-6fc6-49bf-ba33-dda7e8eaad32/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T162455Z&X-Amz-Expires=86400&X-Amz-Signature=9908a3461693bcff7938809558446d481184ed0f71b174ed6306d3135db7ebaa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})),(0,r.kt)("h1",{id:"index-numbers-represent-states-\u7d22\u5f15\u5e8f\u53f7\u8868\u793a\u72b6\u6001"},"Index numbers represent states \u7d22\u5f15\u5e8f\u53f7\u8868\u793a\u72b6\u6001"),(0,r.kt)("p",null,"Both Switch and Option Switch patches output a number for the state that is active. Switch patches output a 0 (off) or a 1 (on), and Option Switch patches output a number starting from 0 for the first state, to 1 for the 2nd, and so on:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Switch"},"Switch \u5f00\u5173")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Switch"},"Option Switch \u9009\u9879\u5f00\u5173")," \u6a21\u5757\u90fd\u4f1a\u8f93\u51fa\u6fc0\u6d3b\u72b6\u6001\u7684\u6570\u5b57\u3002\u5f00\u5173\u6a21\u5757\u8f93\u51fa 0\uff08\u5173\u95ed\uff09\u6216 1\uff08\u6253\u5f00\uff09\uff0c\u9009\u9879\u5f00\u5173\u6a21\u5757\u8f93\u51fa\u4e00\u4e2a\u6570\u5b57\uff0c\u7b2c\u4e00\u4e2a\u72b6\u6001\u4ece0\u5f00\u59cb\uff0c\u7b2c\u4e8c\u4e2a\u72b6\u6001\u4ece1\u5f00\u59cb\uff0c\u4f9d\u6b64\u7c7b\u63a8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Index 0 \u2192 Initial state / Off State  \u7d22\u5f15 0 \u2192 \u521d\u59cb\u72b6\u6001/\u5173\u95ed\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"Index 1 \u2192 2nd state / On State  \u7d22\u5f15 1 \u2192 \u7b2c\u4e8c\u72b6\u6001/\u6253\u5f00\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"Index 2 \u2192 3rd state  \u7d22\u5f15 2 \u2192 \u7b2c\u4e09\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"Index 3 \u2192 4th state  \u7d22\u5f15 3 \u2192 \u7b2c\u56db\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manage state with Switch, Option Switch, or Counter"),(0,r.kt)("li",{parentName:"ul"},"States are represented with integers, starting from 0"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5f00\u5173\u3001\u9009\u9879\u5f00\u5173\u6216\u8ba1\u6570\u5668\u6a21\u5757\u7ba1\u7406\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7528\u6574\u6570\u8868\u793a\uff0c\u4ece 0 \u5f00\u59cb")))}m.isMDXComponent=!0}}]);