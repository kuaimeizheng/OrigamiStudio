"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[52662],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(g,o(o({ref:e},m),{},{components:n})):i.createElement(g,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16173:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Animations \u52a8\u753b",sidebar_position:15,last_update:{author:"\u84af\u7f8e\u653f"}},o="Animations \u52a8\u753b",l={unversionedId:"documentation/PatchEditor/Animations",id:"documentation/PatchEditor/Animations",title:"Animations \u52a8\u753b",description:"Origami \u4e2d\u7684\u52a8\u753b\u6a21\u5757\u7684\u8bbe\u8ba1\u6d41\u7545\u4e14\u53ef\u53cd\u8f6c\u3002\u4e3a\u4e86\u52a8\u753b\u5e73\u6ed1\u91c7\u7528\u4e00\u76f4\u53d8\u5316\u7684\u6570\u5b57\u548c\u8865\u95f4\u3002",source:"@site/docs/documentation/PatchEditor/Animations.md",sourceDirName:"documentation/PatchEditor",slug:"/documentation/PatchEditor/Animations",permalink:"/OrigamiStudio/docs/documentation/PatchEditor/Animations",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/PatchEditor/Animations.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:15,frontMatter:{title:"Animations \u52a8\u753b",sidebar_position:15,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"States \u72b6\u6001",permalink:"/OrigamiStudio/docs/documentation/PatchEditor/States"},next:{title:"Interactions Patch \u4ea4\u4e92\u6a21\u5757",permalink:"/OrigamiStudio/docs/documentation/PatchEditor/Interactions Patch"}},s={},c=[{value:"Animation patches \u52a8\u753b\u6a21\u5757",id:"animation-patches-\u52a8\u753b\u6a21\u5757",level:2},{value:"Animating values \u52a8\u753b\u503c",id:"animating-values-\u52a8\u753b\u503c",level:2},{value:"Transitions \u8fc7\u6e21",id:"transitions-\u8fc7\u6e21",level:2},{value:"Summary \u603b\u7ed3",id:"summary-\u603b\u7ed3",level:2}],m={toc:c};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"animations-\u52a8\u753b"},"Animations \u52a8\u753b"),(0,a.kt)("p",null,"Origami \u4e2d\u7684\u52a8\u753b\u6a21\u5757\u7684\u8bbe\u8ba1\u6d41\u7545\u4e14\u53ef\u53cd\u8f6c\u3002\u4e3a\u4e86\u52a8\u753b\u5e73\u6ed1\u91c7\u7528\u4e00\u76f4\u53d8\u5316\u7684\u6570\u5b57\u548c\u8865\u95f4\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"animation-patches-\u52a8\u753b\u6a21\u5757"},"Animation patches \u52a8\u753b\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Pop Animation \u6d41\u884c\u52a8\u753b]")," \u8138\u4e66\u5e94\u7528\u4e2d\u5e38\u89c1\u7684\u81ea\u7136\u5f39\u6027\u52a8\u753b\uff0c\u56e0\u4e3a\u662f\u901a\u8fc7 iOS \u7684 POP \u6846\u67b6\u3001Android \u7684 Rebound \u548c Web \u7684 Rebound JS \u6846\u67b6\uff0c\u6240\u4ee5\u53ef\u4ee5\u8f7b\u677e\u5c06\u53c2\u6570\u4f20\u9012\u7ed9\u5f00\u53d1\u4eba\u5458\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Classic Animation\u7ecf\u5178\u52a8\u753b]")," \u4f20\u7edf\u7684\u7f13\u52a8\u66f2\u7ebf\uff0c\u5982\u7ebf\u6027\u3001\u7f13\u5165\u3001\u7f13\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Repeating Animation \u91cd\u590d\u52a8\u753b]")," \u5e26\u6709\u7f13\u52a8\u66f2\u7ebf\u7684\u91cd\u590d\u3001\u6765\u56de\u52a8\u753b\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"animating-values-\u52a8\u753b\u503c"},"Animating values \u52a8\u753b\u503c"),(0,a.kt)("p",null,"\u4e0e\u8f93\u51fa 0 \u6216 1 \u7684 j ","[Interaction]"," \u6216 ","[Switch]"," \u5f00\u5173\u6a21\u5757\u7ed3\u5408\u4f7f\u7528\u65f6\uff0c\u52a8\u753b\u6a21\u5757\u53ef\u4ee5\u5bf9\u8be5\u503c\u8fdb\u884c\u8865\u95f4\uff0c\u4f7f\u5176\u5e73\u6ed1\u5730\u4ece 0 \u8fc7\u6e21\u5230 1\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,a.kt)("p",null,"Origami \u901a\u5e38\u5c06\u8fd9\u4e2a 0 \u5230 1 \u7684\u503c\u79f0\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u8fdb\u5ea6"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5c06\u5728\u60a8\u6309\u4e0b\u65f6\u5c06\u56fe\u5c42\u4ece 0 \u7f29\u653e\u5230 1\uff08\u6216 0% \u5230 100%\uff09\uff0c\u5e76\u5e26\u6709\u53cd\u8f6c\u4e14\u6709\u5f39\u6027\u7684\u52a8\u753b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(54818).Z,width:"1506",height:"300"})),(0,a.kt)("h2",{id:"transitions-\u8fc7\u6e21"},"Transitions \u8fc7\u6e21"),(0,a.kt)("p",null,"\u4ece 0 \u5230 1 \u8bbe\u7f6e\u52a8\u753b\u5f88\u7b80\u5355\uff0c\u4f46\u662f\u5728\u5176\u4ed6\u503c\u4e4b\u95f4\u8bbe\u7f6e\u52a8\u753b\u5462\uff1f"),(0,a.kt)("p",null,"[Transition]"," T \u6a21\u5757\u53ef\u4ee5\u8ba9\u4f60\u5c06 0/1 \u8f6c\u6362\u4e3a\u4efb\u4f55 \u5f00\u59cb/\u7ed3\u675f\u503c:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(96545).Z,width:"1508",height:"268"})),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u60f3\u5c06\u56fe\u5c42\u7684\u5bbd\u5ea6\u4ece 100 \u50cf\u7d20\u8bbe\u7f6e\u4e3a 200 \u50cf\u7d20\u3002 \u60a8\u5c06\u8bbe\u7f6e\u8d77\u59cb\u503c 100\uff0c\u7ed3\u675f\u503c 200\u3002\u7ed3\u5408\u4e0a\u9762\u7684 0 \u5230 1 \u52a8\u753b\u503c\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u4e3a\u56fe\u5c42\u5bbd\u5ea6\u8bbe\u7f6e\u52a8\u753b\u3002"),(0,a.kt)("p",null,"\u8fdb\u5ea6\u4e3a 0 \u65f6:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(83712).Z,width:"1494",height:"260"})),(0,a.kt)("p",null,"\u8fdb\u5ea6\u4e3a 0.5 \u65f6:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(24141).Z,width:"1494",height:"266"})),(0,a.kt)("p",null,"\u8fdb\u5ea6\u4e3a 1 \u65f6:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(87026).Z,width:"1500",height:"260"})),(0,a.kt)("p",null,"\u7ed3\u5408\u52a8\u753b\u6a21\u5757\uff0c\u60a8\u73b0\u5728\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5236\u4f5c\u52a8\u753b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(95999).Z,width:"1500",height:"296"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pop Animation \u6d41\u884c\u52a8\u753b \u548c Classic Animation \u7ecf\u5178\u52a8\u753b \u81ea\u52a8\u8865\u95f4\u4efb\u610f\u6570\u5b57\u3002"),(0,a.kt)("li",{parentName:"ul"},"Interaction \u4ea4\u4e92\u3001Switch \u5f00\u5173\u3001Animation \u52a8\u753b\u3001Transition \u8fc7\u6e21 (ISAT) \u662f\u60a8\u5236\u4f5c\u56fe\u5c42\u52a8\u753b\u7684\u57fa\u7840\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u6b65\u591a\u4e2a\u52a8\u753b\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06\u4e00\u4e2a\u52a8\u753b\u6a21\u5757\u8fde\u63a5\u5230\u591a\u4e2a\u8fc7\u6e21\u6a21\u5757\u6765\u5b9e\u73b0\uff0c\u5c06 0-1 \u7684\u8fdb\u5ea6\u6620\u5c04\u5230\u4efb\u4f55 \u5f00\u59cb/\u7ed3\u675f\u503c\u3002")))}u.isMDXComponent=!0},54818:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/animations-1-90a868bdbfad21b153e965ca027910d8.png"},96545:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/animations-2-a56131f5d3e4200f2ddc9cf70af43221.png"},83712:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/animations-3-f061c7d3268ed28919523335d52c110a.png"},24141:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/animations-4-05b3d80f2df2a9639d4ec6b61517ba29.png"},87026:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/animations-5-6e65c9d7a839a9ed9283235290b1e14e.png"},95999:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/animations-6-efb3090a8991e792a3491021b1cf457b.png"}}]);