"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[60642],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>k});var r=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,r,n=function(t,e){if(null==t)return{};var l,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)l=o[r],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)l=o[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var l=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(l),k=n,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return l?r.createElement(m,a(a({ref:e},u),{},{components:l})):r.createElement(m,a({ref:e},u))}));function k(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=l.length,a=new Array(o);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,a[1]=i;for(var s=2;s<o;s++)a[s]=l[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},20821:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=l(87462),n=(l(67294),l(3905));const o={title:"Desktop Scroll \u7535\u8111\u6eda\u52a8",sidebar_position:10,tags:["interaction"]},a="Desktop Scroll",i={unversionedId:"patches/Interaction/Desktop Scroll",id:"patches/Interaction/Desktop Scroll",title:"Desktop Scroll \u7535\u8111\u6eda\u52a8",description:"\u901a\u8fc7\u63a7\u5236\u7b14\u8bb0\u672c\u7535\u8111\u7684\u89e6\u63a7\u677f\u8fdb\u884c\u9875\u9762\u7684\u6eda\u52a8\u64cd\u4f5c\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Interaction/Desktop Scroll.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Desktop Scroll",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Desktop Scroll",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Desktop Scroll.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/en/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667996896,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:10,frontMatter:{title:"Desktop Scroll \u7535\u8111\u6eda\u52a8",sidebar_position:10,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Desktop Multi-Scroll",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Desktop Multi Scroll"},next:{title:"Desktop Multi Scroll",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Multi Scroll"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:4},{value:"Scroll X",id:"scroll-x",level:4},{value:"Scroll Y",id:"scroll-y",level:4},{value:"Settings \u8bbe\u7f6e\u53c2\u6570",id:"settings-\u8bbe\u7f6e\u53c2\u6570",level:4},{value:"Natural Scrolling \u81ea\u7136\u6eda\u52a8",id:"natural-scrolling-\u81ea\u7136\u6eda\u52a8",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"X",id:"x",level:4},{value:"Y",id:"y",level:4}],u={toc:s};function p(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"desktop-scroll"},"Desktop Scroll"),(0,n.kt)("p",null,"\u901a\u8fc7\u63a7\u5236\u7b14\u8bb0\u672c\u7535\u8111\u7684\u89e6\u63a7\u677f\u8fdb\u884c\u9875\u9762\u7684\u6eda\u52a8\u64cd\u4f5c\u3002"),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Desktop Scroll"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Enable ",(0,n.kt)("span",{className:"checkbox-off"})),(0,n.kt)("li",null,"Layer ",(0,n.kt)("span",null,"None")),(0,n.kt)("li",null,"Scroll X ",(0,n.kt)("small",null,(0,n.kt)("span",null,"Off"))),(0,n.kt)("li",null,"Sscroll Y ",(0,n.kt)("small",null,(0,n.kt)("span",null,"Free"))),(0,n.kt)("li",null,"Settings ",(0,n.kt)("span",null,"[...]")),(0,n.kt)("li",null,"Natural Scrolling ",(0,n.kt)("span",{className:"checkbox-off"}))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"X ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"Y ",(0,n.kt)("span",null,"0"))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,n.kt)("h4",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,n.kt)("h4",{id:"scroll-x"},"Scroll X"),(0,n.kt)("h4",{id:"scroll-y"},"Scroll Y"),(0,n.kt)("h4",{id:"settings-\u8bbe\u7f6e\u53c2\u6570"},"Settings \u8bbe\u7f6e\u53c2\u6570"),(0,n.kt)("h4",{id:"natural-scrolling-\u81ea\u7136\u6eda\u52a8"},"Natural Scrolling \u81ea\u7136\u6eda\u52a8")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"x"},"X"),(0,n.kt)("h4",{id:"y"},"Y"))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);