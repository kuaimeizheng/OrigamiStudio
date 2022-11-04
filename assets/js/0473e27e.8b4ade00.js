"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[19276],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?i.createElement(h,r(r({ref:e},c),{},{components:n})):i.createElement(h,r({ref:e},c))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:o,r[1]=u;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8640:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",u={unversionedId:"documentation/Animation/Cubic Bezier Animation",id:"documentation/Animation/Cubic Bezier Animation",title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",description:"Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized and then scaled based on the number to animate to, meaning the start point of the curve is always (0,0) and the end is always (number,number).",source:"@site/docs/documentation/Animation/Cubic Bezier Animation.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Cubic Bezier Animation",permalink:"/OrigamiStudio/docs/documentation/Animation/Cubic Bezier Animation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Cubic Bezier Animation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Classic Animation \u7ecf\u5178\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Classic Animation"},next:{title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Cubic Bezier Curve"}},l={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Number  \u6570\u5b57",id:"number--\u6570\u5b57",level:4},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-2",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-3",level:4},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-4",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa-1",level:4},{value:"Path \u8def\u5f84",id:"path-\u8def\u5f84",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cubic-bezier-animation-\u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b"},"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b"),(0,o.kt)("p",null,"Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized and then scaled based on the number to animate to, meaning the start point of the curve is always (0,0) and the end is always (number,number)."),(0,o.kt)("p",null,"\u5141\u8bb8\u60a8\u901a\u8fc7\u6307\u5b9a 2 \u4e2a\u63a7\u5236\u70b9\u6765\u5b9a\u4e49\u81ea\u5b9a\u4e49\u52a8\u753b\u66f2\u7ebf\u3002\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u7ecf\u8fc7\u6807\u51c6\u5316\uff0c\u7136\u540e\u6839\u636e\u8981\u8bbe\u7f6e\u52a8\u753b\u7684\u6570\u5b57\u8fdb\u884c\u7f29\u653e\uff0c\u8fd9\u610f\u5473\u7740\u66f2\u7ebf\u7684\u8d77\u70b9\u59cb\u7ec8\u4e3a (0,0)\uff0c\u7ec8\u70b9\u59cb\u7ec8\u4e3a (number,number)\u3002"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Cubic Bezier Animation"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Number",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,"Duration",(0,o.kt)("span",null,"0.4s"),(0,o.kt)("small",null,"X",(0,o.kt)("span",null,"0"),"Y",(0,o.kt)("span",null,"0"))),(0,o.kt)("li",null,(0,o.kt)("span",null,"0.17")),(0,o.kt)("li",null,(0,o.kt)("span",null,"0.17")),(0,o.kt)("li",null,(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,(0,o.kt)("span",null,"1"))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"0"),(0,o.kt)("li",null,"path")))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"number--\u6570\u5b57"},"Number  \u6570\u5b57"),(0,o.kt)("p",null,"The number to animate to."),(0,o.kt)("p",null,"\u8bbe\u7f6e\u52a8\u753b\u7684\u6570\u5b57"),(0,o.kt)("h4",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,o.kt)("p",null,"The duration of the animation."),(0,o.kt)("p",null,"\u52a8\u753b\u7684\u6301\u7eed\u65f6\u95f4"),(0,o.kt)("h4",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The X position of the first control point."),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u63a7\u5236\u70b9\u7684 X \u4f4d\u7f6e\u3002"),(0,o.kt)("h4",{id:"input-\u8f93\u5165-2"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The Y position of the first control point."),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u63a7\u5236\u70b9\u7684 Y \u4f4d\u7f6e\u3002"),(0,o.kt)("h4",{id:"input-\u8f93\u5165-3"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The X position of the second control point."),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u63a7\u5236\u70b9\u7684 X \u4f4d\u7f6e\u3002"),(0,o.kt)("h4",{id:"input-\u8f93\u5165-4"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The Y position of the second control point."),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u63a7\u5236\u70b9\u7684 Y \u4f4d\u7f6e\u3002")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"output-\u8f93\u51fa-1"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The current value in the animation."),(0,o.kt)("p",null,"\u52a8\u753b\u4e2d\u7684\u5f53\u524d\u503c\u3002"),(0,o.kt)("h4",{id:"path-\u8def\u5f84"},"Path \u8def\u5f84"),(0,o.kt)("p",null,"The X, Y position of the input progress on the curve. This can be used to plot the bezier curve."),(0,o.kt)("p",null,"\u8f93\u5165\u8fdb\u5ea6\u5728\u66f2\u7ebf\u4e0a\u7684 X\u3001Y \u4f4d\u7f6e\u3002\u8fd9\u53ef\u7528\u4e8e\u7ed8\u5236\u8d1d\u585e\u5c14\u66f2\u7ebf\u3002"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Cubic%20Bezier%20Curve"},"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}s.isMDXComponent=!0}}]);