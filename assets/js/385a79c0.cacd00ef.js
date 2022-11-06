"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[15341],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>m});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(i),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return i?r.createElement(v,o(o({ref:t},s),{},{components:i})):r.createElement(v,o({ref:t},s))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},72844:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=i(87462),a=(i(67294),i(3905));const n={title:"\u5e38\u7528\u6a21\u5757",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},o="\u5e38\u7528\u6a21\u5757",l={unversionedId:"tutorial/basic/commonly-used-patches",id:"tutorial/basic/commonly-used-patches",title:"\u5e38\u7528\u6a21\u5757",description:"\u6a21\u5757\u5e93\u4e2d\u6709\u5f88\u591a\u6a21\u5757\uff0c\u4f46 15-20 \u4e2a\u6838\u5fc3\u6a21\u5757\u5c06\u5c31\u53ef\u4ee5\u5b8c\u6210 80% \u7684\u8bbe\u8ba1\u5de5\u4f5c\u3002",source:"@site/docs/tutorial/basic/commonly-used-patches.md",sourceDirName:"tutorial/basic",slug:"/tutorial/basic/commonly-used-patches",permalink:"/OrigamiStudio/docs/tutorial/basic/commonly-used-patches",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/tutorial/basic/commonly-used-patches.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:10,frontMatter:{title:"\u5e38\u7528\u6a21\u5757",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"tutorialSidebar",previous:{title:"\u521d\u7ea7",permalink:"/OrigamiStudio/docs/category/\u521d\u7ea7"},next:{title:"\u9aa8\u67b6\u5c4f\u52a0\u8f7d\u52a8\u753b",permalink:"/OrigamiStudio/docs/tutorial/basic/skeleton/"}},c={},u=[{value:"\u4ea4\u4e92\u7c7b",id:"\u4ea4\u4e92\u7c7b",level:2},{value:"Interaction \u4ea4\u4e92",id:"interaction-\u4ea4\u4e92",level:4},{value:"Hover \u60ac\u505c",id:"hover-\u60ac\u505c",level:4},{value:"Scroll \u6eda\u52a8",id:"scroll-\u6eda\u52a8",level:4},{value:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",id:"scrollaway-\u6eda\u52a8\u8ddd\u79bb",level:4},{value:"\u52a8\u753b\u7c7b",id:"\u52a8\u753b\u7c7b",level:2},{value:"Classic Animation \u7ecf\u5178\u52a8\u753b",id:"classic-animation-\u7ecf\u5178\u52a8\u753b",level:4},{value:"Spring Animation \u5f39\u6027\u52a8\u753b",id:"spring-animation-\u5f39\u6027\u52a8\u753b",level:4},{value:"Cubic Bezier Animation \u8d1d\u585e\u5c14\u66f2\u7ebf\u52a8\u753b",id:"cubic-bezier-animation-\u8d1d\u585e\u5c14\u66f2\u7ebf\u52a8\u753b",level:4},{value:"Pop Animation \u6d41\u884c\u52a8\u753b",id:"pop-animation-\u6d41\u884c\u52a8\u753b",level:4},{value:"\u903b\u8f91\u7c7b",id:"\u903b\u8f91\u7c7b",level:2},{value:"Equals \u7b49\u4e8e",id:"equals-\u7b49\u4e8e",level:4},{value:"Or \u6216",id:"or-\u6216",level:4},{value:"\u5faa\u73af\u7c7b",id:"\u5faa\u73af\u7c7b",level:2},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:4},{value:"Loop Builder \u5faa\u73af\u751f\u6210\u5668",id:"loop-builder-\u5faa\u73af\u751f\u6210\u5668",level:4},{value:"\u5de5\u5177\u7c7b",id:"\u5de5\u5177\u7c7b",level:2},{value:"Switch \u5f00\u5173",id:"switch-\u5f00\u5173",level:4},{value:"Transition \u8fc7\u5ea6",id:"transition-\u8fc7\u5ea6",level:4},{value:"Option Picker \u9009\u9879\u9009\u62e9\u5668",id:"option-picker-\u9009\u9879\u9009\u62e9\u5668",level:4},{value:"Pulse \u8109\u51b2",id:"pulse-\u8109\u51b2",level:4},{value:"Image Layer \u56fe\u50cf\u56fe\u5c42",id:"image-layer-\u56fe\u50cf\u56fe\u5c42",level:4}],s={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e38\u7528\u6a21\u5757"},"\u5e38\u7528\u6a21\u5757"),(0,a.kt)("p",null,"\u6a21\u5757\u5e93\u4e2d\u6709\u5f88\u591a\u6a21\u5757\uff0c\u4f46 15-20 \u4e2a\u6838\u5fc3\u6a21\u5757\u5c06\u5c31\u53ef\u4ee5\u5b8c\u6210 80% \u7684\u8bbe\u8ba1\u5de5\u4f5c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4ea4\u4e92\u7c7b"},"\u4ea4\u4e92\u7c7b"),(0,a.kt)("h4",{id:"interaction-\u4ea4\u4e92"},"Interaction \u4ea4\u4e92"),(0,a.kt)("h4",{id:"hover-\u60ac\u505c"},"Hover \u60ac\u505c"),(0,a.kt)("h4",{id:"scroll-\u6eda\u52a8"},"Scroll \u6eda\u52a8"),(0,a.kt)("h4",{id:"scrollaway-\u6eda\u52a8\u8ddd\u79bb"},"Scrollaway \u6eda\u52a8\u8ddd\u79bb"),(0,a.kt)("h2",{id:"\u52a8\u753b\u7c7b"},"\u52a8\u753b\u7c7b"),(0,a.kt)("h4",{id:"classic-animation-\u7ecf\u5178\u52a8\u753b"},"Classic Animation \u7ecf\u5178\u52a8\u753b"),(0,a.kt)("h4",{id:"spring-animation-\u5f39\u6027\u52a8\u753b"},"Spring Animation \u5f39\u6027\u52a8\u753b"),(0,a.kt)("h4",{id:"cubic-bezier-animation-\u8d1d\u585e\u5c14\u66f2\u7ebf\u52a8\u753b"},"Cubic Bezier Animation \u8d1d\u585e\u5c14\u66f2\u7ebf\u52a8\u753b"),(0,a.kt)("h4",{id:"pop-animation-\u6d41\u884c\u52a8\u753b"},"Pop Animation \u6d41\u884c\u52a8\u753b"),(0,a.kt)("h2",{id:"\u903b\u8f91\u7c7b"},"\u903b\u8f91\u7c7b"),(0,a.kt)("h4",{id:"equals-\u7b49\u4e8e"},"Equals \u7b49\u4e8e"),(0,a.kt)("h4",{id:"or-\u6216"},"Or \u6216"),(0,a.kt)("h2",{id:"\u5faa\u73af\u7c7b"},"\u5faa\u73af\u7c7b"),(0,a.kt)("h4",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,a.kt)("h4",{id:"loop-builder-\u5faa\u73af\u751f\u6210\u5668"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668"),(0,a.kt)("h2",{id:"\u5de5\u5177\u7c7b"},"\u5de5\u5177\u7c7b"),(0,a.kt)("h4",{id:"switch-\u5f00\u5173"},"Switch \u5f00\u5173"),(0,a.kt)("h4",{id:"transition-\u8fc7\u5ea6"},"Transition \u8fc7\u5ea6"),(0,a.kt)("h4",{id:"option-picker-\u9009\u9879\u9009\u62e9\u5668"},"Option Picker \u9009\u9879\u9009\u62e9\u5668"),(0,a.kt)("h4",{id:"pulse-\u8109\u51b2"},"Pulse \u8109\u51b2"),(0,a.kt)("h4",{id:"image-layer-\u56fe\u50cf\u56fe\u5c42"},"Image Layer \u56fe\u50cf\u56fe\u5c42"))}d.isMDXComponent=!0}}]);