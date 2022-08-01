"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5433],{3905:function(A,w,e){e.d(w,{Zo:function(){return n},kt:function(){return o}});var D=e(67294);function g(A,w,e){return w in A?Object.defineProperty(A,w,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[w]=e,A}function M(A,w){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(A);w&&(D=D.filter((function(w){return Object.getOwnPropertyDescriptor(A,w).enumerable}))),e.push.apply(e,D)}return e}function t(A){for(var w=1;w<arguments.length;w++){var e=null!=arguments[w]?arguments[w]:{};w%2?M(Object(e),!0).forEach((function(w){g(A,w,e[w])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(w){Object.defineProperty(A,w,Object.getOwnPropertyDescriptor(e,w))}))}return A}function r(A,w){if(null==A)return{};var e,D,g=function(A,w){if(null==A)return{};var e,D,g={},M=Object.keys(A);for(D=0;D<M.length;D++)e=M[D],w.indexOf(e)>=0||(g[e]=A[e]);return g}(A,w);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);for(D=0;D<M.length;D++)e=M[D],w.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(g[e]=A[e])}return g}var B=D.createContext({}),Y=function(A){var w=D.useContext(B),e=w;return A&&(e="function"==typeof A?A(w):t(t({},w),A)),e},n=function(A){var w=Y(A.components);return D.createElement(B.Provider,{value:w},A.children)},i={inlineCode:"code",wrapper:function(A){var w=A.children;return D.createElement(D.Fragment,{},w)}},G=D.forwardRef((function(A,w){var e=A.components,g=A.mdxType,M=A.originalType,B=A.parentName,n=r(A,["components","mdxType","originalType","parentName"]),G=Y(e),o=g,I=G["".concat(B,".").concat(o)]||G[o]||i[o]||M;return e?D.createElement(I,t(t({ref:w},n),{},{components:e})):D.createElement(I,t({ref:w},n))}));function o(A,w){var e=arguments,g=w&&w.mdxType;if("string"==typeof A||g){var M=e.length,t=new Array(M);t[0]=G;var r={};for(var B in w)hasOwnProperty.call(w,B)&&(r[B]=w[B]);r.originalType=A,r.mdxType="string"==typeof A?A:g,t[1]=r;for(var Y=2;Y<M;Y++)t[Y]=e[Y];return D.createElement.apply(null,t)}return D.createElement.apply(null,e)}G.displayName="MDXCreateElement"},32197:function(A,w,e){e.r(w),e.d(w,{assets:function(){return n},contentTitle:function(){return B},default:function(){return o},frontMatter:function(){return r},metadata:function(){return Y},toc:function(){return i}});var D=e(87462),g=e(63366),M=(e(67294),e(3905)),t=["components"],r={sidebar_position:2},B="Delay 1 \u5ef6\u8fdf1",Y={unversionedId:"documentation/Utility/Delay 1",id:"documentation/Utility/Delay 1",title:"Delay 1 \u5ef6\u8fdf1",description:"Delay a number by one frame. Useful for split second delays. A typical composition runs at around 60 frames per second.",source:"@site/docs/documentation/Utility/Delay 1.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Delay 1",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay 1",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Delay 1.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659373767,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Utility/Date & Time Formatter"},next:{title:"Delay \u5ef6\u8fdf",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay"}},n={},i=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],G={toc:i};function o(A){var w=A.components,r=(0,g.Z)(A,t);return(0,M.kt)("wrapper",(0,D.Z)({},G,r,{components:w,mdxType:"MDXLayout"}),(0,M.kt)("h1",{id:"delay-1-\u5ef6\u8fdf1"},"Delay 1 \u5ef6\u8fdf1"),(0,M.kt)("p",null,"Delay a number by one frame. Useful for split second delays. A typical composition runs at around 60 frames per second."),(0,M.kt)("p",null,"\u5c06\u6570\u5b57\u5ef6\u8fdf\u4e00\u5e27\u3002\u9002\u7528\u4e8e\u518d\u6b21\u62c6\u5206\u5ef6\u8fdf\u65f6\u95f4\u3002\u5178\u578b\u7684\u5408\u6210\u4ee5\u5927\u7ea6\u6bcf\u79d260\u5e27\u7684\u901f\u5ea6\u8fd0\u884c"),(0,M.kt)("p",null,"Right-click to change the type (ex: number, position, color)."),(0,M.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\u3001\u4f4d\u7f6e\u3001\u989c\u8272\uff09"),(0,M.kt)("p",null,(0,M.kt)("img",{alt:"Image",src:e(54981).Z,width:"1202",height:"168"})),(0,M.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,M.kt)("p",null,"The number to delay."),(0,M.kt)("p",null,"\u5ef6\u8fdf\u7684\u6570\u503c"),(0,M.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,M.kt)("p",null,"The number, which is output only after the delay has elapsed."),(0,M.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u53ea\u6709\u5728\u5ef6\u8fdf\u8fc7\u540e\u624d\u8f93\u51fa\u3002"),(0,M.kt)("hr",null),(0,M.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,M.kt)("p",null,(0,M.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Delay"},"Delay \u5ef6\u8fdf")))}o.isMDXComponent=!0},54981:function(A,w){w.Z="data:image/png;base64,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"}}]);