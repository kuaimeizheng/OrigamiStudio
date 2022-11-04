"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[32232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Long Press \u957f\u6309",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Long Press \u957f\u6309",l={unversionedId:"documentation/Interaction/Long Press",id:"documentation/Interaction/Long Press",title:"Long Press \u957f\u6309",description:"---",source:"@site/docs/documentation/Interaction/Long Press.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Long Press",permalink:"/OrigamiStudio/docs/documentation/Interaction/Long Press",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Long Press.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Long Press \u957f\u6309",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Keyboard \u952e\u76d8",permalink:"/OrigamiStudio/docs/documentation/Interaction/Keyboard"},next:{title:"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8",permalink:"/OrigamiStudio/docs/documentation/Interaction/Momentum Scrolling"}},c={},s=[{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:3},{value:"Delay \u5ef6\u8fdf",id:"delay-\u5ef6\u8fdf",level:3},{value:"Long Press \u957f\u6309###",id:"long-press-\u957f\u6309-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"long-press-\u957f\u6309"},"Long Press \u957f\u6309"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Capture long presses. To be used with the Down port in the ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction")," patch."),(0,r.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,r.kt)("p",null,"\u6355\u6349\u957f\u6309\u3002Down \u63a5\u53e3\u9700\u8981\u8fde\u63a5",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction"),"\u6a21\u5757\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u53f3\u4e0a\u89d2\u7684 Touch \u6309\u94ae\u5feb\u901f\u521b\u5efa\u4ea4\u4e92\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Long Press"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Down",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Delay",(0,r.kt)("span",null,"0.5s"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Long Press",(0,r.kt)("span",{className:"checkbox-off"}))))),(0,r.kt)("h3",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,r.kt)("p",null,"A boolean that comes from the Interaction patch\u2019s Down output."),(0,r.kt)("p",null,"Interaction \u6a21\u5757\u7684 Down \u8f93\u51fa\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,r.kt)("h3",{id:"delay-\u5ef6\u8fdf"},"Delay \u5ef6\u8fdf"),(0,r.kt)("p",null,"The minimum time duration of the touch down to activate a long press. By default, the delay is 0.5s."),(0,r.kt)("p",null,"\u8bbe\u7f6e\u6309\u4e0b\u6301\u7eed\u7684\u6700\u5c0f\u65f6\u957f\u6fc0\u6d3b Long Press \u6a21\u5757\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5ef6\u8fdf\u4e3a 0.5s\u3002"),(0,r.kt)("h3",{id:"long-press-\u957f\u6309-1"},"Long Press \u957f\u6309###"),(0,r.kt)("p",null,"Turns on when the press passes the duration specified in Delay input"),(0,r.kt)("p",null,"\u6309\u4e0b Delay \u63a5\u53e3\u5b9a\u4e49\u7684\u6700\u5c0f\u65f6\u957f\u65f6\u6253\u5f00\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Hover"},"Hover \u60ac\u505c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Double%20Tap"},"Double Tap \u53cc\u51fb")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Touches"},"Touches \u89e6\u6478")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")))}p.isMDXComponent=!0}}]);