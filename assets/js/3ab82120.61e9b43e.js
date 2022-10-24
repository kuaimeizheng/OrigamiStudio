"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[83478],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(n),d=a,k=p["".concat(u,".").concat(d)]||p[d]||m[d]||r;return n?i.createElement(k,o(o({ref:e},s),{},{components:n})):i.createElement(k,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60321:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:5},o="Classic Animation \u7ecf\u5178\u52a8\u753b",l={unversionedId:"documentation/Animation/Classic Animation",id:"documentation/Animation/Classic Animation",title:"Classic Animation \u7ecf\u5178\u52a8\u753b",description:"Animate a number (ex: position, opacity, scale) using a standard animation curve whenever the number is changed.",source:"@site/docs/documentation/Animation/Classic Animation.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Classic Animation",permalink:"/OrigamiStudio/docs/documentation/Animation/Classic Animation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Classic Animation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666622342,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",permalink:"/OrigamiStudio/docs/documentation/Animation/Bouncy Converter"},next:{title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Cubic Bezier Animation"}},u={},c=[{value:"Number \u6570\u503c",id:"number-\u6570\u503c",level:3},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:3},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf",level:3},{value:"Progress",id:"progress",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"classic-animation-\u7ecf\u5178\u52a8\u753b"},"Classic Animation \u7ecf\u5178\u52a8\u753b"),(0,a.kt)("p",null,"Animate a number (ex: position, opacity, scale) using a standard animation curve whenever the number is changed."),(0,a.kt)("p",null,"\u6bcf\u5f53\u6570\u5b57\u6539\u53d8\u65f6\uff0c\u4f7f\u7528\u6807\u51c6\u52a8\u753b\u66f2\u7ebf\u5bf9\u6570\u503c (\u4f8b\u5982:\u4f4d\u7f6e\uff0c\u4e0d\u900f\u660e\u5ea6\uff0c\u6bd4\u4f8b) \u8fdb\u884c\u52a8\u753b\u5904\u7406\u3002"),(0,a.kt)("p",null,"See ","[Animation Basics]"," for more information."),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"\u52a8\u753b\u57fa\u7840"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(65099).Z,width:"1374",height:"306"})),(0,a.kt)("h3",{id:"number-\u6570\u503c"},"Number \u6570\u503c"),(0,a.kt)("p",null,"The number to animate to."),(0,a.kt)("p",null,"\u5f53\u63a5\u6536\u5230\u6570\u503c\u65f6\uff0c\u52a8\u753b\u5f00\u59cb"),(0,a.kt)("h3",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,a.kt)("p",null,"The length of the animation, in seconds"),(0,a.kt)("p",null,"\u52a8\u753b\u7684\u6301\u7eed\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d"),(0,a.kt)("h3",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,a.kt)("p",null,"The easing curve to animate with."),(0,a.kt)("p",null,"\u52a8\u753b\u7684\u7f13\u52a8\u66f2\u7ebf"),(0,a.kt)("p",null,"The options are:"),(0,a.kt)("p",null,"\u9009\u9879\u5305\u62ec\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Linear \u7ebf\u6027\uff0c\u5300\u901f"),(0,a.kt)("li",{parentName:"ol"},"Quadratic In, Out, In & Out \u4e8c\u6b21\u65b9\u7f13\u5165"),(0,a.kt)("li",{parentName:"ol"},"Quadratic Out \u4e8c\u6b21\u7f13\u51fa"),(0,a.kt)("li",{parentName:"ol"},"Quadratic In-Out \u4e8c\u6b21\u7f13\u5165\u7f13\u51fa"),(0,a.kt)("li",{parentName:"ol"},"Cubic In, Out, In & Out \u4e09\u6b21\u7f13\u5165"),(0,a.kt)("li",{parentName:"ol"},"Cubic Out \u4e09\u6b21\u7f13\u51fa"),(0,a.kt)("li",{parentName:"ol"},"Cubic In-Out \u4e09\u6b21\u7f13\u5165\u7f13\u51fa"),(0,a.kt)("li",{parentName:"ol"},"Exponential In, Out, In & Out \u6307\u6570\u7f13\u5165"),(0,a.kt)("li",{parentName:"ol"},"Exponential Out \u6307\u6570\u7f13\u51fa"),(0,a.kt)("li",{parentName:"ol"},"Exponential In-Out \u6307\u6570\u7f13\u5165\u7f13\u51fa"),(0,a.kt)("li",{parentName:"ol"},"Sinusoidal In, Out, In & Out \u6b63\u5f26\u7f13\u5165"),(0,a.kt)("li",{parentName:"ol"},"Sinusoidal Out \u6b63\u5f26\u7f13\u51fa"),(0,a.kt)("li",{parentName:"ol"},"Sinusoidal In-Out \u6b63\u5f26\u7f13\u5165\u7f13\u51fa")),(0,a.kt)("p",null,"\u66f2\u7ebf\u52a8\u753b\u53c2\u8003\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u66f2\u7ebf In \uff1a\u6162 \u2794 \u5feb",src:n(69890).Z,width:"560",height:"450"})),(0,a.kt)("p",null,"\u66f2\u7ebf In \uff1a\u6162 \u2794 \u5feb"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u66f2\u7ebf Out \uff1a\u5feb \u2794 \u6162",src:n(5219).Z,width:"560",height:"450"})),(0,a.kt)("p",null,"\u66f2\u7ebf Out \uff1a\u5feb \u2794 \u6162"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u66f2\u7ebf In &amp; Out \uff1a\u6162 \u2794 \u5feb \u2794 \u6162",src:n(13761).Z,width:"560",height:"450"})),(0,a.kt)("p",null,"\u66f2\u7ebf In & Out \uff1a\u6162 \u2794 \u5feb \u2794 \u6162"),(0,a.kt)("h3",{id:"progress"},"Progress"),(0,a.kt)("p",null,"A number that is tweened with an easing curve as it moves toward the Number input."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u5f53\u5b83\u5411\u6570\u503c\u8f93\u5165\u79fb\u52a8\u65f6\uff0c\u4f7f\u7528\u7f13\u548c\u66f2\u7ebf\u8fdb\u884c\u8865\u95f4\uff0c"),(0,a.kt)("p",null,"Typically a progress value. See ","[Animation Basics]","for more information."),(0,a.kt)("p",null,"\u901a\u5e38\u662f\u4e00\u4e2a\u8fdb\u5ea6\u503c\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"\u52a8\u753b\u57fa\u7840"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}m.isMDXComponent=!0},69890:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/classic-animation-1-32083c34a004dc1cfe6cad0b34422724.gif"},5219:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/classic-animation-2-2bf765bae92384e85186451d9c742849.gif"},13761:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/classic-animation-3-c0980b21794f5dd0b00c587d63b286af.gif"},65099:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/classic-animation-56114537f5960ed1c7a43a947ec35853.png"}}]);