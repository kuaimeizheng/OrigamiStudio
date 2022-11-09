"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[58781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Hover \u60ac\u505c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Hover \u60ac\u505c",l={unversionedId:"documentation/Interaction/Hover",id:"documentation/Interaction/Hover",title:"Hover \u60ac\u505c",description:"---",source:"@site/docs/documentation/Interaction/Hover.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Hover",permalink:"/OrigamiStudio/docs/documentation/Interaction/Hover",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Hover.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Hover \u60ac\u505c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Gesture \u624b\u52bf",permalink:"/OrigamiStudio/docs/documentation/Interaction/Gesture"},next:{title:"Interaction \u4ea4\u4e92",permalink:"/OrigamiStudio/docs/documentation/Interaction/"}},c={},u=[{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Hover \u60ac\u505c###",id:"hover-\u60ac\u505c-1",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hover-\u60ac\u505c"},"Hover \u60ac\u505c"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Capture hover events on individual layers. Note that layers must be enabled and have an opacity larger than 0 to receive hovers. Does not work on simulated or connected phones or tablets."),(0,o.kt)("p",null,"\u6355\u83b7\u56fe\u5c42\u4e0a\u7684\u60ac\u505c\u4e8b\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u56fe\u5c42\u5fc5\u987b\u542f\u7528\u5e76\u4e14\u4e0d\u540c\u660e\u5ea6\u5927\u4e8e 0 \u624d\u80fd\u63a5\u6536\u60ac\u505c\u4e8b\u4ef6\u3002\u4e0d\u9002\u7528\u4e8e\u6a21\u62df\u6216\u8fde\u63a5\u7684\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u3002"),(0,o.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,o.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u89e6\u6478 \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(41920).Z,width:"912",height:"154"})),(0,o.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,o.kt)("p",null,"A layer to check for hover interactions."),(0,o.kt)("p",null,"\u9700\u8981\u68c0\u67e5\u60ac\u505c\u4ea4\u4e92\u7684\u56fe\u5c42\u3002"),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when hover detection is on."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u68c0\u6d4b\u5230\u60ac\u505c\u4ea4\u4e92\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"hover-\u60ac\u505c-1"},"Hover \u60ac\u505c###"),(0,o.kt)("p",null,"A boolean that is true when the mouse is hovering over the layer."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u9f20\u6807\u60ac\u505c\u5728\u56fe\u5c42\u4e0a\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"The position of the cursor, relative to the center of the layer\u2019s parent group or device."),(0,o.kt)("p",null,"\u5149\u6807\u7684\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u7236\u7ec4\u6216\u8bbe\u5907\u7684\u4e2d\u5fc3\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")))}d.isMDXComponent=!0},41920:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hover-e88cb775b1d21a76bf6e3ee576cd63f4.png"}}]);