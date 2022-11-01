"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[11824],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),d=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return i.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(f,o(o({ref:e},s),{},{components:n})):i.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95394:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},o="Arc Transition \u5f27\u5f62\u8fc7\u6e21",l={unversionedId:"documentation/Utility/Arc Transition",id:"documentation/Utility/Arc Transition",title:"Arc Transition \u5f27\u5f62\u8fc7\u6e21",description:"Convert a value between 0 and 1 to a new range defined by the start and end values, while specifying a middle value it should pass through. Allowing you to \u2018arc\u2019 a transition between the start and end values.",source:"@site/docs/documentation/Utility/Arc Transition.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Arc Transition",permalink:"/OrigamiStudio/docs/documentation/Utility/Arc Transition",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Arc Transition.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667268661,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Utility \u5b9e\u7528",permalink:"/OrigamiStudio/docs/category/utility-\u5b9e\u7528"},next:{title:"Clip \u88c1\u526a",permalink:"/OrigamiStudio/docs/documentation/Utility/Clip"}},u={},d=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Middle \u4e2d\u95f4",id:"middle-\u4e2d\u95f4",level:3},{value:"End \u7ed3\u675f",id:"end-\u7ed3\u675f",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,i.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arc-transition-\u5f27\u5f62\u8fc7\u6e21"},"Arc Transition \u5f27\u5f62\u8fc7\u6e21"),(0,r.kt)("p",null,"Convert a value between 0 and 1 to a new range defined by the start and end values, while specifying a middle value it should pass through. Allowing you to \u2018arc\u2019 a transition between the start and end values."),(0,r.kt)("p",null,"\u5c06 0 \u5230 1 \u4e4b\u95f4\u7684\u503c\u8f6c\u6362\u4e3a\u7531\u5f00\u59cb\u503c\u548c\u7ed3\u675f\u503c\u5b9a\u4e49\u7684\u65b0\u8303\u56f4\uff0c\u540c\u65f6\u6307\u5b9a\u5b83\u5e94\u8be5\u901a\u8fc7\u7684\u4e2d\u95f4\u503c\u3002 \u5141\u8bb8\u60a8\u5728\u5f00\u59cb\u503c\u548c\u7ed3\u675f\u503c\u4e4b\u95f4\u201c\u5f27\u5f62\u201d\u8f6c\u6362\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(63979).Z,width:"1534",height:"286"})),(0,r.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,r.kt)("p",null,"A progress value. See ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"Animation Basics")," for more information."),(0,r.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002\u6709\u5173\u8be6\u60c5\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 Animation Basic"),(0,r.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,r.kt)("p",null,"The start value of the new range."),(0,r.kt)("p",null,"\u65b0\u8303\u56f4\u7684\u5f00\u59cb\u503c\u3002"),(0,r.kt)("h3",{id:"middle-\u4e2d\u95f4"},"Middle \u4e2d\u95f4"),(0,r.kt)("p",null,"The middle value of the new range."),(0,r.kt)("p",null,"\u65b0\u8303\u56f4\u7684\u4e2d\u95f4\u503c\u3002"),(0,r.kt)("h3",{id:"end-\u7ed3\u675f"},"End \u7ed3\u675f"),(0,r.kt)("p",null,"The end value of the new range."),(0,r.kt)("p",null,"\u65b0\u8303\u56f4\u7684\u7ed3\u675f\u503c\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"The converted value."),(0,r.kt)("p",null,"\u8f6c\u6362\u540e\u7684\u503c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}c.isMDXComponent=!0},63979:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/arc-transition-41ad6241037156976ffeb184cc6f0a78.png"}}]);