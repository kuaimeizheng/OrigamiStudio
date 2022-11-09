"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[38257],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>y});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(a),y=r,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75515:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Transition Card \u5361\u7247\u8fc7\u6e21",sidebar_position:20,tags:["layer"]},l="Transition Card",o={unversionedId:"patches/Layer/Transition Card",id:"patches/Layer/Transition Card",title:"Transition Card \u5361\u7247\u8fc7\u6e21",description:"Transition Card",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Layer/Transition Card.md",sourceDirName:"patches/Layer",slug:"/patches/Layer/Transition Card",permalink:"/OrigamiStudio/en/docs/patches/Layer/Transition Card",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Layer/Transition Card.md",tags:[{label:"layer",permalink:"/OrigamiStudio/en/docs/tags/layer"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:20,frontMatter:{title:"Transition Card \u5361\u7247\u8fc7\u6e21",sidebar_position:20,tags:["layer"]},sidebar:"patchesSidebar",previous:{title:"Scratch Card \u522e\u522e\u5361",permalink:"/OrigamiStudio/en/docs/patches/Layer/Scratch Card"},next:{title:"Logic \u903b\u8f91",permalink:"/OrigamiStudio/en/docs/category/logic-\u903b\u8f91-1"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Value \u503c",id:"value-\u503c",level:4},{value:"Min \u6700\u5c0f",id:"min-\u6700\u5c0f",level:4},{value:"Max \u6700\u5927",id:"max-\u6700\u5927",level:4},{value:"Opacity Start \u4e0d\u900f\u660e\u5ea6\u5f00\u59cb",id:"opacity-start-\u4e0d\u900f\u660e\u5ea6\u5f00\u59cb",level:4},{value:"Opacity End \u4e0d\u900f\u660e\u5ea6\u7ed3\u675f",id:"opacity-end-\u4e0d\u900f\u660e\u5ea6\u7ed3\u675f",level:4},{value:"Scale Start \u7f29\u653e\u5f00\u59cb",id:"scale-start-\u7f29\u653e\u5f00\u59cb",level:4},{value:"Scale End \u7f29\u653e\u7ed3\u675f",id:"scale-end-\u7f29\u653e\u7ed3\u675f",level:4},{value:"Torelance \u516c\u5dee",id:"torelance-\u516c\u5dee",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:4},{value:"Scale \u7f29\u653e",id:"scale-\u7f29\u653e",level:4}],u={toc:s};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transition-card"},"Transition Card"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Transition Card"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Value ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Min ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Max ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Opacity Start ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Opacity End ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Scale Start ",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Scale End ",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Torelance ",(0,r.kt)("span",null,"1"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Opacity ",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Scale ",(0,r.kt)("span",null,"1"))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"value-\u503c"},"Value \u503c"),(0,r.kt)("h4",{id:"min-\u6700\u5c0f"},"Min \u6700\u5c0f"),(0,r.kt)("h4",{id:"max-\u6700\u5927"},"Max \u6700\u5927"),(0,r.kt)("h4",{id:"opacity-start-\u4e0d\u900f\u660e\u5ea6\u5f00\u59cb"},"Opacity Start \u4e0d\u900f\u660e\u5ea6\u5f00\u59cb"),(0,r.kt)("h4",{id:"opacity-end-\u4e0d\u900f\u660e\u5ea6\u7ed3\u675f"},"Opacity End \u4e0d\u900f\u660e\u5ea6\u7ed3\u675f"),(0,r.kt)("h4",{id:"scale-start-\u7f29\u653e\u5f00\u59cb"},"Scale Start \u7f29\u653e\u5f00\u59cb"),(0,r.kt)("h4",{id:"scale-end-\u7f29\u653e\u7ed3\u675f"},"Scale End \u7f29\u653e\u7ed3\u675f"),(0,r.kt)("h4",{id:"torelance-\u516c\u5dee"},"Torelance \u516c\u5dee")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,r.kt)("h4",{id:"scale-\u7f29\u653e"},"Scale \u7f29\u653e"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);