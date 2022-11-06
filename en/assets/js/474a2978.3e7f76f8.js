"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[44725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=l.createContext({}),s=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?l.createElement(k,i(i({ref:t},p),{},{components:r})):l.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=r(87462),n=(r(67294),r(3905));const a={title:"Number Formatter \u6570\u503c\u683c\u5f0f\u5316",sidebar_position:20,tags:["text"]},i="Number Formatter",o={unversionedId:"patches/Text/Number Formatter",id:"patches/Text/Number Formatter",title:"Number Formatter \u6570\u503c\u683c\u5f0f\u5316",description:"\u529f\u80fd\uff1a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/patches/Text/Number Formatter.md",sourceDirName:"patches/Text",slug:"/patches/Text/Number Formatter",permalink:"/OrigamiStudio/en/docs/patches/Text/Number Formatter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Text/Number Formatter.md",tags:[{label:"text",permalink:"/OrigamiStudio/en/docs/tags/text"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667730725,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:20,frontMatter:{title:"Number Formatter \u6570\u503c\u683c\u5f0f\u5316",sidebar_position:20,tags:["text"]},sidebar:"patchesSidebar",previous:{title:"Dynamic Type \u52a8\u6001\u5b57\u4f53",permalink:"/OrigamiStudio/en/docs/patches/Text/Dynamic Type"},next:{title:"Styled Text Builder",permalink:"/OrigamiStudio/en/docs/patches/Text/Styled Text Builder"}},u={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Decimal Places \u5c0f\u6570\u4f4d",id:"decimal-places-\u5c0f\u6570\u4f4d",level:4},{value:"Insert Separator \u63d2\u5165\u5206\u9694\u7b26",id:"insert-separator-\u63d2\u5165\u5206\u9694\u7b26",level:4},{value:"Separator \u5206\u9694\u7b26\u53f7",id:"separator-\u5206\u9694\u7b26\u53f7",level:4},{value:"Insert Symbol \u63d2\u5165\u7b26\u53f7",id:"insert-symbol-\u63d2\u5165\u7b26\u53f7",level:4},{value:"Symbol \u7b26\u53f7",id:"symbol-\u7b26\u53f7",level:4},{value:"Insert \u63d2\u5165",id:"insert-\u63d2\u5165",level:4},{value:"Format \u683c\u5f0f",id:"format-\u683c\u5f0f",level:4},{value:"Currency \u8d27\u5e01",id:"currency-\u8d27\u5e01",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Result \u7ed3\u679c",id:"result-\u7ed3\u679c",level:4}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"number-formatter"},"Number Formatter"),(0,n.kt)("p",null,"\u529f\u80fd\uff1a"),(0,n.kt)("p",null,"5\u4e2a\u540c\u65f6\u6570\u5b57\u8f93\u5165"),(0,n.kt)("p",null,"\u56db\u820d\u4e94\u5165\u5230n\u4f4d\u5c0f\u6570"),(0,n.kt)("p",null,"\u5206\u9694\u6570\u5343"),(0,n.kt)("p",null,"\u5728\u672b\u5c3e\u63d2\u5165\u7b26\u53f7"),(0,n.kt)("p",null,"\u63d2\u5165+\u8868\u793a\u6b63\u503c"),(0,n.kt)("p",null,"\u5e26\u6709\u7f8e\u5143\u3001\u6b27\u5143\u3001\u82f1\u9551\u3001\u65e5\u5143\u548c\u5362\u5e03\u7b26\u53f7\u7684\u8d27\u5e01\u683c\u5f0f"),(0,n.kt)("p",null,"\u77ed\u683c\u5f0f\uff0c\u77ed+\u8d27\u5e01\u683c\u5f0f"),(0,n.kt)("p",null,"\u62fc\u5199\u6570\u5b57"),(0,n.kt)("p",null,"\u652f\u6301\u8d1f\u503c"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Number Formatter"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Value 1 ",(0,n.kt)("span",null,"10...")),(0,n.kt)("li",null,"Value 2 ",(0,n.kt)("span",null,"25...")),(0,n.kt)("li",null,"Value 3 ",(0,n.kt)("span",null,"20...")),(0,n.kt)("li",null,"Value 4 ",(0,n.kt)("span",null,"-1")),(0,n.kt)("li",null,"Value 5 ",(0,n.kt)("span",null,"42...")),(0,n.kt)("li",null,"Decimal Places ",(0,n.kt)("span",null,"2")),(0,n.kt)("li",null,"Insert Separator ",(0,n.kt)("span",{className:"checkbox-off"})),(0,n.kt)("li",null,"Separator ",(0,n.kt)("span",null,",")),(0,n.kt)("li",null,"Insert Symbol ",(0,n.kt)("span",{className:"checkbox-off"})),(0,n.kt)("li",null,"Separator ",(0,n.kt)("span",null,"%")),(0,n.kt)("li",null,'Insert "+" ',(0,n.kt)("span",{className:"checkbox-off"})),(0,n.kt)("li",null,"Format ",(0,n.kt)("span",null,"Default")),(0,n.kt)("li",null,"Currency ",(0,n.kt)("span",null,"USD"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,(0,n.kt)("span",null,"10...")," Result 1")))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"decimal-places-\u5c0f\u6570\u4f4d"},"Decimal Places \u5c0f\u6570\u4f4d"),(0,n.kt)("h4",{id:"insert-separator-\u63d2\u5165\u5206\u9694\u7b26"},"Insert Separator \u63d2\u5165\u5206\u9694\u7b26"),(0,n.kt)("h4",{id:"separator-\u5206\u9694\u7b26\u53f7"},"Separator \u5206\u9694\u7b26\u53f7"),(0,n.kt)("h4",{id:"insert-symbol-\u63d2\u5165\u7b26\u53f7"},"Insert Symbol \u63d2\u5165\u7b26\u53f7"),(0,n.kt)("h4",{id:"symbol-\u7b26\u53f7"},"Symbol \u7b26\u53f7"),(0,n.kt)("h4",{id:"insert-\u63d2\u5165"},"Insert \u63d2\u5165"),(0,n.kt)("h4",{id:"format-\u683c\u5f0f"},"Format \u683c\u5f0f"),(0,n.kt)("h4",{id:"currency-\u8d27\u5e01"},"Currency \u8d27\u5e01")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"result-\u7ed3\u679c"},"Result \u7ed3\u679c"))))}c.isMDXComponent=!0}}]);