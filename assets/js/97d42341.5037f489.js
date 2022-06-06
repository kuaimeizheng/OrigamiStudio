"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8543],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),k=o,f=d["".concat(l,".").concat(k)]||d[k]||s[k]||p;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36670:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),i=["components"],a={sidebar_position:2},l="Peek Pop \u8f7b\u538b\u91cd\u538b",c={unversionedId:"Interaction/Peek Pop",id:"Interaction/Peek Pop",title:"Peek Pop \u8f7b\u538b\u91cd\u538b",description:"Allows you to build prototypes using Apple\u2019s Peek/Pop 3D Touch feature from iOS 9. This patch takes in a touch force and exposes peek progress, pop progress and whether or not the current content should be peeking or popped.",source:"@site/docs/Interaction/Peek Pop.md",sourceDirName:"Interaction",slug:"/Interaction/Peek Pop",permalink:"/OrigamiStudio/docs/Interaction/Peek Pop",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Interaction/Peek Pop.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mouse \u9f20\u6807",permalink:"/OrigamiStudio/docs/Interaction/Mouse"},next:{title:"Pop Switch \u6d41\u884c\u5f00\u5173",permalink:"/OrigamiStudio/docs/Interaction/Pop Switch"}},u={},s=[{value:"Enable Pop \u542f\u7528\u8f7b\u538b",id:"enable-pop-\u542f\u7528\u8f7b\u538b",level:3},{value:"Force \u538b\u529b",id:"force-\u538b\u529b",level:3},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:3},{value:"Peek Force \u8f7b\u538b\u529b\u5ea6",id:"peek-force-\u8f7b\u538b\u529b\u5ea6",level:3},{value:"Pop Force \u91cd\u538b\u529b\u5ea6",id:"pop-force-\u91cd\u538b\u529b\u5ea6",level:3},{value:"Peek Progress \u8f7b\u538b\u8fdb\u5ea6",id:"peek-progress-\u8f7b\u538b\u8fdb\u5ea6",level:3},{value:"Popped Progress \u91cd\u538b\u8fdb\u5ea6",id:"popped-progress-\u91cd\u538b\u8fdb\u5ea6",level:3},{value:"Peeking \u662f\u5426\u8f7b\u538b",id:"peeking-\u662f\u5426\u8f7b\u538b",level:3},{value:"Popped \u662f\u5426\u91cd\u538b",id:"popped-\u662f\u5426\u91cd\u538b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"### Sample  \u793a\u4f8b",id:"-sample--\u793a\u4f8b",level:3}],d={toc:s};function k(e){var t=e.components,a=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"peek-pop-\u8f7b\u538b\u91cd\u538b"},"Peek Pop \u8f7b\u538b\u91cd\u538b"),(0,p.kt)("p",null,"Allows you to build prototypes using Apple\u2019s Peek/Pop 3D Touch feature from iOS 9. This patch takes in a touch force and exposes peek progress, pop progress and whether or not the current content should be peeking or popped."),(0,p.kt)("p",null,"\u5141\u8bb8\u4f60\u4f7f\u7528 iOS 9\u7684\u82f9\u679c Peek/Pop 3D Touch \u529f\u80fd\u6765\u6784\u5efa\u539f\u578b\u3002\u8fd9\u4e2a\u6a21\u5757\u5728\u89e6\u6478\u529b\u5ea6\u548c\u8f7b\u538b\u529b\u5ea6\uff0c\u91cd\u538b\u529b\u5ea6\u4ee5\u53ca\u662f\u5426\u5141\u8bb8\u5f53\u524d\u7684\u5185\u5bb9\u53ef\u4ee5\u88ab\u8f7b\u538b\u6216\u91cd\u538b\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Image",src:r(96632).Z,width:"1288",height:"296"})),(0,p.kt)("h3",{id:"enable-pop-\u542f\u7528\u8f7b\u538b"},"Enable Pop \u542f\u7528\u8f7b\u538b"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u63a5\u6536\u5230\u4ea4\u4e92\u6a21\u5757\u542f\u7528\u65f6\u4e3a\u771f\u3002"),(0,p.kt)("h3",{id:"force-\u538b\u529b"},"Force \u538b\u529b"),(0,p.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u63a5\u6536\u5230\u7684\u89e6\u6478\u7684\u538b\u529b\u503c\u3002"),(0,p.kt)("h3",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u91cd\u7f6e\u4ea4\u4e92\u3002"),(0,p.kt)("h3",{id:"peek-force-\u8f7b\u538b\u529b\u5ea6"},"Peek Force \u8f7b\u538b\u529b\u5ea6"),(0,p.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8fbe\u5230\u8f7b\u538b\u6240\u9700\u7684\u529b\u5ea6\u3002"),(0,p.kt)("h3",{id:"pop-force-\u91cd\u538b\u529b\u5ea6"},"Pop Force \u91cd\u538b\u529b\u5ea6"),(0,p.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8fbe\u5230\u91cd\u538b\u6240\u9700\u7684\u529b\u5ea6\u3002"),(0,p.kt)("h3",{id:"peek-progress-\u8f7b\u538b\u8fdb\u5ea6"},"Peek Progress \u8f7b\u538b\u8fdb\u5ea6"),(0,p.kt)("p",null,"\u4e00\u4e2a\u4ece0\u52301\u7684\u6570\u5b57\u52a8\u753b\uff0c\u8868\u793a\u5f53\u524d\u8f7b\u538b\u7684\u529b\u5ea6\u3002"),(0,p.kt)("h3",{id:"popped-progress-\u91cd\u538b\u8fdb\u5ea6"},"Popped Progress \u91cd\u538b\u8fdb\u5ea6"),(0,p.kt)("p",null,"\u4e00\u4e2a\u4ece0\u52301\u7684\u6570\u5b57\u52a8\u753b\uff0c\u8868\u793a\u5f53\u524d\u91cd\u538b\u7684\u529b\u5ea6\u3002"),(0,p.kt)("h3",{id:"peeking-\u662f\u5426\u8f7b\u538b"},"Peeking \u662f\u5426\u8f7b\u538b"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u662f\u5426\u88ab\u8f7b\u538b\u3002"),(0,p.kt)("h3",{id:"popped-\u662f\u5426\u91cd\u538b"},"Popped \u662f\u5426\u91cd\u538b"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u662f\u5426\u88ab\u91cd\u538b\u3002"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction \u4ea4\u4e92")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"-sample--\u793a\u4f8b"},"### Sample  \u793a\u4f8b"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Image",src:r(29127).Z,width:"1366",height:"354"})),(0,p.kt)("p",null,"\u5982\u56fe\uff1a"),(0,p.kt)("p",null,"\u5f53\u68c0\u6d4b\u5230\u6309\u4e0b\u65f6\uff0c Enable Pop \u8f93\u5165\u7aef\u53e3\u4e3a\u771f\uff0cForce \u8f93\u5165\u7aef\u53e3\u663e\u793a\u5f53\u524d\u538b\u529b\u503c\u7684\u6570\u5b57\uff0c\u5f53\u538b\u529b\u503c\u4ece 0 \u5230 3 \u65f6\uff0cPeek Progress \u8f93\u51fa\u7aef\u53e3\u505a\u4ece 0 \u5230 1 \u7684\u52a8\u753b\uff0c\u5e76\u8f93\u51fa\u4e3a 1\uff0c\u5f53\u524d\u538b\u529b\u503c\u4ece 3 \u5230 6.65 \u65f6\uff0cPopped Progress \u8f93\u51fa\u7aef\u53e3\u4ece 0 \u5230 1 \u7684\u52a8\u753b\uff0c\u5e76\u8f93\u51fa\u4e3a 1\uff0c\u5f53\u538b\u529b\u503c\u8fbe\u5230 3 \u548c 6.65 \u65f6\uff0cPeeking \u548cPopped \u7aef\u53e3\u8f93\u51fa\u4e3a\u771f\u3002"))}k.isMDXComponent=!0},29127:function(e,t,r){t.Z=r.p+"assets/images/peek-pop-example-47e24e9c6f828e5869a4ac211f4a800f.png"},96632:function(e,t,r){t.Z=r.p+"assets/images/peek-pop-df7772344016af8b74e604504041fdd0.png"}}]);