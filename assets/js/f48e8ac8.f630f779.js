"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[52975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(v,a(a({ref:t},p),{},{components:n})):i.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf",u={unversionedId:"documentation/Animation/Cubic Bezier Curve",id:"documentation/Animation/Cubic Bezier Curve",title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",description:"Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized, meaning the start point of the curve is always (0,0) and the end is always (1,1).",source:"@site/docs/documentation/Animation/Cubic Bezier Curve.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Cubic Bezier Curve",permalink:"/OrigamiStudio/docs/documentation/Animation/Cubic Bezier Curve",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Cubic Bezier Curve.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666626387,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Cubic Bezier Animation"},next:{title:"Curve \u66f2\u7ebf",permalink:"/OrigamiStudio/docs/documentation/Animation/Curve"}},l={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-2",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-3",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-4",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:4},{value:"2D Progress 2D\u8fdb\u5ea6",id:"2d-progress-2d\u8fdb\u5ea6",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cubic-bezier-curve-\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"},"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"),(0,r.kt)("p",null,"Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized, meaning the start point of the curve is always (0,0) and the end is always (1,1)."),(0,r.kt)("p",null,"\u5141\u8bb8\u60a8\u901a\u8fc7\u6307\u5b9a 2 \u4e2a\u63a7\u5236\u70b9\u6765\u5b9a\u4e49\u81ea\u5b9a\u4e49\u52a8\u753b\u66f2\u7ebf\u3002\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u662f\u6807\u51c6\u5316\u7684\uff0c\u8fd9\u610f\u5473\u7740\u66f2\u7ebf\u7684\u8d77\u70b9\u59cb\u7ec8\u4e3a (0,0)\uff0c\u7ec8\u70b9\u59cb\u7ec8\u4e3a (1,1)\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Cubic Bezier Curve"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Progress",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,(0,r.kt)("span",null,"0.17"),(0,r.kt)("small",null,"X",(0,r.kt)("span",null,"0"),"Y",(0,r.kt)("span",null,"0"))),(0,r.kt)("li",null,(0,r.kt)("span",null,"0.17")),(0,r.kt)("li",null,(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,(0,r.kt)("span",null,"1"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Progress",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"2D Progress",(0,r.kt)("span",null))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,r.kt)("p",null,"A number from 0-1 that represents the progress of the animation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u52a8\u753b\u7684\u8fdb\u5ea6\u3002"),(0,r.kt)("h4",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"The X position of the first control point."),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u63a7\u5236\u70b9\u7684 X \u4f4d\u7f6e\u3002"),(0,r.kt)("h4",{id:"input-\u8f93\u5165-2"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"The Y position of the first control point."),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u63a7\u5236\u70b9\u7684 Y \u4f4d\u7f6e\u3002"),(0,r.kt)("h4",{id:"input-\u8f93\u5165-3"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"The X position of the second control point."),(0,r.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u63a7\u5236\u70b9\u7684 X \u4f4d\u7f6e\u3002"),(0,r.kt)("h4",{id:"input-\u8f93\u5165-4"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"The Y position of the second control point."),(0,r.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u63a7\u5236\u70b9\u7684 Y \u4f4d\u7f6e\u3002")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,r.kt)("p",null,"The progress value derived from the new cubic bezier curve."),(0,r.kt)("p",null,"\u4ece\u65b0\u7684\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u5bfc\u51fa\u7684\u8fdb\u5ea6\u503c\u3002"),(0,r.kt)("h4",{id:"2d-progress-2d\u8fdb\u5ea6"},"2D Progress 2D\u8fdb\u5ea6"),(0,r.kt)("p",null,"The X, Y position of the input progress on the curve. This can be used to plot the bezier curve."),(0,r.kt)("p",null,"\u8f93\u5165\u8fdb\u5ea6\u5728\u66f2\u7ebf\u4e0a\u7684 X\u3001Y \u4f4d\u7f6e\u3002\u8fd9\u53ef\u7528\u4e8e\u7ed8\u5236\u8d1d\u585e\u5c14\u66f2\u7ebf\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Cubic%20Bezier%20Curve"},"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}c.isMDXComponent=!0}}]);