"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[38453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Repeating Animation + \u91cd\u590d\u52a8\u753b +",sidebar_position:20,tags:["animation"]},o="Repeating Animation +",l={unversionedId:"patches/Animation/Repeating Animation +",id:"patches/Animation/Repeating Animation +",title:"Repeating Animation + \u91cd\u590d\u52a8\u753b +",description:"Repeating Animation +",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Animation/Repeating Animation +.md",sourceDirName:"patches/Animation",slug:"/patches/Animation/Repeating Animation +",permalink:"/OrigamiStudio/en/docs/patches/Animation/Repeating Animation +",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Animation/Repeating Animation +.md",tags:[{label:"animation",permalink:"/OrigamiStudio/en/docs/tags/animation"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:20,frontMatter:{title:"Repeating Animation + \u91cd\u590d\u52a8\u753b +",sidebar_position:20,tags:["animation"]},sidebar:"patchesSidebar",previous:{title:"Pie Progress \u5706\u997c\u8fdb\u5ea6",permalink:"/OrigamiStudio/en/docs/patches/Animation/Pie Progress"},next:{title:"Skeleton \u9aa8\u67b6\u5c4f",permalink:"/OrigamiStudio/en/docs/patches/Animation/Skeleton"}},s={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:4},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf",level:4},{value:"Mirrored \u955c\u50cf",id:"mirrored-\u955c\u50cf",level:4},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"repeating-animation-"},"Repeating Animation +"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Repeating Animation +"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Enable ",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Duration ",(0,r.kt)("span",null)),(0,r.kt)("li",null,"Curve ",(0,r.kt)("span",null,"Linear")),(0,r.kt)("li",null,"Mirrored ",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Reset ",(0,r.kt)("span",{className:"patch-pulse-preview"},(0,r.kt)("span",{className:"dot"})))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Progress",(0,r.kt)("span",null,"0")," ")))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,r.kt)("h4",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,r.kt)("h4",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,r.kt)("h4",{id:"mirrored-\u955c\u50cf"},"Mirrored \u955c\u50cf"),(0,r.kt)("h4",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);