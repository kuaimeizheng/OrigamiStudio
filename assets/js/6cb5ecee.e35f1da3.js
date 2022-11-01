"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[82458],{3905:(A,w,D)=>{D.d(w,{Zo:()=>t,kt:()=>c});var M=D(67294);function g(A,w,D){return w in A?Object.defineProperty(A,w,{value:D,enumerable:!0,configurable:!0,writable:!0}):A[w]=D,A}function B(A,w){var D=Object.keys(A);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);w&&(M=M.filter((function(w){return Object.getOwnPropertyDescriptor(A,w).enumerable}))),D.push.apply(D,M)}return D}function Y(A){for(var w=1;w<arguments.length;w++){var D=null!=arguments[w]?arguments[w]:{};w%2?B(Object(D),!0).forEach((function(w){g(A,w,D[w])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(D)):B(Object(D)).forEach((function(w){Object.defineProperty(A,w,Object.getOwnPropertyDescriptor(D,w))}))}return A}function G(A,w){if(null==A)return{};var D,M,g=function(A,w){if(null==A)return{};var D,M,g={},B=Object.keys(A);for(M=0;M<B.length;M++)D=B[M],w.indexOf(D)>=0||(g[D]=A[D]);return g}(A,w);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(A);for(M=0;M<B.length;M++)D=B[M],w.indexOf(D)>=0||Object.prototype.propertyIsEnumerable.call(A,D)&&(g[D]=A[D])}return g}var e=M.createContext({}),h=function(A){var w=M.useContext(e),D=w;return A&&(D="function"==typeof A?A(w):Y(Y({},w),A)),D},t=function(A){var w=h(A.components);return M.createElement(e.Provider,{value:w},A.children)},n={inlineCode:"code",wrapper:function(A){var w=A.children;return M.createElement(M.Fragment,{},w)}},E=M.forwardRef((function(A,w){var D=A.components,g=A.mdxType,B=A.originalType,e=A.parentName,t=G(A,["components","mdxType","originalType","parentName"]),E=h(D),c=g,u=E["".concat(e,".").concat(c)]||E[c]||n[c]||B;return D?M.createElement(u,Y(Y({ref:w},t),{},{components:D})):M.createElement(u,Y({ref:w},t))}));function c(A,w){var D=arguments,g=w&&w.mdxType;if("string"==typeof A||g){var B=D.length,Y=new Array(B);Y[0]=E;var G={};for(var e in w)hasOwnProperty.call(w,e)&&(G[e]=w[e]);G.originalType=A,G.mdxType="string"==typeof A?A:g,Y[1]=G;for(var h=2;h<B;h++)Y[h]=D[h];return M.createElement.apply(null,Y)}return M.createElement.apply(null,D)}E.displayName="MDXCreateElement"},8766:(A,w,D)=>{D.r(w),D.d(w,{assets:()=>e,contentTitle:()=>Y,default:()=>n,frontMatter:()=>B,metadata:()=>G,toc:()=>h});var M=D(87462),g=(D(67294),D(3905));const B={sidebar_position:5},Y="Min \u6700\u5c0f\u503c",G={unversionedId:"documentation/Math/Min",id:"documentation/Math/Min",title:"Min \u6700\u5c0f\u503c",description:"Compare two or more values and output the smallest one. Although the patch\u2019s default type is number, it can be used to compare position, point, color and index values as well.",source:"@site/docs/documentation/Math/Min.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Min",permalink:"/OrigamiStudio/docs/documentation/Math/Min",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Min.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667268661,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Max \u6700\u5927\u503c",permalink:"/OrigamiStudio/docs/documentation/Math/Max"},next:{title:"Mod \u6c42\u4f59\u51fd\u6570",permalink:"/OrigamiStudio/docs/documentation/Math/Mod"}},e={},h=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],t={toc:h};function n(A){let{components:w,...B}=A;return(0,g.kt)("wrapper",(0,M.Z)({},t,B,{components:w,mdxType:"MDXLayout"}),(0,g.kt)("h1",{id:"min-\u6700\u5c0f\u503c"},"Min \u6700\u5c0f\u503c"),(0,g.kt)("p",null,"Compare two or more values and output the smallest one. Although the patch\u2019s default type is number, it can be used to compare position, point, color and index values as well."),(0,g.kt)("p",null,"\u6bd4\u8f83\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u5e76\u8f93\u51fa\u6700\u5c0f\u503c\u3002\u867d\u7136\u6a21\u5757\u7684\u9ed8\u8ba4\u7c7b\u578b\u662f\u6570\u5b57\uff0c\u4f46\u5b83\u4e5f\u53ef\u4ee5\u7528\u4e8e\u6bd4\u8f83\u4f4d\u7f6e\uff0c\u70b9\uff0c\u989c\u8272\u548c\u7d22\u5f15\u503c\u3002"),(0,g.kt)("p",null,"Right-click to add more values, or change the type (ex: number, position, rotation)."),(0,g.kt)("p",null,"\u53f3\u952e\u9009\u62e9\u8f93\u5165\u63a5\u53e3\u6570\uff0c\u6216\u66f4\u6539\u8f93\u5165\u63a5\u53e3\u63a5\u5165\u503c\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\uff0c\u5750\u6807\uff0c\u89d2\u5ea6\uff09\u3002"),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"Image",src:D(14387).Z,width:"1500",height:"228"})),(0,g.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,g.kt)("p",null,"A value to compare to other input values. By default, the value is a number."),(0,g.kt)("p",null,"\u4e0e\u5176\u4ed6 Input \u8f93\u5165\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,g.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,g.kt)("p",null,"A value to compare to other input values. By default, the value is a number."),(0,g.kt)("p",null,"\u4e0e\u5176\u4ed6 Input \u8f93\u5165\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,g.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,g.kt)("p",null,"The smallest of the input values."),(0,g.kt)("p",null,"\u8f93\u51fa\u6700\u5c0f\u7684\u503c\u3002"),(0,g.kt)("hr",null),(0,g.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,g.kt)("p",null,(0,g.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/+"},"+ \u52a0")),(0,g.kt)("p",null,(0,g.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/-"},"\u2212 \u51cf")),(0,g.kt)("p",null,(0,g.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/x"},"x \u4e58")),(0,g.kt)("p",null,(0,g.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/%C3%B7"},"\xf7 \u9664")),(0,g.kt)("p",null,(0,g.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Round"},"Round \u56db\u820d\u4e94\u5165")),(0,g.kt)("p",null,(0,g.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Max"},"Max \u6700\u5927")))}n.isMDXComponent=!0},14387:(A,w,D)=>{D.d(w,{Z:()=>M});const M="data:image/png;base64,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"}}]);