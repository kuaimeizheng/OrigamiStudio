"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[85752],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=i,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,r(r({ref:e},p),{},{components:n})):a.createElement(h,r({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84127:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Smooth Value \u5e73\u6ed1\u503c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Smooth Value \u5e73\u6ed1\u503c",l={unversionedId:"documentation/Animation/Smooth Value",id:"documentation/Animation/Smooth Value",title:"Smooth Value \u5e73\u6ed1\u503c",description:"For advanced use only \u2014 use the Pop Animation or Classic Animation patch instead.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Animation/Smooth Value.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Smooth Value",permalink:"/OrigamiStudio/en/docs/documentation/Animation/Smooth Value",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Smooth Value.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{title:"Smooth Value \u5e73\u6ed1\u503c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Repeating Animation \u91cd\u590d\u52a8\u753b",permalink:"/OrigamiStudio/en/docs/documentation/Animation/Repeating Animation"},next:{title:"Spring Animation \u5f39\u6027\u52a8\u753b",permalink:"/OrigamiStudio/en/docs/documentation/Animation/Spring Animation"}},u={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Value \u503c",id:"value-\u503c",level:4},{value:"Hysterisis \u6ede\u540e",id:"hysterisis-\u6ede\u540e",level:4},{value:"Reset \u590d\u4f4d",id:"reset-\u590d\u4f4d",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:s};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smooth-value-\u5e73\u6ed1\u503c"},"Smooth Value \u5e73\u6ed1\u503c"),(0,i.kt)("p",null,"For advanced use only \u2014 use the Pop Animation or Classic Animation patch instead."),(0,i.kt)("p",null,"Smooth a value as it changes."),(0,i.kt)("p",null,"\u9ad8\u7ea7\u6a21\u5757\uff0c\u53ef\u7528Pop Animation\u6216Classic Animation\u66ff\u4ee3\u3002"),(0,i.kt)("p",null,"\u5e73\u6ed1\u6539\u53d8\u4e2d\u7684\u503c\u3002"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Smooth Value"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Value",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Hysterisis",(0,i.kt)("span",null,"0.4")),(0,i.kt)("li",null,"Reset ",(0,i.kt)("span",{className:"patch-pulse-preview"},(0,i.kt)("span",{className:"dot"})))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,"Progress",(0,i.kt)("span",null,"0"))))),(0,i.kt)("div",{className:"port-descriptions"},(0,i.kt)("div",{className:"inputs"},(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"value-\u503c"},"Value \u503c"),(0,i.kt)("p",null,"A number to smooth."),(0,i.kt)("p",null,"\u5e73\u6ed1\u503c\u3002"),(0,i.kt)("h4",{id:"hysterisis-\u6ede\u540e"},"Hysterisis \u6ede\u540e"),(0,i.kt)("p",null,"A number from 0-1 that represents the rate at which to smooth the value, where the value in the next frame = (previous frame ",(0,i.kt)("em",{parentName:"p"}," hysterisis) + (current frame ")," (1 - hysterisis)."),(0,i.kt)("p",null,"\u4e00\u4e2a 0-1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u5e73\u6ed1\u503c\u7684\u901f\u7387\uff0c\u5176\u4e2d\u4e0b\u4e00\u5e27\u4e2d\u7684\u503c = (\u524d\u4e00\u5e27 ",(0,i.kt)("em",{parentName:"p"}," \u6ede\u540e) + (\u5f53\u524d\u5e27 ")," (1 - \u6ede\u540e)\u3002"),(0,i.kt)("h3",{id:"reset-\u590d\u4f4d"},"Reset \u590d\u4f4d"),(0,i.kt)("p",null,"A pulse that resets the value to the input value."),(0,i.kt)("p",null,"\u8ba9\u52a8\u753b\u8df3\u56de\u5f00\u59cb\u65f6\u3002")),(0,i.kt)("div",{className:"outputs"},(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"Animated value"),(0,i.kt)("p",null,"\u8fdb\u5ea6\u503c"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")))}c.isMDXComponent=!0}}]);