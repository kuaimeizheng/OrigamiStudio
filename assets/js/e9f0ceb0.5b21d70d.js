"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6276],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},c="Hover \u60ac\u505c",u={unversionedId:"documention/Interaction/Hover",id:"documention/Interaction/Hover",title:"Hover \u60ac\u505c",description:"Capture hover events on individual layers. Note that layers must be enabled and have an opacity larger than 0 to receive hovers. Does not work on simulated or connected phones or tablets.",source:"@site/docs/documention/Interaction/Hover.md",sourceDirName:"documention/Interaction",slug:"/documention/Interaction/Hover",permalink:"/OrigamiStudio/docs/documention/Interaction/Hover",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documention/Interaction/Hover.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657382430,formattedLastUpdatedAt:"2022\u5e747\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Gesture \u624b\u52bf",permalink:"/OrigamiStudio/docs/documention/Interaction/Gesture"},next:{title:"Interaction \u4ea4\u4e92",permalink:"/OrigamiStudio/docs/documention/Interaction/"}},s={},d=[{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Hover \u60ac\u505c###",id:"hover-\u60ac\u505c-1",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hover-\u60ac\u505c"},"Hover \u60ac\u505c"),(0,i.kt)("p",null,"Capture hover events on individual layers. Note that layers must be enabled and have an opacity larger than 0 to receive hovers. Does not work on simulated or connected phones or tablets."),(0,i.kt)("p",null,"\u6355\u83b7\u56fe\u5c42\u4e0a\u7684\u60ac\u505c\u4e8b\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u56fe\u5c42\u5fc5\u987b\u542f\u7528\u5e76\u4e14\u4e0d\u540c\u660e\u5ea6\u5927\u4e8e 0 \u624d\u80fd\u63a5\u6536\u60ac\u505c\u4e8b\u4ef6\u3002\u4e0d\u9002\u7528\u4e8e\u6a21\u62df\u6216\u8fde\u63a5\u7684\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u3002"),(0,i.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,i.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u89e6\u6478 \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(41920).Z,width:"912",height:"154"})),(0,i.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,i.kt)("p",null,"A layer to check for hover interactions."),(0,i.kt)("p",null,"\u9700\u8981\u68c0\u67e5\u60ac\u505c\u4ea4\u4e92\u7684\u56fe\u5c42\u3002"),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when hover detection is on."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u68c0\u6d4b\u5230\u60ac\u505c\u4ea4\u4e92\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"hover-\u60ac\u505c-1"},"Hover \u60ac\u505c###"),(0,i.kt)("p",null,"A boolean that is true when the mouse is hovering over the layer."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u9f20\u6807\u60ac\u505c\u5728\u56fe\u5c42\u4e0a\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position of the cursor, relative to the center of the layer\u2019s parent group or device."),(0,i.kt)("p",null,"\u5149\u6807\u7684\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u7236\u7ec4\u6216\u8bbe\u5907\u7684\u4e2d\u5fc3\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Interaction/"},"Interaction \u4ea4\u4e92")))}m.isMDXComponent=!0},41920:function(e,t,n){t.Z=n.p+"assets/images/hover-e88cb775b1d21a76bf6e3ee576cd63f4.png"}}]);