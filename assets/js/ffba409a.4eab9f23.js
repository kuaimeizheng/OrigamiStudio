"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[27337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||o;return n?i.createElement(f,r(r({ref:t},m),{},{components:n})):i.createElement(f,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5},r="Repeating Animation \u91cd\u590d\u52a8\u753b",l={unversionedId:"documentation/Animation/Repeating Animation",id:"documentation/Animation/Repeating Animation",title:"Repeating Animation \u91cd\u590d\u52a8\u753b",description:"Animate a number (ex: position, opacity, scale) repeatedly.",source:"@site/docs/documentation/Animation/Repeating Animation.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Repeating Animation",permalink:"/OrigamiStudio/docs/documentation/Animation/Repeating Animation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Repeating Animation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666104246,formattedLastUpdatedAt:"2022\u5e7410\u670818\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Pop Animation \u6d41\u884c\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Pop Animation"},next:{title:"Smooth Value \u5e73\u6ed1\u503c",permalink:"/OrigamiStudio/docs/documentation/Animation/Smooth Value"}},u={},p=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:3},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf",level:3},{value:"Mirrored \u955c\u50cf",id:"mirrored-\u955c\u50cf",level:3},{value:"Reset \u590d\u4f4d",id:"reset-\u590d\u4f4d",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"repeating-animation-\u91cd\u590d\u52a8\u753b"},"Repeating Animation \u91cd\u590d\u52a8\u753b"),(0,a.kt)("p",null,"Animate a number (ex: position, opacity, scale) repeatedly."),(0,a.kt)("p",null,"\u91cd\u590d\u6570\u5b57\u52a8\u753b\uff08\u4f8b\u5982\uff1a\u4f4d\u7f6e\u3001\u4e0d\u900f\u660e\u5ea6\u3001\u6bd4\u4f8b\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(85846).Z,width:"1374",height:"318"})),(0,a.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A boolean that turns the animation on/off."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6253\u5f00/\u5173\u95ed\u52a8\u753b\u3002"),(0,a.kt)("h3",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,a.kt)("p",null,"The length, in seconds, of the animation in one direction."),(0,a.kt)("p",null,"\u52a8\u753b\u5728\u4e00\u4e2a\u65b9\u5411\u4e0a\u7684\u957f\u5ea6\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,a.kt)("h3",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,a.kt)("p",null,"The easing curve to animate with. The options are:"),(0,a.kt)("p",null,"\u7528\u4e8e\u52a8\u753b\u7684\u7f13\u548c\u66f2\u7ebf\u3002\u6709\u4ee5\u4e0b\u9009\u9879:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Linear"),(0,a.kt)("li",{parentName:"ol"},"Quadratic In, Out, In & Out"),(0,a.kt)("li",{parentName:"ol"},"Cubic In, Out, In & Out"),(0,a.kt)("li",{parentName:"ol"},"Exponential In, Out, In & Out"),(0,a.kt)("li",{parentName:"ol"},"Sinusoidal In, Out, In & Out")),(0,a.kt)("h3",{id:"mirrored-\u955c\u50cf"},"Mirrored \u955c\u50cf"),(0,a.kt)("p",null,"A boolean that makes the animation animate back and forth between 0 and 1. If false, the animation will reset immediately to 0 when it hits 1."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u4f7f\u52a8\u753b\u57280\u548c1\u4e4b\u95f4\u6765\u56de\u52a8\u753b\u3002\u5982\u679c\u4e3afalse\uff0c\u52a8\u753b\u5c06\u5728\u70b9\u51fb 1 \u65f6\u7acb\u5373\u91cd\u7f6e\u4e3a 0\u3002"),(0,a.kt)("h3",{id:"reset-\u590d\u4f4d"},"Reset \u590d\u4f4d"),(0,a.kt)("p",null,"A pulse that returns the animation to the beginning."),(0,a.kt)("p",null,"\u8ba9\u52a8\u753b\u8df3\u56de\u5f00\u59cb\u65f6\u3002"),(0,a.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,a.kt)("p",null,"A progress value. See\xa0","[Animation Basics]","\xa0for more information."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"\u52a8\u753b\u57fa\u7840"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Curve"},"Curve \u66f2\u7ebf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Repeating%20Pulse"},"Repeating Pulse \u91cd\u590d\u8109\u51b2")))}c.isMDXComponent=!0},85846:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/repeating-animation-5051084d3efcf32090c941462a3e953f.png"}}]);