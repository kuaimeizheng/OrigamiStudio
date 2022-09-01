"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[66021],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65238:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:2},o="Text Starts With \u6587\u672c\u5f00\u59cb",l={unversionedId:"documentation/Text/Text Starts With",id:"documentation/Text/Text Starts With",title:"Text Starts With \u6587\u672c\u5f00\u59cb",description:"Determine if some text starts with the given prefix.",source:"@site/docs/documentation/Text/Text Starts With.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Starts With",permalink:"/OrigamiStudio/docs/documentation/Text/Text Starts With",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Starts With.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1662015759,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Text Size \u6587\u672c\u5927\u5c0f",permalink:"/OrigamiStudio/docs/documentation/Text/Text Size"},next:{title:"Text Style Builder \u6587\u672c\u6837\u5f0f\u751f\u6210\u5668",permalink:"/OrigamiStudio/docs/documentation/Text/Text Style Builder"}},u={},s=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Prefix \u524d\u7f00",id:"prefix-\u524d\u7f00",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:s};function d(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text-starts-with-\u6587\u672c\u5f00\u59cb"},"Text Starts With \u6587\u672c\u5f00\u59cb"),(0,i.kt)("p",null,"Determine if some text starts with the given prefix."),(0,i.kt)("p",null,"\u5224\u65ad\u67d0\u4e9b\u6587\u672c\u5b57\u7b26\u4e32\u662f\u5426\u4ee5\u7279\u5b9a\u7684\u524d\u7f00\u5f00\u5934\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(23489).Z,width:"898",height:"156"})),(0,i.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,i.kt)("p",null,"A text string to evaluate."),(0,i.kt)("p",null,"\u8981\u5224\u65ad\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"prefix-\u524d\u7f00"},"Prefix \u524d\u7f00"),(0,i.kt)("p",null,"A text string that might appear at the start of the given text."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u5728\u7279\u5b9a\u6587\u672c\u7684\u5f00\u5934\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"A boolean that is true if the text starts with the prefix."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u6587\u672c\u4ee5\u524d\u7f00\u5f00\u5934\uff0c\u5219\u4e3a \u771f \u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Ends%20With"},"Text Ends With \u6587\u672c\u7ed3\u5c3e")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Length"},"Text Length \u6587\u672c\u957f\u77ed")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Size"},"Text Size \u6587\u672c\u5927\u5c0f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Trim%20Text"},"Trim Text \u4fee\u526a\u6587\u672c")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}d.isMDXComponent=!0},23489:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/text-starts-with-fd1328fbdb67002d4dac86c066835017.png"}}]);