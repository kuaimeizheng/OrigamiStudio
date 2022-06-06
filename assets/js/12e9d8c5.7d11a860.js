"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8722],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:2},s="Long Press \u957f\u6309",l={unversionedId:"Interaction/Long Press",id:"Interaction/Long Press",title:"Long Press \u957f\u6309",description:"Capture long presses. To be used with the Down port in the Interaction patch.",source:"@site/docs/Interaction/Long Press.md",sourceDirName:"Interaction",slug:"/Interaction/Long Press",permalink:"/OrigamiStudio/docs/Interaction/Long Press",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Interaction/Long Press.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Keyboard \u952e\u76d8",permalink:"/OrigamiStudio/docs/Interaction/Keyboard"},next:{title:"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8",permalink:"/OrigamiStudio/docs/Interaction/Momentum Scrolling"}},u={},p=[{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:3},{value:"Delay \u5ef6\u8fdf",id:"delay-\u5ef6\u8fdf",level:3},{value:"Long Press \u957f\u6309###",id:"long-press-\u957f\u6309-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"long-press-\u957f\u6309"},"Long Press \u957f\u6309"),(0,a.kt)("p",null,"Capture long presses. To be used with the Down port in the ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction")," patch."),(0,a.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,a.kt)("p",null,"\u6355\u6349\u957f\u6309\u3002Down\u63a5\u53e3\u9700\u8981\u8fde\u63a5",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction"),"\u6a21\u5757\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u53f3\u4e0a\u89d2\u7684Touch\u6309\u94ae\u5feb\u901f\u521b\u5efa\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(74087).Z,width:"1216",height:"248"})),(0,a.kt)("h3",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,a.kt)("p",null,"A boolean that comes from the Interaction patch\u2019s Down output."),(0,a.kt)("p",null,"Interaction\u6a21\u5757\u7684Down\u8f93\u51fa\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,a.kt)("h3",{id:"delay-\u5ef6\u8fdf"},"Delay \u5ef6\u8fdf"),(0,a.kt)("p",null,"The minimum time duration of the touch down to activate a long press. By default, the delay is 0.5s."),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6309\u4e0b\u6301\u7eed\u7684\u6700\u5c0f\u65f6\u957f\u6fc0\u6d3b Long Press \u6a21\u5757\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5ef6\u8fdf\u4e3a0.5s\u3002"),(0,a.kt)("h3",{id:"long-press-\u957f\u6309-1"},"Long Press \u957f\u6309###"),(0,a.kt)("p",null,"Turns on when the press passes the duration specified in Delay input"),(0,a.kt)("p",null,"\u6309\u4e0bDelay\u63a5\u53e3\u5b9a\u4e49\u7684\u6700\u5c0f\u65f6\u957f\u65f6\u6253\u5f00\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction \u4ea4\u4e92")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Hover"},"Hover \u60ac\u505c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Double%20Tap"},"Double Tap \u53cc\u51fb")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Device/Touches"},"Touches \u89e6\u6478")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")))}m.isMDXComponent=!0},74087:function(e,t,n){t.Z=n.p+"assets/images/long-press-4d51ef26f870aedbd7506d10108b2854.png"}}]);