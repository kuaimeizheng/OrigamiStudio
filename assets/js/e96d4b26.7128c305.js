"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[76e3],{3905:(A,e,w)=>{w.d(e,{Zo:()=>n,kt:()=>a});var t=w(67294);function D(A,e,w){return e in A?Object.defineProperty(A,e,{value:w,enumerable:!0,configurable:!0,writable:!0}):A[e]=w,A}function g(A,e){var w=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),w.push.apply(w,t)}return w}function M(A){for(var e=1;e<arguments.length;e++){var w=null!=arguments[e]?arguments[e]:{};e%2?g(Object(w),!0).forEach((function(e){D(A,e,w[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(w)):g(Object(w)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(w,e))}))}return A}function r(A,e){if(null==A)return{};var w,t,D=function(A,e){if(null==A)return{};var w,t,D={},g=Object.keys(A);for(t=0;t<g.length;t++)w=g[t],e.indexOf(w)>=0||(D[w]=A[w]);return D}(A,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);for(t=0;t<g.length;t++)w=g[t],e.indexOf(w)>=0||Object.prototype.propertyIsEnumerable.call(A,w)&&(D[w]=A[w])}return D}var B=t.createContext({}),Y=function(A){var e=t.useContext(B),w=e;return A&&(w="function"==typeof A?A(e):M(M({},e),A)),w},n=function(A){var e=Y(A.components);return t.createElement(B.Provider,{value:e},A.children)},i={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},G=t.forwardRef((function(A,e){var w=A.components,D=A.mdxType,g=A.originalType,B=A.parentName,n=r(A,["components","mdxType","originalType","parentName"]),G=Y(w),a=D,h=G["".concat(B,".").concat(a)]||G[a]||i[a]||g;return w?t.createElement(h,M(M({ref:e},n),{},{components:w})):t.createElement(h,M({ref:e},n))}));function a(A,e){var w=arguments,D=e&&e.mdxType;if("string"==typeof A||D){var g=w.length,M=new Array(g);M[0]=G;var r={};for(var B in e)hasOwnProperty.call(e,B)&&(r[B]=e[B]);r.originalType=A,r.mdxType="string"==typeof A?A:D,M[1]=r;for(var Y=2;Y<g;Y++)M[Y]=w[Y];return t.createElement.apply(null,M)}return t.createElement.apply(null,w)}G.displayName="MDXCreateElement"},42476:(A,e,w)=>{w.r(e),w.d(e,{assets:()=>B,contentTitle:()=>M,default:()=>i,frontMatter:()=>g,metadata:()=>r,toc:()=>Y});var t=w(87462),D=(w(67294),w(3905));const g={title:"Splitter \u5206\u79bb\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},M="Splitter \u5206\u79bb\u5668",r={unversionedId:"documentation/Utility/Splitter",id:"documentation/Utility/Splitter",title:"Splitter \u5206\u79bb\u5668",description:"Output the input value without changing it. Used to simplify and organize the patches. Press s when selecting or hovering on a port to insert a splitter. Press enter to rename it to add clarity. Right-click to change the value type (ex: from number to position), which can be used to cast values from one type to another.",source:"@site/docs/documentation/Utility/Splitter.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Splitter",permalink:"/OrigamiStudio/docs/documentation/Utility/Splitter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Splitter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Splitter \u5206\u79bb\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Spacing \u95f4\u8ddd",permalink:"/OrigamiStudio/docs/documentation/Utility/Spacing"},next:{title:"Stopwatch \u79d2\u8868",permalink:"/OrigamiStudio/docs/documentation/Utility/Stopwatch"}},B={},Y=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],n={toc:Y};function i(A){let{components:e,...g}=A;return(0,D.kt)("wrapper",(0,t.Z)({},n,g,{components:e,mdxType:"MDXLayout"}),(0,D.kt)("h1",{id:"splitter-\u5206\u79bb\u5668"},"Splitter \u5206\u79bb\u5668"),(0,D.kt)("p",null,"Output the input value without changing it. Used to simplify and organize the patches. Press s when selecting or hovering on a port to insert a splitter. Press enter to rename it to add clarity. Right-click to change the value type (ex: from number to position), which can be used to cast values from one type to another."),(0,D.kt)("p",null,"\u8f93\u51fa\u8f93\u5165\u503c\u800c\u4e0d\u6539\u53d8\u5b83\u3002\u7528\u4e8e\u7b80\u5316\u548c\u6574\u7406\u6a21\u5757\u3002"),(0,D.kt)("p",null,"\u9009\u62e9\u7aef\u53e3\u6216\u5c06\u9f20\u6807\u60ac\u505c\u7aef\u53e3\u4e0a\u65f6\u6309 s \u4ee5\u63d2\u5165\u5206\u914d\u5668\u3002\u6309\u56de\u8f66\u952e\u91cd\u547d\u540d\u6a21\u5757\u4ee5\u589e\u52a0\u53ef\u8bfb\u6027\u3002"),(0,D.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u503c\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u4ece\u6570\u5b57\u5230\u4f4d\u7f6e\uff09\uff0c\u53ef\u4ee5\u7528\u4e8e\u5c06\u503c\u4ece\u4e00\u79cd\u7c7b\u578b\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u7c7b\u578b\u3002"),(0,D.kt)("p",null,"Can be used interchangeably with Variable Broadcasters and Variable Receivers."),(0,D.kt)("p",null,"\u53ef\u4ee5\u4e0e\u53d8\u91cf\u53d1\u9001\u5668\u548c\u53d8\u91cf\u63a5\u6536\u5668\u4e92\u6362\u4f7f\u7528\u3002"),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"Image",src:w(78403).Z,width:"1212",height:"182"})),(0,D.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,D.kt)("p",null,"A value to pass on."),(0,D.kt)("p",null,"\u8981\u4f20\u9012\u7684\u503c\u3002"),(0,D.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,D.kt)("p",null,"The same value from the input."),(0,D.kt)("p",null,"\u4e0d\u6539\u53d8\u8f93\u5165\u7aef\u53e3\u7684\u503c\u5728\u8fd9\u76f4\u63a5\u8f93\u51fa\u3002"),(0,D.kt)("h3",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"Image",src:w(10610).Z,width:"580",height:"613"})),(0,D.kt)("hr",null),(0,D.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Variable%20Broadcaster"},"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668")),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Variable%20Receiver"},"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668")))}i.isMDXComponent=!0},10610:(A,e,w)=>{w.d(e,{Z:()=>t});const t=w.p+"assets/images/splitter-item-0502a50513285f0c4423d19f699c21b2.png"},78403:(A,e,w)=>{w.d(e,{Z:()=>t});const t="data:image/png;base64,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"}}]);