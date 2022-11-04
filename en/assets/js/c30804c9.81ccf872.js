"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[84371],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(d,s(s({ref:e},p),{},{components:n})):a.createElement(d,s({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71210:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={title:"States & Pulses \u72b6\u6001 & \u8109\u51b2",sidebar_position:30,last_update:{author:"\u84af\u7f8e\u653f"}},s="States & Pulses \u72b6\u6001 & \u8109\u51b2",i={unversionedId:"documentation/Concepts/States & Pulses",id:"documentation/Concepts/States & Pulses",title:"States & Pulses \u72b6\u6001 & \u8109\u51b2",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Concepts/States & Pulses.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/States & Pulses",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/States & Pulses",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/States & Pulses.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:30,frontMatter:{title:"States & Pulses \u72b6\u6001 & \u8109\u51b2",sidebar_position:30,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Scripting Basics \u811a\u672c\u57fa\u7840",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Scripting Basics"},next:{title:"Variables \u53d8\u91cf",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Variables"}},l={},u=[{value:"States \u72b6\u6001",id:"states-\u72b6\u6001",level:2},{value:"Pulses \u8109\u51b2",id:"pulses-\u8109\u51b2",level:2},{value:"Examples of State &amp; Pulses \u72b6\u6001&amp;\u8109\u51b2\u793a\u4f8b",id:"examples-of-state--pulses-\u72b6\u6001\u8109\u51b2\u793a\u4f8b",level:2},{value:"Creating Pulses from State \u7ed9\u72b6\u6001\u521b\u5efa\u8109\u51b2",id:"creating-pulses-from-state-\u7ed9\u72b6\u6001\u521b\u5efa\u8109\u51b2",level:2},{value:"Temporary State with the Delay patch \u5ef6\u8fdf\u6a21\u5757\u548c\u4e34\u65f6\u72b6\u6001",id:"temporary-state-with-the-delay-patch-\u5ef6\u8fdf\u6a21\u5757\u548c\u4e34\u65f6\u72b6\u6001",level:2}],p={toc:u};function c(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"states--pulses-\u72b6\u6001--\u8109\u51b2"},"States & Pulses \u72b6\u6001 & \u8109\u51b2"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/States"},"States"),"help remember information in your prototype. Pulses are used to tell patches to perform an action. Understanding how these work together will help you be more effective at building Origami prototypes."),(0,o.kt)("p",null,"\u72b6\u6001\u5e2e\u52a9\u8bb0\u4f4f\u539f\u578b\u4e2d\u4fe1\u606f\u3002\u8109\u51b2\u7528\u6765\u544a\u8bc9\u6a21\u5757\u53cd\u9988\u54ea\u4e2a\u52a8\u4f5c\u3002\u4e86\u89e3\u8fd9\u4e9b\u5de5\u4f5c\u65b9\u5f0f\u6709\u52a9\u4e8e\u66f4\u6709\u6548\u5730\u5236\u4f5c\u539f\u578b\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a\u6211\u4eec\u5e38\u89c1\u7684\u7535\u8def\u56fe\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6253\u5f00\u5f00\u5173 \u2192 \u7535\u6d41\u901a\u8fc7 \u2192 \u70b9\u4eae\u706f\u6ce1\uff1a")),(0,o.kt)("p",null,"\u6253\u5f00 = \u4ea4\u4e92\u548c\u64cd\u4f5c\u6a21\u5757\uff1b"),(0,o.kt)("p",null,"\u5f00\u5173 = \u4ea4\u4e92\u5bf9\u8c61\u6a21\u5757\uff1b"),(0,o.kt)("p",null,"\u7535\u6d41\u901a\u8fc7 = \u53d1\u9001\u8109\u51b2\uff1b"),(0,o.kt)("p",null,"\u70b9\u4eae\u706f\u6ce1 = \u5207\u6362\u4e3a\u5b9a\u4e49\u7684\u72b6\u6001\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"states-\u72b6\u6001"},"States \u72b6\u6001"),(0,o.kt)("p",null,"A state is a value that persists over time. The simplest version of state is in the Switch patch. Switches are either on or off, and they remain that way until you tell them otherwise."),(0,o.kt)("p",null,"\u72b6\u6001\u662f\u4e00\u4e2a\u503c\u6301\u7eed\u7684\u65f6\u95f4\u3002"),(0,o.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6700\u7b80\u5355\u7684\u5b9e\u73b0\u72b6\u6001\u5207\u6362\u7684\u6a21\u5757\u662f Switch \u5f00\u5173\u6a21\u5757\u3002\u5728\u6ca1\u6709\u6253\u5f00\u6216\u5173\u95ed\u524d\uff0c\u72b6\u6001\u662f\u4fdd\u6301\u4e0d\u53d8\u7684\u3002"),(0,o.kt)("p",null,"If we look at a state as it changes over time, it might look something like this:"),(0,o.kt)("p",null,"\u5047\u8bbe\u5f00\u5173\u672c\u6765\u662f\u5173\u95ed\u72b6\u6001\uff0c\u6211\u4eec\u5728 Frame 5 \u90a3\u91cc\u70b9\u4e86\u4e0b\u5f00\u5173\uff0c\u90a3\u72b6\u6001\u53ef\u89c6\u5316\u4e4b\u540e\u770b\u8d77\u6765\u4f1a\u662f\u4e0b\u9762\u56fe\u4e2d\u90a3\u6837\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/docs/PulseSignal-states.png",alt:null})),(0,o.kt)("p",null,"A switch is off until you turn it on. You can see the state goes from off to on immediately in a single frame. A frame is usually 1/60th of a second."),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u72b6\u6001 Frame 1 \uff5e 4 \u662f\u5173\u95ed\u7684\uff0cFrame 5 \u4e4b\u540e\u5f00\u542f\u4e86\u3002\u4e00\u5e27\u901a\u5e38\u662f 1/60 \u79d2\u3002"),(0,o.kt)("h2",{id:"pulses-\u8109\u51b2"},"Pulses \u8109\u51b2"),(0,o.kt)("p",null,"While state persists over time, pulses are On \u2713 only for a single frame. The value of the cable sending the pulse is otherwise off."),(0,o.kt)("p",null,"\u72b6\u6001\u662f\u4e00\u4e2a\u6301\u7eed\u65f6\u95f4\uff0c\u8109\u51b2\u5c31\u4e0d\u662f\uff0c\u8109\u51b2\u53ea\u6301\u7eed\u4e00\u5e27\uff0c\u628a\u4fe1\u606f\u53d1\u9001\u5230\u4e86\u5c31\u6ca1\u4e86\u3002 \u5426\u5219\uff0c\u8fd9\u6761\u7ebf\u8def\u5c31\u4f1a\u88ab\u5360\u7528\uff0c\u4e0d\u80fd\u5728\u53d1\u9001\u5176\u4ed6\u7684\u8109\u51b2\u3002"),(0,o.kt)("p",null,"A pulse over time looks like this:"),(0,o.kt)("p",null,"\u8109\u51b2\u7684\u53ef\u89c6\u5316\u4e4b\u540e\u5927\u6982\u5c31\u662f\u4e0b\u9762\u8fd9\u6837\u7684\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://origami.design/public/images/docs/PulseSignal-pulses.png",alt:null})),(0,o.kt)("p",null,"You can see that pulses are only On \u2713 for a single frame."),(0,o.kt)("p",null,"They\u2019re used to tell patches to ### perform an action### , like telling a Switch to turn on or turn off. They\u2019re also useful for passing along user interactions like tapping on the screen or pressing a key on the keyboard."),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728\u56fe\u4e0a\u770b\u5230\u8109\u51b2\u53ea\u5728 Frame 5 \u4e0a\u663e\u793a\u4e86\u4e00\u4e0b\u3002\u7528\u4e8e\u544a\u8bc9\u6a21\u5757\u8d76\u7d27\u7684\u5207\u6362\u72b6\u6001\uff0c\u6253\u5f00\u6216\u5173\u95ed\u5f00\u5173\u3002"),(0,o.kt)("p",null,"\u8109\u51b2\u8fd8\u53ef\u7528\u4e8e\u4f20\u9012\u7528\u6237\u4ea4\u4e92\uff0c\u4f8b\u5982\u5728\u5c4f\u5e55\u4e0a\u70b9\u51fb\u6216\u6309\u4e86\u952e\u76d8\u4e0a\u7684\u6309\u952e\u3002"),(0,o.kt)("h2",{id:"examples-of-state--pulses-\u72b6\u6001\u8109\u51b2\u793a\u4f8b"},"Examples of State & Pulses \u72b6\u6001&\u8109\u51b2\u793a\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/OrigamiStudio/en/docs/documentation/Utility/Switch"},"Switch")," patch outputs the state of the ",(0,o.kt)("strong",{parentName:"li"},"switch")," (on / off) and accepts ",(0,o.kt)("strong",{parentName:"li"},"pulses")," to flip the switch, turn it on, or turn it off."),(0,o.kt)("li",{parentName:"ul"},"Switch \u6a21\u5757\u63a5\u6536\u4e00\u4e2a\u4ea4\u4e92\u6a21\u5757\u53d1\u51fa\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u8109\u51b2")," \uff0c\u6839\u636e\u6307\u4ee4\u8f93\u51fa\u5f00\u5173\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u72b6\u6001")," \u5c06\u5176\u6253\u5f00\u6216\u5173\u95ed\u3002"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction")," patch has Down and Tap outputs. Down represents the ",(0,o.kt)("strong",{parentName:"li"},"state")," of whether the finger is currently down on the screen. The Tap port outputs a ",(0,o.kt)("strong",{parentName:"li"},"pulse")," when the finger is released from the screen."),(0,o.kt)("li",{parentName:"ul"},"Interaction \u6a21\u5757\u6709 Down \u548c Tap \u8f93\u51fa\u53e3\u3002",(0,o.kt)("strong",{parentName:"li"},"Down")," \u8868\u793a\u624b\u6307\u5728\u5c4f\u5e55\u4e0a\u6309\u4e0b\u65f6\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u72b6\u6001")," \uff0c\u6309\u4e0b\u65f6\u8f93\u51fa\u8109\u51b2\u3002Tap \u8868\u793a\u624b\u6307\u5728\u5c4f\u5e55\u4e0a\u6309\u4e0b - \u677e\u5f00\u65f6\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u72b6\u6001")," \uff0c\u677e\u5f00\u8f93\u51fa\u8109\u51b2\u3002"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/OrigamiStudio/en/docs/documentation/Utility/Counter"},"Counter")," patch outputs the ",(0,o.kt)("strong",{parentName:"li"},"state")," of the counter (the number value) and accepts ",(0,o.kt)("strong",{parentName:"li"},"pulses")," to increase it or decrease it."),(0,o.kt)("li",{parentName:"ul"},"Counter \u6a21\u5757\u8f93\u51fa\u8ba1\u6570\u5668\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u72b6\u6001")," (\u6570\u503c)\u5e76\u63a5\u53d7\u6765\u81ea\u5176\u4ed6\u6a21\u5757\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u8109\u51b2")," \u589e\u52a0\u6216\u51cf\u5c11\u6570\u503c\u3002")),(0,o.kt)("h2",{id:"creating-pulses-from-state-\u7ed9\u72b6\u6001\u521b\u5efa\u8109\u51b2"},"Creating Pulses from State \u7ed9\u72b6\u6001\u521b\u5efa\u8109\u51b2"),(0,o.kt)("p",null,"There are a couple ways to create a pulse from state. The more explicit way is to use the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Pulse"},"Pulse")," patch. The Pulse patch accepts a state called On/Off and will output a pulse on the Turned On port when the state turns on and the Turned Off port when the state turns off. This is an example that flips a switch the moment the user touches the screen."),(0,o.kt)("p",null,"\u6709\u51e0\u79cd\u65b9\u6cd5\u4ece\u72b6\u6001\u521b\u5efa\u8109\u51b2\u3002 \u6bd4\u8f83\u51c6\u786e\u7684\u65b9\u6cd5\u662f\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Pulse"},"Pulse"),"\u6a21\u5757\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Pulse"},"Pulse"),"\u6a21\u5757\u63a5\u53d7\u4e00\u4e2a\u79f0\u4e3a On / Off \u7684\u72b6\u6001\uff0c\u5e76\u5728\u72b6\u6001\u6253\u5f00\u65f6\u5728 Turned On \u7aef\u53e3\u8f93\u51fa\u8109\u51b2\uff0c\u5f53\u72b6\u6001\u5173\u95ed\u65f6\uff0c\u5c06\u8f93\u51fa Turned Off \u7aef\u53e3\u7684\u8109\u51b2\u3002 \u8fd9\u662f\u5728\u7528\u6237\u89e6\u6478\u5c4f\u5e55\u7684\u77ac\u95f4\u5207\u6362\u5f00\u5173\u7684\u793a\u4f8b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(60846).Z,width:"1496",height:"292"})),(0,o.kt)("p",null,"Another way is to infer a state change is to connect a state directly to a port accepting a pulse. What\u2019ll happen is the port that accepts a pulse will look to when the state changes from off to on, and at that moment infer a pulse. So if you wanted a switch to flip when the user\u2019s finger touches down on the screen, you can connect the Down port directly to the Switch\u2019s Flip port, without needing to use a Pulse patch."),(0,o.kt)("p",null,"\u53e6\u4e00\u79cd\u5224\u65ad\u72b6\u6001\u53d8\u5316\u7684\u65b9\u6cd5\u662f\u5c06\u72b6\u6001\u76f4\u63a5\u8fde\u63a5\u5230\u63a5\u6536\u8109\u51b2\u7684\u7aef\u53e3\u3002"),(0,o.kt)("p",null,"\u63a5\u6536\u8109\u51b2\u7684\u7aef\u53e3\u5c06\u89c2\u5bdf\u72b6\u6001\u4f55\u65f6\u7531\u5173\u53d8\u4e3a\u5f00\uff0c\u5e76\u5728\u90a3\u4e00\u523b\u63a8\u65ad\u51fa\u8109\u51b2\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u60f3\u8ba9\u5f00\u5173\u5728\u7528\u6237\u624b\u6307\u89e6\u78b0\u5c4f\u5e55\u65f6\u7ffb\u8f6c\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 down \u7aef\u53e3\u8fde\u63a5\u5230 switch \u7684 flip \u7aef\u53e3\uff0c\u800c\u4e0d\u9700\u8981\u4f7f\u7528 Pulse \u6a21\u5757\u3002"),(0,o.kt)("h2",{id:"temporary-state-with-the-delay-patch-\u5ef6\u8fdf\u6a21\u5757\u548c\u4e34\u65f6\u72b6\u6001"},"Temporary State with the Delay patch \u5ef6\u8fdf\u6a21\u5757\u548c\u4e34\u65f6\u72b6\u6001"),(0,o.kt)("p",null,"Sometimes you need a state to turn on for a few moments and then turn off. For example, say you were making a confirmation window appear for a couple seconds after the user pressed a button. You could do this using a Switch, but then you\u2019d need to build logic that turns the switch off after some time. A simpler way to do this is to use the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Delay"},"Delay")," D patch."),(0,o.kt)("p",null,"\u6709\u65f6\u4f60\u9700\u8981\u4e00\u4e2a\u72b6\u6001\u6253\u5f00\u4e00\u4f1a\u513f\uff0c\u7136\u540e\u81ea\u52a8\u5173\u95ed\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u5047\u8bbe\u4e00\u4e2a\u4ea4\u4e92\uff0c\u7528\u6237\u6309\u4e0b\u6309\u94ae\u540e\u51fa\u73b0\u786e\u8ba4\u7a97\u53e3\u51e0\u79d2\u949f\uff0c\u7136\u540e\u81ea\u52a8\u5173\u95ed\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 Switch \u6a21\u5757\u6765\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u4f46\u662f\u4f60\u9700\u8981\u5efa\u7acb \u201c\u5728\u4e00\u6bb5\u65f6\u95f4\u540e\u5173\u95ed\u5f00\u5173\u201d \u7684\u903b\u8f91\uff0c\u4e00\u4e2a\u66f4\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Delay"},"Delay")," \u6a21\u5757\u66ff\u6362 Switch\u3002"),(0,o.kt)("p",null,"The Delay patch can take state that\u2019s changing and delay the change by an amount of time you specify. You can also tell it whether to only delay increasing (off to on) or decreasing (on to off) changes. If you give a Delay patch a pulse as input, you can delay the change from on to off, extending the pulse for any amount of time you\u2019d like."),(0,o.kt)("p",null,"Delay \u6a21\u5757\u53ef\u4ee5\u91c7\u53d6\u6b63\u5728\u66f4\u6539\u7684\u72b6\u6001\uff0c\u5e76\u5c06\u66f4\u6539\u5ef6\u8fdf\u65f6\u95f4\u8bbe\u7f6e\u4e3a\u6307\u5b9a\u7684\u503c\u3002\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u7c7b\u578b\u662f\u6709\u64cd\u4f5c\u5c31\u6fc0\u6d3b\uff0c\u8fd8\u662f\u53ea\u5728\u5173\u95ed\u5230\u6253\u5f00\u6216\u6253\u5f00\u5230\u5173\u95ed\u65f6\u66f4\u6539\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(16599).Z,width:"1496",height:"294"})))}c.isMDXComponent=!0},60846:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/states-pulses-3-865648ed3ddff430ccb78f5b77e50c85.png"},16599:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/states-pulses-4-9644bec23efe7ba69e7f5ff4d990b7af.png"}}]);