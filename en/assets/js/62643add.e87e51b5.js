"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[13781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:5},i="Text Transform \u6587\u672c\u53d8\u6362",l={unversionedId:"documentation/Text/Text Transform",id:"documentation/Text/Text Transform",title:"Text Transform \u6587\u672c\u53d8\u6362",description:"Transform the case and capitalization of a text string.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Text/Text Transform.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Transform",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Transform",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Transform.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Text Style \u6587\u672c\u6837\u5f0f",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Style"},next:{title:"Trim Text \u4fee\u526a\u6587\u672c",permalink:"/OrigamiStudio/en/docs/documentation/Text/Trim Text"}},u={},c=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Transform \u8f6c\u6362",id:"transform-\u8f6c\u6362",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-transform-\u6587\u672c\u53d8\u6362"},"Text Transform \u6587\u672c\u53d8\u6362"),(0,a.kt)("p",null,"Transform the case and capitalization of a text string."),(0,a.kt)("p",null,"\u8f6c\u6362\u6587\u672c\u5b57\u7b26\u4e32\u7684\u5927\u5c0f\u5199\u548c\u5927\u5c0f\u5199\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(98665).Z,width:"940",height:"173"})),(0,a.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,a.kt)("p",null,"A text string to transform."),(0,a.kt)("p",null,"\u8981\u8f6c\u6362\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h3",{id:"transform-\u8f6c\u6362"},"Transform \u8f6c\u6362"),(0,a.kt)("p",null,"The property to control capitalization of the text string \u2013 Uppercase, Lowercase, or Capitalized."),(0,a.kt)("p",null,"\u63a7\u5236\u6587\u672c\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u7684\u5c5e\u6027\u2014\u2014\u5927\u5199\u3001\u5c0f\u5199\u6216\u9996\u5b57\u6bcd\u5927\u5199\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The transformed text string."),(0,a.kt)("p",null,"\u8f6c\u6362\u540e\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Size"},"Text Size \u6587\u672c\u5927\u5c0f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Length"},"Text Length \u6587\u672c\u957f\u77ed")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Size"},"Text Size \u6587\u672c\u5927\u5c0f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Trim%20Text"},"Trim Text \u4fee\u526a\u6587\u672c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Date%20&%20Time%20Formatter"},"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}d.isMDXComponent=!0},98665:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/text-transform-56a1df151f2eaea8b48ddee1d37d0b4f.png"}}]);