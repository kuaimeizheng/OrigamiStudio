"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[48716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:5},l="Text Replace \u6587\u672c\u66ff\u6362",o={unversionedId:"documentation/Text/Text Replace",id:"documentation/Text/Text Replace",title:"Text Replace \u6587\u672c\u66ff\u6362",description:"Find and replace all occurrences of text within a text string.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Text/Text Replace.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Replace",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Replace",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Replace.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Text Length \u6587\u672c\u957f\u77ed",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Length"},next:{title:"Text Size \u6587\u672c\u5927\u5c0f",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Size"}},c={},u=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Find \u67e5\u627e",id:"find-\u67e5\u627e",level:3},{value:"Replace \u66ff\u6362",id:"replace-\u66ff\u6362",level:3},{value:"Case Sensitive \u533a\u5206\u5927\u5c0f\u5199",id:"case-sensitive-\u533a\u5206\u5927\u5c0f\u5199",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],p={toc:u};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-replace-\u6587\u672c\u66ff\u6362"},"Text Replace \u6587\u672c\u66ff\u6362"),(0,a.kt)("p",null,"Find and replace all occurrences of text within a text string."),(0,a.kt)("p",null,"\u67e5\u627e\u5e76\u66ff\u6362\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u6587\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(88152).Z,width:"1154",height:"221"})),(0,a.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,a.kt)("p",null,"A text string to evaluate."),(0,a.kt)("p",null,"\u5f85\u5904\u7406\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h3",{id:"find-\u67e5\u627e"},"Find \u67e5\u627e"),(0,a.kt)("p",null,"A text string that may appear within the text."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u67e5\u627e\u662f\u5426\u51fa\u73b0\u5728\u6587\u672c\u4e2d\u3002"),(0,a.kt)("h3",{id:"replace-\u66ff\u6362"},"Replace \u66ff\u6362"),(0,a.kt)("p",null,"A text string that will replace all occurrences found within the text."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u66ff\u6362\u5728\u6587\u672c\u4e2d\u627e\u5230\u7684\u6240\u6709\u5339\u914d\u9879\u3002"),(0,a.kt)("h3",{id:"case-sensitive-\u533a\u5206\u5927\u5c0f\u5199"},"Case Sensitive \u533a\u5206\u5927\u5c0f\u5199"),(0,a.kt)("p",null,"A boolean that is true if the search is case sensitive."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5982\u679c\u641c\u7d22\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5219\u4e3a \u771f \u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The replaced text string."),(0,a.kt)("p",null,"\u66ff\u6362\u540e\u7684\u6587\u672c\u5b57\u7b26\u4e32"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Starts%20With"},"Text Starts With \u6587\u672c\u5f00\u59cb")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Ends%20With"},"Text Ends With \u6587\u672c\u7ed3\u5c3e")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}s.isMDXComponent=!0},88152:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/text-replace-935062e3910e098555817a2111a7e42a.png"}}]);