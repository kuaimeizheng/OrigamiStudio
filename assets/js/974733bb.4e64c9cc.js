"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[26095],{3905:(A,w,M)=>{M.d(w,{Zo:()=>t,kt:()=>C});var Y=M(67294);function D(A,w,M){return w in A?Object.defineProperty(A,w,{value:M,enumerable:!0,configurable:!0,writable:!0}):A[w]=M,A}function B(A,w){var M=Object.keys(A);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(A);w&&(Y=Y.filter((function(w){return Object.getOwnPropertyDescriptor(A,w).enumerable}))),M.push.apply(M,Y)}return M}function g(A){for(var w=1;w<arguments.length;w++){var M=null!=arguments[w]?arguments[w]:{};w%2?B(Object(M),!0).forEach((function(w){D(A,w,M[w])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(M)):B(Object(M)).forEach((function(w){Object.defineProperty(A,w,Object.getOwnPropertyDescriptor(M,w))}))}return A}function G(A,w){if(null==A)return{};var M,Y,D=function(A,w){if(null==A)return{};var M,Y,D={},B=Object.keys(A);for(Y=0;Y<B.length;Y++)M=B[Y],w.indexOf(M)>=0||(D[M]=A[M]);return D}(A,w);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(A);for(Y=0;Y<B.length;Y++)M=B[Y],w.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(A,M)&&(D[M]=A[M])}return D}var h=Y.createContext({}),e=function(A){var w=Y.useContext(h),M=w;return A&&(M="function"==typeof A?A(w):g(g({},w),A)),M},t=function(A){var w=e(A.components);return Y.createElement(h.Provider,{value:w},A.children)},I={inlineCode:"code",wrapper:function(A){var w=A.children;return Y.createElement(Y.Fragment,{},w)}},Q=Y.forwardRef((function(A,w){var M=A.components,D=A.mdxType,B=A.originalType,h=A.parentName,t=G(A,["components","mdxType","originalType","parentName"]),Q=e(M),C=D,r=Q["".concat(h,".").concat(C)]||Q[C]||I[C]||B;return M?Y.createElement(r,g(g({ref:w},t),{},{components:M})):Y.createElement(r,g({ref:w},t))}));function C(A,w){var M=arguments,D=w&&w.mdxType;if("string"==typeof A||D){var B=M.length,g=new Array(B);g[0]=Q;var G={};for(var h in w)hasOwnProperty.call(w,h)&&(G[h]=w[h]);G.originalType=A,G.mdxType="string"==typeof A?A:D,g[1]=G;for(var e=2;e<B;e++)g[e]=M[e];return Y.createElement.apply(null,g)}return Y.createElement.apply(null,M)}Q.displayName="MDXCreateElement"},34641:(A,w,M)=>{M.r(w),M.d(w,{assets:()=>h,contentTitle:()=>g,default:()=>I,frontMatter:()=>B,metadata:()=>G,toc:()=>e});var Y=M(87462),D=(M(67294),M(3905));const B={sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},g="- \u51cf",G={unversionedId:"documentation/Math/-",id:"documentation/Math/-",title:"- \u51cf",description:"Subtract one or more values from a base value.",source:"@site/docs/documentation/Math/-.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/-",permalink:"/OrigamiStudio/docs/documentation/Math/-",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/-.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"+ \u52a0",permalink:"/OrigamiStudio/docs/documentation/Math/+"},next:{title:"Absolute Value \u7edd\u5bf9\u503c",permalink:"/OrigamiStudio/docs/documentation/Math/Absolute Value"}},h={},e=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],t={toc:e};function I(A){let{components:w,...B}=A;return(0,D.kt)("wrapper",(0,Y.Z)({},t,B,{components:w,mdxType:"MDXLayout"}),(0,D.kt)("h1",{id:"--\u51cf"},"- \u51cf"),(0,D.kt)("p",null,"Subtract one or more values from a base value."),(0,D.kt)("p",null,"Right-click to subtract more values, or change the type (ex: number, position, rotation)."),(0,D.kt)("p",null,"\u5c06\u503c\u51cf\u53bb\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u3002"),(0,D.kt)("p",null,"\u53f3\u952e\u53ef\u9009\u62e9\u8f93\u5165\u63a5\u53e3\u6570\uff0c\u6216\u66f4\u6539\u8f93\u5165\u63a5\u53e3\u63a5\u5165\u503c\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\uff0c\u5750\u6807\uff0c\u89d2\u5ea6\uff09\u3002"),(0,D.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\uff0c\u5047\u8bbe A - B = C \uff0c\u5982\uff08 10 - 2 = 8 \uff09\u3002"),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"Image",src:M(95545).Z,width:"1500",height:"234"})),(0,D.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,D.kt)("p",null,"The base value. By default, the value is a number."),(0,D.kt)("p",null,"\u63a5\u5165\u57fa\u7840\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002\u4f8b\u5b50\uff1a\u5373A"),(0,D.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,D.kt)("p",null,"The first number to subtract. By default, the value is a number."),(0,D.kt)("p",null,"\u8981\u51cf\u53bb\u7684\u7b2c\u4e00\u4e2a\u6570\u5b57 \u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002\u4f8b\u5b50\uff1a\u5373B"),(0,D.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,D.kt)("p",null,"The difference of the values."),(0,D.kt)("p",null,"\u8ba1\u7b97\u51fa\u6765\u7684\u503c\u3002"),(0,D.kt)("hr",null),(0,D.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/+"},"+ \u52a0")),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/x"},"x \u4e58")),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/%C3%B7"},"\xf7 \u9664")),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Mod"},"Mod \u6c42\u4f59\u51fd\u6570")),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Round"},"Round \u56db\u820d\u4e94\u5165")),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Min"},"Min \u6700\u5c0f\u503c")),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Max"},"Max \u6700\u5927")))}I.isMDXComponent=!0},95545:(A,w,M)=>{M.d(w,{Z:()=>Y});const Y="data:image/png;base64,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AAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMPrM8SsAAAO5SURBVMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZKNwbHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwkPEZ/AeWX4dNymyncQAAAABJRU5ErkJggg=="}}]);