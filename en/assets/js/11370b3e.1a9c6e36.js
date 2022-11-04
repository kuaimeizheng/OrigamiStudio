"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[53119],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),d=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=d(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:i,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35795:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:5},o="Text Ends With \u6587\u672c\u7ed3\u5c3e",u={unversionedId:"documentation/Text/Text Ends With",id:"documentation/Text/Text Ends With",title:"Text Ends With \u6587\u672c\u7ed3\u5c3e",description:"Determine if some text ends with the given suffix.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Text/Text Ends With.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Ends With",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Ends With",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Ends With.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Split Text \u62c6\u5206\u6587\u672c",permalink:"/OrigamiStudio/en/docs/documentation/Text/Split Text"},next:{title:"Text Input Info \u6587\u672c\u8f93\u5165\u4fe1\u606f",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Input Info"}},l={},d=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Suffix \u540e\u7f00",id:"suffix-\u540e\u7f00",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:d};function s(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text-ends-with-\u6587\u672c\u7ed3\u5c3e"},"Text Ends With \u6587\u672c\u7ed3\u5c3e"),(0,i.kt)("p",null,"Determine if some text ends with the given suffix."),(0,i.kt)("p",null,"\u5224\u65ad\u67d0\u4e9b\u6587\u672c\u5b57\u7b26\u4e32\u662f\u5426\u4ee5\u7279\u5b9a\u7684\u540e\u7f00\u5f00\u5934\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(8961).Z,width:"964",height:"164"})),(0,i.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,i.kt)("p",null,"A text string to evaluate."),(0,i.kt)("p",null,"\u8981\u5224\u65ad\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"suffix-\u540e\u7f00"},"Suffix \u540e\u7f00"),(0,i.kt)("p",null,"A text string that might appear at the end of the given text."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u663e\u793a\u5728\u7279\u5b9a\u6587\u672c\u7684\u7ed3\u5c3e\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"A boolean that is true if the text ends with the suffix."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u6587\u672c\u4ee5\u540e\u7f00\u7ed3\u5c3e\uff0c\u5219\u4e3a\u771f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Starts%20With"},"Text Starts With \u6587\u672c\u5f00\u59cb")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Length"},"Text Length \u6587\u672c\u957f\u77ed")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Size"},"Text Size \u6587\u672c\u5927\u5c0f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Trim%20Text"},"Trim Text \u4fee\u526a\u6587\u672c")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}s.isMDXComponent=!0},8961:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/text-ends-with-0f8c0f7ab9cb7ce882c1b042c5ff6f34.png"}}]);