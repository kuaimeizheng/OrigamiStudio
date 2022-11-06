"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[86774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,v=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"Curve \u66f2\u7ebf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Curve \u66f2\u7ebf",u={unversionedId:"documentation/Animation/Curve",id:"documentation/Animation/Curve",title:"Curve \u66f2\u7ebf",description:"Change the rate of a linear animation progress to a new animation curve.",source:"@site/docs/documentation/Animation/Curve.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Curve",permalink:"/OrigamiStudio/docs/documentation/Animation/Curve",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Curve.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{title:"Curve \u66f2\u7ebf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Cubic Bezier Curve"},next:{title:"Pop Animation \u6d41\u884c\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Pop Animation"}},l={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:4},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf-1",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,i.kt)("p",null,"Change the rate of a linear animation progress to a new animation curve."),(0,i.kt)("p",null,"\u5c06\u7ebf\u6027\u52a8\u753b\u7684\u8fdb\u5ea6\u66f4\u6539\u4e3a\u65b0\u7684\u52a8\u753b\u66f2\u7ebf\u3002"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Curve"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Progress",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Curve",(0,i.kt)("span",null,"Linear"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Progress",(0,i.kt)("span",null,"0"))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"A number from 0-1 that represents the progress of the animation."),(0,i.kt)("h4",{id:"curve-\u66f2\u7ebf-1"},"Curve \u66f2\u7ebf"),(0,i.kt)("p",null,"The easing curve to animate with."),(0,i.kt)("p",null,"\u52a8\u753b\u7684\u7f13\u52a8\u66f2\u7ebf"),(0,i.kt)("p",null,"The options are:"),(0,i.kt)("p",null,"\u9009\u9879\u5305\u62ec\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Linear \u7ebf\u6027\uff0c\u5300\u901f"),(0,i.kt)("li",{parentName:"ol"},"Quadratic In, Out, In & Out \u4e8c\u6b21\u65b9\u7f13\u5165\uff0c\u7f13\u51fa\uff0c\u7f13\u5165\u7f13\u51fa"),(0,i.kt)("li",{parentName:"ol"},"Cubic In, Out, In & Out \u4e09\u6b21\u65b9\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa"),(0,i.kt)("li",{parentName:"ol"},"Exponential In, Out, In & Out \u6307\u6570\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa"),(0,i.kt)("li",{parentName:"ol"},"Sinusoidal In, Out, In & Out \u6b63\u5f26\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa"))),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"The progress value derived from the new animation curve."),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\u8f93\u51fa\u65b0\u7684\u66f2\u7ebf\u52a8\u753b\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}c.isMDXComponent=!0}}]);