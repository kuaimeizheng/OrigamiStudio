"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8471],{3905:(A,e,t)=>{t.d(e,{Zo:()=>B,kt:()=>w});var g=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function D(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);e&&(g=g.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,g)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?D(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function r(A,e){if(null==A)return{};var t,g,n=function(A,e){if(null==A)return{};var t,g,n={},D=Object.keys(A);for(g=0;g<D.length;g++)t=D[g],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(A);for(g=0;g<D.length;g++)t=D[g],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var a=g.createContext({}),M=function(A){var e=g.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},B=function(A){var e=M(A.components);return g.createElement(a.Provider,{value:e},A.children)},f={inlineCode:"code",wrapper:function(A){var e=A.children;return g.createElement(g.Fragment,{},e)}},i=g.forwardRef((function(A,e){var t=A.components,n=A.mdxType,D=A.originalType,a=A.parentName,B=r(A,["components","mdxType","originalType","parentName"]),i=M(t),w=n,u=i["".concat(a,".").concat(w)]||i[w]||f[w]||D;return t?g.createElement(u,o(o({ref:e},B),{},{components:t})):g.createElement(u,o({ref:e},B))}));function w(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var D=t.length,o=new Array(D);o[0]=i;var r={};for(var a in e)hasOwnProperty.call(e,a)&&(r[a]=e[a]);r.originalType=A,r.mdxType="string"==typeof A?A:n,o[1]=r;for(var M=2;M<D;M++)o[M]=t[M];return g.createElement.apply(null,o)}return g.createElement.apply(null,t)}i.displayName="MDXCreateElement"},82635:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>D,metadata:()=>r,toc:()=>M});var g=t(87462),n=(t(67294),t(3905));const D={sidebar_position:2},o="Text Length \u6587\u672c\u957f\u77ed",r={unversionedId:"documentation/Text/Text Length",id:"documentation/Text/Text Length",title:"Text Length \u6587\u672c\u957f\u77ed",description:"Measure the number of characters in a text string.",source:"@site/docs/documentation/Text/Text Length.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Length",permalink:"/OrigamiStudio/docs/documentation/Text/Text Length",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Length.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660145226,formattedLastUpdatedAt:"2022\u5e748\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Text Input Info \u6587\u672c\u8f93\u5165\u4fe1\u606f",permalink:"/OrigamiStudio/docs/documentation/Text/Text Input Info"},next:{title:"Text Replace \u6587\u672c\u66ff\u6362",permalink:"/OrigamiStudio/docs/documentation/Text/Text Replace"}},a={},M=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],B={toc:M};function f(A){let{components:e,...D}=A;return(0,n.kt)("wrapper",(0,g.Z)({},B,D,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"text-length-\u6587\u672c\u957f\u77ed"},"Text Length \u6587\u672c\u957f\u77ed"),(0,n.kt)("p",null,"Measure the number of characters in a text string."),(0,n.kt)("p",null,"\u6d4b\u91cf\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u6570\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:t(36888).Z,width:"893",height:"148"})),(0,n.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,n.kt)("p",null,"A text string to measure."),(0,n.kt)("p",null,"\u8981\u6d4b\u91cf\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"The number of characters in the text string."),(0,n.kt)("p",null,"\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u6570\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Size"},"Text Size \u6587\u672c\u5927\u5c0f")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}f.isMDXComponent=!0},36888:(A,e,t)=>{t.d(e,{Z:()=>g});const g="data:image/png;base64,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"}}]);