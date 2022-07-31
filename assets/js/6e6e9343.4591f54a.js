"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7197],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98368:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={sidebar_position:2},l="Mouse \u9f20\u6807",u={unversionedId:"documentation/Interaction/Mouse",id:"documentation/Interaction/Mouse",title:"Mouse \u9f20\u6807",description:"Capture mouse events and position.",source:"@site/docs/documentation/Interaction/Mouse.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Mouse",permalink:"/OrigamiStudio/docs/documentation/Interaction/Mouse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Mouse.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8",permalink:"/OrigamiStudio/docs/documentation/Interaction/Momentum Scrolling"},next:{title:"Peek Pop \u8f7b\u538b\u91cd\u538b",permalink:"/OrigamiStudio/docs/documentation/Interaction/Peek Pop"}},d={},s=[{value:"Left \u5de6\u952e",id:"left-\u5de6\u952e",level:3},{value:"Right \u53f3\u952e",id:"right-\u53f3\u952e",level:3},{value:"Middle \u4e2d\u952e",id:"middle-\u4e2d\u952e",level:3},{value:"Location \u4f4d\u7f6e",id:"location-\u4f4d\u7f6e",level:3},{value:"Scroll Velocity \u6ed1\u52a8\u901f\u5ea6",id:"scroll-velocity-\u6ed1\u52a8\u901f\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:s};function m(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mouse-\u9f20\u6807"},"Mouse \u9f20\u6807"),(0,i.kt)("p",null,"Capture mouse events and position."),(0,i.kt)("p",null,"\u6355\u83b7\u9f20\u6807\u4e8b\u4ef6\u548c\u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction")," instead if you want clicks on a specific layer."),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u70b9\u51fb\u6307\u5b9a\u56fe\u5c42\uff0c\u8bf7\u6539\u7528\u201c\u4ea4\u4e92\u201d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(53238).Z,width:"2000",height:"363"})),(0,i.kt)("h3",{id:"left-\u5de6\u952e"},"Left \u5de6\u952e"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9f20\u6807\u5de6\u952e\u88ab\u6309\u4e0b\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"right-\u53f3\u952e"},"Right \u53f3\u952e"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9f20\u6807\u53f3\u952e\u88ab\u6309\u4e0b\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"middle-\u4e2d\u952e"},"Middle \u4e2d\u952e"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9f20\u6807\u5de6\u952e\u88ab\u6309\u4e0b\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"location-\u4f4d\u7f6e"},"Location \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position of the mouse or touch, relative to the center of the viewer."),(0,i.kt)("p",null,"\u9f20\u6807\u6216\u89e6\u6478\u7684\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u67e5\u770b\u5668\u7684\u4e2d\u5fc3\u3002"),(0,i.kt)("h3",{id:"scroll-velocity-\u6ed1\u52a8\u901f\u5ea6"},"Scroll Velocity \u6ed1\u52a8\u901f\u5ea6"),(0,i.kt)("p",null,"\u9f20\u6807\u6216\u89e6\u63a7\u677f\u7684\u6ed1\u52a8\u901f\u5ea6\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Hover"},"Hover \u60ac\u505c")))}m.isMDXComponent=!0},53238:function(e,t,n){t.Z=n.p+"assets/images/mouse-e8b980e947ef179e053d8b2f3e08604a.png"}}]);