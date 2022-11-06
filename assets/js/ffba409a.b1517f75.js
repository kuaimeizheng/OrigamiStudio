"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[27337],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=i.createContext({}),p=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=p(t.components);return i.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?i.createElement(k,r(r({ref:e},s),{},{components:n})):i.createElement(k,r({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52808:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Repeating Animation \u91cd\u590d\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Repeating Animation \u91cd\u590d\u52a8\u753b",l={unversionedId:"documentation/Animation/Repeating Animation",id:"documentation/Animation/Repeating Animation",title:"Repeating Animation \u91cd\u590d\u52a8\u753b",description:"Animate a number (ex: position, opacity, scale) repeatedly.",source:"@site/docs/documentation/Animation/Repeating Animation.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Repeating Animation",permalink:"/OrigamiStudio/docs/documentation/Animation/Repeating Animation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Repeating Animation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{title:"Repeating Animation \u91cd\u590d\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Pop Animation \u6d41\u884c\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Pop Animation"},next:{title:"Smooth Value \u5e73\u6ed1\u503c",permalink:"/OrigamiStudio/docs/documentation/Animation/Smooth Value"}},u={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:4},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf",level:4},{value:"Mirrored \u955c\u50cf",id:"mirrored-\u955c\u50cf",level:4},{value:"Reset \u590d\u4f4d",id:"reset-\u590d\u4f4d",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"repeating-animation-\u91cd\u590d\u52a8\u753b"},"Repeating Animation \u91cd\u590d\u52a8\u753b"),(0,a.kt)("p",null,"Animate a number (ex: position, opacity, scale) repeatedly."),(0,a.kt)("p",null,"\u91cd\u590d\u6570\u5b57\u52a8\u753b\uff08\u4f8b\u5982\uff1a\u4f4d\u7f6e\u3001\u4e0d\u900f\u660e\u5ea6\u3001\u6bd4\u4f8b\uff09\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Pop Animation"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Enable ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Duration",(0,a.kt)("span",null,"1")),(0,a.kt)("li",null,"Curve",(0,a.kt)("span",null,"Linear")),(0,a.kt)("li",null,"Mirrored ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Reset ",(0,a.kt)("span",{className:"patch-pulse-preview"},(0,a.kt)("span",{className:"dot"})))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Progress",(0,a.kt)("span",null,"0"))))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A boolean that turns the animation on/off."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6253\u5f00/\u5173\u95ed\u52a8\u753b\u3002"),(0,a.kt)("h4",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,a.kt)("p",null,"The length, in seconds, of the animation in one direction."),(0,a.kt)("p",null,"\u52a8\u753b\u5728\u4e00\u4e2a\u65b9\u5411\u4e0a\u7684\u957f\u5ea6\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,a.kt)("h4",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,a.kt)("p",null,"The easing curve to animate with. The options are:"),(0,a.kt)("p",null,"\u7528\u4e8e\u52a8\u753b\u7684\u7f13\u548c\u66f2\u7ebf\u3002\u6709\u4ee5\u4e0b\u9009\u9879:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Linear"),(0,a.kt)("li",{parentName:"ol"},"Quadratic In, Out, In & Out"),(0,a.kt)("li",{parentName:"ol"},"Cubic In, Out, In & Out"),(0,a.kt)("li",{parentName:"ol"},"Exponential In, Out, In & Out"),(0,a.kt)("li",{parentName:"ol"},"Sinusoidal In, Out, In & Out")),(0,a.kt)("h4",{id:"mirrored-\u955c\u50cf"},"Mirrored \u955c\u50cf"),(0,a.kt)("p",null,"A boolean that makes the animation animate back and forth between 0 and 1. If false, the animation will reset immediately to 0 when it hits 1."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u4f7f\u52a8\u753b\u57280\u548c1\u4e4b\u95f4\u6765\u56de\u52a8\u753b\u3002\u5982\u679c\u4e3afalse\uff0c\u52a8\u753b\u5c06\u5728\u70b9\u51fb 1 \u65f6\u7acb\u5373\u91cd\u7f6e\u4e3a 0\u3002"),(0,a.kt)("h4",{id:"reset-\u590d\u4f4d"},"Reset \u590d\u4f4d"),(0,a.kt)("p",null,"A pulse that returns the animation to the beginning."),(0,a.kt)("p",null,"\u8ba9\u52a8\u753b\u8df3\u56de\u5f00\u59cb\u65f6\u3002")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,a.kt)("p",null,"A progress value. See\xa0","[Animation Basics]","\xa0for more information."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"#"},"\u52a8\u753b\u57fa\u7840"),"\u3002"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Curve"},"Curve \u66f2\u7ebf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Repeating%20Pulse"},"Repeating Pulse \u91cd\u590d\u8109\u51b2")))}m.isMDXComponent=!0}}]);