"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[96266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:5},a="Mouse \u9f20\u6807",l={unversionedId:"documentation/Interaction/Mouse",id:"documentation/Interaction/Mouse",title:"Mouse \u9f20\u6807",description:"Capture mouse events and position.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Interaction/Mouse.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Mouse",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Mouse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Mouse.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Momentum Scrolling"},next:{title:"Peek Pop \u8f7b\u538b\u91cd\u538b",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Peek Pop"}},c={},u=[{value:"Left \u5de6\u952e",id:"left-\u5de6\u952e",level:3},{value:"Right \u53f3\u952e",id:"right-\u53f3\u952e",level:3},{value:"Middle \u4e2d\u952e",id:"middle-\u4e2d\u952e",level:3},{value:"Location \u4f4d\u7f6e",id:"location-\u4f4d\u7f6e",level:3},{value:"Scroll Velocity \u6ed1\u52a8\u901f\u5ea6",id:"scroll-velocity-\u6ed1\u52a8\u901f\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mouse-\u9f20\u6807"},"Mouse \u9f20\u6807"),(0,r.kt)("p",null,"Capture mouse events and position."),(0,r.kt)("p",null,"\u6355\u83b7\u9f20\u6807\u4e8b\u4ef6\u548c\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction")," instead if you want clicks on a specific layer."),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u70b9\u51fb\u6307\u5b9a\u56fe\u5c42\uff0c\u8bf7\u6539\u7528\u201c\u4ea4\u4e92\u201d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(53238).Z,width:"2000",height:"363"})),(0,r.kt)("h3",{id:"left-\u5de6\u952e"},"Left \u5de6\u952e"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9f20\u6807\u5de6\u952e\u88ab\u6309\u4e0b\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"right-\u53f3\u952e"},"Right \u53f3\u952e"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9f20\u6807\u53f3\u952e\u88ab\u6309\u4e0b\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"middle-\u4e2d\u952e"},"Middle \u4e2d\u952e"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9f20\u6807\u5de6\u952e\u88ab\u6309\u4e0b\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"location-\u4f4d\u7f6e"},"Location \u4f4d\u7f6e"),(0,r.kt)("p",null,"The position of the mouse or touch, relative to the center of the viewer."),(0,r.kt)("p",null,"\u9f20\u6807\u6216\u89e6\u6478\u7684\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u67e5\u770b\u5668\u7684\u4e2d\u5fc3\u3002"),(0,r.kt)("h3",{id:"scroll-velocity-\u6ed1\u52a8\u901f\u5ea6"},"Scroll Velocity \u6ed1\u52a8\u901f\u5ea6"),(0,r.kt)("p",null,"\u9f20\u6807\u6216\u89e6\u63a7\u677f\u7684\u6ed1\u52a8\u901f\u5ea6\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Hover"},"Hover \u60ac\u505c")))}s.isMDXComponent=!0},53238:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mouse-e8b980e947ef179e053d8b2f3e08604a.png"}}]);