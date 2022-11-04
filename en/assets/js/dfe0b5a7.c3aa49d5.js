"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[51412],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=i.createContext({}),s=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return i.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=s(n),f=o,d=h["".concat(c,".").concat(f)]||h[f]||p[f]||r;return n?i.createElement(d,a(a({ref:e},u),{},{components:n})):i.createElement(d,a({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30362:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={title:"Switch \u5f00\u5173",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Switch \u5f00\u5173",l={unversionedId:"documentation/Utility/Switch",id:"documentation/Utility/Switch",title:"Switch \u5f00\u5173",description:"Remember state (on or off). Switch patches are like light switches. They can be off or on and are useful when building simple two-state interactions (showing and hiding comments in a popover, for example).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Switch.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Switch",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Switch.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{title:"Switch \u5f00\u5173",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Stopwatch \u79d2\u8868",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Stopwatch"},next:{title:"Time \u65f6\u95f4",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Time"}},c={},s=[{value:"Flip \u53cd\u8f6c",id:"flip-\u53cd\u8f6c",level:3},{value:"Turn On \u6253\u5f00",id:"turn-on-\u6253\u5f00",level:3},{value:"Turn Off \u5173\u95ed",id:"turn-off-\u5173\u95ed",level:3},{value:"On / Off \u8f93\u51fa",id:"on--off-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:s};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"switch-\u5f00\u5173"},"Switch \u5f00\u5173"),(0,o.kt)("p",null,"Remember state (on or off). Switch patches are like light switches. They can be off or on and are useful when building simple two-state interactions (showing and hiding comments in a popover, for example)."),(0,o.kt)("p",null,"\u8bb0\u4f4f On \u6216 Off \u4e24\u4e2a\u72b6\u6001\u3002Switch \u6a21\u5757\u8ddf\u706f\u7684\u5f00\u5173\u4e00\u6837\u3002\u5f00\u5173\u53ef\u4ee5\u88ab\u6253\u5f00\u6216\u5173\u95ed\uff0c\u7528\u4e8e\u9700\u8981\u5728\u4e24\u4e2a\u72b6\u6001\u4e4b\u95f4\u5207\u6362\uff08\u5982\uff0c\u9690\u85cf\u6216\u663e\u793a\u8bc4\u8bba\u3002\uff09"),(0,o.kt)("p",null,"The Switch patch\u2019s Flip port is useful when one interaction type is used to control the switch. For example, if repeatedly tapping a photo zooms it between a large and small size, the Switch patch can be used to hold the current zoom state (in or out). Simply connect the Switch patch\u2019s Flip input port to the Tap output of the photo\u2019s Interaction patch."),(0,o.kt)("p",null,"\u7528\u6765\u63a7\u5236 Switch \u6a21\u5757\u7684\u4ea4\u4e92\u6a21\u5757\u8fde\u63a5\u5230 Flip \u63a5\u53e3\u3002\u4f8b\u5982\u70b9\u51fb\u56fe\u7247\u653e\u5927\u6216\u7f29\u5c0f\uff0cSwitch \u6a21\u5757\u53ef\u4ee5\u4fdd\u6301\u7f29\u653e\u7684\u4e24\u4e2a\u72b6\u6001\uff08\u8fdb\u6216\u51fa\uff09\u3002\u5c06\u56fe\u7247\u56fe\u5c42\u7684 Interaction \u6a21\u5757\u7684 Tap \u8f93\u51fa\u53e3\u8fde\u63a5\u5230 Switch \u6a21\u5757\u7684 Flip \u8f93\u5165\u53e3\u5c31\u53ef\u4ee5\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"The Switch patch\u2019s On and Off ports are useful when different types of interactions control the switch. For example, in a compose window, a Compose button might turn on the switch and the Cancel and Done buttons might turn off the switch."),(0,o.kt)("p",null,"On \u548c Off \u63a5\u53e3\u7528\u4e8e\u4e0d\u540c\u7c7b\u578b\u7684\u4ea4\u4e92\u63a7\u5236\u540c\u4e00\u4e2a\u5f00\u5173\u3002\u4f8b\u5982\u5728\u4e00\u4e2a\u7f16\u8f91\u5f39\u7a97\u4e2d\uff0c\u53ef\u80fd\u7f16\u8f91\u6309\u94ae\u6253\u5f00\u5f00\u5173\uff0c\u53d6\u6d88\u548c\u786e\u5b9a\u6309\u94ae\u5173\u95ed\u5f00\u5173\u3002"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/States"},"State Basics")," for more information."),(0,o.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 State Basic\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(75856).Z,width:"1144",height:"266"})),(0,o.kt)("h3",{id:"flip-\u53cd\u8f6c"},"Flip \u53cd\u8f6c"),(0,o.kt)("p",null,"A pulse that flips the state of the switch (from on to off, or vice versa)."),(0,o.kt)("p",null,"\u7ffb\u8f6c\u5f00\u5173\u72b6\u6001\u7684\u8109\u51b2\uff08\u5f00\u3001\u5173\u4e4b\u95f4\u5faa\u73af\u5207\u6362\uff09\u3002\u4e00\u822c\u8fde\u63a5\u4ea4\u4e92\u6a21\u5757\u3002"),(0,o.kt)("h3",{id:"turn-on-\u6253\u5f00"},"Turn On \u6253\u5f00"),(0,o.kt)("p",null,"A pulse that turns the switch on. If the switch is already on, the pulse has no effect."),(0,o.kt)("p",null,"\u6253\u5f00\u5f00\u5173\u7684\u8109\u51b2\u3002\u5982\u679c\u5f00\u5173\u5df2\u7ecf\u662f\u6253\u5f00\u72b6\u6001\u5219\u65e0\u6548\u3002\u4e00\u822c\u8fde\u63a5\u4ea4\u4e92\u6a21\u5757\u3002"),(0,o.kt)("h3",{id:"turn-off-\u5173\u95ed"},"Turn Off \u5173\u95ed"),(0,o.kt)("p",null,"A pulse that turns the switch off. If the switch is already off, the pulse has no effect."),(0,o.kt)("p",null,"\u5173\u95ed\u5f00\u5173\u7684\u8109\u51b2\u3002\u5982\u679c\u5f00\u5173\u5df2\u7ecf\u662f\u5173\u95ed\u72b6\u6001\u5219\u65e0\u6548\u3002\u4e00\u822c\u8fde\u63a5\u4ea4\u4e92\u6a21\u5757\u3002"),(0,o.kt)("h3",{id:"on--off-\u8f93\u51fa"},"On / Off \u8f93\u51fa"),(0,o.kt)("p",null,"A boolean that is true if the switch is on."),(0,o.kt)("p",null,"\u5f00\u5173\u6253\u5f00\u65f6\u5e03\u5c14\u503c\u4e3a\u771f\u3002\u4e00\u822c\u8fde\u63a5\u5230\u52a8\u753b\u6a21\u5757\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"))}p.isMDXComponent=!0},75856:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/switch-c89289c48c6213b8ae4da0505a950daf.png"}}]);